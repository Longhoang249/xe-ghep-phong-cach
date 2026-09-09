# SEO HANDOFF — SEO ROUTE ENGINE V2 (TASK 1)

**Dự án**: Xe Ghép Phong Cách (`https://xeghepphongcach.com`)  
**Ngày lập**: 2026-09-09 (Asia/Ho_Chi_Minh)  
**Tác giả bàn giao**: Senior SEO Engineer + Content Architect (Antigravity)  
**Giai đoạn hoàn thành**: Task 1 — Data Engine + Baseline Audit + Automated SEO QA

---

## 1. Executive Summary
Task 1 đã hoàn thành đầy đủ các yêu cầu cốt lõi của Sprint 0 (Baseline Audit) và Sprint 1 (Data Engine):
1. **Kiểm kê & khóa an toàn 39 URL hiện hành**: Xuất bản `seo/BASELINE.md` và `seo/url-inventory.json`. Không tạo thêm bất kỳ URL mỏng nào trong giai đoạn này.
2. **Khởi tạo Central Pricing Engine (Single Source of Truth)**: Triển khai `data/seo/pricing-engine.ts` và `seo/pricing-source.md` theo nguồn `owner_price_sheet_2026_09_09` (ngày 09/09/2026) cho toàn bộ 27 điểm đến Hải Phòng & Quảng Ninh.
3. **Thiết lập ranh giới chống Cannibalization**: `seo/content-map.json` khóa chặt Bãi Cháy dưới Hạ Long, Ao Tiên dưới Vân Đồn, Cửa Ông dưới Cẩm Phả, Mạo Khê dưới Đông Triều.
4. **Hệ thống kiểm tra SEO tự động (100 điểm)**: Script `scripts/seo-audit.mjs` (`npm run seo:audit`) đạt **100/100 điểm**, 0 Critical issues.
5. **Bộ unit test bảo toàn tính toàn vẹn**: Chạy `node --test tests/*.test.mjs` đạt **78/78 tests PASS** (71 tests cũ + 7 tests mới cho Pricing Engine).

---

## 2. Git State
- **Branch**: `main`
- **Current Commit**: `c882d69` (trước Task 1)
- **Status**: Clean & ready to commit Task 1 assets.

---

## 3. Production / Preview
- **Domain chính**: `https://xeghepphongcach.com`
- **Vercel Deployment**: Live & Synced với production CDN.

---

## 4. Existing URLs Modified
- Trong Task 1, **KHÔNG CÓ URL PUBLIC NÀO BỊ THAY ĐỔI ĐƯỜNG DẪN HOẶC METADATA ĐỘT NGỘT**.
- Giữ nguyên 100% hợp đồng URL hiện có (39 URLs).

---

## 5. New URLs
- **Số URL mới tạo**: **0 URL**.
- Tuân thủ nghiêm ngặt Non-Objective của Master Brief: Không sinh endpoint page vội vã khi chưa qua kiểm định và chưa hoàn thành nâng cấp 2 Pillar.

---

## 6. Pricing Architecture
- **Tệp nguồn chân lý**: `data/seo/pricing-engine.ts`
- **Tài liệu đối chiếu**: `seo/pricing-source.md`
- **Source ID**: `owner_price_sheet_2026_09_09`
- **Verified Date**: `2026-09-09`
- **Schema Type**:
  ```typescript
  type RoutePriceRecord = {
    origin: string;
    province: string;
    destination: string;
    service: "shared" | "private" | "parcel";
    pricingType: "EXACT" | "RANGE" | "FROM" | "PER_KM" | "CONTACT";
    priceMin?: number;
    priceMax?: number;
    pricePerKm?: number;
    unit: "person" | "trip" | "parcel" | "km";
    tollIncluded?: boolean | null;
    notes?: string;
    sourceId: string;
    verifiedAt: string;
    status: "VERIFIED" | "UNKNOWN";
  };
  ```
- **Quy tắc cứng**:
  - Toàn bộ bao xe: `tollIncluded: false` (chưa gồm vé cao tốc).
  - Tiên Lãng, Vĩnh Bảo, Đông Triều, Mạo Khê: Bao xe tính theo `10.000đ/km`, không tự tính số tiền cố định.
  - 8 Điểm đến Quảng Ninh xa (Cửa Ông, Ao Tiên, Ba Chẽ, Tiên Yên, Đầm Hà, Bình Liêu, Hải Hà, Móng Cái): Bao xe trạng thái `UNKNOWN` / `CONTACT`.

---

## 7. Content Architecture
- **Hub trung tâm**: Hải Dương.
- **Pillar Hải Phòng**: `/xe-ghep-hai-duong-hai-phong` (Sẵn sàng nâng cấp trong Task 2).
- **Pillar Quảng Ninh**: `/xe-ghep-hai-duong-quang-ninh` (Sẵn sàng nâng cấp trong Task 2).
- **Trang Endpoint đã xuất bản**:
  - `/xe-hai-duong-cat-bi` (MP-004)
  - `/xe-ghep-hai-duong-ha-long` (MP-019, bao hàm toàn diện nhu cầu Bãi Cháy)
- **Trang trì hoãn (Deferred pages) để tránh Thin Content**:
  - Bãi Cháy → Tích hợp thành Section trong Hạ Long.
  - Mạo Khê → Tích hợp trong Đông Triều.
  - Cửa Ông → Tích hợp trong Cẩm Phả.
  - Ao Tiên → Tích hợp trong Vân Đồn.
  - Các huyện Hải Phòng (An Dương, An Lão, Thủy Nguyên, Kiến Thụy, Dương Kinh, Đồ Sơn, Cát Hải, Tiên Lãng, Vĩnh Bảo) → Phủ đầy đủ trong Bảng giá chi tiết của Pillar Hải Phòng trước.

---

## 8. SEO Changes
- **Metadata**: Lưu vết cấu trúc toàn bộ title/description tại `seo/url-inventory.json`.
- **Canonical**: 100% tự tham chiếu.
- **Sitemap**: Khóa ở mốc 39 URLs, định kỳ ping IndexNow.
- **Robots**: `robots.ts` cho phép toàn site, chặn `/admin` và `/api`, khai báo sitemap.
- **Schema**: WebPage, Service, FAQPage, BreadcrumbList, Organization.
- **Internal linking**: Thiết lập Content Map liên kết phân cấp cha - con và tuyến liên quan.
- **Images**: 16 ảnh chất lượng cao trong `public/images/` đã được kiểm kê.

---

## 9. QA Results & Verification Evidence

### 9.1. Bảng đối chiếu xác minh kỹ thuật (Final Verification Table)

| Hạng mục kiểm tra | Lệnh thực thi / Nguồn đo lường | Trạng thái thực tế | Mã thoát (Exit Code) | Thời gian chạy | Bản chất kỹ thuật & Bằng chứng thực nghiệm |
|---|---|:---:|:---:|:---:|---|
| **Unit tests** | `node --test tests/*.test.mjs` | **PASS** | **0** | **6.42s** | 78/78 tests PASS (71 hồi quy + 7 tests kiểm định provenance và bất biến giá). |
| **Pricing invariants** | `node --test tests/pricing-engine.test.mjs` | **PASS** | **0** | **<1s** | Khóa chặt các quy tắc `tollIncluded: false`, `PER_KM` (10k/km), 8 điểm xa QN `UNKNOWN/CONTACT`, provenance tách biệt giữa sheet 09/09 và Phase 1. |
| **Internal SEO audit** | `npm run seo:audit` (`scripts/seo-audit.mjs`) | **PASS** | **0** | **7.12s** | Đạt 100/100 điểm Internal SEO QA Score (Static code & data linting), 0 Critical, 0 Warnings, Release Gate PASSED. |
| **Typecheck** | `npm run typecheck` (`tsc --noEmit`) | **PASS** | **0** | **11m 25s** | Quét 100% mã nguồn dự án (48 files `.ts`/`.tsx` thuộc `app`, `components`, `data`, `lib`, `next-env.d.ts`, `next.config.ts`), 0 lỗi cú pháp hoặc kiểu dữ liệu. |
| **Production build** | `npm run build` (`next build --webpack`) | **PASS** | **0** | **63m 09s** | Next.js 16 hoàn tất biên dịch, hoàn tất TypeScript check nội bộ, sinh toàn bộ 51/51 trang tĩnh (SSG in 2.1s), tối ưu hóa trang và xuất build trace thành công. Thoát tự nhiên mã 0. |
| **Semrush** | Semrush SEO Writing Assistant API | **NOT RUN** | N/A | N/A | Chưa tích hợp API trả phí bên ngoài; chỉ kiểm tra tĩnh qua linter nội bộ. |
| **Lighthouse** | Headless Chrome Performance & A11y | **NOT RUN** | N/A | N/A | Cần chạy headless browser độc lập trên môi trường runtime thực. |
| **CWV field** | CrUX (Chrome User Experience Report) | **UNAVAILABLE / NOT RUN** | N/A | N/A | Cần tối thiểu 28 ngày dữ liệu thu thập thực tế từ người dùng thật của Google. |
| **GSC** | Google Search Console API | **NOT RUN** | N/A | N/A | Cần dữ liệu index và click thực tế từ Googlebot trên production domain. |

---

## 10. Điều tra nguyên nhân gốc rễ (Root Cause Investigation)

Theo chỉ đạo của Product Owner, Antigravity đã thực hiện phân tích sâu các tiến trình hệ thống, file descriptor (`lsof`), stack trace (`sample`), và trạng thái phần cứng (`sysctl`, `vm_stat`, `df -h`) để xác định chính xác vì sao `tsc` và `next build` bị chậm/kéo dài trên môi trường cục bộ:

### 10.1. Áp lực bộ nhớ và hiện tượng Thrashing Swap trên macOS
- **Thông số thực nghiệm**:
  - Máy tính: Apple Silicon 8 cores, 16 GB RAM vật lý (`hw.memsize: 17179869184`).
  - Phân vùng đĩa `/dev/disk3s5`: **228 GiB** tổng dung lượng, đã dùng **180 GiB**, chỉ còn **6.8 GiB khả dụng (97% dung lượng đầy)**. Trên macOS APFS, khi dung lượng trống dưới 10GB, cơ chế Copy-On-Write và file hoán đổi bộ nhớ ảo (`/private/var/vm/`) bị nghẽn I/O nghiêm trọng.
  - `vm_stat` ghi nhận:
    - Bộ nhớ trống thực tế: chỉ **61 MB** (`Pages free: 3767`).
    - Dữ liệu nén trong RAM: **22.5 GB** (`Pages stored in compressor: 1,440,677`), chiếm tới **6.4 GB RAM** chỉ để nén.
    - Hoán đổi đĩa: **3.4 triệu swapouts** (~53.7 GB dữ liệu tráo đổi ra đĩa).
    - Thao tác nén/giải nén: vượt **500 triệu lượt**.
  - Tiến trình đồng bộ macOS iCloud Drive trên thư mục `~/Desktop` (`fileproviderd` 33.1% CPU, `cloudd` 17.9% CPU, `bird` 4.1% CPU) chiếm trên 55% CPU, cạnh tranh I/O đĩa mỗi khi Webpack ghi file vào `.next/`.
  - **Hệ quả thực tế**: Mọi tiến trình hệ thống đều bị trễ I/O. Ngay cả lệnh cơ bản `git status -uno` mất 44 giây (với 100% thread bị block trong system call `read()` của kernel). Khi `tsc` hay `webpack` cấp phát bộ nhớ (500MB - 1GB), hệ điều hành liên tục giải nén trang và ghi swap ra đĩa đang sắp đầy, khiến tiến trình nhận rất ít thời gian CPU thực tế.

### 10.2. Cấu hình TypeScript (`tsconfig.json`) & Xác minh độ phủ nguồn
- **Phân tích kỹ thuật**:
  - Cấu hình ban đầu có glob mở `"include": ["**/*.ts"]`, chứa type dev cũ `.next/dev/types/**/*.ts`, và plugin Next LSP (`"plugins": [{"name": "next"}]`).
  - Khi chạy CLI `tsc`, `lsof` ghi nhận mở file descriptor thư mục trên `/` trong quá trình phân giải module và kiểm tra cấu hình dự án.
  - Nhận định thận trọng: Việc nhìn thấy `/` trong `lsof` không đồng nghĩa với việc TypeScript quét đệ quy toàn bộ ổ đĩa, nhưng sự kết hợp giữa glob mở không neo, plugin editor nạp vào CLI, và tính năng `incremental` ghi file `.tsbuildinfo` trong điều kiện I/O đĩa bị nghẽn đã tạo ra overhead phân giải đường dẫn và tiêu tốn bộ nhớ đáng kể.
- **Tối ưu hóa và xác minh độ phủ (Full Source Coverage)**:
  - Neo cấu hình `"include"` rõ ràng vào: `app/**/*.ts*`, `components/**/*.ts*`, `data/**/*.ts*`, `lib/**/*.ts*`, `next.config.ts`, `next-env.d.ts`.
  - Tách plugin Next ra khỏi CLI typecheck; tắt `incremental: false`.
  - **Xác minh độ phủ**: Toàn bộ 48 tệp `.ts`/`.tsx` trong toàn bộ repository (nằm trong `app`, `components`, `data`, `lib`, cùng 2 file gốc) đều nằm trọn vẹn 100% trong phạm vi kiểm tra của `tsconfig.json`. Không bỏ sót bất kỳ tệp nguồn nào.
  - Kết quả: `tsc --noEmit` hoàn tất kiểm tra toàn bộ mã nguồn với **0 lỗi** và thoát tự nhiên mã **0**.

### 10.3. Môi trường Node.js Runtime
- `node -v` mặc định trỏ về Homebrew Node v26.7.0 (bản build phát triển thử nghiệm/unreleased, chưa được tối ưu hóa bộ nhớ đệm V8). Node 20 LTS (`v20.20.2`) và Node 22 LTS (`v22.23.1`) đã có sẵn trong `/opt/homebrew/opt/`.

---

## 11. Kiểm tra tính khách quan của SEO Linter (Anti-False Confidence Audit)

Theo chỉ đạo kiểm toán tính chân thực của công cụ chấm điểm SEO:
1. **Bản chất của `scripts/seo-audit.mjs`**:
   - Đây là công cụ **Internal Static Linter (Kiểm tra tĩnh nội bộ)**, không phải công cụ giả lập Google bot hay đo đạc tốc độ mạng thực tế.
   - Điểm số được định danh lại chính xác: **`INTERNAL SEO QA SCORE`** (không dùng tên chung chung gây hiểu nhầm).
2. **Những gì linter CÓ kiểm tra**:
   - Đối chiếu tính nhất quán 100% giữa giá hiển thị và nguồn chân lý `data/seo/pricing-engine.ts`.
   - Kiểm tra ranh giới cannibalization (bắt buộc Bãi Cháy nằm dưới Hạ Long, Ao Tiên dưới Vân Đồn...).
   - Đo lường độ tương đồng văn bản Jaccard pairwise giữa các bài viết (chặn trùng lặp >= 65%).
   - Kiểm tra mở bài trực diện (Answer-First >= 50 ký tự trong 200 từ đầu).
   - Kiểm kê toàn vẹn 39 URLs trong sitemap, canonical tự tham chiếu, quy tắc robots.txt.
   - Kiểm tra định dạng JSON-LD schema (BreadcrumbList, Service, WebPage, FAQPage).
3. **Những gì linter KHÔNG THỂ kiểm tra**:
   - Điểm Lighthouse thực tế (cần chạy headless Chrome runtime).
   - Dữ liệu Core Web Vitals thực địa CrUX (cần dữ liệu 28 ngày từ người dùng thật của Google).
   - Điểm Semrush Writing Assistant API (chưa tích hợp API trả phí bên ngoài).
   - Khả năng index và thứ hạng thực tế trên Google Search Console.

---

## 12. Kiểm định 5 bất biến giá chuẩn & Truy xuất nguồn gốc (Pricing Invariants & Provenance Audit)

Theo yêu cầu đối chiếu cụ thể 5 định mức giá trong chỉ đạo kiểm toán đối chiếu với nguồn dữ liệu `owner_price_sheet_2026_09_09` và các nguồn chứng cứ hiện có trong repository:

### 12.1. Bảng đối chiếu 5 định mức giá cụ thể

| Định mức kiểm toán | Phân loại trạng thái | Dữ liệu trong `owner_price_sheet_2026_09_09` | Nguồn chứng cứ trong Codebase (`pricing-engine.ts` / `routes.ts`) | Kết luận xác minh kỹ thuật & Nguyên tắc bất biến |
|---|:---:|---|---|---|
| **1. Hải Dương ⇄ Nội Bài: 450k** | **OUT_OF_SCOPE / UNKNOWN** | *Không có trong sheet 09/09* (Sheet 09/09 chỉ chốt 27 điểm HP & QN) | `data/routes.ts`: `sharedPrice: 300000`, `private4Price: 700000` (`LEGACY_VERIFIED`). | Mức 450k hoàn toàn nằm ngoài phạm vi sheet 09/09 và không có bất kỳ nguồn xác thực nào trong repository. Giữ nguyên trạng thái `OUT_OF_SCOPE / UNKNOWN`. Không được tự suy diễn mô hình kinh doanh khi chưa có nguồn xác nhận. |
| **2. Hải Dương ⇄ Hà Nội: 250k** | **OUT_OF_SCOPE / UNKNOWN** | *Không có trong sheet 09/09* (Sheet 09/09 xác nhận HD ⇄ HP là 250k) | `data/routes.ts`: `sharedPrice: 150000` (`LEGACY_VERIFIED` từ Phase 1). | Mức 250k đối với tuyến Hà Nội không có trong sheet 09/09 (sheet 09/09 chỉ chốt 250k cho tuyến Hải Phòng). Trạng thái: `OUT_OF_SCOPE / UNKNOWN`. Giữ nguyên giá legacy 150k cho đến khi có văn bản xác thực tuyến Hà Nội. |
| **3. Gia Lộc ⇄ Hà Nội: 270k** | **OUT_OF_SCOPE / UNKNOWN** | *Không có trong sheet 09/09* | Không có bản ghi route riêng cho Gia Lộc trong `data/routes.ts`. | Tuyệt đối không suy diễn khoảng chênh lệch giá thành quy tắc "phụ thu huyện xa" khi chưa có nguồn chứng cứ xác thực. Trạng thái: `OUT_OF_SCOPE / UNKNOWN`. Không gán quy tắc kinh doanh giả định. |
| **4. Bao xe: 550k** | **VERIFIED** | Sân bay Cát Bi (`hd-cb`): 550.000đ; Thủy Nguyên: 500k – 550k | `data/seo/pricing-engine.ts`: `priceMin: 550000, priceMax: 550000` (Cát Bi private trip). | Khớp chính xác với sheet 09/09 cho chặng Sân bay Cát Bi. Toàn bộ chuyến bao xe đã khóa chặt thuộc tính bắt buộc `tollIncluded: false` (chưa bao gồm vé cao tốc/cầu đường). |
| **5. Gửi đồ: 150k** | **AUDITED PROVENANCE** | *Hải Phòng*: "Từ 150.000đ/kiện tùy khối lượng..."<br>*Quảng Ninh*: "Từ 150.000đ – 200.000đ và cao hơn tùy chặng..." | *Hải Phòng*: Kế thừa `OWNER_VERIFICATION_RECORD_PHASE1.md` (22/08/2026).<br>*Quảng Ninh*: `owner_price_sheet_2026_09_09` (09/09/2026). | **Truy xuất nguồn gốc chính xác (Provenance Audit)**:<br>1. Hải Phòng: Nguồn 09/09 chỉ xác thực giá hành khách (ghép/bao xe) theo từng điểm đến, không chứng minh từng điểm gửi đồ riêng lẻ. Mức khởi điểm 150k kế thừa từ Phase 1 (`sourceId: "OWNER_VERIFICATION_RECORD_PHASE1.md"`).<br>2. Quảng Ninh: Nguồn 09/09 nêu rõ khoảng giá từ 150k – 200k và cao hơn tùy chặng xa gần (`sourceId: "owner_price_sheet_2026_09_09"`). Giữ nguyên bản chất có điều kiện (qualified range), không rút gọn thành một mức cố định 150k duy nhất.<br>3. Không có nguồn chứng cứ nào xác nhận mức cước gửi hàng cố định đồng nhất cho toàn bộ hệ thống. |

### 12.2. Toàn bộ quy tắc kinh doanh cốt lõi đã được kiểm định độc lập
1. **Nguồn chân lý dữ liệu giá**: `data/seo/pricing-engine.ts` quản lý 27 điểm đến với `sourceId` gắn chính xác với nguồn chứng cứ xác thực từng bản ghi (hành khách: `owner_price_sheet_2026_09_09`, gửi đồ Hải Phòng: `OWNER_VERIFICATION_RECORD_PHASE1.md`).
2. **Hải Phòng**: Ghép nội thành chuẩn 250.000đ, sân bay Cát Bi 300.000đ; bao xe 4-5 chỗ nội thành 500.000đ, Cát Bi 550.000đ.
3. **Tiên Lãng / Vĩnh Bảo & Đông Triều / Mạo Khê**: Giá bao xe bắt buộc là `10.000đ/km` (`pricingType: "PER_KM"`). Tuyệt đối không được gán số tiền cố định bịa đặt.
4. **Vé cầu đường xe bao**: Toàn bộ các chuyến bao xe (`service: "private"`) đều có `tollIncluded: false` (chưa bao gồm vé cao tốc/cầu đường).
5. **Quảng Ninh**: Ghép Hạ Long 400.000đ, bao xe 1.000.000đ; 8 điểm đến xa (Cửa Ông, Ao Tiên, Ba Chẽ, Tiên Yên, Đầm Hà, Bình Liêu, Hải Hà, Móng Cái) giữ trạng thái `UNKNOWN` / `CONTACT` cho xe bao. Cước gửi đồ là khoảng có điều kiện từ 150.000đ – 200.000đ+ tùy chặng xa gần.

---

## 13. Human Verification Needed
1. **Xác nhận chặng Hà Nội & Nội Bài**: Khi nào chủ xe ban hành bảng giá chính thức mới cho tuyến Hà Nội và sân bay Nội Bài (hiện đang giữ giá legacy).
2. **8 Điểm đến Quảng Ninh chưa có giá bao xe**: Xác nhận khi nào có bảng giá bao xe chính thức cho Móng Cái, Vân Đồn, Tiên Yên... Hiện tại hệ thống để an toàn `Liên hệ`.

---

## 14. Trạng thái Task 1 & Sẵn sàng cho Task 2

> [!NOTE]
> **TASK 1 STATUS: CLOSED**  
> Toàn bộ quy trình xác minh kỹ thuật bắt buộc đã hoàn tất sạch với mã thoát 0:
> - Unit tests: **PASS (exit 0)**
> - Pricing invariants: **PASS (exit 0)**
> - Internal SEO QA audit: **PASS (exit 0)**
> - Typecheck: **PASS (exit 0)**
> - Production build: **PASS (exit 0)** (Thời gian: 63m 09s, 51/51 trang SSG hoàn tất).
> 
> **CAM KẾT TUÂN THỦ**: Antigravity dừng lại tại đây và **TUYỆT ĐỐI KHÔNG TỰ Ý BẮT ĐẦU TASK 2** cho đến khi nhận được chỉ đạo và phê duyệt tiếp theo từ Product Owner.

- [x] Baseline Audit hoàn tất (`seo/BASELINE.md`).
- [x] URL Inventory 39 URL được kiểm kê và khóa an toàn (`seo/url-inventory.json`).
- [x] Content Map phân cụm và hàng rào cannibalization được thiết lập (`seo/content-map.json`).
- [x] Central Pricing Engine (`data/seo/pricing-engine.ts`) truy xuất nguồn gốc chính xác (provenance audited).
- [x] Bảng giá chi tiết có tài liệu tra cứu (`seo/pricing-source.md`).
- [x] 78/78 Unit Tests PASS (`node --test tests/*.test.mjs`, exit code 0).
- [x] Internal SEO QA Score đạt 100/100, 0 critical issues (`npm run seo:audit`, exit code 0).
- [x] `npm run typecheck` vượt qua hoàn toàn với exit code 0 (0 errors, 11m 25s).
- [x] `npm run build` vượt qua hoàn toàn với exit code 0 (63m 09s, 51/51 SSG pages).
- [x] Báo cáo điều tra gốc rễ, bảng chứng cứ thực nghiệm và ma trận kiểm tra đã cập nhật đầy đủ.
- [ ] **LƯU Ý QUAN TRỌNG**: KHÔNG TỰ ĐỘNG CHUYỂN SANG TASK 2 khi chưa có xác nhận từ người dùng.

---

## 15. Commands Tra Cứu
- Chạy toàn bộ Unit Tests:
  ```bash
  node --test tests/*.test.mjs
  ```
- Chạy SEO Linter & QA Script nội bộ:
  ```bash
  npm run seo:audit
  ```
- Kiểm tra kiểu dữ liệu TypeScript:
  ```bash
  npm run typecheck
  ```
- Chạy build Next.js:
  ```bash
  npm run build
  ```

