import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import RoutesDirectory from "@/components/RoutesDirectory";
import TrackedLink from "@/components/TrackedLink";
import { publishedRoutes as routes } from "@/data/seo/published-content";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Danh sách tuyến xe ghép hai chiều",
  description: "Tìm tuyến xe ghép hai chiều Hải Dương – Hải Phòng – Quảng Ninh, bao xe 4–7 chỗ, sân bay và các tuyến liên tỉnh.",
  alternates: { canonical: "/tuyen-xe" },
  openGraph: {
    type: "website",
    url: "/tuyen-xe",
    title: "Danh sách tuyến xe ghép hai chiều",
    description: "Tìm tuyến xe Phong Cách đang tiếp nhận và gọi để kiểm tra thông tin theo nhu cầu thực tế.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Danh sách tuyến xe ghép Phong Cách" }],
  },
};

export default function RoutesPage() {
  const pageUrl = absoluteUrl("/tuyen-xe");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Danh sách tuyến xe ghép hai chiều",
        inLanguage: siteConfig.language,
        dateModified: siteConfig.contentUpdatedAt,
        isPartOf: { "@id": `${absoluteUrl()}#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "Tuyến xe", item: pageUrl },
        ],
      },
      {
        "@type": "ItemList",
        name: "Các tuyến xe ghép Phong Cách",
        numberOfItems: routes.length,
        itemListElement: routes.map((route, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: `${route.origin} ⇄ ${route.destination}`,
          url: absoluteUrl(`/${route.slug}`),
        })),
      },
    ],
  };

  return (
    <main className="inner-page">
      <JsonLd data={jsonLd} />
      <header className="inner-header"><Link className="brand" href="/"><span className="brand-mark">PC</span><span><strong>PHONG CÁCH</strong><small>Xe ghép & bao xe liên tỉnh</small></span></Link><div className="inner-header-actions"><Link className="inner-blog-link" href="/blog">Blog tuyến xe</Link><TrackedLink className="btn btn-primary" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "routes_directory_header" }}>☎ Gọi tư vấn</TrackedLink></div></header>
      <section className="directory-hero"><Link href="/">← Trang chủ</Link><span className="section-kicker">MẠNG LƯỚI TUYẾN XE</span><h1>Xe ghép Hải Dương<br />Hải Phòng · Quảng Ninh.</h1><p>Chọn tuyến bạn quan tâm và gọi Phong Cách để kiểm tra xe theo nhu cầu thực tế.</p></section>
      <RoutesDirectory routes={routes} />
    </main>
  );
}
