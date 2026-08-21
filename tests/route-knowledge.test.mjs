import test from "node:test";
import assert from "node:assert/strict";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { existingPublicUrlBaseline } from "../data/seo/existing-public-url-baseline.mjs";
import {
  knowledgeFact,
  legacyPriceFallbackMappings,
  phase1ParentRoutes,
  phase1SubRoutes,
} from "../data/seo/route-knowledge/phase1.mjs";
import {
  factValueForEvidenceAwareConsumer,
  summarizePhase1KnowledgeBase,
  validatePhase1KnowledgeBase,
} from "../data/seo/route-knowledge/validation.mjs";
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
  assert.equal(validation.factCount, 401);
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
  assert.equal(seoAssets.length, 31);
});

test("E: current sitemap production paths remain the exact 38-URL baseline", () => {
  const staticPaths = ["/", "/tuyen-xe", "/blog", "/gioi-thieu", "/lien-he", "/chinh-sach-dat-xe", "/an-toan-va-doi-xe"];
  const currentPaths = [...staticPaths, ...productionAssetPaths(seoAssets)].sort();
  assert.deepEqual(currentPaths, [...existingPublicUrlBaseline].sort());
  assert.equal(existingPublicUrlBaseline.length, 38);
});

test("Phase 1 maps all 11 approved assets without changing publication state", () => {
  const assetIds = new Set([
    ...phase1ParentRoutes.flatMap((route) => route.assetIds),
    ...phase1SubRoutes.flatMap((route) => route.existingAssetIds),
  ]);
  assert.equal(assetIds.size, 11);
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

test("audit summary is deterministic", () => {
  assert.deepEqual(summarizePhase1KnowledgeBase(), {
    parentRoutes: 3,
    subRoutes: 13,
    mappedAssets: 11,
    canonicalRouteFacts: 334,
    assetClaimObservations: 59,
    fallbackFacts: 8,
    totalFacts: 401,
    evidence: { VERIFIED: 0, PUBLIC_SOURCE: 0, ESTIMATE: 8, UNKNOWN: 393 },
    conflicts: 3,
    fallbackPaths: 8,
    readiness: { READY_FOR_CONTENT: 0, PARTIAL: 0, DATA_REQUIRED: 16, DO_NOT_PUBLISH: 0 },
  });
});
