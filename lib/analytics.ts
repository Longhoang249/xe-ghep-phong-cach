"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { track as trackVercel } from "@vercel/analytics";
import { campaignContext } from "@/lib/tracking";

type EventValue = string | number | boolean | null | undefined;

export function trackEvent(name: string, properties: Record<string, EventValue> = {}) {
  if (typeof window === "undefined") return;
  const safeProperties = Object.fromEntries(
    Object.entries({ ...properties, ...campaignContext(), page_path: window.location.pathname })
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => [key, typeof value === "string" ? value.slice(0, 200) : value]),
  ) as Record<string, string | number | boolean>;

  trackVercel(name, safeProperties);
  if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    sendGAEvent("event", name, safeProperties);
  }
}
