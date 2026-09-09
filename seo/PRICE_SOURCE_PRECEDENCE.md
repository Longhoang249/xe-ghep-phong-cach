# QUY TẮC PHÂN CẤP NGUỒN DỮ LIỆU GIÁ — PRICE SOURCE PRECEDENCE POLICY

**Tài liệu chuẩn hóa chính thức toàn hệ thống**  
**Mã chính sách**: `PRICE-PRECEDENCE-V1`  
**Ngày ban hành**: `2026-09-09`  
**Áp dụng cho**: Toàn bộ hệ thống website Xe Ghép Phong Cách (trang chủ, route pages, money pages, components, schemas, APIs)

---

## 1. THỨ BẬC ƯU TIÊN NGUỒN DỮ LIỆU (SOURCE PRECEDENCE HIERARCHY)

Khi có sự khác biệt hoặc mâu thuẫn giữa các tệp mã nguồn, tài liệu lịch sử hoặc dữ liệu lưu trữ, hệ thống bắt buộc phải giải quyết theo thứ bậc ưu tiên tuyệt đối sau:

```
┌─────────────────────────────────────────────────────────────────────────┐
│ TẬP 1: LATEST VERIFIED ENDPOINT-SPECIFIC SOURCE                         │
│ (Nguồn xác thực điểm đến mới nhất từ chủ xe: owner_price_sheet_2026_09_09) │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Ghi đè cấp dưới)
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ TẬP 2: OLDER CORRIDOR-LEVEL VERIFIED SOURCE                             │
│ (Nguồn xác thực hành lang cấp tuyến trước đó: Phase 1 — 2026-08-22)     │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Ghi đè cấp dưới)
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ TẬP 3: LEGACY IMPLEMENTATION DATA                                       │
│ (Dữ liệu lưu trữ cũ trong code: data/routes.ts pre-DATA-002)             │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (Ghi đè cấp dưới)
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ TẬP 4: UNKNOWN                                                          │
│ (Chưa xác thực / Ngoài phạm vi: hiển thị "Liên hệ", tuyệt đối không suy diễn)│
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. ĐỊNH NGHĨA CHI TIẾT TỪNG TẬP DỮ LIỆU

### Tập 1: LATEST VERIFIED ENDPOINT-SPECIFIC SOURCE (Ưu tiên cao nhất)
- **Nguồn căn cứ**: `owner_price_sheet_2026_09_09` (xác thực ngày 09/09/2026).
- **Phạm vi thẩm quyền**:
  - Toàn bộ 11 điểm đến chính thức của Hải Phòng.
  - Toàn bộ 16 điểm đến chính thức của Quảng Ninh.
- **Quyền lực**:
  - Ghi đè mọi mức giá xuất phát điểm hành lang hoặc giá cũ trước đó cho cùng một điểm đến.
  - Ví dụ: Hạ Long trước đây tạm lấy giá xuất phát hành lang "Từ 250.000đ/người", nhưng nguồn 09/09 quy định rõ trung tâm Hạ Long là **400.000đ/ghế** và bao xe là **1.000.000đ/chuyến**. Mức 400.000đ / 1.000.000đ này có hiệu lực tuyệt đối.

### Tập 2: OLDER CORRIDOR-LEVEL VERIFIED SOURCE (Ưu tiên cấp 2)
- **Nguồn căn cứ**: `OWNER_VERIFICATION_RECORD_PHASE1.md` (xác thực ngày 22/08/2026).
- **Phạm vi thẩm quyền**:
  - Xác nhận mức khởi điểm tối thiểu của hành lang chung (Corridor Starting Price):
    - Hải Dương ⇄ Hải Phòng: từ 250.000đ/người.
    - Hải Dương ⇄ Quảng Ninh: từ 250.000đ/người (tính từ Đông Triều).
  - Xác nhận các nguyên tắc dịch vụ: Đón tận nơi, đặt trước không cọc, thanh toán sau chuyến, hai chiều.
- **Ranh giới**:
  - Các mức giá phân theo loại xe (4 chỗ 900k, 7 chỗ 1.100k) thuộc về hành lang cũ cấp tuyến năm 2026-08-22, chỉ mang tính lưu vết lịch sử (provenance).
  - **KHÔNG ĐƯỢC PHÉP** ghi đè hoặc xung đột với bảng giá endpoint mới 09/09.

### Tập 3: LEGACY IMPLEMENTATION DATA (Ưu tiên cấp 3)
- **Nguồn căn cứ**: Các giá trị khởi tạo trong `data/routes.ts` trước đợt xác thực DATA-002.
- **Phạm vi thẩm quyền**: Chỉ dùng cho mục đích tương thích ngược khi route chưa có biên bản xác thực chính thức từ chủ xe.
- **Ranh giới**: Không được sử dụng làm bằng chứng nghiệp vụ (business evidence). Mọi giá trị lấy từ đây phải được dán nhãn trạng thái `status: UNKNOWN` hoặc `sourceType: REPOSITORY`.

### Tập 4: UNKNOWN (Ngoài phạm vi / Chưa xác thực)
- **Phạm vi**:
  - Các điểm đến xa chưa có giá bao xe trong sheet 09/09 (8 điểm tại Quảng Ninh: Cửa Ông, Ao Tiên, Ba Chẽ, Tiên Yên, Đầm Hà, Bình Liêu, Hải Hà, Móng Cái).
  - Các tuyến đường ngoài phạm vi xác thực 09/09 (Hà Nội, Nội Bài, Gia Lộc...).
- **Quy tắc ứng xử**:
  - Bắt buộc hiển thị: `"Liên hệ"`.
  - Tuyệt đối không tự suy diễn công thức tính cước, không tự nhân số km giả định thành giá trọn gói.

---

## 3. QUY TẮC HIỂN THỊ ĐẶC THÙ CHO TRỤC QUẢNG NINH

### Vấn đề lịch sử:
Bảng giá xác thực `owner_price_sheet_2026_09_09` quy định cước **Bao xe theo chuyến** chung cho từng endpoint (ví dụ: Uông Bí 600k, Quảng Yên 700k, Bãi Cháy 900k, Hạ Long 1.000k, Cẩm Phả 1.200k–1.300k, Vân Đồn 1.500k; Đông Triều/Mạo Khê 10.000đ/km), **hoàn toàn KHÔNG phân tách cột 4 chỗ và 7 chỗ riêng biệt**.

Trong khi đó, dữ liệu lưu vết cũ `OWNER_VERIFICATION_RECORD_PHASE1.md` từng ghi mức hành lang 4 chỗ 900k, 7 chỗ 1.100k.

### Quy tắc chuẩn hóa giao diện công khai (Public UI Rules):
1. **Tuyệt đối không pha trộn (No Mixing)**:
   Nghiêm cấm hiển thị đồng thời `"Bao xe 4 chỗ từ 900k"` và `"Bao xe 7 chỗ từ 1.1m"` trên cùng một trang với bảng giá endpoint hiển thị Uông Bí 600k, Quảng Yên 700k. Điều này gây hiểu nhầm nghiêm trọng cho khách hàng về việc Uông Bí 600k là xe mấy chỗ và tạo xung đột giá vô lý.

2. **Mô hình hiển thị chuẩn hóa cho Quảng Ninh**:
   - **Xe ghép (Shared Ride)**: Lấy từ dataset endpoint chuẩn: `"Từ 250.000đ/người"` (cửa ngõ Đông Triều/Mạo Khê 250k, Uông Bí 300k, Quảng Yên/Bãi Cháy 350k, Hạ Long 400k... chi tiết 16 điểm).
   - **Bao xe (Charter)**: 
     - Nhãn hiển thị: `"Bao xe theo chuyến"`
     - Giá hiển thị: `"Giá theo điểm đến"` hoặc `"Từ 600.000đ/chuyến (tùy điểm đến)"`.
     - Thẻ dịch vụ (Service Cards): Nhãn `"Bao xe theo chuyến"`, giá `"Theo điểm đến (chi tiết bảng giá)"`.
   - **Quick Facts**:
     - Xe ghép: `Từ 250.000đ/người`
     - Bao xe theo chuyến: `Giá theo điểm đến`
     - Gửi hàng: `150.000 – 200.000đ trở lên`
   - **Schema JSON-LD**:
     - `priceRange`: `"250.000đ - 1.500.000đ"` (theo khoảng giá thấp nhất đến cao nhất của bảng 09/09).
     - Không tự bịa thông số 4 chỗ/7 chỗ cho từng endpoint.

---

## 4. QUY TẮC VỀ VÉ CẦU ĐƯỜNG & DỊCH VỤ HÀNG HÓA

### Quy tắc phí cầu đường (Toll Governance):
1. **Bao xe (`tollIncluded: false`)**:
   - Mọi chuyến bao xe riêng đều **chưa bao gồm vé trạm BOT cao tốc**.
   - Khách hàng tự thanh toán tại làn thu phí hoặc gửi tài xế thanh toán theo biên lai thực tế nếu chọn đi cao tốc.
2. **Xe ghép (Không suy diễn ngược)**:
   - Thuộc tính `tollIncluded: false` của bao xe **không đồng nghĩa** với việc vé ghép đã bao gồm BOT trọn gói.
   - Không được tuyên bố `"Vé xe ghép đã bao toàn bộ phí cầu đường BOT"`.
   - Chuẩn hóa định nghĩa vé ghép: *"Giá vé xe ghép là mức cước tính theo mỗi người cho từng điểm đến cụ thể, đưa đón tận nơi theo thỏa thuận trước chuyến đi."*

### Quy tắc dịch vụ bưu phẩm / gửi hàng (Parcel Governance):
- Tuyến Hải Phòng: Mức khởi điểm từ `150.000đ` (theo Phase 1), thay đổi tùy hàng hóa và vị trí giao nhận.
- Tuyến Quảng Ninh: Mức cước có điều kiện trong khoảng `"150.000 – 200.000đ trở lên, tùy điểm đến và hàng hóa cụ thể"` (theo nguồn 09/09). Tuyệt đối không quy đổi thành một mức giá phẳng 150k cho toàn tỉnh.

---

## 5. PHÂN ĐỊNH: MÃ TRIỂN KHAI (CODE) KHÔNG PHẢI LÀ BẰNG CHỨNG (EVIDENCE)

| Khái niệm | Ý nghĩa | Các tệp đại diện | Trách nhiệm |
| :--- | :--- | :--- | :--- |
| **Evidence Source** *(WHY it is trusted)* | Văn bản, biên bản, bảng giá do chủ xe ký duyệt hoặc cung cấp chính thức. | `owner_price_sheet_2026_09_09`<br>`OWNER_VERIFICATION_RECORD_PHASE1.md`<br>`Quyết định sáp nhập địa giới 2025/2026` | Bằng chứng gốc duy nhất chứng minh tính xác thực. |
| **Implementation / Storage** *(WHERE it is stored)* | Các tệp TypeScript/MJS dùng để lập trình hóa và lưu trữ logic. | `data/seo/pricing-engine.ts`<br>`data/routes.ts`<br>`data/seo/route-content-registry.ts` | Chỉ là nơi hiện thực hóa logic, không bao giờ tự thân là bằng chứng. |

*Mọi Fact Ledger hoặc báo cáo audit bắt buộc phải trích dẫn Evidence Source làm cột mốc chân lý, không được viện dẫn tệp code để tự chứng minh cho chính nó.*
