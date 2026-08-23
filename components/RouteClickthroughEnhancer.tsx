"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

const TARGET_ROUTE = {
  origin: "Hải Dương",
  destination: "Hải Phòng",
  slug: "xe-ghep-hai-duong-hai-phong",
};

export default function RouteClickthroughEnhancer() {
  const router = useRouter();

  useEffect(() => {
    const section = document.getElementById("tuyen-xe");
    if (!section) return;

    const routeCards = Array.from(section.querySelectorAll<HTMLElement>(".quick-route-tile"));
    const card = routeCards.find((item) => {
      const text = item.textContent || "";
      return text.includes(TARGET_ROUTE.origin) && text.includes(TARGET_ROUTE.destination);
    });
    const button = card?.querySelector<HTMLButtonElement>("button");
    if (!card || !button) return;

    card.dataset.routeClickthrough = TARGET_ROUTE.slug;
    button.setAttribute(
      "aria-label",
      `Xem thông tin tuyến ${TARGET_ROUTE.origin} đi ${TARGET_ROUTE.destination}`,
    );

    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      trackEvent("route_view", {
        route_slug: TARGET_ROUTE.slug,
        origin: TARGET_ROUTE.origin,
        destination: TARGET_ROUTE.destination,
        placement: "home_route_money_page",
      });
      router.push(`/${TARGET_ROUTE.slug}`);
    };

    button.addEventListener("click", handleClick, true);
    return () => button.removeEventListener("click", handleClick, true);
  }, [router]);

  return null;
}
