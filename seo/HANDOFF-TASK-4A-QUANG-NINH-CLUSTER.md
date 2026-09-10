# Task 4A — Quảng Ninh Cluster Audit & Consolidation

**Verdict: ACCEPTED**  
**Production release:** `bf243476e96e2463a0bb8e3d6e379fb6d6364368`  
**Production deployment:** `dpl_8fzkH19iPf8hpWPpbb77xU4vKCFv` — `https://xeghepphongcach.com`

## A. Cluster inventory

| Role | Canonical URL | Primary intent | Supporting place handling |
| --- | --- | --- | --- |
| Pillar | `/xe-ghep-hai-duong-quang-ninh` | Hải Dương ⇄ Quảng Ninh tổng quát | Điều hướng về bốn endpoint core; không tạo trang tỉnh phụ |
| Core | `/xe-ghep-hai-duong-uong-bi` | Uông Bí / Yên Tử | Yên Tử là support copy, không có URL riêng |
| Core | `/xe-ghep-hai-duong-ha-long` | Hạ Long / Bãi Cháy | Bãi Cháy là support copy, không có URL riêng |
| Core | `/xe-ghep-hai-duong-cam-pha` | Cẩm Phả / Cửa Ông | Cửa Ông là support copy, không có URL riêng |
| Core | `/xe-ghep-hai-duong-van-don` | Vân Đồn / Ao Tiên | Ao Tiên là support copy, không có URL riêng |

Không thêm endpoint mới cho Cửa Ông, Yên Tử, Ao Tiên, Bãi Cháy, Móng Cái hoặc điểm Quảng Ninh nào khác.

## B. Pricing matrix

| Destination / support point | Ghép | Bao xe | Gửi hàng | Nguồn engine / cách hiển thị |
| --- | ---: | ---: | --- | --- |
| Quảng Ninh pillar | từ 250.000đ | từ 600.000đ | khoảng 150.000–200.000đ | Corridor-level governed `FROM` / `RANGE`; không gán nhầm là giá endpoint |
| Hạ Long | 400.000đ | 1.000.000đ | khoảng 150.000–200.000đ trở lên | `EXACT` / `EXACT`; hàng là mức corridor Quảng Ninh hợp lệ |
| Bãi Cháy (support Hạ Long) | 350.000đ | 900.000đ | — | `EXACT` / `EXACT`; không có URL riêng |
| Cẩm Phả | 450.000đ | 1.200.000–1.300.000đ | Liên hệ | `EXACT` / `RANGE` / `CONTACT` |
| Cửa Ông (support Cẩm Phả) | 500.000đ | Liên hệ | Liên hệ | Ghép `EXACT`; bao xe và gửi hàng không có numeric record |
| Vân Đồn | 500.000đ | 1.500.000đ | Liên hệ | `EXACT` / `EXACT` / `CONTACT` |
| Ao Tiên (support Vân Đồn) | 500.000đ | Liên hệ | Liên hệ | Ghép `EXACT`; bao xe/gửi hàng contact-only |
| Uông Bí | 300.000đ | 600.000đ | Liên hệ | `EXACT` / `EXACT` / `CONTACT` |
| Yên Tử (support Uông Bí) | Liên hệ | Liên hệ | Liên hệ | Không có record giá endpoint; không suy diễn từ Uông Bí |

Các giá `CONTACT` không xuất hiện dưới dạng số. Các mức `RANGE` được diễn đạt “từ/khoảng/liên hệ” theo type engine, không làm phẳng thành giá cố định.

## C. Search-intent matrix

| URL | Intent riêng | Kiểm soát chồng lấp |
| --- | --- | --- |
| Pillar Quảng Ninh | Tuyến tỉnh tổng quát, lựa chọn điểm đến | Chỉ dùng như trang hub; card dẫn về canonical endpoint |
| Uông Bí | Xe ghép Hải Dương ⇄ Uông Bí | Yên Tử là FAQ/support contact-only, không cạnh tranh bằng URL mới |
| Hạ Long | Xe ghép Hải Dương ⇄ Hạ Long | Bãi Cháy hiện như điểm hỗ trợ có giá riêng, canonical vẫn Hạ Long |
| Cẩm Phả | Xe ghép Hải Dương ⇄ Cẩm Phả | Cửa Ông dùng copy hỗ trợ, chỉ giá ghép đã xác minh |
| Vân Đồn | Xe ghép Hải Dương ⇄ Vân Đồn | Ao Tiên dùng copy hỗ trợ, không tạo thin endpoint |

## D. Link graph

`Home → Quảng Ninh pillar → {Uông Bí, Hạ Long, Cẩm Phả, Vân Đồn}`

Pillar dùng card có link thực tế cho cả bốn endpoint; các nhãn Bãi Cháy/Ao Tiên cũng trỏ về canonical Hạ Long/Vân Đồn. Mỗi endpoint giữ contextual link về pillar. Không có destination core nào orphan và không có link sang URL Cửa Ông/Yên Tử/Ao Tiên chưa tồn tại.

## E. Schema audit

| URL group | Structured data | Giá numeric trong Offer | Kết quả |
| --- | --- | --- | --- |
| Pillar và bốn core | `WebPage`, `BreadcrumbList`, `Service` | Không | PASS — price range/contact được mô tả an toàn, không giả numeric Offer |
| Uông Bí | Cộng thêm `FAQPage` khớp FAQ hiển thị | Không | PASS |
| Cẩm Phả / Cửa Ông | Không có numeric Offer cho bao xe/gửi hàng contact-only | Không | PASS |

Schema không tạo `Offer.price` cho range, contact-only hay hỗ trợ-point chưa có record độc lập. FAQ schema chỉ có ở nơi hệ thống phát hành FAQPage; nội dung FAQ hiển thị không mâu thuẫn JSON-LD.

## F. Canonical and indexability

Production `200`, self-canonical và `robots: index, follow` đã xác nhận cho cả năm URL: pillar, Uông Bí, Hạ Long, Cẩm Phả và Vân Đồn. Sitemap/inventory chỉ chứa các canonical đã được phê duyệt; không có URL mới cho support point.

## G. Mobile QA

Tại viewport `390 × 844`, cả năm URL production đều có `scrollWidth = clientWidth = 390`, H1 đúng theo trang, và CTA Hotline/Zalo hoạt động. Không có horizontal overflow.

## H. Issues found

1. Card giá của pillar ưu tiên bảng legacy nên logic định hướng endpoint không được render; liên kết live thiếu ba core endpoint.
2. Copy Cửa Ông cũ không khớp inventory hiện hành: cần giữ 500.000đ ghép, còn bao xe/gửi hàng là liên hệ.
3. Title Hạ Long dùng “từ 400K” dù Bãi Cháy trong cùng landing có 350.000đ, dễ tạo hàm ý minimum sai.
4. Một template legacy có thể render lặp tiền tố “Từ Từ”.

## I. Issues fixed

1. Thêm `endpointLinks` chuẩn và render link ngay trên pricing card thực tế của pillar.
2. Đồng bộ Cửa Ông với engine: ghép 500.000đ; bao xe/gửi hàng contact-only; không tạo URL mới.
3. Đổi title Hạ Long thành mức giá rõ ràng 400.000đ thay vì claim “từ”.
4. Chuẩn hoá phần amount trong registry để loại bỏ tiền tố “Từ Từ”.
5. Bổ sung regression suite Task 4A cho inventory, pricing types, graph, metadata/copy/schema/CTA; tái sinh SEO QA report.

## J. Remaining warnings

- Parcel numeric chỉ tồn tại ở mức corridor Quảng Ninh; các endpoint Cẩm Phả, Vân Đồn và Uông Bí vẫn contact-only theo evidence, chủ ý không suy diễn giá.
- Lint không phải gate của Task 4A do baseline lịch sử đã được waivable từ Task 3D; không thay đổi cấu hình lint.
- Node/Next phát cảnh báo module/deprecation không chặn build, typecheck hay production QA.

## Gate evidence

| Gate | Result |
| --- | --- |
| `git diff --check` | PASS |
| `node --test tests/*.test.mjs` | **119/119 pass** |
| `npm run seo:audit` | **42 URLs, 100/100, 0 critical, 0 warnings** |
| `npm run typecheck` | PASS |
| `npm run build` | PASS |
| Vercel production deploy | READY |
| Production QA (5 URLs) | PASS |

## Release disposition

**Ready For Distribution: YES.** The Quảng Ninh cluster is accepted for index/GSC/external distribution. No follow-on endpoint creation is authorized by this handoff.
