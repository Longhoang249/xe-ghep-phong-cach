"use client";

import { useEffect, useRef, useState } from "react";
import { locationCoordinates, type Coordinates } from "@/data/location-coordinates";

type Props = {
  origin: string;
  destination: string;
  distanceKm?: number;
  durationMinutes?: number;
  originCoordinates?: Coordinates;
  destinationCoordinates?: Coordinates;
  compact?: boolean;
};

type LiveRoute = { distanceKm: number; durationMinutes: number; points: Coordinates[] };

export default function RouteMap({ origin, destination, distanceKm, durationMinutes, originCoordinates, destinationCoordinates, compact = false }: Props) {
  const mapElement = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [liveRoute, setLiveRoute] = useState<LiveRoute | null>(null);
  const fallbackFrom = locationCoordinates[origin];
  const fallbackTo = locationCoordinates[destination];
  const fromLat = originCoordinates?.[0] ?? fallbackFrom?.[0];
  const fromLng = originCoordinates?.[1] ?? fallbackFrom?.[1];
  const toLat = destinationCoordinates?.[0] ?? fallbackTo?.[0];
  const toLng = destinationCoordinates?.[1] ?? fallbackTo?.[1];

  useEffect(() => {
    if (fromLat === undefined || fromLng === undefined || toLat === undefined || toLng === undefined) return;
    const controller = new AbortController();
    const query = new URLSearchParams({ fromLat: String(fromLat), fromLng: String(fromLng), toLat: String(toLat), toLng: String(toLng) });
    fetch(`/api/route-map?${query}`, { signal: controller.signal })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data: LiveRoute) => setLiveRoute(data))
      .catch(() => setLiveRoute(null));
    return () => controller.abort();
  }, [fromLat, fromLng, toLat, toLng]);

  useEffect(() => {
    if (!mapElement.current || fromLat === undefined || fromLng === undefined || toLat === undefined || toLng === undefined) return;
    const from: Coordinates = [fromLat, fromLng];
    const to: Coordinates = [toLat, toLng];
    let cancelled = false;
    let map: import("leaflet").Map | undefined;

    import("leaflet").then((L) => {
      if (cancelled || !mapElement.current) return;
      map = L.map(mapElement.current, { zoomControl: false, attributionControl: true, scrollWheelZoom: false, dragging: !compact, touchZoom: true });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "© OpenStreetMap" }).addTo(map);
      L.polyline(liveRoute?.points?.length ? liveRoute.points : [from, to], { color: "#00B7B3", weight: compact ? 5 : 4, opacity: .95, dashArray: liveRoute ? undefined : "8 9", lineCap: "round" }).addTo(map);
      L.circleMarker(from, { radius: compact ? 7 : 8, color: "#ffffff", weight: 3, fillColor: "#00B7B3", fillOpacity: 1 }).bindTooltip("Điểm đón", { permanent: !compact, direction: "top", offset: [0, -9] }).addTo(map);
      L.circleMarker(to, { radius: compact ? 7 : 8, color: "#ffffff", weight: 3, fillColor: "#FFC247", fillOpacity: 1 }).bindTooltip("Điểm đến", { permanent: !compact, direction: "top", offset: [0, -9] }).addTo(map);
      if (!compact) L.control.zoom({ position: "bottomright" }).addTo(map);
      map.fitBounds([from, to], { padding: compact ? [24, 24] : [52, 52], maxZoom: compact ? 13 : 12 });
      requestAnimationFrame(() => map?.invalidateSize());
      setReady(true);
    });
    return () => { cancelled = true; map?.remove(); setReady(false); };
  }, [compact, fromLat, fromLng, liveRoute, toLat, toLng]);

  if (fromLat === undefined || fromLng === undefined || toLat === undefined || toLng === undefined) return null;
  const shownDistance = liveRoute?.distanceKm || distanceKm;
  const shownDuration = liveRoute?.durationMinutes || durationMinutes;

  return (
    <div className={`route-map-card ${compact ? "compact" : ""} ${ready ? "is-ready" : ""}`}>
      <div ref={mapElement} className="route-map" aria-label={`Bản đồ tuyến từ ${origin} đến ${destination}`} />
      <div className="route-map-status">
        <span>{liveRoute ? "LỘ TRÌNH THEO ĐƯỜNG THỰC TẾ" : "VỊ TRÍ ĐÓN · TRẢ"}</span>
        <strong>{compact ? "Đã định vị đúng hai điểm" : <>{origin} <b>→</b> {destination}</>}</strong>
        {shownDistance && shownDuration ? <small>{shownDistance} km · khoảng {Math.floor(shownDuration / 60) ? `${Math.floor(shownDuration / 60)} giờ ` : ""}{shownDuration % 60 || ""} phút</small> : <small>Đang tính lộ trình…</small>}
      </div>
    </div>
  );
}
