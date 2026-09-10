# BẢNG KIỂM SOÁT TÍNH XÁC THỰC DỮ LIỆU — TUYẾN VÂN ĐỒN / CẢNG AO TIÊN
## Route: Hải Dương ⇄ Vân Đồn / Cảng Ao Tiên (`/xe-ghep-hai-duong-van-don` - Asset MP-020)

**Mã tài liệu**: `FACT-GATE-MP-020`  
**Ngày lập**: 2026-09-10  
**Tuyến cha (Parent Pillar)**: `/xe-ghep-hai-duong-quang-ninh`  
**Nguyên tắc bất biến**: `ROAD TRANSPORT BOUNDARY & SEARCH INTENT DOES NOT PROVE AN OPERATING POLICY` (Nhà xe chỉ vận tải đường bộ đến Cảng Ao Tiên / Vân Đồn; ý định tìm kiếm đi đảo không cấu thành cam kết vận hành hay đảm bảo giờ tàu).

---

### 1. BẢNG KIỂM SOÁT TUYÊN BỐ TRỌNG YẾU (MATERIAL FACT AUDIT)

| Mã kiểm soát | Hạng mục (Category) | Nội dung tuyên bố (Claim) | Phân loại trạng thái | Nguồn kiểm chứng (Evidence Source) | Ghi chú & Giới hạn ngôn ngữ công khai |
|---|---|---|:---:|---|---|
| **FACT-01** | `PRICE` | Giá xe ghép Vân Đồn: 500.000đ/người | `VERIFIED_FIRST_PARTY` | `owner_price_sheet_2026_09_09` | Mức cước tính theo đầu người cho khu vực huyện Vân Đồn, đón trả tận nơi. |
| **FACT-02** | `PRICE` | Giá bao xe theo chuyến Vân Đồn: 1.500.000đ/chuyến | `VERIFIED_FIRST_PARTY` | `owner_price_sheet_2026_09_09` | Giá bao xe theo chuyến, không tự chia tách 4 chỗ / 7 chỗ khi nguồn 09/09 không phân loại. |
| **FACT-03** | `PRICE` | Giá xe ghép Cảng Ao Tiên: 500.000đ/người | `VERIFIED_FIRST_PARTY` | `owner_price_sheet_2026_09_09` | Mức cước tính theo đầu người đưa đón đến sảnh nhà ga Cảng tàu quốc tế Ao Tiên. |
| **FACT-04** | `PRICE` | Giá bao xe Cảng Ao Tiên: Liên hệ xác nhận theo điểm đón, điểm trả và chuyến thực tế | `VERIFIED_FIRST_PARTY` | `owner_price_sheet_2026_09_09` | Nguồn 09/09 chưa công bố giá bao xe phẳng cho Cảng Ao Tiên; ở trạng thái `CONTACT`/`UNKNOWN`. |
| **FACT-05** | `TOLL` | Phí cầu đường cao tốc: Chưa bao gồm (`tollIncluded: false`) | `VERIFIED_FIRST_PARTY` | `owner_price_sheet_2026_09_09` & `PRICE_SOURCE_PRECEDENCE.md` | Áp dụng cho dịch vụ bao xe riêng: cước 1.500.000đ chưa gồm vé trạm BOT cao tốc. Khách tự thanh toán hoặc gửi tài xế thanh toán theo biên lai thực tế. |
| **FACT-06** | `PARCEL` | Dịch vụ gửi hàng: Liên hệ xác nhận theo điểm đón, điểm trả và kiện hàng thực tế | `VERIFIED_FIRST_PARTY` | `owner_price_sheet_2026_09_09` | Tuyến Vân Đồn chưa có biểu giá gửi hàng cố định; dùng câu chữ liên hệ xác nhận trung tính. |
| **FACT-07** | `SERVICE` | Dịch vụ hai chiều đón trả tận nơi | `VERIFIED_FIRST_PARTY` | `OWNER_VERIFICATION_RECORD_PHASE1.md` | Phục vụ đón trả tận nhà tại Hải Dương và các xã thuộc huyện Vân Đồn hoặc sảnh Cảng Ao Tiên. |
| **FACT-08** | `SERVICE` | Chính sách đặt xe: Đặt trước không mất phí, thanh toán sau chuyến | `VERIFIED_FIRST_PARTY` | `OWNER_VERIFICATION_RECORD_PHASE1.md` | Khóa chính xác câu từ: "Đặt trước không mất phí. Thanh toán sau chuyến." Không dùng "0đ cọc". |
| **FACT-09** | `SERVICE_BOUNDARY` | Giới hạn vận chuyển đường bộ (Road transport only) | `VERIFIED_FIRST_PARTY` | Năng lực vận hành thực tế | Nhà Xe Phong Cách chỉ cung cấp dịch vụ xe ô tô đường bộ đến Vân Đồn / Cảng Ao Tiên; KHÔNG vận hành tàu cao tốc và KHÔNG bán tour trọn gói sang Cô Tô, Quan Lạn. |
| **FACT-10** | `REVERSE_DIRECTION` | Chiều về Vân Đồn / Cảng Ao Tiên ➔ Hải Dương | `VERIFIED_FIRST_PARTY` | `OWNER_VERIFICATION_RECORD_PHASE1.md` | Nhà xe nhận đón khách từ Cảng Ao Tiên / Vân Đồn về Hải Dương theo lịch hẹn. Reverse price symmetry ở trạng thái `NOT VERIFIED`. |
| **FACT-11** | `CUSTOMER_GUIDANCE` | Hướng dẫn kết nối giờ tàu cao tốc ra đảo | `CUSTOMER_GUIDANCE` | Quy trình đặt xe an toàn | "Khách đi Cảng Ao Tiên để tiếp tục hành trình ra Cô Tô, Quan Lạn nên cung cấp giờ tàu dự kiến khi đặt xe để nhà xe kiểm tra chuyến phù hợp." |
| **FACT-12** | `LOCAL_GEOGRAPHY` | Các thực thể địa lý tại Vân Đồn: Cảng quốc tế Ao Tiên, Cảng Cái Rồng, Chùa Cái Bầu, Bãi Dài, Sân bay Quốc tế Vân Đồn (VDO), Thị trấn Cái Rồng | `VERIFIED_EXTERNAL_FACT` | Bản đồ địa lý & du lịch huyện Vân Đồn | Đóng vai trò định hướng tìm kiếm và mô tả nhu cầu của khách; KHÔNG tuyên bố mọi điểm đều có xe thường trực 24/7. |
| **FACT-13** | `TIME/DISTANCE` | Khoảng cách & Thời gian di chuyển: ~125 - 145 km, ~2 - 2,5 giờ (ước tính) | `ESTIMATE_WITH_SOURCE` | Google Maps Driving Distance qua Cao tốc CT06 | Ước tính tham khảo khi xe di chuyển trên tuyến cao tốc; thời gian thực tế phụ thuộc giao thông và điểm đón trả. |

---

### 2. DANH SÁCH TUYÊN BỐ BỊ CẤM / LOẠI BỎ (FORBIDDEN / REMOVED CLAIMS)

Tuyệt đối loại bỏ các tuyên bố sau khỏi mã nguồn và nội dung công khai:

1. **Cam kết kịp giờ tàu cao tốc / Đảm bảo 100% không lỡ tàu ("cam kết kịp tàu", "đảm bảo giờ tàu")**: Nhà xe chỉ cung cấp tư vấn giờ đón đường bộ theo thông tin khách cung cấp; không cam kết pháp lý hoặc đền bù lỡ chuyến tàu do sự cố giao thông khách quan.
2. **Cung cấp dịch vụ tàu biển trọn gói ("vé tàu cao tốc Cô Tô", "tour trọn gói đi Quan Lạn")**: Phong Cách chỉ vận hành xe ô tô đường bộ, không kinh doanh vận tải đường thủy.
3. **Lịch chạy xe cố định hàng ngày ("mỗi tiếng một chuyến", "chạy liên tục từ 4h sáng")**: Nhà xe vận hành linh hoạt theo chuyến đặt trước.
4. **Cam kết giờ đón chính xác từng phút ("đón sau 15 phút", "xe chờ sẵn ở bến tàu")**: Lịch đón cần được điều phối và xác nhận trước.
5. **Tuyên bố tiếp thị thổi phồng ("xe đời mới 100%", "phục vụ 24/7", "0đ cọc")**: Không có căn cứ kiểm chứng độc lập; chỉ dùng câu từ chuẩn hóa.
6. **Tuyên bố tính đối xứng giá hai chiều ("giá hai chiều luôn bằng nhau")**: Sheet nguồn 09/09 chỉ niêm yết mức giá chiều đi.
7. **Phân tách cước bao xe thành 4 chỗ / 7 chỗ**: Sheet 09/09 đã chuẩn hóa mức bao xe theo chuyến duy nhất là 1.500.000đ/chuyến cho Vân Đồn.
8. **Tự sáng tác giá cước bao xe hoặc giá gửi hàng cố định cho Cảng Ao Tiên**: Sử dụng hướng dẫn liên hệ trực tiếp để báo giá chuyến thực tế.

---

### 3. KẾT LUẬN KIỂM DUYỆT FACT GATE

- Tổng số claim trọng yếu đã thẩm định: **13/13 PASSED**
- Số claim chưa được kiểm chứng (UNKNOWN) đưa lên trang: **0**
- Reverse Price Symmetry: **NOT VERIFIED** (đã loại bỏ khỏi public copy)
- Phân tách 4c/7c: **LOẠI BỎ** (thay bằng Bao xe theo chuyến 1.500.000đ)
- Cam kết giờ tàu / kết nối đảo vô căn cứ: **0 remaining**
- Tình trạng Fact Gate: **APPROVED FOR RELEASE**
