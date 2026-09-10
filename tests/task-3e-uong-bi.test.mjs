import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { moneyPageUpgrades } from "../data/seo/money-page-upgrades.mjs";
import { formatPriceDisplay, getRoutePrice } from "../data/seo/pricing-engine.ts";

const canonical = "/xe-ghep-hai-duong-uong-bi";
const upgrade = moneyPageUpgrades["hd-uong-bi"];

test("TASK-3E: MP-022 publishes exactly one canonical Uông Bí money page", () => {
  const asset = seoAssets.find((item) => item.assetId === "MP-022");
  assert.equal(asset?.canonical, canonical);
  assert.equal(asset?.slug, "xe-ghep-hai-duong-uong-bi");
  assert.equal(asset?.dataKey, "hd-uong-bi");
  assert.equal(asset?.status, "PUBLISHED");
  assert.deepEqual(asset?.publicationHistory.map((item) => item.status), ["REGISTERED", "REVIEW", "APPROVED", "PUBLISHED"]);
  assert.equal(seoAssets.filter((item) => item.canonical === canonical).length, 1);
  for (const prohibited of ["/xe-ghep-hai-duong-yen-tu", "/xe-hai-duong-yen-tu", "/xe-hai-duong-uong-bi"]) {
    assert.equal(seoAssets.some((item) => item.canonical === prohibited), false);
  }
});

test("TASK-3E: Uông Bí lookup uses exact verified pricing records", () => {
  const shared = getRoutePrice("Uông Bí", "shared");
  const privateRide = getRoutePrice("Uông Bí", "private");
  assert.equal(shared?.pricingType, "EXACT");
  assert.equal(shared?.status, "VERIFIED");
  assert.equal(shared?.priceMin, 300000);
  assert.equal(formatPriceDisplay(shared), "300.000đ/người");
  assert.equal(privateRide?.pricingType, "EXACT");
  assert.equal(privateRide?.status, "VERIFIED");
  assert.equal(privateRide?.priceMin, 600000);
  assert.equal(formatPriceDisplay(privateRide), "600.000đ/chuyến");
  assert.doesNotMatch(JSON.stringify(upgrade), /Bao xe 4 chỗ|Bao xe 7 chỗ/);
});

test("TASK-3E: Yên Tử and parcel have no implicit numeric inheritance", () => {
  assert.equal(getRoutePrice("Yên Tử", "shared"), undefined);
  assert.equal(getRoutePrice("Yên Tử", "private"), undefined);
  assert.equal(getRoutePrice("Uông Bí", "parcel"), undefined);
  const copy = JSON.stringify(upgrade);
  const yenTuFaq = upgrade.faq.find((item) => item.q === "Giá xe Hải Dương - Yên Tử bao nhiêu?");
  assert.ok(yenTuFaq);
  assert.match(yenTuFaq.a, /không có giá số riêng/i);
  assert.doesNotMatch(yenTuFaq.a, /\d[\d.]*(?:đ|k)(?:\/người|\/chuyến)?/i);
  assert.match(upgrade.endpointBoundary, /Yên Tử/);
  assert.match(copy, /gửi hàng.*chưa có dịch vụ hoặc giá/i);
});

test("TASK-3E: visible FAQ, factual schema, robots, CTA, and published links are aligned", async () => {
  const [pageSource, sitemapSource, routeSource] = await Promise.all([
    readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
    readFile(new URL("../data/routes.ts", import.meta.url), "utf8"),
  ]);
  assert.equal(upgrade.h1, "Xe ghép Hải Dương - Uông Bí");
  assert.match(pageSource, /formatEnginePrice\("Uông Bí", "shared"\)/);
  assert.match(pageSource, /formatEnginePrice\("Uông Bí", "private"\)/);
  assert.match(pageSource, /isUongBiRoute/);
  assert.match(pageSource, /"@type": "FAQPage"/);
  assert.match(upgrade.schemaOfferDescription, /300\.000đ\/người/);
  assert.match(upgrade.schemaOfferDescription, /600\.000đ\/chuyến/);
  assert.match(sitemapSource, /"hd-uong-bi"/);
  assert.match(routeSource, /id:"hd-uong-bi"[^\n]+priceFallbackPolicy:"GOVERNED"/);
  assert.match(JSON.stringify(upgrade), /0987 663 883|Zalo/);
  for (const target of ["/xe-ghep-hai-duong-quang-ninh", "/xe-ghep-hai-duong-ha-long", "/xe-ghep-hai-duong-cam-pha", "/xe-ghep-hai-duong-van-don"]) {
    assert.equal(seoAssets.find((asset) => asset.canonical === target)?.status, "PUBLISHED");
  }
});
