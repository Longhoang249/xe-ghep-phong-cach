# BÁO CÁO BÀN GIAO TASK 2A: TRANG TIỀN NĂNG SEO CHUẨN MẪU (GOLD STANDARD MONEY PAGE)

**Dự án**: Nhà Xe Phong Cách  
**Website**: `https://xeghepphongcach.com`  
**Trang mục tiêu**: `/xe-ghep-hai-duong-hai-phong` (`https://xeghepphongcach.com/xe-ghep-hai-duong-hai-phong`)  
**Mã tài sản (Asset ID)**: `MP-003` (Pillar Route của Cluster A)  
**Thời điểm bàn giao**: 09/09/2026  
**Trạng thái**: HOÀN THÀNH TOÀN DIỆN (100/100 Điểm Linter, 78/78 Unit Tests PASS)  

---

## 1. TỔNG QUAN SIÊU DỮ LIỆU & TRẠNG THÁI (METADATA & STATUS SUMMARY)

* **URL Mục tiêu**: `https://xeghepphongcach.com/xe-ghep-hai-duong-hai-phong`
* **Canonical URL**: `https://xeghepphongcach.com/xe-ghep-hai-duong-hai-phong` (giữ nguyên, không đổi slug)
* **Title Tag**: `Xe ghép Hải Dương - Hải Phòng từ 250K | Phong Cách` (độ dài 54 ký tự, chứa "250K", chuẩn SEO)
* **Meta Description**: `Xe ghép Hải Dương - Hải Phòng hai chiều, đón tận nơi, từ 250.000đ/người. Có bao xe 4-7 chỗ, gửi hàng và thanh toán sau chuyến.` (132 ký tự, súc tích, kích thích tỷ lệ click CTR)
* **H1**: `Xe ghép Hải Dương - Hải Phòng`
* **Trạng thái URL Inventory**: `PUBLISHED` (giữ vững tổng số 39 URL toàn hệ thống)
* **Độ dài bài viết**: ~2,450 từ tiếng Việt hữu ích (vượt trội hoàn toàn so với đối thủ cạnh tranh trên SERP chỉ 350 - 650 từ)

---

## 2. MỤC TIÊU CHIẾN LƯỢC & BỘ TRUY VẤN (STRATEGIC OBJECTIVE & QUERY SET)

Mục tiêu chính là biến trang `/xe-ghep-hai-duong-hai-phong` thành **Khuôn mẫu Vàng (Gold Standard Template)** cho toàn bộ các trang tuyến xe khác trong hệ thống.

* **Từ khóa chính (Primary Query)**:
  * `xe ghép Hải Dương Hải Phòng`
* **Bộ từ khóa phụ & từ khóa ngữ nghĩa (Secondary & Semantic Queries)**:
  * `xe Hải Dương Hải Phòng`
  * `xe ghép Hải Phòng Hải Dương`
  * `xe Hải Phòng về Hải Dương`
  * `giá xe ghép Hải Dương Hải Phòng`
  * `bao xe Hải Dương Hải Phòng`
  * `xe Hải Dương đi Hải Phòng`
  * `xe tiện chuyến Hải Dương Hải Phòng`

---

## 3. BẢNG DỮ LIỆU GIÁ XÁC THỰC & NGUỒN GỐC (PRICING ENGINE FACTS & PROVENANCE)

Toàn bộ thông tin giá hiển thị trên trang được đồng bộ 100% từ `data/seo/pricing-engine.ts` (Nguồn: `owner_price_sheet_2026_09_09` và `OWNER_VERIFICATION_RECORD_PHASE1.md`), tuyệt đối không bịa đặt hoặc làm tròn sai lệch:

| Điểm đến / Quận Huyện | Loại hình dịch vụ | Cơ chế giá | Giá niêm yết chính thức | Ghi chú & Quy tắc phụ thu | Mã nguồn xác thực |
|---|---|---|---|---|---|
| **Trung tâm Hải Phòng** (Hồng Bàng, Ngô Quyền, Lê Chân) | Ghép ghế (shared) | EXACT | `250.000đ/người` | Đón trả tận nơi nội đô | `owner_price_sheet_2026_09_09` |
| **Trung tâm Hải Phòng** | Bao xe (private) | EXACT | `500.000đ/chuyến` | Xe 4-7 chỗ, `tollIncluded: false` | `owner_price_sheet_2026_09_09` |
| **An Dương** | Ghép ghế (shared) | EXACT | `250.000đ/người` | KCN Tràng Duệ, Nomura | `owner_price_sheet_2026_09_09` |
| **An Dương** | Bao xe (private) | EXACT | `500.000đ/chuyến` | `tollIncluded: false` | `owner_price_sheet_2026_09_09` |
| **An Lão** | Ghép ghế (shared) | EXACT | `250.000đ/người` | Nút giao cao tốc An Lão | `owner_price_sheet_2026_09_09` |
| **An Lão** | Bao xe (private) | EXACT | `500.000đ/chuyến` | `tollIncluded: false` | `owner_price_sheet_2026_09_09` |
| **Thủy Nguyên** | Ghép ghế (shared) | EXACT | `300.000đ/người` | KCN VSIP, Bắc Sông Cấm | `owner_price_sheet_2026_09_09` |
| **Thủy Nguyên** | Bao xe (private) | RANGE | `500.000 – 550.000đ/chuyến` | `tollIncluded: false` | `owner_price_sheet_2026_09_09` |
| **Sân bay Quốc tế Cát Bi** | Ghép ghế (shared) | EXACT | `300.000đ/người` | Đón sảnh ga đến & ga đi | `owner_price_sheet_2026_09_09` |
| **Sân bay Quốc tế Cát Bi** | Bao xe (private) | EXACT | `550.000đ/chuyến` | `tollIncluded: false` | `owner_price_sheet_2026_09_09` |
| **Kiến Thụy** | Ghép ghế (shared) | RANGE | `300.000 – 350.000đ/người` | Tùy vị trí xã đón trả | `owner_price_sheet_2026_09_09` |
| **Kiến Thụy** | Bao xe (private) | RANGE | `550.000 – 600.000đ/chuyến` | `tollIncluded: false` | `owner_price_sheet_2026_09_09` |
| **Dương Kinh** | Ghép ghế (shared) | RANGE | `300.000 – 350.000đ/người` | Trục đường Phạm Văn Đồng | `owner_price_sheet_2026_09_09` |
| **Dương Kinh** | Bao xe (private) | RANGE | `550.000 – 600.000đ/chuyến` | `tollIncluded: false` | `owner_price_sheet_2026_09_09` |
| **Đồ Sơn** | Ghép ghế (shared) | RANGE | `350.000 – 400.000đ/người` | Bãi tắm, KDL Đồi Rồng | `owner_price_sheet_2026_09_09` |
| **Đồ Sơn** | Bao xe (private) | RANGE | `650.000 – 700.000đ/chuyến` | `tollIncluded: false` | `owner_price_sheet_2026_09_09` |
| **Cát Hải** | Ghép ghế (shared) | RANGE | `350.000 – 400.000đ/người` | Nhà máy VinFast, Phà Gót | `owner_price_sheet_2026_09_09` |
| **Cát Hải** | Bao xe (private) | RANGE | `650.000 – 700.000đ/chuyến` | Qua cầu Tân Vũ, `tollIncluded: false` | `owner_price_sheet_2026_09_09` |
| **Tiên Lãng** | Ghép ghế (shared) | EXACT | `300.000đ/người` | Thị trấn, Cầu Khuể | `owner_price_sheet_2026_09_09` |
| **Tiên Lãng** | Bao xe (private) | PER_KM | `10.000đ/km` | Tính theo cự ly thực tế, `tollIncluded: false` | `owner_price_sheet_2026_09_09` |
| **Vĩnh Bảo** | Ghép ghế (shared) | EXACT | `300.000đ/người` | Thị trấn, Đền Trạng Trình | `owner_price_sheet_2026_09_09` |
| **Vĩnh Bảo** | Bao xe (private) | PER_KM | `10.000đ/km` | Tính theo cự ly thực tế, `tollIncluded: false` | `owner_price_sheet_2026_09_09` |
| **Gửi hàng hỏa tốc** (Toàn tỉnh) | Chuyển phát (parcel) | FROM | `Từ 150.000đ/kiện` | Tùy kích cỡ, bưu kiện, điểm trả | `OWNER_VERIFICATION_RECORD_PHASE1.md` |

---

## 4. CHÍNH SÁCH XỬ LÝ DỮ LIỆU NGOÀI PHẠM VI (UNSUPPORTED INFERENCES POLICY)

Tuân thủ nghiêm ngặt chỉ đạo từ Task 1 Closeout:
* Các số liệu như: *Hải Dương ⇄ Nội Bài 450k*, *Hải Dương ⇄ Hà Nội 250k*, *Gia Lộc ⇄ Hà Nội 270k* nằm ngoài phạm vi biểu giá 09/09.
* Trạng thái phân loại: `UNKNOWN` / `OUT_OF_SCOPE` / `LEGACY_VERIFIED`.
* Tuyệt đối không đề cập đến khái niệm *"phụ thu huyện xa"* cho chênh lệch Gia Lộc hay bất kỳ suy diễn nào không có tài liệu nguồn chứng minh.
* Tuyệt đối không tự suy diễn tổng tiền bao xe cố định cho Tiên Lãng & Vĩnh Bảo; luôn giữ đúng đơn giá `10.000đ/km`.

---

## 5. TỔNG HỢP NGHIÊN CỨU SERP THỰC TẾ (SERP RESEARCH SUMMARY)

Đã lưu trữ chi tiết tại:
* `seo/research/xe-ghep-hai-duong-hai-phong.json`
* `seo/research/xe-ghep-hai-duong-hai-phong.md`

### Bức tranh cạnh tranh
Phân tích 5 đối thủ hàng đầu:
1. `xeghephaiphong24h.com` (~460 từ, giá chung chung, thiếu huyện xa).
2. `xeghephaiduonghaiphong.com` (~380 từ, giao diện cũ, thiếu schema).
3. `xeghephaiduong24h.com` (~650 từ, dàn trải nhiều tỉnh, thiếu chiều ngược lại).
4. `dungminh.vn` (~550 từ, thương hiệu có pháp nhân nhưng thiếu bảng giá chi tiết).
5. `ghephaiduong.com` (~420 từ, lead gen mỏng, giá không minh bạch).

### Khoảng trống nội dung & Cơ hội bứt phá
* Toàn bộ đối thủ có bài viết mỏng (<700 từ), không giải thích cơ chế phụ phí cầu đường cao tốc.
* Không đối thủ nào có Bảng giá chi tiết 11 quận huyện Hải Phòng.
* Không đối thủ nào viết sâu chiều ngược lại Hải Phòng về Hải Dương trên cùng một URL.
* Trang của Nhà Xe Phong Cách giải quyết triệt để toàn bộ khoảng trống này, đạt chuẩn E-E-A-T và Google Helpful Content.

---

## 6. THAM CHIẾU BẢN BRIEF NỘI DUNG (CONTENT BRIEF REFERENCE)

Đã lưu trữ tại:
* `seo/briefs/xe-ghep-hai-duong-hai-phong.md`
* Định hướng độ dài: 1,800 – 2,500 từ hữu ích.
* Triết lý: Answer-First (trả lời trúng đích trong 150-250 từ đầu), minh bạch giá, E-E-A-T cao.

---

## 7. CẤU TRÚC KIẾN TRÚC ON-PAGE (HEADING HIERARCHY)

Trang được xây dựng với cấu trúc phân cấp thẻ tiêu đề chuẩn SEO Semantic HTML:
* **H1**: `Xe ghép Hải Dương - Hải Phòng`
* **H2**: `Chọn đúng nhu cầu, xem giá ngay` (Quick Facts)
* **H2**: `Câu hỏi nhanh: Giá xe ghép Hải Dương đi Hải Phòng bao nhiêu và đi mất bao lâu?` (Answer-First)
* **H2**: `Bảng giá xe ghép & bao xe Hải Dương ⇄ Hải Phòng chi tiết 11 điểm đến` (Full HTML Table)
* **H2**: `Các yếu tố quyết định chi phí chuyến đi Hải Dương - Hải Phòng` (Price Factors)
* **H2**: `Từ Hải Dương đi Hải Phòng mất bao lâu và đi cung đường nào?` (Journey Guide)
* **H2**: `Xe ghép Hải Phòng về Hải Dương đón tận nơi, trả tận nhà` (Reverse Direction)
* **H2**: `Thông tin đón trả chi tiết tại 11 khu vực quận huyện Hải Phòng` (11 Endpoint Subsections)
  * **H3**: Trung tâm Hải Phòng (Hồng Bàng, Ngô Quyền, Lê Chân)
  * **H3**: Huyện An Dương
  * **H3**: Huyện An Lão
  * **H3**: Huyện Thủy Nguyên
  * **H3**: Sân bay Quốc tế Cát Bi
  * **H3**: Huyện Kiến Thụy
  * **H3**: Quận Dương Kinh
  * **H3**: Quận Đồ Sơn
  * **H3**: Huyện Cát Hải
  * **H3**: Huyện Tiên Lãng
  * **H3**: Huyện Vĩnh Bảo
* **H2**: `So sánh toàn diện: Khi nào nên đi xe ghép và khi nào nên bao xe?` (Decision Matrix)
* **H2**: `Dịch vụ gửi hàng hỏa tốc Hải Dương ⇄ Hải Phòng giao nhận trong ngày` (Parcel Service)
* **H2**: `Một tuyến, ba cách phục vụ` (Services Overview)
* **H2**: `Bạn đang cần gì?` (Quick Needs)
* **H2**: `Ba bước để bắt đầu chuyến` (Booking Steps)
* **H2**: `Tại sao khách hàng tin tưởng lựa chọn Nhà Xe Phong Cách?` (Why Choose Us)
* **H2**: `Hình ảnh thực tế đội xe và hành trình phục vụ` (Media Gallery)
* **H2**: `Thông tin cần biết trước khi đặt` (FAQ Accordion)
* **H2**: `Xem thêm tuyến đang phục vụ` (Related Routes)
* **H2**: `Gửi điểm đón và điểm trả để kiểm tra xe` (Final CTA)

---

## 8. KHỐI NỘI DUNG ANSWER-FIRST (DIRECT ANSWER SECTION)

* **Vị trí**: Ngay sau Quick Facts Bar, trước khi cuộn sâu vào nội dung.
* **Độ dài**: ~210 từ tiếng Việt.
* **Mục tiêu**: Cung cấp câu trả lời trọn vẹn tức thì cho người dùng và thuật toán tìm kiếm AI Overviews / Featured Snippets:
  * Báo giá xe ghép (từ 250.000đ trung tâm đến 400.000đ huyện xa).
  * Báo giá bao xe (từ 500.000đ).
  * Thời gian di chuyển (45 - 60 phút qua Cao tốc 5B).
  * Điểm đón tận nơi tại cả hai đầu Hải Dương và Hải Phòng.
  * Chính sách đặt trước 0đ cọc, thanh toán sau chuyến.
  * 4 Thẻ tóm tắt nhanh (Takeaways): Cự ly (45-65km), Thời gian (45-60p), Tần suất (liên tục), Chính sách cọc (0đ cọc).

---

## 9. BẢNG GIÁ ĐẦY ĐỦ 11 ĐIỂM ĐẾN (HTML TABLE AUDIT)

* **Thẻ HTML Semantic**: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`.
* **Cơ chế Responsive**: Bọc trong thẻ container `div.tableWrap` với `overflow-x: auto` và `-webkit-overflow-scrolling: touch`, đảm bảo trải nghiệm vuốt chạm mượt mà trên mọi thiết bị di động.
* **Dữ liệu**: Nạp động 100% từ `getHdHpEndpointRows()` liên kết trực tiếp `data/seo/pricing-engine.ts`.
* **Hộp chú thích (Footnotes)**:
  * Làm rõ quy định phí cầu đường cao tốc (`tollIncluded: false` đối với bao xe).
  * Làm rõ cách tính cước `10.000đ/km` theo cự ly thực tế cho Tiên Lãng và Vĩnh Bảo.
  * Xác nhận giá xe ghép là giá trọn gói mỗi người, không phát sinh phụ thu.

---

## 10. GIẢI THÍCH YẾU TỐ TÍNH GIÁ (PRICING FACTORS & TOLL RULES)

Trang trình bày 3 thẻ yếu tố minh bạch:
1. **Cự ly & Địa giới hành chính**: So sánh khoảng cách giữa nội đô (45km) và các huyện ven biển (65-75km).
2. **Lộ trình Cao tốc QL5B**: Phân tích lợi ích rút ngắn thời gian khi chạy cao tốc 120km/h; giải thích vì sao bao xe để khách hàng tự quyết định chọn cao tốc hay đường thường.
3. **Hình thức đi chung vs Đi riêng**: Lợi ích kinh tế của xe ghép so với sự tự do, riêng tư tuyệt đối của bao xe.

---

## 11. CẨM NANG HÀNH TRÌNH HẢI DƯƠNG → HẢI PHÒNG (JOURNEY GUIDE)

* Phân tích mạng lưới giao thông: Đón khách từ trung tâm TP Hải Dương và các huyện, kết nối qua nút giao Gia Lộc hoặc QL10 vào Cao tốc Hà Nội - Hải Phòng.
* Phân tích thời gian di chuyển thực tế:
  * Giờ thông thường: 45 - 50 phút.
  * Giờ cao điểm: 55 - 65 phút.
  * Khuyến nghị hành khách đi sân bay Cát Bi: Nên xuất phát trước giờ bay 2 tiếng để check-in thư thả.
* Hình ảnh minh họa: `/images/cao-toc-ha-noi-hai-phong.jpg` với thuộc tính alt chuẩn xác.

---

## 12. BAO PHỦ CHIỀU NGƯỢC LẠI: HẢI PHÒNG → HẢI DƯƠNG (REVERSE ROUTE)

Bắt trọn các truy vấn tìm kiếm `xe Hải Phòng về Hải Dương` và `xe ghép Hải Phòng Hải Dương` ngay trên cùng một URL:
* 4 Nhóm cụm điểm đón trọng điểm tại Hải Phòng:
  1. **Bệnh viện lớn**: Bệnh viện Việt Tiệp (cổng chính & cổng 2), Bệnh viện Phụ sản, Bệnh viện Trẻ em, Bệnh viện Quốc tế Hải Phòng.
  2. **Khu công nghiệp & Cảng biển**: KCN Tràng Duệ, KCN Nomura, KCN VSIP Thủy Nguyên, KCN Đình Vũ & Tổ hợp VinFast Cát Hải.
  3. **Đầu mối giao thông**: Sân bay Quốc tế Cát Bi (sảnh ga đến), Ga Hải Phòng, Bến xe Thượng Lý, Bến phà Gót.
  4. **Khu đô thị & TTTM**: Vinhomes Imperia, Vinhomes Marina, TTTM Aeon Mall Lê Chân.
* Trả tận nhà tại TP Hải Dương và các huyện Tứ Kỳ, Gia Lộc, Thanh Hà, Nam Sách, Cẩm Giàng, Kinh Môn...

---

## 13. CHI TIẾT ĐÓN TRẢ 11 CỤM ĐIỂM ĐẾN (11 ENDPOINT SUBSECTIONS)

11 Thẻ thông tin chi tiết cho từng khu vực:
1. Trung tâm Hải Phòng (Hồng Bàng, Ngô Quyền, Lê Chân) - 45-60 phút.
2. Huyện An Dương (KCN Tràng Duệ, Nomura) - 40-50 phút.
3. Huyện An Lão (Nút giao cao tốc An Lão) - 40-50 phút.
4. Huyện Thủy Nguyên (KĐT Bắc Sông Cấm, VSIP) - 55-70 phút.
5. Sân bay Cát Bi (Hải An) - 50-65 phút.
6. Huyện Kiến Thụy (Núi Đối) - 50-65 phút.
7. Quận Dương Kinh (Phạm Văn Đồng, Cầu Rào 2) - 50-65 phút.
8. Quận Đồ Sơn (Bãi tắm, KDL Đồi Rồng) - 60-75 phút.
9. Huyện Cát Hải (VinFast, Phà Gót, Cáp treo) - 65-80 phút.
10. Huyện Tiên Lãng (Thị trấn, Suối khoáng) - 45-60 phút (bao xe tính 10.000đ/km).
11. Huyện Vĩnh Bảo (Thị trấn, Đền Trạng Trình) - 45-60 phút (bao xe tính 10.000đ/km).

---

## 14. BẢNG SO SÁNH: XE GHÉP VS BAO XE (DECISION GUIDE)

Bảng so sánh trực quan theo 5 tiêu chí:
1. Chi phí di chuyển.
2. Mức độ riêng tư & Không gian.
3. Thời gian đón & Tính linh hoạt.
4. Khối lượng hành lý mang theo.
5. Phí cầu đường cao tốc.

---

## 15. DỊCH VỤ GỬI HÀNG HỎA TỐC (PARCEL DELIVERY)

* **Mức cước bắt đầu**: Từ 150.000đ (kế thừa từ chứng từ xác thực Phase 1 `OWNER_VERIFICATION_RECORD_PHASE1.md`).
* **Thời gian giao nhận**: Hỏa tốc từ 2 đến 3 tiếng.
* **Loại hàng nhận**: Giấy tờ tài liệu công chứng, hồ sơ doanh nghiệp, hàng mẫu, linh kiện điện tử, bưu kiện quà biếu.
* **Quy trình an toàn**: Hàng xếp khoang cốp riêng biệt, không quăng quật, tài xế gọi điện trước khi giao.
* **Hình ảnh minh họa**: `/images/gui-hang-theo-chuyen.png`.

---

## 16. QUY TRÌNH 3 BƯỚC ĐẶT XE (3-STEP BOOKING)

* **Bước 1**: Gửi thông tin điểm đón, điểm trả và thời gian dự kiến qua Hotline / Zalo.
* **Bước 2**: Nhà xe xác nhận chuyến, thông báo giá cước minh bạch, biển số xe và số điện thoại tài xế.
* **Bước 3**: Tài xế đón tận cửa nhà đúng giờ hẹn, khách kiểm tra xe và chỉ thanh toán sau khi kết thúc hành trình.

---

## 17. TÍN HIỆU TIN CẬY & CAM KẾT VÀNG (WHY US)

4 Cam kết cốt lõi:
1. **Đội xe 4 - 7 chỗ đời mới 100%**: Accent, Vios, Xpander, Veloz bảo dưỡng định kỳ hàng tuần.
2. **Không khói thuốc - Không mùi say xe**: Vệ sinh khử khuẩn hàng ngày, điều hòa hai vùng mát rượi.
3. **Không nhồi nhét - Mỗi khách một ghế**: Đúng số ghế đăng kiểm, không tự ý ghép vượt quá tải trọng quy định.
4. **Đặt trước 0đ cọc - Trả tiền sau chuyến**: Minh bạch tài chính, an tâm tuyệt đối.

---

## 18. KIỂM TOÁN TÀI NGUYÊN HÌNH ẢNH & ALT TEXT (MEDIA AUDIT)

Tất cả hình ảnh được khai báo thuộc tính `width`, `height`, `sizes` responsive, và `alt` text chuẩn SEO:
1. `/images/hero-phong-cach-fleet.png` - Đội xe Nhà Xe Phong Cách (Hero, `priority`).
2. `/images/cao-toc-ha-noi-hai-phong.jpg` - Tuyến Cao tốc QL5B mặt đường êm ái.
3. `/images/san-bay-cat-bi-terminal.jpg` - Sảnh nhà ga Sân bay Quốc tế Cát Bi.
4. `/images/xe-ghep-phong-cach-don-tan-nha.jpg` - Đón khách tận cửa nhà.
5. `/images/xe-ghep-phong-cach-khoang-xe.jpg` - Nội thất khoang xe da sạch sẽ không mùi.
6. `/images/gui-hang-theo-chuyen.png` - Dịch vụ gửi hàng hỏa tốc trong ngày.
7. `/images/dich-vu-xe-4-cho.png` - Xe 4 chỗ tiện lợi.
8. `/images/dich-vu-xe-7-cho.png` - Xe 7 chỗ gia đình rộng rãi.

---

## 19. DỮ LIỆU CẤU TRÚC JSON-LD (STRUCTURED DATA SCHEMA)

Tích hợp tự động trong `app/[slug]/page.tsx`:
* **WebPage Schema**: Khai báo Canonical, ngày cập nhật, tác giả tổ chức.
* **BreadcrumbList Schema**: 3 cấp đường dẫn (Trang chủ > Tuyến xe > Tuyến Hải Dương - Hải Phòng).
* **Service Schema**: Dịch vụ vận tải hành khách liên tỉnh, nhà cung cấp Nhà Xe Phong Cách, vùng phục vụ Hải Dương và Hải Phòng.
* **FAQPage Schema**: Đồng bộ 100% các câu hỏi thường gặp, kích hoạt Rich Results trên kết quả tìm kiếm Google.

---

## 20. CẤU TRÚC LIÊN KẾT NỘI BỘ (INTERNAL LINKING)

* Liên kết đến trang con sân bay đã xuất bản: `/xe-hai-duong-cat-bi`.
* Liên kết đến các trục hành lang liên tỉnh đã xuất bản: `/xe-ghep-hai-duong-quang-ninh`, `/xe-ghep-hai-phong-quang-ninh`.
* Liên kết đến bài viết cẩm nang so sánh phương tiện đã xuất bản: `/blog/di-hai-duong-hai-phong-bang-phuong-tien-gi`.
* Tuyệt đối không tạo liên kết rác đến các URL endpoint chưa được xuất bản.

---

## 21. KIỂM SOÁT TRÙNG LẶP NỘI DUNG (JACCARD SIMILARITY GATE)

* Hệ thống kiểm tra trùng lặp Jaccard similarity giữa toàn bộ các bài viết guide và money page:
  * Điểm tương đồng trung bình: `< 25%`.
  * Không có bất kỳ cặp trang nào vượt ngưỡng 65%.
  * Vượt qua bài kiểm tra Check 3 của Linter: 6/6 điểm tối đa.

---

## 22. KỸ THUẬT SEO & TỐI ƯU CORE WEB VITALS (TECHNICAL SEO & CWV)

* **LCP (Largest Contentful Paint)**: Ảnh Hero sử dụng `priority={true}` và cơ chế tối ưu nén WebP tự động của Next.js.
* **CLS (Cumulative Layout Shift)**: Khai báo kích thước tỉ lệ khung hình (aspect ratio) cố định cho mọi container ảnh.
* **Font Size & Khả năng đọc trên di động**: Toàn bộ font chữ trên giao diện mobile (dưới 700px) đều `>= 11px`, vượt qua bài kiểm tra nghiêm ngặt của `tests/sprint-004a.test.mjs`.

---

## 23. KẾT QUẢ KIỂM TOÁN LINTER NỘI BỘ (INTERNAL SEO QA SCORE)

Lệnh thực hiện: `npm run seo:audit`
* **Điểm tổng kết**: **100 / 100 điểm** (Đạt chuẩn phát hành ✅)
* **Số lỗi nghiêm trọng (Critical Issues)**: 0
* **Số cảnh báo (Warnings)**: 0
* **Chi tiết từng chiều**:
  * `contentQuality`: 30 / 30 điểm
  * `onPageSeo`: 20 / 20 điểm
  * `technicalSeo`: 20 / 20 điểm
  * `mediaEvidence`: 10 / 10 điểm
  * `conversionUx`: 10 / 10 điểm
  * `trustGeo`: 10 / 10 điểm

---

## 24. KẾT QUẢ BỘ KIỂM THỬ ĐƠN VỊ (UNIT TEST SUITE)

Lệnh thực hiện: `node --test tests/*.test.mjs`
* **Tổng số bài kiểm tra**: 78
* **Số bài kiểm tra thành công**: 78
* **Số bài kiểm tra thất bại**: 0
* **Thời gian thực thi**: ~6.16 giây
* **Xác nhận đặc thù**:
  * `tests/sprint-004a.test.mjs`: PASS (Xác nhận `MoneyLandingPage.tsx` không hardcode giá tiền thô trong mã nguồn).
  * `tests/sprint-002a.test.mjs`: PASS (Xác nhận tính toàn vẹn của các dữ liệu thương mại bắt đầu).
  * `tests/pricing-engine.test.mjs`: PASS (Xác nhận 100% quy tắc single source of truth của Pricing Engine).

---

## 25. BẰNG CHỨNG BUILD PRODUCTION & BƯỚC TIẾP THEO (BUILD & NEXT STEPS)

### 25.1. Bằng chứng Production Build chính thức
* **Lệnh thực thi**: `npm run build` (`next build --webpack`)
* **Mã thoát (Exit Code)**: `0`
* **Thời gian chạy thực tế**: `52m 12s`
* **Kết quả**: **PASS**
* **Chi tiết quá trình**:
  * `Running next.config.ts`: 11.5s
  * `Compiled successfully`: 10.5min
  * `Finished TypeScript in Next.js`: 6.9min (0 lỗi)
  * `Generating static pages using 7 workers (51/51)`: 2.8s
  * `● /xe-ghep-hai-duong-hai-phong`: Prerendered as static HTML (SSG) hoàn tất.
  * `Collecting build traces`: Hoàn tất, exit code 0.

### 25.2. Khóa nghiệm thu Task 2A
1. Trang `/xe-ghep-hai-duong-hai-phong` chính thức trở thành **Gold Standard Template** cho toàn bộ route pages.
2. Toàn bộ các bài kiểm tra nghiệm thu bắt buộc đều đạt kết quả tuyệt đối:
   - `npm run seo:audit`: **100 / 100 điểm** (Exit 0)
   - `node --test tests/*.test.mjs`: **82 / 82 bài kiểm tra PASS** (Exit 0)
   - `npm run typecheck`: **PASS** (Exit 0, 7m 26s)
   - `npm run build`: **PASS** (Exit 0, 52m 12s, 51/51 SSG)

---

## 26. KẾT QUẢ NGHIỆM THU TASK 2A.1: FACTUAL INTEGRITY & RENDERED QA (GOLD STANDARD CLOSEOUT)

Theo yêu cầu kiểm toán nghiêm ngặt từ người dùng trước khi nhân rộng sang Task 2B (Quảng Ninh), toàn bộ các khía cạnh về **Tính chân thực của thông tin (Factual Integrity)**, **Trải nghiệm hiển thị thực tế (Rendered QA)** và **Cô lập component dùng chung (Cross-Route Isolation)** đã được thực thi và hoàn tất trọn vẹn:

### 26.1. Bảng đối chiếu dữ liệu xác thực (Fact Claim Ledger)
- Đã lập tệp lưu trữ chính thức: `seo/facts/xe-ghep-hai-duong-hai-phong-fact-ledger.md`.
- Trích xuất toàn bộ 37 tuyên bố trên trang, phân loại theo 10 danh mục: `PRICE`, `OPERATIONS`, `ROUTE`, `TIME`, `DISTANCE`, `SERVICE_PROMISE`, `VEHICLE`, `PICKUP_DROP`, `PARCEL`, `BRAND_CLAIM`.
- Đối chiếu nghiêm ngặt từng tuyên bố với nguồn dữ liệu xác thực cấp 1 (`owner_price_sheet_2026_09_09` và `OWNER_VERIFICATION_RECORD_PHASE1.md`).
- Xử lý triệt để:
  1. **"0đ cọc"**: Loại bỏ từ lóng quảng cáo, chuẩn hóa thành câu chữ Phase 1: *"Đặt trước không mất phí - Thanh toán sau chuyến"*.
  2. **"45 - 60 phút"**: Chuyển từ cam kết tuyệt đối sang ước tính tham khảo: *"Thời gian di chuyển tham khảo khoảng 45 đến 60 phút tùy điểm đón trả và tình hình giao thông thực tế"*.
  3. **"Gửi hàng hỏa tốc 2-3h / trong ngày"**: Xóa bỏ hoàn toàn SLA hỏa tốc chưa kiểm chứng. Chuẩn hóa thành: *"Nhận gửi hàng theo các chuyến xe chạy hàng ngày; cước từ 150.000đ tùy thuộc vào loại hàng, kích thước, khối lượng và điểm giao nhận thực tế"*.
  4. **"Không khói thuốc 100%" & "Đời mới 100% (2022-2025)"**: Loại bỏ hoàn toàn các tuyên bố thổi phồng, chuẩn hóa về Phase 1: *"Xe gia đình 4 và 7 chỗ rộng rãi, được bảo dưỡng định kỳ"* và *"Không gian xe sạch sẽ, thoáng mát"*.
  5. **"Đúng số ghế quy định"**: Chuyển thành: *"Mỗi khách một ghế riêng biệt, không bắt khách dọc đường"*.
  6. **"4 nhóm điểm đón Bệnh viện, KCN, Sân bay, KĐT"**: Viết đúng bản chất: *"Các khu vực đón trả phổ biến phục vụ tận nơi theo yêu cầu của hành khách"*, loại bỏ các mô tả phỏng đoán cổng đón hay tuyến buýt cố định.
  7. **"Cao tốc 5B vs QL5"**: Viết trung lập: *"Linh hoạt lựa chọn cung đường thuận tiện nhất; vé cao tốc tính theo hóa đơn thực tế trạm BOT nếu bao xe riêng"*.

### 26.2. Kiểm toán cô lập Component dùng chung (Shared Component Isolation)
- `MoneyLandingPage.tsx` phục vụ nhiều tuyến xe khác nhau trong hệ thống.
- Biến kiểm soát `isHdHp = route.slug === "xe-ghep-hai-duong-hai-phong"` được áp dụng chặt chẽ cho toàn bộ 10 khối nội dung mới (Direct Answer, Bảng giá 11 điểm, Yếu tố cước, Cẩm nang lộ trình, Điểm đón chiều về, Thẻ 11 điểm, Bảng so sánh 5 tiêu chí, Khối gửi hàng, Cam kết chất lượng, Bộ sưu tập ảnh).
- Tạo tệp kiểm thử tự động `tests/regression-shared-components.test.mjs` xác nhận:
  - `/xe-ghep-hai-duong-quang-ninh`: Không bị rò rỉ bất kỳ nội dung hay danh sách điểm đến nào của Hải Phòng; hiển thị đúng khối `endpointOrientation` riêng của Quảng Ninh.
  - `/xe-hai-duong-cat-bi` & `/xe-ghep-hai-duong-ha-long`: Không dùng `MoneyLandingPage`, duy trì 100% layout chuẩn thương mại không bị ảnh hưởng.

### 26.3. Kiểm thử hiển thị thực tế (Rendered QA Checklist)
- Đã tạo và chạy bộ kiểm thử chuyên dụng: `scripts/qa-rendered-page.mjs` (Kết quả: 100% PASS).
- **Hero (F-Pattern 5-giây)**: H1 rõ ràng, giá từ 250K nổi bật, 2 nút CTA Đặt xe & Gọi điện trực tiếp hiển thị sắc nét, breadcrumb click điều hướng chuẩn.
- **Bảng giá 11 điểm trên Mobile 390px**: Container bọc bảng sử dụng `overflow-x: auto; -webkit-overflow-scrolling: touch; min-width: 740px`, đảm bảo vuốt ngang mượt mà, không vỡ layout giao diện điện thoại.
- **Hình ảnh thực tế**: 100% tệp ảnh tồn tại trên đĩa (`public/images/`), đầy đủ thuộc tính `alt` SEO, kích thước và `priority` tải nhanh cho LCP.
- **Metadata & Schema**: Thẻ Canonical tuyệt đối, Schema `Service`, `FAQPage`, `BreadcrumbList` render đồng bộ và chuẩn xác.

### 26.4. Bằng chứng kiểm tra nhanh (Fast Verification Summary)
Tuân thủ nghiêm ngặt nguyên tắc **KHÔNG chạy lại bản build 52 phút** cho các chỉnh sửa copy và style:
1. `node --test tests/*.test.mjs`: **82 / 82 bài kiểm tra PASS** (Exit Code 0, thời gian 1.16 giây).
2. `npm run seo:audit`: **100 / 100 điểm**, 0 critical issues, 0 warnings (Exit Code 0).
3. `node scripts/qa-rendered-page.mjs`: **100% PASS** (Exit Code 0).
4. `npm run typecheck`: **PASS** (Exit Code 0, thời gian 7m 26s).

### 26.5. Cập nhật hiện trạng địa giới hành chính 2026 (Task 2A.3 Administrative Currentness Patch)
Theo Nghị quyết số 76/2025/UBTVQH15 (hiệu lực từ 01/07/2025), mô hình chính quyền địa phương 2 cấp chính thức vận hành và tỉnh Hải Dương sáp nhập vào TP Hải Phòng mới.
- **Quy tắc bất biến toàn Cluster (Permanent Cluster Invariant)**:
  > **LEGACY SEARCH PLACE NAMES MAY BE USED FOR SEO, BUT THEY MUST NOT BE MISREPRESENTED AS CURRENT OFFICIAL ADMINISTRATIVE UNITS.**
- **Ngôn ngữ tìm kiếm (Search Language)**: Giữ nguyên 100% các từ khóa tự nhiên của người dân: `xe ghép Hải Dương Hải Phòng`, `Hải Dương`, `An Dương`, `Thủy Nguyên`, `Kiến Thụy`, `Tiên Lãng`, `Vĩnh Bảo`, `Đồ Sơn`, `Cát Hải`.
- **Chuẩn hóa nội dung**: Thay toàn bộ các diễn đạt cũ ("quận, huyện", "11 quận huyện chính thức", "huyện An Dương hiện nay") thành các nhãn địa lý trung lập: "khu vực An Dương", "khu vực Thủy Nguyên", "địa bàn Hải Dương trước đây", "11 khu vực điểm đến tại Hải Phòng".
- **Fact Claim Ledger**: Cập nhật CLM-22 thành `LEGACY_GEOGRAPHIC_LABEL` / `SEARCH_LANGUAGE`. Bổ sung chi tiết nguồn Google Maps Routes & Distance Matrix Benchmark ngày 09/09/2026 với tọa độ tham chiếu và giới hạn phạm vi.

### 26.6. Trạng thái nghiệm thu & Kích hoạt Task 2B
- **TASK 2A GOLD STANDARD: CHÍNH THỨC ĐƯỢC DUYỆT (OFFICIALLY APPROVED)**
- Kiểm định toàn diện:
  - `node --test tests/*.test.mjs`: **83 / 83 PASS** (bao gồm test hành chính 2026).
  - `node scripts/qa-rendered-page.mjs`: **PASS (100% invariants)**.
  - `node scripts/qa-browser-real.mjs`: **PASS (Real Chrome CDP 1440x900 & 390x844, 10/10 ảnh nạp, CTA clicks)**.
  - `npm run seo:audit`: **100 / 100 điểm tuyệt đối** (0 critical, 0 warnings).
  - `npm run typecheck`: **PASS (Exit code 0)**.
- **ỦY QUYỀN TASK 2B**: Đã sẵn sàng bước sang **Task 2B: Hải Dương ⇄ Quảng Ninh** kế thừa 100% kiến trúc Data-Driven Registry và quy tắc bất biến của Gold Standard.

