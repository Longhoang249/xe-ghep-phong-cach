# OWNER VERIFICATION RECORD — PHASE 1

Task: `DATA-002`

Verified by: Owner

Verified at: 2026-08-21 (Asia/Ho_Chi_Minh)

Source type: `OWNER`

## Source response

> “Những mục đã có giá thì show giá, những mục chưa có thì ghi liên hệ (nhưng chừa sẵn hệ thống đằng sau nếu tôi fill giá sau này thì cũng dễ được cập nhật).”

> “Các dịch vụ có đón tận nhà trả tận nơi, xe 2 chiều full tuyến, xe ghép bao xe, thanh toán sau chuyến, đặt trước không mất phí.”

## Canonical interpretation

- Existing shared-ride, 4-seat charter, and 7-seat charter values in the Phase 1 confirmation form are authorized for public display.
- A missing passenger price is not zero and is not formula-derived; its public value is “Liên hệ”.
- Price presentation is evidence-driven so a later verified fact can update the public route page without changing its presentation component.
- Door-to-door pickup/drop-off, both directions, shared ride, charter, payment after trip, and free advance booking are verified general service commitments.

## Explicitly not inferred

- Parcel availability or pricing.
- A fixed/daily schedule, 24/7 operation, or booking lead time.
- Any named Quảng Ninh endpoint or endpoint-specific price.
- Surcharge, waiting, flight-delay, early/late-flight, terminal, luggage, distance, or duration rules.
- Equal A → B and B → A endpoint pricing beyond the displayed parent-corridor value authorized by Owner.

## Evidence implementation

The machine-readable source of truth is `data/seo/route-knowledge/owner-verification.mjs`. Every `VERIFIED` fact records value, source type, this source reference, verifier, date, and notes. Unknown parcel and endpoint facts remain non-public for evidence-aware consumers.
