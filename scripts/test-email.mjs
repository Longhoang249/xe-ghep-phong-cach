import fs from "fs";

let resendKey = process.env.RESEND_API_KEY;
let brevoKey = process.env.BREVO_API_KEY;
let webhookUrl = process.env.EMAIL_WEBHOOK_URL;
let recipient = process.env.ALERT_EMAIL_TO || "long2492000@gmail.com";

const envPath = ".env.local";
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf-8");
  for (const line of content.split("\n")) {
    const parts = line.split("=");
    if (parts.length >= 2) {
      const k = parts[0].trim();
      const v = parts.slice(1).join("=").trim();
      if (k === "RESEND_API_KEY" && !resendKey) resendKey = v;
      if (k === "BREVO_API_KEY" && !brevoKey) brevoKey = v;
      if (k === "EMAIL_WEBHOOK_URL" && !webhookUrl) webhookUrl = v;
      if (k === "ALERT_EMAIL_TO") recipient = v;
    }
  }
}

console.log("==================================================");
console.log("📧 KIỂM TRA HỆ THỐNG THÔNG BÁO EMAIL ĐẶT XE");
console.log("==================================================");
console.log(`📩 Hòm thư nhận thông báo: ${recipient}`);

if (!resendKey && !brevoKey && !webhookUrl) {
  console.log("\n❌ Chưa cấu hình dịch vụ gửi email trong .env.local!");
  console.log("\n👉 BẠN CHỈ CẦN CHỌN 1 TRONG 2 CÁCH DỄ NHẤT SAU:");
  console.log("--------------------------------------------------");
  console.log("Cách 1 (Khuyên dùng nhất - Resend):");
  console.log("1. Mở https://resend.com và đăng nhập bằng tài khoản Google (long2492000@gmail.com).");
  console.log("2. Bấm 'API Keys' -> 'Create API Key' và sao chép mã (bắt đầu bằng re_...).");
  console.log("3. Mở file .env.local và thêm dòng:");
  console.log("   RESEND_API_KEY=re_your_api_key_here");
  console.log("   ALERT_EMAIL_TO=long2492000@gmail.com");
  console.log("\nCách 2 (Google Apps Script Webhook - 100% tài khoản cá nhân):");
  console.log("Xem hướng dẫn trong file EMAIL_ALERT_SETUP.md");
  console.log("--------------------------------------------------\n");
  process.exit(1);
}

const testSubject = `🚨 [THỬ NGHIỆM] Xe Ghép Phong Cách kết nối Email thành công!`;
const testHtml = `
  <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px;">
    <h2 style="color: #2563eb;">🎉 KẾT NỐI THÀNH CÔNG!</h2>
    <p>Hệ thống gửi email thông báo đặt xe của <b>xeghepphongcach.com</b> đã kết nối thành công tới hòm thư <b>${recipient}</b>.</p>
    <p>Từ bây giờ, mỗi khi có khách gửi yêu cầu trên website, bạn sẽ nhận được thông báo chi tiết ngay tại đây kèm link gọi lại và mở Zalo chát với khách!</p>
    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
    <p style="font-size: 12px; color: #64748b;">Nhà Xe Phong Cách - Hotline: 0987 663 883</p>
  </div>
`;

if (resendKey) {
  console.log("\n🚀 Đang gửi thử qua Resend API...");
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Xe Ghép Phong Cách <onboarding@resend.dev>",
        to: [recipient],
        subject: testSubject,
        html: testHtml,
      }),
    });
    const data = await res.json();
    if (res.ok) {
      console.log("✅ GỬI EMAIL THÀNH CÔNG! Hãy kiểm tra hòm thư:", recipient);
      console.log("ID email:", data.id);
    } else {
      console.error("❌ Resend báo lỗi:", data);
    }
  } catch (err) {
    console.error("❌ Lỗi kết nối mạng Resend:", err);
  }
} else if (webhookUrl) {
  console.log("\n🚀 Đang gửi thử qua Webhook...");
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: recipient,
        subject: testSubject,
        html: testHtml,
      }),
    });
    console.log("✅ Đã gửi tín hiệu tới Webhook! Mã phản hồi:", res.status);
  } catch (err) {
    console.error("❌ Lỗi Webhook:", err);
  }
}
