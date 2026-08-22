# SEO Project Status

Last updated: 2026-08-22 (Asia/Ho_Chi_Minh)

Updated by: Codex

## Current Phase

Phase: Sprint 001 Planning

Objective: Join RES-002 market evidence with DATA-002 business truth to select a small, evidence-backed Sprint 001 without producing content or changing public URLs.

---

## Summary

Backlog: 0

In Progress: 0

Review: 1

Published: 38 existing public URLs observed in the production sitemap (pre-brief inventory; not equivalent to Strategy approval)

Blocked: 0

---

## Current Sprint

| ID | Asset | Type | Cluster | Status | URL | Notes |
|---|---|---|---|---|---|---|
| PLAN-001 | Join SEO War Map × Route Knowledge Base | Production Planning | CLUSTER-A/B/C | REVIEW | — | 10 candidates classified; proposed Sprint 001 has 6 assets: 4 DO FIRST and 2 conditional Cát Bi assets; no content or URL change. |

---

## Completed

| ID | Asset | Published | URL | Commit |
|---|---|---|---|---|
| RES-001 | Audit SEO Execution Architecture | — | — | `4214f65` |
| TECH-001 | SEO Publication Governance & Evidence Layer | 38 existing URLs preserved | — | `NOT CREATED — isolation unsafe` |
| OPS-001 | Repository Change Attribution | — | — | Included in recovery baseline |
| OPS-002 | Establish Recovery Baseline | — | — | `5f9834356de0f536c3528c03d2cc24f694b2e0db` |
| DATA-001 | Phase 1 Route Knowledge Base | — | — | `c2fa0f091f6fd1adb12332b48060008b2b5ee920` |
| DATA-002 | Owner Verification & Phase 1 Data Remediation | Existing Phase 1 route URLs only | — | `eddc5d80f59be47b19e7ad130eba43fe4311e7e4` |
| RES-002 | SEO Battlefield / War Map | — | — | `765d9c1bd67a312496d40cb1c77ef5c2f246ceed` |
| DATA-002-OV2 | Owner Pricing & Service Clarification | Existing URLs unchanged | — | `d9ed3d08e8ffe39e3c1e67b76c9be3533426dc88` |

---

## Blocked / Need Decision

| ID | Issue | Required From | Impact |
|---|---|---|---|
| PLAN-001-D01 | Confirm Cát Bi pickup/meeting procedure and flight-delay/waiting handling. | Long / Phong | One two-question answer packet gates final brief approval for MP-004 and CP-007; their route and starting prices are already verified. |
| PLAN-001-D02 | Confirm whether Hải Dương ⇄ Hạ Long is actually accepted and whether Bãi Cháy is included. | Long / Phong | Business blockers for MP-019 Wave 2; no URL or brief is approved. |
| DATA-002-D01 | Confirm remaining endpoint coverage, operating mode/frequency, hours, lead time, surcharges, and Cát Bi exceptions. | Long / Phong | Four existing route records are `PARTIAL`; 12 endpoint records remain `DATA_REQUIRED` and non-publishable. |
| DATA-002-D02 | Approve a separate public remediation task for “Từ” semantics and removal of unverified booking/cargo formulas. | Strategy | Knowledge Base is resolved; current affected surfaces remain listed in `PUBLIC_DATA_REMEDIATION_QUEUE.md`. |
| RES-001-D04 | Confirm whether Google Search Console, Bing Webmaster Tools, GA4, and official Zalo/Facebook profiles are configured outside the repository. | Long / Owner | Production HTML exposes no Google/Bing meta verification or GA4 ID; DNS-level verification cannot be inferred from code. |

---

## Next Queue

1. Strategy reviews `SPRINT_001_PLAN.md` and approves/removes candidates individually.
2. Long/Phong answers only the two Cát Bi questions if Strategy wants MP-004/CP-007 in Sprint 001.
3. Keep MP-019 as Wave 2 until its two endpoint-service blockers are resolved; keep MP-020 deferred.
4. Schedule “Từ” display/schema/booking remediation separately; do not bundle it into content production.
5. Do not start Sprint 001, write content, create URLs or publish until PLAN-001 is approved.

---

## Technical Issues

- **Resolved in TECH-001:** route/guide data no longer enters static params, sitemap, route lookup, or automatic discovery without a `PUBLISHED` asset.
- **Resolved for new assets:** `APPROVED` remains non-public, and governed routes cannot use distance-derived numeric price fallbacks.
- **DATA_REQUIRED, existing output intentionally retained:** all eight legacy public fallback paths are now mapped as traceable `ESTIMATE`; they remain forbidden for new assets and await operational replacement in DATA-002.
- **Resolved in OPS-002:** validated recovery baseline `5f9834356de0f536c3528c03d2cc24f694b2e0db` provides a clean rollback point.
- **Resolved in DATA-002-OV2 Knowledge Base:** all 12 stored numeric Phase 1 service values are `VERIFIED_FROM`; four missing HP-QN values remain contact-only.
- **Verified in DATA-002-OV2:** parcel service joins both directions, door-to-door, shared ride, charter, payment after trip, and free advance booking as Owner-provenanced commitments.
- **Endpoint price governance:** data-only endpoints resolve to the parent-corridor starting-price facts without receiving an invented endpoint number or becoming publishable.
- **Public remediation open:** MP-003/004/005 price UI and Offer schema show bare/reference amounts; booking/cargo output uses semantics or formulas not approved by the Owner. No public change is made in this task.
- **Readiness recalculated:** four existing route records are `PARTIAL`; 12 data-only endpoints remain `DATA_REQUIRED`; none is `READY_FOR_CONTENT`.
- **Still unknown:** 344 facts remain `UNKNOWN`; schedules, hours, lead time, waiting, explicit surcharges, airport exceptions and named-endpoint service are not upgraded.
- **PLAN-001 join result:** 344 `UNKNOWN` facts are not treated as blockers. Only material gaps for each candidate are classified as `OWNER_REQUIRED`, `PUBLIC_RESEARCH_OK`, `OPTIONAL`, or `BLOCKING`.
- **Sprint 001 proposal:** MP-005, MP-003, CP-003 and CP-002 can proceed to briefing after approval; MP-004 and CP-007 are conditional on two shared Cát Bi answers.
- **Wave 2 / deferred:** MP-019 is Owner-blocked; MP-006 and CP-004 are deferred for competition/differentiation; MP-020 is deferred with three business blockers.
- **RES-002 research only:** Hạ Long is the strongest independent endpoint theme; Hải Dương ⇄ Hạ Long is the stronger whitespace candidate, while Hải Phòng ⇄ Hạ Long is a high-competition strategic battle. Both remain service-unconfirmed.
- **RES-002 cannibalization decision:** reverse-direction queries remain on bidirectional parent pages; Quảng Yên and Ao Tiên receive no standalone recommendation; Uông Bí stays merged with the parent pending stronger evidence.
- **High:** 18 route pages share a mostly generic presentation/content template and do not contain route-specific pickup/drop-off or journey facts.
- **Architecture ready; UI unchanged by brief:** an explicit cluster graph now exists, while current related-link presentation still uses its legacy ordering among published assets.
- **Governed:** 20 out-of-scope assets remain `PUBLISHED` with `legacy: true`; `OTHER` is frozen.
- **Medium:** all sitemap and schema dates use one global `contentUpdatedAt`, so asset-level freshness is not represented.
- **Medium:** money pages also emit `Article` and repeated `FAQPage` graphs; schema intent should be reviewed before scale.
- **Medium:** route and guide detail pages intentionally publish no page-specific Open Graph image.
- **Low:** sitemap priority values are manually assigned; they do not replace crawl/index governance.

---

## Data Required

- Named-endpoint service confirmation where a future landing page is considered; parent corridors and both directions are already verified.
- Missing HP-QN price values if Owner wants numeric display; current behavior remains “Liên hệ”.
- Detailed pickup and drop-off areas beyond the verified general door-to-door claim.
- Source/method and acceptable precision for distance and duration values.
- Vehicle inventory/capacity or airport-specific service rules beyond the verified shared/charter/parcel commitments.
- Waiting, cancellation, lead-time, frequency, hours and explicit surcharge rules.
- Official social profile URLs and owner confirmation of webmaster/analytics configuration.
- For Quảng Ninh, confirm actual service by endpoint where a page is considered: Đông Triều, Uông Bí, Quảng Yên, Hạ Long/Bãi Cháy, Cẩm Phả, Vân Đồn/Ao Tiên, and Móng Cái. Pricing inherits the parent `VERIFIED_FROM` value unless Owner later supplies a distinct rule.

---

## Learnings

- The current Next.js 16 App Router implementation builds cleanly and already has functional canonical tags, robots, sitemap, structured data, redirects, analytics hooks, and automated SEO checks.
- Production and the current working tree expose the same 38 sitemap URLs at audit time.
- The current data arrays are reusable, but publication control and evidence governance must be separated from simple route availability before the system scales.
- The safest evolution is to keep current URLs stable, introduce an explicit asset registry, and opt pages into publication only after Strategy approval.
- TECH-001 backfilled 31 SEO assets: 18 Money Pages and 13 Supporting/Comparison assets; 20 are legacy and 11 belong to Phase 1.
- Only exact `PUBLISHED` status now enters production. `APPROVED` requires a separate explicit publish commit.
- Governance tests preserve the exact 38-URL baseline and reject unregistered, `REVIEW`, and `APPROVED` assets.
- TECH-001 was approved by Strategy on 2026-08-21. The 20 legacy assets remain live/frozen; the 11 Phase 1 assets are eligible for verified research and later upgrades.
- OPS-001 classified the opening dirty workspace as 42 `PRE_EXISTING`, 11 `TECH_001`, 10 `MIXED`, and 0 `UNKNOWN`; it created no Git commit.
- OPS-002 created the approved consolidated recovery baseline on `recovery/seo-baseline-20260821`; future tasks use isolated branches and commits.
- DATA-001 mapped 3 parent corridors, 13 endpoint/sub-route records, all 11 Phase 1 assets, 401 audited facts, and all 8 fallback paths without enabling a public consumer.
- DATA-002-OV2 audits 436 total facts: 84 `VERIFIED`, 0 `PUBLIC_SOURCE`, 8 `ESTIMATE`, and 344 `UNKNOWN`. Thirty-eight existing facts moved from `UNKNOWN` to `VERIFIED`; three traceable pricing-policy facts were added.
- Twelve stored numeric prices use `VERIFIED_FROM`: nine former passenger/charter values and three parcel values. Four missing HP-QN prices remain `UNKNOWN`.
- The price resolver supports `INHERIT_PARENT_VERIFIED_FROM` for endpoint research records while preserving the separate service/publication gate.
- Owner confirmation did not identify any named Quảng Ninh endpoint. Twelve candidate endpoint records remain `UNCONFIRMED`; Cát Bi is confirmed only at the existing route-asset level.
- DATA-002-OV2 recalculates readiness from evidence: 4 existing route records are `PARTIAL`, 12 endpoint candidates are `DATA_REQUIRED`, and none is `READY_FOR_CONTENT`.
- RES-002 sampled 64 purposeful queries across 41 source pages and 32 domains: 18 commercial, 11 price, 1 service-modifier, 22 endpoint/airport, and 12 informational queries.
- No reliable keyword-volume source was available, so every RES-002 record explicitly stores `SEARCH_VOLUME = UNKNOWN`; opportunity scores are internal evidence-weighted prioritization only.
- In the structured sample, `ghephaiduong.com`, `motortrip.vn`, `vexere.com`, `xeghephaiduongdicactinh24h.com`, and `taxihaiduong24h.net` were the five most recurring domains. Frequency is not traffic or market share.
- The recommended first-sprint candidate set reuses eight existing URLs and contains two conditional endpoint candidates; it creates no registry record or public URL during RES-002.
- PLAN-001 narrows the ten-candidate pool to six proposed Sprint assets: four immediately briefable existing assets and two conditional existing Cát Bi assets.
- Material fact classification prevents public-source geography/distance/airport research from being mislabeled as Owner blockers; only business truth remains Owner-gated.
- MP-019 and MP-020 remain uncreated URL candidates. Endpoint price inheritance does not substitute for endpoint service confirmation.
