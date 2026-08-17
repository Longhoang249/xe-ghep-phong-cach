import type { Metadata } from "next";
import BookingExperience from "@/components/BookingExperience";
import { popularRoutes } from "@/data/routes";

export const metadata: Metadata = {
  title: "Xe Ghép Phong Cách | Xe ghép liên tỉnh Hải Dương",
  description: "Đặt xe ghép, bao xe, đưa đón sân bay và gửi hàng từ Hải Dương đi Hà Nội, Nội Bài, Hải Phòng và các tỉnh.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Xe Ghép Phong Cách",
    telephone: "+84987663883",
    areaServed: ["Hải Dương", "Hà Nội", "Hải Phòng", "Quảng Ninh"],
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://xe-ghep-phong-cach.vercel.app",
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BookingExperience routes={popularRoutes} /></>;
}
