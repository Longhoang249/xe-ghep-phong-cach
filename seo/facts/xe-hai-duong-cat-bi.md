# BẢNG KIỂM SOÁT TÍNH XÁC THỰC DỮ LIỆU — SÂN BAY CÁT BI
## Route: Hải Dương ⇄ Sân bay Cát Bi (`/xe-hai-duong-cat-bi` - MP-004)

**Mã tài liệu**: `FACT-GATE-MP-004`  
**Ngày lập**: 2026-09-09  
**Cơ chế kiểm duyệt**: Lightweight Material Claim Audit (Cổng kiểm soát factual tinh gọn cho Endpoint Money Page)  
**Nguyên tắc bất biến**: `SEARCH INTENT DOES NOT PROVE AN OPERATING POLICY` (Ý định tìm kiếm không cấu thành chính sách vận hành).

---

### 1. BẢNG KIỂM SOÁT TUYÊN BỐ TRỌNG YẾU (MATERIAL FACT AUDIT)

| Mã kiểm soát | Nội dung claim | Phân loại | Nguồn kiểm chứng (Source of Truth) | Trạng thái | Ghi chú & Giới hạn ngôn ngữ |
|---|---|---|---|:---:|---|
| **FACT-01** | Giá xe ghép: 300.000đ/người | First-Party Fact | `owner_price_sheet_2026_09_09` | **VERIFIED** | Giá chuẩn hóa theo người, đón tận nơi tại Hải Dương và trả tại sảnh ga Cát Bi. |
| **FACT-02** | Bao xe theo chuyến: 550.000đ/chuyến | First-Party Fact | `owner_price_sheet_2026_09_09` | **VERIFIED** | Giá theo chuyến, không tự chia tách 4 chỗ / 7 chỗ khi nguồn không phân loại. Loại bỏ hoàn toàn giá legacy 600k/750k. |
| **FACT-03** | Vé cầu đường cao tốc: Chưa bao gồm (`tollIncluded: false`) | First-Party Rule | `owner_price_sheet_2026_09_09` & `seo/pricing-source.md` | **VERIFIED** | Áp dụng cho dịch vụ bao xe riêng: khách tự thanh toán vé cao tốc/vé vào sảnh hoặc thanh toán theo biên lai trạm. |
| **FACT-04** | Dịch vụ hai chiều đón trả tận nơi | First-Party Fact | `OWNER_VERIFICATION_RECORD_PHASE1.md` | **VERIFIED** | Đón tận nhà tại Hải Dương đến Sân bay Cát Bi, và đón từ Cát Bi về tận nhà tại Hải Dương. |
| **FACT-05** | Chính sách đặt xe: Đặt trước không mất phí, thanh toán sau chuyến | First-Party Fact | `OWNER_VERIFICATION_RECORD_PHASE1.md` | **VERIFIED** | Không thu cọc trước chuyến; khách thanh toán trực tiếp cho tài xế sau khi hoàn thành hành trình. |
| **FACT-06** | Điểm đón trả sân bay: Sảnh ga đi (Departures) và Ga đến (Arrivals) Cát Bi | First-Party Fact | `owner_price_sheet_2026_09_09` | **VERIFIED** | Tài xế trả khách tại sảnh ga đi tầng 2 và đón khách tại sảnh ga đến tầng 1 Cát Bi. |
| **FACT-07** | Khoảng cách & Thời gian di chuyển: ~50-58 km, ~50-65 phút | External Fact (Estimate) | Google Maps Driving Distance | **ESTIMATE** | Ước tính tham khảo theo bản đồ giao thông trong điều kiện bình thường; ghi chú rõ thay đổi theo khung giờ và mật độ giao thông. |
| **FACT-08** | Tuyến đường di chuyển: Cao tốc Hà Nội - Hải Phòng (nút giao Gia Lộc / QL10) hoặc QL5 | External Fact | Bản đồ giao thông đường bộ | **VERIFIED** | Hai trục đường kết nối chính giữa Hải Dương và Sân bay Cát Bi (đường Lê Hồng Phong / Bùi Viện). |
| **FACT-09** | Gửi hàng ra sân bay Cát Bi: Thỏa thuận theo từng chuyến cụ thể | First-Party Fact | `seo/pricing-source.md` line 46 | **VERIFIED** | Nguồn 09/09 xác nhận giá hành khách cho từng điểm đến, không chứng minh biểu phí gửi hàng cố định cho sân bay. Khách hàng liên hệ tổng đài để thỏa thuận theo tính chất bưu phẩm. |
| **FACT-10** | Hướng dẫn giờ bay: Khách nên cung cấp giờ bay khi đặt xe để được tư vấn giờ đón | Customer Guidance | Hướng dẫn đặt xe an toàn | **GUIDANCE** | Khuyến nghị khách hàng, KHÔNG tuyên bố chính sách cam kết vận hành (xem mục 2). |
| **FACT-11** | Hướng dẫn hành lý: Báo trước số lượng vali lớn hoặc hàng cồng kềnh | Customer Guidance | Hướng dẫn sắp xếp xe | **GUIDANCE** | Tư vấn để nhà xe bố trí xe có dung tích khoang cốp phù hợp, KHÔNG áp đặt hạn mức 1 vali 1 túi như nội quy cứng. |

---

### 2. DANH SÁCH TUYÊN BỐ BỊ CẤM / LOẠI BỎ (FORBIDDEN / REMOVED CLAIMS)

Các claim sau đây vi phạm nguyên tắc `SEARCH INTENT DOES NOT PROVE AN OPERATING POLICY` và **TUYỆT ĐỐI BỊ LOẠI BỎ KHỎI TOÀN BỘ NỘI DUNG TRANG**:

1. **Cam kết chờ delay chuyến bay miễn phí (Flight delay waiting guarantee)**:  
   *Lý do cấm*: Nhà xe vận hành linh hoạt theo chuyến, không có quy trình bảo lưu xe chờ chuyến bay trễ nhiều giờ vô điều kiện.  
   *Thay thế*: Hướng dẫn khách khi chuyến bay bị delay nên thông báo sớm cho tổng đài để kiểm tra xe tiếp theo phù hợp.
2. **Bảo hiểm / Cam kết bồi thường lỡ chuyến bay (Guaranteed airport arrival / missed-flight compensation)**:  
   *Lý do cấm*: Không có hợp đồng bảo hiểm hoặc cam kết pháp lý bồi thường vé máy bay nếu gặp sự cố giao thông bất khả kháng.  
   *Thay thế*: Tư vấn khách hàng nên xuất phát sớm trước khung giờ làm thủ tục của hãng hàng không.
3. **Quy định cứng hạn mức hành lý "1 vali + 1 balo"**:  
   *Lý do cấm*: Chưa có quy chuẩn vận hành nội bộ cố định; khách có thể mang thêm hành lý nếu báo trước khi bao xe hoặc ghép xe còn chỗ.  
   *Thay thế*: Hướng dẫn khách cung cấp số kiện hành lý khi đặt xe để nhà xe sắp xếp khoang cốp.
4. **Phân loại bao xe 4 chỗ 600k / 7 chỗ 750k**:  
   *Lý do cấm*: Nguồn `owner_price_sheet_2026_09_09` đã chuẩn hóa mức bao xe Cát Bi là **550.000đ/chuyến**, không phân loại 4 chỗ / 7 chỗ. Giá legacy 600k/750k trong routes.ts đã hết hiệu lực.  
   *Thay thế*: Công bố duy nhất mức bao xe theo chuyến 550.000đ/chuyến.
5. **Thời gian tài xế chờ tối đa tại sảnh (Exact driver waiting allowance)**:  
   *Lý do cấm*: Không có quy chế vận hành xác nhận thời gian chờ cụ thể (15 phút, 30 phút).  
   *Thay thế*: Tài xế hẹn giờ đón linh hoạt theo giờ hạ cánh và liên hệ trực tiếp với khách khi máy bay đáp.

---

### 3. KẾT LUẬN KIỂM DUYỆT FACT GATE

- Tổng số claim trọng yếu đã thẩm định: **11/11 PASSED**
- Số claim chưa được kiểm chứng (UNKNOWN) đưa lên trang: **0**
- Tình trạng Fact Gate: **APPROVED FOR IMPLEMENTATION**
