# SEO HANDOFF & ARCHITECTURAL CONTINUITY RECORD

**Dự án**: Xe Ghép Phong Cách (`https://xeghepphongcach.com`)  
**Ngày lập**: 2026-09-03 (Asia/Ho_Chi_Minh)  
**Tác giả bàn giao**: Antigravity  
**Nhánh làm việc**: `main`  
**HEAD Commit**: `a67d77a` (`feat(seo): upgrade SC-003 (Sân bay Nội Bài) and CP-005 (Xe ghép vs Xe khách) to Answer-First guides with real terminal photo`)  
**Tình trạng**: `PRODUCTION_SYNCED` — Đã đẩy lên GitHub `origin/main`, SC-003 (Nội Bài) và CP-005 (Xe ghép vs Xe khách) đã nâng cấp toàn diện chuẩn Answer-First kèm ảnh thật nhà ga Nội Bài. IndexNow đã ping 39 URLs thành công (HTTP 200). 71/71 tests PASS.

---

## 1. MỤC ĐÍCH TÀI LIỆU
Tài liệu này được thiết kế để bất kỳ AI hoặc kỹ sư nào khi tiếp quản (takeover) hoặc phối hợp làm việc song song (parallel workstream) có thể:
1. Nắm trọn vẹn hiện trạng dự án chỉ trong 3 phút mà không làm vỡ các quy tắc kiến trúc đã thiết lập.
2. Hiểu rõ các **bất biến kiến trúc (architectural invariants)** bắt buộc phải tuân thủ.
3. Biết chính xác những gì vừa được thay đổi và các bước kế tiếp cần làm.

---

## 2. CÁC QUY TẮC BẤT BIẾN BẮT BUỘC (CRITICAL INVARIANTS)

> [!CAUTION]
> **QUY TẮC 1: TUYỆT ĐỐI KHÔNG TỰ BỊA GIÁ (ZERO-HALLUCINATION PRICING)**  
> - Toàn bộ giá số hiển thị công khai trên web phải được truy vết nguồn gốc trong `data/seo/route-knowledge/owner-verification.mjs` với model `VERIFIED_FROM`.
> - Tuyệt đối không dùng công thức tính theo khoảng cách km trong `lib/pricing.ts` để gán giá cho các tuyến mới (đã gỡ bỏ công thức tự tính cước trong REM-001).
> - Các tuyến/điểm chưa có giá xác nhận từ chủ xe (Owner) BẮT BUỘC hiển thị trạng thái "Liên hệ".
> - Trong Schema `Offer`, TUYỆT ĐỐI KHÔNG xuất trường số `price` và `priceCurrency` cố định; bắt buộc dùng `Offer` mô tả với category "Giá bắt đầu" để tránh vi phạm chính sách hiển thị giá Merchant/Service của Google.

> [!IMPORTANT]
> **QUY TẮC 2: CƠ CHẾ QUẢN TRỊ XUẤT BẢN (ASSET LIFECYCLE)**  
> - Vòng đời một trang SEO: `REGISTERED` → `REVIEW` → `APPROVED` → `PUBLISHED`.
> - Khai báo dữ liệu trong `data/routes.ts` hay `data/guide-posts.ts` KHÔNG ĐỒNG NGHĨA với việc trang được xuất bản.
> - Chỉ những asset có trạng thái chính xác `status: "PUBLISHED"` trong `data/seo/asset-registry.mjs` mới được sinh trang tĩnh SSG và xuất hiện trong sitemap.

> [!WARNING]
> **QUY TẮC 3: CHỐNG XUNG ĐỘT TỪ KHÓA & CANNIBALIZATION (1 CORRIDOR = 1 URL)**  
> - Mỗi hành lang tuyến xe 2 chiều chỉ dùng DUY NHẤT 1 URL chuẩn (Ví dụ: `/xe-ghep-hai-duong-hai-phong`, `/xe-ghep-hai-duong-quang-ninh`).
> - Nhu cầu chiều ngược phải được giải quyết bằng Section chiều về trên chính trang đó, KHÔNG TẠO URL CHIỀU NGƯỢC RIÊNG. Các URL chiều ngược cũ phải redirect 308 về trang 2 chiều chuẩn.
> - Không tạo trang hàng loạt (page factory) cho các điểm đến Quảng Ninh (Đông Triều, Uông Bí, Cẩm Phả, Vân Đồn, Móng Cái) khi chưa có xác nhận vận hành thực tế từ Owner (xác nhận trong DATA-003: khuyến nghị SPRINT-006 = NONE).

> [!NOTE]
> **QUY TẮC 4: TIÊU CHUẨN KỸ THUẬT & ON-PAGE**  
> - Hotline chuẩn toàn hệ thống: `0987 663 883` (`tel:+84987663883`). Kiểm tra tự động nghiêm ngặt không cho phép sai số hotline.
> - Mỗi trang có chính xác 1 thẻ `<h1>`.
> - Dùng dấu gạch nối tự nhiên `-` trong title và h1, không dùng gạch ngang dài `–`.
> - Không gắn ảnh OG chung `/og.png` vào các bài cẩm nang chi tiết (bị chặn bởi assertion trong `scripts/seo-check.mjs`).

---

## 3. TIẾN ĐỘ & TRẠNG THÁI HIỆN TẠI (ĐÃ ĐỒNG BỘ TRÊN MAIN)

### Quy mô URL Sitemap
- **Production URL contract**: **39 URLs** chuẩn (đầy đủ MP-003, MP-004 Cát Bi, MP-005 Quảng Ninh, MP-019 Hạ Long).

### Toàn bộ tính năng đã tích hợp trên nhánh `main` (`cde3366`):
1. **SPRINT-003A**: Đã nâng cấp MP-004 (Cát Bi) và MP-019 (Hạ Long), mở rộng sitemap từ 38 → 39 URLs.
2. **SPRINT-004A.1**: Cải thiện độ rõ nét trên mobile cho MP-003 (Hải Dương ⇄ Hải Phòng).
3. **SPRINT-005 & SPRINT-005.1**: Scan-first layout cho MP-005 (Quảng Ninh) và hiển thị ranh giới định hướng endpoint orientation chuẩn xác.
4. **REM-001 (P0 Data Remediation)**: Hoàn tất xử lý form đặt xe, tách bạch ngữ nghĩa `STARTING_FROM` / `ESTIMATE` / `CONTACT`, gỡ bỏ hoàn toàn công thức tính cước tự suy diễn.
5. **OPS-004 (Freshness)**: Nâng cấp [app/sitemap.ts](app/sitemap.ts) với `lastReviewedAt` riêng cho từng asset.
6. **IndexNow Ping**: Đã gửi thành công toàn bộ 39 URLs tới IndexNow API (HTTP 200).
7. **Kiểm thử tự động**: Chạy toàn bộ suite `node --test tests/*.test.mjs` đạt **71/71 PASS**.
8. **Git sync**: Đã rebase, merge và push thành công lên GitHub `origin/main`.

---

## 4. BẢNG TRA CỨU CÁC FILE TRỌNG TÂM

| Đường dẫn file | Vai trò trong dự án |
|---|---|
| [data/seo/asset-registry.mjs](data/seo/asset-registry.mjs) | Registry quản trị trạng thái xuất bản của toàn bộ 32 SEO assets. |
| [data/seo/published-content.ts](data/seo/published-content.ts) | Tầng lọc sản xuất: chỉ xuất bản nội dung từ registry đạt chuẩn `PUBLISHED`. |
| [data/seo/route-knowledge/owner-verification.mjs](data/seo/route-knowledge/owner-verification.mjs) | Kho bằng chứng xác thực từ chủ xe (Route Knowledge Base & Evidence). |
| [data/seo/money-page-upgrades.mjs](data/seo/money-page-upgrades.mjs) | Gói nội dung nâng cấp thương mại chuyên sâu cho từng tuyến xe (MP-003, MP-004, MP-005, MP-019). |
| [lib/booking-pricing.mjs](lib/booking-pricing.mjs) | Logic tính giá và phân loại ngữ nghĩa cho luồng đặt xe (REM-001). |
| [app/[slug]/page.tsx](app/[slug]/page.tsx) | Template render động (SSG) cho tất cả các trang tuyến xe (Money Pages). |
| [app/blog/[slug]/page.tsx](app/blog/[slug]/page.tsx) | Template render động (SSG) cho các bài viết cẩm nang, so sánh (Guides). |
| [app/sitemap.ts](app/sitemap.ts) | Sinh dynamic sitemap theo chuẩn 39 URLs kèm per-asset freshness. |
| [scripts/submit-indexnow.mjs](scripts/submit-indexnow.mjs) | Script tự động ping IndexNow báo cho Bing/Yandex về 39 URLs. |
| [tests/*.test.mjs](tests/) | Toàn bộ 71 unit tests đảm bảo không có bất kỳ hồi quy nào. |

---

## 5. HƯỚNG DẪN DÀNH CHO AI TIẾP QUẢN (NEXT SPRINT ROADMAP)

Khi tiếp quản dự án này để làm tiếp, AI thực hiện các bước sau:

### Nhiệm vụ 1: Giám sát Google Search Console (MON-001A)
- Kiểm tra GSC property `sc-domain:xeghepphongcach.com`.
- Theo dõi trạng thái index của các trang mới: `/xe-hai-duong-cat-bi` và `/xe-ghep-hai-duong-ha-long`.
- Cập nhật số liệu impression/clicks vào [SEO_MONITORING_BASELINE.md](SEO_MONITORING_BASELINE.md) khi Google kết thúc giai đoạn `PENDING_GSC_DATA`.

### Nhiệm vụ 2: Chuẩn bị Wave 3 (Hải Phòng ⇄ Quảng Ninh — Cụm C)
1. Thu thập bảng giá sàn từ Owner cho tuyến Hải Phòng ⇄ Quảng Ninh (`hp-qn`).
2. Nâng cấp MP-006 (`/xe-ghep-hai-phong-quang-ninh`) và CP-004 (`/blog/di-hai-phong-quang-ninh-bang-phuong-tien-gi`) theo chuẩn scan-first.
3. Chạy `node --test tests/*.test.mjs` để xác nhận 0 regression.

### Nhiệm vụ 3: Local Business Entity & GEO (AI Search) — ĐANG TIẾN TRIỂN TỐT
1. **Google Business Profile**: Đã tạo thành công hồ sơ `Xe Ghép Phong Cách` (Dịch vụ taxi, Hotline: `0987 663 883`, Web: `https://xeghepphongcach.com/`, Khu vực phục vụ: Hải Dương, Hải Phòng, Quảng Ninh, Hà Nội), đang chờ Google duyệt xác minh.
2. Khi Google duyệt xong, lấy link Google Maps gán vào biến `NEXT_PUBLIC_GOOGLE_MAPS_URL` (hệ thống đã code sẵn hỗ trợ trong `lib/site.ts` để tự động đưa vào Schema `sameAs`).
3. Cấu hình biến môi trường `NEXT_PUBLIC_FACEBOOK_URL` và `NEXT_PUBLIC_ZALO_URL` khi có Fanpage chính thức.
