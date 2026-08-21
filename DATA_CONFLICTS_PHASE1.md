# DATA CONFLICTS — PHASE 1

Task: `DATA-001`

Status: `REVIEW`

No value is selected as the winner in this document. Resolution requires Owner/operations confirmation and becomes `DATA-002` input.

## DATA_CONFLICT-001 — Parcel pricing model

Severity: HIGH

Affected Phase 1 routes: Hải Dương ⇄ Hải Phòng, Hải Dương ⇄ Quảng Ninh, Hải Phòng ⇄ Quảng Ninh

| Surface | Current observation |
|---|---|
| Homepage directory | “Chỉ từ 150k” |
| Route data | Parcel bases: 150000, 180000, and null |
| SC-002 guide | Says no single price applies to every parcel; item and trip details are required |
| Booking form | Says price uses distance and volumetric weight |
| Pricing code | Uses stored/formula base plus excess chargeable-weight surcharge |

Sources:

- `components/BookingExperience.tsx:309,375`
- `data/routes.ts:12-15`
- `data/guide-posts.ts:198-221`
- `lib/pricing.ts:8-13`

Owner decision:

- Is 150000 a valid minimum, a route-specific base, or only a marketing claim?
- Does the real rule use distance, actual/volumetric weight, dimensions, endpoint, or trip-specific quoting?
- Which goods are accepted, conditionally accepted, or refused?

## DATA_CONFLICT-002 — Stored price versus missing provenance

Severity: HIGH

Affected records: `hd-hp`, `hd-cat-bi`, `hd-qn`, `hp-qn`

| Surface | Current observation |
|---|---|
| `data/routes.ts` comment | Says shared prices were confirmed |
| Route records | Contain stored shared/charter/parcel values for three records; HP-QN is null |
| TECH-001 evidence layer | Contains no per-field source, verifier, or verification date |
| DATA-001 classification | Preserves stored values as `UNKNOWN`, not `VERIFIED` |

Sources:

- `data/routes.ts:7-15`
- `data/seo/route-evidence.mjs:1-36`

Owner decision for every price:

- Correct as written;
- Incorrect, replace with a supplied value;
- No fixed price / quote per trip;
- Applies only to one direction or endpoint;
- Effective date and verifier.

## DATA_CONFLICT-003 — Affirmative availability without operations evidence

Severity: HIGH

Affected records: all Phase 1 parent routes plus Cát Bi

Current route pages and guides state “Có”, both-direction service, shared ride, charter 4–7 seats, and in many places parcel availability. The repository contains no direction-specific availability, endpoint coverage, operating hours, booking lead time, or operations verifier.

Sources:

- `app/[slug]/page.tsx:53-68,159-184`
- `data/guide-posts.ts:58-140,171-221,279-329`
- `data/seo/route-evidence.mjs:1-36`

Owner decision:

- Confirm each corridor/direction as daily, per-trip, check-first, or not serviced.
- Confirm real endpoints and pickup/drop-off coverage.
- Confirm 4-seat, 7-seat, shared ride, charter, and parcel availability separately.
- Add verifier and confirmation date.

## Resolution rule

DATA-002 may update a fact only from an explicit Owner/operations response. If the response is “theo chuyến / không cố định”, store that wording as the true value instead of inventing a number or schedule.
