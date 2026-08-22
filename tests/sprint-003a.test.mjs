import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { existingPublicUrlBaseline } from "../data/seo/existing-public-url-baseline.mjs";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { moneyPageUpgrades } from "../data/seo/money-page-upgrades.mjs";
import { routeEvidenceByDataKey } from "../data/seo/route-evidence.mjs";
import { phase1OwnerPriceFactsByDataKey } from "../data/seo/route-knowledge/owner-verification.mjs";
import { productionAssetPaths, publicPricePresentation } from "../lib/seo/publication.mjs";

const sprintRouteIds = Object.freeze(["hd-cb", "hd-ha-long"]);
const expectedAmounts = Object.freeze({
  "hd-cb": [250000, 500000, 650000, 150000],
  "hd-ha-long": [250000, 900000, 1100000, 180000],
});

test("SPRINT-003A upgrades MP-004 in place and publishes exactly one new MP-019 URL", () => {
  const mp004 = seoAssets.find((asset) => asset.assetId === "MP-004");
  const mp019 = seoAssets.find((asset) => asset.assetId === "MP-019");
  assert.equal(mp004?.canonical, "/xe-hai-duong-cat-bi");
  assert.equal(mp004?.backfilledExisting, true);
  assert.equal(mp019?.canonical, "/xe-ghep-hai-duong-ha-long");
  assert.equal(mp019?.dataKey, "hd-ha-long");
  assert.equal(mp019?.status, "PUBLISHED");
  assert.equal(mp019?.backfilledExisting, false);
  assert.deepEqual(mp019?.publicationHistory.map((entry) => entry.status), ["REGISTERED", "REVIEW", "APPROVED", "PUBLISHED"]);

  const currentPaths = [
    "/", "/tuyen-xe", "/blog", "/gioi-thieu", "/lien-he", "/chinh-sach-dat-xe", "/an-toan-va-doi-xe",
    ...productionAssetPaths(seoAssets),
  ];
  assert.equal(currentPaths.length, 39);
  assert.deepEqual(new Set(currentPaths), new Set([...existingPublicUrlBaseline, "/xe-ghep-hai-duong-ha-long"]));
});

test("both Wave 2 pages render only traceable VERIFIED_FROM prices", () => {
  const factsByRoute = {
    "hd-cb": phase1OwnerPriceFactsByDataKey["hd-cb"],
    "hd-ha-long": {
      sharedRidePrice: routeEvidenceByDataKey["hd-ha-long"].price,
      charter4SeatPrice: routeEvidenceByDataKey["hd-ha-long"].charter4Price,
      charter7SeatPrice: routeEvidenceByDataKey["hd-ha-long"].charter7Price,
      parcelPrice: routeEvidenceByDataKey["hd-ha-long"].parcelPrice,
    },
  };

  for (const routeId of sprintRouteIds) {
    const facts = Object.values(factsByRoute[routeId]);
    assert.deepEqual(facts.map((fact) => fact.value), expectedAmounts[routeId]);
    for (const fact of facts) {
      assert.equal(fact.status, "VERIFIED");
      assert.equal(fact.priceModel, "VERIFIED_FROM");
      assert.equal(publicPricePresentation(fact).prefix, "Từ");
      assert.ok(fact.sourceType && fact.sourceRef && fact.verifiedAt && fact.verifiedBy);
    }
  }
});

test("Wave 2 copy covers required commercial intent and omits unsupported operations", () => {
  for (const routeId of sprintRouteIds) {
    const upgrade = moneyPageUpgrades[routeId];
    const copy = JSON.stringify(upgrade);
    assert.ok(upgrade);
    assert.doesNotMatch(copy, /–/);
    assert.match(copy, /hai chiều/i);
    assert.match(copy, /đón tận nơi/i);
    assert.match(copy, /trả tận nơi/i);
    assert.match(copy, /đặt trước không mất phí/i);
    assert.match(copy, /thanh toán sau chuyến/i);
    assert.ok(upgrade.decisionRows.length >= 5);
    assert.equal(upgrade.bookingGuide.steps.length, 3);
    assert.ok(upgrade.faq.length >= 8);
    assert.doesNotMatch(copy, /24\/7|\d+\s*chuyến\s*(?:\/|mỗi)\s*ngày|chờ\s*(?:miễn phí\s*)?\d+\s*(?:phút|giờ)|phụ phí\s*\d+/i);
  }

  const catBi = JSON.stringify(moneyPageUpgrades["hd-cb"]);
  assert.doesNotMatch(catBi, /cổng\s*\d+|cửa\s*\d+|delay[^.]{0,80}\d+/i);
  assert.match(catBi, /giờ bay hoặc giờ cần có mặt/i);

  const haLong = moneyPageUpgrades["hd-ha-long"];
  assert.equal(haLong.support.href, "/xe-ghep-hai-duong-quang-ninh");
  assert.match(haLong.endpointIntro, /không xác nhận mọi địa chỉ luôn có xe/i);
  assert.match(haLong.endpointIntro, /không tạo giá riêng cho Bãi Cháy/i);
  assert.doesNotMatch(JSON.stringify({ endpointNames: haLong.endpointNames, endpointIntro: haLong.endpointIntro }), /(?:250\.000|900\.000|1\.100\.000|180\.000)đ/);
});

test("internal links point to existing parent money pages without touching monitored targets", () => {
  assert.equal(moneyPageUpgrades["hd-cb"].support.href, "/xe-ghep-hai-duong-hai-phong");
  assert.equal(moneyPageUpgrades["hd-ha-long"].support.href, "/xe-ghep-hai-duong-quang-ninh");
  for (const routeId of sprintRouteIds) {
    const target = seoAssets.find((asset) => asset.canonical === moneyPageUpgrades[routeId].support.href);
    assert.equal(target?.status, "PUBLISHED");
    assert.equal(target?.assetType, "MONEY_PAGE");
  }
});

test("new route is governed and commercial schema stays descriptive", async () => {
  const routeSource = await readFile(new URL("../data/routes.ts", import.meta.url), "utf8");
  const pageSource = await readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8");
  assert.match(routeSource, /id:"hd-ha-long"[^\n]+slug:"xe-ghep-hai-duong-ha-long"[^\n]+distanceKm:null,durationMinutes:null[^\n]+priceFallbackPolicy:"GOVERNED"/);
  assert.match(pageSource, /category:\s*"Giá bắt đầu"/);
  const commercialOfferSource = pageSource.slice(pageSource.indexOf("const serviceOffers"), pageSource.indexOf("const jsonLd"));
  assert.doesNotMatch(commercialOfferSource.split(": publicSeoPrice")[0], /priceCurrency|\bprice:/);
  assert.doesNotMatch(JSON.stringify(sprintRouteIds.map((id) => moneyPageUpgrades[id])), /"@type":"Article"/);
});
