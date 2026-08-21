import type { RoutePrice } from "@/data/routes";
import { allowsFormulaPriceFallback } from "@/lib/seo/publication.mjs";
export type ServiceType = "shared" | "private"; export type VehicleType = "4-seat" | "7-seat" | "limo";
export type CargoDetails = { lengthCm: number; widthCm: number; heightCm: number; weightKg: number };
const roundTenThousand = (value: number) => Math.ceil(value / 10000) * 10000;
export function estimatePrice(route: RoutePrice | undefined, need: "ride" | "parcel", service: ServiceType, vehicle: VehicleType, passengers: number, distanceKm?: number, cargo?: CargoDetails) {
  const distance = route?.distanceKm || distanceKm;
  if (!distance) return null;
  const allowFormulaFallback = allowsFormulaPriceFallback(route);
  if (need === "parcel") {
    const volumetricWeight = cargo ? (cargo.lengthCm * cargo.widthCm * cargo.heightCm) / 6000 : 0;
    const chargeableWeight = Math.max(cargo?.weightKg || 0, volumetricWeight, 1);
    const base = route?.parcelPrice || (allowFormulaFallback ? Math.max(150000, roundTenThousand(distance * 1200)) : null);
    if (!base) return null;
    return roundTenThousand(base + Math.max(0, chargeableWeight - 5) * 6000);
  }
  if (route) {
    if (vehicle === "limo") return allowFormulaFallback ? roundTenThousand(distance * 18000) : null;
    if (service === "shared") return route.sharedPrice ? route.sharedPrice * passengers : allowFormulaFallback ? roundTenThousand(distance * 3200) * passengers : null;
    return vehicle === "7-seat"
      ? route.private7Price || (allowFormulaFallback ? Math.max(300000, roundTenThousand(distance * 14500)) : null)
      : route.private4Price || (allowFormulaFallback ? Math.max(250000, roundTenThousand(distance * 11500)) : null);
  }
  if (service === "shared") return Math.max(120000, roundTenThousand(distance * 3200)) * passengers;
  return Math.max(vehicle === "7-seat" ? 300000 : 250000, roundTenThousand(distance * (vehicle === "7-seat" ? 14500 : 11500)));
}
export function estimateArrival(durationMinutes: number, service: ServiceType) { const now = new Date(); const min = service === "shared" ? 15 : 5; const max = service === "shared" ? 30 : 10; const format = (date: Date) => date.toLocaleTimeString("vi-VN", { hour:"2-digit", minute:"2-digit" }); return `${format(new Date(now.getTime() + (durationMinutes + min) * 60000))} – ${format(new Date(now.getTime() + (durationMinutes + max) * 60000))}`; }
