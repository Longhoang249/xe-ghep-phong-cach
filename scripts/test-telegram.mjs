import fs from "fs";

let token = process.env.TELEGRAM_BOT_TOKEN;
let chatId = process.env.TELEGRAM_CHAT_ID;

const envPath = ".env.local";
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf-8");
  for (const line of content.split("\n")) {
    const parts = line.split("=");
    if (parts.length >= 2) {
      const k = parts[0].trim();
      const v = parts.slice(1).join("=").trim();
      if (k === "TELEGRAM_BOT_TOKEN" && !token) token = v;
      if (k === "TELEGRAM_CHAT_ID" && !chatId) chatId = v;
    }
  }
}

if (!token || !chatId) {
  console.error("❌ Chưa tìm thấy TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_ID trong .env.local");
  console.log("👉 Xem hướng dẫn lấy Token & Chat ID chỉ mất 60 giây trong file TELEGRAM_BOT_SETUP.md");
  process.exit(1);
}

const testMessage = `🚖 *KẾT NỐI THÀNH CÔNG BOT XE GHÉP PHONG CÁCH!*\n\nĐiện thoại của bạn đã kết nối thành công với website xeghepphongcach.com.\n\nTừ bây giờ, mỗi khi có khách gửi yêu cầu đặt xe trên web, bạn sẽ nhận được thông báo chuông báo tức thì để bấm gọi lại chốt chuyến ngay!`;

try {
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: testMessage,
      parse_mode: "Markdown",
    }),
  });
  const data = await res.json();
  if (data.ok) {
    console.log("✅ Gửi tin nhắn thử nghiệm thành công! Hãy mở Telegram trên điện thoại để kiểm tra.");
  } else {
    console.error("❌ Telegram báo lỗi:", data);
  }
} catch (err) {
  console.error("❌ Lỗi kết nối mạng:", err);
}
