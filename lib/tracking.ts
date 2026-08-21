const attributionKey = "phong-cach-attribution-v1";
const campaignKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

type Attribution = {
  utm_source?: string;
  utm_campaign?: string;
  utm_content?: string;
  referrer?: string;
  landing_page?: string;
  source?: string;
};

function safeReferrer(value: string) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return `${url.origin}${url.pathname}`;
  } catch {
    return undefined;
  }
}

function currentAttribution(): Attribution {
  const params = new URLSearchParams(window.location.search);
  const allowedParams = new URLSearchParams();
  campaignKeys.forEach((key) => {
    const value = params.get(key);
    if (value) allowedParams.set(key, value.slice(0, 200));
  });
  const query = allowedParams.toString();
  const referrer = safeReferrer(document.referrer);
  const utmSource = params.get("utm_source")?.slice(0, 200) || undefined;
  return {
    utm_source: utmSource,
    utm_campaign: params.get("utm_campaign")?.slice(0, 200) || undefined,
    utm_content: params.get("utm_content")?.slice(0, 200) || undefined,
    referrer,
    landing_page: `${window.location.pathname}${query ? `?${query}` : ""}`,
    source: utmSource || (referrer ? "referral" : "direct"),
  };
}

export function initializeAttribution() {
  if (typeof window === "undefined") return;
  try {
    if (!sessionStorage.getItem(attributionKey)) {
      sessionStorage.setItem(attributionKey, JSON.stringify(currentAttribution()));
    }
  } catch {
    // Tracking must never block the booking experience.
  }
}

export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  initializeAttribution();
  try {
    return JSON.parse(sessionStorage.getItem(attributionKey) || "{}") as Attribution;
  } catch {
    return currentAttribution();
  }
}

export function campaignContext() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(campaignKeys.flatMap((key) => {
    const value = params.get(key);
    return value ? [[key, value.slice(0, 200)]] : [];
  }));
}
