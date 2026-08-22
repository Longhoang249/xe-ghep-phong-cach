import {
  collectKnowledgeFacts,
  legacyPriceFallbackMappings,
  phase1AssetClaims,
  phase1KnowledgeBase,
  phase1ParentRoutes,
  phase1SubRoutes,
} from "./phase1.mjs";

export const knowledgeEvidenceStatuses = Object.freeze(["VERIFIED", "PUBLIC_SOURCE", "ESTIMATE", "UNKNOWN"]);
const traceableStatuses = new Set(["VERIFIED", "PUBLIC_SOURCE", "ESTIMATE"]);

function isFact(value) {
  return Boolean(value && typeof value === "object" && "status" in value && "value" in value);
}

function entriesWithPaths(value, prefix = "") {
  if (isFact(value)) return [{ path: prefix, fact: value }];
  if (Array.isArray(value)) return value.flatMap((item, index) => entriesWithPaths(item, `${prefix}[${index}]`));
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, item]) => entriesWithPaths(item, prefix ? `${prefix}.${key}` : key));
  }
  return [];
}

export function factValueForEvidenceAwareConsumer(fact) {
  if (!isFact(fact) || fact.value == null || !traceableStatuses.has(fact.status)) return null;
  if (!fact.sourceType || !fact.sourceRef || !fact.verifiedAt || !fact.verifiedBy) return null;
  if (fact.status === "ESTIMATE" && !fact.notes) return null;
  return fact.value;
}

export function isEndpointEligibleForPublication(record) {
  return Boolean(record && record.serviceStatus === "CONFIRMED" && record.publicationState !== "DATA_ONLY");
}

export function summarizePhase1KnowledgeBase() {
  const canonicalRouteFacts = collectKnowledgeFacts({ parentRoutes: phase1ParentRoutes, subRoutes: phase1SubRoutes });
  const claimFacts = phase1AssetClaims.map((claim) => claim.evidence);
  const fallbackFacts = legacyPriceFallbackMappings.map((mapping) => mapping.evidence);
  const pricingRuleFacts = collectKnowledgeFacts(phase1KnowledgeBase.pricingRules);
  const allFacts = [...canonicalRouteFacts, ...claimFacts, ...fallbackFacts, ...pricingRuleFacts];
  const evidence = Object.fromEntries(knowledgeEvidenceStatuses.map((status) => [status, allFacts.filter((fact) => fact.status === status).length]));
  const readinessRecords = [...phase1ParentRoutes, ...phase1SubRoutes];
  const readiness = Object.fromEntries(
    ["READY_FOR_CONTENT", "PARTIAL", "DATA_REQUIRED", "DO_NOT_PUBLISH"]
      .map((status) => [status, readinessRecords.filter((record) => record.readiness === status).length]),
  );
  const mappedAssetIds = new Set([
    ...phase1ParentRoutes.flatMap((route) => route.assetIds),
    ...phase1SubRoutes.flatMap((route) => route.existingAssetIds),
  ]);

  return Object.freeze({
    parentRoutes: phase1ParentRoutes.length,
    subRoutes: phase1SubRoutes.length,
    mappedAssets: mappedAssetIds.size,
    canonicalRouteFacts: canonicalRouteFacts.length,
    assetClaimObservations: claimFacts.length,
    fallbackFacts: fallbackFacts.length,
    pricingRuleFacts: pricingRuleFacts.length,
    totalFacts: allFacts.length,
    evidence: Object.freeze(evidence),
    conflicts: phase1KnowledgeBase.conflicts.length,
    fallbackPaths: legacyPriceFallbackMappings.length,
    readiness: Object.freeze(readiness),
  });
}

export function validatePhase1KnowledgeBase() {
  const errors = [];
  const allRouteRecords = [...phase1ParentRoutes, ...phase1SubRoutes];
  const allEntries = entriesWithPaths(phase1KnowledgeBase);
  const allFacts = allEntries.map(({ fact }) => fact);
  const routeIds = phase1ParentRoutes.map((route) => route.routeId);
  const subRouteIds = phase1SubRoutes.map((route) => route.subRouteId);

  if (new Set(routeIds).size !== routeIds.length) errors.push("Parent route IDs must be unique.");
  if (new Set(subRouteIds).size !== subRouteIds.length) errors.push("Sub-route IDs must be unique.");
  if (phase1ParentRoutes.length !== 3) errors.push("Exactly three Phase 1 parent corridors are required.");

  for (const record of allRouteRecords) {
    if (!record.parentCluster || !["CLUSTER-A", "CLUSTER-B", "CLUSTER-C"].includes(record.parentCluster)) {
      errors.push(`${record.routeId || record.subRouteId} has no valid Phase 1 cluster.`);
    }
  }

  for (const { path, fact } of allEntries) {
    if (!knowledgeEvidenceStatuses.includes(fact.status)) errors.push(`${path} has invalid evidence status.`);
    if (/price/i.test(path) && !fact.status) errors.push(`${path} price fact has no evidence status.`);
    if (fact.status !== "UNKNOWN" && factValueForEvidenceAwareConsumer(fact) == null) {
      errors.push(`${path} is ${fact.status} but is not traceable for a consumer.`);
    }
    if (fact.status === "UNKNOWN" && typeof fact.value === "number" && factValueForEvidenceAwareConsumer(fact) !== null) {
      errors.push(`${path} exposes an UNKNOWN numeric value.`);
    }
    if (/(sharedRidePrice|charter4SeatPrice|charter7SeatPrice|parcelPrice)$/.test(path)) {
      if (fact.status === "VERIFIED" && typeof fact.value === "number" && fact.priceModel !== "VERIFIED_FROM") {
        errors.push(`${path} is a verified numeric price without VERIFIED_FROM semantics.`);
      }
      if (fact.status === "UNKNOWN" && fact.priceModel !== "UNKNOWN") {
        errors.push(`${path} is an UNKNOWN price without UNKNOWN priceModel.`);
      }
    }
  }

  for (const subRoute of phase1SubRoutes.filter((route) => route.endpointLifecycle === "CANDIDATE")) {
    if (subRoute.publicationState !== "DATA_ONLY" || subRoute.canonical !== null || subRoute.existingAssetIds.length) {
      errors.push(`${subRoute.subRouteId} candidate must remain data-only with no public asset or canonical.`);
    }
  }

  for (const subRoute of phase1SubRoutes.filter((route) => route.serviceStatus === "NOT_SERVICED")) {
    if (isEndpointEligibleForPublication(subRoute)) errors.push(`${subRoute.subRouteId} is NOT_SERVICED but eligible for publication.`);
  }

  const mappedAssetIds = new Set([
    ...phase1ParentRoutes.flatMap((route) => route.assetIds),
    ...phase1SubRoutes.flatMap((route) => route.existingAssetIds),
  ]);
  if (mappedAssetIds.size !== 11) errors.push(`Expected 11 mapped Phase 1 assets, found ${mappedAssetIds.size}.`);

  if (legacyPriceFallbackMappings.length !== 8) errors.push("All eight legacy price fallback paths must be mapped.");
  for (const mapping of legacyPriceFallbackMappings) {
    if (mapping.evidence.status !== "ESTIMATE") errors.push(`${mapping.fallbackId} must remain ESTIMATE.`);
    if (mapping.allowedForNewAssets !== false) errors.push(`${mapping.fallbackId} must not be reusable by new assets.`);
    if (mapping.remediationStatus !== "DATA_REQUIRED") errors.push(`${mapping.fallbackId} must remain DATA_REQUIRED.`);
  }

  return Object.freeze({ valid: errors.length === 0, errors: Object.freeze(errors), factCount: allFacts.length });
}
