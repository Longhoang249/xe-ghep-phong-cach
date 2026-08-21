/** Evidence records for new or re-verified route facts. */
export const routeEvidenceByDataKey = Object.freeze({});

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
  });
}

