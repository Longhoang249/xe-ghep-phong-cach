import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { moneyPageUpgrades } from "../data/seo/money-page-upgrades.mjs";
import { formatPriceDisplay, getRoutePrice } from "../data/seo/pricing-engine.ts";

const pillar = "/xe-ghep-hai-duong-quang-ninh";
const core = Object.freeze([
  ["hd-qn", pillar],
  ["hd-uong-bi", "/xe-ghep-hai-duong-uong-bi"],
  ["hd-ha-long", "/xe-ghep-hai-duong-ha-long"],
  ["hd-cam-pha", "/xe-ghep-hai-duong-cam-pha"],
  ["hd-van-don", "/xe-ghep-hai-duong-van-don"],
]);

function publishedAssetFor(dataKey) {
  return seoAssets.find((asset) => asset.dataKey === dataKey && asset.status === "PUBLISHED");
}

test("TASK-4A: Quảng Ninh core inventory is canonical, indexed, and has no supporting phantom pages", async () => {
  const coreAssets = core.map(([dataKey]) => publishedAssetFor(dataKey));
  assert.equal(coreAssets.every(Boolean), true);
  assert.deepEqual(coreAssets.map((asset) => asset.canonical), core.map(([, canonical]) => canonical));
  assert.equal(new Set(coreAssets.map((asset) => asset.assetId)).size, coreAssets.length);
  assert.equal(new Set(coreAssets.map((asset) => asset.canonical)).size, coreAssets.length);

  for (const phantom of ["yen-tu", "cua-ong", "ao-tien", "bai-chay"]) {
    assert.equal(seoAssets.some((asset) => asset.canonical.includes(phantom)), false, `${phantom} must remain supporting-only`);
  }

  const [sitemapSource, inventorySource, robotsSource] = await Promise.all([
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
    readFile(new URL("../seo/url-inventory.json", import.meta.url), "utf8"),
    readFile(new URL("../app/robots.ts", import.meta.url), "utf8"),
  ]);
  const inventory = JSON.parse(inventorySource);
  for (const [dataKey, canonical] of core) {
    assert.match(sitemapSource, new RegExp(`"${dataKey}"`));
    const entry = inventory.urls.find((url) => url.dataKey === dataKey);
    assert.equal(entry?.path, canonical);
    assert.equal(entry?.canonical, `https://xeghepphongcach.com${canonical}`);
    assert.equal(entry?.status, "PUBLISHED");
  }
  assert.match(robotsSource, /userAgent: "\*", allow: "\/"/);
});

test("TASK-4A: pricing engine preserves endpoint and supporting-point semantics", () => {
  const expected = Object.freeze([
    ["Hạ Long", "shared", "EXACT", "400.000đ/người"],
    ["Hạ Long", "private", "EXACT", "1.000.000đ/chuyến"],
    ["Bãi Cháy", "shared", "EXACT", "350.000đ/người"],
    ["Bãi Cháy", "private", "EXACT", "900.000đ/chuyến"],
    ["Cẩm Phả", "shared", "EXACT", "450.000đ/người"],
    ["Cẩm Phả", "private", "RANGE", "1.200.000 – 1.300.000đ/chuyến"],
    ["Cửa Ông", "shared", "EXACT", "500.000đ/người"],
    ["Cửa Ông", "private", "CONTACT", "Liên hệ"],
    ["Vân Đồn", "shared", "EXACT", "500.000đ/người"],
    ["Vân Đồn", "private", "EXACT", "1.500.000đ/chuyến"],
    ["Ao Tiên", "shared", "EXACT", "500.000đ/người"],
    ["Ao Tiên", "private", "CONTACT", "Liên hệ"],
    ["Uông Bí", "shared", "EXACT", "300.000đ/người"],
    ["Uông Bí", "private", "EXACT", "600.000đ/chuyến"],
  ]);

  for (const [destination, service, pricingType, presentation] of expected) {
    const record = getRoutePrice(destination, service);
    assert.equal(record?.pricingType, pricingType, `${destination} ${service}`);
    assert.equal(formatPriceDisplay(record), presentation, `${destination} ${service}`);
  }
  for (const destination of ["Yên Tử", "Cửa Ông", "Ao Tiên", "Uông Bí"]) {
    assert.equal(getRoutePrice(destination, "parcel"), undefined, `${destination} parcel must not acquire a price`);
  }
  assert.equal(getRoutePrice("Yên Tử", "shared"), undefined);
  assert.equal(getRoutePrice("Yên Tử", "private"), undefined);
});

test("TASK-4A: pillar graph reaches every published core endpoint without creating synonym URLs", async () => {
  const [layoutSource, componentSource] = await Promise.all([
    readFile(new URL("../data/seo/money-page-layouts.ts", import.meta.url), "utf8"),
    readFile(new URL("../components/MoneyLandingPage.tsx", import.meta.url), "utf8"),
  ]);
  const blockStart = layoutSource.indexOf('"hd-qn":');
  const endpointLinks = layoutSource.slice(blockStart, layoutSource.indexOf("  }),\n});", blockStart));
  for (const [, canonical] of core.slice(1)) {
    assert.match(endpointLinks, new RegExp(canonical.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.match(endpointLinks, /"Bãi Cháy": "\/xe-ghep-hai-duong-ha-long"/);
  assert.match(endpointLinks, /"Ao Tiên": "\/xe-ghep-hai-duong-van-don"/);
  assert.match(componentSource, /const href = layout\.endpointLinks\?\.\[ep\.name\]/);
  assert.match(componentSource, /endpointCardLink/);
  for (const upgradeId of ["hd-uong-bi", "hd-ha-long", "hd-cam-pha", "hd-van-don"]) {
    assert.equal(moneyPageUpgrades[upgradeId].support.href, pillar, `${upgradeId} must link back to the pillar`);
  }
});

test("TASK-4A: endpoint metadata, supporting copy, schema boundary, and CTA remain differentiated", async () => {
  const upgrades = core.map(([dataKey]) => moneyPageUpgrades[dataKey]);
  assert.equal(new Set(upgrades.map((upgrade) => upgrade.title)).size, upgrades.length);
  assert.equal(new Set(upgrades.map((upgrade) => upgrade.h1)).size, upgrades.length);
  assert.match(moneyPageUpgrades["hd-ha-long"].title, /400\.000đ/);
  assert.doesNotMatch(moneyPageUpgrades["hd-ha-long"].title, /từ 400K/i);
  assert.match(moneyPageUpgrades["hd-cam-pha"].endpointBoundary, /500\.000đ\/người/);
  assert.match(moneyPageUpgrades["hd-cam-pha"].endpointBoundary, /bao xe hoặc gửi hàng riêng đã xác thực/i);
  assert.match(moneyPageUpgrades["hd-van-don"].faq.find((item) => item.q.includes("Cảng Ao Tiên")).a, /500\.000đ\/người/);
  assert.match(moneyPageUpgrades["hd-uong-bi"].endpointBoundary, /không có pricing record riêng/i);
  const [pageSource, registrySource] = await Promise.all([
    readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../data/seo/route-content-registry.ts", import.meta.url), "utf8"),
  ]);
  assert.match(pageSource, /alternates: \{ canonical \}/);
  assert.match(pageSource, /formatEnginePrice\("Cửa Ông", "shared"\)/);
  assert.match(pageSource, /\.\.\.\(isUongBiRoute \? \[\{/);
  assert.match(pageSource, /href=\{siteConfig\.phoneHref\}/);
  assert.match(pageSource, /href=\{zaloUrl\}/);
  assert.match(registrySource, /sharedPriceAmount = sharedPrice\.replace/);
  assert.match(registrySource, /charter4PriceAmount = charter4Price\.replace/);
});
