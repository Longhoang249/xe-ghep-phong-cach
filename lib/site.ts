export const siteConfig = {
  name: "Xe Ghép Phong Cách",
  shortName: "Phong Cách",
  description: "Xe ghép, bao xe 4–7 chỗ và đưa đón tận nơi trên các tuyến liên tỉnh từ Hải Dương.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://xeghepphongcach.com",
  phone: "+84987663883",
  phoneNational: "0987663883",
  phoneDisplay: "0987 663 883",
  phoneHref: "tel:+84987663883",
  zaloFallbackUrl: "https://zalo.me/0987663883",
  locale: "vi_VN",
  language: "vi-VN",
  contentUpdatedAt: "2026-08-21T00:00:00+07:00",
  areas: ["Hải Dương", "Hải Phòng", "Quảng Ninh", "Hà Nội"],
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function officialProfiles() {
  return [
    process.env.NEXT_PUBLIC_ZALO_URL,
    process.env.NEXT_PUBLIC_FACEBOOK_URL,
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL,
  ].filter((value): value is string => Boolean(value));
}
