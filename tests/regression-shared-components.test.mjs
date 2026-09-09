import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import {
  getRoutePrice,
  formatPriceDisplay,
} from "../data/seo/pricing-engine.ts";

test("REGRESSION: moneyPageLayouts only opts in hd-hp and hd-qn", async () => {
  const layoutSource = await readFile(new URL("../data/seo/money-page-layouts.ts", import.meta.url), "utf8");
  const optIns = [...layoutSource.matchAll(/^ {2}"([^"]+)": Object\.freeze\(/gm)].map((match) => match[1]);
  assert.deepEqual(optIns, ["hd-hp", "hd-qn"], "Only hd-hp and hd-qn should have scan-first layouts");
  assert.doesNotMatch(layoutSource, /"(?:hd-cb|hd-ha-long)": Object\.freeze/);
});

test("REGRESSION: hd-hp endpoints are exactly 11 and all have dynamic verified prices", async () => {
  const goldContentSource = await readFile(new URL("../data/seo/hd-hp-gold-content.ts", import.meta.url), "utf8");
  
  const expectedEndpoints = [
    { id: "trung-tam", name: "Trung tâm Hải Phòng", shared: "250.000đ/người", private: "500.000đ/chuyến" },
    { id: "an-duong", name: "An Dương", shared: "250.000đ/người", private: "500.000đ/chuyến" },
    { id: "an-lao", name: "An Lão", shared: "250.000đ/người", private: "500.000đ/chuyến" },
    { id: "thuy-nguyen", name: "Thủy Nguyên", shared: "300.000đ/người", private: "500.000 – 550.000đ/chuyến" },
    { id: "cat-bi", name: "Sân bay Cát Bi", shared: "300.000đ/người", private: "550.000đ/chuyến" },
    { id: "kien-thuy", name: "Kiến Thụy", shared: "300.000 – 350.000đ/người", private: "550.000 – 600.000đ/chuyến" },
    { id: "duong-kinh", name: "Dương Kinh", shared: "300.000 – 350.000đ/người", private: "550.000 – 600.000đ/chuyến" },
    { id: "do-son", name: "Đồ Sơn", shared: "350.000 – 400.000đ/người", private: "650.000 – 700.000đ/chuyến" },
    { id: "cat-hai", name: "Cát Hải", shared: "350.000 – 400.000đ/người", private: "650.000 – 700.000đ/chuyến" },
    { id: "tien-lang", name: "Tiên Lãng", shared: "300.000đ/người", private: "10.000đ/km" },
    { id: "vinh-bao", name: "Vĩnh Bảo", shared: "300.000đ/người", private: "10.000đ/km" },
  ];

  for (const exp of expectedEndpoints) {
    assert.match(goldContentSource, new RegExp(`id:\\s*"${exp.id}"`), `Endpoint ${exp.id} must exist in hd-hp-gold-content`);
    assert.match(goldContentSource, new RegExp(`name:\\s*"${exp.name}"`), `Endpoint name ${exp.name} must exist`);

    const sharedRecord = getRoutePrice(exp.name, "shared");
    const privateRecord = getRoutePrice(exp.name, "private");
    assert.ok(sharedRecord, `Missing shared price record for ${exp.name}`);
    assert.ok(privateRecord, `Missing private price record for ${exp.name}`);

    assert.equal(formatPriceDisplay(sharedRecord), exp.shared, `Shared price mismatch for ${exp.name}`);
    assert.equal(formatPriceDisplay(privateRecord), exp.private, `Private price mismatch for ${exp.name}`);
  }
});

test("REGRESSION: MoneyLandingPage adopts DATA-DRIVEN architecture without isHdHp conditionals", async () => {
  const componentSource = await readFile(new URL("../components/MoneyLandingPage.tsx", import.meta.url), "utf8");

  // Verify route conditionals like isHdHp are eliminated
  assert.doesNotMatch(componentSource, /const isHdHp =/, "Must not contain isHdHp conditional variable");
  assert.doesNotMatch(componentSource, /isHdHp \?/, "Must not branch on isHdHp");

  // Verify data-driven goldContent consumption
  assert.match(componentSource, /getRouteGoldContent/, "Must use getRouteGoldContent registry");
  assert.match(componentSource, /\{goldContent\?\.directAnswer \? \(\s*<section className=\{styles\.directAnswerSection\}/);
  assert.match(componentSource, /\{goldContent\?\.pricingTable \? \(\s*<section className=\{styles\.goldTableSection\}/);
  assert.match(componentSource, /\{goldContent\?\.pricingFactors \? \(\s*<section className=\{styles\.directAnswerSection\} aria-labelledby="factors-heading"/);
  assert.match(componentSource, /\{goldContent\?\.journeyGuide \? \(\s*<section className=\{styles\.journeySection\}/);
  assert.match(componentSource, /\{goldContent\?\.reverseHubs \? \(\s*<section className=\{styles\.reverseSection\}/);
  assert.match(componentSource, /\{goldContent\?\.decisionGuide \? \(\s*<section className=\{styles\.decisionSection\}/);
  assert.match(componentSource, /\{goldContent\?\.parcelService \? \(\s*<section className=\{styles\.parcelSection\}/);
  assert.match(componentSource, /\{goldContent\?\.whyUs \? \(\s*<section className=\{styles\.whyUsSection\}/);
  assert.match(componentSource, /\{goldContent\?\.mediaGallery \? \(\s*<section className=\{styles\.gallerySection\}/);

  // Verify non-gold routes get standard endpointOrientation
  assert.match(componentSource, /endpointOrientation\?\.names\.length \? \(/);
});

test("FACTUAL INTEGRITY: Zero unverified claims in component or gold content", async () => {
  const [componentSource, goldContentSource, pageSource] = await Promise.all([
    readFile(new URL("../components/MoneyLandingPage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../data/seo/hd-hp-gold-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8"),
  ]);

  const combined = componentSource + "\n" + goldContentSource + "\n" + pageSource;

  // Unverified marketing slogans must be 0
  assert.doesNotMatch(combined, /0đ cọc/i, "Must not contain '0đ cọc'");
  assert.doesNotMatch(combined, /hỏa tốc (?:2|3|trong ngày)/i, "Must not claim express SLA");
  assert.doesNotMatch(combined, /24\/7/i, "Must not claim 24/7 operations");
  assert.doesNotMatch(combined, /không khói thuốc/i, "Must not claim unverified non-smoking promise");
  assert.doesNotMatch(combined, /đời mới 100%/i, "Must not claim 100% new fleet");
  assert.doesNotMatch(combined, /2022\s*-\s*2025/i, "Must not claim fabricated fleet year range");
  assert.doesNotMatch(combined, /sạch sẽ 100%/i, "Must not claim 100% clean marketing badge");
});

test("ADMINISTRATIVE CURRENTNESS: No outdated administrative unit designations (2026 Restructuring)", async () => {
  const [goldContentSource, registrySource] = await Promise.all([
    readFile(new URL("../data/seo/hd-hp-gold-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../data/seo/route-content-registry.ts", import.meta.url), "utf8"),
  ]);

  const combined = goldContentSource + "\n" + registrySource;

  // Must not claim outdated administrative designations
  assert.doesNotMatch(combined, /Quận (?:Hồng Bàng|Ngô Quyền|Lê Chân|Hải An|Dương Kinh)/, "Must not designate former districts as current official 'Quận'");
  assert.doesNotMatch(combined, /Huyện (?:An Dương|Thủy Nguyên|Cát Hải|Tiên Lãng|Vĩnh Bảo|Kiến Thụy)/, "Must not designate former rural districts as current official 'Huyện'");
  assert.doesNotMatch(combined, /quận huyện Hải Dương/, "Must not refer to 'quận huyện Hải Dương'");
  assert.doesNotMatch(combined, /11 quận,? huyện chính thức/, "Must not claim 11 official quận huyện");

  // Must preserve legacy search place names as neutral geographic labels
  assert.match(combined, /khu vực An Dương|Khu vực An Dương/, "Must preserve An Dương search term");
  assert.match(combined, /khu vực Thủy Nguyên|Khu vực Thủy Nguyên/, "Must preserve Thủy Nguyên search term");
  assert.match(combined, /khu vực Tiên Lãng|Khu vực Tiên Lãng/, "Must preserve Tiên Lãng search term");
  assert.match(combined, /khu vực Hải Dương|địa bàn Hải Dương/, "Must preserve Hải Dương search term");
});

test("REGRESSION: hd-qn endpoints are exactly 16 and all have dynamic verified prices", async () => {
  const goldContentSource = await readFile(new URL("../data/seo/hd-qn-gold-content.ts", import.meta.url), "utf8");

  const expectedEndpoints = [
    { id: "dong-trieu", name: "Đông Triều", shared: "250.000đ/người", private: "10.000đ/km" },
    { id: "mao-khe", name: "Mạo Khê", shared: "250.000đ/người", private: "10.000đ/km" },
    { id: "uong-bi", name: "Uông Bí", shared: "300.000đ/người", private: "600.000đ/chuyến" },
    { id: "quang-yen", name: "Quảng Yên", shared: "350.000đ/người", private: "700.000đ/chuyến" },
    { id: "bai-chay", name: "Bãi Cháy", shared: "350.000đ/người", private: "900.000đ/chuyến" },
    { id: "ha-long", name: "Hạ Long", shared: "400.000đ/người", private: "1.000.000đ/chuyến" },
    { id: "cam-pha", name: "Cẩm Phả", shared: "450.000đ/người", private: "1.200.000 – 1.300.000đ/chuyến" },
    { id: "cua-ong", name: "Cửa Ông", shared: "500.000đ/người", private: "Liên hệ" },
    { id: "van-don", name: "Vân Đồn", shared: "500.000đ/người", private: "1.500.000đ/chuyến" },
    { id: "ao-tien", name: "Ao Tiên", shared: "500.000đ/người", private: "Liên hệ" },
    { id: "ba-che", name: "Ba Chẽ", shared: "600.000đ/người", private: "Liên hệ" },
    { id: "tien-yen", name: "Tiên Yên", shared: "600.000đ/người", private: "Liên hệ" },
    { id: "dam-ha", name: "Đầm Hà", shared: "650.000đ/người", private: "Liên hệ" },
    { id: "binh-lieu", name: "Bình Liêu", shared: "650.000đ/người", private: "Liên hệ" },
    { id: "hai-ha", name: "Hải Hà", shared: "650.000đ/người", private: "Liên hệ" },
    { id: "mong-cai", name: "Móng Cái", shared: "700.000đ/người", private: "Liên hệ" },
  ];

  assert.equal(expectedEndpoints.length, 16, "Must test all 16 endpoints");

  for (const exp of expectedEndpoints) {
    assert.match(goldContentSource, new RegExp(`id:\\s*"${exp.id}"`), `Endpoint ${exp.id} must exist in hd-qn-gold-content`);
    assert.match(goldContentSource, new RegExp(`name:\\s*"${exp.name}"`), `Endpoint name ${exp.name} must exist`);

    const sharedRecord = getRoutePrice(exp.name, "shared");
    const privateRecord = getRoutePrice(exp.name, "private");
    assert.ok(sharedRecord, `Missing shared price record for ${exp.name}`);
    assert.ok(privateRecord, `Missing private price record for ${exp.name}`);

    assert.equal(formatPriceDisplay(sharedRecord), exp.shared, `Shared price mismatch for ${exp.name}`);
    assert.equal(formatPriceDisplay(privateRecord), exp.private, `Private price mismatch for ${exp.name}`);
  }
});

test("REGRESSION: route-content-registry resolves gold content for both hd-hp and hd-qn", async () => {
  const registrySource = await readFile(new URL("../data/seo/route-content-registry.ts", import.meta.url), "utf8");

  // Verify both routes are registered in getRouteGoldContent
  assert.match(registrySource, /if\s*\(\s*slug === "xe-ghep-hai-duong-hai-phong"\s*\)/, "Must register hd-hp");
  assert.match(registrySource, /if\s*\(\s*slug === "xe-ghep-hai-duong-quang-ninh"\s*\)/, "Must register hd-qn");

  // Verify hd-qn consumes all 9 Gold Standard sections
  assert.match(registrySource, /endpoints:\s*getHdQnEndpointRows\(\)/, "hd-qn must use getHdQnEndpointRows()");
  assert.match(registrySource, /categories:\s*HD_QN_REVERSE_HUBS/, "hd-qn must use HD_QN_REVERSE_HUBS");
  assert.match(registrySource, /rows:\s*HD_QN_DECISION_ROWS/, "hd-qn must use HD_QN_DECISION_ROWS");
  assert.match(registrySource, /items:\s*HD_QN_QUALITY_COMMITMENTS/, "hd-qn must use HD_QN_QUALITY_COMMITMENTS");
  assert.match(registrySource, /items:\s*HD_QN_MEDIA_GALLERY/, "hd-qn must use HD_QN_MEDIA_GALLERY");
  assert.match(registrySource, /directAnswer:\s*\{/, "hd-qn must have directAnswer");
  assert.match(registrySource, /pricingFactors:\s*\{/, "hd-qn must have pricingFactors");
  assert.match(registrySource, /journeyGuide:\s*\{/, "hd-qn must have journeyGuide");
  assert.match(registrySource, /parcelService:\s*\{/, "hd-qn must have parcelService");

  // Verify unconfigured routes return undefined
  assert.match(registrySource, /return undefined;\s*\}/, "Must return undefined for unconfigured routes");
});

test("FACTUAL & ADMINISTRATIVE INTEGRITY: hd-qn gold content compliance", async () => {
  const [qnContentSource, registrySource] = await Promise.all([
    readFile(new URL("../data/seo/hd-qn-gold-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../data/seo/route-content-registry.ts", import.meta.url), "utf8"),
  ]);

  const combined = qnContentSource + "\n" + registrySource;

  // Unverified marketing claims must be 0
  assert.doesNotMatch(combined, /0đ cọc/i, "Must not contain '0đ cọc'");
  assert.doesNotMatch(combined, /hỏa tốc/i, "Must not claim hỏa tốc");
  assert.doesNotMatch(combined, /24\/7/i, "Must not claim 24/7");
  assert.doesNotMatch(combined, /không khói thuốc/i, "Must not claim không khói thuốc");
  assert.doesNotMatch(combined, /đời mới 100%/i, "Must not claim đời mới 100%");

  // Administrative Restructuring (2026): no outdated unit assertions
  assert.doesNotMatch(combined, /Huyện (?:Đông Triều|Vân Đồn|Ba Chẽ|Tiên Yên|Đầm Hà|Bình Liêu|Hải Hà)/, "Must not designate as current official 'Huyện'");
  assert.doesNotMatch(combined, /Thị xã (?:Đông Triều|Quảng Yên)/, "Must not designate as current official 'Thị xã'");

  // Neutral search keywords preserved
  assert.match(combined, /Khu vực Đông Triều|khu vực Đông Triều/, "Must preserve Đông Triều search keyword");
  assert.match(combined, /Khu vực Vân Đồn|khu vực Vân Đồn/, "Must preserve Vân Đồn search keyword");
  assert.match(combined, /Cảng tàu khách quốc tế Ao Tiên|Cảng Ao Tiên/, "Must preserve Ao Tiên search keyword");
  assert.match(combined, /Móng Cái/, "Must preserve Móng Cái search keyword");

  // Operational claims audit: zero unsubstantiated operator promises
  assert.doesNotMatch(combined, /xuất phát ngay/i, "Must not promise xuất phát ngay");
  assert.doesNotMatch(combined, /chạy thẳng không dừng/i, "Must not promise chạy thẳng không dừng gom khách");
  assert.doesNotMatch(combined, /tiết kiệm 45\s*-\s*60 phút/i, "Must not claim tiết kiệm 45-60 phút");
  assert.doesNotMatch(combined, /chủ động 100%/i, "Must not claim chủ động 100%");
  assert.doesNotMatch(combined, /căn giờ chính xác để kịp tàu/i, "Must not promise tài xế căn giờ chính xác để kịp tàu");
  assert.doesNotMatch(combined, /tối thiểu 2\s*[-–]\s*3 tiếng/i, "Must not impose arbitrary tối thiểu 2-3 tiếng requirement");
  assert.doesNotMatch(combined, /mỗi khách 1 vali/i, "Must not invent rigid baggage rule mỗi khách 1 vali");
  assert.doesNotMatch(combined, /dừng nghỉ.*bất kỳ lúc nào/i, "Must not promise dừng nghỉ bất kỳ lúc nào");
  assert.doesNotMatch(combined, /hỗ trợ nâng hạ hành lý/i, "Must not claim hỗ trợ nâng hạ hành lý");
  assert.doesNotMatch(combined, /chu đáo cho mẹ và bé/i, "Must not claim chu đáo cho mẹ và bé");
  assert.doesNotMatch(combined, /Bao xe 7 chỗ từ 800/i, "Must not assign 800k to Quảng Ninh 7-seat charter");

  // Toll integrity: private charter has tollIncluded: false, shared fare does not claim toll inclusion
  assert.match(combined, /tollIncluded:\s*false/, "Private charter footnote must specify tollIncluded: false");
  assert.doesNotMatch(combined, /đã bao gồm toàn bộ chi phí cầu đường/i, "Must not claim shared fare includes all toll costs");
  assert.doesNotMatch(combined, /trọn gói phí BOT/i, "Must not claim trọn gói phí BOT without source");

  // Parcel integrity: preserve qualified range
  assert.match(combined, /150\.000\s*[–-]\s*200\.000đ trở lên/, "Parcel price must preserve qualified range 150.000 - 200.000đ trở lên");
});



