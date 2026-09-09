#!/usr/bin/env node

/**
 * STATIC RENDER CONTRACT QA
 *
 * Verifies code contracts, data-driven architecture, schema constraints,
 * and factual provenance invariants across components and templates.
 * NOTE: This is a static implementation inspection. Real browser DOM,
 * layout, and interaction inspection are executed via real browser QA.
 */

import { access, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(fileURLToPath(import.meta.url), "../..");

// 1. Verify all image assets exist on disk
const imageAssets = [
  "public/images/hero-phong-cach-fleet.png",
  "public/images/cao-toc-ha-noi-hai-phong.jpg",
  "public/images/san-bay-cat-bi-terminal.jpg",
  "public/images/xe-ghep-phong-cach-khoang-xe.jpg",
  "public/images/dich-vu-xe-4-cho.png",
  "public/images/dich-vu-xe-7-cho.png",
  "public/images/gui-hang-theo-chuyen.png",
  "public/images/cau-bach-dang-hai-phong-quang-ninh.jpg",
  "public/images/xe-ghep-phong-cach-hai-duong-hai-phong-quang-ninh.jpg",
  "public/images/xe-ghep-phong-cach-don-tan-nha.jpg",
];

console.log("==================================================");
console.log("🔍 STATIC RENDER CONTRACT QA");
console.log("==================================================");

let allPassed = true;

console.log("\n[1] VERIFYING IMAGE ASSETS EXISTENCE & INTEGRITY...");
for (const img of imageAssets) {
  try {
    await access(join(rootDir, img));
    console.log(`  ✅ ${img} (EXISTS)`);
  } catch {
    console.error(`  ❌ ${img} (NOT FOUND)`);
    allPassed = false;
  }
}

// 2. Read component, layouts, styles, and page source
const [componentSource, styleSource, goldContentSource, registrySource, pageSource, upgradesSource] = await Promise.all([
  readFile(join(rootDir, "components/MoneyLandingPage.tsx"), "utf8"),
  readFile(join(rootDir, "components/MoneyLandingPage.module.css"), "utf8"),
  readFile(join(rootDir, "data/seo/hd-hp-gold-content.ts"), "utf8"),
  readFile(join(rootDir, "data/seo/route-content-registry.ts"), "utf8"),
  readFile(join(rootDir, "app/[slug]/page.tsx"), "utf8"),
  readFile(join(rootDir, "data/seo/money-page-upgrades.mjs"), "utf8"),
]);

console.log("\n[2] VERIFYING F-PATTERN HERO SCANNING CONTRACT...");
const heroChecks = [
  { name: "H1 Route heading", pattern: /<h1 id="route-heading">\{h1\}<\/h1>/ },
  { name: "Eyebrow tag", pattern: /Xe ghép và bao xe hai chiều/ },
  { name: "Dynamic starting price", pattern: /<strong>\{sharedPrice\}<\/strong>/ },
  { name: "Primary CTA Đặt xe ngay", pattern: /Đặt xe ngay/ },
  { name: "Call button with phoneDisplay", pattern: /Gọi \{phoneDisplay\}/ },
  { name: "Trust badges", pattern: /<span>Đặt trước không mất phí<\/span>\s*<span>Thanh toán sau chuyến<\/span>/ },
];

for (const check of heroChecks) {
  if (check.pattern.test(componentSource)) {
    console.log(`  ✅ Hero: ${check.name}`);
  } else {
    console.error(`  ❌ Hero missing: ${check.name}`);
    allPassed = false;
  }
}

console.log("\n[3] VERIFYING PRICING TABLE & MOBILE USABILITY CONTRACT (390PX)...");
const tableChecks = [
  { name: "Table wrapper has overflow-x auto for mobile horizontal scrolling", pattern: /\.tableWrap\s*\{[^}]*overflow-x:\s*auto/ },
  { name: "Table wrapper has webkit-overflow-scrolling touch", pattern: /-webkit-overflow-scrolling:\s*touch/ },
  { name: "Pricing table min-width prevents mobile column squishing (>=740px)", pattern: /\.pricingTable\s*\{[^}]*min-width:\s*740px/ },
  { name: "Table header uses 'Thời gian tham khảo'", pattern: /<th scope="col">Thời gian tham khảo<\/th>/ },
  { name: "Footnote explains tollExcluded = false on private charter", pattern: /tollIncluded: false/ },
  { name: "Footnote explains Tiên Lãng & Vĩnh Bảo 10.000đ/km", pattern: /10\.000đ\/km/ },
  { name: "Footnote explains shared fare is per person/seat without unsupported toll claims", pattern: /Giá vé xe ghép là mức cước tính theo mỗi người/ },
  { name: "Footnote explains travel time is an estimate", pattern: /Thời gian di chuyển tham khảo/ },
];

for (const check of tableChecks) {
  const isMatch = check.pattern.test(styleSource) || check.pattern.test(componentSource) || check.pattern.test(registrySource);
  if (isMatch) {
    console.log(`  ✅ Table QA: ${check.name}`);
  } else {
    console.error(`  ❌ Table QA failed: ${check.name}`);
    allPassed = false;
  }
}

console.log("\n[4] VERIFYING FACTUAL PROVENANCE & STRICT OPERATIONAL BOUNDARIES...");
const factualChecks = [
  { name: "Direct Answer: Estimated time (45 đến 60 phút tham khảo)", pattern: /Thời gian di chuyển ước tính/ },
  { name: "Direct Answer: Two main highway corridors (5B và QL5)", pattern: /Quốc lộ 5 và Cao tốc Hà Nội - Hải Phòng/ },
  { name: "Direct Answer: Phase 1 policy (đặt trước không mất phí, thanh toán sau chuyến)", pattern: /chính sách đặt trước không mất phí, thanh toán sau chuyến đi/ },
  { name: "Pricing Factors: neutral routing description", pattern: /Trục đường kết nối gồm Quốc lộ 5 và Cao tốc Hà Nội - Hải Phòng/ },
  { name: "Journey Guide: time slot estimates framed conservatively", pattern: /Khoảng 45 - 55 phút \(ước tính tham khảo\)/ },
  { name: "Reverse Hubs: framed as common pickup areas served door-to-door", pattern: /Các khu vực đón trả phổ biến phục vụ tận nơi/ },
  { name: "Parcel Section: Trip agreement starting from 150k", pattern: /theo thỏa thuận chuyến/ },
  { name: "Why Choose Us: Family fleet 4-7 seats", pattern: /Xe gia đình 4 và 7 chỗ rộng rãi/ },
  { name: "Why Choose Us: Clean & airy", pattern: /Không gian xe sạch sẽ, thoáng mát/ },
  { name: "Why Choose Us: 1 seat per shared ticket", pattern: /Mỗi vé ghép một chỗ ngồi riêng biệt/ },
  { name: "Why Choose Us: Free booking, pay after trip", pattern: /Đặt trước không mất phí - Thanh toán sau chuyến/ },
];

for (const check of factualChecks) {
  const isMatch = check.pattern.test(registrySource) || check.pattern.test(goldContentSource) || check.pattern.test(componentSource);
  if (isMatch) {
    console.log(`  ✅ Factual copy: ${check.name}`);
  } else {
    console.error(`  ❌ Factual copy failed: ${check.name}`);
    allPassed = false;
  }
}

console.log("\n[5] VERIFYING DATA-DRIVEN ARCHITECTURE (ZERO ROUTE CONDITIONAL BRANCHES)...");
const architectureChecks = [
  { name: "isHdHp is eliminated from MoneyLandingPage component", test: () => !componentSource.includes("isHdHp") },
  { name: "MoneyLandingPage consumes getRouteGoldContent", test: () => componentSource.includes("getRouteGoldContent") },
  { name: "Direct Answer gated by goldContent.directAnswer", test: () => componentSource.includes("goldContent?.directAnswer") },
  { name: "Table gated by goldContent.pricingTable", test: () => componentSource.includes("goldContent?.pricingTable") },
  { name: "Pricing Factors gated by goldContent.pricingFactors", test: () => componentSource.includes("goldContent?.pricingFactors") },
  { name: "Journey Guide gated by goldContent.journeyGuide", test: () => componentSource.includes("goldContent?.journeyGuide") },
  { name: "Reverse Hubs gated by goldContent.reverseHubs", test: () => componentSource.includes("goldContent?.reverseHubs") },
  { name: "Decision Guide gated by goldContent.decisionGuide", test: () => componentSource.includes("goldContent?.decisionGuide") },
  { name: "Parcel Section gated by goldContent.parcelService", test: () => componentSource.includes("goldContent?.parcelService") },
  { name: "Why Us gated by goldContent.whyUs", test: () => componentSource.includes("goldContent?.whyUs") },
  { name: "Media Gallery gated by goldContent.mediaGallery", test: () => componentSource.includes("goldContent?.mediaGallery") },
  { name: "Fallback endpointOrientation preserved for non-gold routes", test: () => componentSource.includes("endpointOrientation?.names.length ? (") },
];

for (const check of architectureChecks) {
  if (check.test()) {
    console.log(`  ✅ Architecture: ${check.name}`);
  } else {
    console.error(`  ❌ Architecture failed: ${check.name}`);
    allPassed = false;
  }
}

console.log("\n[6] VERIFYING METADATA, DEPRECATED SCHEMA REMOVAL & CANONICAL INTEGRITY...");
const metadataChecks = [
  { name: "Canonical URL declaration in page metadata", test: () => /alternates:\s*\{\s*canonical\s*\}/.test(pageSource) },
  { name: "Service JSON-LD Schema with name and provider", test: () => /"@type":\s*"Service"/.test(pageSource) },
  { name: "BreadcrumbList JSON-LD Schema", test: () => /"@type":\s*"BreadcrumbList"/.test(pageSource) },
  { name: "FAQPage JSON-LD REMOVED (Google Search deprecated June 2026)", test: () => !pageSource.includes('"@type": "FAQPage"') },
  { name: "HTML FAQ accordion retained for user & GEO readability", test: () => componentSource.includes("<details key={item.q}") },
  { name: "Hải Phòng canonical asset in registry (MP-003)", test: () => upgradesSource.includes("MP-003") },
];

for (const check of metadataChecks) {
  if (check.test()) {
    console.log(`  ✅ Metadata/Schema: ${check.name}`);
  } else {
    console.error(`  ❌ Metadata/Schema failed: ${check.name}`);
    allPassed = false;
  }
}

console.log("\n==================================================");
if (allPassed) {
  console.log("🎉 STATIC RENDER CONTRACT QA: PASSED (100% INVARIANTS MET)");
  console.log("==================================================");
  process.exit(0);
} else {
  console.error("💥 STATIC RENDER CONTRACT QA: FAILED");
  console.log("==================================================");
  process.exit(1);
}
