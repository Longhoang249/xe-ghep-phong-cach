const OWNER_SOURCE = "OWNER_VERIFICATION_RECORD_PHASE1.md";
const AUDIT_DATE = "2026-08-23";

export const endpointAuditEvidenceStatuses = Object.freeze(["VERIFIED", "ESTIMATE", "UNKNOWN"]);
export const endpointPublicationReadiness = Object.freeze(["READY", "NEAR_READY", "BLOCKED"]);

function auditFact(value, status, notes, sourceRef = null) {
  return Object.freeze({
    value,
    status,
    sourceType: status === "VERIFIED" ? "OWNER" : null,
    sourceRef,
    verifiedAt: status === "VERIFIED" ? "2026-08-22" : null,
    verifiedBy: status === "VERIFIED" ? "Owner" : null,
    notes,
  });
}

function verified(value, notes, sourceRef = OWNER_SOURCE) {
  return auditFact(value, "VERIFIED", notes, sourceRef);
}

function unknown(notes) {
  return auditFact(null, "UNKNOWN", notes);
}

function corridorInheritanceFact(serviceConfirmed) {
  return verified(
    serviceConfirmed ? "ALLOWED_WITH_FROM_SEMANTICS" : "POLICY_EXISTS_SERVICE_GATE_CLOSED",
    serviceConfirmed
      ? "Owner allows named endpoints to inherit the Hải Dương - Quảng Ninh corridor starting-price facts when no route-specific exception exists. This is not a separate endpoint price."
      : "The Owner-approved corridor-inheritance rule exists, but it cannot be used to publish an endpoint whose service availability remains unconfirmed.",
  );
}

function endpointFacts(endpoint, confirmed) {
  const confirmedScope = `${endpoint} is covered by the Owner-confirmed Hải Dương - Hạ Long/Bãi Cháy service and the general Phase 1 service commitments; exact-address and trip availability still require checking.`;
  const missingScope = `Owner/operations has not confirmed actual Hải Dương ⇄ ${endpoint} service.`;
  return Object.freeze({
    routeAvailability: confirmed ? verified(true, confirmedScope) : unknown(missingScope),
    reverseDirection: confirmed ? verified(true, `${confirmedScope} The general Phase 1 confirmation covers both directions.`) : unknown(`Reverse-direction service for ${endpoint} is unconfirmed.`),
    doorToDoor: confirmed ? verified("ADDRESS_CHECK_REQUIRED", `${confirmedScope} Door-to-door is verified at service scope, not as an every-address guarantee.`) : unknown(`Door-to-door scope for ${endpoint} is unconfirmed.`),
    sharedRide: confirmed ? verified(true, `${confirmedScope} Shared ride is verified; vehicle availability remains trip-specific.`) : unknown(`Shared-ride service for ${endpoint} is unconfirmed.`),
    charter: confirmed ? verified(true, `${confirmedScope} Private charter is verified; vehicle availability remains trip-specific.`) : unknown(`Charter service for ${endpoint} is unconfirmed.`),
    parcel: confirmed ? verified(true, `${confirmedScope} Parcel service is verified; item acceptance remains trip-specific.`) : unknown(`Parcel service for ${endpoint} is unconfirmed.`),
    endpointSharedPrice: unknown(`No separately verified shared-ride price exists for ${endpoint}.`),
    endpointCharterPrice: unknown(`No separately verified 4-seat or 7-seat charter price exists for ${endpoint}.`),
    endpointParcelPrice: unknown(`No separately verified parcel price exists for ${endpoint}.`),
    corridorPriceInheritance: corridorInheritanceFact(confirmed),
  });
}

function score({ evidence, seo, fit, links, operations }) {
  return Object.freeze({
    evidenceCompleteness: evidence,
    transactionalSeoValue: seo,
    strategicFit: fit,
    internalLinkPotential: links,
    operationalClarity: operations,
    total: evidence + seo + fit + links + operations,
    model: "40 evidence + 25 transactional SEO + 20 strategic fit + 10 internal links + 5 operations",
  });
}

function endpointRecord({
  id,
  endpoint,
  confirmed = false,
  currentOwnership = "PARENT_MP005_ONLY",
  readiness,
  priority,
  blockingUnknowns,
  notes,
}) {
  return Object.freeze({
    id,
    endpoint,
    parentRouteId: "hd-qn",
    currentOwnership,
    facts: endpointFacts(endpoint, confirmed),
    seoValue: "HEURISTIC_REQUIRES_SERP_VALIDATION",
    priorityScore: score(priority),
    publicationReadiness: readiness,
    blockingUnknowns: Object.freeze(blockingUnknowns),
    notes,
  });
}

export const quangNinhEndpointAudit = Object.freeze([
  endpointRecord({
    id: "hd-bai-chay",
    endpoint: "Bãi Cháy",
    confirmed: true,
    currentOwnership: "MP019_HA_LONG_BAI_CHAY",
    readiness: "NEAR_READY",
    priority: { evidence: 32, seo: 22, fit: 20, links: 10, operations: 2 },
    blockingUnknowns: [
      "Whether Bãi Cháy is operationally distinct from Hạ Long or should remain inside MP-019.",
      "Distinct pickup/drop-off boundary, if any; every-address availability remains unverified.",
      "Cannibalization/ownership decision against the existing MP-019 Hạ Long/Bãi Cháy page.",
    ],
    notes: "Existing Owner evidence confirms service, but it does not justify a second overlapping URL. No separate endpoint price exists.",
  }),
  endpointRecord({
    id: "hd-uong-bi",
    endpoint: "Uông Bí",
    readiness: "BLOCKED",
    priority: { evidence: 4, seo: 12, fit: 19, links: 8, operations: 0 },
    blockingUnknowns: ["Actual service", "Both directions", "Service modes", "Door-to-door boundary"],
    notes: "Parent-page geography/search orientation is not service evidence; independent SEO value also needs SERP validation.",
  }),
  endpointRecord({
    id: "hd-cam-pha",
    endpoint: "Cẩm Phả",
    readiness: "BLOCKED",
    priority: { evidence: 4, seo: 18, fit: 20, links: 8, operations: 0 },
    blockingUnknowns: ["Actual Hải Dương-wide service versus selected-area service", "Both directions", "Service modes", "Door-to-door boundary"],
    notes: "RES-002 found a useful market signal, but it is public market evidence rather than Phong Cách service evidence.",
  }),
  endpointRecord({
    id: "hd-van-don",
    endpoint: "Vân Đồn",
    readiness: "BLOCKED",
    priority: { evidence: 4, seo: 20, fit: 20, links: 8, operations: 0 },
    blockingUnknowns: ["Actual service", "Both directions", "Service modes", "Door-to-door boundary", "Whether Ao Tiên is included"],
    notes: "Strongest unconfirmed endpoint heuristic after Bãi Cháy, but no Phong Cách availability evidence exists.",
  }),
  endpointRecord({
    id: "hd-ao-tien",
    endpoint: "Ao Tiên",
    readiness: "BLOCKED",
    priority: { evidence: 4, seo: 10, fit: 16, links: 6, operations: 0 },
    blockingUnknowns: ["Actual service", "Both directions", "Service modes", "Whether Ao Tiên is part of Vân Đồn rather than a standalone operating endpoint"],
    notes: "Keep grouped with Vân Đồn until operations and later SERP validation prove distinct intent and service scope.",
  }),
  endpointRecord({
    id: "hd-dong-trieu",
    endpoint: "Đông Triều",
    readiness: "BLOCKED",
    priority: { evidence: 4, seo: 18, fit: 19, links: 8, operations: 0 },
    blockingUnknowns: ["Actual service", "Both directions", "Service modes", "Door-to-door boundary"],
    notes: "Public endpoint inventory supports later SERP validation only; it does not establish Phong Cách service.",
  }),
  endpointRecord({
    id: "hd-quang-yen",
    endpoint: "Quảng Yên",
    readiness: "BLOCKED",
    priority: { evidence: 4, seo: 8, fit: 15, links: 6, operations: 0 },
    blockingUnknowns: ["Actual service", "Both directions", "Service modes", "Door-to-door boundary", "Distinct SEO demand"],
    notes: "Low independent market evidence in RES-002; retain as a parent-page geography term unless both service and demand are proven.",
  }),
  endpointRecord({
    id: "hd-mong-cai",
    endpoint: "Móng Cái",
    readiness: "BLOCKED",
    priority: { evidence: 4, seo: 17, fit: 18, links: 7, operations: 0 },
    blockingUnknowns: ["Actual service", "Both directions", "Service modes", "Door-to-door boundary", "Regular versus quote-only acceptance"],
    notes: "Long-distance endpoint market evidence does not establish that Phong Cách accepts the route.",
  }),
  endpointRecord({
    id: "hd-ha-long",
    endpoint: "Hạ Long",
    confirmed: true,
    currentOwnership: "MP019_PUBLISHED",
    readiness: "READY",
    priority: { evidence: 38, seo: 22, fit: 20, links: 10, operations: 3 },
    blockingUnknowns: [],
    notes: "Already published as MP-019; it is a baseline endpoint, not a candidate for a new SPRINT-006 URL.",
  }),
]);

export const endpointWebsiteClaimAudit = Object.freeze([
  Object.freeze({
    surface: "MP-005",
    finding: "DATA_MODEL_COMPLIANT_PUBLIC_RENDER_GAP",
    notes: "The governed upgrade data keeps named endpoints as geography/search orientation only, but the SPRINT-005 scan-first renderer does not currently render the endpoint list/boundary while its FAQ still refers to listed endpoints. This is a public presentation regression, not evidence permission to add endpoint claims.",
  }),
  Object.freeze({
    surface: "MP-019",
    finding: "COMPLIANT_WITH_SCOPE_BOUNDARY",
    notes: "Hạ Long/Bãi Cháy service is Owner-confirmed. Copy avoids a separate Bãi Cháy price and avoids every-address or always-available claims.",
  }),
  Object.freeze({
    surface: "Phase 1 KB hd-bai-chay",
    finding: "STALE_RECORD_RESOLVED",
    notes: "DATA-003 aligns service status with the existing Owner record while keeping the endpoint DATA_ONLY and publication-ineligible.",
  }),
]);

export const data003Recommendation = Object.freeze({
  taskId: "DATA-003",
  auditedAt: AUDIT_DATE,
  recommendedNextMoneyPage: null,
  decision: "NONE",
  reason: "Hạ Long is already published. Bãi Cháy has service evidence but is already owned by MP-019 and lacks a distinct operating/content boundary. Every other endpoint remains service-unconfirmed.",
  risks: Object.freeze([
    "A separate Bãi Cháy page could cannibalize MP-019.",
    "Publishing any other endpoint would convert geography or parent-corridor pricing policy into an unsupported service claim.",
  ]),
});

export function collectEndpointAuditFacts() {
  return quangNinhEndpointAudit.flatMap((record) => Object.values(record.facts));
}

export function summarizeEndpointAudit() {
  const facts = collectEndpointAuditFacts();
  return Object.freeze({
    endpoints: quangNinhEndpointAudit.length,
    totalFacts: facts.length,
    evidence: Object.freeze(Object.fromEntries(endpointAuditEvidenceStatuses.map((status) => [status, facts.filter((fact) => fact.status === status).length]))),
    readiness: Object.freeze(Object.fromEntries(endpointPublicationReadiness.map((status) => [status, quangNinhEndpointAudit.filter((record) => record.publicationReadiness === status).length]))),
  });
}
