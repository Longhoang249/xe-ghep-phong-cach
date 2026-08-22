# OWNER VERIFICATION RECORD — PHASE 1

Task: `DATA-002`

Verified by: Owner

Latest verification: 2026-08-22 (Asia/Ho_Chi_Minh)

Source type: `OWNER`

## Source response

### Initial confirmation — 2026-08-21

> “Những mục đã có giá thì show giá, những mục chưa có thì ghi liên hệ (nhưng chừa sẵn hệ thống đằng sau nếu tôi fill giá sau này thì cũng dễ được cập nhật).”

> “Các dịch vụ có đón tận nhà trả tận nơi, xe 2 chiều full tuyến, xe ghép bao xe, thanh toán sau chuyến, đặt trước không mất phí.”

### Pricing and service clarification — 2026-08-22

- Every stored Phase 1 price is a **minimum starting price**, never a fixed fare. `250.000đ` means `Từ 250.000đ`.
- Final price can vary by travel date, exact pickup address, exact drop-off address, travel time, and actual trip conditions.
- No surcharge formula may be inferred or published without separate Owner evidence.
- Named endpoints inherit the parent corridor's starting price; no endpoint-specific number may be generated.
- Parcel delivery is confirmed alongside shared ride, charter, both directions, home pickup, destination drop-off, payment after trip, and free advance booking.
- Operating hours, 24/7, lead time, waiting policy, specific surcharges, fixed schedules, and trips per day remain unverified.

## Canonical interpretation

- All 12 stored numeric Phase 1 values—shared ride, 4-seat charter, 7-seat charter, and parcel—use price model `VERIFIED_FROM`.
- A missing passenger price is not zero and is not formula-derived; its public value is “Liên hệ”.
- Named endpoint price resolution is `INHERIT_PARENT_VERIFIED_FROM`; this is not permission to infer a separate endpoint price or publish an unconfirmed endpoint.
- Price presentation must preserve the semantic prefix “Từ”; the final price remains trip-specific.
- Door-to-door pickup/drop-off, both directions, shared ride, charter, parcel, payment after trip, and free advance booking are verified general service commitments.

## Explicitly not inferred

- A fixed/daily schedule, 24/7 operation, or booking lead time.
- Named-endpoint service availability or a distinct endpoint-specific price.
- Surcharge, waiting, flight-delay, early/late-flight, terminal, luggage, distance, or duration rules.
- Any formula that converts the stated variation factors into a surcharge or final fare.

## Evidence implementation

The machine-readable source of truth is `data/seo/route-knowledge/owner-verification.mjs`. Every `VERIFIED` fact records value, source type, this source reference, verifier, date, and notes. Missing prices and unconfirmed endpoint service remain non-public for evidence-aware consumers. Public-output wording changes are intentionally deferred to `PUBLIC_DATA_REMEDIATION_QUEUE.md`.
