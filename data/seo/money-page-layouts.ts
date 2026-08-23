export type MoneyPageVisualService = {
  key: "shared" | "charter" | "parcel";
  title: string;
  copy: string;
  image: string;
  alt: string;
};

export type MoneyPageRelatedRoute = {
  href: string;
  label: string;
  eyebrow: string;
};

export type ScanFirstMoneyPageLayout = {
  variant: "scan-first";
  subline: string;
  heroImage: string;
  heroImageAlt: string;
  services: ReadonlyArray<MoneyPageVisualService>;
  relatedRoutes: ReadonlyArray<MoneyPageRelatedRoute>;
};

const moneyPageLayouts: Readonly<Record<string, ScanFirstMoneyPageLayout>> = Object.freeze({
  "hd-hp": Object.freeze({
    variant: "scan-first",
    subline: "Đón tận nơi, trả tận nơi. Có xe ghép, bao xe và gửi hàng hai chiều.",
    heroImage: "/images/hero-phong-cach-fleet.png",
    heroImageAlt: "Đội xe phục vụ tuyến Hải Dương - Hải Phòng",
    services: Object.freeze([
      Object.freeze({
        key: "shared",
        title: "Xe ghép",
        copy: "Phù hợp khách đi 1-2 người, tối ưu chi phí.",
        image: "/images/dich-vu-xe-4-cho.png",
        alt: "Xe 4 chỗ phục vụ khách đi ghép",
      }),
      Object.freeze({
        key: "charter",
        title: "Bao xe",
        copy: "Phù hợp gia đình, nhóm nhỏ, cần chủ động thời gian.",
        image: "/images/dich-vu-xe-7-cho.png",
        alt: "Xe 7 chỗ phục vụ khách bao xe",
      }),
      Object.freeze({
        key: "parcel",
        title: "Gửi hàng",
        copy: "Nhận gửi hàng theo chuyến thực tế, kiểm tra trước khi xác nhận.",
        image: "/images/gui-hang-theo-chuyen.png",
        alt: "Gửi hàng theo chuyến xe Phong Cách",
      }),
    ]),
    relatedRoutes: Object.freeze([
      Object.freeze({ href: "/xe-hai-duong-cat-bi", label: "Xe Hải Dương - Cát Bi", eyebrow: "SÂN BAY" }),
      Object.freeze({ href: "/xe-ghep-hai-duong-quang-ninh", label: "Xe Hải Dương - Quảng Ninh", eyebrow: "TUYẾN HAI CHIỀU" }),
      Object.freeze({ href: "/xe-ghep-hai-phong-quang-ninh", label: "Xe Hải Phòng - Quảng Ninh", eyebrow: "TUYẾN LIÊN QUAN" }),
    ]),
  }),
  "hd-qn": Object.freeze({
    variant: "scan-first",
    subline: "Đón tận nơi, trả tận nơi. Có xe ghép, bao xe và gửi hàng hai chiều.",
    heroImage: "/images/hero-phong-cach-fleet.png",
    heroImageAlt: "Đội xe phục vụ tuyến Hải Dương - Quảng Ninh",
    services: Object.freeze([
      Object.freeze({
        key: "shared",
        title: "Xe ghép",
        copy: "Phù hợp khách đi 1-2 người, tối ưu chi phí.",
        image: "/images/dich-vu-xe-4-cho.png",
        alt: "Xe 4 chỗ phục vụ khách đi ghép",
      }),
      Object.freeze({
        key: "charter",
        title: "Bao xe",
        copy: "Phù hợp gia đình, nhóm nhỏ, cần chủ động thời gian.",
        image: "/images/dich-vu-xe-7-cho.png",
        alt: "Xe 7 chỗ phục vụ khách bao xe",
      }),
      Object.freeze({
        key: "parcel",
        title: "Gửi hàng",
        copy: "Nhận gửi hàng theo chuyến thực tế, kiểm tra trước khi xác nhận.",
        image: "/images/gui-hang-theo-chuyen.png",
        alt: "Gửi hàng theo chuyến xe Phong Cách",
      }),
    ]),
    relatedRoutes: Object.freeze([
      Object.freeze({ href: "/xe-ghep-hai-duong-ha-long", label: "Xe Hải Dương - Hạ Long", eyebrow: "ĐIỂM ĐẾN ĐÃ XÁC NHẬN" }),
      Object.freeze({ href: "/xe-ghep-hai-duong-hai-phong", label: "Xe Hải Dương - Hải Phòng", eyebrow: "TUYẾN HAI CHIỀU" }),
      Object.freeze({ href: "/xe-ghep-hai-phong-quang-ninh", label: "Xe Hải Phòng - Quảng Ninh", eyebrow: "TUYẾN LIÊN QUAN" }),
    ]),
  }),
});

export function moneyPageLayoutForRoute(routeId: string) {
  return moneyPageLayouts[routeId] ?? null;
}
