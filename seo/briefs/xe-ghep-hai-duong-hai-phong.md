# BẢN CONTENT BRIEF: XE GHÉP HẢI DƯƠNG ⇄ HẢI PHÒNG (PHASE 2)

**Trang mục tiêu**: `https://xeghepphongcach.com/xe-ghep-hai-duong-hai-phong`  
**Slug giữ nguyên**: `xe-ghep-hai-duong-hai-phong`  
**Route ID**: `hd-hp`  
**Độ dài mục tiêu**: 1,800 – 2,500 từ hữu ích (vượt trội độ dài 400-600 từ của các đối thủ mỏng trên SERP, tập trung 100% vào giá trị thực tế, không dùng câu rác).  
**Triết lý nội dung**: Answer-First (trả lời trúng đích giá, giờ đón, thời gian di chuyển ngay trong 150-250 từ đầu tiên), minh bạch từng điểm đến huyện xa, tuân thủ Google Helpful Content & E-E-A-T.

---

## 1. MỤC TIÊU VÀ BỘ TỪ KHÓA TRỌNG TÂM

* **Primary Keyword**: `xe ghép Hải Dương Hải Phòng`
* **Secondary Keywords**:
  * `xe Hải Dương Hải Phòng`
  * `xe ghép Hải Phòng Hải Dương`
  * `xe Hải Phòng về Hải Dương`
  * `giá xe ghép Hải Dương Hải Phòng`
  * `bao xe Hải Dương Hải Phòng`
  * `xe Hải Dương đi Hải Phòng`
  * `xe tiện chuyến Hải Dương Hải Phòng`
* **Search Intent**: Giao dịch (Transactional) & Tra cứu thương mại địa phương (Local Commercial Investigation).

---

## 2. NGUỒN SỰ THẬT GIÁ CƯỚC (PRICING ENGINE FACTS)

Toàn bộ thông tin giá cước phải khớp chính xác 100% với `data/seo/pricing-engine.ts` (`hd-hp`):

### Giá Ghép (Shared Seat)
* **Trung tâm Hải Phòng, An Dương, An Lão**: `250.000đ/ghế`
* **Thủy Nguyên, Sân bay Cát Bi, Tiên Lãng, Vĩnh Bảo**: `300.000đ/ghế`
* **Kiến Thụy, Dương Kinh**: `300.000đ – 350.000đ/ghế`
* **Đồ Sơn, Cát Hải**: `350.000đ – 400.000đ/ghế`

### Giá Bao xe (Private Car)
* **Trung tâm Hải Phòng, An Dương, An Lão**: `500.000đ/chuyến`
* **Thủy Nguyên**: `500.000đ – 550.000đ/chuyến`
* **Sân bay Cát Bi**: `550.000đ/chuyến`
* **Kiến Thụy, Dương Kinh**: `550.000đ – 600.000đ/chuyến`
* **Đồ Sơn, Cát Hải**: `650.000đ – 700.000đ/chuyến`
* **Tiên Lãng, Vĩnh Bảo**: `10.000đ/km` (`pricingType: "PER_KM"`, tính theo cự ly thực tế, tuyệt đối không bịa số cố định).

### Quy tắc bất biến (Invariants)
* **Phí cầu đường cao tốc**: Đối với bao xe, `tollIncluded: false` (giá bao xe chưa bao gồm vé cầu đường/cao tốc QL5B).
* **Dịch vụ chuyển phát hàng hóa**: Xuất phát điểm từ `150.000đ` (theo chứng từ Phase 1 `OWNER_VERIFICATION_RECORD_PHASE1.md`), tùy kích thước kiện hàng và địa điểm giao nhận. Không có mức giá phẳng toàn hệ thống.
* **Cảnh báo dữ liệu ngoài phạm vi**: Các thông tin "Nội Bài 450k", "Hà Nội 250k", "Gia Lộc 270k phụ thu huyện xa" là ngoài bảng giá 09/09, cấm suy diễn hoặc đưa vào nội dung trang này.

---

## 3. DANH MỤC 11 THỰC THỂ ĐIỂM ĐẾN (11 DESTINATION ENTITIES)

Trang cần có bảng giá và phân tích cụ thể cho 11 cụm điểm đến thuộc Hải Phòng:
1. **Trung tâm Hải Phòng** (Quận Hồng Bàng, Ngô Quyền, Lê Chân)
2. **An Dương** (KCN Tràng Duệ, KCN Nomura, QL5)
3. **An Lão** (Nút giao cao tốc An Lão, KCN An Lão, Thị trấn An Lão)
4. **Sân bay Quốc tế Cát Bi** (Phục vụ khách bay check-in, bay nội địa & quốc tế)
5. **Thủy Nguyên** (Khu đô thị Bắc Sông Cấm, Trung tâm hành chính mới, Cầu Hoàng Văn Thụ, Bính)
6. **Kiến Thụy** (Thị trấn Núi Đối, các xã ven sông Đa Độ)
7. **Dương Kinh** (Tuyến đường Phạm Văn Đồng, cầu Rào 2, KCN Đồ Sơn)
8. **Đồ Sơn** (Khu du lịch Đồ Sơn, Bến Nghiêng, Khu du lịch quốc tế Đồi Rồng)
9. **Cát Hải** (Tổ hợp nhà máy VinFast, Cảng cửa ngõ quốc tế Lạch Huyện, Bến phà Gót/Ga cáp treo Cát Hải)
10. **Tiên Lãng** (Thị trấn Tiên Lãng, Cầu Khuể, Suối nước nóng Tiên Lãng - tính 10.000đ/km bao xe)
11. **Vĩnh Bảo** (Thị trấn Vĩnh Bảo, QL10, Khu di tích Trạng Trình Nguyễn Bỉnh Khiêm - tính 10.000đ/km bao xe)

---

## 4. CẤU TRÚC ON-PAGE HIERARCHY (H1 - H2 - H3)

* **Breadcrumb**: Trang chủ > Tuyến xe > Xe ghép Hải Dương Hải Phòng
* **Hero Section**:
  * **H1**: Xe Ghép Hải Dương Hải Phòng Đón Tận Nơi: Bảng Giá Chi Tiết 11 Điểm Đến
  * **Quick Facts Bar**: Tần suất (30-60 phút/chuyến), Thời gian di chuyển (45-60 phút cao tốc QL5B), Giá chỉ từ 250.000đ/ghế, Hotline đặt xe 24/7.
* **H2: Câu Trả Lời Nhanh: Giá Xe Ghép Hải Dương Đi Hải Phòng Bao Nhiêu?** (Khối Direct Answer 150-250 từ, giải quyết tức thì truy vấn người dùng, nêu rõ giá ghép từ 250.000đ, bao xe từ 500.000đ).
* **H2: Bảng Giá Xe Ghép & Bao Xe Hải Dương ⇄ Hải Phòng Trọn Gói Mới Nhất**
  * Bảng HTML đầy đủ 11 điểm đến, cột: Điểm đến, Giá ghế ghép, Giá bao xe, Thời gian dự kiến, Ghi chú đón trả.
  * Thiết kế scroll ngang trên mobile, hiển thị rõ ràng cước 10.000đ/km cho Tiên Lãng/Vĩnh Bảo.
* **H2: Yếu Tố Xác Định Chi Phí Chuyến Đi (Minh Bạch Phụ Phí & Cầu Đường)**
  * Cự ly và lộ trình di chuyển (Cao tốc Hà Nội - Hải Phòng QL5B vs QL5 cũ).
  * Quy định về phí cầu đường khi bao xe (chưa bao gồm vé BOT/cao tốc).
  * Quy tắc tính cước cự ly theo km cho Tiên Lãng & Vĩnh Bảo.
* **H2: Cẩm Nang Hành Trình: Từ Hải Dương Đi Hải Phòng Mất Bao Lâu?**
  * Mô tả lộ trình từ TP Hải Dương và các huyện (Tứ Kỳ, Gia Lộc, Cẩm Giàng, Nam Sách...) kết nối vào Cao tốc 5B hoặc QL5A.
  * Thời gian di chuyển thực tế giờ cao điểm và giờ thường.
* **H2: Chiều Ngược Lại: Xe Ghép Hải Phòng Về Hải Dương Đón Tận Nhà**
  * Tối ưu cho truy vấn `xe ghép Hải Phòng Hải Dương` và `xe Hải Phòng về Hải Dương`.
  * Các điểm đón trọng điểm tại Hải Phòng: Sân bay Cát Bi, các bệnh viện lớn (Việt Tiệp, Phụ sản Hải Phòng), các KCN (Tràng Duệ, Nomura, VSIP, Đình Vũ), khu đô thị Vinhomes Imperia, Marina.
* **H2: Chi Tiết Đón Trả Tại 11 Cụm Điểm Đến Hải Phòng** (11 tiểu mục H3 ngắn gọn cho từng điểm).
* **H2: So Sánh Toàn Diện: Khi Nào Nên Đi Xe Ghép Và Khi Nào Nên Bao Xe?**
  * Bảng so sánh 5 tiêu chí: Chi phí, Độ riêng tư, Thời gian đón, Khối lượng hành lý, Tính linh hoạt lộ trình.
* **H2: Dịch Vụ Chuyển Phát Hàng Hóa & Bưu Phẩm Hỏa Tốc Trong Ngày**
  * Mức cước khởi điểm từ 150.000đ, giao nhận tận tay, bảo quản hàng dễ vỡ, tài liệu quan trọng.
* **H2: Quy Trình 3 Bước Đặt Xe Ghép Hải Dương Hải Phòng Siêu Tốc**
  * Bước 1: Liên hệ Hotline/Zalo báo điểm đón và giờ dự kiến.
  * Bước 2: Nhà xe xác nhận chuyến và thông báo tài xế, biển số xe.
  * Bước 3: Đón tận nơi đúng giờ, kiểm tra hành lý và thanh toán linh hoạt.
* **H2: Lý Do Khách Hàng Lựa Chọn Nhà Xe Phong Cách**
  * Cam kết xe đời mới (Accent, Vios, Xpander, Veloz, Fortuner), không hút thuốc, lái xe an toàn, không tự ý ghép quá số ghế, điều hòa 100%.
* **H2: Câu Hỏi Thường Gặp Về Xe Ghép Hải Dương Hải Phòng (FAQ)**
  * 6 - 8 câu hỏi phổ biến nhất (Đặt trước bao lâu, chính sách hủy chuyến, phụ thu hành lý cồng kềnh, xe có chờ đón người thân từ sân bay Cát Bi không...).
* **H2: Các Tuyến Xe Ghép Liên Tỉnh Kết Nối**
  * Liên kết nội bộ ngữ cảnh đến Hải Dương ⇄ Hà Nội, Hải Dương ⇄ Quảng Ninh.

---

## 5. KẾ HOẠCH DỮ LIỆU CẤU TRÚC (STRUCTURED DATA SCHEMA)

Trang sẽ tích hợp đầy đủ JSON-LD chuẩn Google Search:
1. **WebPage**: Canonical URL, headline, description, breadcrumb.
2. **BreadcrumbList**: 3 cấp (Trang chủ > Tuyến xe > Tuyến Hải Dương - Hải Phòng).
3. **Service**: Dịch vụ vận tải hành khách tuyến Hải Dương - Hải Phòng, nhà cung cấp Nhà Xe Phong Cách, bảng giá dịch vụ với phạm vi giá xác thực.
4. **FAQPage**: Tích hợp 6-8 cặp câu hỏi - trả lời thực tế, hỗ trợ hiển thị Rich Snippets trên kết quả tìm kiếm Google.
