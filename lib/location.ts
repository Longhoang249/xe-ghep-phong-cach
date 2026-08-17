export type LocationResult = { label: string; lat?: number; lng?: number };
export interface LocationProvider { search(query: string): Promise<LocationResult[]>; current(): Promise<LocationResult>; }
export class BrowserLocationProvider implements LocationProvider {
  async search(query: string) { return query.trim() ? [{ label: query.trim() }] : []; }
  current() { return new Promise<LocationResult>((resolve, reject) => { if (!navigator.geolocation) return reject(new Error("UNSUPPORTED")); navigator.geolocation.getCurrentPosition(({ coords }) => resolve({ label: "Vị trí hiện tại", lat: coords.latitude, lng: coords.longitude }), () => reject(new Error("DENIED")), { enableHighAccuracy: false, timeout: 8000 }); }); }
}
