import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { moneyPageUpgrades } from "../data/seo/money-page-upgrades.mjs";
import { getRoutePrice } from "../data/seo/pricing-engine.ts";

test("TASK-3B: Canonical URL is /xe-ghep-hai-duong-ha-long (Asset MP-019) without synonym URLs", () => {
  const mp019 = seoAssets.find((asset) => asset.assetId === "MP-019");
  assert.ok(mp019, "MP-019 must exist in asset registry");
  assert.equal(mp019.canonical, "/xe-ghep-hai-duong-ha-long");
  assert.equal(mp019.status, "PUBLISHED");
  assert.equal(mp019.dataKey, "hd-ha-long");

  // Ensure no synonym URLs are registered
  const synonyms = seoAssets.filter((asset) =>
    asset.canonical === "/xe-hai-duong-ha-long" ||
    asset.canonical === "/xe-hai-duong-di-ha-long" ||
    asset.canonical === "/xe-ghep-hai-duong-bai-chay" ||
    asset.canonical === "/xe-hai-duong-bai-chay"
  );
  assert.equal(synonyms.length, 0, "Synonym URLs must NOT exist");
});

test("TASK-3B: Pricing strictly matches owner_price_sheet_2026_09_09 (Hạ Long 400k/1m, Bãi Cháy 350k/900k)", async () => {
  const hlShared = getRoutePrice("Hạ Long", "shared");
  const hlPrivate = getRoutePrice("Hạ Long", "private");
  const bcShared = getRoutePrice("Bãi Cháy", "shared");
  const bcPrivate = getRoutePrice("Bãi Cháy", "private");

  assert.ok(hlShared, "Hạ Long shared price must exist in pricing-engine");
  assert.ok(hlPrivate, "Hạ Long private price must exist in pricing-engine");
  assert.ok(bcShared, "Bãi Cháy shared price must exist in pricing-engine");
  assert.ok(bcPrivate, "Bãi Cháy private price must exist in pricing-engine");

  assert.equal(hlShared.priceMin, 400000);
  assert.equal(hlShared.priceMax, 400000);
  assert.equal(hlPrivate.priceMin, 1000000);
  assert.equal(hlPrivate.priceMax, 1000000);
  assert.equal(hlPrivate.tollIncluded, false, "tollIncluded must be false for Hạ Long");

  assert.equal(bcShared.priceMin, 350000);
  assert.equal(bcShared.priceMax, 350000);
  assert.equal(bcPrivate.priceMin, 900000);
  assert.equal(bcPrivate.priceMax, 900000);
  assert.equal(bcPrivate.tollIncluded, false, "tollIncluded must be false for Bãi Cháy");

  // Check comparison content in hd-ha-long-gold-content.ts
  const goldSource = await readFile(new URL("../data/seo/hd-ha-long-gold-content.ts", import.meta.url), "utf8");
  assert.match(goldSource, /name:\s*"Khu vực Hạ Long/);
  assert.match(goldSource, /name:\s*"Khu vực Bãi Cháy/);
  assert.match(goldSource, /tollIncluded:\s*false/);
});

test("TASK-3B: Legacy corridor rate (250k) and 4c/7c split (900k/1.1m) are absent from Hạ Long upgrade", async () => {
  const upgrade = moneyPageUpgrades["hd-ha-long"];
  assert.ok(upgrade, "hd-ha-long upgrade must exist");

  const copy = JSON.stringify(upgrade);
  assert.doesNotMatch(copy, /Bao xe 4 chỗ|Bao xe 7 chỗ/);
  assert.match(copy, /400\.000đ\/người/);
  assert.match(copy, /1\.000\.000đ\/chuyến/);
  assert.match(copy, /350\.000đ/);
  assert.match(copy, /900\.000đ/);

  // Check page.tsx rendering for Hạ Long
  const pageSource = await readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8");
  assert.match(pageSource, /isHlRoute/);
});

test("TASK-3B: Parent pillar /xe-ghep-hai-duong-quang-ninh is linked in breadcrumb and support", async () => {
  const upgrade = moneyPageUpgrades["hd-ha-long"];
  assert.equal(upgrade.support.href, "/xe-ghep-hai-duong-quang-ninh");
  assert.match(upgrade.support.label, /Hải Dương - Quảng Ninh/);

  const pageSource = await readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8");
  assert.match(pageSource, /href="\/xe-ghep-hai-duong-quang-ninh"[^>]*>Xe ghép Hải Dương - Quảng Ninh<\/Link>/);
});

test("TASK-3B: Zero unverified operational & tourism claims (ferry, cruise, Sun World guarantee, 24/7, 0đ cọc)", async () => {
  const [upgradeCopy, goldSource, pageSource] = await Promise.all([
    JSON.stringify(moneyPageUpgrades["hd-ha-long"]),
    readFile(new URL("../data/seo/hd-ha-long-gold-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8"),
  ]);

  const combined = upgradeCopy + "\n" + goldSource + "\n" + pageSource;

  // Forbidden operational & tourism claims
  assert.doesNotMatch(combined, /cam kết (?:kịp|đúng) giờ (?:tàu|phà|chuyến tàu)/i);
  assert.doesNotMatch(combined, /bảo hiểm du lịch/i);
  assert.doesNotMatch(combined, /đón tại sảnh khách sạn 100%/i);
  assert.doesNotMatch(combined, /chạy thẳng một mạch không dừng/i);
  assert.doesNotMatch(combined, /24\/7/);
  assert.doesNotMatch(combined, /0đ cọc/i);
  assert.doesNotMatch(combined, /không khói thuốc/i);
  assert.doesNotMatch(combined, /đời mới 100%/i);
  assert.doesNotMatch(combined, /áp dụng đồng bộ cho cả hai chiều|giá hai chiều giống nhau/i);

  // Guidance compliant & exact booking wording
  assert.match(combined, /Đặt trước không mất phí/i);
  assert.match(combined, /thanh toán sau chuyến/i);
  assert.match(combined, /tollIncluded:\s*false|chưa bao gồm vé cầu đường cao tốc/i);
  assert.match(combined, /khoảng 150\.000\s*[-–]\s*200\.000đ trở lên/i);
});
