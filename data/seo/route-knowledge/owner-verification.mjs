const VERIFIED_AT = "2026-08-21";
const VERIFIED_BY = "Owner";
const SOURCE_REF = "OWNER_VERIFICATION_RECORD_PHASE1.md";

export const phase1OwnerVerificationMeta = Object.freeze({
  taskId: "DATA-002",
  verifiedAt: VERIFIED_AT,
  verifiedBy: VERIFIED_BY,
  sourceType: "OWNER",
  sourceRef: SOURCE_REF,
});

export function ownerVerifiedFact(value, notes) {
  return Object.freeze({
    value,
    status: "VERIFIED",
    sourceType: phase1OwnerVerificationMeta.sourceType,
    sourceRef: SOURCE_REF,
    verifiedAt: VERIFIED_AT,
    verifiedBy: VERIFIED_BY,
    notes,
  });
}

export function ownerUnknownFact(value = null, notes = null) {
  return Object.freeze({
    value,
    status: "UNKNOWN",
    sourceType: value == null ? null : "REPOSITORY",
    sourceRef: value == null ? null : "data/routes.ts (pre-DATA-002 stored value)",
    verifiedAt: null,
    verifiedBy: null,
    notes,
  });
}

export function ownerVerifiedPriceFact(value, priceModel, notes) {
  return Object.freeze({ ...ownerVerifiedFact(value, notes), priceModel });
}

const verifiedStoredPrice = (value, service) => ownerVerifiedPriceFact(
  value,
  "FIXED",
  `Owner instructed that the existing ${service} price may be shown publicly. Price applies to the Phase 1 corridor record; endpoint-specific rules remain unverified.`,
);

const unknownPrice = (value, service) => Object.freeze({
  ...ownerUnknownFact(
    value,
    value == null
      ? `No ${service} price is stored or owner-confirmed; public presentation must say “Liên hệ”.`
      : `A ${service} value exists in the repository but was not covered by this Owner confirmation and remains non-authoritative.`,
  ),
  priceModel: "UNKNOWN",
});

export const phase1OwnerPriceFactsByDataKey = Object.freeze({
  "hd-hp": Object.freeze({
    sharedRidePrice: verifiedStoredPrice(250000, "shared-ride"),
    charter4SeatPrice: verifiedStoredPrice(500000, "4-seat charter"),
    charter7SeatPrice: verifiedStoredPrice(650000, "7-seat charter"),
    parcelPrice: unknownPrice(150000, "parcel"),
  }),
  "hd-cb": Object.freeze({
    sharedRidePrice: verifiedStoredPrice(300000, "shared-ride"),
    charter4SeatPrice: verifiedStoredPrice(600000, "4-seat charter"),
    charter7SeatPrice: verifiedStoredPrice(750000, "7-seat charter"),
    parcelPrice: unknownPrice(150000, "parcel"),
  }),
  "hd-qn": Object.freeze({
    sharedRidePrice: verifiedStoredPrice(250000, "shared-ride"),
    charter4SeatPrice: verifiedStoredPrice(900000, "4-seat charter"),
    charter7SeatPrice: verifiedStoredPrice(1100000, "7-seat charter"),
    parcelPrice: unknownPrice(180000, "parcel"),
  }),
  "hp-qn": Object.freeze({
    sharedRidePrice: unknownPrice(null, "shared-ride"),
    charter4SeatPrice: unknownPrice(null, "4-seat charter"),
    charter7SeatPrice: unknownPrice(null, "7-seat charter"),
    parcelPrice: unknownPrice(null, "parcel"),
  }),
});

export const phase1OwnerServiceFacts = Object.freeze({
  doorToDoor: ownerVerifiedFact(true, "Owner confirmed home pickup and destination drop-off for the services in scope."),
  bidirectional: ownerVerifiedFact(true, "Owner confirmed service in both directions across the full corridor."),
  sharedRideAvailable: ownerVerifiedFact(true, "Owner confirmed shared-ride service."),
  charterAvailable: ownerVerifiedFact(true, "Owner confirmed private charter service."),
  paymentAfterTrip: ownerVerifiedFact(true, "Owner confirmed payment after the trip."),
  advanceBookingFree: ownerVerifiedFact(true, "Owner confirmed advance booking has no fee."),
  pickupAreas: ownerVerifiedFact(Object.freeze(["Đón tận nhà"]), "No endpoint-level coverage list was supplied."),
  dropoffAreas: ownerVerifiedFact(Object.freeze(["Trả tận nơi"]), "No endpoint-level coverage list was supplied."),
});

export function routePriceValuesFromOwnerFacts(dataKey) {
  const facts = phase1OwnerPriceFactsByDataKey[dataKey];
  if (!facts) return null;
  return Object.freeze({
    sharedPrice: facts.sharedRidePrice.value,
    private4Price: facts.charter4SeatPrice.value,
    private7Price: facts.charter7SeatPrice.value,
    parcelPrice: facts.parcelPrice.value,
  });
}
