import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import RouteViewTracker from "@/components/RouteViewTracker";
import TrackedLink from "@/components/TrackedLink";
import { blogPostForSlug, blogPosts } from "@/data/blog-posts";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.route.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostForSlug(slug);
  if (!post) return {};
  const title = post.title;
  const description = post.excerpt;
  const canonical = `/${post.route.slug}`;
  const pageUrl = absoluteUrl(canonical);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: pageUrl,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [],
    },
    twitter: { card: "summary", title, description, images: [] },
  };
}

export default async function RouteDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPostForSlug(slug);
  if (!post) notFound();
  const route = post.route;

  const forwardBookingUrl = `/?from=${encodeURIComponent(route.origin)}&to=${encodeURIComponent(route.destination)}#dat-xe`;
  const relatedPosts = blogPosts
    .filter((item) => item.route.id !== route.id && item.route.region === route.region)
    .slice(0, 3);
  const publicSeoPrice = route.id === "hd-pt" ? route.sharedPrice : null;

  const faq = [
    {
      q: `Phong Cách có xe tuyến ${route.origin} – ${route.destination} không?`,
      a: `Có. Phong Cách tiếp nhận nhu cầu xe ghép, bao xe 4–7 chỗ và gửi hàng trên tuyến ${route.origin} – ${route.destination} cả hai chiều.`,
    },
    {
      q: `Muốn đi tuyến ${route.origin} – ${route.destination} thì liên hệ thế nào?`,
      a: `Gọi ${siteConfig.phoneDisplay} và cho Phong Cách biết nơi đón, nơi trả và thời điểm bạn muốn đi. Bên mình sẽ kiểm tra xe phù hợp.`,
    },
    {
      q: "Website có cung cấp lộ trình, quãng đường và thời gian cố định không?",
      a: "Không. Các thông tin này thay đổi theo địa chỉ đón trả, thời điểm, tình trạng giao thông và xe được bố trí. Phong Cách trao đổi trực tiếp cho từng nhu cầu.",
    },
    {
      q: "Giá xe được xác nhận như thế nào?",
      a: "Phong Cách xác nhận mức giá sau khi biết điểm đón, điểm trả, thời điểm, số khách và nhu cầu hành lý hoặc hàng hóa.",
    },
  ];
  const pageUrl = absoluteUrl(`/${route.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `Xe ghép ${route.origin} – ${route.destination} 2 chiều`,
        inLanguage: siteConfig.language,
        dateModified: siteConfig.contentUpdatedAt,
        isPartOf: { "@id": `${absoluteUrl()}#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#service` },
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        url: pageUrl,
        inLanguage: siteConfig.language,
        datePublished: siteConfig.contentUpdatedAt,
        dateModified: siteConfig.contentUpdatedAt,
        author: { "@id": `${absoluteUrl()}#organization` },
        publisher: { "@id": `${absoluteUrl()}#organization` },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        keywords: post.keywords.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
          { "@type": "ListItem", position: 3, name: `${route.origin} ⇄ ${route.destination}`, item: pageUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `Xe ghép ${route.origin} – ${route.destination} 2 chiều`,
        serviceType: "Xe ghép và bao xe liên tỉnh",
        provider: { "@id": `${absoluteUrl()}#organization` },
        areaServed: [route.origin, route.destination].map((name) => ({ "@type": "AdministrativeArea", name })),
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: pageUrl,
          servicePhone: { "@type": "ContactPoint", telephone: siteConfig.phone },
        },
        ...(publicSeoPrice ? {
          offers: {
            "@type": "Offer",
            price: publicSeoPrice,
            priceCurrency: "VND",
            description: `Giá xe ghép tham khảo cho tuyến ${route.origin} – ${route.destination}; mức cuối được xác nhận trước chuyến.`,
            url: pageUrl,
          },
        } : {}),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
  return (
    <main className="route-page">
      <JsonLd data={jsonLd} />
      <RouteViewTracker slug={route.slug} origin={route.origin} destination={route.destination} />
      <header className="inner-header">
        <Link className="brand" href="/"><span className="brand-mark">PC</span><span><strong>PHONG CÁCH</strong><small>Xe ghép & bao xe liên tỉnh</small></span></Link>
        <div className="inner-header-actions"><Link className="inner-blog-link" href="/blog">Blog tuyến xe</Link><TrackedLink className="btn btn-primary" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "route_header", route_slug: route.slug }}>☎ Gọi tư vấn</TrackedLink></div>
      </header>
      <section className="route-detail-hero">
        <div className="route-hero-copy">
          <nav className="route-breadcrumb" aria-label="Breadcrumb"><Link href="/">Trang chủ</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span aria-current="page">{route.origin} – {route.destination}</span></nav>
          <span className="route-eyebrow">{route.tag || "Xe ghép liên tỉnh"}</span>
          <h1>
            <small>Xe ghép</small>
            <span>{route.origin}</span>
            <b><i aria-hidden="true">⇄</i>{route.destination}</b>
          </h1>
          <div className="route-hero-tags" aria-label="Dịch vụ trên tuyến">
            <span>Xe ghép</span><span>Bao xe 4–7 chỗ</span><span>Gửi hàng theo chuyến</span>
          </div>
          <p className="route-answer">Phong Cách có xe phục vụ tuyến {route.origin} ⇄ {route.destination} cả hai chiều. Nếu bạn đang cần xe ghép, bao xe 4–7 chỗ hoặc gửi hàng theo chuyến, hãy gọi để Phong Cách kiểm tra xe phù hợp.</p>
          <div className="route-detail-actions">
            <TrackedLink className="btn btn-primary" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "route_hero", route_slug: route.slug }}>☎ Gọi {siteConfig.phoneDisplay}</TrackedLink>
            <TrackedLink className="btn btn-ghost" href={forwardBookingUrl} eventName="booking_start" eventData={{ placement: "route_hero", route_slug: route.slug }}>Gửi thông tin chuyến</TrackedLink>
          </div>
        </div>
        <aside className="route-summary-card">
          <span>PHONG CÁCH CÓ XE CHO TUYẾN NÀY</span>
          {publicSeoPrice ? <div className="route-price-highlight"><small>Giá xe ghép tham khảo</small><strong>Từ {Math.round(publicSeoPrice / 1000)}.000đ/người</strong></div> : null}
          <div className="route-call-highlight"><small>Bạn muốn đi {route.origin} – {route.destination}?</small><strong>Gọi {siteConfig.phoneDisplay}</strong></div>
          <p>Không áp dụng một lộ trình, quãng đường hay thời gian cố định. Phong Cách sẽ trao đổi theo nhu cầu chuyến thực tế.</p>
          <TrackedLink className="btn btn-primary route-call-button" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "route_summary", route_slug: route.slug }}>Gọi Phong Cách ngay →</TrackedLink>
        </aside>
      </section>
      <section className="route-commercial" aria-labelledby="route-service-title">
        <article className="route-seo-copy">
          <span className="section-kicker">XE {route.origin.toUpperCase()} ĐI {route.destination.toUpperCase()}</span>
          <h2 id="route-service-title">Phong Cách có xe phục vụ tuyến {route.origin} – {route.destination}</h2>
          <p>Trang này giúp khách đang tìm xe {route.origin} đi {route.destination}, xe ghép {route.origin} – {route.destination} hoặc xe {route.destination} về {route.origin} biết rằng Phong Cách có tiếp nhận nhu cầu trên tuyến.</p>
          <ul className="route-keyword-list">
            <li>Xe ghép {route.origin} – {route.destination}</li>
            <li>Bao xe 4–7 chỗ {route.origin} đi {route.destination}</li>
            <li>Gửi hàng theo chuyến {route.origin} – {route.destination}</li>
          </ul>
          <p className="route-variable-note"><b>Mỗi chuyến có điều kiện khác nhau.</b> Lộ trình, thời gian, điểm đón trả và chi phí được trao đổi trực tiếp khi khách gọi.</p>
        </article>
        <aside className="route-call-panel">
          <span className="section-kicker">MUỐN ĐI TUYẾN NÀY?</span>
          <h2>Gọi Phong Cách kiểm tra xe</h2>
          <p>Cho bên mình biết bạn cần đi từ đâu, đến đâu và thời điểm mong muốn. Phong Cách sẽ kiểm tra xe và trao đổi lại.</p>
          <TrackedLink className="btn btn-primary" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "route_commercial", route_slug: route.slug }}>☎ {siteConfig.phoneDisplay}</TrackedLink>
          <small>Gọi trực tiếp để có thông tin phù hợp với chuyến thực tế.</small>
        </aside>
      </section>
      <section className="route-article-guide" aria-labelledby="route-guide-title">
        <div className="route-article-heading">
          <span className="section-kicker">BÀI VIẾT VỀ TUYẾN XE</span>
          <h2 id="route-guide-title">Muốn đi {route.origin} – {route.destination}, bạn chỉ cần gọi</h2>
          <p>Phong Cách không dùng một thông tin cố định cho mọi khách. Mỗi yêu cầu được kiểm tra theo nơi đón, nơi trả và nhu cầu thực tế.</p>
        </div>
        <div className="route-article-steps">
          <article><span>01</span><h3>Cho biết nhu cầu</h3><p>Xe ghép, bao xe 4–7 chỗ hay gửi hàng theo chuyến trên tuyến {route.origin} – {route.destination}.</p></article>
          <article><span>02</span><h3>Cung cấp thông tin chuyến</h3><p>Nơi đón, nơi trả, thời điểm mong muốn, số khách và hành lý hoặc hàng hóa đi kèm.</p></article>
          <article><span>03</span><h3>Phong Cách kiểm tra xe</h3><p>Bên mình trao đổi xe phù hợp và xác nhận các thông tin cần thiết trước khi khách quyết định.</p></article>
        </div>
      </section>
      <section className="route-info">
        <div>
          <span className="section-kicker">DỊCH VỤ PHONG CÁCH</span><h2>Nhu cầu xe trên tuyến</h2>
          <div className="route-benefits">
            <article><b>01</b><h3>Xe ghép</h3><p>Tiếp nhận nhu cầu ghép xe trên tuyến, tùy tình trạng xe thực tế.</p></article>
            <article><b>02</b><h3>Bao xe 4–7 chỗ</h3><p>Dành cho khách muốn đi riêng; loại xe được trao đổi khi liên hệ.</p></article>
            <article><b>03</b><h3>Gửi hàng</h3><p>Tiếp nhận hàng theo chuyến sau khi biết loại hàng và nhu cầu thực tế.</p></article>
          </div>
        </div>
        <div className="faq"><span className="section-kicker">CÂU HỎI THƯỜNG GẶP</span><h2>Thông tin cần biết</h2>{faq.map((item) => <details key={item.q}><summary>{item.q}<span>＋</span></summary><p>{item.a}</p></details>)}</div>
      </section>
      {relatedPosts.length > 0 && <section className="related-routes"><div className="related-routes-heading"><div><span className="section-kicker">BÀI VIẾT LIÊN QUAN</span><h2>Xem thêm các tuyến Phong Cách có xe</h2></div><Link href="/blog">Vào Blog →</Link></div><div>{relatedPosts.map((item) => <Link href={`/${item.route.slug}`} key={item.route.id}><small>{item.category}</small><b>{item.route.origin} ⇄ {item.route.destination}</b><span>Đọc bài viết →</span></Link>)}</div></section>}
      <section className="final-cta"><div><span>TUYẾN {route.origin.toUpperCase()} – {route.destination.toUpperCase()}</span><h2>Phong Cách có xe cho tuyến này</h2><p>Muốn đi, hãy gọi để bên mình kiểm tra xe phù hợp.</p></div><TrackedLink className="btn btn-white" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "route_footer", route_slug: route.slug }}>☎ Gọi {siteConfig.phoneDisplay}</TrackedLink></section>
    </main>
  );
}
