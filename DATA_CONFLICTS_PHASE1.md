# DATA CONFLICTS — PHASE 1

Task: `DATA-002`

Status: `REVIEW`

Evidence: `OWNER_VERIFICATION_RECORD_PHASE1.md`, latest confirmation 2026-08-22 by Owner.

## DATA_CONFLICT-001 — Parcel pricing model

Status: `RESOLVED_IN_KB — PUBLIC_REMEDIATION_OPEN`

| Original values/claims | Owner decision | Canonical value | Public surfaces affected |
|---|---|---|---|
| Homepage “Chỉ từ 150k”; route bases 150k/180k/null; SC-002 says no single parcel price; booking applies stored/formula values. | Parcel service is confirmed. Stored numeric parcel values are minimum starting prices; no calculation/surcharge formula was supplied. | 150k/150k/180k are `VERIFIED_FROM`; missing HP-QN is `UNKNOWN`. | Homepage cargo banner, booking estimate/formula, route/guide parcel claims. |

Remaining public action: preserve “Từ” semantics, remove any implication that the current volumetric/distance formula is Owner-approved, and keep missing prices contact-only.

## DATA_CONFLICT-002 — Stored price versus missing provenance

Status: `RESOLVED_IN_KB — PUBLIC_REMEDIATION_OPEN`

| Original values/claims | Owner decision | Canonical value | Public surfaces affected |
|---|---|---|---|
| Stored values existed without complete semantic provenance; HP-QN values were null. | All stored numeric Phase 1 values mean “Từ”; named endpoints inherit the parent minimum; missing values say “Liên hệ”. | 12 values are `VERIFIED_FROM`; four HP-QN values remain `UNKNOWN`/contact-only. | Existing Phase 1 route pages, booking output, and Offer schema. |

Remaining public action: several route-page and booking surfaces render a bare amount or “Tham khảo” rather than explicit “Từ”. Endpoint service availability remains separate and unconfirmed.

## DATA_CONFLICT-003 — Availability without operations evidence

Status: `PARTIALLY_RESOLVED`

| Original values/claims | Owner decision | Canonical value | Public surfaces affected |
|---|---|---|---|
| Existing pages claimed service, two directions, shared/charter, parcel, and broad pickup/drop-off without Owner provenance. | Confirmed door-to-door, both directions/full corridor, shared ride, charter, parcel, payment after trip, and free advance booking. | Those commitments are `VERIFIED`. Frequency, hours, and named-endpoint service remain `UNKNOWN`. | Route pages, guides, homepage, booking flow, policy pages. |

Remaining conflict: “có xe” must not be converted into daily/fixed availability. Each named endpoint still needs `CONFIRMED`, `UNCONFIRMED`, or `NOT_SERVICED` input.

## Resolution rule

Only explicit Owner/operations input can upgrade the remaining facts. “Theo chuyến / không cố định” must be stored as a verified business rule, not converted to a numeric fare or daily schedule.
