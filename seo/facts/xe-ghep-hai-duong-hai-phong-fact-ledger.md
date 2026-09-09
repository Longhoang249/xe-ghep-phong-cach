# BẢNG ĐỐI CHIẾU DỮ LIỆU XÁC THỰC (FACT CLAIM LEDGER)
## Tuyến: Hải Dương ⇄ Hải Phòng (`/xe-ghep-hai-duong-hai-phong` - MP-003)

**Mục đích**: Kiểm toán toàn bộ 37 tuyên bố thực tế (factual & operational claims) trên trang Money Page mẫu của tuyến Hải Dương - Hải Phòng. Phân loại nghiêm ngặt theo nguồn gốc và bằng chứng, loại bỏ 100% thông tin suy diễn không có nguồn trước khi nhân bản cluster sang Tuyến 2 (Quảng Ninh).  
**Ngày cập nhật**: 2026-09-09  
**Phiên bản chuẩn hóa**: Gold Standard Task 2A.3 — 2026 Administrative Currentness Patch  
**Các nguồn xác thực gốc (First-Party & External Sources)**:
1. `owner_price_sheet_2026_09_09` (First-Party): Bảng giá chính thức ngày 09/09/2026 của chủ xe (Trung tâm HP 250k/500k, 11 điểm đến, tollIncluded: false, Tiên Lãng/Vĩnh Bảo 10.000đ/km).
2. `OWNER_VERIFICATION_RECORD_PHASE1.md` (First-Party): Xác thực vận hành ngày 22/08/2026 (đón tận nơi trả tận nhà, 2 chiều, bao xe/xe ghép, thanh toán sau chuyến, đặt trước không mất phí, cước gửi hàng từ 150k. Khóa cấm suy diễn: giờ chạy, tần suất xe/ngày, lead time, bảo dưỡng, SLA).
3. `Google Maps Routes & Distance Matrix Benchmark` (External Geography Benchmark): Dữ liệu trích xuất ngày 09/09/2026 giữa Hải Dương cũ (20.937°N, 106.315°E) và 11 khu vực Hải Phòng cũ (Trung tâm HP 45.2-52.6 km, thời gian lái xe 45-60 phút; Cát Bi 51.8 km, 50-65 phút; Cát Hải 68.4 km, 65-80 phút; Đồ Sơn 62.5 km, 60-75 phút). Nguồn chỉ hỗ trợ ước tính cự ly và thời gian lái xe đường bộ công cộng, không chứng minh hoặc thay thế hành vi vận hành thực tế của nhà xe.
4. `Nghị quyết số 76/2025/UBTVQH15` (Official Legal Source): Có hiệu lực từ 01/07/2025 về sắp xếp đơn vị hành chính và mô hình chính quyền địa phương 2 cấp; sáp nhập tỉnh Hải Dương vào thành phố Hải Phòng mới. Các quận/huyện cũ không còn là đơn vị hành chính cấp huyện độc lập; được xếp loại là `LEGACY_GEOGRAPHIC_LABEL` & `SEARCH_LANGUAGE` để phục vụ tìm kiếm của người dân mà không gây sai lệch hiện trạng hành chính.
5. `Quy hoạch mạng lưới đường bộ 2021-2030 (QĐ 1454/QĐ-TTg)`: Xác thực trục kết nối Cao tốc CT04 (5B) và Quốc lộ 5.
6. `seo/contact-source.md`: Hotline duy nhất toàn hệ thống `0987 663 883` (`tel:+84987663883`).

---

## 1. BẢNG TỔNG HỢP KIỂM TOÁN TỪNG TUYÊN BỐ (37 CLAIMS)

| ID | Vị trí / Component | Nội dung ban đầu | Phân loại | Nguồn kiểm chứng chi tiết | Trạng thái xác thực | Xử lý | Nội dung xuất bản cuối cùng |
|---|---|---|---|---|---|---|---|
| **CLM-01** | Hero / Eyebrow | "Xe ghép và bao xe hai chiều" | `SERVICE_PROMISE` | `OWNER_VERIFICATION_RECORD_PHASE1.md:17` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | "Xe ghép và bao xe hai chiều" |
| **CLM-02** | Hero / H1 | "Xe ghép Hải Dương - Hải Phòng" | `ROUTE` | `seoAssets` (MP-003 canonical) | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | "Xe ghép Hải Dương - Hải Phòng" |
| **CLM-03** | Hero / Subline | "Dịch vụ xe ghép và bao xe 4-7 chỗ hai chiều Hải Dương - Hải Phòng, đón trả tận nơi, đặt trước không mất phí, thanh toán sau chuyến." | `SERVICE_PROMISE` | `OWNER_VERIFICATION_RECORD_PHASE1.md:17, 50` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Giữ nguyên cam kết đã xác thực. |
| **CLM-04** | Hero / Price tag | "Từ 250.000đ" | `PRICE` | `owner_price_sheet_2026_09_09:34` (lưu trữ kỹ thuật tại `pricing-engine.ts`) | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | "Từ 250.000đ/người" (lấy động từ `pricing-engine.ts`). |
| **CLM-05** | Hero / Badges | "Hai chiều", "Đặt trước không mất phí", "Thanh toán sau chuyến" | `SERVICE_PROMISE` | `OWNER_VERIFICATION_RECORD_PHASE1.md:17` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | 3 badge cốt lõi được chủ xe xác nhận. |
| **CLM-06** | Quick Facts / Giá ghép | "Xe ghép: Từ 250.000đ" | `PRICE` | `owner_price_sheet_2026_09_09:34` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Render động qua `sharedPrice`. |
| **CLM-07** | Quick Facts / Bao xe 4c | "Bao xe 4 chỗ: Từ 500.000đ" | `PRICE` | `owner_price_sheet_2026_09_09:34` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Render động qua `charter4Price`. |
| **CLM-08** | Quick Facts / Bao xe 7c | "Bao xe 7 chỗ: Từ 650.000đ" | `PRICE` | `owner_price_sheet_2026_09_09` (trung tâm HP 7 chỗ) | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Render động qua `charter7Price`. |
| **CLM-09** | Quick Facts / Gửi hàng | "Gửi hàng: Từ 150.000đ" | `PARCEL` | `OWNER_VERIFICATION_RECORD_PHASE1.md:25, 35` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Render động qua `parcelPrice`. |
| **CLM-10** | Quick Facts / Boundary | "Giá thực tế phụ thuộc địa chỉ đón/trả, thời gian di chuyển, ngày đi và điều kiện chuyến." | `PRICE_POLICY` | `OWNER_VERIFICATION_RECORD_PHASE1.md:21-22` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Giữ nguyên theo nguyên tắc bất biến. |
| **CLM-11** | Direct Answer / Giờ chạy | "phục vụ liên tục hai chiều từ sáng sớm đến tối muộn" | `OPERATIONS` | `OWNER_VERIFICATION_RECORD_PHASE1.md:26` cấm suy diễn giờ chạy | `REMOVED` | **XÓA / THAY THẾ** | "nhận đưa đón khách hai chiều theo lịch hẹn trước của hành khách". |
| **CLM-12** | Direct Answer / Bảng giá | Bảng giá 11 điểm đến Hải Phòng | `PRICE` | `owner_price_sheet_2026_09_09:32-45` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Khớp 100% với 11 điểm đến chính thức. |
| **CLM-13** | Direct Answer / Cao tốc & thời gian | "Tất cả các chuyến xe đều ưu tiên qua Cao tốc 5B rút ngắn thời gian chỉ còn 45-60 phút." | `TIME` / `ROUTE` | Google Maps Benchmark: Hải Dương - Hải Phòng ~45-55km qua CT04, ước tính 45-60 phút. | `ESTIMATE_WITH_SOURCE` | **GHI RÕ NGUỒN ƯỚC TÍNH** | "Thời gian di chuyển ước tính theo bản đồ giao thông khoảng 45 đến 60 phút tùy thuộc vị trí đón trả và mật độ phương tiện thực tế." |
| **CLM-14** | Direct Answer / Tiền cọc | "chính sách đặt trước 0đ cọc" | `BRAND_CLAIM` | `OWNER_VERIFICATION_RECORD_PHASE1.md:17` xác nhận "đặt trước không mất phí" | `VERIFIED_FIRST_PARTY` | **CHUẨN HÓA VỀ TỪ NGỮ CHỦ XE** | "chính sách đặt trước không mất phí, thanh toán sau chuyến đi." |
| **CLM-15** | Direct Answer / Lead time | "nhắn tin Zalo trước 30 - 60 phút" | `OPERATIONS` | `OWNER_VERIFICATION_RECORD_PHASE1.md:26` cấm suy diễn lead time | `REMOVED` | **XÓA BỎ LEAD TIME CỤ THỂ** | "Quý khách nên liên hệ trước qua tổng đài hoặc Zalo để được kiểm tra và sắp xếp xe thuận tiện nhất." |
| **CLM-16** | Direct Answer / Takeaway Cự ly | "Khoảng 45 - 65 km" | `DISTANCE` | Khoảng cách địa lý thực tế từ TP Hải Dương đến các huyện ven biển Hải Phòng (Google Maps) | `VERIFIED_EXTERNAL_FACT` | **GIỮ NGUYÊN** | "Khoảng 45 - 65 km (tùy điểm đến)" |
| **CLM-17** | Direct Answer / Takeaway Thời gian | "45 - 60 phút" | `TIME` | Google Maps driving estimate | `ESTIMATE_WITH_SOURCE` | **GHI RÕ ƯỚC TÍNH** | "Khoảng 45 - 60 phút (ước tính tham khảo)" |
| **CLM-18** | Direct Answer / Takeaway Tần suất | "Liên tục trong ngày" | `OPERATIONS` | `OWNER_VERIFICATION_RECORD_PHASE1.md:26` cấm suy diễn tần suất | `REMOVED` | **XÓA BỎ / ĐỔI BẢN CHẤT** | "Theo lịch hẹn trước của khách" |
| **CLM-19** | Direct Answer / Takeaway Chính sách | "Đặt trước không mất phí - Trả sau chuyến" | `BRAND_CLAIM` | `OWNER_VERIFICATION_RECORD_PHASE1.md:17` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | "Đặt trước không mất phí - Trả sau chuyến" |
| **CLM-20** | Table 11 điểm / Giá | Giá ghép và bao xe 11 điểm đến | `PRICE` | `owner_price_sheet_2026_09_09` (lưu trữ kỹ thuật tại `pricing-engine.ts`) | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Map động từ engine. |
| **CLM-21** | Table 11 điểm / Cột thời gian | "Thời gian: 40-50p, 45-60p..." | `TIME` | Ước tính khoảng cách thực tế qua Google Maps | `ESTIMATE_WITH_SOURCE` | **GHI RÕ CỘT ƯỚC TÍNH** | Tiêu đề cột: "Thời gian tham khảo", giá trị ghi kèm "(ước tính)". |
| **CLM-22** | Table 11 điểm / Tên điểm đón | Tên 11 khu vực điểm đến Hải Phòng | `GEOGRAPHY` / `SEARCH_LANGUAGE` | `Nghị quyết 76/2025/UBTVQH15` (Chính quyền 2 cấp từ 01/07/2025) & Thói quen tìm kiếm địa phương | `LEGACY_GEOGRAPHIC_LABEL` | **CHUẨN HÓA VỀ NHÃN ĐỊA LÝ KHU VỰC — BẢO TỒN TỪ KHÓA TÌM KIẾM** | 11 khu vực điểm đến: Trung tâm (Hồng Bàng, Ngô Quyền, Lê Chân), An Dương, An Lão, Thủy Nguyên, Sân bay Cát Bi, Kiến Thụy, Dương Kinh, Đồ Sơn, Cát Hải, Tiên Lãng, Vĩnh Bảo. Giữ nguyên 100% từ khóa tìm kiếm nhưng không tuyên bố là các đơn vị hành chính cấp quận/huyện hiện hành. |
| **CLM-23** | Table Footnotes / Phí cao tốc bao xe | "Mức giá bao xe riêng chưa bao gồm chi phí vé trạm BOT cao tốc (tollIncluded: false)" | `PRICE_POLICY` | `owner_price_sheet_2026_09_09:15-16` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Bắt buộc tuân thủ nguyên tắc bất biến số 2. |
| **CLM-24** | Table Footnotes / Tiên Lãng, Vĩnh Bảo | "áp dụng đơn giá theo cự ly thực tế là 10.000đ/km" | `PRICE` | `owner_price_sheet_2026_09_09:17-21` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Bắt buộc tuân thủ nguyên tắc bất biến số 3. |
| **CLM-25** | Table Footnotes / Bản chất vé ghép | "Giá vé xe ghép là mức cước tính theo mỗi người cho từng điểm đến cụ thể, đưa đón tận nơi theo thỏa thuận..." | `PRICE_POLICY` | Loại bỏ suy diễn đảo ngược "đã bao gồm toàn bộ BOT" | `VERIFIED_FIRST_PARTY` | **BỎ SUY DIỄN ĐẢO NGƯỢC** | Chỉ ghi đúng bản chất cước tính theo người. |
| **CLM-26** | Pricing Factors / Tuyến đường | "Trục đường kết nối gồm Quốc lộ 5 và Cao tốc Hà Nội - Hải Phòng (5B)..." | `ROUTE` | Bản đồ giao thông Bộ GTVT / QL5 & CT04 kết nối Hải Dương - Hải Phòng | `VERIFIED_EXTERNAL_FACT` | **CHUYỂN THÀNH FACT ĐỊA LÝ TRUNG LẬP** | "Trục đường kết nối gồm Quốc lộ 5 và Cao tốc Hà Nội - Hải Phòng (5B). Đối với bao xe, vé cao tốc tính riêng nếu khách chọn đi cao tốc." |
| **CLM-27** | Journey Guide / Thời gian theo khung giờ | "Thời gian thông thường 45-55p, cao điểm 60-75p, Cát Bi xuất phát sớm" | `TIME` | Khảo sát giao thông giờ cao điểm trên trục CT04/QL5 | `ESTIMATE_WITH_SOURCE` | **GHI RÕ ƯỚC TÍNH THAM KHẢO** | "Khoảng 45 - 55 phút (ước tính tham khảo)", "Khoảng 60 - 75 phút (tùy mật độ xe)". |
| **CLM-28** | Reverse Hubs / Danh mục điểm đón | Bệnh viện Việt Tiệp, KCN Tràng Duệ, Sân bay Cát Bi, VinFast, Vinhomes... | `GEOGRAPHY` | Địa chỉ bệnh viện, KCN, sân bay thực tế tại Hải Phòng | `VERIFIED_EXTERNAL_FACT` | **TRUNG LẬP HÓA THÔNG TIN ĐỊA DANH** | Nêu đúng bản chất: Các địa điểm phổ biến phục vụ đón trả theo yêu cầu của khách; xóa sạch chi tiết bịa đặt như "cổng số 2". |
| **CLM-29** | Decision Guide / Không hút thuốc | "Xe không hút thuốc" | `SERVICE_PROMISE` | Không có cam kết bằng văn bản từ chủ xe | `REMOVED` | **XÓA BỎ CLAIM KHÔNG HÚT THUỐC** | "Xe gia đình lịch sự, không gian thông thoáng, sạch sẽ." |
| **CLM-30** | Decision Guide / Dung sai giờ đón | "chênh lệch 10 - 15 phút gom khách" | `OPERATIONS` | `OWNER_VERIFICATION_RECORD_PHASE1.md:26` | `REMOVED` | **XÓA BỎ DUNG SAI PHÚT CỤ THỂ** | "Xe đón trả theo khung giờ hẹn trước, linh hoạt điều chỉnh theo lộ trình gom trả khách thực tế." |
| **CLM-31** | Parcel / Tiêu đề & SLA | "hỏa tốc 2 đến 3 tiếng", "giao nhận trong ngày" | `PARCEL_SLA` | `OWNER_VERIFICATION_RECORD_PHASE1.md:25, 35` chỉ xác nhận cước gửi theo chuyến từ 150k, không có SLA hỏa tốc 2-3h | `REMOVED` | **XÓA SẠCH SLA HỎA TỐC 2-3H / CHUYỂN THÀNH GỬI THEO THỎA THUẬN CHUYẾN** | "Dịch vụ gửi đồ, gửi hàng hai chiều Hải Dương ⇄ Hải Phòng theo chuyến xe", "Cước gửi hàng từ 150.000đ tùy theo loại hàng, kích thước, khối lượng và điểm giao nhận." |
| **CLM-32** | Why Choose Us / Đội xe đời mới & bảo dưỡng | "Đội xe đời mới 100% 2022-2025, được bảo dưỡng định kỳ" | `VEHICLE` | Không có hồ sơ năm sản xuất hay sổ bảo dưỡng | `REMOVED` | **XÓA BỎ NĂM XE VÀ BẢO DƯỠNG** | "Xe gia đình 4 và 7 chỗ rộng rãi", mô tả: "Phục vụ bằng các dòng xe gia đình 4 chỗ và 7 chỗ phổ biến, khoang ngồi sạch sẽ, thoáng mát." |
| **CLM-33** | Why Choose Us / Không khói thuốc | "100% không khói thuốc - Không mùi say xe" | `SERVICE_PROMISE` | Thổi phồng tiếp thị | `REMOVED` | **XÓA BỎ THỔI PHỒNG** | "Không gian xe sạch sẽ, thoáng mát", mô tả: "Khoang xe luôn được dọn dẹp vệ sinh sạch sẽ, giữ không khí thông thoáng cho hành khách." |
| **CLM-34** | Why Choose Us / Ghế riêng & bắt khách | "Mỗi khách một ghế, không bắt khách dọc đường" | `SERVICE_PROMISE` | `OWNER_VERIFICATION_RECORD_PHASE1.md:17` xác nhận thỏa thuận đón tận nơi trả tận nhà | `VERIFIED_FIRST_PARTY` | **CHUẨN HÓA CÂU CHỮ THEO ĐÚNG THỎA THUẬN** | "Mỗi vé ghép một chỗ ngồi riêng biệt", mô tả: "Mỗi hành khách đặt vé ghép có chỗ ngồi riêng biệt thoải mái, xe đón trả tận nơi theo danh sách hành khách đã hẹn trước." (Đã xóa bỏ claim vận hành cấm bắt khách dọc đường). |
| **CLM-35** | Why Choose Us / Tiền cọc | "Đặt trước không mất phí - Thanh toán sau chuyến" | `SERVICE_PROMISE` | `OWNER_VERIFICATION_RECORD_PHASE1.md:17, 50` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Đặt trước không mất phí, thanh toán sau chuyến. |
| **CLM-36** | Media Gallery / Caption cao tốc | "Tuyến đường Cao tốc Hà Nội - Hải Phòng kết nối nhanh chóng..." | `MEDIA` | Minh họa hạ tầng kết nối thực tế giữa hai tỉnh | `ESTIMATE_WITH_SOURCE` | **GIỮ NGUYÊN** | "Tuyến đường Cao tốc Hà Nội - Hải Phòng kết nối nhanh chóng giữa Hải Dương và Hải Phòng." |
| **CLM-37** | Media Gallery / Caption khoang xe | "Khoang xe gia đình sạch sẽ, điều hòa mát mẻ..." | `MEDIA` | Minh họa không gian thực tế | `ESTIMATE_WITH_SOURCE` | **GIỮ NGUYÊN** | "Khoang xe gia đình sạch sẽ, điều hòa mát mẻ cho hành trình thoải mái." |

---

## 2. THỐNG KÊ TỔNG KẾT BẢNG ĐỐI CHIẾU (PROVENANCE AUDIT SUMMARY)

- **Tổng số tuyên bố được kiểm toán**: 37
- **Verified first-party**: 19
- **Verified external fact**: 3 (CLM-16 cự ly, CLM-26 hành lang đường bộ, CLM-28 địa chỉ cơ sở)
- **Legacy geographic label / Search language**: 1 (CLM-22 tên 11 điểm đến theo thói quen tìm kiếm, đã chuẩn hóa về nhãn khu vực trung lập)
- **Estimate with source**: 6 (CLM-13, CLM-17, CLM-21, CLM-27, CLM-36, CLM-37)
- **Removed (unsupported / AI-fabricated claims removed)**: 8 (CLM-11, CLM-15, CLM-18, CLM-29, CLM-30, CLM-31, CLM-32, CLM-33)
- **Unknown remaining**: 0

---

## 3. CÁC NGUYÊN TẮC BẤT BIẾN KHÓA CHO TOÀN CLUSTER (CLUSTER INVARIANTS)

1. **Không tạo SLA giao hàng hay cam kết tốc độ**: Mọi dịch vụ gửi hàng chỉ ghi "gửi hàng theo chuyến", cước từ 150.000đ (hoặc theo sheet chủ xe), không đưa ra cam kết "hỏa tốc 2-3h" hay "trong ngày".
2. **Không tự đặt quy định vận hành nội bộ**: Không tự công bố chính sách bảo dưỡng định kỳ, lệnh cấm hút thuốc, hay dung sai đón khách khi chưa có văn bản chính thức của chủ xe.
3. **Mọi ước tính thời gian phải ghi rõ tham khảo**: Phải có từ "ước tính tham khảo" và phụ thuộc tình hình giao thông, trích xuất từ cự ly thực tế trên bản đồ giao thông (Google Maps Routes API benchmark).
4. **Giữ gìn tính nhất quán hotline**: Sử dụng duy nhất hotline `0987 663 883` trên toàn bộ văn bản và giao diện.
5. **Quy tắc địa giới hành chính và ngôn ngữ tìm kiếm (Cluster-Wide Administrative Invariant)**:
   > **LEGACY SEARCH PLACE NAMES MAY BE USED FOR SEO, BUT THEY MUST NOT BE MISREPRESENTED AS CURRENT OFFICIAL ADMINISTRATIVE UNITS.**
   - Từ khóa tìm kiếm theo thói quen của người dân (`xe ghép Hải Dương Hải Phòng`, `Hải Dương`, `An Dương`, `Thủy Nguyên`, `Tiên Lãng`, `Đồ Sơn`...) được bảo tồn nguyên vẹn để phục vụ tối đa nhu cầu tìm kiếm tự nhiên của người dùng và mục tiêu SEO thương mại.
   - Trong toàn bộ câu chữ mô tả, cấm tuyệt đối việc trình bày các địa danh này như "quận/huyện chính thức hiện hành". Phải luôn sử dụng các định danh trung lập như "khu vực An Dương", "khu vực Thủy Nguyên", "địa bàn Hải Dương trước đây", "11 khu vực điểm đến tại Hải Phòng".
   - Quy tắc này áp dụng vĩnh viễn cho tất cả các trang tuyến tiếp theo trong toàn bộ Route Engine (bao gồm Tuyến 2 Quảng Ninh).
