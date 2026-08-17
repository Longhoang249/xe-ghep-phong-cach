"use client";

import { useEffect, useRef, useState } from "react";
import { locationCoordinates } from "@/data/location-coordinates";

type Props = { origin: string; destination: string; distanceKm: number; durationMinutes: number };

export default function RouteMap({ origin, destination, distanceKm, durationMinutes }: Props) {
  const mapElement = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const from = locationCoordinates[origin];
    const to = locationCoordinates[destination];
    if (!mapElement.current || !from || !to) return;

    let cancelled = false;
    let map: import("leaflet").Map | undefined;

    import("leaflet").then((L) => {
      if (cancelled || !mapElement.current) return;
      map = L.map(mapElement.current, {
        zoomControl: false,
        attributionControl: true,
        scrollWheelZoom: false,
        dragging: true,
      });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "© OpenStreetMap",
      }).addTo(map);
      L.polyline([from, to], {
        color: "#087fe7",
        weight: 4,
        opacity: 0.9,
        dashArray: "10 10",
      }).addTo(map);
      L.circleMarker(from, { radius: 8, color: "#ffffff", weight: 4, fillColor: "#087fe7", fillOpacity: 1 })
        .bindTooltip(origin, { permanent: true, direction: "top", offset: [0, -10] })
        .addTo(map);
      L.circleMarker(to, { radius: 8, color: "#ffffff", weight: 4, fillColor: "#ff6f61", fillOpacity: 1 })
        .bindTooltip(destination, { permanent: true, direction: "top", offset: [0, -10] })
        .addTo(map);
      L.control.zoom({ position: "bottomright" }).addTo(map);
      map.fitBounds([from, to], { padding: [52, 52], maxZoom: 10 });
      requestAnimationFrame(() => map?.invalidateSize());
      setReady(true);
    });

    return () => { cancelled = true; map?.remove(); };
  }, [origin, destination]);

  if (!locationCoordinates[origin] || !locationCoordinates[destination]) return null;

  return (
    <div className={`route-map-card ${ready ? "is-ready" : ""}`}>
      <div ref={mapElement} className="route-map" aria-label={`Bản đồ tuyến ${origin} đến ${destination}`} />
      <div className="route-map-status">
        <span>BẢN ĐỒ TUYẾN THAM KHẢO</span>
        <strong>{origin} <b>→</b> {destination}</strong>
        <small>{distanceKm} km · khoảng {Math.floor(durationMinutes / 60)} giờ {durationMinutes % 60 || ""} phút</small>
      </div>
    </div>
  );
}
