import { seoAssets } from "../../data/seo/asset-registry.mjs";

export const NEUTRAL_PRICE_MESSAGE = "Liên hệ xác nhận giá theo điểm đón/trả.";

export function isPublishedAsset(asset) {
  return Boolean(asset && asset.status === "PUBLISHED");
}

export function publishedAssets(assetType, assets = seoAssets) {
  return assets.filter((asset) => isPublishedAsset(asset) && (!assetType || asset.assetType === assetType));
}

export function findPublishedAssetBySlug(slug, assetType, assets = seoAssets) {
  return publishedAssets(assetType, assets).find((asset) => asset.slug === slug) || null;
}

export function productionAssetPaths(assets = seoAssets) {
  return publishedAssets(undefined, assets).map((asset) => asset.canonical);
}

export function filterRecordsByPublishedAssets(records, assetType, recordKey, assets = seoAssets) {
  const keys = new Set(publishedAssets(assetType, assets).map((asset) => asset.dataKey));
  return records.filter((record) => keys.has(recordKey(record)));
}

export function publicEvidenceValue(fact, { allowEstimate = true } = {}) {
  if (!fact || fact.value === null || fact.value === undefined) return null;
  const traceable = Boolean(fact.sourceType && fact.sourceRef && fact.verifiedAt && fact.verifiedBy);
  if (!traceable) return null;
  if (fact.status === "VERIFIED" || fact.status === "PUBLIC_SOURCE") return fact.value;
  if (allowEstimate && fact.status === "ESTIMATE" && fact.notes) return fact.value;
  return null;
}

export function publicPricePresentation(fact) {
  const value = publicEvidenceValue(fact);
  if (typeof value !== "number") return Object.freeze({ kind: "CONTACT", text: NEUTRAL_PRICE_MESSAGE, amount: null, prefix: null });
  return Object.freeze({
    kind: fact.priceModel === "VERIFIED_FROM" ? "VERIFIED_FROM" : fact.status === "ESTIMATE" ? "ESTIMATE" : "VERIFIED",
    text: null,
    amount: value,
    prefix: fact.priceModel === "VERIFIED_FROM" ? "Từ" : null,
  });
}

function isTraceableVerifiedVariable(fact) {
  return Boolean(
    fact
    && fact.status === "VERIFIED"
    && fact.value == null
    && fact.sourceType
    && fact.sourceRef
    && fact.verifiedAt
    && fact.verifiedBy
    && fact.notes,
  );
}

function backfilledEvidenceValue(fact, legacyValue) {
  if (isTraceableVerifiedVariable(fact)) return null;
  return publicEvidenceValue(fact) ?? legacyValue;
}

export function allowsFormulaPriceFallback(route) {
  return !route || route.priceFallbackPolicy !== "GOVERNED";
}

/**
 * Existing backfilled assets keep their current values during TECH-001.
 * A future asset receives only evidence-approved facts and can never enable
 * distance-derived price fallbacks.
 */
export function governRouteForPublication(route, asset, evidence) {
  if (asset.backfilledExisting) {
    return Object.freeze({
      ...route,
      sharedPrice: backfilledEvidenceValue(evidence?.price, route.sharedPrice),
      private4Price: backfilledEvidenceValue(evidence?.charter4Price, route.private4Price),
      private7Price: backfilledEvidenceValue(evidence?.charter7Price, route.private7Price),
      parcelPrice: backfilledEvidenceValue(evidence?.parcelPrice, route.parcelPrice),
      priceFallbackPolicy: "LEGACY_FORMULA",
    });
  }

  return Object.freeze({
    ...route,
    sharedPrice: publicEvidenceValue(evidence?.price),
    private4Price: publicEvidenceValue(evidence?.charter4Price),
    private7Price: publicEvidenceValue(evidence?.charter7Price),
    parcelPrice: publicEvidenceValue(evidence?.parcelPrice),
    distanceKm: publicEvidenceValue(evidence?.distance),
    durationMinutes: publicEvidenceValue(evidence?.duration),
    priceFallbackPolicy: "GOVERNED",
  });
}

export function assertValidRegistry(assets = seoAssets) {
  const assetIds = new Set();
  const canonicals = new Set();
  for (const asset of assets) {
    if (assetIds.has(asset.assetId)) throw new Error(`Duplicate assetId: ${asset.assetId}`);
    if (canonicals.has(asset.canonical)) throw new Error(`Duplicate canonical: ${asset.canonical}`);
    if (!asset.canonical.startsWith("/")) throw new Error(`Canonical must be root-relative: ${asset.assetId}`);
    if (asset.status === "PUBLISHED" && !asset.slug) throw new Error(`Published asset has no slug: ${asset.assetId}`);
    if (asset.status === "PUBLISHED" && !asset.backfilledExisting && !asset.publishedAt) {
      throw new Error(`New published asset has no publishedAt: ${asset.assetId}`);
    }
    assetIds.add(asset.assetId);
    canonicals.add(asset.canonical);
  }
  return true;
}
