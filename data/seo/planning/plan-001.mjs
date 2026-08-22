/**
 * PLAN-001 — joined Sprint 001 candidate pool.
 *
 * Planning only: this file creates no SEO asset, URL, route, or publication
 * state. Opportunity scores come from the bounded RES-002 sample and are not
 * search-volume or traffic estimates.
 */

export const plan001Meta = Object.freeze({
  taskId: "PLAN-001",
  createdAt: "2026-08-22",
  status: "REVIEW",
  inputs: Object.freeze({
    research: "data/seo/research/res-002-serp.mjs",
    routeKnowledge: "data/seo/route-knowledge/phase1.mjs",
    ownerEvidence: "OWNER_VERIFICATION_RECORD_PHASE1.md",
  }),
  guardrails: Object.freeze([
    "No content production.",
    "No public website change.",
    "No URL or asset-registry creation.",
    "No endpoint publication before service confirmation.",
    "UNKNOWN facts are blockers only when the specific asset cannot be accurate or useful without them.",
  ]),
});

export const plan001GapClasses = Object.freeze([
  "OWNER_REQUIRED",
  "PUBLIC_RESEARCH_OK",
  "OPTIONAL",
  "BLOCKING",
]);

const gap = (fact, classification, resolution) => Object.freeze({ fact, classification, resolution });

const verifiedCorridorFacts = Object.freeze([
  "Both directions",
  "Shared ride",
  "Private charter",
  "Parcel delivery",
  "Home pickup",
  "Destination drop-off",
  "Payment after trip",
  "Free advance booking",
]);

const candidate = (record) => Object.freeze({
  ...record,
  verifiedFacts: Object.freeze(record.verifiedFacts),
  researchSourceIds: Object.freeze(record.researchSourceIds),
  missingFacts: Object.freeze(record.missingFacts),
  internalLinkTargets: Object.freeze(record.internalLinkTargets),
});

export const sprint001CandidatePool = Object.freeze([
  candidate({
    assetId: "MP-005",
    primaryIntent: "xe ghép Hải Dương Quảng Ninh",
    role: "MONEY",
    urlState: "EXISTING",
    url: "/xe-ghep-hai-duong-quang-ninh",
    opportunityScore: 92,
    competition: "MEDIUM — exact pages recur, but several are stale or broad",
    businessFit: "HIGH — parent corridor confirmed",
    verifiedFacts: [...verifiedCorridorFacts, "Shared from 250,000 VND", "4-seat charter from 900,000 VND", "7-seat charter from 1,100,000 VND", "Parcel from 180,000 VND", "Endpoint price rule inherits the parent starting price"],
    researchSourceIds: ["GHD", "BUSVN_HD_QN", "XGHD_PROVINCES"],
    missingFacts: [
      gap("Current public-source distance/time ranges by representative destination", "PUBLIC_RESEARCH_OK", "Research by endpoint/context; do not present one corridor number as universal."),
      gap("Current public transport alternatives and operator evidence", "PUBLIC_RESEARCH_OK", "Use maintained official/operator/aggregator sources with access date."),
      gap("Named-endpoint service coverage", "OPTIONAL", "Not needed for a parent-corridor asset; omit endpoint availability claims."),
      gap("Exact operating hours, fixed frequency, and lead time", "OPTIONAL", "Do not claim them; use contact/availability wording."),
      gap("Detailed pickup/drop-off boundary list", "OPTIONAL", "Use the verified general door-to-door claim without inventing districts."),
    ],
    queue: "DO_FIRST",
    sprint001: true,
    sprintOrder: 1,
    internalLinkTargets: ["CP-002", "SC-001"],
    action: "Upgrade the existing bidirectional parent page; use verified starting-price semantics and keep endpoints scoped as candidates.",
  }),
  candidate({
    assetId: "MP-003",
    primaryIntent: "xe ghép Hải Dương Hải Phòng",
    role: "MONEY",
    urlState: "EXISTING",
    url: "/xe-ghep-hai-duong-hai-phong",
    opportunityScore: 86,
    competition: "MEDIUM-STRONG — exact operators, fresh list content, and price pages",
    businessFit: "HIGH — parent corridor and stored prices confirmed",
    verifiedFacts: [...verifiedCorridorFacts, "Shared from 250,000 VND", "4-seat charter from 500,000 VND", "7-seat charter from 650,000 VND", "Parcel from 150,000 VND"],
    researchSourceIds: ["GHD", "MOTOR_HD_HP", "XGHDHP_HOME"],
    missingFacts: [
      gap("Current road distance and realistic public travel-time range", "PUBLIC_RESEARCH_OK", "Verify with current map/transport sources and state conditions."),
      gap("Current coach/limousine/taxi alternatives", "PUBLIC_RESEARCH_OK", "Research for comparison and objection handling."),
      gap("Exact operating hours and fixed frequency", "OPTIONAL", "Avoid daily/24-7/fixed-schedule claims."),
      gap("District-level pickup/drop-off list", "OPTIONAL", "General door-to-door evidence is sufficient for the parent asset."),
    ],
    queue: "DO_FIRST",
    sprint001: true,
    sprintOrder: 2,
    internalLinkTargets: ["CP-003", "SC-004"],
    action: "Upgrade the existing bidirectional page and absorb reverse-direction commercial intent.",
  }),
  candidate({
    assetId: "CP-003",
    primaryIntent: "Hải Dương Hải Phòng đi bằng gì",
    role: "COMPARISON",
    urlState: "EXISTING",
    url: "/blog/di-hai-duong-hai-phong-bang-phuong-tien-gi",
    opportunityScore: 68,
    competition: "MEDIUM — mixed operator, list, and aggregator results",
    businessFit: "HIGH — directly supports MP-003",
    verifiedFacts: [...verifiedCorridorFacts, "All stored HD-HP values are starting prices"],
    researchSourceIds: ["REDBUS_HD_HP", "MOTOR_HD_HP", "GHD"],
    missingFacts: [
      gap("Current transport modes, booking channels, and route options", "PUBLIC_RESEARCH_OK", "Use current official/operator/aggregator sources."),
      gap("Comparable distance/time ranges and qualification", "PUBLIC_RESEARCH_OK", "Source ranges and avoid hard promises."),
      gap("A fixed Phong schedule", "OPTIONAL", "Not required for a useful mode-comparison article."),
      gap("Detailed Phong pickup boundaries", "OPTIONAL", "Link to MP-003 and use only the verified general service claim."),
    ],
    queue: "DO_FIRST",
    sprint001: true,
    sprintOrder: 3,
    internalLinkTargets: ["MP-003"],
    action: "Upgrade as the mode-choice article; keep booking and price intent on MP-003.",
  }),
  candidate({
    assetId: "CP-002",
    primaryIntent: "nhà xe / đi Hải Dương Quảng Ninh bằng gì",
    role: "COMPARISON",
    urlState: "EXISTING",
    url: "/blog/nhung-chuyen-xe-tu-hai-duong-di-quang-ninh",
    opportunityScore: 76,
    competition: "MEDIUM — uneven freshness and endpoint explanation",
    businessFit: "HIGH — supports MP-005 without needing endpoint service claims",
    verifiedFacts: [...verifiedCorridorFacts, "All stored HD-QN values are starting prices", "Named endpoint prices inherit the parent minimum"],
    researchSourceIds: ["BUSVN_HD_QN", "XGHD_PROVINCES", "VEXERE_QN_HD"],
    missingFacts: [
      gap("Current public transport/operator options by major destination", "PUBLIC_RESEARCH_OK", "Research comparison sources with dates; do not convert them into Phong facts."),
      gap("Geographic and travel context for major Quảng Ninh destinations", "PUBLIC_RESEARCH_OK", "Use authoritative geography/transport sources."),
      gap("Distance/time by representative endpoint", "PUBLIC_RESEARCH_OK", "Research per endpoint; avoid one universal number."),
      gap("Phong service at each named endpoint", "OPTIONAL", "Article can compare the parent corridor without claiming endpoint availability."),
      gap("Fixed schedule/frequency", "OPTIONAL", "Omit; do not infer from competitor inventory."),
    ],
    queue: "DO_FIRST",
    sprint001: true,
    sprintOrder: 4,
    internalLinkTargets: ["MP-005"],
    action: "Upgrade as the corridor comparison hub and route commercial intent to MP-005.",
  }),
  candidate({
    assetId: "MP-004",
    primaryIntent: "xe Hải Dương sân bay Cát Bi",
    role: "MONEY",
    urlState: "EXISTING",
    url: "/xe-hai-duong-cat-bi",
    opportunityScore: 88,
    competition: "MEDIUM — exact airport price and reverse-transfer pages",
    businessFit: "HIGH — route, directions, services, and starting prices confirmed",
    verifiedFacts: [...verifiedCorridorFacts, "Shared from 300,000 VND", "4-seat charter from 600,000 VND", "7-seat charter from 750,000 VND", "Parcel from 150,000 VND", "Cát Bi route-level service confirmed"],
    researchSourceIds: ["TAXI_HD_CB", "XGHDHP_HOME", "AIRPORT_TRANSFER"],
    missingFacts: [
      gap("Actual Cát Bi pickup/meeting procedure", "OWNER_REQUIRED", "Ask for one operational sentence or explicitly use contact-to-confirm wording."),
      gap("Flight-delay and waiting handling", "OWNER_REQUIRED", "Ask whether waiting is accepted and how customers are instructed; do not request a formula."),
      gap("Current airport access/terminal information", "PUBLIC_RESEARCH_OK", "Use maintained airport/airline authority sources."),
      gap("Night, parking, toll, and waiting surcharge amounts", "OPTIONAL", "Do not publish amounts or a formula; say final price is confirmed per trip."),
      gap("Recommended booking lead time", "OPTIONAL", "Omit until Owner supplies a real rule."),
    ],
    queue: "NEED_MINIMAL_OWNER_INPUT",
    sprint001: true,
    sprintOrder: 5,
    internalLinkTargets: ["CP-007", "MP-003"],
    action: "Include conditionally; obtain the two operational answers before final brief approval.",
  }),
  candidate({
    assetId: "CP-007",
    primaryIntent: "đi sân bay Cát Bi từ Hải Dương / xe ghép hay bao xe",
    role: "COMPARISON",
    urlState: "EXISTING",
    url: "/blog/xe-hai-duong-di-cat-bi-chon-xe-ghep-hay-bao-xe",
    opportunityScore: 71,
    competition: "MEDIUM — commercial and authoritative airport information are split",
    businessFit: "HIGH — supports confirmed MP-004",
    verifiedFacts: [...verifiedCorridorFacts, "Cát Bi shared/private starting prices", "Cát Bi route-level service confirmed"],
    researchSourceIds: ["VNA_CATBI", "TAXI_HD_CB", "AIRPORT_TRANSFER"],
    missingFacts: [
      gap("Actual Cát Bi pickup/meeting procedure", "OWNER_REQUIRED", "Share the same minimal answer collected for MP-004."),
      gap("Flight-delay and waiting handling", "OWNER_REQUIRED", "Share the same minimal answer collected for MP-004."),
      gap("Current airport access and traveler process", "PUBLIC_RESEARCH_OK", "Research from airport/airline authority sources."),
      gap("Exact luggage limits", "OPTIONAL", "Do not invent; advise customers to provide luggage details."),
      gap("Fixed lead time or 24-7 availability", "OPTIONAL", "Omit until verified."),
    ],
    queue: "NEED_MINIMAL_OWNER_INPUT",
    sprint001: true,
    sprintOrder: 6,
    internalLinkTargets: ["MP-004"],
    action: "Include conditionally with MP-004; one two-question Owner packet resolves both assets.",
  }),
  candidate({
    assetId: "MP-019",
    primaryIntent: "xe ghép Hải Dương Hạ Long",
    role: "MONEY",
    urlState: "NEW_CANDIDATE_NOT_CREATED",
    url: "/xe-ghep-hai-duong-ha-long",
    opportunityScore: 76,
    competition: "MEDIUM — dedicated competitor plus broad/templated pages",
    businessFit: "UNCONFIRMED ENDPOINT",
    verifiedFacts: [...verifiedCorridorFacts, "If service is confirmed, endpoint prices inherit HD-QN starting prices; no unique endpoint price is needed"],
    researchSourceIds: ["TAXI_HD_HL", "GHD", "XGHD_PROVINCES"],
    missingFacts: [
      gap("Phong actually accepts Hải Dương ⇄ Hạ Long in both directions", "BLOCKING", "Owner/operations must answer yes, no, or trip-by-trip before any URL or brief is approved."),
      gap("Whether Bãi Cháy is included in Hạ Long coverage or handled separately", "BLOCKING", "Owner/operations must define the operational scope."),
      gap("Actual pickup/drop-off coverage within the confirmed endpoint", "OWNER_REQUIRED", "Ask only after service is confirmed; a concise area rule is enough."),
      gap("Current public distance/time and transport alternatives", "PUBLIC_RESEARCH_OK", "Research after the business gate is cleared."),
      gap("Fixed schedule, hours, and lead time", "OPTIONAL", "Omit and use trip-availability language."),
    ],
    queue: "NEED_MINIMAL_OWNER_INPUT",
    sprint001: false,
    sprintOrder: null,
    internalLinkTargets: ["MP-005", "CP-002"],
    action: "Hold for Wave 2; do not create the URL. Promote only after the two blocking Owner answers are resolved.",
  }),
  candidate({
    assetId: "MP-006",
    primaryIntent: "xe ghép Hải Phòng Quảng Ninh",
    role: "MONEY",
    urlState: "EXISTING",
    url: "/xe-ghep-hai-phong-quang-ninh",
    opportunityScore: 84,
    competition: "STRONG — fresh lists, operators, coaches, and aggregators",
    businessFit: "HIGH corridor fit, weaker commercial differentiation",
    verifiedFacts: [...verifiedCorridorFacts, "All missing prices correctly render as contact-only in the evidence layer"],
    researchSourceIds: ["MOTOR_HP_QN", "XGHP", "THUEXE_HP"],
    missingFacts: [
      gap("Shared, 4-seat, 7-seat, and parcel starting prices", "OWNER_REQUIRED", "Only Owner can add values; absence is not a publication blocker because ‘Liên hệ’ is valid."),
      gap("Current public transport/operator and endpoint alternatives", "PUBLIC_RESEARCH_OK", "Research for differentiation and comparison."),
      gap("Named-endpoint service coverage", "OPTIONAL", "Keep the parent page generic until verified."),
      gap("Fixed frequency, hours, and lead time", "OPTIONAL", "Do not claim."),
    ],
    queue: "DEFER",
    sprint001: false,
    sprintOrder: null,
    internalLinkTargets: ["CP-004"],
    action: "Defer behind HD-HP/HD-QN; revisit when differentiation or Owner pricing improves.",
  }),
  candidate({
    assetId: "CP-004",
    primaryIntent: "nhà xe / đi Hải Phòng Quảng Ninh bằng gì",
    role: "COMPARISON",
    urlState: "EXISTING",
    url: "/blog/di-hai-phong-quang-ninh-bang-phuong-tien-gi",
    opportunityScore: 77,
    competition: "STRONG — fresh lists and aggregator inventory",
    businessFit: "HIGH corridor fit, but dependent cluster is deferred",
    verifiedFacts: [...verifiedCorridorFacts, "Missing Phong prices must remain contact-only"],
    researchSourceIds: ["MOTOR_HP_QN", "MOTOGO_HP_QN", "HOANGCONG"],
    missingFacts: [
      gap("Current transport modes, operators, and endpoint patterns", "PUBLIC_RESEARCH_OK", "Research from current sources when the cluster enters production."),
      gap("Phong starting prices", "OWNER_REQUIRED", "Helpful but not required for a comparison article; do not estimate."),
      gap("Phong named-endpoint coverage", "OPTIONAL", "Do not imply endpoint service."),
      gap("Exact corridor-wide distance/time", "OPTIONAL", "The answer varies by endpoint; use sourced endpoint examples only."),
    ],
    queue: "DEFER",
    sprint001: false,
    sprintOrder: null,
    internalLinkTargets: ["MP-006"],
    action: "Defer with MP-006 so the cluster launches as a coherent pair later.",
  }),
  candidate({
    assetId: "MP-020",
    primaryIntent: "xe ghép Hải Phòng Hạ Long",
    role: "MONEY",
    urlState: "NEW_CANDIDATE_NOT_CREATED",
    url: "/xe-ghep-hai-phong-ha-long",
    opportunityScore: 68,
    competition: "VERY STRONG — multiple aggregators, booking operators, and specialists",
    businessFit: "UNCONFIRMED ENDPOINT",
    verifiedFacts: [...verifiedCorridorFacts, "No numeric HP-QN price is currently verified"],
    researchSourceIds: ["TRAVELOKA_HP_HL", "REDBUS_HP_HL", "HOANGPHU_HP_HL"],
    missingFacts: [
      gap("Phong actually accepts Hải Phòng ⇄ Hạ Long in both directions", "BLOCKING", "Owner/operations must confirm before any URL or brief is approved."),
      gap("Whether Bãi Cháy is included or operationally separate", "BLOCKING", "Owner/operations must define endpoint scope."),
      gap("A real differentiator versus strong specialist/aggregator results", "BLOCKING", "Must come from verified operations, not generated copy."),
      gap("Shared/private/parcel starting prices", "OWNER_REQUIRED", "Do not estimate; contact-only is valid but weakens competitive utility."),
      gap("Current public route, airport/ferry, schedule, and competitor facts", "PUBLIC_RESEARCH_OK", "Research only after business gates are cleared."),
      gap("Fixed hours and trips per day", "OPTIONAL", "Omit until verified."),
    ],
    queue: "DEFER",
    sprint001: false,
    sprintOrder: null,
    internalLinkTargets: ["MP-006", "CP-004"],
    action: "Defer; do not create the URL. Strong competition plus three business blockers makes this unsuitable for Sprint 001.",
  }),
]);

export const sprint001Proposal = Object.freeze(
  sprint001CandidatePool
    .filter((asset) => asset.sprint001)
    .sort((a, b) => a.sprintOrder - b.sprintOrder)
    .map((asset) => asset.assetId),
);

export const plan001Queues = Object.freeze(Object.fromEntries(
  ["DO_FIRST", "NEED_MINIMAL_OWNER_INPUT", "DEFER"].map((queue) => [
    queue,
    Object.freeze(sprint001CandidatePool.filter((asset) => asset.queue === queue).map((asset) => asset.assetId)),
  ]),
));

if (sprint001CandidatePool.length !== 10) throw new Error("PLAN-001 requires the exact 10-asset candidate pool.");
if (new Set(sprint001CandidatePool.map(({ assetId }) => assetId)).size !== 10) throw new Error("PLAN-001 candidate asset IDs must be unique.");
if (sprint001Proposal.length < 5 || sprint001Proposal.length > 8) throw new Error("Sprint 001 proposal must contain 5–8 assets.");

for (const asset of sprint001CandidatePool) {
  if (!asset.missingFacts.length) throw new Error(`${asset.assetId} has no material gap classification.`);
  for (const missing of asset.missingFacts) {
    if (!plan001GapClasses.includes(missing.classification)) {
      throw new Error(`${asset.assetId} has invalid gap class ${missing.classification}.`);
    }
  }
  if (asset.urlState === "NEW_CANDIDATE_NOT_CREATED" && asset.sprint001) {
    throw new Error(`${asset.assetId} cannot enter Sprint 001 while its URL is uncreated and endpoint service is blocked.`);
  }
}
