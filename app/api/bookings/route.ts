import { NextResponse } from "next/server";
import { getRequestId, logServerEvent } from "@/lib/server-logging";

export async function POST(request: Request) {
  const startedAt = Date.now();
  const requestId = getRequestId(request);
  try {
    const booking = await request.json() as Record<string, unknown>;
    if (typeof booking.booking_id !== "string" || !booking.booking_id.startsWith("PC-")) {
      logServerEvent("warning", "booking_rejected", { route: "/api/bookings", requestId, reason: "invalid_booking_id", durationMs: Date.now() - startedAt });
      return NextResponse.json({ ok: false, error: "INVALID_BOOKING" }, { status: 400 });
    }

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
