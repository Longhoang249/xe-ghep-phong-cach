# SEO Project Status

Last updated: 2026-08-24 08:18 +07:00 (Asia/Ho_Chi_Minh)

Updated by: Codex

## Current Phase

Phase: SPRINT-005.1 — READY_FOR_REVIEW

Objective: Restore MP-005 endpoint orientation and its visible evidence boundary in the reusable scan-first renderer without creating endpoint URLs, prices or service claims.

---

## Summary

Backlog: 0

In Progress: 0

Review: 1

Approved: 0

Published: production contains 39 governed URLs after adding only MP-019; MP-004 and MP-003 were upgraded in place

Monitoring: 2

Blocked: 0

---

## Current Sprint

| ID | Asset | Type | Cluster | Status | URL | Notes |
|---|---|---|---|---|---|---|
| SPRINT-005.1 | MP-005 Endpoint Orientation / Boundary | Money Page UI / Governance | CLUSTER-B | READY_FOR_REVIEW | `/xe-ghep-hai-duong-quang-ninh` | Renders all seven governed geography labels after the route visual. Only Hạ Long/Bãi Cháy links to published MP-019; other labels remain text. The visible boundary denies uniform availability and pricing. Candidate SEO check returns 374/374; sitemap remains 39. |
| REM-001 | Public Pricing Integrity | Technical / Data Governance | ALL | READY_FOR_REVIEW | Existing homepage booking flow | Booking quotes now carry `STARTING_FROM`, `ESTIMATE` or `CONTACT` semantics. Verified bases render with `Từ`; only four traceable registered-route legacy estimates can render as explicitly unconfirmed estimates; UNKNOWN/custom routes persist no numeric fare. Cargo dimensions/weight remain lead inputs, but no public calculation formula remains. No URL, money-page price, schema, metadata or publication state changes. |
| SPRINT-005 | MP-005 Scan-first Money Page | Money Page | CLUSTER-B | PUBLISHED / MONITORING | `/xe-ghep-hai-duong-quang-ninh` | Fast-forwarded to `main` at `1689924` and deployed by Vercel Git integration on 2026-08-23 at 23:22 +07:00 (`dpl_8SQRwqE75FmYo6roD4fnMZwznMBc`). Live QA confirms all four `VERIFIED_FROM` prices render with `Từ`, canonical/schema/FAQ remain correct, all visuals and related links load, mobile has no overflow, and sitemap remains 39 URLs. |
| SPRINT-004A.1 | MP-003 Mobile Readability Revision | Money Page | CLUSTER-A | PUBLISHED / MONITORING | `/xe-ghep-hai-duong-hai-phong` | Merged into release head `912a0b3` and deployed 2026-08-23 at 20:42 +07:00. Mobile content has an explicit 11px floor; quick-price amounts render at 15px, service prices at 16px, service names at 19px, route names at 18px, descriptions/FAQ answers at 13px. Live QA confirms canonical, CTAs, images and zero horizontal overflow. Content, prices, metadata and schema remain governed. |
| SPRINT-003A | MP-004 + MP-019 Wave 2 Money Pages | Money Pages | CLUSTER-A/B | PUBLISHED / MONITORING | `/xe-hai-duong-cat-bi`; `/xe-ghep-hai-duong-ha-long` | Deployed with RELEASE-OPS-003 on 2026-08-23 at 20:42 +07:00. MP-004 is upgraded in place with its own route-level `VERIFIED_FROM` prices; MP-019 is the only newly published URL and inherits the verified Hải Dương - Quảng Ninh starting prices. Both retain descriptive non-numeric Offer schema and parent money-page links. |
| SPRINT-002A | MP-003 + MP-005 Commercial Upgrade | Money Pages | CLUSTER-A/B | PUBLISHED / MONITORING | Existing MP-003/MP-005 URLs | Production alias `https://xeghepphongcach.com`; deployed 2026-08-22 and live-QA verified at 18:39 +07:00. Four starting prices, two-way scope, decision support, endpoint boundary, CTAs, FAQs, metadata and Service schema are live; no URL added. |
| MON-001A | Search Console Indexing & Monitoring Setup | Monitoring | CLUSTER-A/B | MONITORING | MP-003, MP-005, CP-003, CP-002 | Domain property verified; sitemap accepted with 38 discovered pages; both money pages indexed; one indexing request accepted for each supporting page; performance remains `PENDING_GSC_DATA`. Handoff status: `REVIEW`. |

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
| DATA-003 | Quảng Ninh Endpoint Verification | — | — | `910c7054b386d9bef41599fb47ad9cc5791306ff` |

---

## Blocked / Need Decision

| ID | Issue | Required From | Impact |
|---|---|---|---|
| DATA-002-D01 | Confirm remaining endpoint coverage, operating mode/frequency, hours, lead time, surcharges, and Cát Bi exceptions. | Long / Phong | These details remain optional for MP-004/MP-019 publication because unknown claims are omitted; they are still required before making the corresponding operating claims. |

---

## Next Queue

1. Strategy Review SPRINT-005.1 together with the already approved REM-001 implementation; do not merge or deploy either branch yet.
2. If the combined release is approved, apply and verify Supabase migration `003_add_booking_price_semantics.sql`, then smoke-test DB/API before fast-forwarding application code to `main`.
3. After production live QA, send only the minimal approved endpoint questions in `OWNER_DATA_REQUEST_DATA003.md`; do not open SPRINT-006 until an endpoint is `READY`.
4. Continue MP-003/MP-005/CP-002/CP-003 Search Console monitoring and do not treat `PENDING_GSC_DATA` as zero.

---

## Technical Issues

- **Resolved in TECH-001:** route/guide data no longer enters static params, sitemap, route lookup, or automatic discovery without a `PUBLISHED` asset.
- **Resolved for new assets:** `APPROVED` remains non-public, and governed routes cannot use distance-derived numeric price fallbacks.
- **DATA_REQUIRED, existing output intentionally retained:** all eight legacy public fallback paths are now mapped as traceable `ESTIMATE`; they remain forbidden for new assets and await operational replacement in DATA-002.
- **Resolved in OPS-002:** validated recovery baseline `5f9834356de0f536c3528c03d2cc24f694b2e0db` provides a clean rollback point.
- **Resolved in DATA-002-OV2 Knowledge Base:** all 12 stored numeric Phase 1 service values are `VERIFIED_FROM`; four missing HP-QN values remain contact-only.
- **Verified in DATA-002-OV2:** parcel service joins both directions, door-to-door, shared ride, charter, payment after trip, and free advance booking as Owner-provenanced commitments.
- **Endpoint price governance:** data-only endpoints resolve to the parent-corridor starting-price facts without receiving an invented endpoint number or becoming publishable.
- **SPRINT-003A MP-004 canonical pricing:** Cát Bi is a route-level verified price exception with its own starting prices (`300k/600k/750k/150k`); it does not inherit the Hải Dương - Hải Phòng passenger/charter prices. Every amount renders as `Từ`, and its commercial Offer contains no numeric `price`/`priceCurrency`.
- **SPRINT-003A MP-019 publication:** one new governed URL is registered through `REGISTERED → REVIEW → APPROVED → PUBLISHED`; its Hạ Long prices inherit the Hải Dương - Quảng Ninh corridor and Bãi Cháy receives no separate price or automatic availability claim.
- **SPRINT-003A operational boundary:** no fixed airport gate, waiting/flight-delay rule, airport surcharge, schedule, trips/day, fixed duration or endpoint surcharge is published. Unknown facts remain omitted instead of blocking the two useful pages.
- **SPRINT-003A schema and sitemap:** MP-004/MP-019 use WebPage, Service, BreadcrumbList, FAQPage and a descriptive `Offer` with category `Giá bắt đầu`; the candidate sitemap delta is exactly `38 → 39`, adding only MP-019.
- **SPRINT-004A scoped redesign:** MP-003 alone opts into the reusable `scan-first` renderer. Other commercial and legacy route pages continue through the existing renderer, so the visual redesign does not alter MP-004, MP-005, MP-019 or generic route output.
- **SPRINT-004A evidence boundary:** all four visible prices are still supplied by the existing governed `commercialPriceRows`; the renderer contains no numeric route-price literals and every amount keeps `VERIFIED_FROM` presentation with the `Từ` prefix.
- **SPRINT-004A SEO preservation:** the existing MP-003 metadata, self-canonical, WebPage/Service/Breadcrumb/FAQ graphs, descriptive non-numeric Offer and CP-003 comparison link remain intact. The sitemap remains at 39 URLs on this candidate branch.
- **SPRINT-004A visual QA:** the production build has one H1 and zero horizontal overflow at both 1440px desktop and 390px mobile widths. The four reused project images provide the hero and three service visuals without adding image assets.
- **SPRINT-004A.1 release sync and readability:** the redesign branch is rebased on `codex/release-ops-003-sprint-003a` head `d404b69` with zero conflicts and zero commits behind. Production-mode QA at 390px confirms the mobile typography floor, 15–16px commercial prices, readable service descriptions/FAQ answers, and no horizontal overflow.
- **RELEASE-OPS-003 production:** release head `912a0b3` passed lint, typecheck, 49/49 tests, production build, 374 SEO checks and sitemap validation before deployment. Vercel deployment `dpl_Gs5zHEsqKjaRJ896C2rrsrMvxRBh` reached `Ready` and was aliased to `https://xeghepphongcach.com`; live QA confirmed all three release routes return HTTP 200 and the production sitemap contains 39 URLs.
- **SPRINT-005 scoped redesign:** MP-005 is the second and only additional route opted into the approved `scan-first` renderer. MP-003 output remains equivalent, while MP-004, MP-019 and all other route pages stay on their existing render paths.
- **SPRINT-005 evidence and endpoint boundary:** the page reads `250k/900k/1.100k/180k` from the existing Owner-provenanced `VERIFIED_FROM` facts and renders every amount with `Từ`. Hạ Long is linked as an already published route; no Bãi Cháy, Uông Bí, Cẩm Phả, Vân Đồn, Ao Tiên or Móng Cái URL, price or availability claim is introduced.
- **SPRINT-005 SEO/URL preservation:** MP-005 keeps its existing metadata, H1, canonical, Service/Breadcrumb/FAQ schema and descriptive non-numeric Offer. No URL was created and the production sitemap remains at 39 URLs.
- **SPRINT-005 production:** commit `1689924` was fast-forwarded into `main`; Vercel Git deployment `dpl_8SQRwqE75FmYo6roD4fnMZwznMBc` reached `Ready`. Live checks returned HTTP 200 for the homepage, MP-005, MP-003, MP-019, MP-004, sitemap and robots; all three MP-005 related-route links also returned HTTP 200.
- **DATA-003 endpoint audit:** nine Quảng Ninh endpoints and 90 decision facts are classified as 21 `VERIFIED`, 0 `ESTIMATE` and 69 `UNKNOWN`. SEO values are heuristic and require SERP validation; no search volume is invented.
- **DATA-003 Bãi Cháy reconciliation:** existing Owner evidence already confirmed Hải Dương - Hạ Long/Bãi Cháy service. The stale `hd-bai-chay` KB record is aligned to `CONFIRMED`, moving 12 canonical facts from `UNKNOWN` to `VERIFIED`, while staying `DATA_ONLY`, canonical-less, asset-less and publication-ineligible.
- **DATA-003 publication decision:** Hạ Long is the only `READY` endpoint and is already MP-019. Bãi Cháy is `NEAR_READY` but lacks a distinct operating/content boundary and risks cannibalizing MP-019. The remaining seven endpoints are `BLOCKED`; recommended SPRINT-006 money page is `NONE`.
- **DATA-003 production finding:** the MP-005 scan-first renderer omits the governed endpoint orientation/boundary block while its FAQ still refers to listed endpoints. Production `seo:check` therefore reports 372 passes and two failures. This render gap predates DATA-003 and is logged for a separately approved UI task; no production code is changed here.
- **DATA-003 canonical merge:** approved DATA-003 was fast-forwarded to `main` at `910c7054`; the canonical KB now contains 113 `VERIFIED`, 8 `ESTIMATE` and 323 `UNKNOWN` facts without adding a URL or changing publication state.
- **REM-001 booking semantics:** the success summary and persisted payload distinguish `STARTING_FROM`, `ESTIMATE` and `CONTACT`. Owner-verified starting prices render with `Từ`; traceable registered-route estimates say `Ước tính chưa xác nhận`; UNKNOWN/custom routes render contact-only and persist `estimated_price = null`.
- **REM-001 cargo integrity:** cargo name, dimensions and weight remain available for lead qualification, while the unverified distance/volumetric-weight formula and its public explanation are removed. Final cargo price is described only as a trip-specific check.
- **REM-001 persistence rollout:** migration `003_add_booking_price_semantics.sql` adds semantic/unit columns and marks historical numeric records `LEGACY_UNCLASSIFIED`; it must be applied before an eventual REM-001 application deployment. REM-001 itself is not deployed in this task.
- **REM-001 scope preservation:** money-page prices, metadata, canonical, schema, registry and publication state remain unchanged; the sitemap contract remains 39 URLs. The two known MP-005 endpoint checks remain assigned to SPRINT-005.1.
- **REM-001 validation:** lint, typecheck, 66/66 full tests, production build and `git diff --check` pass. Candidate sitemap contains 39 URLs. Candidate `seo:check` remains at 372 passes / two known MP-005 endpoint-boundary failures, with no new failure introduced by REM-001.
- **SPRINT-005.1 endpoint renderer:** the scan-first component renders an endpoint block only when governed `endpointNames` is non-empty. MP-005 receives all seven geography labels from its upgrade record; MP-003 receives no endpoint block.
- **SPRINT-005.1 link boundary:** only `Hạ Long / Bãi Cháy` maps to published MP-019. Đông Triều, Uông Bí, Quảng Yên, Cẩm Phả, Vân Đồn/Ao Tiên and Móng Cái receive no link or future URL.
- **SPRINT-005.1 evidence boundary:** visible copy states that naming a region does not confirm every address has a vehicle or one shared fare. No endpoint-specific number or availability claim is added; FAQ UI/schema retain the same semantic.
- **SPRINT-005.1 validation:** lint, typecheck, 71/71 full tests, production build, `git diff --check` and 374/374 candidate SEO checks pass. Sitemap remains 39 URLs. Playwright QA at 1440px and 390px confirms the block is readable and mobile has no horizontal overflow.
- **SPRINT-002A schema remediation:** MP-003/MP-005 keep descriptive Offer nodes but remove numeric `price`/`priceCurrency`, preventing a starting price from being machine-read as a fixed guaranteed price.
- **Readiness recalculated after SPRINT-003A:** five existing/published route records are `PARTIAL`; 11 endpoint records remain `DATA_REQUIRED`; none is mislabeled `READY_FOR_CONTENT`.
- **Still unknown after DATA-003:** 323 canonical KB facts remain `UNKNOWN`; schedules, hours, lead time, waiting, explicit surcharges, airport exceptions and all service facts for the seven unconfirmed Quảng Ninh endpoint candidates remain unupgraded.
- **PLAN-001 join result:** 344 `UNKNOWN` facts are not treated as blockers. Only material gaps for each candidate are classified as `OWNER_REQUIRED`, `PUBLIC_RESEARCH_OK`, `OPTIONAL`, or `BLOCKING`.
- **Historical Sprint 001 proposal:** MP-004/CP-007 were initially conditional on additional Cát Bi operating answers. SPRINT-003A later unlocked MP-004 by publishing only verified route-level pricing/service facts and omitting unknown airport procedures.
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
- **MON-001A Search Console:** `sc-domain:xeghepphongcach.com` is verified by DNS TXT through Vercel. The verification record must not be removed.
- **MON-001A sitemap:** `https://xeghepphongcach.com/sitemap.xml` was submitted once on 2026-08-22, read successfully the same day and reported 38 discovered pages and 0 videos.
- **MON-001A index baseline:** MP-003 and MP-005 are indexed with crawl/index permission and matching user/Google canonicals. No indexing request was sent for either money page.
- **MON-001A supporting pages:** CP-003 is crawled but currently not indexed; CP-002 is discovered but not yet crawled. Google accepted exactly one indexing request for each on 2026-08-22; do not repeat them today.
- **MON-001A performance:** Search Console is still processing the property. Impressions, clicks, CTR, position and query data remain `PENDING_GSC_DATA`, not zero.
- **Wave 2 / review:** MP-004 and MP-019 are implemented on the SPRINT-003A branch and await Strategy Review/deployment. MP-006 and CP-004 remain deferred; MP-020 remains blocked.
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
- For future Quảng Ninh endpoint pages, confirm actual service separately for Đông Triều, Uông Bí, Quảng Yên, Cẩm Phả, Vân Đồn/Ao Tiên, and Móng Cái. Hải Dương - Hạ Long/Bãi Cháy is already Owner-confirmed for MP-019 and inherits the parent `VERIFIED_FROM` price; exact-address availability remains trip-specific.

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
- SPRINT-003A Owner confirmation establishes Hải Dương - Hạ Long/Bãi Cháy service for MP-019. Other standalone endpoint candidates remain data-only until separately confirmed; Cát Bi remains a confirmed existing route asset with its own verified price exception.
- DATA-002-OV2 recalculates readiness from evidence: 4 existing route records are `PARTIAL`, 12 endpoint candidates are `DATA_REQUIRED`, and none is `READY_FOR_CONTENT`.
- RES-002 sampled 64 purposeful queries across 41 source pages and 32 domains: 18 commercial, 11 price, 1 service-modifier, 22 endpoint/airport, and 12 informational queries.
- No reliable keyword-volume source was available, so every RES-002 record explicitly stores `SEARCH_VOLUME = UNKNOWN`; opportunity scores are internal evidence-weighted prioritization only.
- In the structured sample, `ghephaiduong.com`, `motortrip.vn`, `vexere.com`, `xeghephaiduongdicactinh24h.com`, and `taxihaiduong24h.net` were the five most recurring domains. Frequency is not traffic or market share.
- The recommended first-sprint candidate set reuses eight existing URLs and contains two conditional endpoint candidates; it creates no registry record or public URL during RES-002.
- PLAN-001 originally narrowed the pool to six proposed assets; the later SPRINT-003A Owner decision resolved MP-004 pricing and MP-019 Hạ Long/Bãi Cháy service without inferring the still-unknown operating details.
- Material fact classification prevents public-source geography/distance/airport research from being mislabeled as Owner blockers; only business truth remains Owner-gated.
- MP-019 is now a governed candidate-build URL with explicit service confirmation. MP-020 remains uncreated; endpoint price inheritance still does not substitute for endpoint service confirmation elsewhere.
