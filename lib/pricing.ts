import type { RoutePrice } from "@/data/routes";
import { routeEvidenceByDataKey } from "@/data/seo/route-evidence.mjs";
import { legacyPriceFallbackMappings } from "@/data/seo/route-knowledge/phase1.mjs";
import { resolveBookingPriceQuote } from "@/lib/booking-pricing.mjs";
export type ServiceType = "shared" | "private"; export type VehicleType = "4-seat" | "7-seat" | "limo";
export type CargoDetails = { lengthCm: number; widthCm: number; heightCm: number; weightKg: number };
export type BookingPriceQuote = { kind: "STARTING_FROM" | "ESTIMATE" | "CONTACT"; amount: number | null; unit: "PER_PERSON" | "PER_TRIP" | null };
export function quotePrice(route: RoutePrice | undefined, need: "ride" | "parcel", service: ServiceType, vehicle: VehicleType): BookingPriceQuote {
  return resolveBookingPriceQuote({
    route,
    evidence: route ? routeEvidenceByDataKey[route.id] : undefined,
    legacyMappings: [...legacyPriceFallbackMappings],
    need,
    service,
    vehicle,
  }) as BookingPriceQuote;
}
export function estimateArrival(durationMinutes: number, service: ServiceType) { const now = new Date(); const min = service === "shared" ? 15 : 5; const max = service === "shared" ? 30 : 10; const format = (date: Date) => date.toLocaleTimeString("vi-VN", { hour:"2-digit", minute:"2-digit" }); return `${format(new Date(now.getTime() + (durationMinutes + min) * 60000))} – ${format(new Date(now.getTime() + (durationMinutes + max) * 60000))}`; }
