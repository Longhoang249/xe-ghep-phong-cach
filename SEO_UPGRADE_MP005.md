# SEO Upgrade Package — MP-005

Status: `DRAFT_NOT_DEPLOYED`

Target: `/xe-ghep-hai-duong-quang-ninh`

Prepared: 2026-08-22 (Asia/Ho_Chi_Minh)

Constraint: package only. This file does not authorize or implement a change to MP-005, route UI, booking UI, homepage, public prices, schema, registry status, sitemap, or endpoint URLs.

## Proposed H1

Xe ghép Hải Dương ⇄ Quảng Ninh — đón trả tận nơi, giá từ 250.000đ

## Above-the-fold answer

Phong Cách nhận xe ghép, bao xe 4–7 chỗ và gửi hàng tuyến Hải Dương ⇄ Quảng Ninh cả hai chiều, đón tận nhà và trả tận nơi. Xe ghép hiện từ 250.000đ/người; đây là giá bắt đầu của corridor, không phải giá cố định hay bảng giá cho từng endpoint. Khách cần gửi đúng địa chỉ đón/trả để kiểm tra chuyến và giá cụ thể.

Primary CTA: `Gọi [số điện thoại] để kiểm tra đúng điểm đến`

Do not claim service availability or a fare for any named endpoint until the trip is checked. Do not claim fixed schedule, 24/7, fixed duration, trips per day, lead time, waiting policy, or surcharge formula.

## Quick Facts

| Fact | Public copy | Evidence state |
|---|---|---|
| Parent corridor | Hải Dương ⇄ Quảng Ninh | `VERIFIED` Owner, 2026-08-22 |
| Direction | Nhận hai chiều | `VERIFIED` Owner, 2026-08-22 |
| Services | Xe ghép, bao xe, gửi hàng | `VERIFIED` Owner, 2026-08-22 |
| Pickup/drop-off | Đón tận nơi, trả tận nơi | `VERIFIED` for parent corridor |
| Payment | Thanh toán sau chuyến | `VERIFIED` Owner, 2026-08-22 |
| Advance booking | Đặt trước không mất phí | `VERIFIED` Owner, 2026-08-22 |
| Named endpoints | Use for orientation/search intent only | Service remains unconfirmed per endpoint |

## Verified pricing

| Dịch vụ | Proposed public presentation | Model |
|---|---|---|
| Xe ghép | **Từ 250.000đ/người** | `VERIFIED_FROM` parent corridor |
| Bao xe 4 chỗ | **Từ 900.000đ/chuyến** | `VERIFIED_FROM` parent corridor |
| Bao xe 7 chỗ | **Từ 1.100.000đ/chuyến** | `VERIFIED_FROM` parent corridor |
| Gửi hàng | **Từ 180.000đ** | `VERIFIED_FROM` parent corridor |

Required note:

> Các mức trên là giá bắt đầu của tuyến Hải Dương – Quảng Ninh, không phải giá cố định hoặc giá riêng cho Đông Triều, Uông Bí, Quảng Yên, Hạ Long/Bãi Cháy, Cẩm Phả, Vân Đồn/Ao Tiên hay Móng Cái. Giá chuyến cụ thể phụ thuộc ngày, giờ, địa chỉ đón/trả và điều kiện chuyến.

Forbidden examples:

- `Hải Dương → Móng Cái từ 250.000đ`
- `Giá Hải Dương – Hạ Long: 250.000đ`
- Any endpoint price row created by inheriting the parent number without the parent-corridor explanation.

## Pickup/dropoff information

Safe parent-corridor copy:

- Phong Cách xác nhận đón tận nơi, trả tận nơi trên corridor.
- Khách phải cung cấp đúng endpoint và địa chỉ cụ thể để kiểm tra dịch vụ, xe và giá.
- Do endpoint service status remains unconfirmed, the page must not promise that every named endpoint is always served.

## Endpoint section

Proposed heading: `Bạn đi đâu tại Quảng Ninh?`

Intro copy:

> Quảng Ninh có chuỗi điểm đến trải dài từ phía Tây sang phía Đông. Cùng một truy vấn “đi Quảng Ninh” nhưng địa chỉ thực tế có thể là Đông Triều, Uông Bí, Quảng Yên, Hạ Long/Bãi Cháy, Cẩm Phả, Vân Đồn/Ao Tiên hoặc Móng Cái. Hãy chọn đúng điểm và gửi địa chỉ để Phong Cách kiểm tra chuyến.

| Endpoint label | Safe purpose | Safe CTA | Price treatment |
|---|---|---|---|
| Đông Triều | Orientation/search intent | Kiểm tra chuyến đến Đông Triều | Show no endpoint amount |
| Uông Bí | Orientation/search intent | Kiểm tra địa chỉ tại Uông Bí | Show no endpoint amount |
| Quảng Yên | Orientation/search intent | Kiểm tra địa chỉ tại Quảng Yên | Show no endpoint amount |
| Hạ Long / Bãi Cháy | Orientation/search intent; service not yet endpoint-confirmed | Kiểm tra chuyến và điểm trả | Show no endpoint amount; no new URL |
| Cẩm Phả | Orientation/search intent | Kiểm tra chuyến đến Cẩm Phả | Show no endpoint amount |
| Vân Đồn / Ao Tiên | Orientation; Ao Tiên is a passenger-port connection | Gửi giờ tàu và địa chỉ | Show no endpoint amount |
| Móng Cái | Orientation/search intent | Kiểm tra chuyến đến Móng Cái | Show no endpoint amount |

Under the endpoint table, show the parent rule once:

> Giá tuyến Hải Dương – Quảng Ninh hiện từ 250.000đ/người cho xe ghép. Đây không phải giá cho một endpoint cụ thể; hãy liên hệ để kiểm tra theo địa chỉ.

## Comparison / decision support

| Nhu cầu | Gợi ý |
|---|---|
| Có bến/điểm hẹn phù hợp tại đúng endpoint | Kiểm tra xe khách/limousine theo ngày |
| Khách lẻ cần trao đổi đón trả | Hỏi xe ghép |
| Gia đình/nhóm riêng/nhiều hành lý | Hỏi bao xe 4 hoặc 7 chỗ |
| Nối chuyến qua Ao Tiên | Gửi giờ tàu và thời gian cần có mặt; chưa có waiting policy để công bố |
| Tự lái | Tính theo đúng endpoint, nhiên liệu, phí đường, đỗ xe và chiều về |

Link to CP-002 for the full neutral comparison. Keep booking and corridor-price intent on MP-005.

## FAQs

1. **Giá xe ghép Hải Dương – Quảng Ninh bao nhiêu?**
   Từ 250.000đ/người. Đây là giá bắt đầu của corridor, không phải giá cố định.
2. **Giá đi Hạ Long, Vân Đồn và Móng Cái có giống nhau không?**
   Không nên suy như vậy. Chưa có bảng giá verified riêng theo endpoint; giá chuyến phụ thuộc địa chỉ và điều kiện thực tế.
3. **Có nhận chiều Quảng Ninh về Hải Dương không?**
   Có nhận hai chiều trên parent corridor; hãy gửi điểm đón cụ thể để kiểm tra.
4. **Có đón tận nhà, trả tận nơi không?**
   Có theo xác nhận của Owner ở cấp corridor; endpoint và địa chỉ cụ thể phải được kiểm tra.
5. **Có gửi hàng không?**
   Có, giá từ 180.000đ; cung cấp loại hàng, kích thước, đóng gói và điểm giao nhận để kiểm tra.
6. **Có lịch chạy cố định hoặc 24/7 không?**
   Chưa có evidence để công bố. Gọi để kiểm tra chuyến thực tế.

## Internal-link map

| From | To | Suggested anchor | Purpose |
|---|---|---|---|
| MP-005 | `/blog/nhung-chuyen-xe-tu-hai-duong-di-quang-ninh` | so sánh các cách đi Hải Dương – Quảng Ninh | Informational decision support |
| CP-002 | MP-005 | xe ghép Hải Dương – Quảng Ninh | Commercial next step; already implemented in CP-002 template |
| MP-005 | parcel guide only if useful | gửi hàng theo chuyến | Explain parcel requirements |

Do not create endpoint URLs or reverse-direction duplicates from this package.

## Metadata proposal

- Title: `Xe ghép Hải Dương – Quảng Ninh từ 250K | Phong Cách`
- Description: `Xe ghép Hải Dương ⇄ Quảng Ninh đón trả tận nơi, từ 250.000đ/người. Có bao xe 4–7 chỗ, gửi hàng; giá xác nhận theo điểm đến.`
- Canonical: keep `/xe-ghep-hai-duong-quang-ninh`
- Primary query: `xe ghép Hải Dương Quảng Ninh`
- Secondary: reverse direction, price, charter, endpoint modifiers. Consolidate on the parent page unless future business evidence justifies distinct endpoint URLs.

## Structured-data recommendation

- Keep `WebPage`, `BreadcrumbList`, `Service`, and visible-question-matched `FAQPage`.
- Remove redundant `Article` unless the money page gains real editorial semantics.
- A structured starting price must explicitly preserve `VERIFIED_FROM`; do not emit a bare fixed `Offer.price` implying one fare for the whole province.
- Keep `areaServed` at parent corridor level. Do not add each endpoint as a confirmed service area until operations verifies it.
- If endpoint names are listed as informational orientation, they should not generate endpoint `Service` or `Offer` nodes.

## Public facts needing citation

| Fact | Preferred source | Checked |
|---|---|---|
| West-to-east urban chain including Đông Triều, Uông Bí, Hạ Long, Cẩm Phả, Vân Đồn, Móng Cái | [Quảng Ninh provincial portal](https://doanhnghiep.quangninh.gov.vn/Trang/ChiTietTinTuc.aspx?nid=8850) | 2026-08-22 |
| Quảng Yên in the provincial urban system | [Quảng Ninh urban-development decision](https://www.quangninh.gov.vn/So/soxaydung/Lists/TinTuc/Attachments/4362/1.%20942-Q%C4%90%20ph%C3%AA%20duy%E1%BB%87t%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20PT%C4%90T%20T%E1%BB%89nh.pdf) | 2026-08-22 |
| Ao Tiên as a passenger-port hub at Vân Đồn | [Vân Đồn local authority](https://quangninh.gov.vn/donvi/vandon/Trang/ChiTietTinTuc.aspx?nid=2906) | 2026-08-22 |
| Transport inventory can be endpoint-specific and dynamic | [Vexere Đông Triều](https://vexere.com/vi-VN/ve-xe-khach-tu-hai-duong-di-dong-trieu-quang-ninh-126t26111.html), [Vexere Bãi Cháy](https://vexere.com/vi-VN/ve-xe-khach-tu-hai-duong-di-bai-chay-126t21362261.html) | 2026-08-22 |

Do not publish one universal distance or duration for the province. Research must use an exact endpoint and exact start/end context.

## Current-page weaknesses

1. Visible prices are bare amounts (`250.000đ`, `900.000đ`, `1.100.000đ`) despite `VERIFIED_FROM` evidence.
2. The `Service` schema emits a bare `Offer.price`, which can imply one fixed fare for a geographically broad corridor.
3. The generic route template treats Quảng Ninh as one destination and gives no endpoint decision support.
4. It omits the verified parcel starting price from the main panel.
5. It lacks a link to CP-002 for neutral transport comparison.
6. It does not distinguish parent-corridor verification from unconfirmed named-endpoint service.
7. Generic metadata does not explain the starting-price scope.

## Proposed new section order

1. Parent-corridor H1 + direct answer + call CTA
2. Four parent-corridor prices, each rendered as `Từ`
3. Quick Facts / verified service commitments
4. Endpoint orientation section with no endpoint prices
5. Xe ghép versus bao xe decision support
6. Door-to-door booking inputs
7. Link to CP-002 comparison guide
8. Parcel service and required item information
9. Why final price varies (no surcharge formula)
10. FAQ + final CTA

## Claims requiring future remediation

- Change visible and structured bare prices to `VERIFIED_FROM` semantics.
- Add the verified parcel starting price through the governed price source.
- Do not publish `distanceKm: 105` or `durationMinutes: 120` as a universal Quảng Ninh fact.
- Do not convert candidate endpoint records into URLs, service claims, prices, or schema entities.
- Keep hours, frequency, lead time, waiting policy and surcharges unknown until Owner evidence exists.
- Hạ Long/Bãi Cháy operational scope remains a business blocker for a separate MP-019.

## Blockers before deployment

1. Owner/Strategy must explicitly open permission to edit MP-005 and the shared route template.
2. Engineering must implement one evidence-aware `VERIFIED_FROM` formatter for visible price and schema.
3. Endpoint UI copy must be reviewed against the rule: orientation does not equal confirmed service or endpoint pricing.
4. Regression review is required because the route template serves multiple live money pages.
