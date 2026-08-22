import { routePriceValuesFromOwnerFacts } from "@/data/seo/route-knowledge/owner-verification.mjs";

export type RoutePrice = {
  id: string; origin: string; destination: string; slug: string; distanceKm: number | null; durationMinutes: number | null;
  sharedPrice: number | null; private4Price: number | null; private7Price: number | null; parcelPrice: number | null;
  tag?: string; region: "ha-noi" | "san-bay" | "mien-bac" | "mien-trung-gan"; featured?: boolean;
  priceFallbackPolicy?: "LEGACY_FORMULA" | "GOVERNED";
};

type RoutePriceFields = Pick<RoutePrice, "sharedPrice" | "private4Price" | "private7Price" | "parcelPrice">;

function ownerPriceFields(dataKey: string): RoutePriceFields {
  const values = routePriceValuesFromOwnerFacts(dataKey);
  if (!values) throw new Error(`Missing Phase 1 owner price record: ${dataKey}`);
  return values as RoutePriceFields;
}

const hdHpPrices = ownerPriceFields("hd-hp");
const hdCbPrices = ownerPriceFields("hd-cb");
const hdQnPrices = ownerPriceFields("hd-qn");
const hdHaLongPrices = ownerPriceFields("hd-qn");
const hpQnPrices = ownerPriceFields("hp-qn");

// Phase 1 passenger prices are sourced from the Owner evidence record above.
export const routes: RoutePrice[] = [
  { id:"hd-hn",origin:"Hải Dương",destination:"Hà Nội",slug:"xe-ghep-hai-duong-ha-noi",distanceKm:58,durationMinutes:80,sharedPrice:150000,private4Price:500000,private7Price:650000,parcelPrice:150000,region:"ha-noi",featured:true },
  { id:"hd-nb",origin:"Hải Dương",destination:"Nội Bài",slug:"xe-hai-duong-noi-bai",distanceKm:75,durationMinutes:95,sharedPrice:300000,private4Price:700000,private7Price:850000,parcelPrice:150000,tag:"Đưa đón sân bay",region:"san-bay",featured:true },
  { id:"hd-hp",origin:"Hải Dương",destination:"Hải Phòng",slug:"xe-ghep-hai-duong-hai-phong",distanceKm:48,durationMinutes:65,...hdHpPrices,region:"mien-bac",featured:true },
  { id:"hd-cb",origin:"Hải Dương",destination:"Cát Bi",slug:"xe-hai-duong-cat-bi",distanceKm:58,durationMinutes:75,...hdCbPrices,tag:"Đưa đón sân bay",region:"san-bay" },
  { id:"hd-qn",origin:"Hải Dương",destination:"Quảng Ninh",slug:"xe-ghep-hai-duong-quang-ninh",distanceKm:105,durationMinutes:120,...hdQnPrices,region:"mien-bac",featured:true },
  { id:"hd-ha-long",origin:"Hải Dương",destination:"Hạ Long",slug:"xe-ghep-hai-duong-ha-long",distanceKm:null,durationMinutes:null,...hdHaLongPrices,region:"mien-bac",priceFallbackPolicy:"GOVERNED" },
  { id:"hp-qn",origin:"Hải Phòng",destination:"Quảng Ninh",slug:"xe-ghep-hai-phong-quang-ninh",distanceKm:null,durationMinutes:null,...hpQnPrices,region:"mien-bac",featured:true },
  { id:"hd-bn",origin:"Hải Dương",destination:"Bắc Ninh",slug:"xe-ghep-hai-duong-bac-ninh",distanceKm:48,durationMinutes:65,sharedPrice:250000,private4Price:500000,private7Price:650000,parcelPrice:150000,region:"mien-bac" },
  { id:"hd-bg",origin:"Hải Dương",destination:"Bắc Giang",slug:"xe-ghep-hai-duong-bac-giang",distanceKm:66,durationMinutes:85,sharedPrice:300000,private4Price:650000,private7Price:800000,parcelPrice:150000,region:"mien-bac" },
  { id:"hd-tn",origin:"Hải Dương",destination:"Thái Nguyên",slug:"xe-ghep-hai-duong-thai-nguyen",distanceKm:108,durationMinutes:140,sharedPrice:400000,private4Price:950000,private7Price:1200000,parcelPrice:180000,region:"mien-bac" },
  { id:"hd-vp",origin:"Hải Dương",destination:"Vĩnh Phúc",slug:"xe-ghep-hai-duong-vinh-phuc",distanceKm:112,durationMinutes:145,sharedPrice:400000,private4Price:1000000,private7Price:1250000,parcelPrice:180000,region:"mien-bac" },
  { id:"hd-pt",origin:"Hải Dương",destination:"Phú Thọ",slug:"xe-ghep-hai-duong-phu-tho",distanceKm:145,durationMinutes:180,sharedPrice:400000,private4Price:1300000,private7Price:1550000,parcelPrice:220000,region:"mien-bac" },
  { id:"hd-tb",origin:"Hải Dương",destination:"Thái Bình",slug:"xe-ghep-hai-duong-thai-binh",distanceKm:65,durationMinutes:90,sharedPrice:250000,private4Price:600000,private7Price:750000,parcelPrice:150000,region:"mien-bac" },
  { id:"hd-nd",origin:"Hải Dương",destination:"Nam Định",slug:"xe-ghep-hai-duong-nam-dinh",distanceKm:93,durationMinutes:125,sharedPrice:350000,private4Price:850000,private7Price:1050000,parcelPrice:160000,region:"mien-bac" },
  { id:"hd-hy",origin:"Hải Dương",destination:"Hưng Yên",slug:"xe-ghep-hai-duong-hung-yen",distanceKm:48,durationMinutes:65,sharedPrice:250000,private4Price:null,private7Price:null,parcelPrice:150000,region:"mien-bac" },
  { id:"hd-hanam",origin:"Hải Dương",destination:"Hà Nam",slug:"xe-ghep-hai-duong-ha-nam",distanceKm:86,durationMinutes:115,sharedPrice:350000,private4Price:null,private7Price:null,parcelPrice:150000,region:"mien-bac" },
  { id:"hd-pl",origin:"Hải Dương",destination:"Phủ Lý",slug:"xe-ghep-hai-duong-phu-ly",distanceKm:88,durationMinutes:120,sharedPrice:400000,private4Price:800000,private7Price:1000000,parcelPrice:150000,region:"mien-bac" },
  { id:"hd-nb2",origin:"Hải Dương",destination:"Ninh Bình",slug:"xe-ghep-hai-duong-ninh-binh",distanceKm:125,durationMinutes:155,sharedPrice:400000,private4Price:1100000,private7Price:1350000,parcelPrice:200000,region:"mien-trung-gan",featured:true },
  { id:"hd-th",origin:"Hải Dương",destination:"Thanh Hoá",slug:"xe-ghep-hai-duong-thanh-hoa",distanceKm:190,durationMinutes:230,sharedPrice:500000,private4Price:1900000,private7Price:2300000,parcelPrice:300000,region:"mien-trung-gan",tag:"Tuyến đường dài" },
];

const featuredPriority = ["hd-hp", "hd-qn", "hp-qn", "hd-hn", "hd-nb", "hd-nb2"];
export const popularRoutes = featuredPriority
  .map((id) => routes.find((route) => route.id === id))
  .filter((route): route is RoutePrice => Boolean(route?.featured));
export const locations = Array.from(new Set(routes.flatMap((route) => [route.origin, route.destination])));
export function findRoute(origin: string, destination: string) { return routes.find((route) => (route.origin === origin && route.destination === destination) || (route.origin === destination && route.destination === origin)); }
