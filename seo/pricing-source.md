# NGUỒN DỮ LIỆU GIÁ CHUẨN — PRICING SOURCE OF TRUTH

**Mã nguồn xác thực**: `owner_price_sheet_2026_09_09`  
**Ngày xác thực (Verified Date)**: `2026-09-09`  
**Tình trạng dữ liệu**: `OFFICIAL_CANONICAL_DATASET`  
**Đơn vị vận hành**: Xe Ghép Phong Cách  
**Tệp mã nguồn triển khai**: `data/seo/pricing-engine.ts`

---

## 1. NGUYÊN TẮC BẤT BIẾN TOÀN HỆ THỐNG (GOVERNANCE INVARIANTS)

1. **Một nguồn chân lý duy nhất (Single Source of Truth)**:
   Mọi thành phần giao diện, bảng giá trên trang Money Page, landing page, dữ liệu có cấu trúc Schema và luồng đặt xe phải tham chiếu từ `data/seo/pricing-engine.ts`. Tuyệt đối không hardcode giá rời rạc trên từng trang hay component.
2. **Quy tắc giá bao xe không gồm phí cầu đường (`tollIncluded: false`)**:
   Toàn bộ các chuyến bao xe riêng (4 chỗ, 7 chỗ) đều **CHƯA BAO GỒM VÉ CAO TỐC / CẦU ĐƯỜNG**. Khách hàng thanh toán vé cầu đường thực tế theo hóa đơn trạm thu phí nếu chọn đi cao tốc. Bắt buộc phải có dòng ghi chú này bên dưới mọi bảng giá bao xe.
3. **Quy tắc cước theo kilômét (`PER_KM = 10.000đ/km`)**:
   Đối với các chặng: Tiên Lãng, Vĩnh Bảo, Đông Triều, Mạo Khê khi bao xe:
   - Áp dụng đơn giá chuẩn `10.000đ/km`.
   - **CẤM TUYỆT ĐỐI**: Không được tự ý nhân số km giả định để công bố giá trọn gói (Ví dụ: cấm ghi "Bao xe Tiên Lãng 500.000đ").
   - Hiển thị trên bảng giá dạng: `10.000đ/km (Liên hệ theo lộ trình)`.
4. **Quy tắc các điểm chưa có giá bao xe (`UNKNOWN` / `CONTACT`)**:
   Tại Quảng Ninh, 8 điểm đến: **Cửa Ông, Ao Tiên, Ba Chẽ, Tiên Yên, Đầm Hà, Bình Liêu, Hải Hà, Móng Cái** chưa có giá bao xe cố định trong bảng giá của chủ xe.
   - Trạng thái bắt buộc: `UNKNOWN`.
   - Hiển thị công khai: `Liên hệ`.
   - Không được suy diễn giá hay lấy giá Hạ Long áp cho Móng Cái.

---

## 2. BẢNG GIÁ VẬN HÀNH HẢI DƯƠNG ⇄ HẢI PHÒNG

| Khu vực / Điểm đến | Xe ghép (đ/người) | Bao xe chuyến (đ/chuyến) | Ghi chú vận hành |
|---|---|---|---|
| **Trung tâm Hải Phòng** | 250.000đ | 500.000đ | Đón tận nơi các quận nội thành |
| **An Dương** | 250.000đ | 500.000đ | Tiếp giáp QL5 |
| **An Lão** | 250.000đ | 500.000đ | Gần nút giao cao tốc |
| **Thủy Nguyên** | 300.000đ | 500.000đ – 550.000đ | Tùy vị trí Bắc Sông Cấm / Núi Đèo |
| **Sân bay Cát Bi** | 300.000đ | 550.000đ | Đưa đón tận sảnh ga đi/đến |
| **Kiến Thụy** | 300.000đ – 350.000đ | 550.000đ – 600.000đ | Tùy xã gần / xa |
| **Dương Kinh** | 300.000đ – 350.000đ | 550.000đ – 600.000đ | Tuyến đường Phạm Văn Đồng |
| **Đồ Sơn** | 350.000đ – 400.000đ | 650.000đ – 700.000đ | Khu 1, Khu 2, Đồi Rồng |
| **Cát Hải** | 350.000đ – 400.000đ | 650.000đ – 700.000đ | Đến đầu cầu Tân Vũ / Bến phà Gót |
| **Tiên Lãng** | 300.000đ | **10.000đ/km** | Bao xe tính km thực tế |
| **Vĩnh Bảo** | 300.000đ | **10.000đ/km** | Bao xe tính km thực tế qua QL10 |

*Dịch vụ gửi hàng Hải Phòng: Mức khởi điểm từ 150.000đ/kiện (kế thừa từ OWNER_VERIFICATION_RECORD_PHASE1.md ngày 22/08/2026), thay đổi tùy khối lượng, kích thước và điểm giao nhận. Nguồn 09/09 xác nhận giá hành khách cho từng điểm đến, không chứng minh chi tiết cước gửi hàng cho từng điểm riêng lẻ.*

---

## 3. BẢNG GIÁ VẬN HÀNH HẢI DƯƠNG ⇄ QUẢNG NINH

| Khu vực / Điểm đến | Xe ghép (đ/người) | Bao xe chuyến (đ/chuyến) | Ghi chú vận hành |
|---|---|---|---|
| **Đông Triều** | 250.000đ | **10.000đ/km** | Bao xe tính theo km thực tế |
| **Mạo Khê** | 250.000đ | **10.000đ/km** | Bao xe tính theo km thực tế |
| **Uông Bí** | 300.000đ | 600.000đ | Khu vực nội thị / Chùa Ba Vàng |
| **Quảng Yên** | 350.000đ | 700.000đ | Thị xã Quảng Yên / KCN Sông Khoai |
| **Bãi Cháy** | 350.000đ | 900.000đ | Khu du lịch Bãi Cháy, khách sạn ven biển |
| **Hạ Long (Hòn Gai)** | 400.000đ | 1.000.000đ | Trung tâm Hòn Gai, Cột 5, Cột 8 |
| **Cẩm Phả** | 450.000đ | 1.200.000đ – 1.300.000đ | Trung tâm Cẩm Phả / Cửa Ông |
| **Cửa Ông** | 500.000đ | *Liên hệ* | Chưa có giá bao xe cố định |
| **Vân Đồn** | 500.000đ | 1.500.000đ | Trung tâm Cái Rồng / Cảng Ao Tiên |
| **Ao Tiên** | 500.000đ | *Liên hệ* | Cảng khách quốc tế đi đảo |
| **Ba Chẽ** | 600.000đ | *Liên hệ* | Tuyến vùng cao, xe chạy theo lịch hẹn |
| **Tiên Yên** | 600.000đ | *Liên hệ* | Ngã ba Tiên Yên |
| **Đầm Hà** | 650.000đ | *Liên hệ* | Tuyến miền đông |
| **Bình Liêu** | 650.000đ | *Liên hệ* | Cửa khẩu Hoành Mô / Thị trấn Bình Liêu |
| **Hải Hà** | 650.000đ | *Liên hệ* | KCN Texhong / Thị trấn Quảng Hà |
| **Móng Cái** | 700.000đ | *Liên hệ* | Cửa khẩu Móng Cái / Trà Cổ |

*Dịch vụ gửi hàng Quảng Ninh: Từ 150.000đ – 200.000đ và cao hơn tùy chặng xa gần, tính chất hàng hóa (nguồn: owner_price_sheet_2026_09_09). Bảo toàn tính chất có điều kiện theo chặng, không áp đặt mức cố định 150.000đ đồng nhất cho toàn tỉnh.*

---

## 4. LỊCH SỬ XUNG ĐỘT & QUY TẮC PHÂN ĐỊNH NGUỒN

- **Hạ Long**: Trước ngày 09/09/2026, trang web hiển thị giá ghép xuất phát điểm hành lang ("Từ 250.000đ/người"). Ngày 09/09/2026, chủ xe chốt mức thực tế vận hành là **400.000đ/người** cho trung tâm Hạ Long (Bãi Cháy 350.000đ). Giá bao xe chuẩn hóa thành **1.000.000đ/chuyến** (trước đây chia 4 chỗ 900k, 7 chỗ 1.100k).
- **Cát Bi**: Giá bao xe trước đây để mức xuất phát 600k (4 chỗ), nay xác nhận chính thức **550.000đ/chuyến**.
- **Vé cao tốc**: Khóa quy tắc cứng toàn site là không bao gồm vé cao tốc trong cước bao xe (`tollIncluded: false`).
- **Phạm vi ngoài sheet 09/09 (Hà Nội, Nội Bài, Gia Lộc)**:
  - Tuyến Hà Nội và Sân bay Nội Bài hoàn toàn nằm ngoài phạm vi của `owner_price_sheet_2026_09_09` (status: `OUT_OF_SCOPE / UNKNOWN`).
  - Hệ thống duy trì giá lưu vết hợp đồng cũ (Hà Nội 150.000đ, Nội Bài 300.000đ).
  - Không tồn tại bản ghi route riêng cho Gia Lộc. Tuyệt đối không tự suy diễn các con số truy vấn ngoài luồng (450k, 250k, 270k) thành quy tắc kinh doanh ("phụ thu huyện xa") khi chưa có văn bản xác thực từ chủ xe.
- **Cước gửi hàng toàn hệ thống**: Không có nguồn xác thực nào quy định một mức cước gửi đồ cố định duy nhất cho toàn bộ hệ thống; giá gửi đồ luôn mang tính chất có điều kiện tùy theo khối lượng, kích thước và khoảng cách địa lý.
