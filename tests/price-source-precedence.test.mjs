import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  routePricingDataset,
  getRoutePrice,
  formatPriceDisplay,
  PRICING_SOURCE_ID_0909,
  PRICING_SOURCE_ID_PHASE1,
} from "../data/seo/pricing-engine.ts";

test("PRECEDENCE POLICY: Document seo/PRICE_SOURCE_PRECEDENCE.md exists and defines 4-tier hierarchy", async () => {
  const policyDoc = await readFile(new URL("../seo/PRICE_SOURCE_PRECEDENCE.md", import.meta.url), "utf8");
  assert.match(policyDoc, /LATEST VERIFIED ENDPOINT-SPECIFIC SOURCE/, "Must define Tier 1");
  assert.match(policyDoc, /OLDER CORRIDOR-LEVEL VERIFIED SOURCE/, "Must define Tier 2");
  assert.match(policyDoc, /LEGACY IMPLEMENTATION DATA/, "Must define Tier 3");
  assert.match(policyDoc, /UNKNOWN/, "Must define Tier 4");
  assert.match(policyDoc, /owner_price_sheet_2026_09_09/, "Must reference 09/09 sheet as latest verified endpoint source");
  assert.match(policyDoc, /OWNER_VERIFICATION_RECORD_PHASE1\.md/, "Must reference Phase 1 as older corridor source");
  assert.match(policyDoc, /tollIncluded:\s*false/, "Must define tollIncluded: false rule");
});

test("PRECEDENCE TIER 1: All 11 HP endpoints derive strictly from 09/09 dataset", async () => {
  const hpContent = await readFile(new URL("../data/seo/hd-hp-gold-content.ts", import.meta.url), "utf8");
  const expectedEndpoints = [
    "Trung tâm Hải Phòng", "An Dương", "An Lão", "Thủy Nguyên",
    "Sân bay Cát Bi", "Kiến Thụy", "Dương Kinh", "Đồ Sơn",
    "Cát Hải", "Tiên Lãng", "Vĩnh Bảo"
  ];

  for (const name of expectedEndpoints) {
    assert.match(hpContent, new RegExp(`name:\\s*"${name}"`), `Endpoint ${name} must be in hd-hp-gold-content.ts`);
    const sharedRec = getRoutePrice(name, "shared");
    const privateRec = getRoutePrice(name, "private");
    assert.ok(sharedRec, `Missing shared price for ${name}`);
    assert.ok(privateRec, `Missing private price for ${name}`);
    assert.equal(sharedRec.sourceId, PRICING_SOURCE_ID_0909);
    assert.equal(privateRec.sourceId, PRICING_SOURCE_ID_0909);
    assert.equal(sharedRec.status, "VERIFIED");
  }
});

test("PRECEDENCE TIER 1: All 16 QN endpoints derive strictly from 09/09 dataset without 4c/7c fabrication", async () => {
  const qnContent = await readFile(new URL("../data/seo/hd-qn-gold-content.ts", import.meta.url), "utf8");
  const expectedEndpoints = [
    "Đông Triều", "Mạo Khê", "Uông Bí", "Quảng Yên",
    "Bãi Cháy", "Hạ Long", "Cẩm Phả", "Cửa Ông",
    "Vân Đồn", "Ao Tiên", "Ba Chẽ", "Tiên Yên",
    "Đầm Hà", "Bình Liêu", "Hải Hà", "Móng Cái"
  ];

  for (const name of expectedEndpoints) {
    assert.match(qnContent, new RegExp(`name:\\s*"${name}"`), `Endpoint ${name} must be in hd-qn-gold-content.ts`);
  }

  // Verified known endpoints in 09/09
  const expectedFixedPrivate = {
    "Uông Bí": "600.000đ/chuyến",
    "Quảng Yên": "700.000đ/chuyến",
    "Bãi Cháy": "900.000đ/chuyến",
    "Hạ Long": "1.000.000đ/chuyến",
    "Cẩm Phả": "1.200.000 – 1.300.000đ/chuyến",
    "Vân Đồn": "1.500.000đ/chuyến",
  };

  for (const [dest, expectedPrice] of Object.entries(expectedFixedPrivate)) {
    const rec = getRoutePrice(dest, "private");
    assert.ok(rec, `Missing record for ${dest}`);
    assert.equal(formatPriceDisplay(rec), expectedPrice, `Private charter price mismatch for ${dest}`);
  }

  // Distance based (10.000đ/km)
  for (const dest of ["Đông Triều", "Mạo Khê"]) {
    const rec = getRoutePrice(dest, "private");
    assert.ok(rec, `Missing record for ${dest}`);
    assert.equal(formatPriceDisplay(rec), "10.000đ/km", `Expected 10.000đ/km for ${dest}`);
  }

  // 8 far endpoints must be "Liên hệ" (UNKNOWN)
  const contactEndpoints = ["Cửa Ông", "Ao Tiên", "Ba Chẽ", "Tiên Yên", "Đầm Hà", "Bình Liêu", "Hải Hà", "Móng Cái"];
  for (const dest of contactEndpoints) {
    const rec = getRoutePrice(dest, "private");
    assert.ok(rec, `Missing record for ${dest}`);
    assert.equal(formatPriceDisplay(rec), "Liên hệ", `Far endpoint ${dest} must be Liên hệ`);
  }
});

test("PUBLIC UI PRECEDENCE: MoneyLandingPage and app/[slug]/page.tsx do not mix 4c/7c corridor rates on QN", async () => {
  const [componentSource, pageSource] = await Promise.all([
    readFile(new URL("../components/MoneyLandingPage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8"),
  ]);

  // MoneyLandingPage must check isQnRoute and adapt quickPrices and servicePrices
  assert.match(componentSource, /const isQnRoute = route\.slug === "xe-ghep-hai-duong-quang-ninh"/);
  assert.match(componentSource, /\{ label: "Bao xe theo chuyến", value: charterGenericPrice, icon: "group" as const \}/);
  assert.match(componentSource, /charter:\s*isQnRoute\s*\?\s*\[\{\s*label:\s*"Bao xe theo chuyến",\s*value:\s*"Giá theo điểm đến"\s*\}\]/);

  // app/[slug]/page.tsx must provide QN-specific commercialPriceRows
  assert.match(pageSource, /const isQnRoute = route\.slug === "xe-ghep-hai-duong-quang-ninh" \|\| route\.id === "hd-qn"/);
  assert.match(pageSource, /\{ label: "Bao xe theo chuyến", detail: "Giá theo điểm đến", text: "Từ 600\.000đ\/chuyến" \}/);
});

test("OPERATIONAL CLAIM SCRUB: Zero unverified promises in gold content files", async () => {
  const [hpContent, qnContent, registry] = await Promise.all([
    readFile(new URL("../data/seo/hd-hp-gold-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../data/seo/hd-qn-gold-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../data/seo/route-content-registry.ts", import.meta.url), "utf8"),
  ]);

  const combined = hpContent + "\n" + qnContent + "\n" + registry;

  // Forbidden unverified operational promises
  assert.doesNotMatch(combined, /không phát sinh đón ghép thêm khách dọc đường/i);
  assert.doesNotMatch(combined, /chạy trực tiếp không dừng/i);
  assert.doesNotMatch(combined, /dừng nghỉ bất kỳ lúc nào/i);
  assert.doesNotMatch(combined, /hỗ trợ nâng hạ hành lý/i);
  assert.doesNotMatch(combined, /chu đáo cho mẹ và bé/i);
  assert.doesNotMatch(combined, /mỗi khách 1 vali/i);
  assert.doesNotMatch(combined, /căn giờ chính xác để kịp tàu/i);
  assert.doesNotMatch(combined, /đặt xe ghép sớm tối thiểu 2-3 tiếng/i);

  // Obsolete administrative designations
  assert.doesNotMatch(combined, /TX Quảng Yên/i);
  assert.doesNotMatch(combined, /TP Uông Bí/i);
  assert.doesNotMatch(combined, /huyện Vân Đồn/i);
  assert.doesNotMatch(combined, /huyện Cát Hải/i);
});

test("TOLL & PARCEL INTEGRITY: Accurate statements across all gold standard content", async () => {
  const [hpContent, qnContent, registry] = await Promise.all([
    readFile(new URL("../data/seo/hd-hp-gold-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../data/seo/hd-qn-gold-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../data/seo/route-content-registry.ts", import.meta.url), "utf8"),
  ]);

  const combined = hpContent + "\n" + qnContent + "\n" + registry;

  // Toll rules
  assert.match(combined, /tollIncluded:\s*false/);
  assert.doesNotMatch(combined, /đã bao gồm toàn bộ chi phí cầu đường/i);
  assert.doesNotMatch(combined, /trọn gói phí BOT/i);

  // Parcel rules
  assert.match(combined, /150\.000\s*[–-]\s*200\.000đ trở lên/);
});
