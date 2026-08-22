# PHASE 1 DATA AUDIT

Task: `DATA-002`

Status: `REVIEW`

Latest verification date: 2026-08-22

Scope: CLUSTER-A (Hải Dương ⇄ Hải Phòng), CLUSTER-B (Hải Dương ⇄ Quảng Ninh), CLUSTER-C (Hải Phòng ⇄ Quảng Ninh), plus the existing Hải Dương ⇄ Cát Bi asset.

## Result

The Knowledge Base now contains 84 `VERIFIED` facts. Compared with the previous DATA-002 state, 38 existing facts moved from `UNKNOWN` to `VERIFIED`, and three new traceable pricing-policy facts were added.

All 12 stored numeric Phase 1 service prices use `VERIFIED_FROM`: nine passenger/charter values plus three parcel values. Four missing Hải Phòng ⇄ Quảng Ninh values remain `UNKNOWN` and resolve to “Liên hệ”. Parcel availability is verified. Named-endpoint service, hours, lead time, surcharges, airport exceptions, distance, and duration remain unverified.

The Owner rule says every amount is a minimum starting price. Endpoint lookup inherits the parent-corridor `VERIFIED_FROM` facts without generating endpoint-specific numbers and without making a data-only endpoint publishable. No public wording, URL, sitemap entry, or SEO asset was changed.

## Inventory

| Item | Count |
|---|---:|
| Parent routes | 3 |
| Endpoint/sub-route records | 13 |
| Existing Phase 1 assets mapped | 11 |
| Canonical route/sub-route facts | 366 |
| Asset claim observations | 59 |
| Legacy fallback facts | 8 |
| Pricing-policy facts | 3 |
| Total audited facts | 436 |
| Data conflicts | 3 |

## Evidence summary

| Status | Facts | Interpretation |
|---|---:|---|
| `VERIFIED` | 84 | Starting-price facts/rules, matching asset claims, corridor directionality, door-to-door, shared/charter/parcel availability, payment timing, and booking-fee rule. |
| `PUBLIC_SOURCE` | 0 | No external/public source was introduced. |
| `ESTIMATE` | 8 | Legacy formula paths remain traceable implementation outputs only and are forbidden for new assets. |
| `UNKNOWN` | 344 | Business provenance or the required operating detail is still missing. |

`ESTIMATE` is not treated as an Owner-approved public fare. Asset-claim observations remain observations; their canonical equivalents are upgraded only where the Owner response is explicit.

## Verified price models

| Route | Shared ride | Charter 4 seat | Charter 7 seat | Parcel |
|---|---:|---:|---:|---|
| Hải Dương ⇄ Hải Phòng | Từ 250,000 VND | Từ 500,000 VND | Từ 650,000 VND | Từ 150,000 VND |
| Hải Dương ⇄ Cát Bi | Từ 300,000 VND | Từ 600,000 VND | Từ 750,000 VND | Từ 150,000 VND |
| Hải Dương ⇄ Quảng Ninh | Từ 250,000 VND | Từ 900,000 VND | Từ 1,100,000 VND | Từ 180,000 VND |
| Hải Phòng ⇄ Quảng Ninh | `UNKNOWN` / Liên hệ | `UNKNOWN` / Liên hệ | `UNKNOWN` / Liên hệ | `UNKNOWN` |

These are parent-corridor minimums. A named endpoint resolves to the relevant parent values with `INHERIT_PARENT_VERIFIED_FROM`; it never receives an invented endpoint-specific amount. Endpoint service/publication eligibility remains a separate gate.

## Verified service commitments

- Home pickup and destination drop-off.
- Both directions across the corridor.
- Shared ride and private charter.
- Parcel delivery.
- Payment after the trip.
- Advance booking has no fee.

Not verified by the response:

- Daily/fixed-frequency service.
- Any named Quảng Ninh endpoint.
- 24/7 operation, booking lead time, or surcharge policy.
- Cát Bi waiting, delayed-flight, early/late-flight, terminal, or luggage rules.

## Endpoint status

- `CONFIRMED`: Hải Dương ⇄ Cát Bi as the existing route-level asset only.
- `UNCONFIRMED`: Hải Phòng central, Thủy Nguyên, Đồ Sơn, Đông Triều, Uông Bí, Quảng Yên, Hạ Long, Bãi Cháy, Cẩm Phả, Vân Đồn, Ao Tiên, Móng Cái.
- `NOT_SERVICED`: none supplied.

The generic “full corridor” confirmation does not silently upgrade named endpoint candidates.

## Completeness and readiness

| Route/sub-route | Commercial | Journey | Operations | Evidence | Readiness |
|---|---:|---:|---:|---:|---|
| hd-hp | 83% | 67% | 67% | 57% | PARTIAL |
| hd-qn | 83% | 67% | 67% | 57% | PARTIAL |
| hp-qn | 17% | 33% | 67% | 38% | PARTIAL |
| hd-cat-bi | 83% | 83% | 67% | 57% | PARTIAL |
| 12 remaining endpoint candidates | 0% | 0% | 0% | 0% | DATA_REQUIRED |

Readiness summary: `READY_FOR_CONTENT` 0; `PARTIAL` 4; `DATA_REQUIRED` 12; `DO_NOT_PUBLISH` 0.

The four existing route records are now `PARTIAL`: their core service evidence is verified, but they are not `READY_FOR_CONTENT` because operational details remain unresolved. Twelve endpoint candidates stay `DATA_REQUIRED`, data-only, and non-publishable. This status change does not alter existing publication state.

## Remaining data action

Obtain operational answers for named-endpoint service, route frequency, hours, booking lead time, parcel handling restrictions, surcharge cases, and Cát Bi exceptions. Public surfaces listed in `PUBLIC_DATA_REMEDIATION_QUEUE.md` must be changed only in a separately approved task. This DATA-002 update stops at `REVIEW` and starts no new research or content sprint.
