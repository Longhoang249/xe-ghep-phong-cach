import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { existingPublicUrlBaseline } from "../data/seo/existing-public-url-baseline.mjs";
import { moneyPageUpgrades } from "../data/seo/money-page-upgrades.mjs";
import { productionAssetPaths } from "../lib/seo/publication.mjs";

const endpointNames = Object.freeze([
  "Đông Triều",
  "Uông Bí",
  "Quảng Yên",
  "Hạ Long / Bãi Cháy",
  "Cẩm Phả",
  "Vân Đồn / Ao Tiên",
  "Móng Cái",
]);

test("SPRINT-005.1 keeps endpoint orientation in governed MP-005 data", () => {
  const upgrade = moneyPageUpgrades["hd-qn"];
  assert.deepEqual(upgrade.endpointNames, endpointNames);
  assert.equal(upgrade.endpointTitle, "Bạn đi khu vực nào tại Quảng Ninh?");
  assert.match(upgrade.endpointIntro, /giúp khách mô tả đúng điểm đến/i);
  assert.match(upgrade.endpointBoundary, /không xác nhận mọi địa chỉ luôn có xe hoặc cùng một mức giá/i);
  assert.match(upgrade.endpointBoundary, /gửi điểm đón\/trả cụ thể/i);

  const orientationCopy = JSON.stringify({
    names: upgrade.endpointNames,
    kicker: upgrade.endpointKicker,
    title: upgrade.endpointTitle,
    intro: upgrade.endpointIntro,
    boundary: upgrade.endpointBoundary,
  });
  assert.doesNotMatch(orientationCopy, /(?:250\.000|900\.000|1\.100\.000|180\.000)đ/);
  assert.doesNotMatch(orientationCopy, /các điểm đang phục vụ|có xe đến tất cả|tuyến cố định/i);
});

test("scan-first endpoint block renders only when governed names exist", async () => {
  const [component, page] = await Promise.all([
    readFile(new URL("../components/MoneyLandingPage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8"),
  ]);
  assert.match(component, /endpointOrientation\?\.names\.length/);
  assert.match(component, /endpointOrientation\.names\.map/);
  assert.match(page, /names: upgrade\.endpointNames/);
  assert.deepEqual(moneyPageUpgrades["hd-hp"].endpointNames, []);
  for (const endpoint of endpointNames) assert.doesNotMatch(component, new RegExp(endpoint.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
});

test("only Hạ Long / Bãi Cháy links to published MP-019", async () => {
  const layoutSource = await readFile(new URL("../data/seo/money-page-layouts.ts", import.meta.url), "utf8");
  const linkBlock = layoutSource.slice(layoutSource.indexOf("endpointLinks:"), layoutSource.indexOf("}),\n  }),", layoutSource.indexOf("endpointLinks:")));
  assert.match(linkBlock, /"Hạ Long \/ Bãi Cháy": "\/xe-ghep-hai-duong-ha-long"/);
  for (const endpoint of ["Đông Triều", "Uông Bí", "Quảng Yên", "Cẩm Phả", "Vân Đồn", "Ao Tiên", "Móng Cái"]) {
    assert.doesNotMatch(linkBlock, new RegExp(`"${endpoint}"\\s*:`));
  }
  const mp019 = seoAssets.find((asset) => asset.assetId === "MP-019");
  assert.equal(mp019?.canonical, "/xe-ghep-hai-duong-ha-long");
  assert.equal(mp019?.status, "PUBLISHED");
});

test("visible endpoint boundary and FAQ schema retain the same non-service semantic", async () => {
  const upgrade = moneyPageUpgrades["hd-qn"];
  const faq = upgrade.faq.find((item) => item.q === "Các endpoint được liệt kê có phải đều đã xác nhận phục vụ không?");
  assert.ok(faq);
  assert.match(faq.a, /^Không\./);
  assert.match(faq.a, /chỉ giúp người đọc xác định khu vực và nhu cầu tìm kiếm/i);
  assert.match(faq.a, /Availability và giá cho từng địa chỉ phải được Phong Cách kiểm tra riêng/i);

  const pageSource = await readFile(new URL("../app/[slug]/page.tsx", import.meta.url), "utf8");
  assert.match(pageSource, /"@type": "FAQPage"/);
  assert.match(pageSource, /mainEntity: faq\.map/);
  assert.match(pageSource, /faq=\{faq\}/);
});

test("SPRINT-005.1 creates no endpoint URL and keeps sitemap at 39", () => {
  const paths = [
    "/", "/tuyen-xe", "/blog", "/gioi-thieu", "/lien-he", "/chinh-sach-dat-xe", "/an-toan-va-doi-xe",
    ...productionAssetPaths(seoAssets),
  ];
  assert.equal(paths.length, 39);
  assert.deepEqual(new Set(paths), new Set([...existingPublicUrlBaseline, "/xe-ghep-hai-duong-ha-long"]));
  for (const slug of ["bai-chay", "uong-bi", "cam-pha", "van-don", "ao-tien", "mong-cai"]) {
    assert.equal(paths.some((path) => path.includes(slug) && path !== "/xe-ghep-hai-duong-ha-long"), false);
  }
});
