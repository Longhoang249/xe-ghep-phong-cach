# SEO Project Status

Last updated: 2026-08-21 (Asia/Ho_Chi_Minh)

Updated by: Codex

## Current Phase

Phase: Architecture audit and governance setup

Objective: Audit the current SEO execution architecture before creating or changing any SEO page.

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
| RES-001 | Audit SEO Execution Architecture | Research | Sitewide | REVIEW | — | Audit complete; no page, UI, homepage, or existing content changed. See `SEO_AUDIT_RES_001.md`. |

---

## Completed

| ID | Asset | Published | URL | Commit |
|---|---|---|---|---|
| — | — | — | — | — |

---

## Blocked / Need Decision

| ID | Issue | Required From | Impact |
|---|---|---|---|
| RES-001-D01 | Approve or revise the proposed explicit asset registry and publication gate before implementation. | Strategy Lead | Without a gate, adding route or guide data can automatically create an indexable URL and sitemap entry. |
| RES-001-D02 | Decide which of the 31 existing SEO assets (18 route pages and 13 guides) should remain in scope, be updated, be consolidated, or be retired. | Strategy Lead | Many existing assets predate the Phase 1 cluster restriction. No URL action should be taken without strategy approval. |
| RES-001-D03 | Provide or approve evidence for route availability, two-way service, pickup/drop-off coverage, fares, distance, duration, vehicle/service claims, payment terms, and cargo service. | Long / Owner | These claims cannot pass the new data rule without traceable verification. |
| RES-001-D04 | Confirm whether Google Search Console, Bing Webmaster Tools, GA4, and official Zalo/Facebook profiles are configured outside the repository. | Long / Owner | Production HTML exposes no Google/Bing meta verification or GA4 ID; DNS-level verification cannot be inferred from code. |

---

## Next Queue

1. Strategy Lead reviews RES-001 and decides the disposition of existing out-of-scope assets.
2. Owner supplies a verified data pack with source, verifier, verification date, and expiry/recheck date.
3. After approval, implement an explicit SEO asset registry and `APPROVED`/`PUBLISHED` publication gate without creating new URLs.
4. After approval, remove public fallback price generation where no verified value exists.
5. Wait for the first approved `EXECUTION BRIEF` for a Phase 1 asset or technical remediation batch.

---

## Technical Issues

- **Critical:** `lib/pricing.ts` synthesizes public price estimates from distance when verified route prices are absent.
- **Critical:** route and guide records automatically feed static generation and sitemap output; there is no asset status/indexability gate.
- **High:** route facts and business claims have no per-field provenance, verifier, verified date, or expiry.
- **High:** 18 route pages share a mostly generic presentation/content template and do not contain route-specific pickup/drop-off or journey facts.
- **High:** internal links are selected by broad region or array order, not by an explicit SEO cluster graph; money pages do not link back to their relevant guides.
- **High:** existing production scope extends beyond Clusters A–C.
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

---

## Learnings

- The current Next.js 16 App Router implementation builds cleanly and already has functional canonical tags, robots, sitemap, structured data, redirects, analytics hooks, and automated SEO checks.
- Production and the current working tree expose the same 38 sitemap URLs at audit time.
- The current data arrays are reusable, but publication control and evidence governance must be separated from simple route availability before the system scales.
- The safest evolution is to keep current URLs stable, introduce an explicit asset registry, and opt pages into publication only after Strategy approval.
