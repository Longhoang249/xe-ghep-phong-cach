# SEO BASELINE & ARCHITECTURAL AUDIT REPORT

**Dự án**: Xe Ghép Phong Cách (`https://xeghepphongcach.com`)  
**Thời điểm thực hiện**: 2026-09-09  
**Vai trò**: Senior SEO Engineer + Content Architect  
**Mục tiêu**: Thiết lập hệ quy chiếu cơ sở (Baseline) phục vụ xây dựng SEO Route Engine V2  
**Định vị Hub trung tâm**: Hải Dương (Hành lang chính: HẢI DƯƠNG ⇄ HẢI PHÒNG ⇄ QUẢNG NINH)

---

## 1. TỔNG QUAN HIỆN TRẠNG (EXECUTIVE SUMMARY)

Hệ thống website hiện tại đang vận hành trên nền tảng Next.js 16 App Router với mô hình xuất bản có kiểm soát (Governed Asset Registry). Trước khi nâng cấp lên Route Engine V2, toàn bộ hệ thống đã có:
- **39 URL hợp lệ trong sitemap**: Gồm 3 trang lõi (`/`, `/tuyen-xe`, `/blog`), 4 trang tin cậy Trust (`/gioi-thieu`, `/lien-he`, `/chinh-sach-dat-xe`, `/an-toan-va-doi-xe`), 19 trang tuyến thương mại (Money Pages) và 13 bài cẩm nang hướng dẫn/so sánh (Guides).
- **Bộ kiểm thử hồi quy**: 71 unit tests đảm bảo tính toàn vẹn của dữ liệu và không rò rỉ giá chưa xác nhận ra ngoài public.
- **Điểm nghẽn cần nâng cấp**: Hai trang pillar quan trọng nhất là `/xe-ghep-hai-duong-hai-phong` và `/xe-ghep-hai-duong-quang-ninh` hiện chỉ mới hiển thị giá khởi điểm chung ("Từ 250.000đ/người"), chưa có bảng giá chi tiết từng quận/huyện/thị xã được chủ xe xác thực, và chưa có hệ thống tự động kiểm tra chất lượng SEO (Linter 100 điểm) theo Master Brief.

---

## 2. KIẾN TRÚC MÃ NGUỒN & CÔNG NGHỆ (STACK AUDIT)

| Thành phần | Công nghệ / Phiên bản | Nhận định kỹ thuật |
|---|---|---|
| **Framework** | Next.js `^16.3.1` (App Router) | Chạy chế độ SSG (`generateStaticParams`, `dynamicParams = false`). Tốc độ phản hồi CDN cực nhanh. |
| **Giao diện & Style** | React `^19.2.8`, Tailwind CSS `4.2.1` | Sử dụng CSS Modules (`MoneyLandingPage.module.css`) kết hợp biến toàn cục trong `app/globals.css`. |
| **Quản trị dữ liệu SEO** | `data/seo/asset-registry.mjs` | Cơ chế Gatekeeper: Chỉ các asset có trạng thái `PUBLISHED` mới được render SSG và đưa vào sitemap. |
| **Kho tri thức giá cũ** | `data/seo/route-knowledge/` | Dữ liệu cũ ngày 22/08/2026 (`OWNER_VERIFICATION_RECORD_PHASE1.md`) kế thừa giá sàn hành lang. Cần nâng cấp lên bảng giá chi tiết `owner_price_sheet_2026_09_09`. |
| **Tối ưu hình ảnh** | `next/image` | Đã có các ảnh đội xe, khoang xe, sảnh sân bay trong `public/images/`. |

---

## 3. KIỂM KÊ URL & CƠ CHẾ SITEMAP / CANONICAL

### 3.1. Hợp đồng URL (URL Contract)
- **Tổng số URL indexable**: **39 URLs** (được lưu vết tại `seo/url-inventory.json`).
- **Canonical logic**: 100% trang sử dụng thẻ `<link rel="canonical">` tự tham chiếu tuyệt đối (`https://xeghepphongcach.com/...`).
- **Redirects 308 (Chống trùng lặp chiều ngược)**:
  - `/xe-ghep-hai-phong-hai-duong` → 308 permanent redirect về `/xe-ghep-hai-duong-hai-phong`
  - `/xe-ghep-quang-ninh-hai-duong` → 308 permanent redirect về `/xe-ghep-hai-duong-quang-ninh`
  - `/xe-ghep-quang-ninh-hai-phong` → 308 permanent redirect về `/xe-ghep-hai-phong-quang-ninh`
- **Robots.txt**:
  - Cho phép toàn bộ crawler hợp lệ (`User-agent: * Allow: /`).
  - Chặn triệt để các route riêng tư (`Disallow: /admin`, `Disallow: /api`).
  - Trỏ chuẩn xác về sitemap: `Sitemap: https://xeghepphongcach.com/sitemap.xml`.
  - Hỗ trợ tốt AI crawlers (`OAI-SearchBot`, `GPTBot`).

---

## 4. ĐỐI SOÁT DỮ LIỆU GIÁ: HIỆN TRẠNG VS NGUỒN MỚI 09/09/2026

Bảng đối chiếu xung đột dữ liệu giữa hệ thống cũ (Phase 1 — 22/08/2026) và Bảng giá vận hành chính thức mới (`owner_price_sheet_2026_09_09` — 09/09/2026):

| Chặng / Điểm đến | Dữ liệu cũ (22/08/2026) | Dữ liệu mới (09/09/2026) | Đánh giá xung đột & Hướng giải quyết |
|---|---|---|---|
| **Hạ Long (Ghép)** | Kế thừa từ hành lang: Từ 250k | **400.000đ/người** | **Xung đột lớn**. Nguồn mới chốt số thực tế 400k. Phải cập nhật dữ liệu trung tâm ngay. |
| **Hạ Long (Bao xe)** | 4 chỗ: 900k; 7 chỗ: 1.100k | **1.000.000đ/chuyến** | **Xung đột**. Nguồn mới quy về 1 mức chuyến 1.000.000đ (chưa gồm cao tốc). |
| **Cát Bi (Bao xe)** | 4 chỗ: 600k; 7 chỗ: 750k | **550.000đ/chuyến** | **Xung đột**. Giá bao xe sân bay điều chỉnh xuống 550k tối ưu cạnh tranh. |
| **Hải Phòng (Bao xe)** | 4 chỗ: 500k; 7 chỗ: 650k | **500.000đ/chuyến** | Nguồn mới xác nhận mức chuẩn 500k cho trung tâm Hải Phòng. |
| **Bao xe cao tốc** | Chưa ghi rõ trạng thái vé cầu đường | **CHƯA GỒM VÉ CAO TỐC** | **Quy tắc cứng mới**. Phải ghi rõ `tollIncluded: false` trên toàn bộ bảng giá và metadata. |
| **Tiên Lãng / Vĩnh Bảo** | Chưa có dữ liệu riêng | Ghép: 300k; **Bao xe: 10.000đ/km** | **Quy tắc PER_KM**. Cấm tự tính ra tiền cố định; hiển thị rõ đơn vị `/km`. |
| **Đông Triều / Mạo Khê** | Chưa có dữ liệu riêng | Ghép: 250k; **Bao xe: 10.000đ/km** | **Quy tắc PER_KM**. Tuyệt đối không tự tính số tiền trọn gói. |
| **Quảng Ninh Endpoints** | Trạng thái UNKNOWN toàn bộ | Đã có giá ghép cụ thể cho 16 điểm | Nâng cấp toàn diện cho phép xây dựng bảng giá đầy đủ cho Pillar Quảng Ninh. |
| **Bao xe 8 điểm xa QN** | Không có | **UNKNOWN (Liên hệ)** | Cửa Ông, Ao Tiên, Ba Chẽ, Tiên Yên, Đầm Hà, Bình Liêu, Hải Hà, Móng Cái: Giữ `Liên hệ`, không bịa giá. |

---

## 5. RANH GIỚI NGĂN CHẶN CANNIBALIZATION & NỘI DUNG MỎNG (THIN CONTENT)

Theo Google Search Essentials và cảnh báo về *scaled content abuse*, việc tự động sinh hàng loạt URL cho mọi địa danh lân cận sẽ gây tự triệt tiêu thứ hạng (keyword cannibalization). Quy tắc phân bổ ranh giới được khóa như sau:

1. **Bãi Cháy ⇄ Hạ Long**: Bãi Cháy nằm trong thành phố Hạ Long, cùng mức giá bao xe 900k-1000k và ghép 350k-400k. **Không tạo `/xe-ghep-hai-duong-bai-chay` riêng**. Bãi Cháy được trình bày thành một Section chuyên sâu trong trang `/xe-ghep-hai-duong-ha-long`.
2. **Ao Tiên ⇄ Vân Đồn**: Cảng Ao Tiên thuộc Vân Đồn, cùng phục vụ khách đi đảo Cô Tô/Quan Lạn. **Không tạo URL Ao Tiên riêng**; tích hợp vào trang Vân Đồn.
3. **Cửa Ông ⇄ Cẩm Phả**: Đền Cửa Ông và phường Cửa Ông thuộc Cẩm Phả. **Không tạo URL Cửa Ông riêng**; tích hợp vào trang Cẩm Phả.
4. **Mạo Khê ⇄ Đông Triều**: Phường Mạo Khê thuộc thị xã Đông Triều, cùng mức giá 250k ghép và 10k/km. **Không tạo URL Mạo Khê riêng**; tích hợp vào trang Đông Triều.
5. **Các huyện Hải Phòng**: An Dương, An Lão, Kiến Thụy, Dương Kinh, Tiên Lãng, Vĩnh Bảo, Cát Hải được phủ đầy đủ trên Bảng giá chi tiết của trang Pillar `/xe-ghep-hai-duong-hai-phong`, chỉ tách URL độc lập khi có tín hiệu Search Console rõ ràng.

---

## 6. TIÊU CHUẨN STRUCTURED DATA (SCHEMA.ORG)

Hệ thống tuân thủ chặt chẽ nguyên tắc Schema trung thực:
- **Global**: `WebSite`, `Organization`.
- **Trang tuyến xe (Route Pages)**:
  - `BreadcrumbList`: Định vị chuẩn phân cấp Trang chủ > Tuyến xe > Tuyến cụ thể.
  - `Service`: Tên dịch vụ, nhà cung cấp Phong Cách, `areaServed`, `availableChannel`.
  - `FAQPage`: Chứa 5-8 câu hỏi thực tế khách thường hỏi.
  - **CẤM**: Không khai báo `QAPage` cho nội dung nhà xe tự soạn. Không dùng `Product` giả mạo để hiện giá rich snippet. Không khai báo `Review` / `AggregateRating` giả lập khi chưa có hệ thống đánh giá của bên thứ ba độc lập.

---

## 7. CHỈ TIÊU KỸ THUẬT & CORE WEB VITALS (TARGETS)

Hệ thống đặt ngưỡng kỹ thuật cho các landing page thương mại:
- **Lighthouse Lab**:
  - SEO: `>= 95`
  - Accessibility: `>= 90`
  - Best Practices: `>= 90`
  - Mobile Performance: `>= 90`
- **Core Web Vitals**:
  - **LCP (Largest Contentful Paint)**: `<= 2.5s` (Tối ưu: tải ảnh Hero bằng `next/image` có thuộc tính `priority`, không lazy-load ảnh trên màn hình đầu).
  - **INP (Interaction to Next Paint)**: `<= 200ms` (Tránh JS blocking nặng trên main thread).
  - **CLS (Cumulative Layout Shift)**: `<= 0.1` (Khai báo kích thước width/height cố định cho toàn bộ hình ảnh và icon).

---

## 8. KẾT LUẬN & BƯỚC TIẾP THEO

Toàn bộ hiện trạng hệ thống đã được audit rõ ràng, không có lỗi tiềm ẩn trong luồng điều hướng, sitemap đạt chuẩn 39 URLs.
Sẵn sàng bước vào **Sprint 1**: Triển khai `pricing-engine.ts`, bộ unit test kiểm tra tính toàn vẹn giá, và script `scripts/seo-audit.mjs` chấm điểm 100 điểm tự động.
