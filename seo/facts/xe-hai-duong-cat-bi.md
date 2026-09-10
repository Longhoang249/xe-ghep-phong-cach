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
| **FACT-01** | Giá xe ghép: 300.000đ/người | First-Party Fact | `owner_price_sheet_2026_09_09` | **VERIFIED** | Giá chuẩn hóa theo người, đón tận nơi tại Hải Dương và trả tại khu vực Sân bay Cát Bi. |
| **FACT-02** | Bao xe theo chuyến: 550.000đ/chuyến | First-Party Fact | `owner_price_sheet_2026_09_09` | **VERIFIED** | Giá theo chuyến, không tự chia tách 4 chỗ / 7 chỗ khi nguồn không phân loại. Loại bỏ hoàn toàn giá legacy 600k/750k. |
| **FACT-03** | Vé cầu đường cao tốc: Chưa bao gồm (`tollIncluded: false`) | First-Party Rule | `owner_price_sheet_2026_09_09` & `seo/pricing-source.md` | **VERIFIED** | Áp dụng cho dịch vụ bao xe riêng: khách tự thanh toán vé cao tốc (`tollIncluded: false`). Loại bỏ hoàn toàn nhắc đến "vé sảnh sân bay", "phí sảnh sân bay", "vé vào cổng sảnh" do không có nguồn first-party. |
| **FACT-04** | Dịch vụ hai chiều đón trả tận nơi | First-Party Fact | `OWNER_VERIFICATION_RECORD_PHASE1.md` | **VERIFIED** | Đón tận nhà tại Hải Dương đến Sân bay Cát Bi, và đón từ Cát Bi về tận nhà tại Hải Dương. Lưu ý: Tính đối xứng giá (Reverse price symmetry) ở trạng thái NOT VERIFIED, đã loại bỏ tuyên bố áp dụng đồng bộ giá 2 chiều. |
| **FACT-05** | Chính sách đặt xe: Đặt trước không mất phí, thanh toán sau chuyến | First-Party Fact | `OWNER_VERIFICATION_RECORD_PHASE1.md` | **VERIFIED** | Khóa đúng câu từ thương mại: "Đặt trước không mất phí. Thanh toán sau chuyến." Không diễn giải thành chính sách tiền cọc phức tạp hay "0đ cọc". |
| **FACT-06** | Điểm đón trả sân bay: Khu vực Ga Đi và Ga Đến Sân bay Cát Bi | First-Party Fact | `owner_price_sheet_2026_09_09` | **VERIFIED** | Đưa đón hành khách tại khu vực Ga Đi và Ga Đến tại Sân bay Cát Bi. Loại bỏ mọi cam kết vận hành cứng về sảnh tầng đón trả hay hỗ trợ hành lý riêng biệt. |
| **FACT-07** | Khoảng cách & Thời gian di chuyển: ~50-58 km, ~50-65 phút | External Fact (Estimate) | Google Maps Driving Distance | **ESTIMATE** | Ước tính tham khảo theo bản đồ giao thông trong điều kiện bình thường; ghi chú rõ thay đổi theo khung giờ và mật độ giao thông. |
| **FACT-08** | Tuyến đường di chuyển: Cao tốc Hà Nội - Hải Phòng (nút giao Gia Lộc / QL10) hoặc QL5 | External Fact | Bản đồ giao thông đường bộ | **VERIFIED** | Hai trục đường kết nối chính giữa Hải Dương và Sân bay Cát Bi (đường Lê Hồng Phong / Bùi Viện). |
| **FACT-09** | Gửi hàng ra sân bay Cát Bi: Thỏa thuận theo từng chuyến cụ thể | First-Party Fact | `seo/pricing-source.md` line 46 | **VERIFIED** | Nguồn 09/09 xác nhận giá hành khách cho từng điểm đến, không chứng minh biểu phí gửi hàng cố định cho sân bay. Khách hàng liên hệ tổng đài để thỏa thuận theo tính chất bưu phẩm. |
| **FACT-10** | Hướng dẫn giờ bay: Khách nên cung cấp giờ bay khi đặt xe để được tư vấn giờ đón | Customer Guidance | Hướng dẫn đặt xe an toàn | **GUIDANCE** | Khuyến nghị khách hàng: "Quý khách cung cấp điểm đón/trả tại Sân bay Cát Bi, ngày đi và giờ bay để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp." KHÔNG cam kết khớp giờ bay. |
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
6. **Phí sảnh / vé sảnh sân bay (Airport curb / terminal entry fee)**:  
   *Lý do cấm*: Không có nguồn first-party chứng minh quy định thu hoặc loại trừ phí sảnh sân bay. Quy tắc thương mại duy nhất: Bao xe 550.000đ/chuyến chưa bao gồm vé cầu đường cao tốc.  
   *Thay thế*: Loại bỏ toàn bộ các từ "vé sảnh sân bay", "vé vào cổng sảnh sân bay", "phí sảnh sân bay". Không tự ý bịa thêm chi phí loại trừ.
7. **Cam kết vận hành sân bay cứng & SLA khớp giờ bay (Airport operating promises & flight SLAs)**:  
   *Lý do cấm*: Không có bằng chứng first-party cho các tuyên bố như "trả đúng sảnh ga đi T1 để kịp chuyến", "đón tại sảnh ga đến T1 sau khi máy bay hạ cánh", "hỗ trợ hành lý", "xác nhận xe và tài xế trước giờ đón", "xe và thời gian được sắp xếp theo khung giờ bay".  
   *Thay thế*: Chuyển thành pattern hướng dẫn khách hàng: "Quý khách cung cấp điểm đón/trả tại Sân bay Cát Bi, ngày đi và giờ bay để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp."
8. **Khẳng định tính đối xứng giá cả hai chiều (Reverse price symmetry claim)**:  
   *Lý do cấm*: `NOT VERIFIED`. Biểu giá nguồn ngày 09/09 chỉ niêm yết mức giá chiều đi. Dù tuyến hoạt động hai chiều, không được tự suy diễn giá hai chiều phải giống hệt nhau.  
   *Thay thế*: Loại bỏ tuyên bố "áp dụng đồng bộ cho cả hai chiều". Trình bày bảng giá tham khảo giữa Hải Dương và Cát Bi.

---

### 3. KẾT LUẬN KIỂM DUYỆT FACT GATE

- Tổng số claim trọng yếu đã thẩm định: **11/11 PASSED**
- Số claim chưa được kiểm chứng (UNKNOWN) đưa lên trang: **0**
- Reverse Price Symmetry: **NOT VERIFIED** (đã loại bỏ khỏi public copy)
- Airport Fee Claim: **REMOVED**
- Unsupported Airport Policies: **0 remaining**
- Tình trạng Fact Gate: **APPROVED FOR RELEASE**
