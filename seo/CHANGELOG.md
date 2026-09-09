# SEO CHANGELOG — XE GHÉP PHONG CÁCH

## [Route Engine V2 - Task 1] - 2026-09-09

### Added
- **Central Pricing Engine (`data/seo/pricing-engine.ts`)**:
  - Triển khai nguồn dữ liệu giá chuẩn duy nhất theo `owner_price_sheet_2026_09_09` (ngày 09/09/2026).
  - Nạp đầy đủ 100% dữ liệu giá cho 11 điểm đến Hải Phòng và 16 điểm đến Quảng Ninh (ghép ghế, bao xe, gửi hàng).
  - Tích hợp các quy tắc kinh doanh bất biến: cước bao xe chưa gồm phí cao tốc (`tollIncluded: false`), chặng theo km (`10.000đ/km` cho Tiên Lãng, Vĩnh Bảo, Đông Triều, Mạo Khê), 8 điểm Quảng Ninh xa giữ trạng thái `UNKNOWN` / `CONTACT`.
  - Cung cấp hàm định dạng `formatPriceDisplay()` và hàm kiểm tra nhất quán `validatePriceConsistency()`.
- **Pricing Documentation (`seo/pricing-source.md`)**:
  - Ghi nhận chi tiết bảng giá vận hành thực tế và lịch sử xử lý xung đột giá (Hạ Long 400k/1000k, Cát Bi 300k/550k).
- **Baseline Audit (`seo/BASELINE.md`)**:
  - Báo cáo audit toàn diện kiến trúc, stack Next.js 16, URL contract, canonical, robots, sitemap, Core Web Vitals targets.
- **URL Inventory (`seo/url-inventory.json`)**:
  - Kiểm kê có cấu trúc toàn bộ 39 URLs hiện hành (Core, Trust, Money Pages, Guides).
- **Semantic Content Map (`seo/content-map.json`)**:
  - Định hình phân cấp các cụm Cluster A, Cluster B, Cluster C và khóa ranh giới chống cannibalization (Bãi Cháy, Ao Tiên, Cửa Ông, Mạo Khê).
- **Automated SEO Linter Script (`scripts/seo-audit.mjs`)**:
  - Script kiểm tra tự động chấm điểm theo khung 100 điểm của Master Brief (Content 30, On-page 20, Technical 20, Media 10, Conversion 10, Trust 10).
  - Tích hợp bộ kiểm tra trùng lặp nội dung (Duplicate Content Detector, Jaccard threshold 65%).
  - Xuất báo cáo tự động `seo/SEO_QA_REPORT.md` và `seo/SEO_QA_REPORT.json`.
- **Unit Test Suite (`tests/pricing-engine.test.mjs`)**:
  - 7 bài test chuyên sâu kiểm tra tính toàn vẹn của dữ liệu giá, không rò rỉ giá bịa đặt, đảm bảo các quy tắc `tollIncluded`, `PER_KM` và `UNKNOWN`.
- **Handoff Document (`seo/HANDOFF.md`)**:
  - Tài liệu bàn giao đầy đủ 15 mục theo chuẩn Master Brief Section 18.

### Changed
- **`package.json`**:
  - Bổ sung lệnh chạy kiểm tra SEO tự động: `"seo:audit": "node scripts/seo-audit.mjs"`.
- **`tsconfig.json`**:
  - Neo cấu hình `include` vào các thư mục mã nguồn (`app`, `components`, `data`, `lib`, `next-env.d.ts`, `next.config.ts`), loại bỏ `**/*.ts` toàn cục và Next LSP plugin khỏi CLI `tsc` để tránh quét ngược lên thư mục gốc `/`.
  - Tắt `incremental: false` để giảm áp lực I/O đĩa trong điều kiện bộ nhớ hoán đổi (swap) cao.
- **`scripts/seo-audit.mjs`**:
  - Định danh lại điểm số thành `INTERNAL SEO QA SCORE`, bổ sung ma trận kiểm tra tĩnh nội bộ vs. kiểm tra ngoại vi (Lighthouse/CWV/GSC).

### Investigated (Root-Cause Analysis)
- Phát hiện máy tính bị nghẽn I/O do đĩa cứng còn 6.8GB trống (97% full) và bộ nhớ ảo tráo đổi swap 3.4 triệu trang (~53GB dữ liệu).
- Phát hiện tiến trình đồng bộ macOS iCloud Drive (`fileproviderd`, `cloudd`, `bird`) chiếm trên 55% CPU khi quét thư mục `~/Desktop` chứa dự án mỗi khi Webpack ghi file vào `.next/`.
- Phân tích `tsc`: `lsof` ghi nhận mở file descriptor thư mục trên `/` trong quá trình phân giải module/cấu hình. Cấu hình cũ có glob không neo `**/*.ts` và plugin Next LSP trên CLI gây overhead phân giải đường dẫn và áp lực bộ nhớ. Sau khi tối ưu `tsconfig.json` neo vào toàn bộ 48 tệp nguồn dự án, `tsc --noEmit` chạy trọn vẹn và thoát mã 0 với 0 lỗi.
- Kiểm toán truy xuất nguồn gốc giá (Price Provenance Audit):
  - Giá hành khách (ghép/bao xe) 27 điểm đến: Xác thực từ `owner_price_sheet_2026_09_09`.
  - Gửi hàng Hải Phòng: Kế thừa từ `OWNER_VERIFICATION_RECORD_PHASE1.md` (22/08/2026); nguồn 09/09 chỉ xác thực giá hành khách từng điểm, không chứng minh từng điểm gửi đồ riêng lẻ.
  - Gửi hàng Quảng Ninh: Giữ nguyên bản chất khoảng có điều kiện "từ 150k – 200k và cao hơn tùy chặng xa gần" từ sheet 09/09; không rút gọn thành mức cố định 150k.
  - Các tuyến Hà Nội, Nội Bài, Gia Lộc: Nằm ngoài phạm vi sheet 09/09 (`OUT_OF_SCOPE / UNKNOWN`). Loại bỏ hoàn toàn nhận định suy diễn "phụ thu huyện xa"; giữ nguyên giá legacy.
- Tình trạng Production Build: `npm run build` (`next build --webpack`) hoàn tất tự nhiên với mã thoát 0 (thời gian: 63m 09s), sinh toàn bộ 51/51 trang SSG trong 2.1s và thu thập build traces thành công.

### Verified
- `node --test tests/*.test.mjs`: 78/78 tests PASS (0 regression, thời gian: 6.42s, exit code: 0).
- `npm run seo:audit`: 100/100 điểm Internal SEO QA Score, 0 Critical Issues, 0 Warnings, Release Gate PASSED (thời gian: 7.12s, exit code: 0).
- `npm run typecheck` (`./node_modules/.bin/tsc --noEmit`): PASSED với exit code 0, 0 lỗi kiểu dữ liệu (thời gian: 11m 25s).
- `npm run build` (`next build --webpack`): PASSED với exit code 0, sinh 51/51 trang SSG (thời gian: 63m 09s).
- Provenance & Pricing Invariants: Kiểm định độc lập bằng unit test và lập bảng đối chiếu chi tiết trong `seo/HANDOFF.md`.
- **Trạng thái Task 1**: **CLOSED** (toàn bộ 5 bài kiểm tra bắt buộc đã kết thúc tự nhiên mã 0). Không khởi động Task 2.

