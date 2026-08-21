# PHASE 1 DATA AUDIT

Task: `DATA-002`

Status: `REVIEW`

Verification date: 2026-08-21

Scope: CLUSTER-A (Hải Dương ⇄ Hải Phòng), CLUSTER-B (Hải Dương ⇄ Quảng Ninh), CLUSTER-C (Hải Phòng ⇄ Quảng Ninh), plus the existing Hải Dương ⇄ Cát Bi asset.

## Result

Owner confirmation has converted 43 canonical facts to `VERIFIED`. The verified set covers the passenger prices already stored for Hải Dương ⇄ Hải Phòng, Hải Dương ⇄ Cát Bi, and Hải Dương ⇄ Quảng Ninh, plus the general service commitments supplied on 2026-08-21.

Missing passenger prices for Hải Phòng ⇄ Quảng Ninh remain `UNKNOWN` and are presented publicly as “Liên hệ”. Parcel values, endpoint-specific Quảng Ninh service, hours, lead time, surcharges, airport exceptions, distance, and duration remain unverified.

The explicit Owner instruction in DATA-002 authorizes the existing Phase 1 passenger prices to appear on the existing route pages. No new URL or SEO asset was created.

## Inventory

| Item | Count |
|---|---:|
| Parent routes | 3 |
| Endpoint/sub-route records | 13 |
| Existing Phase 1 assets mapped | 11 |
| Canonical route/sub-route facts | 366 |
| Asset claim observations | 59 |
| Legacy fallback facts | 8 |
| Total audited facts | 433 |
| Data conflicts | 3 |

## Evidence summary

| Status | Facts | Interpretation |
|---|---:|---|
| `VERIFIED` | 43 | Owner-confirmed passenger prices, price display rule, corridor directionality, door-to-door service, shared/charter availability, payment timing, and booking-fee rule. |
| `PUBLIC_SOURCE` | 0 | No external/public source was introduced. |
| `ESTIMATE` | 8 | Legacy formula paths remain traceable implementation outputs only and are forbidden for new assets. |
| `UNKNOWN` | 382 | Business provenance or the required operating detail is still missing. |

`ESTIMATE` is not treated as an Owner-approved public fare. Asset-claim observations remain observations; their canonical equivalents are upgraded only where the Owner response is explicit.

## Verified price models

| Route | Shared ride | Charter 4 seat | Charter 7 seat | Parcel |
|---|---:|---:|---:|---|
| Hải Dương ⇄ Hải Phòng | 250,000 VND | 500,000 VND | 650,000 VND | `UNKNOWN` |
| Hải Dương ⇄ Cát Bi | 300,000 VND | 600,000 VND | 750,000 VND | `UNKNOWN` |
| Hải Dương ⇄ Quảng Ninh | 250,000 VND | 900,000 VND | 1,100,000 VND | `UNKNOWN` |
| Hải Phòng ⇄ Quảng Ninh | `UNKNOWN` / Liên hệ | `UNKNOWN` / Liên hệ | `UNKNOWN` / Liên hệ | `UNKNOWN` |

These are parent-corridor values. No endpoint-specific Quảng Ninh price or symmetric endpoint rule was inferred.

## Verified service commitments

- Home pickup and destination drop-off.
- Both directions across the corridor.
- Shared ride and private charter.
- Payment after the trip.
- Advance booking has no fee.

Not verified by the response:

- Parcel service or parcel price.
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
| hd-hp | 83% | 67% | 67% | 48% | DATA_REQUIRED |
| hd-qn | 83% | 67% | 67% | 48% | DATA_REQUIRED |
| hp-qn | 17% | 33% | 67% | 33% | DATA_REQUIRED |
| hd-cat-bi | 83% | 83% | 67% | 48% | DATA_REQUIRED |
| 12 remaining endpoint candidates | 0% | 0% | 0% | 0% | DATA_REQUIRED |

Readiness summary: `READY_FOR_CONTENT` 0; `PARTIAL` 0; `DATA_REQUIRED` 16; `DO_NOT_PUBLISH` 0.

The records remain `DATA_REQUIRED` because price authorization and general service commitments do not resolve endpoint coverage, operating mode, schedule, surcharges, or parcel rules. This status does not de-publish existing assets.

## Remaining data action

Obtain operational answers for the named endpoints, route frequency/mode, hours, booking lead time, parcel rules, surcharge cases, and Cát Bi exceptions. Do not begin `RES-002` until DATA-002 receives Strategy Review.
