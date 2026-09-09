# MEDIA PLAN: TUYẾN HẢI DƯƠNG ⇄ QUẢNG NINH
## Trang mục tiêu: `/xe-ghep-hai-duong-quang-ninh` (Asset MP-005)

**Dự án**: Nhà Xe Phong Cách  
**Ngày lập**: 2026-09-09  

---

### 1. DANH MỤC HÌNH ẢNH SỬ DỤNG TRÊN MONEY PAGE QUẢNG NINH

| Vị trí sử dụng | Đường dẫn tệp ảnh | Kích thước | Định dạng | SEO Alt Text | Vai trò UX & SEO |
|---|---|:---:|:---:|---|---|
| **Hero Background / Visual** | `/images/hero-phong-cach-fleet.png` | 1200x630 | WebP/PNG | "Đội xe phục vụ tuyến Hải Dương - Quảng Ninh đón trả tận nơi" | Hero visual chính, priority load |
| **Dịch vụ Xe ghép 4 chỗ** | `/images/dich-vu-xe-4-cho.png` | 600x400 | WebP/PNG | "Dịch vụ xe ghép 4 chỗ đi Hải Dương Quảng Ninh tiết kiệm chi phí" | Service card 1 |
| **Dịch vụ Bao xe 7 chỗ** | `/images/dich-vu-xe-7-cho.png` | 600x400 | WebP/PNG | "Dịch vụ bao xe 7 chỗ trọn gói đi Hạ Long Vân Đồn Móng Cái" | Service card 2 |
| **Dịch vụ Gửi hàng theo chuyến** | `/images/gui-hang-theo-chuyen.png` | 600x400 | WebP/PNG | "Dịch vụ gửi hàng hai chiều Hải Dương Quảng Ninh nhận trả tận nơi" | Service card 3 |
| **Hạ tầng Cầu Bạch Đằng & Cao tốc** | `/images/cau-bach-dang-hai-phong-quang-ninh.jpg` | 800x533 | JPEG | "Cầu Bạch Đằng trên trục cao tốc kết nối Hải Dương Hải Phòng sang Quảng Ninh nhanh chóng" | Journey Guide visual |
| **Đội xe liên tỉnh đón trả** | `/images/xe-ghep-phong-cach-hai-duong-hai-phong-quang-ninh.jpg` | 800x533 | JPEG | "Xe ghép Phong Cách phục vụ hành khách hai chiều Hải Dương đi các khu vực tại Quảng Ninh" | Gallery item 1 |
| **Khoang xe gia đình sạch sẽ** | `/images/xe-ghep-phong-cach-khoang-xe.jpg` | 800x533 | JPEG | "Không gian nội thất xe ghế da êm ái sạch sẽ và thoáng mát" | Gallery item 2 |
| **Đưa đón khách tận nhà** | `/images/xe-ghep-phong-cach-don-tan-nha.jpg` | 800x533 | JPEG | "Tài xế đưa đón hành khách tận nhà theo lịch hẹn trước tại Hải Dương và Quảng Ninh" | Gallery item 3 |

---

### 2. QUY TẮC HIỂN THỊ HÌNH ẢNH & CWV
- 100% hình ảnh có mặt thực tế trong thư mục `public/images/`.
- Tối ưu thuộc tính `alt` chứa thực thể tự nhiên (không nhồi nhét từ khóa rác).
- Đáp ứng Core Web Vitals (LCP, CLS): Ảnh Hero có thuộc tính tải nhanh, các ảnh bên dưới sử dụng responsive `sizes` và lazy-loading chuẩn Next.js Image component.
