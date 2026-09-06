# Hướng Dẫn Kích Hoạt Nhận Thông Báo Đơn Đặt Xe Qua Email (long2492000@gmail.com)

Hệ thống đã được lập trình sẵn để gửi toàn bộ thông tin cuốc xe (Tên khách, SĐT, Điểm đón, Điểm trả, Giá, Nút gọi & Nút chát Zalo) trực tiếp về hòm thư `long2492000@gmail.com`.

Bạn chỉ cần chọn **1 trong 2 cách** thiết lập cực nhanh dưới đây:

---

## Cách 1: Sử dụng Resend (Khuyên dùng nhất - Chỉ mất 60 giây, Miễn phí)

Resend là dịch vụ gửi email chuẩn hiện đại của Next.js & Vercel, miễn phí 3.000 email/tháng (100 đơn/ngày).

### Các bước thực hiện:
1. Truy cập: [https://resend.com](https://resend.com)
2. Bấm **Get Started** -> Chọn **Continue with Google** -> Đăng nhập bằng tài khoản `long2492000@gmail.com`.
3. Ở menu bên trái, bấm vào **API Keys** -> Bấm **Create API Key**.
4. Đặt tên (ví dụ: `Xe Ghép Phong Cách`) rồi bấm **Add**.
5. Copy mã khóa vừa tạo (dạng: `re_123456789abcdef...`).
6. Mở file `.env.local` trong máy (nếu chưa có thì tạo mới) và dán vào:
   ```env
   RESEND_API_KEY=re_mã_khoá_bạn_vừa_copy
   ALERT_EMAIL_TO=long2492000@gmail.com
   ```
7. Thêm 2 biến này vào mục **Settings -> Environment Variables** trên Vercel để web chạy online cũng tự động gửi mail.
8. Chạy lệnh kiểm tra gửi thử:
   ```bash
   node scripts/test-email.mjs
   ```
   *Mở hòm thư Gmail trên điện thoại, bạn sẽ thấy thông báo nổi lên ngay lập tức!*

---

## Cách 2: Sử dụng Google Apps Script (100% trong tài khoản Google cá nhân, Không cần tài khoản bên ngoài)

Nếu bạn không muốn đăng ký thêm tài khoản ở đâu khác, bạn có thể dùng chính tính năng tự động của Google:

1. Đăng nhập tài khoản `long2492000@gmail.com` và truy cập: [https://script.google.com](https://script.google.com)
2. Bấm nút **Dự án mới (New Project)**.
3. Xóa hết mã cũ và dán đoạn mã sau vào:
   ```javascript
   function doPost(e) {
     try {
       var data = JSON.parse(e.postData.contents);
       var subject = data.subject || "🚨 Có khách đặt xe mới trên website";
       var htmlBody = data.html || "<p>Có đơn đặt xe mới từ website xeghepphongcach.com</p>";
       MailApp.sendEmail({
         to: "long2492000@gmail.com",
         subject: subject,
         htmlBody: htmlBody
       });
       return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
     } catch (error) {
       return ContentService.createTextOutput(JSON.stringify({ ok: false, error: error.toString() })).setMimeType(ContentService.MimeType.JSON);
     }
   }
   ```
4. Bấm nút **Triển khai (Deploy)** ở góc trên bên phải -> Chọn **Triển khai mới (New deployment)**.
5. Ở biểu tượng bánh răng, chọn **Ứng dụng web (Web app)**.
   - Mục *Thực thi dưới dạng (Execute as)*: Chọn **Tôi (Me / long2492000@gmail.com)**.
   - Mục *Người có quyền truy cập (Who has access)*: Chọn **Bất kỳ ai (Anyone)**.
6. Bấm **Triển khai (Deploy)** -> Cấp quyền cho Google gửi mail nếu được hỏi.
7. Copy đường dẫn **URL ứng dụng web** (dạng: `https://script.google.com/macros/s/.../exec`).
8. Mở file `.env.local` và thêm:
   ```env
   EMAIL_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
   ```
   *(Đồng thời thêm biến này lên Vercel Environment Variables)*.
9. Chạy lệnh kiểm tra:
   ```bash
   node scripts/test-email.mjs
   ```

---

## Mẫu Email thực tế bạn sẽ nhận được trên điện thoại:

Mỗi khi có khách bấm đặt xe, hòm thư của bạn sẽ nhận được một thẻ thông tin chuyên nghiệp:
- **Tiêu đề**: `🚨 [CUỐC MỚI] Nguyễn Văn A (0912 345 678) - Hải Dương đi Hạ Long`
- **Nút bấm 1 (Xanh lá)**: `📞 Bấm gọi: 0912 345 678` -> Điện thoại tự động gọi ngay.
- **Nút bấm 2 (Xanh dương)**: `💬 Mở Zalo chát với khách` -> Tự động bật Zalo nhảy vào phòng chát.
- **Bảng chi tiết**: Tên khách, Số điện thoại, Điểm đón, Điểm trả, Giờ đón, Loại xe, Số khách, Giá ước tính.
