import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { moneyPageUpgrades } from "../data/seo/money-page-upgrades.mjs";
import { getRoutePrice } from "../data/seo/pricing-engine.ts";

test("TASK-3A: Canonical URL is /xe-hai-duong-cat-bi (Asset MP-004) without synonym URLs", () => {
  const mp004 = seoAssets.find((asset) => asset.assetId === "MP-004");
  assert.ok(mp004, "MP-004 must exist in asset registry");
  assert.equal(mp004.canonical, "/xe-hai-duong-cat-bi");
  assert.equal(mp004.status, "PUBLISHED");
  assert.equal(mp004.dataKey, "hd-cb");

  // Ensure no synonym URLs are registered
  const synonyms = seoAssets.filter((asset) =>
    asset.canonical === "/xe-hai-duong-san-bay-cat-bi" ||
    asset.canonical === "/xe-ghep-hai-duong-cat-bi" ||
    asset.canonical === "/xe-ghep-hai-duong-san-bay-cat-bi"
  );
  assert.equal(synonyms.length, 0, "Synonym URLs must NOT exist");
});

test("TASK-3A: Pricing strictly matches owner_price_sheet_2026_09_09 (300k ghép, 550k bao xe)", async () => {
  const cbShared = getRoutePrice("Sân bay Cát Bi", "shared");
  const cbPrivate = getRoutePrice("Sân bay Cát Bi", "private");

  assert.ok(cbShared, "Cát Bi shared price must exist in pricing-engine");
  assert.ok(cbPrivate, "Cát Bi private price must exist in pricing-engine");

  assert.equal(cbShared.priceMin, 300000);
  assert.equal(cbShared.priceMax, 300000);

  assert.equal(cbPrivate.priceMin, 550000);
  assert.equal(cbPrivate.priceMax, 550000);
  assert.equal(cbPrivate.tollIncluded, false, "tollIncluded must be false");

  // Verify dynamic endpoint rows match pricing engine in hd-cat-bi-gold-content.ts
  const goldSource = await readFile(new URL("../data/seo/hd-cat-bi-gold-content.ts", import.meta.url), "utf8");
  assert.match(goldSource, /name:\s*"Ga Đi Sân bay Cát Bi"/);
  assert.match(goldSource, /name:\s*"Ga Đến Sân bay Cát Bi"/);
  assert.match(goldSource, /tollIncluded:\s*false/);
});

test("TASK-3A: Legacy prices (600k, 750k) and 4c/7c split are completely absent from Cát Bi upgrade", async () => {
  const upgrade = moneyPageUpgrades["hd-cb"];
  assert.ok(upgrade, "hd-cb upgrade must exist");

  const copy = JSON.stringify(upgrade);
  assert.doesNotMatch(copy, /(?:600\.000|750\.000)đ/);
  assert.doesNotMatch(copy, /Bao xe 4 chỗ|Bao xe 7 chỗ/);
  assert.match(copy, /300\.000đ\/người/);
  assert.match(copy, /550\.000đ\/chuyến/);

  // Check page.tsx rendering for Cát Bi
  const pageSource = await readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8");
  assert.match(pageSource, /isCbRoute/);
  assert.doesNotMatch(pageSource, /300\.000đ\/người[\s\S]{0,100}(?:600\.000|750\.000)đ/);
});

test("TASK-3A: Parent pillar /xe-ghep-hai-duong-hai-phong is linked in breadcrumb and support", async () => {
  const upgrade = moneyPageUpgrades["hd-cb"];
  assert.equal(upgrade.support.href, "/xe-ghep-hai-duong-hai-phong");
  assert.match(upgrade.support.label, /Hải Dương - Hải Phòng/);

  const pageSource = await readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8");
  assert.match(pageSource, /href="\/xe-ghep-hai-duong-hai-phong"[^>]*>Xe ghép Hải Dương - Hải Phòng<\/Link>/);
});

test("TASK-3A: Zero unverified operational claims and airport fee scrubbed (Task 3A.1)", async () => {
  const [upgradeCopy, goldSource, pageSource] = await Promise.all([
    JSON.stringify(moneyPageUpgrades["hd-cb"]),
    readFile(new URL("../data/seo/hd-cat-bi-gold-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8"),
  ]);

  const combined = upgradeCopy + "\n" + goldSource + "\n" + pageSource;

  // Forbidden operational claims & airport fees
  assert.doesNotMatch(combined, /chờ\s*(?:miễn phí\s*)?(?:khi\s*)?(?:hoãn|delay)\s*\d+/i);
  assert.doesNotMatch(combined, /đền bù|bồi thường\s*(?:lỡ|trễ|muộn)\s*chuyến bay/i);
  assert.doesNotMatch(combined, /cam kết (?:kịp|đúng) giờ bay 100%/i);
  assert.doesNotMatch(combined, /24\/7/);
  assert.doesNotMatch(combined, /0đ cọc/i);
  assert.doesNotMatch(combined, /không khói thuốc/i);
  assert.doesNotMatch(combined, /đời mới 100%/i);
  assert.doesNotMatch(combined, /vé sảnh|phí sảnh|vé vào cổng sảnh|vé vào sảnh/i);
  assert.doesNotMatch(combined, /đúng sảnh ga đi T1 để kịp chuyến/i);
  assert.doesNotMatch(combined, /đón tại sảnh ga đến T1 sau khi máy bay hạ cánh/i);
  assert.doesNotMatch(combined, /hỗ trợ hành lý/i);
  assert.doesNotMatch(combined, /xác nhận xe và tài xế trước giờ đón/i);
  assert.doesNotMatch(combined, /xe và thời gian được sắp xếp theo khung giờ bay/i);
  assert.doesNotMatch(combined, /áp dụng đồng bộ cho cả hai chiều/i);
  assert.doesNotMatch(combined, /không mất phí đặt cọc/i);

  // Guidance compliant & exact booking wording
  assert.match(combined, /cung cấp điểm đón.+ngày đi và giờ bay để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp/i);
  assert.match(combined, /Đặt trước không mất phí/i);
  assert.match(combined, /thanh toán sau chuyến/i);
  assert.match(combined, /tollIncluded:\s*false|chưa bao gồm vé cầu đường cao tốc/i);
});

