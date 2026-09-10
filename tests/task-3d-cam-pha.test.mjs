import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { moneyPageUpgrades } from "../data/seo/money-page-upgrades.mjs";
import { formatPriceDisplay, getRoutePrice } from "../data/seo/pricing-engine.ts";

const canonical = "/xe-ghep-hai-duong-cam-pha";
const upgrade = moneyPageUpgrades["hd-cam-pha"];

test("TASK-3D: MP-021 publishes one canonical Cẩm Phả money page", () => {
  const asset = seoAssets.find((item) => item.assetId === "MP-021");
  assert.equal(asset?.canonical, canonical);
  assert.equal(asset?.slug, "xe-ghep-hai-duong-cam-pha");
  assert.equal(asset?.dataKey, "hd-cam-pha");
  assert.equal(asset?.status, "PUBLISHED");
  assert.deepEqual(asset?.publicationHistory.map((item) => item.status), ["REGISTERED", "REVIEW", "APPROVED", "PUBLISHED"]);
  assert.equal(seoAssets.filter((item) => item.canonical === canonical).length, 1);
  for (const prohibited of ["/xe-hai-duong-cam-pha", "/xe-hai-duong-cua-ong", "/xe-ghep-hai-duong-cua-ong"]) {
    assert.equal(seoAssets.some((item) => item.canonical === prohibited), false);
  }
});

test("TASK-3D: Cẩm Phả uses the central exact and range records without a 4/7-seat split", () => {
  const shared = getRoutePrice("Cẩm Phả", "shared");
  const privateRide = getRoutePrice("Cẩm Phả", "private");
  assert.equal(shared?.pricingType, "EXACT");
  assert.equal(shared?.priceMin, 450000);
  assert.equal(formatPriceDisplay(shared), "450.000đ/người");
  assert.equal(privateRide?.pricingType, "RANGE");
  assert.equal(privateRide?.priceMin, 1200000);
  assert.equal(privateRide?.priceMax, 1300000);
  assert.equal(formatPriceDisplay(privateRide), "1.200.000 – 1.300.000đ/chuyến");
  assert.match(JSON.stringify(upgrade), /1\.200\.000 – 1\.300\.000đ\/chuyến/);
  assert.doesNotMatch(JSON.stringify(upgrade), /Bao xe 4 chỗ|Bao xe 7 chỗ/);
});

test("TASK-3D: Cửa Ông preserves its verified shared price while private and parcel stay contact-only", () => {
  const copy = JSON.stringify(upgrade);
  const cuaOngFaq = upgrade.faq.find((item) => item.q === "Giá xe Hải Dương - Cửa Ông bao nhiêu?");
  assert.ok(cuaOngFaq);
  const cuaOngShared = getRoutePrice("Cửa Ông", "shared");
  const cuaOngPrivate = getRoutePrice("Cửa Ông", "private");
  assert.equal(formatPriceDisplay(cuaOngShared), "500.000đ/người");
  assert.equal(cuaOngPrivate?.pricingType, "CONTACT");
  assert.match(cuaOngFaq.a, /500\.000đ\/người/);
  assert.match(cuaOngFaq.a, /Bao xe riêng và gửi hàng chưa có giá/i);
  assert.match(upgrade.endpointBoundary, /Cửa Ông/);
  assert.match(copy, /gửi hàng.*chưa có dịch vụ hoặc giá/i);
  assert.doesNotMatch(copy, /tollIncluded|vé cao tốc/);
});

test("TASK-3D: renderer consumes the pricing engine and keeps parent/sibling links published", async () => {
  const [pageSource, sitemapSource, routeSource] = await Promise.all([
    readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
    readFile(new URL("../data/routes.ts", import.meta.url), "utf8"),
  ]);
  assert.match(pageSource, /formatEnginePrice\("Cẩm Phả", "shared"\)/);
  assert.match(pageSource, /formatEnginePrice\("Cẩm Phả", "private"\)/);
  assert.match(pageSource, /isCamPhaRoute/);
  assert.match(sitemapSource, /"hd-cam-pha"/);
  assert.match(routeSource, /id:"hd-cam-pha"[^\n]+priceFallbackPolicy:"GOVERNED"/);
  for (const target of ["/xe-ghep-hai-duong-quang-ninh", "/xe-ghep-hai-duong-ha-long", "/xe-ghep-hai-duong-van-don"]) {
    assert.equal(seoAssets.find((asset) => asset.canonical === target)?.status, "PUBLISHED");
  }
});
