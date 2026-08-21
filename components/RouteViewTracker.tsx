"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function RouteViewTracker({ slug, origin, destination }: { slug: string; origin: string; destination: string }) {
  useEffect(() => {
    trackEvent("route_view", { route_slug: slug, origin, destination });
  }, [destination, origin, slug]);
  return null;
}
