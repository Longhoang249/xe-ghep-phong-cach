# SEO Project Status

Last updated: 2026-08-21 (Asia/Ho_Chi_Minh)

Updated by: Codex

## Current Phase

Phase: Phase 1 Route Knowledge Base

Objective: Inventory current Phase 1 route facts, evidence, conflicts, and data gaps without changing public website output.

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
| DATA-001 | Phase 1 Route Knowledge Base | Data Architecture / Audit | CLUSTER-A/B/C | REVIEW | — | 3 parents, 13 endpoint records, 11 assets, 401 audited facts, 3 conflicts, and 8 fallback paths mapped. No public consumer enabled. |

---

## Completed

| ID | Asset | Published | URL | Commit |
|---|---|---|---|---|
| RES-001 | Audit SEO Execution Architecture | — | — | `4214f65` |
| TECH-001 | SEO Publication Governance & Evidence Layer | 38 existing URLs preserved | — | `NOT CREATED — isolation unsafe` |
| OPS-001 | Repository Change Attribution | — | — | Included in recovery baseline |
| OPS-002 | Establish Recovery Baseline | — | — | `5f9834356de0f536c3528c03d2cc24f694b2e0db` |

---

## Blocked / Need Decision

| ID | Issue | Required From | Impact |
|---|---|---|---|
| DATA-001-D01 | Complete `OWNER_DATA_REQUEST_PHASE1.md`: confirm/correct prices, endpoint service, directions, pickup/drop-off coverage, hours, lead time, surcharges, Cát Bi, and parcel rules. | Long / Phong | All 16 route/sub-route records remain `DATA_REQUIRED`; 393 facts remain `UNKNOWN`. |
| DATA-001-D02 | Resolve the parcel-price, price-provenance, and service-availability conflicts in `DATA_CONFLICTS_PHASE1.md`. | Long / Phong | No new/upgraded content should use these claims until explicit evidence is recorded in DATA-002. |
| RES-001-D04 | Confirm whether Google Search Console, Bing Webmaster Tools, GA4, and official Zalo/Facebook profiles are configured outside the repository. | Long / Owner | Production HTML exposes no Google/Bing meta verification or GA4 ID; DNS-level verification cannot be inferred from code. |

---

## Next Queue

1. Strategy reviews DATA-001 implementation and removes any unnecessary questions from `OWNER_DATA_REQUEST_PHASE1.md`.
2. Long/Phong completes the approved confirmation form with verifier and date.
3. Run `DATA-002 — Owner Verification / Data Remediation`; preserve “theo chuyến / không cố định” as valid data.
4. Only after DATA-002 approval, run `RES-002 — SEO Battlefield / War Map`.
5. Do not create or upgrade SEO content from `UNKNOWN` observations.

---

## Technical Issues

- **Resolved in TECH-001:** route/guide data no longer enters static params, sitemap, route lookup, or automatic discovery without a `PUBLISHED` asset.
- **Resolved for new assets:** `APPROVED` remains non-public, and governed routes cannot use distance-derived numeric price fallbacks.
- **DATA_REQUIRED, existing output intentionally retained:** all eight legacy public fallback paths are now mapped as traceable `ESTIMATE`; they remain forbidden for new assets and await operational replacement in DATA-002.
- **Resolved in OPS-002:** validated recovery baseline `5f9834356de0f536c3528c03d2cc24f694b2e0db` provides a clean rollback point.
- **Mapped in DATA-001:** 393 current route facts/claims remain `UNKNOWN`; zero facts are Owner `VERIFIED` until the confirmation form is returned.
- **High data conflicts:** parcel pricing, stored-price provenance, and affirmative service claims require Owner resolution.
- **High:** 18 route pages share a mostly generic presentation/content template and do not contain route-specific pickup/drop-off or journey facts.
- **Architecture ready; UI unchanged by brief:** an explicit cluster graph now exists, while current related-link presentation still uses its legacy ordering among published assets.
- **Governed:** 20 out-of-scope assets remain `PUBLISHED` with `legacy: true`; `OTHER` is frozen.
- **Medium:** all sitemap and schema dates use one global `contentUpdatedAt`, so asset-level freshness is not represented.
- **Medium:** money pages also emit `Article` and repeated `FAQPage` graphs; schema intent should be reviewed before scale.
- **Medium:** route and guide detail pages intentionally publish no page-specific Open Graph image.
- **Low:** sitemap priority values are manually assigned; they do not replace crawl/index governance.

---

## Data Required

- Written confirmation of which routes are actually served in both directions.
- Source and effective date for every fare; clarify whether values are fixed, starting, per passenger, per trip, or estimates.
- Verified pickup and drop-off areas for each approved route.
- Source/method and acceptable precision for distance and duration values.
- Confirmed service types by route: shared ride, private 4-seat, private 7-seat, airport transfer, and parcel delivery.
- Approval/evidence for the claims “đón tận nơi”, “đặt trước miễn phí”, “đến nơi mới thanh toán”, and any waiting/cancellation terms.
- Official social profile URLs and owner confirmation of webmaster/analytics configuration.
- For Quảng Ninh, confirm actual service and fare rules by endpoint where operations distinguish them: Đông Triều, Uông Bí, Quảng Yên, Hạ Long/Bãi Cháy, Cẩm Phả, Vân Đồn/Ao Tiên, and Móng Cái. “Báo theo chuyến” is a valid governed value when no fixed fare exists.

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
- DATA-001 maps 3 parent corridors, 13 endpoint/sub-route records, all 11 Phase 1 assets, 401 audited facts, and all 8 fallback paths without enabling a public consumer.
- Current evidence distribution is 0 `VERIFIED`, 0 `PUBLIC_SOURCE`, 8 `ESTIMATE`, and 393 `UNKNOWN`; all 16 route/sub-route records are `DATA_REQUIRED` for new/upgraded content.
