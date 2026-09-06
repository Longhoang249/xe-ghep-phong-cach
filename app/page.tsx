import type { Metadata } from "next";
import BookingExperience from "@/components/BookingExperience";
import JsonLd from "@/components/JsonLd";
import { publishedRoutes as routes } from "@/data/seo/published-content";
import { absoluteUrl, officialProfiles, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Xe ghép Hải Dương – Hải Phòng – Quảng Ninh",
  description: "Đặt xe ghép, bao xe 4–7 chỗ, đưa đón tận nơi từ Hải Dương đi Hải Phòng, Quảng Ninh, Hà Nội và chiều về.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const sameAs = officialProfiles();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "TaxiService"],
        "@id": `${absoluteUrl()}#organization`,
        name: siteConfig.name,
        legalName: "Xe Ghép Phong Cách Hải Dương",
        url: absoluteUrl(),
        logo: absoluteUrl("/favicon.svg"),
        image: absoluteUrl("/og.png"),
        telephone: siteConfig.phone,
        priceRange: "250.000đ - 1.500.000đ",
        currenciesAccepted: "VND",
        paymentAccepted: "Tiền mặt, Chuyển khoản ngân hàng",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hải Dương",
          addressRegion: "Hải Dương",
          addressCountry: "VN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 20.9372,
          longitude: 106.3146,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        areaServed: [
          "Hải Dương",
          "Hải Phòng",
          "Quảng Ninh",
          "Hà Nội",
          "Phú Thọ",
          "Vĩnh Phúc",
          "Ninh Bình",
          "Bắc Ninh",
          "Hưng Yên",
          "Thái Nguyên",
          "Nam Định",
        ].map((name) => ({ "@type": "AdministrativeArea", name })),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          availableLanguage: ["vi"],
        },
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl()}#website`,
        url: absoluteUrl(),
        name: siteConfig.name,
        inLanguage: siteConfig.language,
        publisher: { "@id": `${absoluteUrl()}#organization` },
      },
      {
        "@type": "Service",
        "@id": `${absoluteUrl()}#xe-ghep-lien-tinh`,
        name: "Dịch vụ xe ghép liên tỉnh",
        serviceType: "Xe ghép liên tỉnh",
        provider: { "@id": `${absoluteUrl()}#organization` },
        areaServed: siteConfig.areas.map((name) => ({ "@type": "AdministrativeArea", name })),
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: absoluteUrl(),
          servicePhone: { "@type": "ContactPoint", telephone: siteConfig.phone },
        },
      },
      {
        "@type": "Service",
        "@id": `${absoluteUrl()}#bao-xe-rieng`,
        name: "Dịch vụ bao xe riêng 4–7 chỗ",
        serviceType: "Bao xe liên tỉnh",
        provider: { "@id": `${absoluteUrl()}#organization` },
        areaServed: siteConfig.areas.map((name) => ({ "@type": "AdministrativeArea", name })),
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: absoluteUrl(),
          servicePhone: { "@type": "ContactPoint", telephone: siteConfig.phone },
        },
      },
      {
        "@type": "Service",
        "@id": `${absoluteUrl()}#gui-hang-theo-chuyen`,
        name: "Dịch vụ gửi hàng theo chuyến",
        serviceType: "Gửi hàng theo chuyến xe liên tỉnh",
        provider: { "@id": `${absoluteUrl()}#organization` },
        areaServed: siteConfig.areas.map((name) => ({ "@type": "AdministrativeArea", name })),
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: absoluteUrl(),
          servicePhone: { "@type": "ContactPoint", telephone: siteConfig.phone },
        },
      },
    ],
  };
  return <><JsonLd data={jsonLd} /><BookingExperience routes={routes} /></>;
}
