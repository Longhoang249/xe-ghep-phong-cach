import {
  phase1OwnerPriceFactsByDataKey,
  phase1OwnerServiceFacts,
} from "./route-knowledge/owner-verification.mjs";

export function unknownFact(value = null, notes = null) {
  return Object.freeze({
    value,
    status: "UNKNOWN",
    sourceType: null,
    sourceRef: null,
    verifiedAt: null,
    verifiedBy: null,
    notes,
  });
}

function verifiedPhase1RouteEvidence(dataKey) {
  const prices = phase1OwnerPriceFactsByDataKey[dataKey];
  return Object.freeze({
    price: prices.sharedRidePrice,
    distance: unknownFact(null, "Distance remains outside the current Owner confirmation."),
    duration: unknownFact(null, "Duration remains outside the current Owner confirmation."),
    pickupAreas: phase1OwnerServiceFacts.pickupAreas,
    dropoffAreas: phase1OwnerServiceFacts.dropoffAreas,
    operatingHours: unknownFact(null, "Operating hours were not supplied."),
    parcelPrice: prices.parcelPrice,
    charter4Price: prices.charter4SeatPrice,
    charter7Price: prices.charter7SeatPrice,
    sharedRideAvailable: phase1OwnerServiceFacts.sharedRideAvailable,
    charterAvailable: phase1OwnerServiceFacts.charterAvailable,
    parcelAvailable: unknownFact(null, "Parcel service was not included in this Owner confirmation."),
    bidirectional: phase1OwnerServiceFacts.bidirectional,
    doorToDoor: phase1OwnerServiceFacts.doorToDoor,
    paymentAfterTrip: phase1OwnerServiceFacts.paymentAfterTrip,
    advanceBookingFree: phase1OwnerServiceFacts.advanceBookingFree,
  });
}

/** Evidence records for new or re-verified route facts. */
export const routeEvidenceByDataKey = Object.freeze(Object.fromEntries(
  Object.keys(phase1OwnerPriceFactsByDataKey).map((dataKey) => [dataKey, verifiedPhase1RouteEvidence(dataKey)]),
));

/**
 * Backfills the evidence shape without upgrading existing values to verified.
 * Existing live values remain grandfathered only for backward compatibility.
 */
export function unknownRouteEvidence(route) {
  return Object.freeze({
    price: unknownFact(route.sharedPrice, "Existing value; owner evidence not yet attached."),
    distance: unknownFact(route.distanceKm, "Existing value; source method not yet attached."),
    duration: unknownFact(route.durationMinutes, "Existing value; source method not yet attached."),
    pickupAreas: unknownFact(),
    dropoffAreas: unknownFact(),
    operatingHours: unknownFact(),
    parcelPrice: unknownFact(route.parcelPrice, "Existing value; owner evidence not yet attached."),
    charter4Price: unknownFact(route.private4Price, "Existing value; owner evidence not yet attached."),
    charter7Price: unknownFact(route.private7Price, "Existing value; owner evidence not yet attached."),
    sharedRideAvailable: unknownFact(),
    charterAvailable: unknownFact(),
    parcelAvailable: unknownFact(),
    bidirectional: unknownFact(),
    doorToDoor: unknownFact(),
    paymentAfterTrip: unknownFact(),
    advanceBookingFree: unknownFact(),
  });
}
