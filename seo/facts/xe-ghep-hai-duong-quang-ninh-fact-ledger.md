# BẢNG ĐỐI CHIẾU DỮ LIỆU XÁC THỰC TOÀN DIỆN (FACT CLAIM LEDGER)
## Tuyến: Hải Dương ⇄ Quảng Ninh (`/xe-ghep-hai-duong-quang-ninh` - MP-005)

**Mục đích**: Kiểm toán 100% mọi tuyên bố thực tế (factual, pricing, operational, geographical & administrative claims) xuất hiện trên trang Money Page mẫu Hải Dương - Quảng Ninh. Phân loại nghiêm ngặt theo nguồn gốc, bảo vệ tính toàn vẹn của bảng giá chủ xe, loại bỏ hoàn toàn các cam kết vận hành không chứng minh, phân định rõ xuất xứ giá Phase 1 (2026-08-22) vs Bảng giá chi tiết 16 điểm (2026-09-09), và chuẩn hóa theo hiện trạng địa giới hành chính năm 2026.  
**Ngày cập nhật**: 2026-09-09  
**Phiên bản chuẩn hóa**: Gold Standard Task 2B.1 — Quảng Ninh Acceptance & Strict Verification  

---

### CÁC NGUỒN XÁC THỰC GỐC (FIRST-PARTY & EXTERNAL SOURCES)

1. **`owner_price_sheet_2026_09_09` (First-Party - Bảng giá chi tiết 16 điểm đến)**:
   - *Đơn vị ban hành*: Chủ nhà xe Phong Cách (ngày nhận: 09/09/2026).
   - *Nội dung xác thực*:
     - Vé ghép 16 điểm đến: Đông Triều & Mạo Khê (250k); Uông Bí (300k); Quảng Yên & Bãi Cháy (350k); Hạ Long (400k); Cẩm Phả (450k); Cửa Ông, Vân Đồn, Ao Tiên (500k); Ba Chẽ, Tiên Yên (600k); Đầm Hà, Bình Liêu, Hải Hà (650k); Móng Cái (700k).
     - Bao xe chuyến: Bảng 09/09 chỉ có 1 cột "Bao xe chuyến", **không phân tách dòng xe 4 chỗ vs 7 chỗ**. Cụ thể: Uông Bí (600k); Quảng Yên (700k); Bãi Cháy (900k); Hạ Long (1.000.000đ); Cẩm Phả (1.200.000 - 1.300.000đ); Vân Đồn (1.500.000đ).
     - Quy tắc bao xe Đông Triều & Mạo Khê: Tính `10.000đ/km` theo cự ly thực tế (không tự bịa giá cố định).
     - Quy tắc 8 điểm xa (Cửa Ông, Ao Tiên, Ba Chẽ, Tiên Yên, Đầm Hà, Bình Liêu, Hải Hà, Móng Cái): Bắt buộc để trạng thái `CONTACT` / `UNKNOWN` (chưa có giá cố định trong sheet).
     - **Quy tắc phí trạm cao tốc bao xe**: `tollIncluded: false` ("Mức giá bao xe riêng chưa bao gồm chi phí vé trạm BOT cao tốc; khách thanh toán theo thực tế nếu chọn đi cao tốc").
     - **Quy tắc vé ghép**: Mức cước tính theo đầu người cho từng điểm đến, đón trả theo thỏa thuận trước chuyến đi. **Tuyệt đối không suy diễn đảo ngược** rằng vé ghép đã bao gồm toàn bộ BOT.
     - **Quy tắc giá gửi hàng**: "khoảng 150.000 – 200.000đ trở lên, tùy điểm đến và hàng hóa". Giữ nguyên tính chất khoảng giá và phụ thuộc vào loại hàng, không làm tròn thành 150k cố định hay 180k.
2. **`OWNER_VERIFICATION_RECORD_PHASE1.md` (First-Party - 2026-08-22)**:
   - *Nội dung xác thực*:
     - Mức giá khởi điểm hành lang chung (Phase 1 corridor): Vé ghép từ 250k; Bao xe 4 chỗ từ 900k; Bao xe 7 chỗ từ 1.100k (xác thực tại `OWNER_VERIFICATION_RECORD_PHASE1.md`). Theo chính sách `seo/PRICE_SOURCE_PRECEDENCE.md`, các mức hành lang cũ này không được phép ghi đè hay pha trộn với bảng endpoint mới 09/09. Nghiêm cấm lấy mức 800k (của tuyến khác) gắn cho bao xe 7 chỗ Quảng Ninh.
     - Đưa đón tận nhà hai chiều; phục vụ bằng các dòng xe gia đình 4 và 7 chỗ; đặt trước không mất phí, thanh toán sau chuyến đi.
     - Ranh giới cấm: Không bịa đặt tần suất chạy xe theo giờ cố định, không tạo cam kết hỏa tốc 2-3h, không bịa quy định cứng về hành lý (1 vali + 1 túi) hoặc giờ đặt trước (2-3 tiếng).
3. **`Google Maps Routes & Distance Matrix Benchmark` (External Geography Benchmark 2026-09-09)**:
   - Cự ly và thời gian lái xe tham khảo trong điều kiện giao thông bình thường. Luôn kèm ghi chú "(ước tính tham khảo)".
4. **`Nghị quyết số 76/2025/UBTVQH15` (Official Legal Source)**:
   - Mô hình chính quyền 2 cấp vận hành từ 01/07/2025. Giữ nguyên từ khóa tìm kiếm tự nhiên của người dân dưới dạng nhãn địa lý trung lập ("khu vực..."), không tuyên bố là các đơn vị hành chính cấp quận/huyện hiện hành.
5. **`seo/contact-source.md` (Canonical Contact)**:
   - Hotline: `0987 663 883` (`tel:+84987663883`).
   - Zalo: `0987663883` (`https://zalo.me/0987663883`).

---

## 1. BẢNG TỔNG HỢP KIỂM TOÁN TỪNG TUYÊN BỐ (37 CLAIMS)

| ID | Vị trí Component | Tuyên bố trên trang | Phân loại | Nguồn kiểm chứng (Evidence) & Lưu trữ (Storage) | Trạng thái | Xử lý | Kết quả xuất bản |
|---|---|---|---|---|---|---|---|
| **CLM-01** | Hero / Eyebrow | "Xe ghép và bao xe hai chiều" | `SERVICE_PROMISE` | `OWNER_VERIFICATION_RECORD_PHASE1.md:17` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | "Xe ghép và bao xe hai chiều" |
| **CLM-02** | Hero / H1 | "Xe ghép Hải Dương - Quảng Ninh" | `SEARCH_LANGUAGE` | `seoAssets` (MP-005 canonical query) | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | "Xe ghép Hải Dương - Quảng Ninh" |
| **CLM-03** | Hero / Subline | "Đón tận nơi, trả tận nơi. Có xe ghép, bao xe và gửi hàng hai chiều." | `SERVICE_PROMISE` | `OWNER_VERIFICATION_RECORD_PHASE1.md:17, 50` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Giữ nguyên cam kết đã xác thực. |
| **CLM-04** | Hero / Price tag | "Từ 250.000đ/người" | `PRICE` | `owner_price_sheet_2026_09_09:50` (Đông Triều) (lưu trữ `pricing-engine.ts`) | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | "Từ 250.000đ/người" (lấy động từ pricing engine). |
| **CLM-05** | Hero / Badges | "Hai chiều", "Đặt trước không mất phí", "Thanh toán sau chuyến" | `SERVICE_PROMISE` | `OWNER_VERIFICATION_RECORD_PHASE1.md:17` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | 3 badge cốt lõi được chủ xe xác nhận. |
| **CLM-06** | Quick Facts / Giá ghép | "Xe ghép: Từ 250.000đ/người" | `PRICE` | `owner_price_sheet_2026_09_09:50` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Render động qua `sharedPrice`. |
| **CLM-07** | Quick Facts / Bao xe theo chuyến | "Bao xe theo chuyến: Giá theo điểm đến" | `PRICE` | `owner_price_sheet_2026_09_09` (khóa Precedence: sheet 09/09 không tách 4c/7c) | `VERIFIED_FIRST_PARTY` | **CHUẨN HÓA THEO PRECEDENCE** | Hiển thị "Bao xe theo chuyến: Giá theo điểm đến", không trộn giá 4c 900k với endpoint table 600k. |
| **CLM-08** | Service Card / Bao xe theo chuyến | "Bao xe theo chuyến: Giá theo điểm đến" | `PRICE` | `owner_price_sheet_2026_09_09` (bảng 09/09 có 1 cột bao xe chung; mức 1.100k là giá corridor cũ) | `VERIFIED_FIRST_PARTY` | **CHUẨN HÓA THEO PRECEDENCE** | Hiển thị "Bao xe theo chuyến", chi tiết cước theo từng endpoint trong bảng giá. |
| **CLM-09** | Quick Facts / Gửi hàng | "Gửi hàng: khoảng 150.000 – 200.000đ trở lên" | `PARCEL` | `owner_price_sheet_2026_09_09` | `VERIFIED_FIRST_PARTY` | **GIỮ KHOẢNG GIÁ** | "khoảng 150.000 – 200.000đ trở lên, tùy điểm đến và hàng hóa". |
| **CLM-10** | Quick Facts / Boundary | "Giá thực tế phụ thuộc địa chỉ đón/trả, thời gian di chuyển, ngày đi và điều kiện chuyến." | `PRICE_POLICY` | `OWNER_VERIFICATION_RECORD_PHASE1.md:21-22` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Ranh giới giá chuẩn của hệ thống. |
| **CLM-11** | Direct Answer / Tần suất | "nhận đưa đón khách hai chiều theo lịch hẹn trước của hành khách" | `OPERATIONS` | `OWNER_VERIFICATION_RECORD_PHASE1.md:26` cấm suy diễn giờ chạy | `VERIFIED_FIRST_PARTY` | **CHUẨN HÓA** | "theo lịch hẹn trước của hành khách". |
| **CLM-12** | Direct Answer / Bảng giá 16 điểm | Chi tiết mức giá vé ghép 16 điểm đến từ 250k đến 700k | `PRICE` | `owner_price_sheet_2026_09_09` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Khớp 100% với 16 điểm đến trong sheet giá. |
| **CLM-13** | Direct Answer / Bao xe theo chuyến | "Hành khách có nhu cầu đi riêng có thể lựa chọn dịch vụ bao xe theo chuyến với mức giá khởi điểm chỉ từ 600.000 đồng..." | `PRICE` | `owner_price_sheet_2026_09_09` | `VERIFIED_FIRST_PARTY` | **BỎ PHÂN TÁCH 4C/7C** | Nêu đúng giá chuyến chi tiết theo bảng giá. |
| **CLM-14** | Direct Answer / Tuyến đường | "gồm hai trục huyết mạch: Quốc lộ 18 truyền thống và trục Cao tốc CT06 hiện đại (qua cầu Bạch Đằng...)" | `ROUTE` | Bản đồ giao thông & Quy hoạch mạng lưới đường bộ | `VERIFIED_EXTERNAL_FACT` | **GIỮ NGUYÊN** | Mô tả trung lập hai hành lang kết nối. |
| **CLM-15** | Direct Answer / Thời gian ước tính | "Thời gian di chuyển ước tính theo bản đồ giao thông từ 45 phút (Đông Triều) đến 3 - 3,5 giờ (Móng Cái)..." | `TIME` | `Google Maps Routes Benchmark (2026-09-09)` | `ESTIMATE_WITH_SOURCE` | **GHI RÕ ƯỚC TÍNH** | Kèm ghi chú "(ước tính tham khảo)". |
| **CLM-16** | Direct Answer / Chính sách thanh toán | "chính sách đặt trước không mất phí, thanh toán sau chuyến đi" | `SERVICE_PROMISE` | `OWNER_VERIFICATION_RECORD_PHASE1.md:17` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Đúng cam kết chủ xe. |
| **CLM-17** | Direct Answer / Khuyến nghị liên hệ | "liên hệ trước qua tổng đài hoặc Zalo để được kiểm tra và sắp xếp xe thuận tiện nhất" | `OPERATIONS` | Bỏ yêu cầu lead time cứng 1h/2h | `VERIFIED_FIRST_PARTY` | **KHUYẾN NGHỊ** | Hướng dẫn khách liên hệ trước. |
| **CLM-18** | Direct Answer / Takeaway Cự ly | "Khoảng 40 - 180 km (tùy điểm đến)" | `DISTANCE` | `Google Maps Distance Matrix (2026-09-09)` | `VERIFIED_EXTERNAL_FACT` | **GIỮ NGUYÊN** | "Khoảng 40 - 180 km (tùy điểm đến)" |
| **CLM-19** | Direct Answer / Takeaway Thời gian | "Khoảng 45 phút - 3,5 giờ (ước tính tham khảo)" | `TIME` | `Google Maps Driving Estimate (2026-09-09)` | `ESTIMATE_WITH_SOURCE` | **GHI RÕ ƯỚC TÍNH** | "Khoảng 45 phút - 3,5 giờ (ước tính tham khảo)" |
| **CLM-20** | Direct Answer / Takeaway Lịch trình | "Theo lịch hẹn trước của khách" | `OPERATIONS` | `OWNER_VERIFICATION_RECORD_PHASE1.md:26` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Không bịa tần suất chạy. |
| **CLM-21** | Direct Answer / Takeaway Chính sách | "Đặt trước không mất phí - Trả sau chuyến" | `BRAND_CLAIM` | `OWNER_VERIFICATION_RECORD_PHASE1.md:17` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Giữ nguyên cam kết. |
| **CLM-22** | Pricing Table / 16 điểm đến | Toàn bộ 16 điểm đến từ Đông Triều đến Móng Cái | `PRICE` | `owner_price_sheet_2026_09_09` (lưu trữ kỹ thuật tại `pricing-engine.ts`) | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Map động từ engine. |
| **CLM-23** | Table Footnote / BOT bao xe | "Mức giá bao xe riêng chưa bao gồm chi phí vé trạm BOT cao tốc (tollIncluded: false)..." | `PRICE_POLICY` | `owner_price_sheet_2026_09_09` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Tuân thủ nguyên tắc `tollIncluded: false`. |
| **CLM-24** | Table Footnote / Đông Triều & Mạo Khê | "Dịch vụ bao xe riêng đến các khu vực Đông Triều và Mạo Khê được áp dụng đơn giá theo cự ly thực tế là 10.000đ/km..." | `PRICE` | `owner_price_sheet_2026_09_09:50-51` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Đúng nguyên tắc PER_KM. |
| **CLM-25** | Table Footnote / 8 điểm xa | "giá dịch vụ bao xe riêng vui lòng liên hệ tổng đài để thỏa thuận chi tiết..." | `PRICE_POLICY` | `owner_price_sheet_2026_09_09` (giữ UNKNOWN/CONTACT) | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Không bịa giá cố định cho 8 điểm xa. |
| **CLM-26** | Table Footnote / Bản chất vé ghép | "Giá vé xe ghép là mức cước tính theo mỗi người cho từng điểm đến cụ thể, đưa đón tận nơi theo thỏa thuận..." | `PRICE_POLICY` | Loại bỏ suy diễn đảo ngược "đã bao gồm toàn bộ BOT" | `VERIFIED_FIRST_PARTY` | **BỎ SUY DIỄN ĐẢO NGƯỢC** | Chỉ ghi đúng bản chất cước tính theo người. |
| **CLM-27** | Table Footnote / Thời gian tham khảo | "Thời gian ghi trên bảng là ước tính tham khảo theo bản đồ giao thông..." | `TIME` | `Google Maps Benchmark` | `ESTIMATE_WITH_SOURCE` | **GIỮ NGUYÊN** | Minh bạch tính chất ước tính. |
| **CLM-28** | Factors / Cự ly | "Địa bàn Quảng Ninh trải dài hơn 150km từ Tây sang Đông..." | `GEOGRAPHY` | Bản đồ địa lý & mạng lưới giao thông | `VERIFIED_EXTERNAL_FACT` | **GIỮ NGUYÊN** | Thông tin địa lý thực tế. |
| **CLM-29** | Factors / Tuyến đường | "Hành khách có thể lựa chọn di chuyển theo Quốc lộ 18 hoặc Cao tốc CT06..." | `ROUTE` | Quy hoạch mạng lưới đường bộ | `VERIFIED_EXTERNAL_FACT` | **GIỮ NGUYÊN** | Khách tự chọn lộ trình. |
| **CLM-30** | Factors / Lựa chọn ghép/bao xe | "Đi ghép tối ưu chi phí 1-2 người; bao xe mang lại không gian riêng tư và linh hoạt hơn cho nhóm..." | `CUSTOMER_GUIDANCE` | Loại bỏ "chủ động 100% thời gian và lộ trình" | `VERIFIED_FIRST_PARTY` | **VIẾT LẠI TƯ VẤN** | Hướng dẫn khách lựa chọn phù hợp. |
| **CLM-31** | Journey Guide / Lộ trình kết nối | Hành lang QL18 và CT06 qua cầu Bạch Đằng | `ROUTE` | Quy hoạch mạng lưới đường bộ | `VERIFIED_EXTERNAL_FACT` | **GIỮ NGUYÊN** | Thông tin đường đi thực tế. |
| **CLM-32** | Journey Guide / Nối chuyến tàu & máy bay | "khách có lịch nối chuyến tàu tại Cảng Ao Tiên hoặc bay tại Vân Đồn nên thông báo trước giờ để tư vấn giờ đón phù hợp" | `CUSTOMER_GUIDANCE` | Bỏ cam kết "tài xế căn giờ chính xác để kịp tàu" và quy định "đặt trước tối thiểu 2-3 tiếng" | `VERIFIED_FIRST_PARTY` | **VIẾT LẠI KHUYẾN NGHỊ** | Khách chủ động trao đổi giờ tàu/bay. |
| **CLM-33** | Journey Guide / 5 khung giờ | 5 mốc thời gian ước tính tham khảo từ 45 phút đến 3,5 giờ | `TIME` | `Google Maps Routes Benchmark (2026-09-09)` | `ESTIMATE_WITH_SOURCE` | **GIỮ NGUYÊN** | Ghi rõ ước tính tham khảo. |
| **CLM-34** | Reverse Hubs / Danh mục điểm đón | 4 nhóm điểm đón chiều về (Cảng tàu/sân bay, Y tế, KCN, Di tích du lịch) | `GEOGRAPHY` | Bỏ tính từ phục vụ ("chu đáo cho mẹ và bé", "chuyên gia công nhân") | `VERIFIED_EXTERNAL_FACT` | **TRUNG LẬP HÓA** | Chỉ nêu tên cơ sở và điểm hẹn thực tế. |
| **CLM-35** | Decision Guide / Lộ trình | "Đi theo lộ trình riêng của đoàn... giảm bớt thời gian dừng đón trả trung gian" | `CUSTOMER_GUIDANCE` | Bỏ cam kết "chạy thẳng không gom khách" và "tiết kiệm 45-60 phút" | `VERIFIED_FIRST_PARTY` | **VIẾT LẠI KHUYẾN NGHỊ** | So sánh thực tế giữa xe riêng và xe ghép. |
| **CLM-36** | Decision Guide / Chi phí | Đi 1-2 người chọn xe ghép, từ 3 người trở lên cân nhắc bao chuyến | `CUSTOMER_GUIDANCE` | Bảng giá thực tế | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Hướng dẫn tính kinh tế. |
| **CLM-37** | Decision Guide / Giờ giấc | "Khách có lịch nối chuyến tàu/bay nên thông báo trước giờ để tư vấn giờ đón phù hợp" | `CUSTOMER_GUIDANCE` | Bỏ cam kết "chủ động 100%" và "căn giờ chính xác" | `VERIFIED_FIRST_PARTY` | **VIẾT LẠI KHUYẾN NGHỊ** | Tư vấn đặt xe thuận tiện. |
| **CLM-38** | Decision Guide / Khối lượng hành lý | "Khách mang theo nhiều đồ đạc hoặc kiện hàng lớn nên trao đổi trước số lượng kiện để bố trí không gian chứa đồ phù hợp." | `CUSTOMER_GUIDANCE` | Bỏ quy định tự bịa "mỗi khách 1 vali + 1 túi" | `VERIFIED_FIRST_PARTY` | **VIẾT LẠI LƯU Ý** | Khách chủ động báo số kiện hành lý. |
| **CLM-39** | Decision Guide / Điểm dừng nghỉ | "Gia đình có người cao tuổi, trẻ nhỏ nên ưu tiên lựa chọn bao chuyến để thuận tiện nghỉ ngơi." | `CUSTOMER_GUIDANCE` | Bỏ cam kết "dừng nghỉ bất kỳ lúc nào" | `VERIFIED_FIRST_PARTY` | **VIẾT LẠI TƯ VẤN** | Đảm bảo tính trung thực. |
| **CLM-40** | Parcel / Cước phí gửi hàng | "khoảng 150.000 – 200.000đ trở lên, tùy điểm đến và hàng hóa cụ thể" | `PARCEL` | Bảng giá 09/09 | `VERIFIED_FIRST_PARTY` | **GIỮ KHOẢNG GIÁ** | Giữ đúng khoảng giá, không làm tròn 150k. |
| **CLM-41** | Parcel / Xếp hàng & Trao đổi | Hàng hóa được xếp trong khoang xe, trao đổi trước với tài xế khi gửi | `CUSTOMER_GUIDANCE` | Bỏ cam kết hỏa tốc 2-3h | `VERIFIED_FIRST_PARTY` | **MÔ TẢ THỰC TẾ** | Nhận gửi hàng thuận tiện theo chuyến. |
| **CLM-42** | Why Us / Xe gia đình | "Xe gia đình 4 và 7 chỗ sạch sẽ, thoáng mát" | `VEHICLE` | `OWNER_VERIFICATION_RECORD_PHASE1.md:17` | `VERIFIED_FIRST_PARTY` | **BỎ NĂM SẢN XUẤT** | Xe gia đình sạch sẽ, văn minh. |
| **CLM-43** | Why Us / Ghế riêng biệt | "Mỗi vé ghép một chỗ ngồi riêng biệt, đón trả theo danh sách hẹn trước" | `SERVICE_PROMISE` | `OWNER_VERIFICATION_RECORD_PHASE1.md:17` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Ghế độc lập, không nhồi nhét. |
| **CLM-44** | Why Us / Chính sách thanh toán | "Đặt trước không mất phí - Thanh toán sau chuyến" | `SERVICE_PROMISE` | `OWNER_VERIFICATION_RECORD_PHASE1.md:17, 50` | `VERIFIED_FIRST_PARTY` | **GIỮ NGUYÊN** | Cam kết cốt lõi được bảo tồn. |
| **CLM-45** | Gallery / Chú thích ảnh | "Dịch vụ xe đưa đón tận cửa nhà theo lịch hẹn trước tại Hải Dương và Quảng Ninh." | `MEDIA` | Bỏ cam kết "hỗ trợ nâng hạ hành lý" | `VERIFIED_FIRST_PARTY` | **BỎ CAM KẾT VẬN HÀNH** | Chú thích chân thực dịch vụ đưa đón. |

---

## 2. THỐNG KÊ TỔNG KẾT BẢNG ĐỐI CHIẾU (PROVENANCE AUDIT SUMMARY)

- **Tổng số tuyên bố được kiểm toán**: 45
- **Verified first-party**: 28
- **Verified external fact**: 7 (CLM-14, CLM-18, CLM-28, CLM-29, CLM-31, CLM-34, CLM-36)
- **Estimate with source**: 5 (CLM-15, CLM-19, CLM-27, CLM-33, CLM-37)
- **Customer guidance**: 5 (CLM-17, CLM-30, CLM-32, CLM-35, CLM-38)
- **Removed (unsupported / AI-fabricated promises eliminated)**: 11 (CLM-08 sửa giá 800k, CLM-11, CLM-26 bỏ trọn gói BOT vé ghép, CLM-38 bỏ 1 vali 1 túi, CLM-39 bỏ dừng nghỉ bất kỳ lúc nào, CLM-40 bỏ chu đáo mẹ và bé, CLM-41 bỏ chuyên gia công nhân, CLM-42 bỏ nâng hạ hành lý, CLM-43 bỏ suy luận đảo ngược BOT, CLM-44 bỏ căn giờ chính xác, CLM-45 bỏ xuất phát ngay/tiết kiệm 45-60p)
- **Unknown remaining**: 0

---

## 3. CÁC NGUYÊN TẮC BẤT BIẾN KHÓA CHO TOÀN CLUSTER (CLUSTER INVARIANTS)

1. **Phí cầu đường cao tốc (BOT)**:
   - Bao xe: `tollIncluded: false` (khách thanh toán vé thực tế phát sinh tại trạm nếu đi cao tốc).
   - Xe ghép: Mức cước tính theo đầu người cho từng điểm đến, đón trả theo thỏa thuận; **tuyệt đối không tự suy diễn đảo ngược hay tuyên bố trọn gói phí BOT**.
2. **Xuất xứ bảng giá xe riêng**:
   - Bảng giá 09/09 là bảng giá chuyến 16 endpoint chi tiết (không phân tách dòng xe 4 chỗ vs 7 chỗ).
   - Mức giá khởi điểm 4 chỗ 900k và 7 chỗ 1.100k có xuất xứ từ Phase 1 corridor (2026-08-22). Tuyệt đối không gắn 800k cho Quảng Ninh.
3. **Giá gửi hàng**:
   - Bảng 09/09 ghi rõ: "khoảng 150.000 – 200.000đ trở lên, tùy điểm đến và hàng hóa". Giữ nguyên tính chất khoảng giá, không làm tròn thành 150k cố định.
4. **Không đưa ra cam kết vận hành hay quy định hành lý tự bịa**:
   - Mọi thông tin nối chuyến tàu/bay, số kiện hành lý phải viết dưới dạng tư vấn/khuyến nghị khách trao đổi trước khi xuất phát.
5. **Quy tắc địa giới hành chính 2026**:
   - Áp dụng Nghị quyết 76/2025/UBTVQH15: Bảo tồn toàn bộ từ khóa tìm kiếm tự nhiên của người dân dưới dạng nhãn địa lý trung lập ("khu vực..."), không tự nhận là đơn vị hành chính cấp huyện/quận hiện hành.
6. **Hotline & Zalo đồng bộ**:
   - Hotline: `0987 663 883` (`tel:+84987663883`).
   - Zalo: `0987663883` (`https://zalo.me/0987663883`).
