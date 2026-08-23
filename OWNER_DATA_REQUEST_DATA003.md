# DATA-003 — Minimal Owner Request for Quảng Ninh Endpoints

Purpose: collect only the business facts still required before considering a distinct endpoint money page. A response such as `Không nhận`, `Chỉ nhận theo chuyến`, or `Không có giá riêng — dùng giá từ của tuyến Hải Dương - Quảng Ninh` is valid.

For every answer, record:

- Confirmed by: ___
- Role: ___
- Confirmed at: ___ / ___ / 2026

## Bãi Cháy — operating boundary only

1. Bãi Cháy should be treated as:
   - ☐ Part of the existing Hạ Long route/page
   - ☐ A separate operating endpoint
   - ☐ Other: ___
2. Pickup/drop-off coverage:
   - ☐ Accept throughout Bãi Cháy
   - ☐ Must check every address
   - ☐ Limited areas: ___

Existing evidence already confirms Hải Dương - Hạ Long/Bãi Cháy service, both directions, shared ride, charter, parcel and parent-corridor starting-price inheritance. Do not ask those facts again unless Owner wants to correct them.

## Unconfirmed endpoints

Answer each row using short values.

| Endpoint | Actual HD ⇄ endpoint service? | Reverse accepted? | Shared ride? | Charter? | Parcel? | Door-to-door scope | Price rule | Notes |
|---|---|---|---|---|---|---|---|---|
| Đông Triều | Có / Không / Theo chuyến | Có / Không | Có / Không | Có / Không | Có / Không | Có / Check địa chỉ / Giới hạn: ___ | Dùng giá từ HD-QN / Giá riêng: ___ / Báo chuyến | ___ |
| Uông Bí | Có / Không / Theo chuyến | Có / Không | Có / Không | Có / Không | Có / Không | Có / Check địa chỉ / Giới hạn: ___ | Dùng giá từ HD-QN / Giá riêng: ___ / Báo chuyến | ___ |
| Quảng Yên | Có / Không / Theo chuyến | Có / Không | Có / Không | Có / Không | Có / Không | Có / Check địa chỉ / Giới hạn: ___ | Dùng giá từ HD-QN / Giá riêng: ___ / Báo chuyến | ___ |
| Cẩm Phả | Có / Không / Theo chuyến | Có / Không | Có / Không | Có / Không | Có / Không | Hải Dương-wide / Chỉ khu vực: ___ / Check | Dùng giá từ HD-QN / Giá riêng: ___ / Báo chuyến | ___ |
| Vân Đồn | Có / Không / Theo chuyến | Có / Không | Có / Không | Có / Không | Có / Không | Có / Check địa chỉ / Giới hạn: ___ | Dùng giá từ HD-QN / Giá riêng: ___ / Báo chuyến | Ao Tiên included? Có / Không |
| Ao Tiên | Tách riêng / Thuộc Vân Đồn / Không nhận | Có / Không | Có / Không | Có / Không | Có / Không | Có / Check địa chỉ / Giới hạn: ___ | Dùng giá Vân Đồn/HD-QN / Giá riêng: ___ / Báo chuyến | ___ |
| Móng Cái | Có / Không / Theo chuyến | Có / Không | Có / Không | Có / Không | Có / Không | Có / Check địa chỉ / Giới hạn: ___ | Dùng giá từ HD-QN / Giá riêng: ___ / Báo chuyến | Thường xuyên / Chỉ check chuyến |

## Decision rule after response

- `Có` is not automatically `READY`; the confirmed modes, reverse direction, address scope and price rule must agree.
- `Dùng giá từ HD-QN` means inherited `VERIFIED_FROM`, never a fixed endpoint fare.
- No response means the fact remains `UNKNOWN`.
- No endpoint URL is authorized by this request alone; Strategy Review still owns publication approval.

