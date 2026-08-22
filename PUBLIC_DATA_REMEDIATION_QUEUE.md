# PUBLIC DATA REMEDIATION QUEUE

Task: `DATA-002`

Status: `REVIEW`

| Priority | URL/Surface | Current Claim | Verified Reality | Required Change | Risk |
|---|---|---|---|---|---|
| P0 | MP-003, MP-004, MP-005 route hero and price table | Numeric prices render as bare amounts such as `250.000đ/người`, which can read as fixed. | All 12 stored numeric Phase 1 prices are `VERIFIED_FROM`. | Prefix every governed numeric row/highlight with “Từ”; keep missing HP-QN values as “Liên hệ”. | High: price semantic conflicts with Owner rule. |
| P0 | MP-003, MP-004, MP-005 Offer schema | `Offer.price` is numeric and description says “tham khảo”, but does not state minimum/starting-price semantics explicitly. | Numeric amount is a minimum starting price; final fare is trip-specific. | Review schema representation and description so crawlers/users cannot reasonably interpret it as fixed. | High: structured-data ambiguity. |
| P0 | Booking success summary and persisted `estimated_price` | Output label is “Tham khảo”; registered/custom-route formulas can produce a numeric result. | Stored Phase 1 values are starting prices; legacy formula paths remain `ESTIMATE`; no surcharge/final-price formula was Owner-approved. | Separate `STARTING_FROM` from `ESTIMATE`; display “Từ” for verified bases and contact/approved estimate semantics elsewhere. | High: customer sees a number with the wrong evidence model. |
| P0 | Booking cargo helper/formula | Public copy says price is calculated by distance and volumetric weight; code applies the formula. | Parcel service and stored starting prices are verified, but no calculation or surcharge formula is verified. | Remove formula-as-business-rule wording/output in a separately approved public task; request contact for final price. | High: unverified formula presented as operating rule. |
| COMPLIANT | Homepage quick-route tiles | Numeric shared price already renders as `Từ …`; missing values render “Liên hệ giá”. | Matches `VERIFIED_FROM` semantics for Phase 1 stored prices. | Preserve behavior; do not infer endpoint-specific prices. | Low. |
| REVIEW | Homepage cargo banner | “Chỉ từ 150k”. | Parcel service is verified; 150k is the lowest stored Phase 1 parcel starting price. Route/scope qualification is not explicit. | Keep out of this task; Strategy should decide whether generic scope is sufficiently clear. | Medium: scope ambiguity, not unsupported availability. |
| P1 | Route/guide parcel copy | Several assets state parcel service is accepted and add item/handling conditions. | Parcel availability is verified; item restrictions, handling rules, lead time and schedule remain unknown. | Preserve verified availability but remove/qualify unsupported operational details when separately approved. | Medium. |
| P1 | Quảng Ninh route/guide pages | Broad destination references. | No named endpoint was confirmed. | Keep generic corridor wording; add endpoint claims only from future Owner evidence. | Medium: service-area overclaim. |
| P1 | Cát Bi pages | Existing airport instructions imply operational coverage. | Passenger route-level service/prices are verified; airport exceptions are not. | Obtain and then publish waiting, delay, early/late-flight, luggage, and surcharge rules. | Medium: operational mismatch. |
| P1 | All public surfaces | Some copy can imply immediate/daily availability. | “Both directions/full corridor” is verified; frequency is not. | Avoid “hàng ngày”, fixed timetable, or guaranteed vehicle until verified. | Medium: availability overclaim. |
| P1 | Legacy price fallbacks PF-001…PF-008 | Formula-derived values can be produced. | Traceable `ESTIMATE`, `DATA_REQUIRED`, forbidden for new assets. | Replace one by one with Owner-verified numeric/range/from/variable rules. | High: formula mistaken for business truth. |

No remaining remediation item is executed in DATA-002 without a further explicit decision.
