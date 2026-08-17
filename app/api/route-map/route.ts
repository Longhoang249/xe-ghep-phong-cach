import { NextResponse } from "next/server";

const validCoordinate = (value: number, min: number, max: number) => Number.isFinite(value) && value >= min && value <= max;

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const fromLat = Number(params.get("fromLat"));
  const fromLng = Number(params.get("fromLng"));
  const toLat = Number(params.get("toLat"));
  const toLng = Number(params.get("toLng"));
  if (![fromLat, toLat].every((value) => validCoordinate(value, 8, 24)) || ![fromLng, toLng].every((value) => validCoordinate(value, 102, 110))) {
    return NextResponse.json({ error: "INVALID_COORDINATES" }, { status: 400 });
  }

  const endpoint = `https://router.project-osrm.org/route/v1/driving/${fromLng},${fromLat};${toLng},${toLat}?overview=full&geometries=geojson&steps=false`;
  try {
    const response = await fetch(endpoint, { next: { revalidate: 3600 } });
    if (!response.ok) throw new Error("ROUTER_UNAVAILABLE");
    const data = await response.json() as { code?: string; routes?: Array<{ distance: number; duration: number; geometry: { coordinates: [number, number][] } }> };
    const route = data.routes?.[0];
    if (data.code !== "Ok" || !route) throw new Error("NO_ROUTE");
    return NextResponse.json({
      distanceKm: Math.round(route.distance / 1000),
      durationMinutes: Math.round(route.duration / 60),
      points: route.geometry.coordinates.map(([lng, lat]) => [lat, lng]),
    });
  } catch {
    return NextResponse.json({ error: "ROUTE_UNAVAILABLE" }, { status: 503 });
  }
}
