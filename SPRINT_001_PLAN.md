# PLAN-001 — Sprint 001 Production Plan

Status: `REVIEW`

Prepared: 2026-08-22 (Asia/Ho_Chi_Minh)

Inputs: RES-002 SEO War Map + DATA-002-OV2 Route Knowledge Base

Public website/content changes: none

## Decision

Recommend a six-asset Sprint 001:

1. MP-005 — Hải Dương ⇄ Quảng Ninh
2. MP-003 — Hải Dương ⇄ Hải Phòng
3. CP-003 — đi Hải Dương–Hải Phòng bằng gì
4. CP-002 — nhà xe / đi Hải Dương–Quảng Ninh bằng gì
5. MP-004 — Hải Dương ⇄ Cát Bi, conditional on two short Owner answers
6. CP-007 — shared-vs-charter to Cát Bi, using the same two Owner answers

The first four can move to briefing using verified business facts plus public research. The Cát Bi pair belongs in the sprint plan because its route and starting prices are verified, but final brief approval should wait for a minimal two-question operational answer.

MP-019 Hải Dương ⇄ Hạ Long is the next Wave 2 candidate, not Sprint 001. MP-006, CP-004 and MP-020 are deferred. No URL is created for MP-019 or MP-020.

## How 344 UNKNOWN facts are treated

The planning unit is **a material fact needed by one asset**, not every empty field in the Knowledge Base. Distance, travel time, airport geography, public transport options and similar facts can be researched from public sources. Exact prices, actual service coverage and operating policies remain Owner/operations facts. Unknown data that the page can safely omit is `OPTIONAL`, not a blocker.

Every material gap in the structured plan has exactly one class:

| Class | Meaning in PLAN-001 |
|---|---|
| `OWNER_REQUIRED` | Only Owner/operations can supply it, but the asset may still be useful if the fact is omitted or expressed as contact-only. |
| `PUBLIC_RESEARCH_OK` | Must be researched from a current public/authoritative source during content preparation. |
| `OPTIONAL` | Not needed to produce a strong, truthful asset; omit rather than infer. |
| `BLOCKING` | The asset must not receive final brief/URL/publication approval until resolved. Resolution may require Owner input, but the fact is classified only as `BLOCKING`. |

Machine-readable classification: [`data/seo/planning/plan-001.mjs`](data/seo/planning/plan-001.mjs).

## Joined candidate pool

| Priority | Asset | Opportunity | Data Readiness | Missing Data | Action |
|---:|---|---|---|---|---|
| 1 | MP-005 | 92; high commercial intent; medium competition with stale/broad exact pages | Parent route, services and four starting prices verified; public research can supply non-business facts | Public distance/time by context and current alternatives; endpoint detail optional | **DO FIRST** — existing bidirectional parent page |
| 2 | MP-003 | 86; core commercial/price intent; medium-strong competition | Route, services and four starting prices verified | Public distance/time/modes; schedule and district list optional | **DO FIRST** — existing page owns both directions |
| 3 | CP-003 | 68; clear comparison intent; supports MP-003 | Business proposition verified; comparison facts are public-researchable | Current modes/operators and sourced ranges | **DO FIRST** — existing comparison article |
| 4 | CP-002 | 76; exact/list SERP quality is uneven | Parent business facts and starting prices verified; endpoint service not required for parent comparison | Public operators/modes/geography by endpoint; Phong endpoint coverage optional | **DO FIRST** — existing comparison hub |
| 5 | MP-004 | 88; exact airport commercial competition | Route, services and four starting prices verified | Two Owner facts: pickup/meeting procedure and flight-delay/waiting handling; airport facts public | **NEED MINIMAL OWNER INPUT** — conditionally include |
| 6 | CP-007 | 71; airport decision intent; supports MP-004 | Same verified Cát Bi base as MP-004 | Same two Owner facts; airport process public; luggage limits optional | **NEED MINIMAL OWNER INPUT** — conditionally include |
| 7 | MP-019 | 76; strongest lower-competition endpoint candidate | Parent HD-QN facts and inherited starting-price rule exist; endpoint service is unconfirmed | **Blocking:** actual HD ⇄ Hạ Long service and Hạ Long/Bãi Cháy scope | **NEED MINIMAL OWNER INPUT / WAVE 2** — no URL |
| 8 | MP-006 | 84; strong demand but strong competition | Corridor/services verified; all four prices contact-only | Four prices Owner-only but not blocking; public differentiation research | **DEFER** — weaker than HD routes for Sprint 001 |
| 9 | CP-004 | 77; useful comparison intent but strong fresh competition | Corridor/services verified; no numeric prices | Public comparison research; Owner prices helpful, not required | **DEFER** with MP-006 for coherent cluster launch |
| 10 | MP-020 | 68; independent endpoint demand but very strong competition | Parent corridor verified; endpoint service and all prices unconfirmed | **Blocking:** endpoint service, Hạ Long/Bãi Cháy scope and a real operational differentiator | **DEFER** — no URL |

Opportunity scores are RES-002 internal prioritization values, not search volume, traffic, or Google difficulty scores.

## Material fact-gap ledger

### MP-005 — Hải Dương ⇄ Quảng Ninh

| Missing fact | Class | Planning treatment |
|---|---|---|
| Public-source distance/time by representative destination | `PUBLIC_RESEARCH_OK` | Research by context; never present one number as universal for all QN endpoints |
| Current transport alternatives/operator evidence | `PUBLIC_RESEARCH_OK` | Source and date during content preparation |
| Named-endpoint service coverage | `OPTIONAL` | Parent page does not need to claim it |
| Operating hours/frequency/lead time | `OPTIONAL` | Omit; use availability/contact wording |
| District-level pickup/drop-off list | `OPTIONAL` | Use verified general door-to-door claim |

### MP-003 — Hải Dương ⇄ Hải Phòng

| Missing fact | Class | Planning treatment |
|---|---|---|
| Current distance and realistic travel-time range | `PUBLIC_RESEARCH_OK` | Use current map/transport sources with conditions |
| Current coach/limousine/taxi alternatives | `PUBLIC_RESEARCH_OK` | Research for comparison and objections |
| Exact hours/fixed frequency | `OPTIONAL` | Do not claim daily/24-7 service |
| District-level pickup/drop-off list | `OPTIONAL` | General door-to-door evidence is sufficient |

### CP-003 — HD–HP mode comparison

| Missing fact | Class | Planning treatment |
|---|---|---|
| Current modes, booking channels and route alternatives | `PUBLIC_RESEARCH_OK` | Research current official/operator/aggregator sources |
| Comparable distance/time ranges | `PUBLIC_RESEARCH_OK` | Source and qualify |
| Phong fixed schedule | `OPTIONAL` | Not needed for a useful comparison |
| Detailed Phong pickup boundaries | `OPTIONAL` | Link to MP-003 and avoid invented districts |

### CP-002 — HD–QN mode/operator comparison

| Missing fact | Class | Planning treatment |
|---|---|---|
| Current public operators/options by major destination | `PUBLIC_RESEARCH_OK` | Treat competitor facts as public research, not Phong truth |
| Geographic/travel context for major destinations | `PUBLIC_RESEARCH_OK` | Prefer authoritative sources |
| Distance/time by representative endpoint | `PUBLIC_RESEARCH_OK` | Avoid a universal corridor number |
| Phong service at every named endpoint | `OPTIONAL` | Parent comparison can omit endpoint availability |
| Fixed schedule/frequency | `OPTIONAL` | Do not infer from aggregator inventory |

### MP-004 and CP-007 — Cát Bi pair

| Missing fact | Class | Planning treatment |
|---|---|---|
| Actual Cát Bi pickup/meeting procedure | `OWNER_REQUIRED` | One short operational answer shared by both assets |
| Flight-delay and waiting handling | `OWNER_REQUIRED` | Ask for procedure, not a surcharge formula |
| Current terminal/access/traveler information | `PUBLIC_RESEARCH_OK` | Research airport/airline authority sources |
| Night/parking/toll/waiting amounts | `OPTIONAL` | Omit; final price remains trip-specific |
| Lead time, 24-7 claim, exact luggage limit | `OPTIONAL` | Do not publish until separately verified |

### MP-019 — Hải Dương ⇄ Hạ Long

| Missing fact | Class | Planning treatment |
|---|---|---|
| Phong actually accepts the endpoint in both directions | `BLOCKING` | Owner/operations must answer yes, no, or trip-by-trip |
| Hạ Long and Bãi Cháy operational scope | `BLOCKING` | Owner/operations must define one combined or two distinct areas |
| Actual endpoint pickup/drop-off boundary | `OWNER_REQUIRED` | Ask only after the service gate is cleared |
| Current public distance/time and alternatives | `PUBLIC_RESEARCH_OK` | Research after business confirmation |
| Fixed hours/frequency/lead time | `OPTIONAL` | Omit; use trip-availability language |

### MP-006 and CP-004 — Hải Phòng ⇄ Quảng Ninh

| Missing fact | Class | Planning treatment |
|---|---|---|
| Four service starting prices | `OWNER_REQUIRED` | Helpful but not blocking; “Liên hệ” remains correct |
| Current operators, modes and endpoint patterns | `PUBLIC_RESEARCH_OK` | Research when this cluster enters production |
| Named-endpoint Phong service | `OPTIONAL` | Keep parent assets generic |
| Fixed hours/frequency/lead time | `OPTIONAL` | Omit |

### MP-020 — Hải Phòng ⇄ Hạ Long

| Missing fact | Class | Planning treatment |
|---|---|---|
| Phong actually accepts the endpoint in both directions | `BLOCKING` | No URL/brief approval without Owner confirmation |
| Hạ Long and Bãi Cháy operational scope | `BLOCKING` | Must be defined by operations |
| Real operational differentiator versus strong specialist/aggregator results | `BLOCKING` | Cannot be generated as marketing copy |
| Shared/private/parcel starting prices | `OWNER_REQUIRED` | Contact-only is truthful but competitively weak |
| Current public route/schedule/operator facts | `PUBLIC_RESEARCH_OK` | Research only after business gates clear |
| Fixed hours/trips per day | `OPTIONAL` | Omit until verified |

## Queue A — DO FIRST

| Order | Asset | Why it can proceed to briefing |
|---:|---|---|
| 1 | MP-005 | Highest opportunity; verified services and starting prices; material gaps are public-researchable or optional |
| 2 | MP-003 | Core lead page with verified commercial facts; reverse intent can be consolidated safely |
| 3 | CP-003 | Public research can complete the comparison; strengthens MP-003 without cannibalizing it |
| 4 | CP-002 | Can answer corridor choice intent without claiming unverified endpoint service |

## Queue B — NEED MINIMAL OWNER INPUT

| Asset | Minimum question set | Current decision |
|---|---|---|
| MP-004 + CP-007 | 1) Where/how is the customer actually met at Cát Bi? 2) What is the real handling rule when a flight is delayed or waiting is required? | Conditionally included in Sprint 001; one answer packet serves both |
| MP-019 | 1) Do you actually accept Hải Dương ⇄ Hạ Long in both directions? 2) Is Bãi Cháy included in the same operational area? | Wave 2 only; both answers are business blockers |

No price or surcharge form is requested. Existing Cát Bi prices are already `VERIFIED_FROM`; MP-019 inherits the HD-QN parent starting price if service is confirmed.

## Queue C — DEFER

| Asset | Reason |
|---|---|
| MP-006 | Strong competition, all prices contact-only and weaker immediate differentiation than HD corridors |
| CP-004 | Best launched with MP-006 as a coherent cluster, not as an isolated comparison article |
| MP-020 | Very strong endpoint competition plus three unresolved business blockers; no URL should be created |

## Proposed Sprint 001 — six assets

Items 5–6 are conditional. If the two Cát Bi answers are not available at Sprint lock, remove them rather than infer facts; the four DO FIRST assets remain a coherent first production wave.

| Order | Asset | Primary intent | Role | Existing/new URL | VERIFIED data used | Public facts to research | Internal-link target | Why now |
|---:|---|---|---|---|---|---|---|---|
| 1 | MP-005 | xe ghép Hải Dương Quảng Ninh | Money | Existing `/xe-ghep-hai-duong-quang-ninh` | Both directions; shared/charter/parcel; door-to-door; payment/booking; four `Từ` prices; parent endpoint-price rule | Current alternatives; sourced travel context by representative destination | CP-002, SC-001 | Best opportunity/competition/data combination |
| 2 | MP-003 | xe ghép Hải Dương Hải Phòng | Money | Existing `/xe-ghep-hai-duong-hai-phong` | Same verified service set; four `Từ` prices | Current distance/time range and transport alternatives | CP-003; review SC-004 overlap | Core lead route and reverse-intent consolidation |
| 3 | CP-003 | Hải Dương Hải Phòng đi bằng gì | Comparison | Existing blog URL | Verified Phong service proposition and starting-price semantics | Current modes, operators, booking channels, distance/time ranges | MP-003 | Supports the lead page without duplicating commercial intent |
| 4 | CP-002 | nhà xe / đi Hải Dương Quảng Ninh bằng gì | Comparison | Existing blog URL | Verified parent service and prices; endpoint inheritance rule | Current operators/options/geography by endpoint | MP-005 | Competitor freshness/endpoint explanation is uneven |
| 5 | MP-004 | xe Hải Dương sân bay Cát Bi | Money | Existing `/xe-hai-duong-cat-bi` | Confirmed route, both directions, services and four `Từ` prices | Current airport access/terminal facts | CP-007, MP-003 | Exact commercial airport demand; only two minimal Owner facts remain |
| 6 | CP-007 | đi Cát Bi từ Hải Dương / ghép hay bao xe | Comparison | Existing blog URL | Same Cát Bi evidence as MP-004 | Current airport traveler/process facts | MP-004 | Shares one research/Owner packet and protects intent separation |

## Explicit exclusions from Sprint 001

- MP-019 and MP-020 receive no registry entry, route record, URL, brief, content, sitemap entry or publication state.
- MP-006 and CP-004 remain existing live assets but receive no Sprint 001 production work.
- Public remediation for bare prices, schema and booking formulas remains a separate approved task.
- No claim is created for 24/7 operation, fixed hours, fixed schedule, lead time, waiting fee or surcharge amount.

## Handoff state

- Candidate pool evaluated: 10/10.
- Proposed Sprint 001: 6 assets, 4 immediately briefable + 2 Cát Bi conditional.
- Minimal Owner questions: 2 for the Cát Bi pair; 2 separate business blockers for MP-019 Wave 2.
- New URLs created: 0.
- Content written/published: 0.
- Status: `REVIEW`.
