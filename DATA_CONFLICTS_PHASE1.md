# DATA CONFLICTS — PHASE 1

Task: `DATA-002`

Status: `REVIEW`

Evidence: `OWNER_VERIFICATION_RECORD_PHASE1.md`, confirmed 2026-08-21 by Owner.

## DATA_CONFLICT-001 — Parcel pricing model

Status: `OPEN`

| Original values/claims | Owner decision | Canonical value | Public surfaces affected |
|---|---|---|---|
| Homepage “Chỉ từ 150k”; route bases 150k/180k/null; SC-002 says no single parcel price; booking applies stored/formula values. | Parcel was not included in the returned confirmation. | `UNKNOWN`; no verified parcel price or availability rule. | Homepage cargo banner, booking estimate, route/guide parcel claims. |

Required decision: define whether “150k” is a valid minimum, which routes it applies to, and whether parcel pricing is fixed, range, from-price, or per item/trip.

## DATA_CONFLICT-002 — Stored price versus missing provenance

Status: `PARTIALLY_RESOLVED`

| Original values/claims | Owner decision | Canonical value | Public surfaces affected |
|---|---|---|---|
| Passenger prices existed without verifier/date; HP-QN values were null. | Show the prices already stored; missing prices must say “Liên hệ”. | Nine stored shared/charter values are `VERIFIED`; HP-QN passenger prices remain `UNKNOWN`/contact-only. | Existing Phase 1 route pages and their Offer schema. |

Remaining conflict: endpoint-specific applicability in Quảng Ninh was not supplied. Parcel values remain outside the confirmation.

## DATA_CONFLICT-003 — Availability without operations evidence

Status: `PARTIALLY_RESOLVED`

| Original values/claims | Owner decision | Canonical value | Public surfaces affected |
|---|---|---|---|
| Existing pages claimed service, two directions, shared/charter, parcel, and broad pickup/drop-off without Owner provenance. | Confirmed door-to-door, both directions/full corridor, shared ride, charter, payment after trip, and free advance booking. | Those six commitments are `VERIFIED`. Parcel, frequency, hours, and named endpoints remain `UNKNOWN`. | Route pages, guides, homepage, booking flow, policy pages. |

Remaining conflict: “có xe” must not be converted into daily/fixed availability. Each named endpoint still needs `CONFIRMED`, `UNCONFIRMED`, or `NOT_SERVICED` input.

## Resolution rule

Only explicit Owner/operations input can upgrade the remaining facts. “Theo chuyến / không cố định” must be stored as a verified business rule, not converted to a numeric fare or daily schedule.
