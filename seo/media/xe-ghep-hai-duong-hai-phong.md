# KẾ HOẠCH HÌNH ẢNH & MEDIA: TUYẾN HẢI DƯƠNG ⇄ HẢI PHÒNG (PHASE 5)

**Trang áp dụng**: `https://xeghepphongcach.com/xe-ghep-hai-duong-hai-phong`  
**Mục tiêu**: Tối ưu hóa trải nghiệm thị giác (User Experience), gia tăng tín hiệu E-E-A-T thực tế cho dịch vụ vận tải địa phương, hỗ trợ SEO hình ảnh (Google Images & Rich Results), cam kết không dùng ảnh stock giả tạo và 100% hình ảnh có mặt trong kho lưu trữ `public/images/`.

---

## 1. DANH MỤC HÌNH ẢNH SỬ DỤNG VÀ THUỘC TÍNH ON-PAGE

| Vị trí trên trang | Tên tệp ảnh trong `public/images/` | Văn bản thay thế (`alt` text chuẩn SEO & a11y) | Kích thước gốc / Tỉ lệ | Cơ chế tải |
|---|---|---|---|---|
| **Hero Section** (Đầu trang) | `/images/hero-phong-cach-fleet.png` | `Đội xe ghép và bao xe 4-7 chỗ Nhà Xe Phong Cách tuyến Hải Dương - Hải Phòng` | 1448 x 1086 (4:3) | `priority={true}` (Fetch Priority High, LCP tối ưu) |
| **Bảng giá & Dịch vụ 4 chỗ** | `/images/dich-vu-xe-4-cho.png` | `Xe 4 chỗ đời mới phục vụ khách đi ghép và bao xe Hải Dương - Hải Phòng` | 800 x 600 (4:3) | `loading="lazy"`, `sizes="(max-width: 760px) 100vw, 33vw"` |
| **Bảng giá & Dịch vụ 7 chỗ** | `/images/dich-vu-xe-7-cho.png` | `Xe 7 chỗ Xpander Veloz rộng rãi cho gia đình và nhóm công tác đi Hải Phòng` | 800 x 600 (4:3) | `loading="lazy"`, `sizes="(max-width: 760px) 100vw, 33vw"` |
| **Dịch vụ gửi hàng hỏa tốc** | `/images/gui-hang-theo-chuyen.png` | `Dịch vụ nhận gửi hàng hóa bưu phẩm hỏa tốc tuyến Hải Dương - Hải Phòng từ 150K` | 800 x 600 (4:3) | `loading="lazy"`, `sizes="(max-width: 760px) 100vw, 33vw"` |
| **Cẩm nang hành trình (Cao tốc 5B)** | `/images/cao-toc-ha-noi-hai-phong.jpg` | `Lộ trình xe chạy cao tốc Hà Nội - Hải Phòng QL5B rút ngắn thời gian chỉ 45 phút` | 1200 x 800 (3:2) | `loading="lazy"`, `sizes="(max-width: 760px) 100vw, 50vw"` |
| **Đón trả Sân bay Cát Bi** | `/images/san-bay-cat-bi-terminal.jpg` | `Xe đưa đón tận sảnh nhà ga Sân bay Quốc tế Cát Bi Hải Phòng đúng giờ check-in` | 1200 x 800 (3:2) | `loading="lazy"`, `sizes="(max-width: 760px) 100vw, 50vw"` |
| **Đưa đón tận nhà** | `/images/xe-ghep-phong-cach-don-tan-nha.jpg` | `Tài xế Nhà Xe Phong Cách đón khách tận cửa nhà tại Hải Dương và Hải Phòng` | 1200 x 800 (3:2) | `loading="lazy"`, `sizes="(max-width: 760px) 100vw, 50vw"` |
| **Khoang xe & Tiện nghi** | `/images/xe-ghep-phong-cach-khoang-xe.jpg` | `Khoang nội thất xe đời mới sạch sẽ, không mùi, điều hòa mát lạnh và ghế da êm ái` | 1200 x 800 (3:2) | `loading="lazy"`, `sizes="(max-width: 760px) 100vw, 50vw"` |

---

## 2. QUY TẮC HIỂN THỊ VÀ TỐI ƯU CORE WEB VITALS (LCP/CLS)

1. **Chống giật layout (Cumulative Layout Shift - CLS)**:
   - Sử dụng thẻ `<Image>` của Next.js với đầy đủ thuộc tính `width`, `height` hoặc `fill` kèm wrapper có `aspect-ratio` xác định trước trong CSS.
2. **Tối ưu Largest Contentful Paint (LCP)**:
   - Ảnh Hero sử dụng `priority` và định dạng nén tối ưu (WebP/AVIF tự động bởi Next.js image optimization).
3. **Responsive Breakpoints**:
   - Khai báo chính xác thuộc tính `sizes` cho từng ảnh: `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`.
4. **Hình ảnh minh họa bối cảnh thực tế**:
   - Sử dụng đúng ảnh Cao tốc Hà Nội - Hải Phòng cho phần phân tích cung đường.
   - Sử dụng đúng ảnh Nhà ga Cát Bi cho phần đón trả sân bay.
   - Sử dụng đúng ảnh đón tận nhà và khoang xe cho phần cam kết chất lượng của Nhà Xe Phong Cách.
