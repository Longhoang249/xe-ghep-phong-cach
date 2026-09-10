# BẢNG KIỂM SOÁT TÍNH XÁC THỰC DỮ LIỆU — TUYẾN HẠ LONG
## Route: Hải Dương ⇄ Hạ Long (`/xe-ghep-hai-duong-ha-long` - Asset MP-019)

**Mã tài liệu**: `FACT-GATE-MP-019`  
**Ngày lập**: 2026-09-10  
**Tuyến cha (Parent Pillar)**: `/xe-ghep-hai-duong-quang-ninh`  
**Nguyên tắc bất biến**: `SEARCH INTENT DOES NOT PROVE AN OPERATING POLICY` (Ý định tìm kiếm du lịch không cấu thành chính sách vận hành của nhà xe).

---

### 1. BẢNG KIỂM SOÁT TUYÊN BỐ TRỌNG YẾU (MATERIAL FACT AUDIT)

| Mã kiểm soát | Hạng mục (Category) | Nội dung tuyên bố (Claim) | Phân loại trạng thái | Nguồn kiểm chứng (Evidence Source) | Ghi chú & Giới hạn ngôn ngữ công khai |
|---|---|---|:---:|---|---|
| **FACT-01** | `PRICE` | Giá xe ghép Hạ Long: 400.000đ/người | `VERIFIED_FIRST_PARTY` | `owner_price_sheet_2026_09_09` | Mức cước tính theo đầu người cho khu vực trung tâm Hạ Long / Hòn Gai, đón trả tận nơi. |
| **FACT-02** | `PRICE` | Giá bao xe theo chuyến Hạ Long: 1.000.000đ/chuyến | `VERIFIED_FIRST_PARTY` | `owner_price_sheet_2026_09_09` | Giá bao xe theo chuyến, không tự chia tách 4 chỗ / 7 chỗ khi nguồn 09/09 không phân loại. Loại bỏ hoàn toàn giá cũ 900k/1.1m. |
| **FACT-03** | `PRICE` | Giá xe ghép Bãi Cháy: 350.000đ/người | `VERIFIED_FIRST_PARTY` | `owner_price_sheet_2026_09_09` | Giá điểm đến độc lập cho khu vực Bãi Cháy; không coi là phụ phí của Hạ Long. |
| **FACT-04** | `PRICE` | Giá bao xe theo chuyến Bãi Cháy: 900.000đ/chuyến | `VERIFIED_FIRST_PARTY` | `owner_price_sheet_2026_09_09` | Giá bao xe theo chuyến cho khu vực Bãi Cháy; không chia tách 4 chỗ / 7 chỗ. |
| **FACT-05** | `TOLL` | Phí cầu đường cao tốc: Chưa bao gồm (`tollIncluded: false`) | `VERIFIED_FIRST_PARTY` | `owner_price_sheet_2026_09_09` & `PRICE_SOURCE_PRECEDENCE.md` | Áp dụng cho dịch vụ bao xe riêng: khách tự thanh toán vé cao tốc hoặc gửi tài xế thanh toán theo thực tế nếu chọn đi cao tốc. Không suy diễn ngược rằng vé ghép bao trọn BOT. |
| **FACT-06** | `PARCEL` | Dịch vụ gửi hàng: khoảng 150.000 – 200.000đ trở lên, tùy điểm đến và hàng hóa cụ thể | `VERIFIED_FIRST_PARTY` | `owner_price_sheet_2026_09_09` | Giữ nguyên tính chất khoảng giá có điều kiện; không áp giá phẳng 150k, không dùng "/kiện", không hứa hẹn SLA giao nhận. |
| **FACT-07** | `SERVICE` | Dịch vụ hai chiều đón trả tận nơi | `VERIFIED_FIRST_PARTY` | `OWNER_VERIFICATION_RECORD_PHASE1.md` | Phục vụ đón trả tận nhà tại Hải Dương và các khu vực tại Hạ Long, Bãi Cháy, Hòn Gai. |
| **FACT-08** | `SERVICE` | Chính sách đặt xe: Đặt trước không mất phí, thanh toán sau chuyến | `VERIFIED_FIRST_PARTY` | `OWNER_VERIFICATION_RECORD_PHASE1.md` | Khóa chính xác câu từ: "Đặt trước không mất phí. Thanh toán sau chuyến." Không diễn giải thành slogan tiếp thị vô căn cứ như "0đ cọc". |
| **FACT-09** | `REVERSE_DIRECTION` | Chiều về Hạ Long ➔ Hải Dương | `VERIFIED_FIRST_PARTY` | `OWNER_VERIFICATION_RECORD_PHASE1.md` | Nhà xe nhận đón khách từ Hạ Long về Hải Dương theo lịch hẹn. Tính đối xứng giá (Reverse price symmetry) ở trạng thái `NOT VERIFIED`, loại bỏ khẳng định "giá hai chiều giống nhau". |
| **FACT-10** | `LOCAL_GEOGRAPHY` | Các thực thể địa lý tại Hạ Long: Bãi Cháy, Hòn Gai, Tuần Châu, Cảng tàu khách quốc tế Hạ Long, Sun World, Bảo tàng Quảng Ninh | `VERIFIED_EXTERNAL_FACT` | Bản đồ địa lý & du lịch Quảng Ninh | Đóng vai trò định hướng tìm kiếm; diễn đạt dưới dạng thông tin điểm đến do khách cung cấp, KHÔNG tuyên bố là các điểm đón cố định cam kết 100%. |
| **FACT-11** | `CUSTOMER_GUIDANCE` | Hướng dẫn cung cấp thông tin chuyến đi | `CUSTOMER_GUIDANCE` | Quy trình đặt xe an toàn | "Khách có thể cung cấp địa chỉ khách sạn, cảng tàu hoặc điểm đến cụ thể khi gửi thông tin chuyến để nhà xe kiểm tra phương án đón trả." |
| **FACT-12** | `TIME/DISTANCE` | Khoảng cách & Thời gian di chuyển: ~75 - 95 km, ~1,5 - 2 giờ (ước tính) | `ESTIMATE_WITH_SOURCE` | Google Maps Driving Distance & Routes Benchmark | Ước tính tham khảo theo lộ trình thông thường (qua QL18 hoặc Cao tốc CT06); ghi chú rõ thời gian phụ thuộc vào tình hình giao thông thực tế. |

---

### 2. DANH SÁCH TUYÊN BỐ BỊ CẤM / LOẠI BỎ (FORBIDDEN / REMOVED CLAIMS)

Tuyệt đối loại bỏ các tuyên bố sau khỏi mã nguồn và nội dung công khai:

1. **Lịch chạy xe cố định hàng ngày ("mỗi tiếng 1 chuyến", "chạy liên tục từ 5h đến 21h")**: Nhà xe vận hành linh hoạt theo thỏa thuận chuyến của khách, không có lịch trình xe buýt cố định.
2. **Cam kết giờ đón chính xác từng phút ("đón sau 15-30 phút")**: Thời gian đón phụ thuộc vào việc sắp xếp lộ trình xe thực tế.
3. **Cam kết chạy thẳng 100% không dừng ("chạy thẳng một mạch không dừng nghỉ")**: Xe ghép cần đưa đón các hành khách cùng hành lang.
4. **Cam kết đón tại sảnh khách sạn / sảnh đón Sun World**: Chỉ nhận thông tin điểm đến do khách cung cấp để tài xế liên hệ trước.
5. **Cam kết khớp giờ phà Tuần Châu hoặc giờ xuất bến tàu du lịch**: Không chịu trách nhiệm hoặc cam kết pháp lý nếu khách lỡ chuyến tàu do sự cố giao thông khách quan.
6. **Bảo hiểm du lịch trọn gói / Đền bù trễ chuyến**: Không có hợp đồng bảo hiểm du lịch bổ sung.
7. **Tuyên bố tiếp thị thổi phồng ("xe đời mới 100%", "không mùi không khói thuốc", "phục vụ 24/7")**: Không có căn cứ kiểm chứng độc lập.
8. **Tuyên bố tính đối xứng giá hai chiều ("giá hai chiều bằng nhau")**: Sheet nguồn 09/09 chỉ niêm yết mức giá chiều đi.
9. **Phân tách cước bao xe thành 4 chỗ 900k / 7 chỗ 1.100k**: Sheet 09/09 đã chuẩn hóa mức bao xe theo chuyến duy nhất là 1.000.000đ/chuyến cho Hạ Long và 900.000đ/chuyến cho Bãi Cháy.

---

### 3. KẾT LUẬN KIỂM DUYỆT FACT GATE

- Tổng số claim trọng yếu đã thẩm định: **12/12 PASSED**
- Số claim chưa được kiểm chứng (UNKNOWN) đưa lên trang: **0**
- Reverse Price Symmetry: **NOT VERIFIED** (đã loại bỏ khỏi public copy)
- Phân tách 4c/7c: **LOẠI BỎ** (thay bằng Bao xe theo chuyến 1.000.000đ)
- Cam kết du lịch vô căn cứ: **0 remaining**
- Tình trạng Fact Gate: **APPROVED FOR RELEASE**
