# PHASE 1 DATA AUDIT

Task: `DATA-001`

Status: `REVIEW`

Audit date: 2026-08-21

Scope: CLUSTER-A (Hải Dương ⇄ Hải Phòng), CLUSTER-B (Hải Dương ⇄ Quảng Ninh), CLUSTER-C (Hải Phòng ⇄ Quảng Ninh)

## Result

The repository contains enough values and claims to build an auditable inventory, but not enough traceable operational evidence to mark any Phase 1 route ready for new or upgraded content. Existing values are retained as observations with `UNKNOWN`; the eight code-derived fallback paths are traceable `ESTIMATE`, not verified fares.

No external/public data source was added in DATA-001. Therefore `PUBLIC_SOURCE` remains zero.

## Inventory

| Item | Count |
|---|---:|
| Parent routes | 3 |
| Endpoint/sub-route records | 13 |
| Existing Phase 1 assets mapped | 11 |
| Canonical route/sub-route facts | 334 |
| Asset claim observations | 59 |
| Legacy fallback facts | 8 |
| Total audited facts | 401 |
| Data conflicts | 3 |

Sub-route coverage:

- CLUSTER-A: Hải Phòng trung tâm, Cát Bi, Thủy Nguyên, Đồ Sơn.
- CLUSTER-B: Đông Triều, Uông Bí, Quảng Yên, Hạ Long, Bãi Cháy, Cẩm Phả, Vân Đồn, Ao Tiên, Móng Cái.
- CLUSTER-C: current repository/brief sources contain no named endpoint specific to Hải Phòng ⇄ Quảng Ninh. No endpoint was invented; Owner is asked to supply the real list.

Except for Cát Bi, all endpoint records are `CANDIDATE`, `UNCONFIRMED`, `DATA_ONLY`, have no canonical, and cannot create a public asset.

## Evidence summary

| Status | Facts | Interpretation |
|---|---:|---|
| `VERIFIED` | 0 | No fact has Owner/operations confirmation with verifier and date. |
| `PUBLIC_SOURCE` | 0 | No external source was introduced. |
| `ESTIMATE` | 8 | The eight existing price formulas/outputs are traceable to code, not commercially verified. |
| `UNKNOWN` | 393 | Values/claims exist or gaps are recorded, but business provenance is missing. |

The high `UNKNOWN` count is intentional. Repository presence proves only that a claim/value exists in the system; it does not prove the business fact.

## Existing Phase 1 asset claim audit

The table covers decision-impacting claims and values in the 11 assets. Editorial wording and keyword strings are not counted as business facts.

| Asset | Fact | Current value | Evidence | Status | Conflict |
|---|---|---|---|---|---|
| MP-003 | sharedRidePrice | 250000 | `data/routes.ts:12` | UNKNOWN | DATA_CONFLICT-002 |
| MP-003 | charter4SeatPrice | 500000 | `data/routes.ts:12` | UNKNOWN | DATA_CONFLICT-002 |
| MP-003 | charter7SeatPrice | 650000 | `data/routes.ts:12` | UNKNOWN | DATA_CONFLICT-002 |
| MP-003 | parcelPrice | 150000 | `data/routes.ts:12` | UNKNOWN | DATA_CONFLICT-002 |
| MP-003 | distanceKm | 48 | `data/routes.ts:12` | UNKNOWN | — |
| MP-003 | durationMinutes | 65 | `data/routes.ts:12` | UNKNOWN | — |
| MP-003 | serviceAvailability | Claims shared, charter 4–7 seats, parcel, both directions | `app/[slug]/page.tsx:53-68,159-184` | UNKNOWN | DATA_CONFLICT-003 |
| MP-003 | pricingQualification | Final fare confirmed from trip details | `app/[slug]/page.tsx:67-68` | UNKNOWN | — |
| MP-004 | sharedRidePrice | 300000 | `data/routes.ts:13` | UNKNOWN | DATA_CONFLICT-002 |
| MP-004 | charter4SeatPrice | 600000 | `data/routes.ts:13` | UNKNOWN | DATA_CONFLICT-002 |
| MP-004 | charter7SeatPrice | 750000 | `data/routes.ts:13` | UNKNOWN | DATA_CONFLICT-002 |
| MP-004 | parcelPrice | 150000 | `data/routes.ts:13` | UNKNOWN | DATA_CONFLICT-002 |
| MP-004 | distanceKm | 58 | `data/routes.ts:13` | UNKNOWN | — |
| MP-004 | durationMinutes | 75 | `data/routes.ts:13` | UNKNOWN | — |
| MP-004 | serviceAvailability | Claims shared, charter 4–7 seats, parcel, both directions | `app/[slug]/page.tsx:53-68,159-184` | UNKNOWN | DATA_CONFLICT-003 |
| MP-004 | pricingQualification | Final fare confirmed from trip details | `app/[slug]/page.tsx:67-68` | UNKNOWN | — |
| MP-005 | sharedRidePrice | 250000 | `data/routes.ts:14` | UNKNOWN | DATA_CONFLICT-002 |
| MP-005 | charter4SeatPrice | 900000 | `data/routes.ts:14` | UNKNOWN | DATA_CONFLICT-002 |
| MP-005 | charter7SeatPrice | 1100000 | `data/routes.ts:14` | UNKNOWN | DATA_CONFLICT-002 |
| MP-005 | parcelPrice | 180000 | `data/routes.ts:14` | UNKNOWN | DATA_CONFLICT-002 |
| MP-005 | distanceKm | 105 | `data/routes.ts:14` | UNKNOWN | — |
| MP-005 | durationMinutes | 120 | `data/routes.ts:14` | UNKNOWN | — |
| MP-005 | serviceAvailability | Claims shared, charter 4–7 seats, parcel, both directions | `app/[slug]/page.tsx:53-68,159-184` | UNKNOWN | DATA_CONFLICT-003 |
| MP-005 | pricingQualification | Final fare confirmed from trip details | `app/[slug]/page.tsx:67-68` | UNKNOWN | — |
| MP-006 | sharedRidePrice | NULL | `data/routes.ts:15` | UNKNOWN | DATA_CONFLICT-002 |
| MP-006 | charter4SeatPrice | NULL | `data/routes.ts:15` | UNKNOWN | DATA_CONFLICT-002 |
| MP-006 | charter7SeatPrice | NULL | `data/routes.ts:15` | UNKNOWN | DATA_CONFLICT-002 |
| MP-006 | parcelPrice | NULL | `data/routes.ts:15` | UNKNOWN | DATA_CONFLICT-002 |
| MP-006 | distanceKm | NULL | `data/routes.ts:15` | UNKNOWN | — |
| MP-006 | durationMinutes | NULL | `data/routes.ts:15` | UNKNOWN | — |
| MP-006 | serviceAvailability | Claims shared, charter 4–7 seats, parcel, both directions | `app/[slug]/page.tsx:53-68,159-184` | UNKNOWN | DATA_CONFLICT-003 |
| MP-006 | pricingQualification | Final fare confirmed from trip details | `app/[slug]/page.tsx:67-68` | UNKNOWN | — |
| CP-002 | serviceAvailability | Claims shared and charter corridor demand | `data/guide-posts.ts:58-84` | UNKNOWN | DATA_CONFLICT-003 |
| CP-002 | directionality | Claims both directions | `data/guide-posts.ts:58-84` | UNKNOWN | DATA_CONFLICT-003 |
| CP-002 | schedule | No fixed schedule; varies by day/endpoint | `data/guide-posts.ts:58-84` | UNKNOWN | — |
| CP-002 | destinationGranularity | Specific Quảng Ninh destination required | `data/guide-posts.ts:58-84` | UNKNOWN | — |
| CP-003 | serviceAvailability | Claims Phong Cách has corridor vehicles | `data/guide-posts.ts:88-111` | UNKNOWN | DATA_CONFLICT-003 |
| CP-003 | directionality | Claims both directions | `data/guide-posts.ts:88-111` | UNKNOWN | DATA_CONFLICT-003 |
| CP-003 | vehicleAvailability | Shared or charter 4–7 seats | `data/guide-posts.ts:88-111` | UNKNOWN | — |
| CP-003 | parcelAvailability | Parcel accepted subject to checks | `data/guide-posts.ts:88-111` | UNKNOWN | — |
| CP-004 | serviceAvailability | Claims shared, charter, parcel | `data/guide-posts.ts:116-140` | UNKNOWN | DATA_CONFLICT-003 |
| CP-004 | directionality | Claims both directions | `data/guide-posts.ts:116-140` | UNKNOWN | DATA_CONFLICT-003 |
| CP-004 | schedule | No fixed schedule published | `data/guide-posts.ts:116-140` | UNKNOWN | — |
| CP-004 | destinationGranularity | Specific Quảng Ninh destination required | `data/guide-posts.ts:116-140` | UNKNOWN | — |
| SC-001 | bookingProcess | Web request followed by trip confirmation | `data/guide-posts.ts:171-194` | UNKNOWN | — |
| SC-001 | schedule | No fixed schedule/time for every request | `data/guide-posts.ts:171-194` | UNKNOWN | — |
| SC-001 | directionality | Customer asked whether return is needed | `data/guide-posts.ts:171-194` | UNKNOWN | DATA_CONFLICT-003 |
| SC-002 | parcelAvailability | Conditional on item/trip checks | `data/guide-posts.ts:198-221` | UNKNOWN | — |
| SC-002 | parcelPricing | No single price applies to every parcel | `data/guide-posts.ts:198-221` | UNKNOWN | DATA_CONFLICT-001 |
| SC-002 | parcelInputs | Dimensions, weight, packing, locations required | `data/guide-posts.ts:198-221` | UNKNOWN | — |
| SC-002 | parcelRestrictions | Not every item is automatically accepted | `data/guide-posts.ts:198-221` | UNKNOWN | — |
| SC-004 | directionality | Claims Hải Phòng → Hải Dương | `data/guide-posts.ts:279-302` | UNKNOWN | DATA_CONFLICT-003 |
| SC-004 | directionAvailability | Each direction may differ | `data/guide-posts.ts:279-302` | UNKNOWN | — |
| SC-004 | vehicleAvailability | Shared, charter 4-seat, charter 7-seat | `data/guide-posts.ts:279-302` | UNKNOWN | — |
| CP-007 | serviceAvailability | Claims shared and charter airport demand | `data/guide-posts.ts:306-329` | UNKNOWN | DATA_CONFLICT-003 |
| CP-007 | directionality | Claims both Hải Dương ⇄ Cát Bi directions | `data/guide-posts.ts:306-329` | UNKNOWN | DATA_CONFLICT-003 |
| CP-007 | airportRequirements | Flight information and terminal requested | `data/guide-posts.ts:306-329` | UNKNOWN | — |
| CP-007 | luggage | Vehicle choice depends on luggage/passengers | `data/guide-posts.ts:306-329` | UNKNOWN | — |
| CP-007 | schedule | Vehicle checked per requested trip | `data/guide-posts.ts:306-329` | UNKNOWN | — |

## Conflicts

| ID | Severity | Problem | Owner resolution required |
|---|---|---|---|
| DATA_CONFLICT-001 | HIGH | Homepage says cargo “Chỉ từ 150k”; route bases are 150k/180k/null; SC-002 says no single parcel price; booking applies a formula/surcharge. | Define whether 150k is a real minimum, route base, marketing claim, or invalid. |
| DATA_CONFLICT-002 | HIGH | `data/routes.ts` says shared prices were confirmed, but no per-field source/verifier/date exists; TECH evidence is therefore UNKNOWN. | Confirm, correct, or mark each price “no fixed price/per trip”; add verifier/date. |
| DATA_CONFLICT-003 | HIGH | Route pages/guides affirm availability, both directions, vehicles, and parcel service without direction/endpoint operations evidence. | Confirm corridor, direction, endpoint, frequency, and service mode individually. |

Details are in `DATA_CONFLICTS_PHASE1.md`.

## Price fallback mapping

| ID | Scope | Route/service | Current output | Evidence | Remediation |
|---|---|---|---|---|---|
| PF-001 | Registered | Hải Dương ⇄ Hưng Yên, charter 4 | 560000 | ESTIMATE | DATA_REQUIRED |
| PF-002 | Registered | Hải Dương ⇄ Hưng Yên, charter 7 | 700000 | ESTIMATE | DATA_REQUIRED |
| PF-003 | Registered | Hải Dương ⇄ Hà Nam, charter 4 | 990000 | ESTIMATE | DATA_REQUIRED |
| PF-004 | Registered | Hải Dương ⇄ Hà Nam, charter 7 | 1250000 | ESTIMATE | DATA_REQUIRED |
| PF-005 | Custom | Shared ride | Distance/passenger formula | ESTIMATE | DATA_REQUIRED |
| PF-006 | Custom | Charter 4 | Distance formula | ESTIMATE | DATA_REQUIRED |
| PF-007 | Custom | Charter 7 | Distance formula | ESTIMATE | DATA_REQUIRED |
| PF-008 | Custom | Parcel | Distance/volumetric-weight formula | ESTIMATE | DATA_REQUIRED |

All eight are `allowedForNewAssets: false`. DATA-001 preserves current public behavior.

## Completeness and content readiness

Completeness measures whether a value exists in the current system. Evidence measures whether decision-impacting facts have non-UNKNOWN traceability. A populated but unsupported value can raise coverage without raising evidence.

| Route/sub-route | Cluster | Commercial | Journey | Operations | Evidence | Readiness |
|---|---|---:|---:|---:|---:|---|
| hd-hp | CLUSTER-A | 83% | 33% | 57% | 0% | DATA_REQUIRED |
| hd-qn | CLUSTER-B | 83% | 33% | 57% | 0% | DATA_REQUIRED |
| hp-qn | CLUSTER-C | 17% | 0% | 57% | 0% | DATA_REQUIRED |
| hd-hp-central | CLUSTER-A | 0% | 0% | 0% | 0% | DATA_REQUIRED |
| hd-cat-bi | CLUSTER-A | 83% | 50% | 57% | 0% | DATA_REQUIRED |
| hd-thuy-nguyen | CLUSTER-A | 0% | 0% | 0% | 0% | DATA_REQUIRED |
| hd-do-son | CLUSTER-A | 0% | 0% | 0% | 0% | DATA_REQUIRED |
| hd-dong-trieu | CLUSTER-B | 0% | 0% | 0% | 0% | DATA_REQUIRED |
| hd-uong-bi | CLUSTER-B | 0% | 0% | 0% | 0% | DATA_REQUIRED |
| hd-quang-yen | CLUSTER-B | 0% | 0% | 0% | 0% | DATA_REQUIRED |
| hd-ha-long | CLUSTER-B | 0% | 0% | 0% | 0% | DATA_REQUIRED |
| hd-bai-chay | CLUSTER-B | 0% | 0% | 0% | 0% | DATA_REQUIRED |
| hd-cam-pha | CLUSTER-B | 0% | 0% | 0% | 0% | DATA_REQUIRED |
| hd-van-don | CLUSTER-B | 0% | 0% | 0% | 0% | DATA_REQUIRED |
| hd-ao-tien | CLUSTER-B | 0% | 0% | 0% | 0% | DATA_REQUIRED |
| hd-mong-cai | CLUSTER-B | 0% | 0% | 0% | 0% | DATA_REQUIRED |

Readiness summary:

- `READY_FOR_CONTENT`: 0
- `PARTIAL`: 0
- `DATA_REQUIRED`: 16
- `DO_NOT_PUBLISH`: 0

This readiness applies to new or upgraded content. It does not de-publish the 11 existing assets.

## Main gaps

### Commercial

- Direction/endpoint-specific shared and charter prices.
- Whether each stored value is fixed, starting, per passenger, per vehicle, or per trip.
- Parcel bases, weight/dimension rule, and whether “from 150k” is valid.
- Night, remote-area, airport, waiting, and holiday surcharges.

### Journey

- Owner-confirmed pickup/drop-off areas.
- Endpoint sequences and whether Hạ Long and Bãi Cháy are separate commercially.
- Source/method for stored distance and duration.
- Cát Bi waiting, early/late flight, terminal, and luggage rules.

### Operations

- Daily versus per-trip/check-first availability by direction.
- Operating hours and booking lead time.
- Actual 4-seat/7-seat availability by corridor.
- Parcel acceptance/restrictions and waiting policy.

## Next data action

Send `OWNER_DATA_REQUEST_PHASE1.md` to Long/Phong for confirm/correct responses. Apply the returned evidence in `DATA-002`; do not begin market research or content production from these UNKNOWN observations.
