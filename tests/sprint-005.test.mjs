import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { existingPublicUrlBaseline } from "../data/seo/existing-public-url-baseline.mjs";
import { moneyPageUpgrades } from "../data/seo/money-page-upgrades.mjs";
import { phase1OwnerPriceFactsByDataKey } from "../data/seo/route-knowledge/owner-verification.mjs";
import { productionAssetPaths, publicPricePresentation } from "../lib/seo/publication.mjs";

const expectedPrices = Object.freeze([250000, 900000, 1100000, 180000]);

test("SPRINT-005 preserves MP-005 identity and governed starting prices", () => {
  const asset = seoAssets.find((item) => item.assetId === "MP-005");
  const upgrade = moneyPageUpgrades["hd-qn"];
  assert.equal(asset?.canonical, "/xe-ghep-hai-duong-quang-ninh");
  assert.equal(asset?.dataKey, "hd-qn");
  assert.equal(asset?.status, "PUBLISHED");
  assert.equal(upgrade.h1, "Xe ghép Hải Dương - Quảng Ninh");
  assert.match(upgrade.title, /Xe ghép Hải Dương - Quảng Ninh/);

  const facts = Object.values(phase1OwnerPriceFactsByDataKey["hd-qn"]);
  assert.deepEqual(facts.map((fact) => fact.value), expectedPrices);
  for (const fact of facts) {
    assert.equal(fact.status, "VERIFIED");
    assert.equal(fact.priceModel, "VERIFIED_FROM");
    assert.equal(publicPricePresentation(fact).prefix, "Từ");
  }
});

test("scan-first renderer opts in only hd-hp and hd-qn without hard-coded prices", async () => {
  const [layoutSource, componentSource, pageSource, styleSource] = await Promise.all([
    readFile(new URL("../data/seo/money-page-layouts.ts", import.meta.url), "utf8"),
    readFile(new URL("../components/MoneyLandingPage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/MoneyLandingPage.module.css", import.meta.url), "utf8"),
  ]);

  const optIns = [...layoutSource.matchAll(/^ {2}"([^"]+)": Object\.freeze\(/gm)].map((match) => match[1]);
  assert.deepEqual(optIns, ["hd-hp", "hd-qn"]);
  assert.match(pageSource, /moneyPageLayoutForRoute\(route\.id\)/);
  assert.match(pageSource, /prices=\{commercialPriceRows\}/);
  assert.doesNotMatch(componentSource, /(?:250\.000|900\.000|1\.100\.000|180\.000)đ/);
  assert.match(componentSource, /\{route\.origin\}/);
  assert.match(componentSource, /\{route\.destination\}/);
  assert.match(componentSource, /aria-label=\{`Tuyến \$\{route\.origin\} - \$\{route\.destination\} hai chiều`\}/);

  const mobileStyles = styleSource.slice(
    styleSource.indexOf("@media (max-width: 700px)"),
    styleSource.indexOf("@media (max-width: 390px)"),
  );
  const mobilePixelFontSizes = [...mobileStyles.matchAll(/font-size:\s*(\d+)px/g)].map((match) => Number(match[1]));
  assert.ok(mobilePixelFontSizes.length > 20);
  assert.ok(mobilePixelFontSizes.every((size) => size >= 11));
  assert.match(mobileStyles, /\.quickGrid strong \{ font-size: 15px;/);
  assert.match(mobileStyles, /\.servicePrices strong \{ font-size: 16px; \}/);
  assert.match(mobileStyles, /\.serviceBody h3 \{ font-size: 19px; \}/);
  assert.match(mobileStyles, /\.faqList p \{[^}]*font-size: 13px; \}/);
  assert.match(mobileStyles, /\.routePlace strong \{ font-size: 18px; \}/);
});

test("MP-005 uses approved visuals and only published related-route targets", async () => {
  const visualPaths = [
    "../public/images/hero-phong-cach-fleet.png",
    "../public/images/dich-vu-xe-4-cho.png",
    "../public/images/dich-vu-xe-7-cho.png",
    "../public/images/gui-hang-theo-chuyen.png",
  ];
  await Promise.all(visualPaths.map((path) => access(new URL(path, import.meta.url))));

  const layoutSource = await readFile(new URL("../data/seo/money-page-layouts.ts", import.meta.url), "utf8");
  const relatedPaths = [
    "/xe-ghep-hai-duong-ha-long",
    "/xe-ghep-hai-duong-hai-phong",
    "/xe-ghep-hai-phong-quang-ninh",
  ];
  for (const canonical of relatedPaths) {
    assert.match(layoutSource, new RegExp(canonical.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    const target = seoAssets.find((asset) => asset.canonical === canonical);
    assert.equal(target?.status, "PUBLISHED", `${canonical} must be a published internal-link target`);
  }
  assert.doesNotMatch(layoutSource, /\/xe-(?:ghep-)?hai-duong-(?:bai-chay|uong-bi|cam-pha|van-don|ao-tien|mong-cai)/);
});

test("MP-005 keeps canonical, FAQ ownership and non-Article schema", async () => {
  const pageSource = await readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8");
  const faqCopy = JSON.stringify(moneyPageUpgrades["hd-qn"].faq);
  for (const intent of [
    "Giá xe ghép Hải Dương - Quảng Ninh bao nhiêu?",
    "Có nhận chiều Quảng Ninh về Hải Dương không?",
    "Có đón tận nhà và trả tận nơi không?",
    "Bao xe khác xe ghép thế nào?",
    "Nhóm 3-4 người nên đi xe ghép hay bao xe?",
    "Phong Cách có nhận gửi hàng không?",
  ]) assert.match(faqCopy, new RegExp(intent.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));

  assert.match(pageSource, /alternates: \{ canonical \}/);
  assert.match(pageSource, /"@type": "FAQPage"/);
  assert.match(pageSource, /mainEntity: faq\.map/);
  assert.match(pageSource, /faq=\{faq\}/);
  assert.match(pageSource, /\.\.\.\(!isCommercialUpgrade \? \[\{/);
  assert.match(pageSource, /if \(landingLayout && upgrade\)/);
});

test("SPRINT-005 creates no URL and keeps the sitemap baseline at 39", () => {
  const publishedPaths = [
    "/", "/tuyen-xe", "/blog", "/gioi-thieu", "/lien-he", "/chinh-sach-dat-xe", "/an-toan-va-doi-xe",
    ...productionAssetPaths(seoAssets),
  ];
  assert.equal(existingPublicUrlBaseline.length, 38);
  assert.equal(publishedPaths.length, 39);
  assert.deepEqual(new Set(publishedPaths), new Set([...existingPublicUrlBaseline, "/xe-ghep-hai-duong-ha-long"]));
});
