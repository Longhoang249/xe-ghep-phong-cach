import { NextResponse } from "next/server";
import { locations } from "@/data/routes";

type PhotonProperties = {
  name?: string;
  housenumber?: string;
  street?: string;
  locality?: string;
  district?: string;
  city?: string;
  county?: string;
  state?: string;
  country?: string;
};

const clean = (value?: string) => value?.trim().replace(/\s+/g, " ") || "";

function resolveCity(properties: PhotonProperties, query: string) {
  const haystack = [properties.city, properties.county, properties.state, properties.district, query].filter(Boolean).join(" ").toLocaleLowerCase("vi");
  return locations.find((location) => haystack.includes(location.toLocaleLowerCase("vi"))) || clean(properties.city || properties.state);
}

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("q")?.trim();
  if (!query || query.length < 3) return NextResponse.json({ results: [] });

  const endpoint = new URL("https://photon.komoot.io/api/");
  endpoint.searchParams.set("q", `${query}, Việt Nam`);
  endpoint.searchParams.set("limit", "6");
  endpoint.searchParams.set("lat", "20.94");
  endpoint.searchParams.set("lon", "106.31");
  endpoint.searchParams.set("location_bias_scale", "0.25");

  try {
    const response = await fetch(endpoint, {
      headers: { "User-Agent": "XeGhepPhongCach/1.0 (https://xe-ghep-phong-cach.vercel.app)" },
      next: { revalidate: 86400 },
    });
    if (!response.ok) throw new Error("GEOCODER_UNAVAILABLE");
    const data = await response.json() as { features?: Array<{ properties?: PhotonProperties; geometry?: { coordinates?: [number, number] } }> };
    const results = (data.features || []).flatMap((feature, index) => {
      const properties = feature.properties || {};
      const coordinates = feature.geometry?.coordinates;
      if (!coordinates || properties.country && properties.country !== "Việt Nam") return [];
      const primary = clean([properties.housenumber, properties.street].filter(Boolean).join(" ") || properties.name || properties.street);
      const secondaryParts = [properties.locality, properties.district, properties.city, properties.state].map(clean).filter(Boolean);
      const secondary = Array.from(new Set(secondaryParts)).filter((part) => part !== primary).join(", ");
      const label = [primary, secondary].filter(Boolean).join(", ");
      if (!label) return [];
      return [{ id: `${coordinates[0]}-${coordinates[1]}-${index}`, label, primary, secondary, city: resolveCity(properties, query), lat: coordinates[1], lng: coordinates[0] }];
    });
    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ results: [], unavailable: true });
  }
}
