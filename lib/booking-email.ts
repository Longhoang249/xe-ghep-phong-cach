export interface BookingData {
  booking_id?: string;
  customer_name?: string;
  name?: string;
  phone?: string;
  customer_phone?: string;
  pickup_address?: string;
  dropoff_address?: string;
  departure_date?: string;
  departure_time?: string;
  service_type?: string;
  vehicle_type?: string;
  passenger_count?: number;
  cargo_name?: string;
  estimated_price?: number;
  price_quote?: string;
  [key: string]: unknown;
}

export function generateBookingEmailHtml(booking: BookingData): { subject: string; html: string } {
  const name = String(booking.customer_name || booking.name || "Khách đặt qua Website");
  const phone = String(booking.phone || booking.customer_phone || "").trim();
  const cleanPhone = phone.replace(/[^\d+]/g, "");
  const pickup = String(booking.pickup_address || "Chưa rõ");
  const dropoff = String(booking.dropoff_address || "Chưa rõ");
  const date = String(booking.departure_date || "");
  const time = String(booking.departure_time || "");
  const serviceType =
    booking.service_type === "shared"
      ? "Xe ghép"
      : booking.service_type === "private"
      ? "Bao xe riêng"
      : booking.service_type === "parcel"
      ? "Gửi hàng"
      : String(booking.service_type || "Xe ghép");
  const vehicle = booking.vehicle_type === "7-seat" ? "Xe 7 chỗ" : "Xe 4 chỗ";
  const count = booking.service_type === "parcel" ? "Gửi hàng theo chuyến" : `${booking.passenger_count || 1} khách`;
  const price =
    typeof booking.estimated_price === "number"
      ? `${new Intl.NumberFormat("vi-VN").format(booking.estimated_price)}đ`
      : (booking.price_quote as string) || "Liên hệ xác nhận";
  const bookingId = String(booking.booking_id || "Chưa có");

  const subject = `🚨 [CUỐC MỚI] ${name} (${phone}) - ${pickup} đi ${dropoff}`;

  const html = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 16px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #1e3a8a, #2563eb); padding: 24px 20px; text-align: center; color: #ffffff;">
      <h1 style="margin: 0; font-size: 20px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">Xe Ghép Phong Cách</h1>
      <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.95;">Có khách mới gửi yêu cầu đặt xe từ Website!</p>
    </div>

    <!-- Quick Action CTA Buttons -->
    <div style="padding: 20px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; text-align: center;">
      <div style="font-size: 13px; color: #64748b; margin-bottom: 12px; font-weight: 600; text-transform: uppercase;">Thao tác nhanh cho chủ xe:</div>
      <div style="text-align: center;">
        ${
          cleanPhone
            ? `<a href="tel:${cleanPhone}" style="display: inline-block; background: #16a34a; color: #ffffff; text-decoration: none; padding: 12px 22px; border-radius: 8px; font-weight: bold; font-size: 15px; margin: 4px;">📞 Bấm gọi: ${phone}</a>`
            : ""
        }
        ${
          cleanPhone
            ? `<a href="https://zalo.me/${cleanPhone}" style="display: inline-block; background: #0284c7; color: #ffffff; text-decoration: none; padding: 12px 22px; border-radius: 8px; font-weight: bold; font-size: 15px; margin: 4px;">💬 Mở Zalo chát với khách</a>`
            : ""
        }
      </div>
    </div>

    <!-- Booking Details Table -->
    <div style="padding: 24px 20px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; width: 35%;">Mã đơn:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #0f172a;">${bookingId}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Họ tên khách:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #0f172a; font-size: 15px;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Số điện thoại:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 800; color: #16a34a; font-size: 16px;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Điểm đón:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">${pickup}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Điểm trả:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">${dropoff}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Thời gian đón:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">${
            time ? `⏰ ${time} - ` : ""
          }📅 ${date}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Dịch vụ & Xe:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${serviceType} (${vehicle} - ${count})</td>
        </tr>
        ${
          booking.cargo_name
            ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Hàng hóa:</td><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${booking.cargo_name}</td></tr>`
            : ""
        }
        <tr>
          <td style="padding: 10px 0; color: #64748b;">Giá ước tính:</td>
          <td style="padding: 10px 0; font-weight: 800; color: #dc2626; font-size: 16px;">${price}</td>
        </tr>
      </table>
    </div>

    <!-- Footer -->
    <div style="background: #f8fafc; padding: 16px 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
      Hệ thống thông báo tự động từ <a href="https://xeghepphongcach.com" style="color: #2563eb; text-decoration: none; font-weight: 600;">xeghepphongcach.com</a>
    </div>
  </div>
</body>
</html>`;

  return { subject, html };
}

export async function sendEmailAlert(booking: BookingData): Promise<boolean> {
  const recipient = process.env.ALERT_EMAIL_TO || "long2492000@gmail.com";
  const resendKey = process.env.RESEND_API_KEY;
  const brevoKey = process.env.BREVO_API_KEY;
  const webhookUrl = process.env.EMAIL_WEBHOOK_URL;

  if (!resendKey && !brevoKey && !webhookUrl) {
    return false;
  }

  const { subject, html } = generateBookingEmailHtml(booking);
  let sent = false;

  // 1. Resend API
  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "Xe Ghép Phong Cách <onboarding@resend.dev>",
          to: [recipient],
          subject,
          html,
        }),
      });
      if (res.ok) sent = true;
    } catch (err) {
      console.error("[Email Alert - Resend] Lỗi gửi email:", err);
    }
  }

  // 2. Brevo API
  if (brevoKey && !sent) {
    try {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": brevoKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: {
            name: "Xe Ghép Phong Cách",
            email: process.env.BREVO_FROM || "no-reply@xeghepphongcach.com",
          },
          to: [{ email: recipient }],
          subject,
          htmlContent: html,
        }),
      });
      if (res.ok) sent = true;
    } catch (err) {
      console.error("[Email Alert - Brevo] Lỗi gửi email:", err);
    }
  }

  // 3. Webhook (Google Apps Script / Automation Webhook)
  if (webhookUrl && !sent) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: recipient, subject, html, booking }),
      });
      if (res.ok) sent = true;
    } catch (err) {
      console.error("[Email Alert - Webhook] Lỗi gửi webhook email:", err);
    }
  }

  return sent;
}
