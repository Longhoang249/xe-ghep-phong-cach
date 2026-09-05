"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import type { RoutePrice } from "@/data/routes";
import { siteConfig } from "@/lib/site";
const labels = {
  all: "Tất cả",
  "trong-tam": "⭐ Hải Phòng & Quảng Ninh",
  "ha-noi": "Hà Nội",
  "san-bay": "Sân bay",
  "mien-bac": "Miền Bắc",
  "mien-trung-gan": "Miền Trung gần",
} as const;

export default function RoutesDirectory({ routes }: { routes: RoutePrice[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<keyof typeof labels>("all");

  const shown = useMemo(
    () =>
      routes.filter((route) => {
        const matchesQuery = `${route.origin} ${route.destination}`
          .toLowerCase()
          .includes(query.toLowerCase());
        if (!matchesQuery) return false;
        if (filter === "all") return true;
        if (filter === "trong-tam") {
          return (
            (route.origin === "Hải Dương" &&
              (route.destination === "Hải Phòng" ||
                route.destination === "Quảng Ninh" ||
                route.destination === "Hạ Long" ||
                route.destination === "Cát Bi")) ||
            (route.origin === "Hải Phòng" && route.destination === "Quảng Ninh")
          );
        }
        return route.region === filter;
      }),
    [routes, query, filter]
  );

  return (
    <div className="directory">
      <div className="directory-search">
        <span>⌕</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Bạn muốn đi đâu? (Ví dụ: Hải Phòng, Quảng Ninh, Phú Thọ...)"
          aria-label="Tìm tuyến xe"
        />
      </div>
      <div className="filter-row">
        {Object.entries(labels).map(([key, label]) => (
          <button
            key={key}
            className={filter === key ? "active" : ""}
            onClick={() => setFilter(key as keyof typeof labels)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="directory-list">
        {shown.map((route) => (
          <Link href={`/${route.slug}`} key={route.id}>
            <div>
              <span>{route.tag || "Đón trả tận nơi 2 chiều"}</span>
              <h2>
                {route.origin} <b>⇄</b> {route.destination}
              </h2>
              <p>
                Phục vụ 2 chiều cả đi lẫn về. Xe 4–7 chỗ đời mới, gọi để kiểm tra chuyến.
              </p>
            </div>
            <div>
              <strong>
                {route.sharedPrice
                  ? `Từ ${Math.round(route.sharedPrice / 1000)}k`
                  : "Liên hệ giá"}
              </strong>
              <span>Xem chi tiết tuyến →</span>
            </div>
          </Link>
        ))}
        {!shown.length && (
          <div className="empty-state">
            <strong>Chưa tìm thấy tuyến phù hợp</strong>
            <p>Gọi {siteConfig.phoneDisplay}, Phong Cách sẽ kiểm tra xe giúp bạn.</p>
          </div>
        )}
      </div>
    </div>
  );
}
