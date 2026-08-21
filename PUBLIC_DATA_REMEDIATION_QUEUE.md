# PUBLIC DATA REMEDIATION QUEUE

Task: `DATA-002`

Status: `REVIEW`

| Priority | URL/Surface | Current Claim | Verified Reality | Required Change | Risk |
|---|---|---|---|---|---|
| DONE | Phase 1 passenger route pages | Price was absent except one legacy exception. | Nine stored Phase 1 shared/charter fares may be shown; HP-QN is contact-only. | Implemented evidence-driven price table and Offer price. | Low after validation; no URL change. |
| P0 | Homepage cargo banner | “Chỉ từ 150k”. | Parcel price and availability remain `UNKNOWN`. | Remove or replace only after Owner supplies the real parcel rule and Strategy approves remediation. | High: unsupported commercial claim. |
| P0 | Booking price output | Stored/formula price can appear for passenger or parcel requests. | Only nine Phase 1 passenger values are Owner-verified; eight fallback paths are only `ESTIMATE`. | Route booking output through evidence governance; unknown/estimate must use contact unless explicitly approved. | High: customer sees unsupported numbers. |
| P0 | Route/guide parcel copy | Several assets state parcel service is accepted. | Parcel service was not confirmed in DATA-002. | Audit and neutralize affirmative parcel claims after Strategy approval. | High: unsupported availability claim. |
| P1 | Quảng Ninh route/guide pages | Broad destination references. | No named endpoint was confirmed. | Keep generic corridor wording; add endpoint claims only from future Owner evidence. | Medium: service-area overclaim. |
| P1 | Cát Bi pages | Existing airport instructions imply operational coverage. | Passenger route-level service/prices are verified; airport exceptions are not. | Obtain and then publish waiting, delay, early/late-flight, luggage, and surcharge rules. | Medium: operational mismatch. |
| P1 | All public surfaces | Some copy can imply immediate/daily availability. | “Both directions/full corridor” is verified; frequency is not. | Avoid “hàng ngày”, fixed timetable, or guaranteed vehicle until verified. | Medium: availability overclaim. |
| P1 | Legacy price fallbacks PF-001…PF-008 | Formula-derived values can be produced. | Traceable `ESTIMATE`, `DATA_REQUIRED`, forbidden for new assets. | Replace one by one with Owner-verified numeric/range/from/variable rules. | High: formula mistaken for business truth. |

No remaining remediation item is executed in DATA-002 without a further explicit decision.
