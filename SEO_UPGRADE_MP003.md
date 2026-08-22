# SEO Upgrade Package — MP-003

Status: `DRAFT_NOT_DEPLOYED`

Target: `/xe-ghep-hai-duong-hai-phong`

Prepared: 2026-08-22 (Asia/Ho_Chi_Minh)

Constraint: package only. This file does not authorize or implement a change to MP-003, route UI, booking UI, homepage, public prices, schema, registry status, or sitemap.

## Proposed H1

Xe ghép Hải Dương ⇄ Hải Phòng — đón tận nơi, giá từ 250.000đ

## Above-the-fold answer

Phong Cách nhận xe ghép, bao xe 4–7 chỗ và gửi hàng tuyến Hải Dương ⇄ Hải Phòng cả hai chiều, đón tận nhà và trả tận nơi. Xe ghép hiện từ 250.000đ/người; giá chuyến cụ thể phụ thuộc ngày, giờ và địa chỉ đón trả. Khách đặt trước không mất phí và thanh toán sau chuyến.

Primary CTA: `Gọi [số điện thoại] để kiểm tra chuyến`

Secondary CTA: `Gửi điểm đón, điểm trả và thời gian`

Do not claim fixed schedule, fixed duration, 24/7 availability, a trip count per day, a booking lead time, a waiting rule, or a surcharge formula.

## Quick Facts

| Fact | Public copy | Evidence state |
|---|---|---|
| Direction | Nhận hai chiều Hải Dương ⇄ Hải Phòng | `VERIFIED` Owner, 2026-08-22 |
| Services | Xe ghép, bao xe, gửi hàng | `VERIFIED` Owner, 2026-08-22 |
| Pickup/drop-off | Đón tận nơi, trả tận nơi | `VERIFIED` Owner, 2026-08-22 |
| Payment | Thanh toán sau chuyến | `VERIFIED` Owner, 2026-08-22 |
| Advance booking | Đặt trước không mất phí | `VERIFIED` Owner, 2026-08-22 |
| Availability | Gọi để kiểm tra chuyến thực tế | Hours/frequency remain `UNKNOWN` |

## Verified pricing

Every amount must be generated from the Route Knowledge Base and rendered with the prefix **Từ**.

| Dịch vụ | Proposed public presentation | Model |
|---|---|---|
| Xe ghép | **Từ 250.000đ/người** | `VERIFIED_FROM` |
| Bao xe 4 chỗ | **Từ 500.000đ/chuyến** | `VERIFIED_FROM` |
| Bao xe 7 chỗ | **Từ 650.000đ/chuyến** | `VERIFIED_FROM` |
| Gửi hàng | **Từ 150.000đ** | `VERIFIED_FROM` |

Required note:

> Đây là giá bắt đầu, không phải giá cố định. Giá thực tế có thể thay đổi theo ngày di chuyển, địa chỉ đón, địa chỉ trả, giờ di chuyển và điều kiện chuyến.

Do not publish a surcharge formula or turn any amount into an `Offer.price` without preserving the starting-price semantic.

## Pickup/dropoff information

Safe copy:

- Phong Cách xác nhận dịch vụ đón tận nơi, trả tận nơi trên tuyến.
- Khách cần cung cấp địa chỉ hai đầu để kiểm tra chuyến và báo giá.
- Chưa có danh sách quận/huyện hoặc ranh giới phục vụ được Owner xác nhận; không tự liệt kê.

## Comparison / decision support

Add a compact decision block instead of generic promotional copy:

| Nhu cầu | Gợi ý |
|---|---|
| Khách lẻ, muốn giảm số lần đổi xe | Hỏi xe ghép |
| Gia đình/nhóm riêng/nhiều hành lý | Hỏi bao xe 4 hoặc 7 chỗ |
| Dùng được bến/điểm hẹn và muốn so chuyến công bố | Xem xe khách; xác nhận lịch với đơn vị khai thác |
| Có phương tiện và muốn tự chủ | So tự lái theo nhiên liệu, phí đường, đỗ xe, chiều về |

Link this section to CP-003 for the full neutral comparison; keep price/booking intent on MP-003.

## FAQs

1. **Giá xe ghép Hải Dương – Hải Phòng bao nhiêu?**
   Từ 250.000đ/người. Đây là giá bắt đầu; giá chuyến cụ thể được xác nhận sau khi có ngày, giờ và địa chỉ đón trả.
2. **Có xe Hải Phòng về Hải Dương không?**
   Có nhận hai chiều; cần gọi để kiểm tra chuyến.
3. **Đi nhóm nên chọn xe 4 hay 7 chỗ?**
   Chọn theo số người và hành lý; loại xe và tình trạng xe cần xác nhận khi đặt.
4. **Có đón tận nhà, trả tận nơi không?**
   Có theo xác nhận của Owner; cung cấp địa chỉ cụ thể để kiểm tra.
5. **Có gửi hàng theo chuyến không?**
   Có, giá từ 150.000đ; loại hàng, kích thước, đóng gói và điểm giao nhận phải được kiểm tra.
6. **Có lịch chạy cố định hoặc 24/7 không?**
   Chưa có evidence để công bố. Khách gọi để kiểm tra chuyến thực tế.

## Internal-link map

| From | To | Suggested anchor | Purpose |
|---|---|---|---|
| MP-003 | `/blog/di-hai-duong-hai-phong-bang-phuong-tien-gi` | so sánh các cách đi Hải Dương – Hải Phòng | Informational decision support |
| CP-003 | MP-003 | xe ghép Hải Dương – Hải Phòng | Commercial next step; already implemented in CP-003 template |
| MP-003 | relevant parcel guide only if semantically useful | gửi hàng theo chuyến | Explain parcel inputs without duplicating price intent |

Do not create reverse-direction duplicate URLs.

## Metadata proposal

- Title: `Xe ghép Hải Dương – Hải Phòng từ 250K | Phong Cách`
- Description: `Xe ghép Hải Dương ⇄ Hải Phòng đón tận nơi, từ 250.000đ/người. Có bao xe 4–7 chỗ, gửi hàng; đặt trước không mất phí.`
- Canonical: keep `/xe-ghep-hai-duong-hai-phong`
- Primary query: `xe ghép Hải Dương Hải Phòng`
- Secondary: reverse direction, price, charter, door-to-door. Do not create separate reverse URL.

## Structured-data recommendation

- Keep `WebPage`, `BreadcrumbList`, `Service`, and visible-question-matched `FAQPage`.
- Remove the current redundant `Article` node unless the deployed page gains genuine editorial authorship/content semantics.
- For starting prices, prefer an `AggregateOffer`/`Offer` description that explicitly says `giá từ`; do not express a bare fixed `price` that contradicts `VERIFIED_FROM`.
- Any structured amount must come from the same evidence-aware consumer used by visible copy.
- `areaServed` may name the parent corridor areas only; district-level claims need Owner evidence.

## Public facts needing citation

| Fact | Preferred source | Checked |
|---|---|---|
| QL5 is a major road connection into Hải Phòng | [Hải Phòng city portal](https://haiphong.gov.vn/co-so-ha-tang/co-so-ha-tang-ky-thuat-thanh-pho-hai-phong-743051) | 2026-08-22 |
| Current safety/road context on QL5 | [Hải Dương ward portal, Hải Phòng](https://haiduong.haiphong.gov.vn/tin-tuc-su-kien/hai-phong-quyet-tam-xay-dung-tuyen-quoc-lo-5-va-quoc-lo-10-an-toan-ve-giao-thong-889529) | 2026-08-22 |
| Current coach inventory exists and is dynamic | [redBus Hải Dương – Hải Phòng](https://www.redbus.vn/ve-xe-khach/tuyen-duong/hai-duong-di-hai-phong) | 2026-08-22 |

Do not publish a universal distance or duration until an authoritative/current source is selected with exact start/end context.

## Current-page weaknesses

1. Visible prices are bare amounts (`250.000đ`, `500.000đ`, `650.000đ`) even though the evidence model is `VERIFIED_FROM`.
2. The `Service` schema emits a bare `Offer.price` and calls it a reference price, which does not preserve the public `Từ` semantic strongly enough.
3. The page is a generic route template; it has little route-specific decision support or objection handling.
4. It omits the verified parcel starting price from the main price panel.
5. It does not link to CP-003 for neutral comparison intent.
6. It states benefits correctly but does not distinguish verified facts from unknown schedule/hours/policies for the reader.
7. Metadata is inherited from generic route copy and does not expose the verified starting price or door-to-door proposition clearly.

## Proposed new section order

1. Intent-matched H1 + two-sentence answer + call CTA
2. Four service prices, each rendered as `Từ`
3. Quick Facts / verified service commitments
4. How xe ghép works versus bao xe
5. Door-to-door booking inputs
6. Decision block + link to CP-003
7. Parcel service and required item information
8. Why/when final price varies (without a surcharge formula)
9. FAQ
10. Natural final CTA

## Claims requiring future remediation

- Change every visible and structured price from bare amount/fixed semantics to `VERIFIED_FROM` semantics.
- Add the verified parcel price from the governed data source.
- Do not reuse `distanceKm: 48` or `durationMinutes: 65` publicly until public-source research validates exact context.
- Keep operating hours, frequency, lead time, waiting policy and surcharges out of public copy until Owner evidence exists.
- District-level pickup/drop-off lists remain unverified.

## Blockers before deployment

1. Owner/Strategy must explicitly open permission to edit MP-003 and the shared route template.
2. Engineering must define one data-driven formatter for `VERIFIED_FROM` visible copy and schema.
3. Regression review is required because the route template serves multiple live money pages.
