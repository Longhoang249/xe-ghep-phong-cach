import { NextResponse } from "next/server";
import { normalizeBookingPricePayload } from "@/lib/booking-pricing.mjs";
import { getRequestId, logServerEvent } from "@/lib/server-logging";

async function sendTelegramAlert(booking: Record<string, unknown>) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const name = String(booking.customer_name || booking.name || "Khách đặt qua Website");
  const phone = String(booking.phone || booking.customer_phone || "").trim();
  const pickup = String(booking.pickup_address || "Chưa rõ");
  const dropoff = String(booking.dropoff_address || "Chưa rõ");
  const date = String(booking.departure_date || "");
  const time = String(booking.departure_time || "");
  const serviceType = booking.service_type === "shared" ? "Xe ghép" : booking.service_type === "private" ? "Bao xe riêng" : booking.service_type === "parcel" ? "Gửi hàng" : String(booking.service_type || "Xe ghép");
  const vehicle = booking.vehicle_type === "7-seat" ? "Xe 7 chỗ" : "Xe 4 chỗ";
  const count = booking.service_type === "parcel" ? "Gửi hàng theo chuyến" : `${booking.passenger_count || 1} khách`;
  const price = typeof booking.estimated_price === "number" ? `${new Intl.NumberFormat("vi-VN").format(booking.estimated_price)}đ` : (booking.price_quote as string) || "Liên hệ xác nhận";

  const cleanPhone = phone.replace(/[^\d+]/g, "");
  const text = [
    `🚨 *CÓ KHÁCH MỚI ĐẶT XE TRÊN WEBSITE!*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `🆔 *Mã đơn*: \`${booking.booking_id}\``,
    `👤 *Khách hàng*: *${name}*`,
    `📞 *Số điện thoại*: *${phone}*`,
    `📍 *Điểm đón*: ${pickup}`,
    `🏁 *Điểm trả*: ${dropoff}`,
    `📅 *Ngày đi*: ${date} | ⏰ *Giờ đón*: ${time}`,
    `🚗 *Dịch vụ*: ${serviceType} (${vehicle} - ${count})`,
    booking.cargo_name ? `📦 *Hàng hóa*: ${booking.cargo_name}` : null,
    `💰 *Giá dự kiến*: ${price}`,
    `━━━━━━━━━━━━━━━━━━━━`,
    cleanPhone ? `👉 *BẤM GỌI CHO KHÁCH*: tel:${cleanPhone}` : null,
  ].filter(Boolean).join("\n");

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      }),
    });
  } catch (error) {
    console.error("[Telegram Alert] Gửi thông báo thất bại:", error);
  }
}

export async function POST(request: Request) {
  const startedAt = Date.now();
  const requestId = getRequestId(request);
  try {
    const booking = normalizeBookingPricePayload(await request.json()) as Record<string, unknown>;
    if (typeof booking.booking_id !== "string" || !booking.booking_id.startsWith("PC-")) {
      logServerEvent("warning", "booking_rejected", { route: "/api/bookings", requestId, reason: "invalid_booking_id", durationMs: Date.now() - startedAt });
      return NextResponse.json({ ok: false, error: "INVALID_BOOKING" }, { status: 400 });
    }

    // Gửi thông báo Telegram tức thì tới chủ xe
    await sendTelegramAlert(booking);

    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      logServerEvent("info", "booking_demo_accepted", { route: "/api/bookings", requestId, bookingId: booking.booking_id, durationMs: Date.now() - startedAt });
      return NextResponse.json({ ok: true, demo: true, booking_id: booking.booking_id });
    }

    const response = await fetch(`${url}/rest/v1/bookings`, {
      method: "POST",
      headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify(booking),
    });
    if (!response.ok) {
      logServerEvent("error", "booking_database_failed", { route: "/api/bookings", requestId, bookingId: booking.booking_id, upstreamStatus: response.status, durationMs: Date.now() - startedAt });
      return NextResponse.json({ ok: false, error: "DATABASE_ERROR" }, { status: 502 });
    }

    logServerEvent("info", "booking_saved", { route: "/api/bookings", requestId, bookingId: booking.booking_id, durationMs: Date.now() - startedAt });
    return NextResponse.json({ ok: true, booking_id: booking.booking_id });
  } catch (error) {
    logServerEvent("error", "booking_request_failed", { route: "/api/bookings", requestId, error: error instanceof Error ? error.message : String(error), durationMs: Date.now() - startedAt });
    return NextResponse.json({ ok: false, error: "INVALID_REQUEST" }, { status: 400 });
  }
}
