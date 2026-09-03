import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import MoneyLandingPage from "@/components/MoneyLandingPage";
import RouteViewTracker from "@/components/RouteViewTracker";
import TrackedLink from "@/components/TrackedLink";
import { blogPostForSlug, blogPosts } from "@/data/blog-posts";
import { moneyPageLayoutForRoute } from "@/data/seo/money-page-layouts";
import { moneyPageUpgradeForRoute } from "@/data/seo/money-page-upgrades.mjs";
import { routeEvidenceByDataKey } from "@/data/seo/route-evidence.mjs";
import { publicEvidenceValue, publicPricePresentation } from "@/lib/seo/publication.mjs";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.route.slug }));
}

function formatVnd(value: number | null, suffix = "") {
  if (value == null) return "Liên hệ";
  return `${new Intl.NumberFormat("vi-VN").format(value)}đ${suffix}`;
}

function formatGovernedPrice(fact: unknown, suffix = "") {
  const presentation = publicPricePresentation(fact);
  if (presentation.kind === "CONTACT" || presentation.amount == null) return "Liên hệ";
  const amount = `${new Intl.NumberFormat("vi-VN").format(presentation.amount)}đ${suffix}`;
  return presentation.prefix ? `${presentation.prefix} ${amount}` : amount;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostForSlug(slug);
  if (!post) return {};
  const upgrade = moneyPageUpgradeForRoute(post.route.id);
  const title = upgrade?.title ?? post.title;
  const description = upgrade?.description ?? post.excerpt;
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
  const upgrade = moneyPageUpgradeForRoute(route.id);
  const landingLayout = moneyPageLayoutForRoute(route.id);
  const isCommercialUpgrade = Boolean(upgrade);

  const forwardBookingUrl = `/?from=${encodeURIComponent(route.origin)}&to=${encodeURIComponent(route.destination)}#dat-xe`;
  const zaloUrl = process.env.NEXT_PUBLIC_ZALO_URL || siteConfig.zaloFallbackUrl;
  const relatedPosts = blogPosts
    .filter((item) => item.route.id !== route.id && item.route.region === route.region)
    .slice(0, 3);
  const routeEvidence = routeEvidenceByDataKey[route.id as keyof typeof routeEvidenceByDataKey];
  const legacyPublicSharedPrice = route.id === "hd-pt" ? route.sharedPrice : null;
  const publicSeoPrice = publicEvidenceValue(routeEvidence?.price) ?? legacyPublicSharedPrice;
  const publicCharter4Price = publicEvidenceValue(routeEvidence?.charter4Price);
  const publicCharter7Price = publicEvidenceValue(routeEvidence?.charter7Price);
  const hasOwnerVerifiedService = publicEvidenceValue(routeEvidence?.doorToDoor) === true;
  const showGovernedPricePanel = Boolean(routeEvidence);
  const showPriceHighlight = showGovernedPricePanel || publicSeoPrice != null;
  const publicPriceRows = [
    { label: "Xe ghép", detail: "1 khách", value: publicSeoPrice, suffix: "/người" },
    { label: "Bao xe 4 chỗ", detail: "Đi riêng theo chuyến", value: publicCharter4Price, suffix: "/chuyến" },
    { label: "Bao xe 7 chỗ", detail: "Đi riêng theo chuyến", value: publicCharter7Price, suffix: "/chuyến" },
  ];
  const commercialPriceRows = [
    { label: "Giá xe ghép", detail: "Theo người", text: formatGovernedPrice(routeEvidence?.price, "/người") },
    { label: "Bao xe 4 chỗ", detail: "Đi riêng theo chuyến", text: formatGovernedPrice(routeEvidence?.charter4Price, "/chuyến") },
    { label: "Bao xe 7 chỗ", detail: "Đi riêng theo chuyến", text: formatGovernedPrice(routeEvidence?.charter7Price, "/chuyến") },
    { label: "Gửi hàng", detail: "Theo hàng và chuyến", text: formatGovernedPrice(routeEvidence?.parcelPrice) },
  ];

  const legacyFaq = [
    {
      q: `Phong Cách có xe tuyến ${route.origin} – ${route.destination} không?`,
      a: hasOwnerVerifiedService
        ? `Có. Phong Cách phục vụ xe ghép và bao xe 4–7 chỗ trên tuyến ${route.origin} – ${route.destination} cả hai chiều.`
        : `Có. Phong Cách tiếp nhận nhu cầu xe ghép, bao xe 4–7 chỗ và gửi hàng trên tuyến ${route.origin} – ${route.destination} cả hai chiều.`,
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
  const faq = (upgrade?.faq ?? legacyFaq) as ReadonlyArray<{ q: string; a: string }>;
  const defaultBookingSteps = [
    { title: "Chọn nhu cầu", copy: "Cho biết bạn cần xe ghép, bao xe 4 hoặc 7 chỗ, hay gửi hàng theo chuyến." },
    { title: "Gửi thông tin chuyến", copy: "Ngày, thời gian mong muốn, địa chỉ đón/trả, số khách, hành lý hoặc thông tin hàng hóa." },
    { title: "Xác nhận trước khi đi", copy: "Phong Cách kiểm tra xe và giá chuyến. Đặt trước không mất phí; thanh toán sau chuyến." },
  ];
  const bookingGuide = upgrade?.bookingGuide;
  const bookingSteps = bookingGuide?.steps ?? defaultBookingSteps;
  const pageUrl = absoluteUrl(`/${route.slug}`);
  const serviceName = upgrade?.h1 ?? `Xe ghép ${route.origin} – ${route.destination} 2 chiều`;
  const breadcrumbItems = isCommercialUpgrade
    ? [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: absoluteUrl() },
        { "@type": "ListItem", position: 2, name: "Tuyến xe", item: absoluteUrl("/tuyen-xe") },
        { "@type": "ListItem", position: 3, name: upgrade.h1, item: pageUrl },
      ]
    : [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: absoluteUrl() },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
        { "@type": "ListItem", position: 3, name: `${route.origin} ⇄ ${route.destination}`, item: pageUrl },
      ];
  const serviceOffers = isCommercialUpgrade
    ? {
        "@type": "Offer",
        category: "Giá bắt đầu",
        description: upgrade.schemaOfferDescription,
        url: pageUrl,
      }
    : publicSeoPrice
      ? {
          "@type": "Offer",
          price: publicSeoPrice,
          priceCurrency: "VND",
          description: `Giá xe ghép tham khảo cho tuyến ${route.origin} – ${route.destination}; mức cuối được xác nhận trước chuyến.`,
          url: pageUrl,
        }
      : null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: serviceName,
        inLanguage: siteConfig.language,
        dateModified: upgrade?.updatedAt ?? siteConfig.contentUpdatedAt,
        isPartOf: { "@id": `${absoluteUrl()}#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#service` },
      },
      ...(!isCommercialUpgrade ? [{
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
        }] : []),
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: breadcrumbItems,
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: serviceName,
        serviceType: "Xe ghép và bao xe liên tỉnh",
        provider: { "@id": `${absoluteUrl()}#organization` },
        areaServed: [route.origin, route.destination].map((name) => ({ "@type": "AdministrativeArea", name })),
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: pageUrl,
          servicePhone: { "@type": "ContactPoint", telephone: siteConfig.phone },
        },
        ...(serviceOffers ? { offers: serviceOffers } : {}),
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
  if (landingLayout && upgrade) {
    return (
      <main className="route-page">
        <JsonLd data={jsonLd} />
        <RouteViewTracker slug={route.slug} origin={route.origin} destination={route.destination} />
        <header className="inner-header">
          <Link className="brand" href="/"><span className="brand-mark">PC</span><span><strong>PHONG CÁCH</strong><small>Xe ghép & bao xe liên tỉnh</small></span></Link>
          <div className="inner-header-actions"><Link className="inner-blog-link" href="/blog">Blog tuyến xe</Link><TrackedLink className="btn btn-primary" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "route_header", route_slug: route.slug }}>☎ Gọi tư vấn</TrackedLink></div>
        </header>
        <MoneyLandingPage
          route={route}
          h1={upgrade.h1}
          layout={landingLayout}
          prices={commercialPriceRows}
          faq={faq}
          support={upgrade.support}
          endpointOrientation={{
            names: upgrade.endpointNames,
            kicker: upgrade.endpointKicker,
            title: upgrade.endpointTitle,
            intro: upgrade.endpointIntro,
            boundary: upgrade.endpointBoundary,
          }}
          bookingUrl={forwardBookingUrl}
          phoneHref={siteConfig.phoneHref}
          phoneDisplay={siteConfig.phoneDisplay}
          zaloUrl={zaloUrl}
        />
      </main>
    );
  }
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
          {isCommercialUpgrade ? (
            <nav className="route-breadcrumb" aria-label="Breadcrumb"><Link href="/">Trang chủ</Link><span>›</span><Link href="/tuyen-xe">Tuyến xe</Link><span>›</span><span aria-current="page">{upgrade.h1}</span></nav>
          ) : (
            <nav className="route-breadcrumb" aria-label="Breadcrumb"><Link href="/">Trang chủ</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span aria-current="page">{route.origin} – {route.destination}</span></nav>
          )}
          <span className="route-eyebrow">{upgrade?.eyebrow ?? route.tag ?? "Xe ghép liên tỉnh"}</span>
          {isCommercialUpgrade ? <h1 className="route-commercial-h1">{upgrade.h1}</h1> : <h1>
              <small>Xe ghép</small>
              <span>{route.origin}</span>
              <b><i aria-hidden="true">⇄</i>{route.destination}</b>
            </h1>}
          <div className="route-hero-tags" aria-label="Dịch vụ trên tuyến">
            {(upgrade?.serviceTags ?? ["Xe ghép", "Bao xe 4–7 chỗ", hasOwnerVerifiedService ? "Đón tận nhà" : "Gửi hàng theo chuyến"]).map((tag: string) => <span key={tag}>{tag}</span>)}
          </div>
          <p className="route-answer">{upgrade?.answer ?? <>Phong Cách có xe phục vụ tuyến {route.origin} ⇄ {route.destination} cả hai chiều. Nếu bạn đang cần xe ghép, bao xe 4–7 chỗ{hasOwnerVerifiedService ? "" : " hoặc gửi hàng theo chuyến"}, hãy gọi để Phong Cách kiểm tra xe phù hợp.</>}</p>
          {isCommercialUpgrade ? <div className="route-hero-price-grid" aria-label="Giá bắt đầu">
            {commercialPriceRows.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.text}</strong></div>)}
          </div> : null}
          <div className="route-detail-actions">
            <TrackedLink className="btn btn-primary" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "route_hero", route_slug: route.slug }}>☎ Gọi {siteConfig.phoneDisplay}</TrackedLink>
            {isCommercialUpgrade ? <TrackedLink className="btn btn-ghost" href={zaloUrl} target="_blank" rel="noopener noreferrer" eventName="click_zalo" eventData={{ placement: "route_hero", route_slug: route.slug }}>Nhắn Zalo</TrackedLink> : <TrackedLink className="btn btn-ghost" href={forwardBookingUrl} eventName="booking_start" eventData={{ placement: "route_hero", route_slug: route.slug }}>Gửi thông tin chuyến</TrackedLink>}
          </div>
          {isCommercialUpgrade ? <TrackedLink className="route-booking-link" href={forwardBookingUrl} eventName="booking_start" eventData={{ placement: "route_hero", route_slug: route.slug }}>{upgrade.heroBookingPrompt ? `${upgrade.heroBookingPrompt} →` : "Hoặc gửi điểm đón, điểm trả và thời gian chuyến →"}</TrackedLink> : null}
        </div>
        <aside className="route-summary-card">
          {isCommercialUpgrade ? <>
            <span>{upgrade.summaryTitle}</span>
            <div className="route-summary-list">{upgrade.summaryItems.map((item: string) => <p key={item}><i aria-hidden="true">✓</i>{item}</p>)}</div>
            <p>Giá thực tế phụ thuộc địa chỉ đón/trả, thời gian di chuyển, ngày đi và điều kiện chuyến.</p>
            <TrackedLink className="btn btn-primary route-call-button" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "route_summary", route_slug: route.slug }}>Gọi kiểm tra chuyến →</TrackedLink>
          </> : <>
            <span>PHONG CÁCH CÓ XE CHO TUYẾN NÀY</span>
            {showPriceHighlight ? <div className="route-price-highlight"><small>Giá xe ghép</small><strong>{formatVnd(publicSeoPrice, "/người")}</strong></div> : null}
            <div className="route-call-highlight"><small>Bạn muốn đi {route.origin} – {route.destination}?</small><strong>Gọi {siteConfig.phoneDisplay}</strong></div>
            <p>Không áp dụng một lộ trình, quãng đường hay thời gian cố định. Phong Cách sẽ trao đổi theo nhu cầu chuyến thực tế.</p>
            <TrackedLink className="btn btn-primary route-call-button" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "route_summary", route_slug: route.slug }}>Gọi Phong Cách ngay →</TrackedLink>
          </>}
        </aside>
      </section>
      <section className="route-commercial" aria-labelledby="route-service-title">
        {isCommercialUpgrade ? <article className="route-price-panel">
          <span className="section-kicker">GIÁ BẮT ĐẦU ĐÃ XÁC NHẬN</span>
          <h2 id="route-service-title">Giá xe ghép, bao xe và gửi hàng</h2>
          <p>Bốn mức dưới đây là giá bắt đầu, không phải giá cố định cho mọi chuyến.</p>
          <div className="route-price-table">
            {commercialPriceRows.map((item) => <div key={item.label}>
              <span><b>{item.label}</b><small>{item.detail}</small></span>
              <strong>{item.text}</strong>
            </div>)}
          </div>
          <p className="route-variable-note"><b>Giá thực tế phụ thuộc địa chỉ đón/trả, thời gian di chuyển, ngày đi và điều kiện chuyến.</b> Không có bảng phụ phí tự động; Phong Cách xác nhận giá sau khi có thông tin chuyến.</p>
          <div className="route-price-actions">
            <TrackedLink className="btn btn-primary" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "route_price", route_slug: route.slug }}>☎ Gọi kiểm tra giá</TrackedLink>
            <TrackedLink className="btn btn-ghost" href={zaloUrl} target="_blank" rel="noopener noreferrer" eventName="click_zalo" eventData={{ placement: "route_price", route_slug: route.slug }}>Nhắn Zalo</TrackedLink>
          </div>
        </article> : showGovernedPricePanel ? <article className="route-price-panel">
          <span className="section-kicker">GIÁ TUYẾN {route.origin.toUpperCase()} – {route.destination.toUpperCase()}</span>
          <h2 id="route-service-title">Giá xe ghép và bao xe</h2>
          <p>Mục đã có giá được hiển thị trực tiếp. Mục chưa có giá xác nhận sẽ để “Liên hệ” và tự cập nhật tại đây khi nhà xe bổ sung dữ liệu.</p>
          <div className="route-price-table">
            {publicPriceRows.map((item) => <div key={item.label}>
              <span><b>{item.label}</b><small>{item.detail}</small></span>
              <strong>{formatVnd(item.value, item.suffix)}</strong>
            </div>)}
          </div>
          <p className="route-variable-note"><b>Đón tận nhà, trả tận nơi.</b> Giá và xe được xác nhận theo điểm đón/trả và chuyến thực tế.</p>
        </article> : <article className="route-seo-copy">
          <span className="section-kicker">XE {route.origin.toUpperCase()} ĐI {route.destination.toUpperCase()}</span>
          <h2 id="route-service-title">Phong Cách có xe phục vụ tuyến {route.origin} – {route.destination}</h2>
          <p>Trang này giúp khách đang tìm xe {route.origin} đi {route.destination}, xe ghép {route.origin} – {route.destination} hoặc xe {route.destination} về {route.origin} biết rằng Phong Cách có tiếp nhận nhu cầu trên tuyến.</p>
          <ul className="route-keyword-list">
            <li>Xe ghép {route.origin} – {route.destination}</li>
            <li>Bao xe 4–7 chỗ {route.origin} đi {route.destination}</li>
            <li>Gửi hàng theo chuyến {route.origin} – {route.destination}</li>
          </ul>
          <p className="route-variable-note"><b>Mỗi chuyến có điều kiện khác nhau.</b> Lộ trình, thời gian, điểm đón trả và chi phí được trao đổi trực tiếp khi khách gọi.</p>
        </article>}
        {isCommercialUpgrade ? <aside className="route-call-panel route-decision-panel">
          <span className="section-kicker">{upgrade.decisionKicker ?? "XE GHÉP HAY BAO XE?"}</span>
          <h2>{upgrade.decisionTitle ?? "Chọn theo số người và nhu cầu"}</h2>
          <div className="route-decision-list">{upgrade.decisionRows.map((item: { need: string; guidance: string }) => <div key={item.need}><b>{item.need}</b><p>{item.guidance}</p></div>)}</div>
          <small>{upgrade.decisionNote ?? "Đây là gợi ý lựa chọn, không phải công thức giá. Hãy cung cấp số người, hành lý và địa chỉ để kiểm tra phương án thực tế."}</small>
        </aside> : <aside className="route-call-panel">
            <span className="section-kicker">MUỐN ĐI TUYẾN NÀY?</span>
            <h2>Gọi Phong Cách kiểm tra xe</h2>
            <p>Cho bên mình biết bạn cần đi từ đâu, đến đâu và thời điểm mong muốn. {hasOwnerVerifiedService ? "Đặt trước không mất phí, thanh toán sau chuyến." : "Phong Cách sẽ kiểm tra xe và trao đổi lại."}</p>
            <TrackedLink className="btn btn-primary" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "route_commercial", route_slug: route.slug }}>☎ {siteConfig.phoneDisplay}</TrackedLink>
            <small>Gọi trực tiếp để có thông tin phù hợp với chuyến thực tế.</small>
          </aside>}
      </section>
      {isCommercialUpgrade ? <section className={`route-ownership-grid${upgrade.endpointNames.length ? " has-endpoints" : ""}`} aria-label="Phạm vi tuyến và chiều đi">
        <section className="route-directions" aria-labelledby="route-directions-title">
          <span className="section-kicker">MỘT URL, HAI CHIỀU</span>
          <h2 id="route-directions-title">Đi chiều nào cũng dùng trang này</h2>
          {upgrade.directions.map((direction: { title: string; copy: string }, index: number) => <article key={direction.title}>
            <span>CHIỀU {index + 1}</span><h3>{direction.title}</h3><p>{direction.copy}</p>
          </article>)}
        </section>
        {upgrade.endpointNames.length ? <section className="route-endpoints" aria-labelledby="route-endpoints-title">
          <span className="section-kicker">{upgrade.endpointKicker ?? "CHỌN ĐÚNG KHU VỰC TẠI QUẢNG NINH"}</span>
          <h2 id="route-endpoints-title">{upgrade.endpointTitle ?? "Điểm đến dùng để xác định nhu cầu"}</h2>
          <p>{upgrade.endpointIntro ?? "Các tên dưới đây chỉ mô tả địa lý và nhu cầu tìm kiếm. Danh sách không xác nhận Phong Cách luôn phục vụ từng endpoint và không tạo một mức giá riêng cho endpoint."}</p>
          <div>{upgrade.endpointNames.map((endpoint: string) => <span key={endpoint}>{endpoint}</span>)}</div>
          <p className="route-endpoint-boundary"><b>{upgrade.endpointBoundary ?? "Khi đi các khu vực khác nhau tại Quảng Ninh, giá chuyến cụ thể cần được xác nhận theo điểm đón/trả."}</b></p>
        </section> : <section className="route-support-card" aria-labelledby="route-support-title">
          <span className="section-kicker">ĐẶT XE KHÔNG MẤT PHÍ</span>
          <h2 id="route-support-title">Xác nhận chuyến trước, thanh toán sau</h2>
          <p>Khách gửi thông tin để Phong Cách kiểm tra xe và giá. Việc đặt trước không mất phí; thanh toán sau chuyến.</p>
          <TrackedLink href={forwardBookingUrl} eventName="booking_start" eventData={{ placement: "route_booking_facts", route_slug: route.slug }}>Gửi thông tin chuyến →</TrackedLink>
        </section>}
      </section> : null}
      <section className="route-article-guide" aria-labelledby="route-guide-title">
        <div className="route-article-heading">
          <span className="section-kicker">{isCommercialUpgrade ? bookingGuide?.kicker ?? "GỬI ĐỦ THÔNG TIN CHUYẾN" : "BÀI VIẾT VỀ TUYẾN XE"}</span>
          <h2 id="route-guide-title">{isCommercialUpgrade ? bookingGuide?.title ?? "Ba bước để kiểm tra xe và giá" : <>Muốn đi {route.origin} – {route.destination}, bạn chỉ cần gọi</>}</h2>
          <p>{isCommercialUpgrade ? bookingGuide?.intro ?? "Phong Cách kiểm tra theo chuyến thực tế; không cần đặt cọc trước và khách thanh toán sau chuyến." : "Phong Cách không dùng một thông tin cố định cho mọi khách. Mỗi yêu cầu được kiểm tra theo nơi đón, nơi trả và nhu cầu thực tế."}</p>
        </div>
        <div className="route-article-steps">
          {isCommercialUpgrade ? bookingSteps.map((step: { title: string; copy: string }, index: number) => <article key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.copy}</p></article>) : <>
            <article><span>01</span><h3>Cho biết nhu cầu</h3><p>Xe ghép, bao xe 4–7 chỗ{hasOwnerVerifiedService ? "" : " hay gửi hàng theo chuyến"} trên tuyến {route.origin} – {route.destination}.</p></article>
            <article><span>02</span><h3>Cung cấp thông tin chuyến</h3><p>Nơi đón, nơi trả, thời điểm mong muốn, số khách và hành lý{hasOwnerVerifiedService ? "" : " hoặc hàng hóa"} đi kèm.</p></article>
            <article><span>03</span><h3>Phong Cách kiểm tra xe</h3><p>Bên mình trao đổi xe phù hợp và xác nhận các thông tin cần thiết trước khi khách quyết định.</p></article>
          </>}
        </div>
      </section>
      <section className="route-info">
        <div>
          <span className="section-kicker">DỊCH VỤ PHONG CÁCH</span><h2>{isCommercialUpgrade ? "Xe ghép, bao xe và gửi hàng" : "Nhu cầu xe trên tuyến"}</h2>
          <div className={`route-benefits${isCommercialUpgrade ? " route-benefits-commercial" : ""}`}>
            {isCommercialUpgrade ? <>
              <article><b>01</b><h3>Xe ghép</h3><p>Phù hợp khi khách chấp nhận đi cùng người khác; giá từ được hiển thị ở đầu trang.</p></article>
              <article><b>02</b><h3>Bao xe 4-7 chỗ</h3><p>Dành cho nhu cầu đi riêng và chủ động hơn; loại xe cần được kiểm tra khi đặt.</p></article>
              <article><b>03</b><h3>Gửi hàng</h3><p>Có nhận theo chuyến; cần cung cấp loại hàng, kích thước, đóng gói và điểm giao nhận.</p></article>
              <article><b>04</b><h3>Đón và trả tận nơi</h3><p>Cung cấp địa chỉ cụ thể hai đầu để Phong Cách kiểm tra xe và xác nhận giá.</p></article>
            </> : hasOwnerVerifiedService ? <>
              <article><b>01</b><h3>Xe ghép</h3><p>Đón tận nhà, trả tận nơi trên tuyến phục vụ.</p></article>
              <article><b>02</b><h3>Bao xe 4–7 chỗ</h3><p>Xe riêng hai chiều; loại xe được trao đổi khi liên hệ.</p></article>
              <article><b>03</b><h3>Đặt xe thuận tiện</h3><p>Đặt trước không mất phí, thanh toán sau chuyến.</p></article>
            </> : <>
              <article><b>01</b><h3>Xe ghép</h3><p>Tiếp nhận nhu cầu ghép xe trên tuyến, tùy tình trạng xe thực tế.</p></article>
              <article><b>02</b><h3>Bao xe 4–7 chỗ</h3><p>Dành cho khách muốn đi riêng; loại xe được trao đổi khi liên hệ.</p></article>
              <article><b>03</b><h3>Gửi hàng</h3><p>Tiếp nhận hàng theo chuyến sau khi biết loại hàng và nhu cầu thực tế.</p></article>
            </>}
          </div>
        </div>
        <div className="faq"><span className="section-kicker">CÂU HỎI THƯỜNG GẶP</span><h2>Thông tin cần biết</h2>{faq.map((item) => <details key={item.q}><summary>{item.q}<span>＋</span></summary><p>{item.a}</p></details>)}</div>
      </section>
      {isCommercialUpgrade ? <section className="route-supporting-content">
        <div><span className="section-kicker">{upgrade.support.kicker ?? "BÀI SO SÁNH LIÊN QUAN"}</span><h2>{upgrade.support.label}</h2><p>{upgrade.support.copy}</p></div>
        <Link href={upgrade.support.href}>{upgrade.support.cta ?? "Đọc bài so sánh →"}</Link>
      </section> : relatedPosts.length > 0 && <section className="related-routes"><div className="related-routes-heading"><div><span className="section-kicker">BÀI VIẾT LIÊN QUAN</span><h2>Xem thêm các tuyến Phong Cách có xe</h2></div><Link href="/blog">Vào Blog →</Link></div><div>{relatedPosts.map((item) => <Link href={`/${item.route.slug}`} key={item.route.id}><small>{item.category}</small><b>{item.route.origin} ⇄ {item.route.destination}</b><span>Đọc bài viết →</span></Link>)}</div></section>}
      {isCommercialUpgrade ? <section className="final-cta"><div><span>{upgrade.summaryTitle}</span><h2>Gọi hoặc nhắn Zalo để kiểm tra chuyến</h2><p>Gửi ngày đi, thời gian, điểm đón, điểm trả và số khách để Phong Cách xác nhận xe và giá.</p></div><div className="final-cta-actions"><TrackedLink className="btn btn-white" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "route_footer", route_slug: route.slug }}>☎ Gọi {siteConfig.phoneDisplay}</TrackedLink><TrackedLink className="btn btn-outline-white" href={zaloUrl} target="_blank" rel="noopener noreferrer" eventName="click_zalo" eventData={{ placement: "route_footer", route_slug: route.slug }}>Nhắn Zalo</TrackedLink></div></section> : <section className="final-cta"><div><span>TUYẾN {route.origin.toUpperCase()} – {route.destination.toUpperCase()}</span><h2>Phong Cách có xe cho tuyến này</h2><p>Muốn đi, hãy gọi để bên mình kiểm tra xe phù hợp.</p></div><TrackedLink className="btn btn-white" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "route_footer", route_slug: route.slug }}>☎ Gọi {siteConfig.phoneDisplay}</TrackedLink></section>}
    </main>
  );
}
