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
- Named endpoints normally inherit the parent corridor's starting price unless Owner separately verifies a route-specific starting price.
- Parcel delivery is confirmed alongside shared ride, charter, both directions, home pickup, destination drop-off, payment after trip, and free advance booking.
- Operating hours, 24/7, lead time, waiting policy, specific surcharges, fixed schedules, and trips per day remain unverified.

### Route-specific confirmation — Cát Bi — 2026-08-22

The Hải Dương - sân bay Cát Bi route has its own verified starting prices and does **not** inherit the Hải Dương - Hải Phòng passenger/charter starting prices:

- Xe ghép: **Từ 300.000đ/người**.
- Bao xe 4 chỗ: **Từ 600.000đ/chuyến**.
- Bao xe 7 chỗ: **Từ 750.000đ/chuyến**.
- Gửi hàng: **Từ 150.000đ**.

These remain starting prices; the final price is confirmed per trip.

### Route-specific service confirmation — Hạ Long / Bãi Cháy — 2026-08-22

Owner confirmed Xe Ghép Phong Cách actually accepts **Hải Dương - Hạ Long / Bãi Cháy** trips. MP-019 may therefore use the verified Hải Dương - Quảng Ninh corridor starting prices while keeping trip-specific availability and final-price checks.

## Canonical interpretation

- All stored numeric Phase 1 values covered by Owner confirmation use price model `VERIFIED_FROM`.
- A missing passenger price is not zero and is not formula-derived; its public value is “Liên hệ”.
- Named endpoint price resolution is normally `INHERIT_PARENT_VERIFIED_FROM`; this is not permission to infer a separate endpoint price or publish an unconfirmed endpoint.
- **Cát Bi is an explicit route-level exception:** its verified `300k / 600k / 750k / 150k` starting-price set overrides parent-corridor inheritance.
- Price presentation must preserve the semantic prefix “Từ”; the final price remains trip-specific.
- Door-to-door pickup/drop-off, both directions, shared ride, charter, parcel, payment after trip, and free advance booking are verified general service commitments.
- Hạ Long/Bãi Cháy service availability is explicitly confirmed for MP-019; fixed frequency, fixed schedule and every-address availability are not inferred.

## Explicitly not inferred

- A fixed/daily schedule, 24/7 operation, or booking lead time.
- Named-endpoint service availability except where separately confirmed, including Hạ Long/Bãi Cháy for MP-019.
- Surcharge, waiting, flight-delay, early/late-flight, terminal, luggage, distance, or duration rules.
- Any formula that converts the stated variation factors into a surcharge or final fare.

## Evidence implementation

The machine-readable source of truth is `data/seo/route-knowledge/owner-verification.mjs`. Every `VERIFIED` fact records value, source type, this source reference, verifier, date, and notes. Missing prices and unconfirmed endpoint service remain non-public for evidence-aware consumers. Public-output wording changes are tracked separately from the evidence layer.
