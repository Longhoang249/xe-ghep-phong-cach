import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("TASK-DAT-XE: micro landing remains call-only, noindex, and outside the sitemap", async () => {
  const [pageSource, stylesSource, mobileBarSource, sitemapSource] = await Promise.all([
    readFile(new URL("../app/dat-xe/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/dat-xe/page.module.css", import.meta.url), "utf8"),
    readFile(new URL("../components/MobileContactBar.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
  ]);

  assert.match(pageSource, /alternates: \{ canonical: "\/dat-xe" \}/);
  assert.match(pageSource, /index: false/);
  assert.match(pageSource, /follow: true/);
  assert.match(pageSource, /const callHref = "tel:0987663883"/);
  assert.match(pageSource, /eventName="phone_click"/);
  for (const source of ["micro_landing_hero", "micro_landing_bottom", "micro_landing_sticky"]) {
    assert.match(pageSource, new RegExp(source));
  }
  for (const text of [
    "XE GHÉP PHONG CÁCH",
    "HẢI DƯƠNG ⇄ HẢI PHÒNG ⇄ QUẢNG NINH",
    "Đón tận nhà – trả tận nơi",
    "Xe ghép chỉ từ",
    "Gửi hàng chỉ từ",
    "0987 663 883",
  ]) {
    assert.match(pageSource, new RegExp(text));
  }
  assert.match(pageSource, /hero-phong-cach\.jpg/);
  assert.match(mobileBarSource, /pathname === "\/dat-xe"/);
  assert.doesNotMatch(sitemapSource, /["']\/dat-xe["']/);
  assert.match(stylesSource, /min-height: 60px/);
  assert.match(stylesSource, /env\(safe-area-inset-bottom\)/);
});
