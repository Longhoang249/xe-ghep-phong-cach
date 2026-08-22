const VERIFIED_AT = "2026-08-22";
const VERIFIED_BY = "Owner";
const SOURCE_REF = "OWNER_VERIFICATION_RECORD_PHASE1.md";

export const phase1OwnerVerificationMeta = Object.freeze({
  taskId: "DATA-002",
  verifiedAt: VERIFIED_AT,
  verifiedBy: VERIFIED_BY,
  sourceType: "OWNER",
  sourceRef: SOURCE_REF,
});

export function ownerVerifiedFact(value, notes, sourceRef = SOURCE_REF) {
  return Object.freeze({
    value,
    status: "VERIFIED",
    sourceType: phase1OwnerVerificationMeta.sourceType,
    sourceRef,
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

export function ownerVerifiedPriceFact(value, priceModel, notes, sourceRef = SOURCE_REF) {
  return Object.freeze({ ...ownerVerifiedFact(value, notes, sourceRef), priceModel });
}

const verifiedStartingPrice = (value, service, sourceRef = SOURCE_REF, scopeNote = "") => ownerVerifiedPriceFact(
  value,
  "VERIFIED_FROM",
  `Owner confirmed the stored ${service} value is a minimum starting price, never a fixed fare. The final trip price can vary by travel date, exact pickup, exact drop-off, travel time, and actual trip conditions. Named endpoints inherit the parent-corridor starting price unless Owner separately verifies route-specific starting prices; no endpoint-specific price may be inferred.${scopeNote ? ` ${scopeNote}` : ""}`,
  sourceRef,
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
    sharedRidePrice: verifiedStartingPrice(250000, "shared-ride"),
    charter4SeatPrice: verifiedStartingPrice(500000, "4-seat charter"),
    charter7SeatPrice: verifiedStartingPrice(650000, "7-seat charter"),
    parcelPrice: verifiedStartingPrice(150000, "parcel"),
  }),
  "hd-cb": Object.freeze({
    sharedRidePrice: verifiedStartingPrice(300000, "shared-ride", SOURCE_REF, "Cát Bi has its own Owner-verified route-level starting price and does not inherit the Hải Dương - Hải Phòng passenger starting price."),
    charter4SeatPrice: verifiedStartingPrice(600000, "4-seat charter", SOURCE_REF, "Cát Bi has its own Owner-verified route-level starting price and does not inherit the Hải Dương - Hải Phòng charter starting price."),
    charter7SeatPrice: verifiedStartingPrice(750000, "7-seat charter", SOURCE_REF, "Cát Bi has its own Owner-verified route-level starting price and does not inherit the Hải Dương - Hải Phòng charter starting price."),
    parcelPrice: verifiedStartingPrice(150000, "parcel", SOURCE_REF, "Cát Bi has its own Owner-verified route-level starting price."),
  }),
  "hd-qn": Object.freeze({
    sharedRidePrice: verifiedStartingPrice(250000, "shared-ride"),
    charter4SeatPrice: verifiedStartingPrice(900000, "4-seat charter"),
    charter7SeatPrice: verifiedStartingPrice(1100000, "7-seat charter"),
    parcelPrice: verifiedStartingPrice(180000, "parcel"),
  }),
  "hp-qn": Object.freeze({
    sharedRidePrice: unknownPrice(null, "shared-ride"),
    charter4SeatPrice: unknownPrice(null, "4-seat charter"),
    charter7SeatPrice: unknownPrice(null, "7-seat charter"),
    parcelPrice: unknownPrice(null, "parcel"),
  }),
});

export const phase1OwnerPricingRules = Object.freeze({
  startingPriceRule: ownerVerifiedFact(
    "VERIFIED_FROM",
    "Every stored numeric Phase 1 service price is a minimum starting price and must be presented semantically as ‘Từ [amount]’, not as a fixed fare.",
  ),
  endpointPricingRule: ownerVerifiedFact(
    "INHERIT_PARENT_VERIFIED_FROM_UNLESS_EXPLICITLY_VERIFIED",
    "A named endpoint inherits the parent corridor's verified starting price unless Owner separately verifies route-specific starting prices. Cát Bi is an explicit route-level exception with its own verified starting prices. No endpoint-specific numeric price may be generated or inferred without Owner evidence.",
  ),
  variationFactors: ownerVerifiedFact(
    Object.freeze(["TRAVEL_DATE", "EXACT_PICKUP_ADDRESS", "EXACT_DROPOFF_ADDRESS", "TRAVEL_TIME", "ACTUAL_TRIP_CONDITIONS"]),
    "Owner supplied the allowed reasons that a final trip price can differ from the starting price. No surcharge formula was supplied.",
  ),
});

export const phase1OwnerServiceFacts = Object.freeze({
  doorToDoor: ownerVerifiedFact(true, "Owner confirmed home pickup and destination drop-off for the services in scope."),
  bidirectional: ownerVerifiedFact(true, "Owner confirmed service in both directions across the full corridor."),
  sharedRideAvailable: ownerVerifiedFact(true, "Owner confirmed shared-ride service."),
  charterAvailable: ownerVerifiedFact(true, "Owner confirmed private charter service."),
  parcelAvailable: ownerVerifiedFact(true, "Owner confirmed parcel-delivery service for Phase 1."),
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
