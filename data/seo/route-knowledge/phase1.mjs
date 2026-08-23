import {
  ownerVerifiedFact,
  phase1OwnerPriceFactsByDataKey,
  phase1OwnerPricingRules,
  phase1OwnerServiceFacts,
} from "./owner-verification.mjs";

const AUDIT_DATE = "2026-08-22";
const AUDITOR = "Codex repository audit";

export const phase1KnowledgeMeta = Object.freeze({
  taskId: "DATA-003",
  version: "v1.3",
  auditedAt: AUDIT_DATE,
  lastReviewedAt: "2026-08-23",
  scope: Object.freeze(["CLUSTER-A", "CLUSTER-B", "CLUSTER-C"]),
  publicConsumerEnabled: true,
  notes: "Owner-verified Phase 1 stored prices are minimum starting prices. Service commitments include shared ride, charter, and parcel; no record creates a URL or changes publication state.",
});

export function knowledgeFact({
  value = null,
  status = "UNKNOWN",
  sourceType = null,
  sourceRef = null,
  verifiedAt = null,
  verifiedBy = null,
  notes = null,
} = {}) {
  return Object.freeze({ value, status, sourceType, sourceRef, verifiedAt, verifiedBy, notes });
}

function repoFact(value, sourceRef, notes) {
  return knowledgeFact({
    value,
    status: "UNKNOWN",
    sourceType: "REPOSITORY",
    sourceRef,
    verifiedAt: AUDIT_DATE,
    verifiedBy: AUDITOR,
    notes: `${notes} Repository presence was audited; the business fact has not been confirmed by Owner/operations.`,
  });
}

function gapFact(notes, sourceRef = null) {
  return knowledgeFact({
    notes,
    sourceType: sourceRef ? "PROJECT_BRIEF" : null,
    sourceRef,
    verifiedAt: sourceRef ? AUDIT_DATE : null,
    verifiedBy: sourceRef ? AUDITOR : null,
  });
}

function estimateFact(value, sourceRef, notes) {
  return knowledgeFact({
    value,
    status: "ESTIMATE",
    sourceType: "REPOSITORY_FORMULA",
    sourceRef,
    verifiedAt: AUDIT_DATE,
    verifiedBy: AUDITOR,
    notes: `${notes} This verifies the implemented formula, not the commercial accuracy of its output.`,
  });
}

function unknownCommercialPriceFact(value, sourceRef = null, notes = "Owner confirmation required.") {
  const fact = value == null
    ? gapFact(notes)
    : repoFact(value, sourceRef, notes);
  return Object.freeze({ ...fact, priceModel: "UNKNOWN" });
}

function commercialFacts(values, sourceRef, notes = "Stored route values", dataKey = null) {
  const ownerPrices = dataKey ? phase1OwnerPriceFactsByDataKey[dataKey] : null;
  return Object.freeze({
    sharedRidePrice: ownerPrices?.sharedRidePrice ?? unknownCommercialPriceFact(values.sharedRidePrice, sourceRef, `${notes}; no verified shared-ride starting price is stored.`),
    charter4SeatPrice: ownerPrices?.charter4SeatPrice ?? unknownCommercialPriceFact(values.charter4SeatPrice, sourceRef, `${notes}; no verified 4-seat charter starting price is stored.`),
    charter7SeatPrice: ownerPrices?.charter7SeatPrice ?? unknownCommercialPriceFact(values.charter7SeatPrice, sourceRef, `${notes}; no verified 7-seat charter starting price is stored.`),
    parcelPrice: ownerPrices?.parcelPrice ?? unknownCommercialPriceFact(values.parcelPrice, sourceRef, `${notes}; no verified parcel starting price is stored.`),
    pricingNotes: ownerPrices
      ? phase1OwnerPricingRules.startingPriceRule
      : repoFact("Website values are reference values; final price is confirmed per trip.", "app/[slug]/page.tsx:67-68; app/chinh-sach-dat-xe/page.tsx:20", "Current public pricing qualification"),
    surcharges: gapFact("Night, remote-area, airport, waiting, and holiday surcharge rules are not recorded."),
  });
}

function emptyCommercialFacts() {
  return Object.freeze({
    sharedRidePrice: unknownCommercialPriceFact(null),
    charter4SeatPrice: unknownCommercialPriceFact(null),
    charter7SeatPrice: unknownCommercialPriceFact(null),
    parcelPrice: unknownCommercialPriceFact(null),
    pricingNotes: gapFact("Fixed price versus per-trip quote is unknown."),
    surcharges: gapFact("Surcharge rules are unknown."),
  });
}

function journeyFacts(distanceKm, durationMinutes, sourceRef, airportInformation = null, airportSourceRef = null, ownerConfirmed = false) {
  return Object.freeze({
    distanceKm: distanceKm == null ? gapFact("No route distance is stored.") : repoFact(distanceKm, sourceRef, "Stored route distance"),
    durationMinutes: durationMinutes == null ? gapFact("No route duration is stored.") : repoFact(durationMinutes, sourceRef, "Stored route duration"),
    pickupAreas: ownerConfirmed ? phase1OwnerServiceFacts.pickupAreas : gapFact("No owner-confirmed pickup-area list exists."),
    dropoffAreas: ownerConfirmed ? phase1OwnerServiceFacts.dropoffAreas : gapFact("No owner-confirmed drop-off-area list exists."),
    majorStops: gapFact("No owner-confirmed stop or endpoint sequence exists."),
    airportInformation: airportInformation == null
      ? gapFact("Airport applicability or rules are unknown.")
      : repoFact(airportInformation, airportSourceRef, "Airport-related instructions in current content"),
  });
}

function emptyJourneyFacts(notes = "Owner confirmation required.") {
  return Object.freeze({
    distanceKm: gapFact(notes),
    durationMinutes: gapFact(notes),
    pickupAreas: gapFact(notes),
    dropoffAreas: gapFact(notes),
    majorStops: gapFact(notes),
    airportInformation: gapFact(notes),
  });
}

function operationalFacts({ serviceClaim, serviceRef, vehicleClaim, vehicleRef, luggageClaim, luggageRef, parcelClaim, parcelRef, ownerConfirmed = false }) {
  return Object.freeze({
    serviceAvailability: ownerConfirmed
      ? ownerVerifiedFact("Shared ride and charter are available in both directions across the corridor.", "Owner confirmed the general corridor service; frequency and endpoint-specific availability remain unverified.")
      : repoFact(serviceClaim, serviceRef, "Current content service-availability claim"),
    operatingHours: gapFact("No operating-hours rule exists in repository evidence."),
    bookingLeadTime: gapFact("Content says to call early but provides no operational lead-time rule."),
    vehicleNotes: ownerConfirmed
      ? ownerVerifiedFact("Shared ride and private charter are available.", "Owner did not supply vehicle inventory or capacity details beyond the confirmed service types.")
      : repoFact(vehicleClaim, vehicleRef, "Current content vehicle claim"),
    luggageNotes: repoFact(luggageClaim, luggageRef, "Current content luggage instruction"),
    parcelNotes: ownerConfirmed
      ? ownerVerifiedFact("Parcel delivery is available for Phase 1; item acceptance, handling, timing, and final price remain trip-specific.", "Owner confirmed the service, but did not supply parcel restrictions or a calculation formula.")
      : repoFact(parcelClaim, parcelRef, "Current content parcel-service claim"),
    waitingPolicy: gapFact("No waiting-time or waiting-fee policy exists in repository evidence."),
    paymentAfterTrip: ownerConfirmed ? phase1OwnerServiceFacts.paymentAfterTrip : gapFact("Payment timing is not owner-confirmed."),
    advanceBookingFree: ownerConfirmed ? phase1OwnerServiceFacts.advanceBookingFree : gapFact("Advance-booking fee rule is not owner-confirmed."),
  });
}

function emptyOperationalFacts(notes = "Owner confirmation required.") {
  return Object.freeze({
    serviceAvailability: gapFact(notes),
    operatingHours: gapFact(notes),
    bookingLeadTime: gapFact(notes),
    vehicleNotes: gapFact(notes),
    luggageNotes: gapFact(notes),
    parcelNotes: gapFact(notes),
    waitingPolicy: gapFact(notes),
    paymentAfterTrip: gapFact(notes),
    advanceBookingFree: gapFact(notes),
  });
}

function directionFacts(directionId, origin, destination, sourceRef, serviceClaim, airportRequirements = null, airportRef = null, ownerConfirmed = false) {
  return Object.freeze({
    directionId,
    origin,
    destination,
    serviceAvailability: ownerConfirmed
      ? ownerVerifiedFact(true, `Owner confirmed service for ${origin} → ${destination}; operating frequency remains unverified.`)
      : repoFact(serviceClaim, sourceRef, "Current content direction-specific availability claim"),
    pickupPattern: gapFact(`Pickup pattern for ${origin} → ${destination} is unknown.`),
    dropoffPattern: gapFact(`Drop-off pattern for ${origin} → ${destination} is unknown.`),
    routeNotes: gapFact(`No direction-specific route rule for ${origin} → ${destination} is recorded.`),
    airportRequirements: airportRequirements == null
      ? gapFact("No direction-specific airport requirement is recorded.")
      : repoFact(airportRequirements, airportRef, "Current content airport requirement"),
  });
}

function isFact(value) {
  return Boolean(value && typeof value === "object" && "status" in value && "value" in value);
}

function factsIn(value) {
  if (isFact(value)) return [value];
  if (Array.isArray(value)) return value.flatMap(factsIn);
  if (value && typeof value === "object") return Object.values(value).flatMap(factsIn);
  return [];
}

function scoreSection(section) {
  const facts = factsIn(section);
  if (!facts.length) return 0;
  const populated = facts.filter((fact) => fact.value !== null && (!Array.isArray(fact.value) || fact.value.length > 0)).length;
  return Math.round((populated / facts.length) * 100);
}

function assessRecord(record) {
  const decisionFacts = [...factsIn(record.commercial), ...factsIn(record.journey), ...factsIn(record.operations)];
  const evidenced = decisionFacts.filter((fact) => fact.status !== "UNKNOWN").length;
  const hasVerifiedCoreService = record.operations.serviceAvailability.status === "VERIFIED";
  const readiness = record.serviceStatus === "NOT_SERVICED"
    ? "DO_NOT_PUBLISH"
    : record.publicationState === "DATA_ONLY" || !hasVerifiedCoreService
      ? "DATA_REQUIRED"
      : evidenced === decisionFacts.length
        ? "READY_FOR_CONTENT"
        : "PARTIAL";
  return Object.freeze({
    ...record,
    completeness: Object.freeze({
      commercial: scoreSection(record.commercial),
      journey: scoreSection(record.journey),
      operations: scoreSection(record.operations),
      evidence: decisionFacts.length ? Math.round((evidenced / decisionFacts.length) * 100) : 0,
    }),
    readiness,
  });
}

export const phase1ParentRoutes = Object.freeze([
  assessRecord({
    routeId: "hd-hp",
    origin: "Hải Dương",
    destination: "Hải Phòng",
    directionality: "BIDIRECTIONAL_VERIFIED",
    parentCluster: "CLUSTER-A",
    routeType: "PARENT_CORRIDOR",
    assetIds: Object.freeze(["MP-003", "CP-003", "SC-002", "SC-004"]),
    publicationState: "EXISTING_PUBLISHED",
    commercial: commercialFacts({ sharedRidePrice: 250000, charter4SeatPrice: 500000, charter7SeatPrice: 650000, parcelPrice: 150000 }, "data/routes.ts:12", "Stored route values", "hd-hp"),
    journey: journeyFacts(48, 65, "data/routes.ts:12", null, null, true),
    operations: operationalFacts({
      serviceClaim: "Current pages claim xe ghép, charter 4–7 seats, and parcel demand are accepted in both directions; vehicle availability is checked per trip.",
      serviceRef: "app/[slug]/page.tsx:53-68; data/guide-posts.ts:93-109,279-300",
      vehicleClaim: "Current content offers shared ride or charter using 4–7-seat vehicles.",
      vehicleRef: "data/guide-posts.ts:93-109,279-300",
      luggageClaim: "Passengers are asked to provide passenger count and luggage details before vehicle confirmation.",
      luggageRef: "data/guide-posts.ts:93-105,279-295",
      parcelClaim: "Current content says parcel requests are accepted subject to item and trip checks.",
      parcelRef: "data/guide-posts.ts:198-221",
      ownerConfirmed: true,
    }),
    directions: Object.freeze([
      directionFacts("hd-to-hp", "Hải Dương", "Hải Phòng", "data/guide-posts.ts:93-109", "Current guide claims the route is accepted in this direction.", null, null, true),
      directionFacts("hp-to-hd", "Hải Phòng", "Hải Dương", "data/guide-posts.ts:279-300", "Current reverse-direction guide claims service is accepted, with availability checked per trip.", null, null, true),
    ]),
    searchSupport: Object.freeze({
      aliases: Object.freeze(["Hải Dương Hải Phòng", "Hải Phòng Hải Dương", "xe ghép HD HP"]),
      commonQueries: Object.freeze(["Giá xe ghép Hải Dương Hải Phòng?", "Có xe Hải Phòng về Hải Dương không?", "Có gửi hàng theo chuyến không?"]),
      faqCandidates: Object.freeze(["Giá ghép và bao xe từng chiều là bao nhiêu?", "Khu vực nào được đón/trả?", "Gửi hàng tính theo quy tắc nào?"]),
      relatedRoutes: Object.freeze(["hd-cat-bi", "hd-qn", "hp-qn"]),
    }),
  }),
  assessRecord({
    routeId: "hd-qn",
    origin: "Hải Dương",
    destination: "Quảng Ninh",
    directionality: "BIDIRECTIONAL_VERIFIED",
    parentCluster: "CLUSTER-B",
    routeType: "PARENT_CORRIDOR",
    assetIds: Object.freeze(["MP-005", "CP-002", "SC-001"]),
    publicationState: "EXISTING_PUBLISHED",
    commercial: commercialFacts({ sharedRidePrice: 250000, charter4SeatPrice: 900000, charter7SeatPrice: 1100000, parcelPrice: 180000 }, "data/routes.ts:14", "Stored route values", "hd-qn"),
    journey: journeyFacts(105, 120, "data/routes.ts:14", null, null, true),
    operations: operationalFacts({
      serviceClaim: "Current pages claim shared ride, charter, and parcel demand are accepted in both directions, with each trip checked.",
      serviceRef: "app/[slug]/page.tsx:53-68; data/guide-posts.ts:58-84,171-194",
      vehicleClaim: "Current content describes shared or charter options using 4–7-seat vehicles.",
      vehicleRef: "data/guide-posts.ts:58-84,171-194",
      luggageClaim: "Passengers are asked to provide passenger count and luggage or cargo details.",
      luggageRef: "data/guide-posts.ts:58-84,171-194",
      parcelClaim: "Current route templates claim parcel demand is accepted, but no Phase 1 parcel rule is evidenced.",
      parcelRef: "app/[slug]/page.tsx:53-68,159-184",
      ownerConfirmed: true,
    }),
    directions: Object.freeze([
      directionFacts("hd-to-qn", "Hải Dương", "Quảng Ninh", "data/guide-posts.ts:58-84,171-194", "Current content claims demand is accepted in this direction.", null, null, true),
      directionFacts("qn-to-hd", "Quảng Ninh", "Hải Dương", "data/guide-posts.ts:79-81,188-191", "Current content claims reverse demand is accepted, subject to endpoint and trip checks.", null, null, true),
    ]),
    searchSupport: Object.freeze({
      aliases: Object.freeze(["Hải Dương Quảng Ninh", "Quảng Ninh Hải Dương", "xe ghép HD QN"]),
      commonQueries: Object.freeze(["Giá xe Hải Dương đi từng điểm Quảng Ninh?", "Có xe Quảng Ninh về Hải Dương không?", "Điểm trả nào được phục vụ?"]),
      faqCandidates: Object.freeze(["Giá có thay đổi theo endpoint không?", "Có nhận Vân Đồn/Ao Tiên/Móng Cái không?", "Cần đặt trước bao lâu?"]),
      relatedRoutes: Object.freeze(["hd-hp", "hp-qn"]),
    }),
  }),
  assessRecord({
    routeId: "hp-qn",
    origin: "Hải Phòng",
    destination: "Quảng Ninh",
    directionality: "BIDIRECTIONAL_VERIFIED",
    parentCluster: "CLUSTER-C",
    routeType: "PARENT_CORRIDOR",
    assetIds: Object.freeze(["MP-006", "CP-004"]),
    publicationState: "EXISTING_PUBLISHED",
    commercial: commercialFacts({ sharedRidePrice: null, charter4SeatPrice: null, charter7SeatPrice: null, parcelPrice: null }, "data/routes.ts:15", "Stored route values", "hp-qn"),
    journey: journeyFacts(null, null, "data/routes.ts:15", null, null, true),
    operations: operationalFacts({
      serviceClaim: "Current pages claim shared ride, charter, and parcel demand are accepted in both directions; availability is checked per trip.",
      serviceRef: "app/[slug]/page.tsx:53-68; data/guide-posts.ts:116-140",
      vehicleClaim: "Current content describes shared or charter options using 4–7-seat vehicles.",
      vehicleRef: "data/guide-posts.ts:116-140",
      luggageClaim: "Passengers are asked to provide passenger count and luggage details.",
      luggageRef: "data/guide-posts.ts:116-140",
      parcelClaim: "Current route template claims parcel demand is accepted; route data contains no parcel price.",
      parcelRef: "app/[slug]/page.tsx:53-68,159-184; data/routes.ts:15",
      ownerConfirmed: true,
    }),
    directions: Object.freeze([
      directionFacts("hp-to-qn", "Hải Phòng", "Quảng Ninh", "data/guide-posts.ts:116-140", "Current guide claims demand is accepted in this direction.", null, null, true),
      directionFacts("qn-to-hp", "Quảng Ninh", "Hải Phòng", "data/guide-posts.ts:134-137", "Current guide claims both directions, without direction-specific operational facts.", null, null, true),
    ]),
    searchSupport: Object.freeze({
      aliases: Object.freeze(["Hải Phòng Quảng Ninh", "Quảng Ninh Hải Phòng", "xe ghép HP QN"]),
      commonQueries: Object.freeze(["Có xe Hải Phòng Quảng Ninh không?", "Giá theo điểm trả nào?", "Có lịch cố định không?"]),
      faqCandidates: Object.freeze(["Endpoint Quảng Ninh nào được phục vụ?", "Giá từng chiều là bao nhiêu?", "Có nhận gửi hàng không?"]),
      relatedRoutes: Object.freeze(["hd-hp", "hd-qn"]),
    }),
  }),
]);

function candidateSubRoute({ subRouteId, parentRouteId, parentCluster, endpoint, endpointProvince }) {
  const briefRef = "DATA-001 execution brief §9 — Route Granularity";
  const candidateNote = "Candidate requested for data representation only; this is not evidence that Phong Cách serves the endpoint.";
  return assessRecord({
    subRouteId,
    parentRouteId,
    parentCluster,
    endpoint,
    endpointProvince,
    endpointLifecycle: "CANDIDATE",
    serviceStatus: "UNCONFIRMED",
    existingAssetIds: Object.freeze([]),
    publicationState: "DATA_ONLY",
    canonical: null,
    commercial: emptyCommercialFacts(),
    journey: emptyJourneyFacts(candidateNote),
    operations: Object.freeze({
      ...emptyOperationalFacts(candidateNote),
      serviceAvailability: gapFact(candidateNote, briefRef),
    }),
  });
}

export const phase1SubRoutes = Object.freeze([
  candidateSubRoute({ subRouteId: "hd-hp-central", parentRouteId: "hd-hp", parentCluster: "CLUSTER-A", endpoint: "Hải Phòng trung tâm", endpointProvince: "Hải Phòng" }),
  assessRecord({
    subRouteId: "hd-cat-bi",
    parentRouteId: "hd-hp",
    parentCluster: "CLUSTER-A",
    endpoint: "Sân bay Cát Bi",
    endpointProvince: "Hải Phòng",
    endpointLifecycle: "EXISTING_ASSET",
    serviceStatus: "CONFIRMED",
    existingAssetIds: Object.freeze(["MP-004", "CP-007"]),
    publicationState: "EXISTING_PUBLISHED",
    canonical: "/xe-hai-duong-cat-bi",
    commercial: commercialFacts({ sharedRidePrice: 300000, charter4SeatPrice: 600000, charter7SeatPrice: 750000, parcelPrice: 150000 }, "OWNER_VERIFICATION_RECORD_PHASE1.md", "Owner-verified Cát Bi route-level starting prices", "hd-cb"),
    journey: journeyFacts(58, 75, "data/routes.ts:13", "Current guide asks customers to provide flight, terminal (if known), passenger, and luggage details; no waiting or early/late-flight rule is stored.", "data/guide-posts.ts:306-329", true),
    operations: operationalFacts({
      serviceClaim: "Current asset claims shared and charter demand are accepted in both directions, subject to trip checks.",
      serviceRef: "data/guide-posts.ts:306-329",
      vehicleClaim: "Current content offers shared ride, 4-seat charter, and 7-seat charter options.",
      vehicleRef: "data/guide-posts.ts:306-329",
      luggageClaim: "Vehicle choice is said to depend on passenger and luggage details.",
      luggageRef: "data/guide-posts.ts:306-329",
      parcelClaim: "A parcel price exists in route data, but the Cát Bi asset does not provide an airport parcel rule.",
      parcelRef: "data/routes.ts:13",
      ownerConfirmed: true,
    }),
  }),
  candidateSubRoute({ subRouteId: "hd-thuy-nguyen", parentRouteId: "hd-hp", parentCluster: "CLUSTER-A", endpoint: "Thủy Nguyên", endpointProvince: "Hải Phòng" }),
  candidateSubRoute({ subRouteId: "hd-do-son", parentRouteId: "hd-hp", parentCluster: "CLUSTER-A", endpoint: "Đồ Sơn", endpointProvince: "Hải Phòng" }),
  ...[
    ["hd-dong-trieu", "Đông Triều"],
    ["hd-uong-bi", "Uông Bí"],
    ["hd-quang-yen", "Quảng Yên"],
  ].map(([subRouteId, endpoint]) => candidateSubRoute({ subRouteId, parentRouteId: "hd-qn", parentCluster: "CLUSTER-B", endpoint, endpointProvince: "Quảng Ninh" })),
  assessRecord({
    subRouteId: "hd-ha-long",
    parentRouteId: "hd-qn",
    parentCluster: "CLUSTER-B",
    endpoint: "Hạ Long",
    endpointProvince: "Quảng Ninh",
    endpointLifecycle: "PUBLISHED_ASSET",
    serviceStatus: "CONFIRMED",
    existingAssetIds: Object.freeze(["MP-019"]),
    publicationState: "PUBLISHED",
    canonical: "/xe-ghep-hai-duong-ha-long",
    priceSourceRouteId: "hd-qn",
    commercial: commercialFacts({ sharedRidePrice: 250000, charter4SeatPrice: 900000, charter7SeatPrice: 1100000, parcelPrice: 180000 }, "SPRINT-003A Owner brief", "Starting prices inherited from the Hải Dương - Quảng Ninh corridor", "hd-qn"),
    journey: journeyFacts(null, null, "SPRINT-003A Owner brief", null, null, true),
    operations: operationalFacts({
      serviceClaim: "Owner confirmed Hải Dương - Hạ Long/Bãi Cháy service for the Wave 2 money page.",
      serviceRef: "Owner confirmation 2026-08-22",
      vehicleClaim: "Shared ride and 4-7-seat charter are available; actual vehicle is checked per trip.",
      vehicleRef: "SPRINT-003A Owner brief",
      luggageClaim: "Passenger and luggage details are requested before trip confirmation.",
      luggageRef: "SPRINT-003A Owner brief",
      parcelClaim: "Parcel service is available with a corridor starting price; item details remain trip-specific.",
      parcelRef: "SPRINT-003A Owner brief",
      ownerConfirmed: true,
    }),
  }),
  assessRecord({
    subRouteId: "hd-bai-chay",
    parentRouteId: "hd-qn",
    parentCluster: "CLUSTER-B",
    endpoint: "Bãi Cháy",
    endpointProvince: "Quảng Ninh",
    endpointLifecycle: "CANDIDATE",
    serviceStatus: "CONFIRMED",
    existingAssetIds: Object.freeze([]),
    publicationState: "DATA_ONLY",
    canonical: null,
    priceSourceRouteId: "hd-qn",
    commercial: commercialFacts({ sharedRidePrice: 250000, charter4SeatPrice: 900000, charter7SeatPrice: 1100000, parcelPrice: 180000 }, "OWNER_VERIFICATION_RECORD_PHASE1.md", "Starting prices inherit from the Hải Dương - Quảng Ninh corridor; Bãi Cháy has no separately verified endpoint price.", "hd-qn"),
    journey: journeyFacts(null, null, "OWNER_VERIFICATION_RECORD_PHASE1.md", null, null, true),
    operations: operationalFacts({
      serviceClaim: "Owner confirmed Hải Dương - Hạ Long/Bãi Cháy service; Bãi Cháy remains part of the existing MP-019 operating/content scope until Owner and Strategy establish a distinct endpoint need.",
      serviceRef: "OWNER_VERIFICATION_RECORD_PHASE1.md:39-41",
      vehicleClaim: "Shared ride and 4-7-seat charter are confirmed at the verified Hạ Long/Bãi Cháy service scope; actual vehicle is checked per trip.",
      vehicleRef: "OWNER_VERIFICATION_RECORD_PHASE1.md:39-51",
      luggageClaim: "Passenger and luggage details remain trip-specific.",
      luggageRef: "OWNER_VERIFICATION_RECORD_PHASE1.md:53-59",
      parcelClaim: "Parcel service is confirmed under the general Phase 1 commitments; item and trip acceptance remain subject to checking.",
      parcelRef: "OWNER_VERIFICATION_RECORD_PHASE1.md:43-51",
      ownerConfirmed: true,
    }),
  }),
  ...[
    ["hd-cam-pha", "Cẩm Phả"],
    ["hd-van-don", "Vân Đồn"],
    ["hd-ao-tien", "Ao Tiên"],
    ["hd-mong-cai", "Móng Cái"],
  ].map(([subRouteId, endpoint]) => candidateSubRoute({ subRouteId, parentRouteId: "hd-qn", parentCluster: "CLUSTER-B", endpoint, endpointProvince: "Quảng Ninh" })),
]);

/**
 * Resolves the governed price source for a parent corridor or endpoint record.
 * Data-only endpoints inherit parent starting-price facts but remain ineligible
 * for publication until their service status and asset state are approved.
 */
export function resolvePhase1PriceFacts(recordId) {
  const parent = phase1ParentRoutes.find((record) => record.routeId === recordId);
  if (parent) {
    return Object.freeze({
      recordId,
      sourceRecordId: parent.routeId,
      scope: "PARENT_CORRIDOR",
      publicationEligible: true,
      prices: parent.commercial,
    });
  }

  const subRoute = phase1SubRoutes.find((record) => record.subRouteId === recordId);
  if (!subRoute) return null;
  const hasOwnVerifiedPrice = [
    subRoute.commercial.sharedRidePrice,
    subRoute.commercial.charter4SeatPrice,
    subRoute.commercial.charter7SeatPrice,
    subRoute.commercial.parcelPrice,
  ].some((fact) => fact.priceModel === "VERIFIED_FROM");
  const priceSource = hasOwnVerifiedPrice
    ? subRoute
    : phase1ParentRoutes.find((record) => record.routeId === subRoute.parentRouteId);
  if (!priceSource) return null;

  return Object.freeze({
    recordId,
    sourceRecordId: subRoute.priceSourceRouteId ?? priceSource.routeId ?? priceSource.subRouteId,
    scope: subRoute.priceSourceRouteId ? "INHERITED_PARENT_CORRIDOR" : hasOwnVerifiedPrice ? "ENDPOINT_EXISTING_ASSET" : "INHERITED_PARENT_CORRIDOR",
    publicationEligible: subRoute.serviceStatus === "CONFIRMED" && subRoute.publicationState !== "DATA_ONLY",
    prices: priceSource.commercial,
  });
}

function claim(assetId, routeId, fact, currentValue, sourceRef, conflictId = null) {
  const routeDataKey = routeId === "hd-cat-bi" ? "hd-cb" : routeId === "hd-ha-long" ? "hd-qn" : routeId;
  const priceFactKey = Object.freeze({
    sharedRidePrice: "sharedRidePrice",
    charter4SeatPrice: "charter4SeatPrice",
    charter7SeatPrice: "charter7SeatPrice",
    parcelPrice: "parcelPrice",
  })[fact];
  const ownerPriceFact = priceFactKey ? phase1OwnerPriceFactsByDataKey[routeDataKey]?.[priceFactKey] : null;
  const verifiedClaimFacts = Object.freeze({
    serviceAvailability: () => ownerVerifiedFact(currentValue, "Owner confirmed shared ride, charter, parcel delivery, both directions, home pickup, and destination drop-off for Phase 1."),
    directionality: () => ownerVerifiedFact(currentValue, "Owner confirmed both directions across the Phase 1 corridors."),
    vehicleAvailability: () => ownerVerifiedFact(currentValue, "Owner confirmed shared-ride and private-charter service; this does not establish a fixed vehicle schedule."),
    parcelAvailability: () => ownerVerifiedFact(currentValue, "Owner confirmed parcel-delivery service; item restrictions and handling rules remain unverified."),
    parcelPricing: () => ownerVerifiedFact(currentValue, "Owner confirmed stored prices are starting prices, not one fixed final price for every trip or parcel request."),
  });
  const evidence = ownerPriceFact?.status === "VERIFIED" && ownerPriceFact.value === currentValue
    ? ownerPriceFact
    : verifiedClaimFacts[fact]?.() ?? repoFact(currentValue, sourceRef, "Business-impacting claim observed in a Phase 1 asset");
  return Object.freeze({
    assetId,
    routeId,
    fact,
    currentValue,
    evidence,
    status: evidence.status,
    conflictId,
  });
}

const moneyAssetClaims = [
  ["MP-003", "hd-hp", "data/routes.ts:12", { sharedRidePrice: 250000, charter4SeatPrice: 500000, charter7SeatPrice: 650000, parcelPrice: 150000, distanceKm: 48, durationMinutes: 65 }],
  ["MP-004", "hd-cat-bi", "OWNER_VERIFICATION_RECORD_PHASE1.md", { sharedRidePrice: 300000, charter4SeatPrice: 600000, charter7SeatPrice: 750000, parcelPrice: 150000, distanceKm: 58, durationMinutes: 75 }],
  ["MP-005", "hd-qn", "data/routes.ts:14", { sharedRidePrice: 250000, charter4SeatPrice: 900000, charter7SeatPrice: 1100000, parcelPrice: 180000, distanceKm: 105, durationMinutes: 120 }],
  ["MP-019", "hd-ha-long", "Owner confirmation 2026-08-22", { sharedRidePrice: 250000, charter4SeatPrice: 900000, charter7SeatPrice: 1100000, parcelPrice: 180000, distanceKm: null, durationMinutes: null }],
  ["MP-006", "hp-qn", "data/routes.ts:15", { sharedRidePrice: null, charter4SeatPrice: null, charter7SeatPrice: null, parcelPrice: null, distanceKm: null, durationMinutes: null }],
].flatMap(([assetId, routeId, sourceRef, values]) => [
  ...Object.entries(values).map(([factName, value]) => claim(assetId, routeId, factName, value, sourceRef, factName.includes("Price") ? "DATA_CONFLICT-002" : null)),
  claim(assetId, routeId, "serviceAvailability", "Current route page claims xe ghép, charter 4–7 seats, and parcel demand in both directions.", "app/[slug]/page.tsx:53-68,159-184", "DATA_CONFLICT-003"),
  claim(assetId, routeId, "pricingQualification", "Final fare is confirmed after pickup, drop-off, time, passenger, luggage, or cargo details are known.", "app/[slug]/page.tsx:67-68"),
]);

const guideAssetClaimInput = [
  ["CP-002", "hd-qn", [
    ["serviceAvailability", "Claims Phong Cách has shared ride and charter demand for the corridor."],
    ["directionality", "Claims both directions are accepted."],
    ["schedule", "Says no fixed schedule is published; availability varies by day and endpoint."],
    ["destinationGranularity", "Says a specific Quảng Ninh destination is required."],
  ], "data/guide-posts.ts:58-84"],
  ["CP-003", "hd-hp", [
    ["serviceAvailability", "Claims Phong Cách has vehicles for the corridor."],
    ["directionality", "Claims both directions are accepted."],
    ["vehicleAvailability", "Describes shared ride or charter using 4–7-seat vehicles."],
    ["parcelAvailability", "Claims parcel demand is accepted subject to item and trip checks."],
  ], "data/guide-posts.ts:88-111"],
  ["CP-004", "hp-qn", [
    ["serviceAvailability", "Claims shared ride, charter, and parcel demand are accepted."],
    ["directionality", "Claims both directions are accepted."],
    ["schedule", "Says no fixed schedule is published."],
    ["destinationGranularity", "Says a specific Quảng Ninh destination is required."],
  ], "data/guide-posts.ts:116-140"],
  ["SC-001", "hd-qn", [
    ["bookingProcess", "Website request is followed by a vehicle and trip confirmation."],
    ["schedule", "Says no fixed schedule/time applies to every request."],
    ["directionality", "Asks customers to state whether a return direction is needed."],
  ], "data/guide-posts.ts:171-194"],
  ["SC-002", "hd-hp", [
    ["parcelAvailability", "Claims parcel demand is accepted only after item and trip checks."],
    ["parcelPricing", "Says no single price applies to every parcel."],
    ["parcelInputs", "Says dimensions, weight, packing, and pickup/drop-off are required."],
    ["parcelRestrictions", "Says not every item can be assumed acceptable."],
  ], "data/guide-posts.ts:198-221"],
  ["SC-004", "hd-hp", [
    ["directionality", "Claims the Hải Phòng → Hải Dương direction is accepted."],
    ["directionAvailability", "Says each direction may have different vehicle availability."],
    ["vehicleAvailability", "Describes shared ride, 4-seat charter, and 7-seat charter."],
  ], "data/guide-posts.ts:279-302"],
  ["CP-007", "hd-cat-bi", [
    ["serviceAvailability", "Claims shared ride and charter airport demand are accepted."],
    ["directionality", "Claims Cát Bi → Hải Dương and Hải Dương → Cát Bi are accepted."],
    ["airportRequirements", "Asks for flight information and terminal if known."],
    ["luggage", "Says vehicle choice depends on passenger and luggage details."],
    ["schedule", "Says vehicle availability is checked per requested trip."],
  ], "data/guide-posts.ts:306-329"],
];

export const phase1AssetClaims = Object.freeze([
  ...moneyAssetClaims,
  ...guideAssetClaimInput.flatMap(([assetId, routeId, claims, sourceRef]) => claims.map(([factName, value]) => claim(
    assetId,
    routeId,
    factName,
    value,
    sourceRef,
    factName === "parcelPricing" ? "DATA_CONFLICT-001" : ["serviceAvailability", "directionality"].includes(factName) ? "DATA_CONFLICT-003" : null,
  ))),
]);

export const phase1DataConflicts = Object.freeze([
  Object.freeze({
    conflictId: "DATA_CONFLICT-001",
    status: "RESOLVED_IN_KB_PUBLIC_REMEDIATION_OPEN",
    severity: "HIGH",
    routes: Object.freeze(["hd-hp", "hd-qn", "hp-qn"]),
    fact: "parcelPricing",
    observations: Object.freeze([
      "Homepage route directory states 'Chỉ từ 150k'.",
      "Registered Phase 1 route bases are 150,000 VND, 180,000 VND, and null.",
      "SC-002 says there is no single parcel price and pricing depends on item and trip inputs.",
      "Booking logic applies stored/formula base plus volumetric-weight surcharge.",
    ]),
    sourceRefs: Object.freeze(["components/BookingExperience.tsx:309,375", "data/routes.ts:12-15", "data/guide-posts.ts:198-221", "lib/pricing.ts:8-13"]),
    resolution: "Owner confirmed parcel service and that stored 150k/180k values are minimum starting prices. HP-QN remains contact-only; unverified booking/cargo formulas require separate public remediation.",
  }),
  Object.freeze({
    conflictId: "DATA_CONFLICT-002",
    status: "RESOLVED_IN_KB_PUBLIC_REMEDIATION_OPEN",
    severity: "HIGH",
    routes: Object.freeze(["hd-hp", "hd-cat-bi", "hd-qn", "hp-qn"]),
    fact: "priceEvidence",
    observations: Object.freeze([
      "data/routes.ts comments that shared prices were confirmed.",
      "No per-field source, verifier, or verification date exists.",
      "TECH-001 therefore backfills these values as UNKNOWN rather than VERIFIED.",
    ]),
    sourceRefs: Object.freeze(["data/routes.ts:7-15", "data/seo/route-evidence.mjs:1-36"]),
    resolution: "All 12 stored numeric Phase 1 values are VERIFIED_FROM. HP-QN remains contact-only. Cát Bi has its own verified route-level starting prices; other endpoints inherit parent starting prices unless separately verified, without receiving an inferred endpoint-specific value or publication eligibility.",
  }),
  Object.freeze({
    conflictId: "DATA_CONFLICT-003",
    status: "PARTIALLY_RESOLVED",
    severity: "HIGH",
    routes: Object.freeze(["hd-hp", "hd-cat-bi", "hd-qn", "hp-qn"]),
    fact: "serviceAvailability",
    observations: Object.freeze([
      "Route pages and guides make affirmative 'Có' and both-direction service claims.",
      "No direction-specific availability, hours, endpoint coverage, or operations verifier exists.",
    ]),
    sourceRefs: Object.freeze(["app/[slug]/page.tsx:53-68,159-184", "data/guide-posts.ts:58-140,171-221,279-329", "data/seo/route-evidence.mjs:1-36"]),
    resolution: "Owner confirmed both directions, door-to-door pickup/drop-off, shared ride, charter, parcel delivery, payment after trip, and free advance booking. Hạ Long/Bãi Cháy service was separately confirmed for MP-019. Frequency, hours, lead time, waiting, and surcharges remain unresolved.",
  }),
]);

function fallbackMapping({ fallbackId, scope, routeId = null, service, currentOutput, formulaRef }) {
  return Object.freeze({
    fallbackId,
    scope,
    routeId,
    service,
    currentOutput,
    evidence: estimateFact(currentOutput, formulaRef, "Legacy public estimate observed and mapped during DATA-001."),
    remediationStatus: "DATA_REQUIRED",
    allowedForNewAssets: false,
    publicOutputPreservedInData001: true,
  });
}

export const legacyPriceFallbackMappings = Object.freeze([
  fallbackMapping({ fallbackId: "PF-001", scope: "REGISTERED_ROUTE", routeId: "hd-hy", service: "CHARTER_4_SEAT", currentOutput: 560000, formulaRef: "UNVERIFIED_PRICE_INVENTORY.md:22; lib/pricing.ts:20" }),
  fallbackMapping({ fallbackId: "PF-002", scope: "REGISTERED_ROUTE", routeId: "hd-hy", service: "CHARTER_7_SEAT", currentOutput: 700000, formulaRef: "UNVERIFIED_PRICE_INVENTORY.md:23; lib/pricing.ts:19" }),
  fallbackMapping({ fallbackId: "PF-003", scope: "REGISTERED_ROUTE", routeId: "hd-hanam", service: "CHARTER_4_SEAT", currentOutput: 990000, formulaRef: "UNVERIFIED_PRICE_INVENTORY.md:24; lib/pricing.ts:20" }),
  fallbackMapping({ fallbackId: "PF-004", scope: "REGISTERED_ROUTE", routeId: "hd-hanam", service: "CHARTER_7_SEAT", currentOutput: 1250000, formulaRef: "UNVERIFIED_PRICE_INVENTORY.md:25; lib/pricing.ts:19" }),
  fallbackMapping({ fallbackId: "PF-005", scope: "CUSTOM_ROUTE", service: "SHARED_RIDE", currentOutput: "max(120000, ceil10k(distanceKm × 3200)) × passengers", formulaRef: "UNVERIFIED_PRICE_INVENTORY.md:33; lib/pricing.ts:22" }),
  fallbackMapping({ fallbackId: "PF-006", scope: "CUSTOM_ROUTE", service: "CHARTER_4_SEAT", currentOutput: "max(250000, ceil10k(distanceKm × 11500))", formulaRef: "UNVERIFIED_PRICE_INVENTORY.md:34; lib/pricing.ts:23" }),
  fallbackMapping({ fallbackId: "PF-007", scope: "CUSTOM_ROUTE", service: "CHARTER_7_SEAT", currentOutput: "max(300000, ceil10k(distanceKm × 14500))", formulaRef: "UNVERIFIED_PRICE_INVENTORY.md:35; lib/pricing.ts:23" }),
  fallbackMapping({ fallbackId: "PF-008", scope: "CUSTOM_ROUTE", service: "PARCEL", currentOutput: "ceil10k(max(150000, ceil10k(distanceKm × 1200)) + excessWeightKg × 6000)", formulaRef: "UNVERIFIED_PRICE_INVENTORY.md:36; lib/pricing.ts:8-13" }),
]);

export const phase1KnowledgeBase = Object.freeze({
  meta: phase1KnowledgeMeta,
  pricingRules: phase1OwnerPricingRules,
  parentRoutes: phase1ParentRoutes,
  subRoutes: phase1SubRoutes,
  assetClaims: phase1AssetClaims,
  conflicts: phase1DataConflicts,
  legacyPriceFallbacks: legacyPriceFallbackMappings,
});

export { factsIn as collectKnowledgeFacts };
