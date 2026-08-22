import assert from "node:assert/strict";
import test from "node:test";
import { existingPublicUrlBaseline } from "../data/seo/existing-public-url-baseline.mjs";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { seoClusterGraph } from "../data/seo/cluster-graph.mjs";
import {
  allowsFormulaPriceFallback,
  assertValidRegistry,
  filterRecordsByPublishedAssets,
  findPublishedAssetBySlug,
  governRouteForPublication,
  isPublishedAsset,
  productionAssetPaths,
  publicPricePresentation,
} from "../lib/seo/publication.mjs";

const corePaths = [
  "/",
  "/tuyen-xe",
  "/blog",
  "/gioi-thieu",
  "/lien-he",
  "/chinh-sach-dat-xe",
  "/an-toan-va-doi-xe",
];

const fixtureAsset = (status) => ({
  assetId: `MP-FIXTURE-${status}`,
  assetType: "MONEY_PAGE",
  slug: `fixture-${status.toLowerCase()}`,
  cluster: "CLUSTER-A",
  status,
  legacy: false,
  dataKey: `fixture-${status.toLowerCase()}`,
  canonical: `/fixture-${status.toLowerCase()}`,
  publishedAt: status === "PUBLISHED" ? "2026-08-21" : null,
  lastReviewedAt: null,
  backfilledExisting: false,
});

test("A: raw route data without a PUBLISHED asset cannot enter production paths", () => {
  const registeredRoute = { id: "hd-hp", slug: "xe-ghep-hai-duong-hai-phong" };
  const rawRouteOnly = { id: "raw-only", slug: "raw-route-without-asset" };
  const discoverableRoutes = filterRecordsByPublishedAssets(
    [registeredRoute, rawRouteOnly],
    "MONEY_PAGE",
    (route) => route.id,
    seoAssets,
  );
  const before = productionAssetPaths(seoAssets);
  const afterRawDataAddition = productionAssetPaths(seoAssets);
  assert.deepEqual(discoverableRoutes, [registeredRoute]);
  assert.deepEqual(afterRawDataAddition, before);
  assert.equal(afterRawDataAddition.includes(`/${rawRouteOnly.slug}`), false);
});

test("B: REVIEW assets are not production pages", () => {
  const review = fixtureAsset("REVIEW");
  assert.equal(isPublishedAsset(review), false);
  assert.equal(findPublishedAssetBySlug(review.slug, "MONEY_PAGE", [review]), null);
  assert.deepEqual(productionAssetPaths([review]), []);
});

test("C: APPROVED is not PUBLISHED", () => {
  const approved = fixtureAsset("APPROVED");
  assert.equal(isPublishedAsset(approved), false);
  assert.deepEqual(productionAssetPaths([approved]), []);
});

test("D: PUBLISHED assets can enter the production flow", () => {
  const published = fixtureAsset("PUBLISHED");
  assert.equal(isPublishedAsset(published), true);
  assert.equal(findPublishedAssetBySlug(published.slug, "MONEY_PAGE", [published]), published);
  assert.deepEqual(productionAssetPaths([published]), [published.canonical]);
});

test("E: new assets cannot expose UNKNOWN numeric prices or distance fallbacks", () => {
  const published = fixtureAsset("PUBLISHED");
  const rawRoute = {
    id: published.dataKey,
    slug: published.slug,
    distanceKm: 100,
    durationMinutes: 120,
    sharedPrice: 250000,
    private4Price: null,
    private7Price: null,
    parcelPrice: null,
  };
  const unknownPrice = { value: 250000, status: "UNKNOWN" };
  const governed = governRouteForPublication(rawRoute, published, { price: unknownPrice });
  const presentation = publicPricePresentation(unknownPrice);

  assert.equal(governed.sharedPrice, null);
  assert.equal(governed.distanceKm, null);
  assert.equal(governed.priceFallbackPolicy, "GOVERNED");
  assert.equal(allowsFormulaPriceFallback(governed), false);
  assert.equal(presentation.kind, "CONTACT");
  assert.equal(presentation.amount, null);
  assert.equal(presentation.prefix, null);
  assert.match(presentation.text, /Liên hệ xác nhận giá/);
});

test("evidence statuses cannot become public without traceable provenance", () => {
  const incompleteVerified = publicPricePresentation({ value: 250000, status: "VERIFIED" });
  const traceableEstimate = publicPricePresentation({
    value: 250000,
    status: "ESTIMATE",
    sourceType: "PUBLIC_AUTHORITY",
    sourceRef: "map-source-id",
    verifiedAt: "2026-08-21",
    verifiedBy: "Long",
    notes: "Explicitly approved estimate.",
  });
  assert.equal(incompleteVerified.kind, "CONTACT");
  assert.equal(traceableEstimate.kind, "ESTIMATE");
  assert.equal(traceableEstimate.amount, 250000);
});

test("owner-verified prices can safely replace a backfilled value", () => {
  const published = { ...fixtureAsset("PUBLISHED"), backfilledExisting: true };
  const rawRoute = { sharedPrice: null, private4Price: null, private7Price: null, parcelPrice: null };
  const verifiedPrice = {
    value: 250000,
    status: "VERIFIED",
    sourceType: "OWNER_CONFIRMATION",
    sourceRef: "OWNER_VERIFICATION_RECORD_PHASE1.md",
    verifiedAt: "2026-08-21",
    verifiedBy: "Owner",
    notes: "Confirmed stored price.",
  };
  const governed = governRouteForPublication(rawRoute, published, { price: verifiedPrice });
  assert.equal(governed.sharedPrice, 250000);
  assert.equal(governed.priceFallbackPolicy, "LEGACY_FORMULA");
});

test("a verified variable price clears a legacy numeric value", () => {
  const published = { ...fixtureAsset("PUBLISHED"), backfilledExisting: true };
  const variablePrice = {
    value: null,
    status: "VERIFIED",
    sourceType: "OWNER_CONFIRMATION",
    sourceRef: "owner-record",
    verifiedAt: "2026-08-21",
    verifiedBy: "Owner",
    notes: "No fixed price; quote per trip.",
  };
  const governed = governRouteForPublication({ sharedPrice: 250000 }, published, { price: variablePrice });
  assert.equal(governed.sharedPrice, null);
});

test("F: migration baseline remains intact and SPRINT-003A adds exactly one governed URL", () => {
  const migratedPaths = [...corePaths, ...productionAssetPaths(seoAssets)];
  const expectedPaths = [...existingPublicUrlBaseline, "/xe-ghep-hai-duong-ha-long"];
  assert.equal(assertValidRegistry(seoAssets), true);
  assert.equal(seoAssets.length, 32);
  assert.equal(seoAssets.filter((asset) => asset.assetType === "MONEY_PAGE").length, 19);
  assert.equal(seoAssets.filter((asset) => asset.assetType !== "MONEY_PAGE").length, 13);
  assert.equal(seoAssets.filter((asset) => asset.legacy).length, 20);
  assert.equal(seoAssets.filter((asset) => !asset.legacy).length, 12);
  assert.equal(migratedPaths.length, 39);
  assert.deepEqual(new Set(migratedPaths), new Set(expectedPaths));
  assert.equal(existingPublicUrlBaseline.every((path) => migratedPaths.includes(path)), true);
});

test("cluster graph freezes OTHER and declares all three Phase 1 clusters", () => {
  assert.equal(seoClusterGraph.OTHER.frozen, true);
  assert.equal(seoClusterGraph["CLUSTER-A"].parentAsset, "MP-003");
  assert.equal(seoClusterGraph["CLUSTER-B"].parentAsset, "MP-005");
  assert.equal(seoClusterGraph["CLUSTER-C"].parentAsset, "MP-006");
});
