# SEO Project Status

Last updated: 2026-08-22 18:39 +07:00 (Asia/Ho_Chi_Minh)

Updated by: Codex

## Current Phase

Phase: DEPLOY-002A Production Monitoring

Objective: Monitor the production MP-003 and MP-005 upgrades after deployment; do not start SC-001 or another wave without Strategy approval.

---

## Summary

Backlog: 0

In Progress: 0

Review: 0

Approved: 0

Published: 38 existing public URLs; MP-003 and MP-005 commercial upgrades live in place with no new URL

Monitoring: 1

Blocked: 0

---

## Current Sprint

| ID | Asset | Type | Cluster | Status | URL | Notes |
|---|---|---|---|---|---|---|
| SPRINT-002A | MP-003 + MP-005 Commercial Upgrade | Money Pages | CLUSTER-A/B | PUBLISHED / MONITORING | Existing MP-003/MP-005 URLs | Production alias `https://xeghepphongcach.com`; deployed 2026-08-22 and live-QA verified at 18:39 +07:00. Four starting prices, two-way scope, decision support, endpoint boundary, CTAs, FAQs, metadata and Service schema are live; no URL added. |

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
| PLAN-001 | Join SEO War Map × Route Knowledge Base | — | — | `8341af0644b1d24213a6f789d43cf72e9ac8705a` |
| SPRINT-001A | CP-002/CP-003 content + MP-003/MP-005 upgrade packages | Existing article URLs only | — | `c2b510f5b4b45f6ae9d125a07b899dc7395d303d` |
| PLAN-002 | Near-Money SEO Queue | — | — | `5288c3b1ecbeac0cab95757ee83df3e1cc0c5f08` |
| SPRINT-002A | MP-003/MP-005 Commercial Upgrade | 2 existing money pages upgraded in place on 2026-08-22 | `https://xeghepphongcach.com` | `6f0c8c6638bdf7e8015d0927fe7dcda836cd3584` |

---

## Blocked / Need Decision

| ID | Issue | Required From | Impact |
|---|---|---|---|
| SPRINT-001B-D01 | Confirm Cát Bi pickup/meeting procedure and flight-delay/waiting handling. | Long / Phong | One two-question answer packet gates MP-004 and CP-007; not part of SPRINT-001A. |
| PLAN-001-D02 | Confirm whether Hải Dương ⇄ Hạ Long is actually accepted and whether Bãi Cháy is included. | Long / Phong | Business blockers for MP-019 Wave 2; no URL or brief is approved. |
| DATA-002-D01 | Confirm remaining endpoint coverage, operating mode/frequency, hours, lead time, surcharges, and Cát Bi exceptions. | Long / Phong | Four existing route records are `PARTIAL`; 12 endpoint records remain `DATA_REQUIRED` and non-publishable. |
| DATA-002-D02 | Open separate tasks for MP-004 and unverified booking/cargo formulas. | Strategy | MP-003/MP-005 price UI/schema are resolved in SPRINT-002A; remaining surfaces stay listed in `PUBLIC_DATA_REMEDIATION_QUEUE.md`. |
| RES-001-D04 | Confirm whether Google Search Console, Bing Webmaster Tools, GA4, and official Zalo/Facebook profiles are configured outside the repository. | Long / Owner | Production HTML exposes no Google/Bing meta verification or GA4 ID; DNS-level verification cannot be inferred from code. |

---

## Next Queue

1. Monitor live MP-003/MP-005 query ownership and call/Zalo behavior; do not start SC-001 or another wave without Strategy approval.
2. Preserve MP-003/MP-005 as the sole owners of corridor price, charter, door-to-door, group-choice and reverse intent.
3. Decide whether SC-001 still has a distinct role only after production evidence is available.
4. Review SC-004 with GSC before any consolidation or repositioning.
5. Keep SPRINT-001B and Cát Bi out of execution until the two operational answers are available.

---

## Technical Issues

- **Resolved in TECH-001:** route/guide data no longer enters static params, sitemap, route lookup, or automatic discovery without a `PUBLISHED` asset.
- **Resolved for new assets:** `APPROVED` remains non-public, and governed routes cannot use distance-derived numeric price fallbacks.
- **DATA_REQUIRED, existing output intentionally retained:** all eight legacy public fallback paths are now mapped as traceable `ESTIMATE`; they remain forbidden for new assets and await operational replacement in DATA-002.
- **Resolved in OPS-002:** validated recovery baseline `5f9834356de0f536c3528c03d2cc24f694b2e0db` provides a clean rollback point.
- **Resolved in DATA-002-OV2 Knowledge Base:** all 12 stored numeric Phase 1 service values are `VERIFIED_FROM`; four missing HP-QN values remain contact-only.
- **Verified in DATA-002-OV2:** parcel service joins both directions, door-to-door, shared ride, charter, payment after trip, and free advance booking as Owner-provenanced commitments.
- **Endpoint price governance:** data-only endpoints resolve to the parent-corridor starting-price facts without receiving an invented endpoint number or becoming publishable.
- **SPRINT-002A price remediation:** MP-003/MP-005 render all eight governed values as `Từ`; the required variability note is adjacent to the price table. MP-004 and booking/cargo remain unchanged.
- **SPRINT-002A schema remediation:** MP-003/MP-005 keep descriptive Offer nodes but remove numeric `price`/`priceCurrency`, preventing a starting price from being machine-read as a fixed guaranteed price.
- **Readiness recalculated:** four existing route records are `PARTIAL`; 12 data-only endpoints remain `DATA_REQUIRED`; none is `READY_FOR_CONTENT`.
- **Still unknown:** 344 facts remain `UNKNOWN`; schedules, hours, lead time, waiting, explicit surcharges, airport exceptions and named-endpoint service are not upgraded.
- **PLAN-001 join result:** 344 `UNKNOWN` facts are not treated as blockers. Only material gaps for each candidate are classified as `OWNER_REQUIRED`, `PUBLIC_RESEARCH_OK`, `OPTIONAL`, or `BLOCKING`.
- **Sprint 001 proposal:** MP-005, MP-003, CP-003 and CP-002 can proceed to briefing after approval; MP-004 and CP-007 are conditional on two shared Cát Bi answers.
- **SPRINT-001A published in place:** CP-002 and CP-003 now provide answer-first comparison tables, decision support, `VERIFIED_FROM` Phong pricing, FAQs, route-page links, and dated public-source ledgers.
- **No endpoint price inference:** CP-002 names the approved Quảng Ninh endpoint set for orientation but explicitly keeps pricing at parent-corridor scope.
- **Packages published:** `SEO_UPGRADE_MP003.md` and `SEO_UPGRADE_MP005.md` drive the scoped live MP-003/MP-005 implementation; shared legacy route output remains unchanged for other money pages.
- **Source freshness:** SPRINT-001A public research was checked on 2026-08-22; dynamic operator/platform schedules and fares are not copied as fixed facts.
- **SPRINT-001A minor review resolved:** CP-002/CP-003 public copy uses natural hyphen punctuation; aggregator sources establish available route/endpoint inventory only, with no copied aggregate operator/trip counts.
- **Geography is not service evidence:** CP-002 now states directly that the named Quảng Ninh endpoint list describes geography/search demand and does not confirm Phong Cách availability or one shared fare at every endpoint.
- **PLAN-002 ownership decision:** MP-003 owns HD-HP price, xe ghép, charter, door-to-door, reverse and group-choice commercial intent; MP-005 owns the equivalent parent-corridor HD-QN intent.
- **PLAN-002 URL restraint:** no separate price, charter, group-size, door-to-door or reverse-direction page is recommended. Current SERPs largely resolve these needs through money pages, price sections and booking forms.
- **Near-money critical path resolved:** MP-003/MP-005 are deployed as the commercial owners. Production monitoring now precedes any decision about another supporting asset.
- **Next supporting candidate:** SC-001 may retain a distinct booking-process role only after MP-005 is established as the commercial owner; SC-004 remains an ownership experiment pending GSC evidence.
- **PLAN-002 evidence limit:** live snapshots were checked on 2026-08-22; search volume remains `UNKNOWN`, and competitor/aggregator prices or counts are not treated as Phong business facts.
- **SPRINT-002A answerability:** both heroes expose route, four starting prices, service set, two-way/door-to-door facts and call/Zalo actions without requiring the reader to reach long-form copy.
- **SPRINT-002A endpoint boundary:** MP-005 lists seven Quảng Ninh endpoint labels only for geography/search orientation; Service schema remains scoped to Hải Dương and Quảng Ninh, with no endpoint Offer or availability entity.
- **SPRINT-002A URL regression:** registry and sitemap remain at the exact 38-URL baseline; reverse aliases still redirect to the bidirectional parent pages.
- **DEPLOY-002A live QA:** production MP-003/MP-005 expose all eight `Từ` values with no bare governed amount, valid call/Zalo/booking links, correct self-canonicals, reverse intent, reciprocal CP-002/CP-003 links and descriptive non-numeric Offer schema. Both pages have zero horizontal overflow at 390×844. The sitemap endpoint returns HTTP 200 and the validated 38-URL baseline is unchanged; homepage and sampled out-of-scope MP-006 retain their prior presentation.
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
