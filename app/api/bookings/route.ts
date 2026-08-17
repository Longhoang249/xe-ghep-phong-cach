import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const booking = await request.json();
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return NextResponse.json({ ok: true, demo: true, booking_id: booking.booking_id });
  const response = await fetch(`${url}/rest/v1/bookings`, { method: "POST", headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=minimal" }, body: JSON.stringify(booking) });
  if (!response.ok) return NextResponse.json({ ok: false, error: "DATABASE_ERROR" }, { status: 502 });
  return NextResponse.json({ ok: true, booking_id: booking.booking_id });
}
