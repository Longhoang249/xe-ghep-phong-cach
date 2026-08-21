# RES-002 — Owner Data Request

Purpose: ask only for operational facts that current market evidence shows are worth resolving before content production. A response such as “không chạy”, “chỉ nhận theo chuyến”, or “không có giá cố định, phải báo theo chuyến” is valid business truth.

## P0 — Required before the strongest candidates can enter production

### 1. Hải Dương ⇄ Hạ Long / Bãi Cháy

Why now: exact commercial queries surfaced a [dedicated Hạ Long–Hải Dương competitor](https://www.taxihaiduong24h.net/xe-ghep-ha-long-hai-duong/), [Bãi Cháy aggregator inventory](https://vexere.com/vi-VN/ve-xe-khach-tu-hai-duong-di-bai-chay-126t21362261.html), and repeated parent-route mentions. This is the strongest new-page candidate in Cluster B.

Please confirm separately where operations distinguish Hạ Long and Bãi Cháy:

- Is the trip actually accepted from Hải Dương in both directions?
- Shared ride, private 4-seat, private 7-seat: which modes are actually available?
- Fixed fare, starting fare, per-person/per-trip fare, or quote-per-trip? Record “liên hệ/báo theo chuyến” if no fixed price exists.
- Actual pickup and drop-off areas; any excluded/remote zones.
- Regular service versus only when a suitable trip exists.
- Typical operational time range, hours/limits and realistic advance-booking need.
- Night, waiting, toll, remote-area or other surcharge rules.
- Who confirmed each answer and on what date?
- Should Bãi Cháy be treated operationally as part of Hạ Long or as a distinct endpoint?

### 2. Hải Phòng ⇄ Hạ Long

Why now: [Traveloka](https://www.traveloka.com/vi-vn/bus-and-shuttle/route/ve-xe-hai-phong-city.ha-long-city), [redBus](https://www.redbus.vn/ve-xe-khach/tuyen-duong/hai-phong-di-ha-long), [Hoàng Phú](https://xehoangphu.vn/dat-ve/dat-xe-hai-phong-ha-long/) and specialist operators show a distinct, competitive endpoint SERP. It is a strategic battle, conditional on true service fit.

Please confirm the same fields as above for Hải Phòng ⇄ Hạ Long/Bãi Cháy, including whether the service differs from the broad Hải Phòng ⇄ Quảng Ninh corridor.

### 3. Hải Dương ⇄ Cát Bi operating rules

Why now: exact airport-route commercial pages exist, including [Hải Dương–Cát Bi pricing](https://taxihaiduong.net.vn/bang-gia/hai-duong-san-bay-cat-bi) and a [reverse Cát Bi–Hải Dương page](https://www.thuexehaiphong.net/taxi/taxi-cat-bi/taxi-cat-bi-hai-duong). The route is confirmed, but airport exceptions are not.

Please confirm:

- Shared/private modes by direction and the exact verified fare scope.
- Flight-time/arrival-delay waiting rules, waiting charges, parking/toll inclusion and night surcharge.
- Pickup meeting point or door/terminal rule at Cát Bi.
- Recommended lead time; whether same-day/urgent booking is accepted.
- Luggage limits or special cases, only if real.
- Who confirmed and confirmation date.

## P1 — Resolve after P0, before endpoint backlog is promoted

Market evidence justifies one compact operational check for these candidates:

| Endpoint | Evidence | Decision needed |
|---|---|---|
| Đông Triều | [Dedicated Vexere endpoint inventory](https://vexere.com/vi-VN/ve-xe-khach-tu-hai-duong-di-dong-trieu-quang-ninh-126t26111.html) | Served from Hải Dương? Both ways? Modes, fare/quote rule, pickup/drop-off scope, availability |
| Cẩm Phả | [Chí Linh–Cẩm Phả inventory](https://vexere.com/vi-VN/ve-xe-limousine-tu-chi-linh-hai-duong-di-cam-pha-quang-ninh-2275t26081.html) plus recurring corridor coverage | Is coverage Hải Dương-wide or Chí Linh/selected areas only? Then same operational fields |
| Vân Đồn | [Dedicated Hải Dương–Vân Đồn list](https://limody.vn/xe-hai-duong-van-don/) and repeated operator mentions | Served? Whether Ao Tiên is included; same operational fields |
| Móng Cái | [Dedicated Hải Phòng–Móng Cái content](https://sonhangtravel.com/blog/xe-hai-phong-di-mong-cai-nha-xe-so-dien-thoai-diem-don) and independent fixed-route references | Does Phong accept either HD/HP corridor? Regular or quote-only? Same operational fields |

## Do not ask yet as standalone landing-page work

- **Quảng Yên:** almost no dedicated result evidence in this sample.
- **Ao Tiên:** insufficient standalone evidence; ask only as part of Vân Đồn operations.
- **Uông Bí:** some parent-page evidence, but insufficient independent SERP evidence to prioritize a standalone page now.
- **Parcel/gửi hàng:** not reopened by RES-002; keep the existing remediation/data queue unchanged.

## Evidence format required

For every confirmed value, capture: `answer`, `status`, `confirmedBy`, `confirmedAt`, `scope`, and any condition/exception. Do not convert competitor values or public route schedules into Phong facts.

Status: `OWNER INPUT REQUIRED — NO CONTENT AUTHORIZED`.
