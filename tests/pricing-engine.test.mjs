import test from "node:test";
import assert from "node:assert/strict";
import {
  PRICING_SOURCE_ID,
  PRICING_SOURCE_ID_0909,
  PRICING_SOURCE_ID_PHASE1,
  PRICING_VERIFIED_AT,
  routePricingDataset,
  formatPriceDisplay,
  getRoutePrice,
  getProvincePriceRecords,
  validatePriceConsistency,
} from "../data/seo/pricing-engine.ts";

test("Pricing Engine: provenance is verified per record type against supporting sources", () => {
  assert.ok(routePricingDataset.length > 50, `Expected > 50 records, got ${routePricingDataset.length}`);
  
  // Passenger records (shared & private) must strictly trace to 09/09 sheet
  const passengerRecords = routePricingDataset.filter((r) => r.service === "shared" || r.service === "private");
  assert.equal(passengerRecords.length, 54, `Expected 54 passenger records, got ${passengerRecords.length}`);
  for (const record of passengerRecords) {
    assert.equal(record.sourceId, PRICING_SOURCE_ID_0909, `Invalid sourceId on passenger ${record.destination}`);
    assert.equal(record.verifiedAt, PRICING_VERIFIED_AT, `Invalid verifiedAt on passenger ${record.destination}`);
    assert.ok(["VERIFIED", "UNKNOWN"].includes(record.status), `Invalid status on passenger ${record.destination}`);
  }

  // Hải Phòng parcel must trace to Phase 1 corridor evidence (OWNER_VERIFICATION_RECORD_PHASE1.md)
  const hpParcel = routePricingDataset.find((r) => r.province === "Hải Phòng" && r.service === "parcel");
  assert.ok(hpParcel, "Missing HP parcel record");
  assert.equal(hpParcel.sourceId, PRICING_SOURCE_ID_PHASE1, "HP parcel must trace to Phase 1 record");
  assert.equal(hpParcel.verifiedAt, "2026-08-22", "HP parcel verifiedAt must be 2026-08-22");
  assert.equal(hpParcel.priceMin, 150000, "HP parcel starting fare must be 150000");

  // Quảng Ninh parcel must trace to 09/09 sheet and preserve qualified range
  const qnParcel = routePricingDataset.find((r) => r.province === "Quảng Ninh" && r.service === "parcel");
  assert.ok(qnParcel, "Missing QN parcel record");
  assert.equal(qnParcel.sourceId, PRICING_SOURCE_ID_0909, "QN parcel must trace to 09/09 sheet");
  assert.equal(qnParcel.pricingType, "RANGE", "QN parcel must be qualified RANGE");
  assert.equal(qnParcel.priceMin, 150000, "QN parcel min must be 150000");
  assert.equal(qnParcel.priceMax, 200000, "QN parcel max must be 200000");
});

test("Pricing Engine: all private car records declare tollIncluded = false", () => {
  const privateRecords = routePricingDataset.filter((r) => r.service === "private");
  assert.ok(privateRecords.length >= 27, `Expected >= 27 private records, got ${privateRecords.length}`);
  for (const record of privateRecords) {
    assert.equal(
      record.tollIncluded,
      false,
      `Private car destination ${record.destination} must explicitly have tollIncluded: false`,
    );
  }
});

test("Pricing Engine: PER_KM records strictly keep 10.000đ/km and forbid invented absolute fares", () => {
  const perKmDestinations = ["Tiên Lãng", "Vĩnh Bảo", "Đông Triều", "Mạo Khê"];
  for (const dest of perKmDestinations) {
    const record = getRoutePrice(dest, "private");
    assert.ok(record, `Missing private record for ${dest}`);
    assert.equal(record.pricingType, "PER_KM", `${dest} must be PER_KM`);
    assert.equal(record.pricePerKm, 10000, `${dest} pricePerKm must be 10000`);
    assert.equal(record.unit, "km", `${dest} unit must be km`);
    assert.equal(record.priceMin, undefined, `${dest} must NOT have absolute priceMin`);
    assert.equal(record.priceMax, undefined, `${dest} must NOT have absolute priceMax`);
    assert.equal(formatPriceDisplay(record), "10.000đ/km");
  }
});

test("Pricing Engine: 8 far Quảng Ninh private car endpoints remain UNKNOWN / CONTACT", () => {
  const unknownDestinations = [
    "Cửa Ông",
    "Ao Tiên",
    "Ba Chẽ",
    "Tiên Yên",
    "Đầm Hà",
    "Bình Liêu",
    "Hải Hà",
    "Móng Cái",
  ];
  for (const dest of unknownDestinations) {
    const record = getRoutePrice(dest, "private");
    assert.ok(record, `Missing private record for ${dest}`);
    assert.equal(record.status, "UNKNOWN", `${dest} private status must be UNKNOWN`);
    assert.equal(record.pricingType, "CONTACT", `${dest} private pricingType must be CONTACT`);
    assert.equal(record.priceMin, undefined, `${dest} must NOT have numeric priceMin`);
    assert.equal(record.priceMax, undefined, `${dest} must NOT have numeric priceMax`);
    assert.equal(formatPriceDisplay(record), "Liên hệ");
  }
});

test("Pricing Engine: ranges preserve min and max without collapsing into fixed fares", () => {
  const rangeChecks = [
    { dest: "Kiến Thụy", service: "shared", min: 300000, max: 350000, expectedText: "300.000 – 350.000đ/người" },
    { dest: "Dương Kinh", service: "shared", min: 300000, max: 350000, expectedText: "300.000 – 350.000đ/người" },
    { dest: "Đồ Sơn", service: "shared", min: 350000, max: 400000, expectedText: "350.000 – 400.000đ/người" },
    { dest: "Cát Hải", service: "shared", min: 350000, max: 400000, expectedText: "350.000 – 400.000đ/người" },
    { dest: "Thủy Nguyên", service: "private", min: 500000, max: 550000, expectedText: "500.000 – 550.000đ/chuyến" },
    { dest: "Cẩm Phả", service: "private", min: 1200000, max: 1300000, expectedText: "1.200.000 – 1.300.000đ/chuyến" },
  ];

  for (const check of rangeChecks) {
    const record = getRoutePrice(check.dest, check.service);
    assert.ok(record, `Missing record for ${check.dest} (${check.service})`);
    assert.equal(record.pricingType, "RANGE");
    assert.equal(record.priceMin, check.min);
    assert.equal(record.priceMax, check.max);
    assert.equal(formatPriceDisplay(record), check.expectedText);
  }
});

test("Pricing Engine: core destination exact prices match owner sheet 2026-09-09", () => {
  const exactChecks = [
    { dest: "Trung tâm Hải Phòng", service: "shared", expectedPrice: 250000, expectedText: "250.000đ/người" },
    { dest: "Trung tâm Hải Phòng", service: "private", expectedPrice: 500000, expectedText: "500.000đ/chuyến" },
    { dest: "Sân bay Cát Bi", service: "shared", expectedPrice: 300000, expectedText: "300.000đ/người" },
    { dest: "Sân bay Cát Bi", service: "private", expectedPrice: 550000, expectedText: "550.000đ/chuyến" },
    { dest: "Hạ Long", service: "shared", expectedPrice: 400000, expectedText: "400.000đ/người" },
    { dest: "Hạ Long", service: "private", expectedPrice: 1000000, expectedText: "1.000.000đ/chuyến" },
    { dest: "Bãi Cháy", service: "shared", expectedPrice: 350000, expectedText: "350.000đ/người" },
    { dest: "Bãi Cháy", service: "private", expectedPrice: 900000, expectedText: "900.000đ/chuyến" },
    { dest: "Uông Bí", service: "private", expectedPrice: 600000, expectedText: "600.000đ/chuyến" },
    { dest: "Quảng Yên", service: "private", expectedPrice: 700000, expectedText: "700.000đ/chuyến" },
    { dest: "Vân Đồn", service: "private", expectedPrice: 1500000, expectedText: "1.500.000đ/chuyến" },
    { dest: "Móng Cái", service: "shared", expectedPrice: 700000, expectedText: "700.000đ/người" },
  ];

  for (const check of exactChecks) {
    const record = getRoutePrice(check.dest, check.service);
    assert.ok(record, `Missing record for ${check.dest} (${check.service})`);
    assert.equal(record.priceMin, check.expectedPrice);
    assert.equal(record.priceMax, check.expectedPrice);
    assert.equal(formatPriceDisplay(record), check.expectedText);
  }
});

test("Pricing Engine: validatePriceConsistency rejects inconsistent pricing claims", () => {
  // Reject non-existent destination
  const unknownDest = validatePriceConsistency("Địa điểm ảo", "shared", 250000);
  assert.equal(unknownDest.valid, false);

  // Reject assigning numeric price to UNKNOWN private car destination
  const fakePriceOnUnknown = validatePriceConsistency("Móng Cái", "private", 1500000);
  assert.equal(fakePriceOnUnknown.valid, false);

  // Reject fixed price for PER_KM destination
  const fixedOnKm = validatePriceConsistency("Tiên Lãng", "private", 500000);
  assert.equal(fixedOnKm.valid, false);

  // Reject wrong amount for EXACT destination
  const wrongExact = validatePriceConsistency("Hạ Long", "shared", 250000); // 250k was legacy corridor, 400k is correct
  assert.equal(wrongExact.valid, false);

  // Accept exact match
  const validHạLong = validatePriceConsistency("Hạ Long", "shared", 400000);
  assert.equal(validHạLong.valid, true);

  // Accept range in-bounds
  const validRange = validatePriceConsistency("Kiến Thụy", "shared", 320000);
  assert.equal(validRange.valid, true);

  // Reject range out-of-bounds
  const invalidRange = validatePriceConsistency("Kiến Thụy", "shared", 400000);
  assert.equal(invalidRange.valid, false);
});
