import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { moneyPageUpgrades } from "../data/seo/money-page-upgrades.mjs";
import { getRoutePrice } from "../data/seo/pricing-engine.ts";

test("TASK-3C: Canonical URL is /xe-ghep-hai-duong-van-don (Asset MP-020) without synonym URLs", () => {
  const mp020 = seoAssets.find((asset) => asset.assetId === "MP-020");
  assert.ok(mp020, "MP-020 must exist in asset registry");
  assert.equal(mp020.canonical, "/xe-ghep-hai-duong-van-don");
  assert.equal(mp020.status, "PUBLISHED");
  assert.equal(mp020.dataKey, "hd-van-don");

  // Ensure no synonym URLs are registered
  const synonyms = seoAssets.filter((asset) =>
    asset.canonical === "/xe-hai-duong-van-don" ||
    asset.canonical === "/xe-ghep-hai-duong-ao-tien" ||
    asset.canonical === "/xe-hai-duong-cang-ao-tien" ||
    asset.canonical === "/xe-hai-duong-co-to" ||
    asset.canonical === "/xe-ghep-hai-duong-quan-lan"
  );
  assert.equal(synonyms.length, 0, "Synonym URLs must NOT exist");
});

test("TASK-3C: Pricing strictly matches owner_price_sheet_2026_09_09 (Vân Đồn 500k/1.5m, Ao Tiên 500k/Contact)", async () => {
  const vdShared = getRoutePrice("Vân Đồn", "shared");
  const vdPrivate = getRoutePrice("Vân Đồn", "private");
  const atShared = getRoutePrice("Ao Tiên", "shared");
  const atPrivate = getRoutePrice("Ao Tiên", "private");

  assert.ok(vdShared, "Vân Đồn shared price must exist in pricing-engine");
  assert.ok(vdPrivate, "Vân Đồn private price must exist in pricing-engine");
  assert.ok(atShared, "Ao Tiên shared price must exist in pricing-engine");
  assert.ok(atPrivate, "Ao Tiên private price must exist in pricing-engine");

  assert.equal(vdShared.priceMin, 500000);
  assert.equal(vdShared.priceMax, 500000);
  assert.equal(vdPrivate.priceMin, 1500000);
  assert.equal(vdPrivate.priceMax, 1500000);
  assert.equal(vdPrivate.tollIncluded, false, "tollIncluded must be false for Vân Đồn");

  assert.equal(atShared.priceMin, 500000);
  assert.equal(atShared.priceMax, 500000);
  assert.equal(atPrivate.pricingType, "CONTACT");
  assert.equal(atPrivate.status, "UNKNOWN");

  // Check gold dataset
  const goldSource = await readFile(new URL("../data/seo/hd-van-don-gold-content.ts", import.meta.url), "utf8");
  assert.match(goldSource, /Cảng quốc tế Ao Tiên/);
  assert.match(goldSource, /Huyện Vân Đồn/);
  assert.match(goldSource, /tollIncluded:\s*false/);
});

test("TASK-3C: Zero 4c/7c split and exact 500k/1.5m fares in Vân Đồn upgrade", async () => {
  const upgrade = moneyPageUpgrades["hd-van-don"];
  assert.ok(upgrade, "hd-van-don upgrade must exist");

  const copy = JSON.stringify(upgrade);
  assert.doesNotMatch(copy, /Bao xe 4 chỗ|Bao xe 7 chỗ/);
  assert.match(copy, /500\.000đ\/người/);
  assert.match(copy, /1\.500\.000đ\/chuyến/);

  // Check page.tsx rendering for Vân Đồn
  const pageSource = await readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8");
  assert.match(pageSource, /isVdRoute/);
});

test("TASK-3C: Parent pillar /xe-ghep-hai-duong-quang-ninh is linked in breadcrumb and support", async () => {
  const upgrade = moneyPageUpgrades["hd-van-don"];
  assert.equal(upgrade.support.href, "/xe-ghep-hai-duong-quang-ninh");
  assert.match(upgrade.support.label, /Hải Dương - Quảng Ninh/);

  const pageSource = await readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8");
  assert.match(pageSource, /href="\/xe-ghep-hai-duong-quang-ninh"[^>]*>Xe ghép Hải Dương - Quảng Ninh<\/Link>/);
});

test("TASK-3C: Zero unverified operational & island claims (no guarantee boat timing, no sea journey, 24/7, 0đ cọc)", async () => {
  const [upgradeCopy, goldSource, pageSource] = await Promise.all([
    JSON.stringify(moneyPageUpgrades["hd-van-don"]),
    readFile(new URL("../data/seo/hd-van-don-gold-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8"),
  ]);

  const combined = upgradeCopy + "\n" + goldSource + "\n" + pageSource;

  // Forbidden operational & island claims
  assert.doesNotMatch(combined, /cam kết (?:kịp|đúng) (?:giờ )?tàu/i);
  assert.doesNotMatch(combined, /đảm bảo (?:kịp|đúng) (?:giờ )?tàu/i);
  assert.doesNotMatch(combined, /cung cấp vé tàu cao tốc|bao trọn gói ra đảo/i);
  assert.doesNotMatch(combined, /24\/7/);
  assert.doesNotMatch(combined, /0đ cọc/i);
  assert.doesNotMatch(combined, /không khói thuốc/i);
  assert.doesNotMatch(combined, /đời mới 100%/i);
  assert.doesNotMatch(combined, /áp dụng đồng bộ cho cả hai chiều|giá hai chiều giống nhau/i);

  // Guidance compliant & exact booking wording
  assert.match(combined, /Đặt trước không mất phí/i);
  assert.match(combined, /thanh toán sau chuyến/i);
  assert.match(combined, /tollIncluded:\s*false|chưa bao gồm vé cầu đường cao tốc/i);
  assert.match(combined, /cung cấp giờ tàu dự kiến/i);
});
