# SEO Project Status

Last updated: 2026-08-22 (Asia/Ho_Chi_Minh)

Updated by: Codex

## Current Phase

Phase: Phase 1 Owner Verification Addendum

Objective: Record Owner-confirmed starting-price and parcel-service rules, preserve unresolved operations as `UNKNOWN`, and queue—without executing—public price-semantic remediation.

---

## Summary

Backlog: 0

In Progress: 0

Review: 2

Published: 38 existing public URLs observed in the production sitemap (pre-brief inventory; not equivalent to Strategy approval)

Blocked: 0

---

## Current Sprint

| ID | Asset | Type | Cluster | Status | URL | Notes |
|---|---|---|---|---|---|---|
| DATA-002-OV2 | Owner Pricing & Service Clarification | Data Architecture / Evidence | CLUSTER-A/B/C | REVIEW | Existing URLs unchanged | 12 prices are `VERIFIED_FROM`; parcel service verified; 344 facts remain UNKNOWN; public remediation deferred. |
| RES-002 | SEO Battlefield / War Map | Market Research / SERP Intelligence | CLUSTER-A/B/C | REVIEW | — | 64 query snapshots, 41 source pages, 32 domains; search volume UNKNOWN; 10 conditional first-sprint recommendations; no public change. |

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

---

## Blocked / Need Decision

| ID | Issue | Required From | Impact |
|---|---|---|---|
| RES-002-D01 | Confirm Hải Dương/Hải Phòng ⇄ Hạ Long/Bãi Cháy service and Cát Bi operating rules requested in `OWNER_DATA_REQUEST_RES002.md`. | Long / Phong | Gates MP-019/MP-020 candidates and MP-004/CP-007 upgrades; no endpoint page is approved yet. |
| DATA-002-D01 | Confirm remaining endpoint coverage, operating mode/frequency, hours, lead time, surcharges, and Cát Bi exceptions. | Long / Phong | Four existing route records are `PARTIAL`; 12 endpoint records remain `DATA_REQUIRED` and non-publishable. |
| DATA-002-D02 | Approve a separate public remediation task for “Từ” semantics and removal of unverified booking/cargo formulas. | Strategy | Knowledge Base is resolved; current affected surfaces remain listed in `PUBLIC_DATA_REMEDIATION_QUEUE.md`. |
| RES-001-D04 | Confirm whether Google Search Console, Bing Webmaster Tools, GA4, and official Zalo/Facebook profiles are configured outside the repository. | Long / Owner | Production HTML exposes no Google/Bing meta verification or GA4 ID; DNS-level verification cannot be inferred from code. |

---

## Next Queue

1. Strategy reviews DATA-002-OV2 evidence interpretation and the updated public remediation queue.
2. If approved, schedule “Từ” display/schema/booking remediation as a separate public task; do not bundle it into this data commit.
3. Long/Phong supplies named-endpoint service, hours, lead time, waiting/surcharge and Cát Bi rules only where needed.
4. RES-002 remains in its prior `REVIEW` state; this DATA-002 update does not begin another research or content task.
5. Do not start Sprint 001 or create/upgrade content from `UNKNOWN` observations before approval.

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
