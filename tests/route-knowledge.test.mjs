import test from "node:test";
import assert from "node:assert/strict";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { existingPublicUrlBaseline } from "../data/seo/existing-public-url-baseline.mjs";
import {
  knowledgeFact,
  legacyPriceFallbackMappings,
  phase1AssetClaims,
  phase1ParentRoutes,
  resolvePhase1PriceFacts,
  phase1SubRoutes,
} from "../data/seo/route-knowledge/phase1.mjs";
import {
  factValueForEvidenceAwareConsumer,
  isEndpointEligibleForPublication,
  summarizePhase1KnowledgeBase,
  validatePhase1KnowledgeBase,
} from "../data/seo/route-knowledge/validation.mjs";
import {
  ownerVerifiedFact,
  phase1OwnerPriceFactsByDataKey,
  phase1OwnerPricingRules,
  phase1OwnerServiceFacts,
} from "../data/seo/route-knowledge/owner-verification.mjs";
import { publicPricePresentation } from "../lib/seo/publication.mjs";
import { productionAssetPaths } from "../lib/seo/publication.mjs";

test("A: UNKNOWN numeric facts cannot reach evidence-aware consumers", () => {
  const unknownNumeric = knowledgeFact({
    value: 250000,
    status: "UNKNOWN",
    sourceType: "REPOSITORY",
    sourceRef: "data/routes.ts",
    verifiedAt: "2026-08-21",
    verifiedBy: "repository audit",
    notes: "Observed but not owner verified.",
  });
  assert.equal(factValueForEvidenceAwareConsumer(unknownNumeric), null);
});

test("B: every Knowledge Base price fact has a valid evidence status", () => {
  const validation = validatePhase1KnowledgeBase();
  assert.equal(validation.valid, true, validation.errors.join("\n"));
  assert.equal(validation.factCount, 444);
});

test("C: every parent route and sub-route belongs to a Phase 1 cluster", () => {
  const allowed = new Set(["CLUSTER-A", "CLUSTER-B", "CLUSTER-C"]);
  for (const route of [...phase1ParentRoutes, ...phase1SubRoutes]) {
    assert.equal(allowed.has(route.parentCluster), true, route.routeId || route.subRouteId);
  }
});

test("D: candidate endpoints remain data-only and cannot create public assets", () => {
  const publicAssetKeys = new Set(seoAssets.flatMap((asset) => [asset.assetId, asset.slug, asset.canonical]));
  for (const route of phase1SubRoutes.filter((item) => item.endpointLifecycle === "CANDIDATE")) {
    assert.equal(route.publicationState, "DATA_ONLY");
    assert.equal(route.canonical, null);
    assert.deepEqual(route.existingAssetIds, []);
    assert.equal(publicAssetKeys.has(route.subRouteId), false);
  }
  assert.equal(seoAssets.length, 32);
});

test("E: SPRINT-003A preserves the 38-URL baseline and adds only MP-019", () => {
  const staticPaths = ["/", "/tuyen-xe", "/blog", "/gioi-thieu", "/lien-he", "/chinh-sach-dat-xe", "/an-toan-va-doi-xe"];
  const currentPaths = [...staticPaths, ...productionAssetPaths(seoAssets)].sort();
  assert.deepEqual(currentPaths, [...existingPublicUrlBaseline, "/xe-ghep-hai-duong-ha-long"].sort());
  assert.equal(existingPublicUrlBaseline.length, 38);
  assert.equal(currentPaths.length, 39);
});

test("Phase 1 maps the original assets plus explicitly published MP-019", () => {
  const assetIds = new Set([
    ...phase1ParentRoutes.flatMap((route) => route.assetIds),
    ...phase1SubRoutes.flatMap((route) => route.existingAssetIds),
  ]);
  assert.equal(assetIds.size, 12);
  for (const assetId of assetIds) assert.equal(seoAssets.find((asset) => asset.assetId === assetId)?.status, "PUBLISHED");
});

test("all eight legacy fallback paths remain traceable ESTIMATE and DATA_REQUIRED", () => {
  assert.equal(legacyPriceFallbackMappings.length, 8);
  for (const mapping of legacyPriceFallbackMappings) {
    assert.equal(mapping.evidence.status, "ESTIMATE");
    assert.equal(mapping.remediationStatus, "DATA_REQUIRED");
    assert.equal(mapping.allowedForNewAssets, false);
    assert.notEqual(factValueForEvidenceAwareConsumer(mapping.evidence), null);
  }
});

test("DATA-002 owner facts are VERIFIED with verifier and date", () => {
  const verifiedFacts = [
    ...Object.values(phase1OwnerPriceFactsByDataKey).flatMap((prices) => Object.values(prices)),
    ...Object.values(phase1OwnerServiceFacts),
  ].filter((fact) => fact.status === "VERIFIED");
  assert.equal(verifiedFacts.length, 21);
  for (const fact of verifiedFacts) {
    assert.equal(fact.verifiedBy, "Owner");
    assert.equal(fact.verifiedAt, "2026-08-22");
    assert.equal(fact.sourceType, "OWNER");
    assert.match(fact.sourceRef, /OWNER_VERIFICATION_RECORD_PHASE1|SPRINT-003A Owner brief/);
  }
  const priceFacts = Object.values(phase1OwnerPriceFactsByDataKey).flatMap((prices) => Object.values(prices));
  assert.equal(priceFacts.filter((fact) => fact.priceModel === "VERIFIED_FROM").length, 12);
  assert.equal(priceFacts.filter((fact) => fact.priceModel === "UNKNOWN").length, 4);
  for (const fact of Object.values(phase1OwnerPricingRules)) {
    assert.equal(fact.status, "VERIFIED");
    assert.equal(fact.verifiedAt, "2026-08-22");
  }
});

test("missing prices stay contact-only while later verified values are data-driven", () => {
  const missing = publicPricePresentation(phase1OwnerPriceFactsByDataKey["hp-qn"].sharedRidePrice);
  const laterFilled = publicPricePresentation(ownerVerifiedFact(320000, "Future owner-confirmed fare fixture."));
  const startingFrom = publicPricePresentation(phase1OwnerPriceFactsByDataKey["hd-hp"].sharedRidePrice);
  assert.equal(missing.kind, "CONTACT");
  assert.equal(missing.amount, null);
  assert.equal(laterFilled.kind, "VERIFIED");
  assert.equal(laterFilled.amount, 320000);
  assert.equal(startingFrom.kind, "VERIFIED_FROM");
  assert.equal(startingFrom.prefix, "Từ");
  assert.equal(startingFrom.amount, 250000);
});

test("endpoint prices inherit parent unless a route-specific starting price is explicitly verified", () => {
  const hạLong = resolvePhase1PriceFacts("hd-ha-long");
  assert.equal(hạLong.scope, "INHERITED_PARENT_CORRIDOR");
  assert.equal(hạLong.sourceRecordId, "hd-qn");
  assert.equal(hạLong.prices.sharedRidePrice.priceModel, "VERIFIED_FROM");
  assert.equal(hạLong.prices.sharedRidePrice.value, 250000);
  assert.equal(hạLong.publicationEligible, true);

  const catBi = resolvePhase1PriceFacts("hd-cat-bi");
  assert.equal(catBi.scope, "ENDPOINT_EXISTING_ASSET");
  assert.equal(catBi.sourceRecordId, "hd-cat-bi");
  assert.equal(catBi.prices.sharedRidePrice.value, 300000);
  assert.equal(catBi.prices.charter4SeatPrice.value, 600000);
  assert.equal(catBi.prices.charter7SeatPrice.value, 750000);
  assert.equal(catBi.prices.parcelPrice.value, 150000);
  assert.equal(catBi.publicationEligible, true);
});

test("explicit service and price claims are upgraded while operational rules stay UNKNOWN", () => {
  const verifiedClaims = phase1AssetClaims.filter((claim) => claim.status === "VERIFIED");
  assert.equal(verifiedClaims.length, 36);
  for (const claim of verifiedClaims) {
    assert.equal(claim.evidence.verifiedAt, "2026-08-22");
    assert.equal(claim.evidence.verifiedBy, "Owner");
  }

  const preservedUnknownClaims = phase1AssetClaims.filter((claim) => [
    "schedule",
    "bookingProcess",
    "parcelInputs",
    "parcelRestrictions",
    "directionAvailability",
    "airportRequirements",
    "luggage",
  ].includes(claim.fact));
  assert.equal(preservedUnknownClaims.every((claim) => claim.status === "UNKNOWN"), true);

  for (const record of [...phase1ParentRoutes, ...phase1SubRoutes]) {
    assert.equal(record.operations.operatingHours.status, "UNKNOWN");
    assert.equal(record.operations.bookingLeadTime.status, "UNKNOWN");
    assert.equal(record.operations.waitingPolicy.status, "UNKNOWN");
    assert.equal(record.commercial.surcharges.status, "UNKNOWN");
  }
});

test("NOT_SERVICED endpoints are not eligible for publication", () => {
  assert.equal(isEndpointEligibleForPublication({ serviceStatus: "NOT_SERVICED", publicationState: "DATA_ONLY" }), false);
  assert.equal(isEndpointEligibleForPublication({ serviceStatus: "UNCONFIRMED", publicationState: "DATA_ONLY" }), false);
  assert.equal(isEndpointEligibleForPublication({ serviceStatus: "CONFIRMED", publicationState: "DATA_ONLY" }), false);
  assert.equal(isEndpointEligibleForPublication({ serviceStatus: "CONFIRMED", publicationState: "EXISTING_PUBLISHED" }), true);
});

test("audit summary is deterministic", () => {
  assert.deepEqual(summarizePhase1KnowledgeBase(), {
    parentRoutes: 3,
    subRoutes: 13,
    mappedAssets: 12,
    canonicalRouteFacts: 366,
    assetClaimObservations: 67,
    fallbackFacts: 8,
    pricingRuleFacts: 3,
    totalFacts: 444,
    evidence: { VERIFIED: 101, PUBLIC_SOURCE: 0, ESTIMATE: 8, UNKNOWN: 335 },
    conflicts: 3,
    fallbackPaths: 8,
    readiness: { READY_FOR_CONTENT: 0, PARTIAL: 5, DATA_REQUIRED: 11, DO_NOT_PUBLISH: 0 },
  });
});
