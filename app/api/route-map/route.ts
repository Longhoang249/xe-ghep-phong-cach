import { NextResponse } from "next/server";
import { getRequestId, logServerEvent } from "@/lib/server-logging";

const validCoordinate = (value: number, min: number, max: number) => Number.isFinite(value) && value >= min && value <= max;

export async function GET(request: Request) {
  const startedAt = Date.now();
  const requestId = getRequestId(request);
  const params = new URL(request.url).searchParams;
  const fromLat = Number(params.get("fromLat"));
  const fromLng = Number(params.get("fromLng"));
  const toLat = Number(params.get("toLat"));
  const toLng = Number(params.get("toLng"));
  if (![fromLat, toLat].every((value) => validCoordinate(value, 8, 24)) || ![fromLng, toLng].every((value) => validCoordinate(value, 102, 110))) {
    logServerEvent("warning", "route_map_rejected", { route: "/api/route-map", requestId, reason: "invalid_coordinates", durationMs: Date.now() - startedAt });
    return NextResponse.json({ error: "INVALID_COORDINATES" }, { status: 400 });
  }

  const endpoint = `https://router.project-osrm.org/route/v1/driving/${fromLng},${fromLat};${toLng},${toLat}?overview=full&geometries=geojson&steps=false`;
  try {
    const response = await fetch(endpoint, { next: { revalidate: 3600 } });
    if (!response.ok) throw new Error("ROUTER_UNAVAILABLE");
    const data = await response.json() as { code?: string; routes?: Array<{ distance: number; duration: number; geometry: { coordinates: [number, number][] } }> };
    const route = data.routes?.[0];
    if (data.code !== "Ok" || !route) throw new Error("NO_ROUTE");
    logServerEvent("info", "route_map_completed", { route: "/api/route-map", requestId, distanceKm: Math.round(route.distance / 1000), durationMs: Date.now() - startedAt });
    return NextResponse.json({
      distanceKm: Math.round(route.distance / 1000),
      durationMinutes: Math.round(route.duration / 60),
      points: route.geometry.coordinates.map(([lng, lat]) => [lat, lng]),
    });
  } catch (error) {
    logServerEvent("error", "route_map_failed", { route: "/api/route-map", requestId, error: error instanceof Error ? error.message : String(error), durationMs: Date.now() - startedAt });
    return NextResponse.json({ error: "ROUTE_UNAVAILABLE" }, { status: 503 });
  }
}
