import assert from "node:assert/strict";
import test from "node:test";
import { existingPublicUrlBaseline } from "../data/seo/existing-public-url-baseline.mjs";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { moneyPageUpgrades } from "../data/seo/money-page-upgrades.mjs";
import { phase1OwnerPriceFactsByDataKey } from "../data/seo/route-knowledge/owner-verification.mjs";
import { productionAssetPaths, publicPricePresentation } from "../lib/seo/publication.mjs";

const upgradedRouteIds = Object.freeze(["hd-hp", "hd-qn"]);

test("SPRINT-002A changes only the two existing money-page owners", () => {
  for (const routeId of upgradedRouteIds) {
    const upgrade = moneyPageUpgrades[routeId];
    const asset = seoAssets.find((item) => item.assetId === upgrade.assetId);
    assert.equal(asset?.assetType, "MONEY_PAGE");
    assert.equal(asset?.status, "PUBLISHED");
    assert.equal(asset?.dataKey, routeId);
    assert.equal(asset?.canonical.startsWith("/xe-"), true);
  }

  const staticPaths = ["/", "/tuyen-xe", "/blog", "/gioi-thieu", "/lien-he", "/chinh-sach-dat-xe", "/an-toan-va-doi-xe"];
  const currentPaths = [...staticPaths, ...productionAssetPaths(seoAssets)].sort();
  assert.deepEqual(currentPaths, [...existingPublicUrlBaseline, "/xe-ghep-hai-duong-ha-long"].sort());
  assert.equal(currentPaths.length, 39);
});

test("all eight commercial amounts retain VERIFIED_FROM semantics", () => {
  for (const routeId of upgradedRouteIds) {
    const prices = phase1OwnerPriceFactsByDataKey[routeId];
    for (const [field, fact] of Object.entries(prices)) {
      assert.equal(fact.status, "VERIFIED", `${routeId}.${field} must be verified`);
      assert.equal(fact.priceModel, "VERIFIED_FROM", `${routeId}.${field} must be a starting price`);
      const presentation = publicPricePresentation(fact);
      assert.equal(presentation.kind, "VERIFIED_FROM");
      assert.equal(presentation.prefix, "Từ");
      assert.equal(typeof presentation.amount, "number");
    }
  }
});

test("money-page copy covers commercial decisions without unsupported rules", () => {
  for (const routeId of upgradedRouteIds) {
    const upgrade = moneyPageUpgrades[routeId];
    const copy = JSON.stringify(upgrade);
    assert.doesNotMatch(copy, /–/, `${upgrade.assetId} contains a user-facing en dash`);
    assert.match(copy, /hai chiều/i);
    assert.match(copy, /đón tận nơi/i);
    assert.match(copy, /trả tận nơi/i);
    assert.match(copy, /đặt trước không mất phí/i);
    assert.match(copy, /thanh toán sau chuyến/i);
    assert.ok(upgrade.decisionRows.length >= 3);
    assert.ok(upgrade.faq.length >= 7);
    assert.match(upgrade.schemaOfferDescription, /giá .*từ/i);
    assert.doesNotMatch(copy, /24\/7|\d+\s*chuyến\s*(?:\/|mỗi)\s*ngày|phụ phí\s*\d+/i);
  }
});

test("MP-003 and MP-005 link to the approved comparison assets", () => {
  assert.equal(moneyPageUpgrades["hd-hp"].support.href, "/blog/di-hai-duong-hai-phong-bang-phuong-tien-gi");
  assert.equal(moneyPageUpgrades["hd-qn"].support.href, "/blog/nhung-chuyen-xe-tu-hai-duong-di-quang-ninh");
  for (const routeId of upgradedRouteIds) {
    const upgrade = moneyPageUpgrades[routeId];
    const target = seoAssets.find((asset) => asset.canonical === upgrade.support.href);
    assert.equal(target?.status, "PUBLISHED");
    assert.equal(target?.assetType, "COMPARISON");
  }
});

test("MP-005 endpoints remain orientation-only and contain no endpoint price", () => {
  const mp005 = moneyPageUpgrades["hd-qn"];
  assert.deepEqual(mp005.endpointNames, [
    "Đông Triều",
    "Uông Bí",
    "Quảng Yên",
    "Hạ Long / Bãi Cháy",
    "Cẩm Phả",
    "Vân Đồn / Ao Tiên",
    "Móng Cái",
  ]);
  const endpointCopy = JSON.stringify({ endpointNames: mp005.endpointNames, directions: mp005.directions });
  assert.doesNotMatch(endpointCopy, /\d{2,}[.]?\d*\s*(?:đ|k|VND)/i);
  assert.doesNotMatch(endpointCopy, /Móng Cái[^.]{0,80}250[.]?000/i);
  assert.match(JSON.stringify(mp005.faq), /Danh sách endpoint chỉ giúp người đọc xác định khu vực/i);
});
