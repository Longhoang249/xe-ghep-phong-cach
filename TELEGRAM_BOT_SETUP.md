# Hướng Dẫn Cài Đặt Bot Telegram Nhận Cuốc Xe Tức Thì (60 Giây)

Mục tiêu: Mỗi khi khách hàng gửi yêu cầu đặt xe hoặc gửi hàng trên website `xeghepphongcach.com`, điện thoại của bạn sẽ **rung chuông báo cuốc ngay lập tức** kèm tên khách, số điện thoại, điểm đón, điểm trả và nút bấm gọi lại ngay.

---

## Bước 1: Tạo Bot Telegram (Mất 30 giây)

1. Mở ứng dụng **Telegram** trên điện thoại (hoặc máy tính).
2. Vào ô Tìm kiếm gõ: `@BotFather` (có tích xanh chính thức của Telegram).
3. Bấm nút **Start** (hoặc gửi tin nhắn `/start`).
4. Gửi tiếp lệnh: `/newbot`.
5. Nhập tên cho Bot, ví dụ: `Xe Ghép Phong Cách Alert`.
6. Nhập username cho bot kết thúc bằng chữ `bot`, ví dụ: `xeghepphongcach_alert_bot`.
7. BotFather sẽ gửi lại một đoạn mã **Token**, ví dụ:  
   `8123456789:AAFlkBx1234567890abcdef...`  
   *(Đây chính là `TELEGRAM_BOT_TOKEN`)*.

---

## Bước 2: Lấy Chat ID của bạn (Mất 15 giây)

1. Trên ô Tìm kiếm Telegram, gõ: `@userinfobot`.
2. Bấm **Start** (hoặc gửi bất kỳ tin nhắn nào).
3. Bot sẽ trả về thông tin cá nhân của bạn, trong đó có dòng:  
   `Id: 123456789`  
   *(Dãy số này chính là `TELEGRAM_CHAT_ID` của bạn)*.
4. **Quan trọng**: Sau khi lấy ID, hãy tìm lại con bot bạn vừa tạo ở Bước 1 (ví dụ `@xeghepphongcach_alert_bot`) và bấm nút **Start** để cho phép bot gửi tin nhắn vào máy bạn.

---

## Bước 3: Cấu hình vào hệ thống (Mất 15 giây)

1. Mở file `.env.local` trong thư mục dự án và thêm 2 dòng:
   ```env
   TELEGRAM_BOT_TOKEN=8123456789:AAFlkBx...
   TELEGRAM_CHAT_ID=123456789
   ```
2. Thêm 2 biến này vào mục **Settings -> Environment Variables** trên Vercel để web chạy online cũng báo cuốc.
3. Chạy lệnh thử nghiệm gửi tin nhắn ngay lập tức:
   ```bash
   node scripts/test-telegram.mjs
   ```

Khi thấy tin nhắn test báo về điện thoại là hệ thống đã hoàn tất 100%!
