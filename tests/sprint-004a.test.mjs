import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { moneyPageUpgrades } from "../data/seo/money-page-upgrades.mjs";
import { phase1OwnerPriceFactsByDataKey } from "../data/seo/route-knowledge/owner-verification.mjs";
import { publicPricePresentation } from "../lib/seo/publication.mjs";

const expectedPrices = Object.freeze([250000, 500000, 650000, 150000]);

test("SPRINT-004A keeps MP-003 identity, metadata and verified starting prices", () => {
  const asset = seoAssets.find((item) => item.assetId === "MP-003");
  const upgrade = moneyPageUpgrades["hd-hp"];
  assert.equal(asset?.canonical, "/xe-ghep-hai-duong-hai-phong");
  assert.equal(asset?.dataKey, "hd-hp");
  assert.equal(upgrade.title, "Xe ghép Hải Dương - Hải Phòng từ 250K | Phong Cách");
  assert.equal(upgrade.h1, "Xe ghép Hải Dương - Hải Phòng");
  assert.match(upgrade.description, /từ 250\.000đ\/người/);

  const facts = Object.values(phase1OwnerPriceFactsByDataKey["hd-hp"]);
  assert.deepEqual(facts.map((fact) => fact.value), expectedPrices);
  for (const fact of facts) {
    assert.equal(fact.status, "VERIFIED");
    assert.equal(fact.priceModel, "VERIFIED_FROM");
    assert.equal(publicPricePresentation(fact).prefix, "Từ");
  }
});

test("scan-first renderer is opt-in for hd-hp and does not hard-code governed prices", async () => {
  const [layoutSource, componentSource, pageSource] = await Promise.all([
    readFile(new URL("../data/seo/money-page-layouts.ts", import.meta.url), "utf8"),
    readFile(new URL("../components/MoneyLandingPage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layoutSource, /"hd-hp": Object\.freeze/);
  assert.doesNotMatch(layoutSource, /"(?:hd-cb|hd-qn|hd-ha-long)": Object\.freeze/);
  assert.match(pageSource, /moneyPageLayoutForRoute\(route\.id\)/);
  assert.match(pageSource, /prices=\{commercialPriceRows\}/);
  assert.doesNotMatch(componentSource, /(?:250\.000|500\.000|650\.000|150\.000)đ/);
  assert.match(componentSource, /Giá thực tế phụ thuộc địa chỉ đón\/trả/);
});

test("money landing uses the approved visuals and valid related routes", async () => {
  const visualPaths = [
    "../public/images/hero-phong-cach-fleet.png",
    "../public/images/dich-vu-xe-4-cho.png",
    "../public/images/dich-vu-xe-7-cho.png",
    "../public/images/gui-hang-theo-chuyen.png",
  ];
  await Promise.all(visualPaths.map((path) => access(new URL(path, import.meta.url))));

  const relatedPaths = [
    "/xe-hai-duong-cat-bi",
    "/xe-ghep-hai-duong-quang-ninh",
    "/xe-ghep-hai-phong-quang-ninh",
  ];
  for (const canonical of relatedPaths) {
    const target = seoAssets.find((asset) => asset.canonical === canonical);
    assert.equal(target?.status, "PUBLISHED", `${canonical} must remain a published internal-link target`);
  }
  assert.equal(moneyPageUpgrades["hd-hp"].support.href, "/blog/di-hai-duong-hai-phong-bang-phuong-tien-gi");
});

test("FAQ continues to own the approved near-money questions", () => {
  const faqCopy = JSON.stringify(moneyPageUpgrades["hd-hp"].faq);
  for (const intent of [
    "Giá xe ghép Hải Dương - Hải Phòng bao nhiêu?",
    "Có xe Hải Phòng về Hải Dương không?",
    "Có đón tận nhà và trả tận nơi không?",
    "Bao xe khác xe ghép thế nào?",
    "Nhóm 3-4 người nên đi xe ghép hay bao xe?",
    "Phong Cách có nhận gửi hàng không?",
  ]) assert.match(faqCopy, new RegExp(intent.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
});
