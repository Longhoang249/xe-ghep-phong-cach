import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { seoAssets } from "../data/seo/asset-registry.mjs";
import { existingPublicUrlBaseline } from "../data/seo/existing-public-url-baseline.mjs";
import { routeEvidenceByDataKey } from "../data/seo/route-evidence.mjs";
import { legacyPriceFallbackMappings } from "../data/seo/route-knowledge/phase1.mjs";
import {
  bookingPricePayloadFields,
  formatBookingPriceQuote,
  normalizeBookingPricePayload,
  resolveBookingPriceQuote,
} from "../lib/booking-pricing.mjs";
import { productionAssetPaths } from "../lib/seo/publication.mjs";

const quote = (overrides = {}) => resolveBookingPriceQuote({
  route: { id: "hd-hp" },
  evidence: routeEvidenceByDataKey["hd-hp"],
  legacyMappings: legacyPriceFallbackMappings,
  need: "ride",
  service: "shared",
  vehicle: "4-seat",
  ...overrides,
});

test("REM-001 renders Owner-verified bases only as starting prices", () => {
  const result = quote();
  assert.deepEqual(result, { kind: "STARTING_FROM", amount: 250000, unit: "PER_PERSON" });
  assert.equal(formatBookingPriceQuote(result), "Từ 250.000đ/người");
  assert.deepEqual(bookingPricePayloadFields(result), {
    estimated_price: 250000,
    estimated_price_semantic: "STARTING_FROM",
    estimated_price_unit: "PER_PERSON",
  });
});

test("REM-001 labels a traceable registered-route fallback as an estimate", () => {
  const result = quote({
    route: { id: "hd-hy" },
    evidence: null,
    service: "private",
    vehicle: "4-seat",
  });
  assert.deepEqual(result, { kind: "ESTIMATE", amount: 560000, unit: "PER_TRIP" });
  assert.equal(formatBookingPriceQuote(result), "Ước tính khoảng 560.000đ/chuyến");
  assert.equal(bookingPricePayloadFields(result).estimated_price_semantic, "ESTIMATE");
});

test("REM-001 never emits a numeric fare for UNKNOWN or custom routes", () => {
  const unknown = quote({ route: { id: "hd-hn" }, evidence: null });
  const custom = quote({ route: undefined, evidence: null, service: "private", vehicle: "7-seat" });
  for (const result of [unknown, custom]) {
    assert.deepEqual(result, { kind: "CONTACT", amount: null, unit: null });
    assert.equal(formatBookingPriceQuote(result), "Liên hệ xác nhận");
    assert.equal(bookingPricePayloadFields(result).estimated_price, null);
  }
});

test("REM-001 keeps cargo inputs but removes the unverified pricing formula", async () => {
  const [component, pricing] = await Promise.all([
    readFile(new URL("../components/BookingExperience.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/pricing.ts", import.meta.url), "utf8"),
  ]);
  assert.match(component, /Giá gửi hàng được kiểm tra theo thông tin hàng hóa và chuyến thực tế\./);
  assert.match(component, /cargoLength/);
  assert.match(component, /cargoWeight/);
  assert.doesNotMatch(component, /Giá tính theo quãng đường|trọng lượng quy đổi|6\.000/);
  assert.doesNotMatch(pricing, /volumetricWeight|chargeableWeight|distance\s*\*\s*(?:1200|3200|11500|14500)|\b6000\b/);
});

test("REM-001 payload normalization preserves the lead and strips unclassified prices", () => {
  const lead = {
    booking_id: "PC-TEST1234",
    customer_name: "Khách thử",
    phone: "0987663883",
    pickup_address: "Hải Dương",
    dropoff_address: "Hải Phòng",
    cargo_name: "Hồ sơ",
    estimated_price: 999000,
  };
  const normalized = normalizeBookingPricePayload(lead);
  assert.equal(normalized.booking_id, lead.booking_id);
  assert.equal(normalized.customer_name, lead.customer_name);
  assert.equal(normalized.cargo_name, lead.cargo_name);
  assert.equal(normalized.estimated_price, null);
  assert.equal(normalized.estimated_price_semantic, "CONTACT");
  assert.equal(normalized.estimated_price_unit, null);
});

test("REM-001 adds no URL and keeps the sitemap contract at 39", () => {
  const paths = [
    "/", "/tuyen-xe", "/blog", "/gioi-thieu", "/lien-he", "/chinh-sach-dat-xe", "/an-toan-va-doi-xe",
    ...productionAssetPaths(seoAssets),
  ];
  assert.equal(paths.length, 39);
  assert.deepEqual(new Set(paths), new Set([...existingPublicUrlBaseline, "/xe-ghep-hai-duong-ha-long"]));
});
