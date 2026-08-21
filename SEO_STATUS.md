# SEO Project Status

Last updated: 2026-08-21 (Asia/Ho_Chi_Minh)

Updated by: Codex

## Current Phase

Phase: Repository change attribution

Objective: Establish a forensic map of the dirty Git workspace and recommend a safe clean-baseline path without changing website code or content.

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
| OPS-001 | Repository Change Attribution | Operations | Repository | REVIEW | — | `WORKSPACE_STATE.md` classifies the 63-entry opening snapshot. No reset, clean, stash, stage, commit, or website change performed. |

---

## Completed

| ID | Asset | Published | URL | Commit |
|---|---|---|---|---|
| RES-001 | Audit SEO Execution Architecture | — | — | `4214f65` |
| TECH-001 | SEO Publication Governance & Evidence Layer | 38 existing URLs preserved | — | `NOT CREATED — isolation unsafe` |

---

## Blocked / Need Decision

| ID | Issue | Required From | Impact |
|---|---|---|---|
| OPS-001-D01 | Select and explicitly authorize a clean-baseline option from `WORKSPACE_STATE.md`. | Owner | Large code tasks remain unsafe while the workspace has no recoverable baseline. OPS-001 does not execute any option. |
| DATA-001-D01 | Provide or approve operational evidence for Phase 1 route availability, endpoint-specific fares, pickup/drop-off coverage, duration, hours, booking lead time, surcharges, airport rules, and cargo service. | Long / Owner | New facts remain neutral/unknown until verifier and verification date are attached. DATA-001 code work has not started. |
| RES-001-D04 | Confirm whether Google Search Console, Bing Webmaster Tools, GA4, and official Zalo/Facebook profiles are configured outside the repository. | Long / Owner | Production HTML exposes no Google/Bing meta verification or GA4 ID; DNS-level verification cannot be inferred from code. |

---

## Next Queue

1. Owner reviews OPS-001 attribution and selects a clean-baseline option; do not execute one without explicit approval.
2. Establish the approved recoverable Git baseline before any large code task.
3. Collect and lock the owner-verified Route Knowledge Base for `DATA-001`; do not infer missing values.
4. After DATA-001, run `RES-002 — SEO War Map`, then Sprint 001.
5. Do not create a new SEO URL until the relevant data and asset brief are approved.

---

## Technical Issues

- **Resolved in TECH-001:** route/guide data no longer enters static params, sitemap, route lookup, or automatic discovery without a `PUBLISHED` asset.
- **Resolved for new assets:** `APPROVED` remains non-public, and governed routes cannot use distance-derived numeric price fallbacks.
- **DATA_REQUIRED, existing output intentionally retained:** eight legacy public fallback paths are inventoried in `UNVERIFIED_PRICE_INVENTORY.md`. Replace them individually in DATA-001 only after operational verification; never reuse them for new assets/content.
- **Operational blocker before large code work:** the opening OPS-001 snapshot contains 24 tracked modified files and 39 untracked files (63 expanded entries), including 10 mixed-attribution files. See `WORKSPACE_STATE.md`.
- **High:** route facts and business claims have no per-field provenance, verifier, verified date, or expiry.
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
