import assert from "node:assert/strict";
import test from "node:test";
import { guidePosts } from "../data/guide-posts.ts";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { existingPublicUrlBaseline } from "../data/seo/existing-public-url-baseline.mjs";
import { productionAssetPaths } from "../lib/seo/publication.mjs";

const sprintAssets = Object.freeze({
  "CP-002": "nhung-chuyen-xe-tu-hai-duong-di-quang-ninh",
  "CP-003": "di-hai-duong-hai-phong-bang-phuong-tien-gi",
});

function guideFor(assetId) {
  const slug = sprintAssets[assetId];
  const asset = seoAssets.find((item) => item.assetId === assetId);
  const guide = guidePosts.find((item) => item.slug === slug);
  assert.equal(asset?.status, "PUBLISHED", `${assetId} must remain governed as PUBLISHED`);
  assert.ok(guide, `${assetId} guide data must exist`);
  return guide;
}

test("SPRINT-001A updates only existing governed article URLs", () => {
  assert.equal(seoAssets.length, 32);
  for (const [assetId, slug] of Object.entries(sprintAssets)) {
    const asset = seoAssets.find((item) => item.assetId === assetId);
    assert.equal(asset?.slug, slug);
    assert.equal(asset?.canonical, `/blog/${slug}`);
    assert.equal(asset?.status, "PUBLISHED");
  }

  const staticPaths = ["/", "/tuyen-xe", "/blog", "/gioi-thieu", "/lien-he", "/chinh-sach-dat-xe", "/an-toan-va-doi-xe"];
  const currentPaths = [...staticPaths, ...productionAssetPaths(seoAssets)].sort();
  assert.deepEqual(currentPaths, [...existingPublicUrlBaseline, "/xe-ghep-hai-duong-ha-long"].sort());
  assert.equal(currentPaths.length, 39);
});

test("CP-002 and CP-003 contain answer-first comparison content", () => {
  for (const assetId of Object.keys(sprintAssets)) {
    const guide = guideFor(assetId);
    assert.match(guide.title, /Đi Hải Dương/);
    assert.ok(guide.directAnswer.length >= 180, `${assetId} direct answer is too thin`);
    assert.equal(guide.comparison?.rows.length, 4);
    assert.ok(guide.sections.length >= 5);
    assert.ok(guide.faq.length >= 5);
    assert.equal(guide.updatedAt, "2026-08-22");
  }
});

test("public research sources are HTTPS, attributed and dated", () => {
  for (const assetId of Object.keys(sprintAssets)) {
    const sources = guideFor(assetId).sources ?? [];
    assert.ok(sources.length >= 3, `${assetId} needs at least three sources`);
    for (const source of sources) {
      assert.match(source.url, /^https:\/\//);
      assert.equal(source.checkedAt, "2026-08-22");
      assert.ok(source.publisher.length > 2);
      assert.ok(source.supports.length > 20);
    }
  }
});

test("internal links point to existing published money pages", () => {
  for (const assetId of Object.keys(sprintAssets)) {
    const guide = guideFor(assetId);
    const target = seoAssets.find((item) => item.assetType === "MONEY_PAGE" && item.slug === guide.routeSlug);
    assert.equal(target?.status, "PUBLISHED", `${assetId} has a broken/unpublished route target`);
    assert.equal(target?.canonical, `/${guide.routeSlug}`);
  }
});

test("article pricing preserves VERIFIED_FROM presentation", () => {
  const cp003 = JSON.stringify(guideFor("CP-003"));
  assert.match(cp003, /Từ 250\.000đ\/người/);
  assert.match(cp003, /4 chỗ từ 500\.000đ/);
  assert.match(cp003, /7 chỗ từ 650\.000đ/);
  assert.match(cp003, /gửi hàng từ 150\.000đ/i);

  const cp002 = JSON.stringify(guideFor("CP-002"));
  assert.match(cp002, /Từ 250\.000đ\/người/);
  assert.match(cp002, /4 chỗ từ 900\.000đ/);
  assert.match(cp002, /7 chỗ từ 1\.100\.000đ/);
  assert.match(cp002, /gửi hàng từ 180\.000đ/i);
});

test("CP-002 names endpoints without inventing endpoint-specific prices", () => {
  const cp002 = JSON.stringify(guideFor("CP-002"));
  for (const endpoint of ["Đông Triều", "Uông Bí", "Quảng Yên", "Hạ Long/Bãi Cháy", "Cẩm Phả", "Vân Đồn/Ao Tiên", "Móng Cái"]) {
    assert.match(cp002, new RegExp(endpoint.replace("/", "\\/")));
  }
  assert.doesNotMatch(cp002, /Hải Dương (?:→|[-–]) Móng Cái từ 250\.000đ/i);
  assert.match(cp002, /không phải bảng giá riêng cho từng endpoint/i);
  assert.match(cp002, /chỉ mô tả địa lý và nhu cầu tìm kiếm; không xác nhận Phong Cách phục vụ từng điểm hoặc áp dụng cùng một mức giá/i);
});

test("public copy uses natural punctuation and no aggregator aggregates", () => {
  for (const assetId of Object.keys(sprintAssets)) {
    const copy = JSON.stringify(guideFor(assetId));
    assert.doesNotMatch(copy, /–/, `${assetId} still contains a user-facing en dash`);
    assert.doesNotMatch(copy, /\d+\s*(?:hãng xe|nhà xe|chuyến\s*(?:\/|mỗi)\s*ngày)/i, `${assetId} contains an unsupported aggregator aggregate`);
  }
});
