const AUDIT_DATE = "2026-08-21";
const AUDITOR = "Codex repository audit";

export const phase1KnowledgeMeta = Object.freeze({
  taskId: "DATA-001",
  version: "v1",
  auditedAt: AUDIT_DATE,
  scope: Object.freeze(["CLUSTER-A", "CLUSTER-B", "CLUSTER-C"]),
  publicConsumerEnabled: false,
  notes: "Data-only audit. No record in this module creates a URL or changes publication state.",
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

function commercialFacts(values, sourceRef, notes = "Stored route values") {
  return Object.freeze({
    sharedRidePrice: values.sharedRidePrice == null ? gapFact("No fixed shared-ride value is stored.") : repoFact(values.sharedRidePrice, sourceRef, notes),
    charter4SeatPrice: values.charter4SeatPrice == null ? gapFact("No fixed 4-seat charter value is stored.") : repoFact(values.charter4SeatPrice, sourceRef, notes),
    charter7SeatPrice: values.charter7SeatPrice == null ? gapFact("No fixed 7-seat charter value is stored.") : repoFact(values.charter7SeatPrice, sourceRef, notes),
    parcelPrice: values.parcelPrice == null ? gapFact("No fixed parcel value is stored.") : repoFact(values.parcelPrice, sourceRef, notes),
    pricingNotes: repoFact("Website values are reference values; final price is confirmed per trip.", "app/[slug]/page.tsx:67-68; app/chinh-sach-dat-xe/page.tsx:20", "Current public pricing qualification"),
    surcharges: gapFact("Night, remote-area, airport, waiting, and holiday surcharge rules are not recorded."),
  });
}

function emptyCommercialFacts() {
  return Object.freeze({
    sharedRidePrice: gapFact("Owner confirmation required."),
    charter4SeatPrice: gapFact("Owner confirmation required."),
    charter7SeatPrice: gapFact("Owner confirmation required."),
    parcelPrice: gapFact("Owner confirmation required."),
    pricingNotes: gapFact("Fixed price versus per-trip quote is unknown."),
    surcharges: gapFact("Surcharge rules are unknown."),
  });
}

function journeyFacts(distanceKm, durationMinutes, sourceRef, airportInformation = null, airportSourceRef = null) {
  return Object.freeze({
    distanceKm: distanceKm == null ? gapFact("No route distance is stored.") : repoFact(distanceKm, sourceRef, "Stored route distance"),
    durationMinutes: durationMinutes == null ? gapFact("No route duration is stored.") : repoFact(durationMinutes, sourceRef, "Stored route duration"),
    pickupAreas: gapFact("No owner-confirmed pickup-area list exists."),
    dropoffAreas: gapFact("No owner-confirmed drop-off-area list exists."),
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

function operationalFacts({ serviceClaim, serviceRef, vehicleClaim, vehicleRef, luggageClaim, luggageRef, parcelClaim, parcelRef }) {
  return Object.freeze({
    serviceAvailability: repoFact(serviceClaim, serviceRef, "Current content service-availability claim"),
    operatingHours: gapFact("No operating-hours rule exists in repository evidence."),
    bookingLeadTime: gapFact("Content says to call early but provides no operational lead-time rule."),
    vehicleNotes: repoFact(vehicleClaim, vehicleRef, "Current content vehicle claim"),
    luggageNotes: repoFact(luggageClaim, luggageRef, "Current content luggage instruction"),
    parcelNotes: repoFact(parcelClaim, parcelRef, "Current content parcel-service claim"),
    waitingPolicy: gapFact("No waiting-time or waiting-fee policy exists in repository evidence."),
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
  });
}

function directionFacts(directionId, origin, destination, sourceRef, serviceClaim, airportRequirements = null, airportRef = null) {
  return Object.freeze({
    directionId,
    origin,
    destination,
    serviceAvailability: repoFact(serviceClaim, sourceRef, "Current content direction-specific availability claim"),
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
  return Object.freeze({
    ...record,
    completeness: Object.freeze({
      commercial: scoreSection(record.commercial),
      journey: scoreSection(record.journey),
      operations: scoreSection(record.operations),
      evidence: decisionFacts.length ? Math.round((evidenced / decisionFacts.length) * 100) : 0,
    }),
    readiness: "DATA_REQUIRED",
  });
}

export const phase1ParentRoutes = Object.freeze([
  assessRecord({
    routeId: "hd-hp",
    origin: "Hải Dương",
    destination: "Hải Phòng",
    directionality: "BIDIRECTIONAL_CLAIM_UNVERIFIED",
    parentCluster: "CLUSTER-A",
    routeType: "PARENT_CORRIDOR",
    assetIds: Object.freeze(["MP-003", "CP-003", "SC-002", "SC-004"]),
    publicationState: "EXISTING_PUBLISHED",
    commercial: commercialFacts({ sharedRidePrice: 250000, charter4SeatPrice: 500000, charter7SeatPrice: 650000, parcelPrice: 150000 }, "data/routes.ts:12"),
    journey: journeyFacts(48, 65, "data/routes.ts:12"),
    operations: operationalFacts({
      serviceClaim: "Current pages claim xe ghép, charter 4–7 seats, and parcel demand are accepted in both directions; vehicle availability is checked per trip.",
      serviceRef: "app/[slug]/page.tsx:53-68; data/guide-posts.ts:93-109,279-300",
      vehicleClaim: "Current content offers shared ride or charter using 4–7-seat vehicles.",
      vehicleRef: "data/guide-posts.ts:93-109,279-300",
      luggageClaim: "Passengers are asked to provide passenger count and luggage details before vehicle confirmation.",
      luggageRef: "data/guide-posts.ts:93-105,279-295",
      parcelClaim: "Current content says parcel requests are accepted subject to item and trip checks.",
      parcelRef: "data/guide-posts.ts:198-221",
    }),
    directions: Object.freeze([
      directionFacts("hd-to-hp", "Hải Dương", "Hải Phòng", "data/guide-posts.ts:93-109", "Current guide claims the route is accepted in this direction."),
      directionFacts("hp-to-hd", "Hải Phòng", "Hải Dương", "data/guide-posts.ts:279-300", "Current reverse-direction guide claims service is accepted, with availability checked per trip."),
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
    directionality: "BIDIRECTIONAL_CLAIM_UNVERIFIED",
    parentCluster: "CLUSTER-B",
    routeType: "PARENT_CORRIDOR",
    assetIds: Object.freeze(["MP-005", "CP-002", "SC-001"]),
    publicationState: "EXISTING_PUBLISHED",
    commercial: commercialFacts({ sharedRidePrice: 250000, charter4SeatPrice: 900000, charter7SeatPrice: 1100000, parcelPrice: 180000 }, "data/routes.ts:14"),
    journey: journeyFacts(105, 120, "data/routes.ts:14"),
    operations: operationalFacts({
      serviceClaim: "Current pages claim shared ride, charter, and parcel demand are accepted in both directions, with each trip checked.",
      serviceRef: "app/[slug]/page.tsx:53-68; data/guide-posts.ts:58-84,171-194",
      vehicleClaim: "Current content describes shared or charter options using 4–7-seat vehicles.",
      vehicleRef: "data/guide-posts.ts:58-84,171-194",
      luggageClaim: "Passengers are asked to provide passenger count and luggage or cargo details.",
      luggageRef: "data/guide-posts.ts:58-84,171-194",
      parcelClaim: "Current route templates claim parcel demand is accepted, but no Phase 1 parcel rule is evidenced.",
      parcelRef: "app/[slug]/page.tsx:53-68,159-184",
    }),
    directions: Object.freeze([
      directionFacts("hd-to-qn", "Hải Dương", "Quảng Ninh", "data/guide-posts.ts:58-84,171-194", "Current content claims demand is accepted in this direction."),
      directionFacts("qn-to-hd", "Quảng Ninh", "Hải Dương", "data/guide-posts.ts:79-81,188-191", "Current content claims reverse demand is accepted, subject to endpoint and trip checks."),
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
    directionality: "BIDIRECTIONAL_CLAIM_UNVERIFIED",
    parentCluster: "CLUSTER-C",
    routeType: "PARENT_CORRIDOR",
    assetIds: Object.freeze(["MP-006", "CP-004"]),
    publicationState: "EXISTING_PUBLISHED",
    commercial: commercialFacts({ sharedRidePrice: null, charter4SeatPrice: null, charter7SeatPrice: null, parcelPrice: null }, "data/routes.ts:15"),
    journey: journeyFacts(null, null, "data/routes.ts:15"),
    operations: operationalFacts({
      serviceClaim: "Current pages claim shared ride, charter, and parcel demand are accepted in both directions; availability is checked per trip.",
      serviceRef: "app/[slug]/page.tsx:53-68; data/guide-posts.ts:116-140",
      vehicleClaim: "Current content describes shared or charter options using 4–7-seat vehicles.",
      vehicleRef: "data/guide-posts.ts:116-140",
      luggageClaim: "Passengers are asked to provide passenger count and luggage details.",
      luggageRef: "data/guide-posts.ts:116-140",
      parcelClaim: "Current route template claims parcel demand is accepted; route data contains no parcel price.",
      parcelRef: "app/[slug]/page.tsx:53-68,159-184; data/routes.ts:15",
    }),
    directions: Object.freeze([
      directionFacts("hp-to-qn", "Hải Phòng", "Quảng Ninh", "data/guide-posts.ts:116-140", "Current guide claims demand is accepted in this direction."),
      directionFacts("qn-to-hp", "Quảng Ninh", "Hải Phòng", "data/guide-posts.ts:134-137", "Current guide claims both directions, without direction-specific operational facts."),
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
    serviceStatus: "UNCONFIRMED",
    existingAssetIds: Object.freeze(["MP-004", "CP-007"]),
    publicationState: "EXISTING_PUBLISHED",
    canonical: "/xe-hai-duong-cat-bi",
    commercial: commercialFacts({ sharedRidePrice: 300000, charter4SeatPrice: 600000, charter7SeatPrice: 750000, parcelPrice: 150000 }, "data/routes.ts:13"),
    journey: journeyFacts(58, 75, "data/routes.ts:13", "Current guide asks customers to provide flight, terminal (if known), passenger, and luggage details; no waiting or early/late-flight rule is stored.", "data/guide-posts.ts:306-329"),
    operations: operationalFacts({
      serviceClaim: "Current asset claims shared and charter demand are accepted in both directions, subject to trip checks.",
      serviceRef: "data/guide-posts.ts:306-329",
      vehicleClaim: "Current content offers shared ride, 4-seat charter, and 7-seat charter options.",
      vehicleRef: "data/guide-posts.ts:306-329",
      luggageClaim: "Vehicle choice is said to depend on passenger and luggage details.",
      luggageRef: "data/guide-posts.ts:306-329",
      parcelClaim: "A parcel price exists in route data, but the Cát Bi asset does not provide an airport parcel rule.",
      parcelRef: "data/routes.ts:13",
    }),
  }),
  candidateSubRoute({ subRouteId: "hd-thuy-nguyen", parentRouteId: "hd-hp", parentCluster: "CLUSTER-A", endpoint: "Thủy Nguyên", endpointProvince: "Hải Phòng" }),
  candidateSubRoute({ subRouteId: "hd-do-son", parentRouteId: "hd-hp", parentCluster: "CLUSTER-A", endpoint: "Đồ Sơn", endpointProvince: "Hải Phòng" }),
  ...[
    ["hd-dong-trieu", "Đông Triều"],
    ["hd-uong-bi", "Uông Bí"],
    ["hd-quang-yen", "Quảng Yên"],
    ["hd-ha-long", "Hạ Long"],
    ["hd-bai-chay", "Bãi Cháy"],
    ["hd-cam-pha", "Cẩm Phả"],
    ["hd-van-don", "Vân Đồn"],
    ["hd-ao-tien", "Ao Tiên"],
    ["hd-mong-cai", "Móng Cái"],
  ].map(([subRouteId, endpoint]) => candidateSubRoute({ subRouteId, parentRouteId: "hd-qn", parentCluster: "CLUSTER-B", endpoint, endpointProvince: "Quảng Ninh" })),
]);

function claim(assetId, routeId, fact, currentValue, sourceRef, conflictId = null) {
  return Object.freeze({
    assetId,
    routeId,
    fact,
    currentValue,
    evidence: repoFact(currentValue, sourceRef, "Business-impacting claim observed in a Phase 1 asset"),
    status: "UNKNOWN",
    conflictId,
  });
}

const moneyAssetClaims = [
  ["MP-003", "hd-hp", "data/routes.ts:12", { sharedRidePrice: 250000, charter4SeatPrice: 500000, charter7SeatPrice: 650000, parcelPrice: 150000, distanceKm: 48, durationMinutes: 65 }],
  ["MP-004", "hd-cat-bi", "data/routes.ts:13", { sharedRidePrice: 300000, charter4SeatPrice: 600000, charter7SeatPrice: 750000, parcelPrice: 150000, distanceKm: 58, durationMinutes: 75 }],
  ["MP-005", "hd-qn", "data/routes.ts:14", { sharedRidePrice: 250000, charter4SeatPrice: 900000, charter7SeatPrice: 1100000, parcelPrice: 180000, distanceKm: 105, durationMinutes: 120 }],
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
    resolution: "Owner must define whether 150k is a valid minimum, route-specific base, marketing claim, or should later be removed.",
  }),
  Object.freeze({
    conflictId: "DATA_CONFLICT-002",
    severity: "HIGH",
    routes: Object.freeze(["hd-hp", "hd-cat-bi", "hd-qn", "hp-qn"]),
    fact: "priceEvidence",
    observations: Object.freeze([
      "data/routes.ts comments that shared prices were confirmed.",
      "No per-field source, verifier, or verification date exists.",
      "TECH-001 therefore backfills these values as UNKNOWN rather than VERIFIED.",
    ]),
    sourceRefs: Object.freeze(["data/routes.ts:7-15", "data/seo/route-evidence.mjs:1-36"]),
    resolution: "Owner must confirm, correct, or mark each stored price as per-trip/no-fixed-price and provide verifier/date.",
  }),
  Object.freeze({
    conflictId: "DATA_CONFLICT-003",
    severity: "HIGH",
    routes: Object.freeze(["hd-hp", "hd-cat-bi", "hd-qn", "hp-qn"]),
    fact: "serviceAvailability",
    observations: Object.freeze([
      "Route pages and guides make affirmative 'Có' and both-direction service claims.",
      "No direction-specific availability, hours, endpoint coverage, or operations verifier exists.",
    ]),
    sourceRefs: Object.freeze(["app/[slug]/page.tsx:53-68,159-184", "data/guide-posts.ts:58-140,171-221,279-329", "data/seo/route-evidence.mjs:1-36"]),
    resolution: "Owner must classify each corridor/direction/endpoint as confirmed, unconfirmed, not serviced, daily, or per-trip.",
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
  parentRoutes: phase1ParentRoutes,
  subRoutes: phase1SubRoutes,
  assetClaims: phase1AssetClaims,
  conflicts: phase1DataConflicts,
  legacyPriceFallbacks: legacyPriceFallbackMappings,
});

export { factsIn as collectKnowledgeFacts };
