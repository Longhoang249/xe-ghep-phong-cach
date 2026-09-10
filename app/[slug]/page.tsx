import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import MoneyLandingPage from "@/components/MoneyLandingPage";
import RouteViewTracker from "@/components/RouteViewTracker";
import SiteFooter from "@/components/SiteFooter";
import TrackedLink from "@/components/TrackedLink";
import { blogPostForSlug, blogPosts } from "@/data/blog-posts";
import { moneyPageLayoutForRoute } from "@/data/seo/money-page-layouts";
import { moneyPageUpgradeForRoute } from "@/data/seo/money-page-upgrades.mjs";
import { formatPriceDisplay, getRoutePrice } from "@/data/seo/pricing-engine";
import { routeEvidenceByDataKey } from "@/data/seo/route-evidence.mjs";
import { publicEvidenceValue, publicPricePresentation } from "@/lib/seo/publication.mjs";
import { publishedGuidePosts as guidePosts } from "@/data/seo/published-content";
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

function formatEnginePrice(destination: string, service: "shared" | "private" | "parcel") {
  const record = getRoutePrice(destination, service);
  return record ? formatPriceDisplay(record) : "Liên hệ";
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
  const companionGuide = guidePosts.find((item) => item.routeSlug === route.slug);
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
  const isQnRoute = route.slug === "xe-ghep-hai-duong-quang-ninh" || route.id === "hd-qn";
  const isCbRoute = route.slug === "xe-hai-duong-cat-bi" || route.id === "hd-cb";
  const isHlRoute = route.slug === "xe-ghep-hai-duong-ha-long" || route.id === "hd-ha-long";
  const isVdRoute = route.slug === "xe-ghep-hai-duong-van-don" || route.id === "hd-van-don";
  const isCamPhaRoute = route.slug === "xe-ghep-hai-duong-cam-pha" || route.id === "hd-cam-pha";
  const isUongBiRoute = route.slug === "xe-ghep-hai-duong-uong-bi" || route.id === "hd-uong-bi";
  const commercialPriceRows = isQnRoute
    ? [
        { label: "Giá xe ghép", detail: "Theo người (16 điểm đến)", text: formatGovernedPrice(routeEvidence?.price, "/người") },
        { label: "Bao xe theo chuyến", detail: "Giá theo điểm đến", text: "Từ 600.000đ/chuyến" },
        { label: "Gửi hàng", detail: "Theo hàng và chuyến", text: "150.000 – 200.000đ trở lên" },
      ]
    : isCbRoute
    ? [
        { label: "Giá xe ghép", detail: "Theo người", text: "300.000đ/người" },
        { label: "Bao xe theo chuyến", detail: "Đi riêng theo chuyến (chưa gồm vé cao tốc)", text: "550.000đ/chuyến" },
        { label: "Gửi hàng", detail: "Theo thỏa thuận chuyến", text: "Liên hệ" },
      ]
    : isHlRoute
    ? [
        { label: "Giá xe ghép", detail: "Theo người (Hạ Long)", text: "400.000đ/người" },
        { label: "Bao xe theo chuyến", detail: "Đi riêng theo chuyến (chưa gồm vé cao tốc)", text: "1.000.000đ/chuyến" },
        { label: "Gửi hàng", detail: "Theo hàng và chuyến", text: "Khoảng 150.000 – 200.000đ trở lên, tùy điểm đến và hàng hóa cụ thể." },
      ]
    : isVdRoute
    ? [
        { label: "Giá xe ghép", detail: "Theo người (Vân Đồn / Ao Tiên)", text: "500.000đ/người" },
        { label: "Bao xe theo chuyến", detail: "Đi riêng theo chuyến (chưa gồm vé cao tốc)", text: "1.500.000đ/chuyến" },
        { label: "Gửi hàng", detail: "Theo thỏa thuận chuyến", text: "Liên hệ" },
      ]
    : isCamPhaRoute
    ? [
        { label: "Giá xe ghép", detail: "Theo người", text: formatEnginePrice("Cẩm Phả", "shared") },
        { label: "Bao xe riêng", detail: "Theo chuyến", text: formatEnginePrice("Cẩm Phả", "private") },
        { label: "Gửi hàng", detail: "Chưa có dịch vụ hoặc giá tuyến đã xác thực", text: "Liên hệ" },
      ]
    : isUongBiRoute
    ? [
        { label: "Giá xe ghép", detail: "Theo người", text: formatEnginePrice("Uông Bí", "shared") },
        { label: "Bao xe riêng", detail: "Theo chuyến", text: formatEnginePrice("Uông Bí", "private") },
        { label: "Gửi hàng", detail: "Chưa có dịch vụ hoặc giá tuyến đã xác thực", text: "Liên hệ" },
      ]
    : [
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
      q: `Có xe đón chiều từ ${route.destination} về lại ${route.origin} không?`,
      a: `Có. Phong Cách phục vụ cả hai chiều: ${route.origin} đi ${route.destination} và đón tận nơi từ ${route.destination} về lại ${route.origin}. Quý khách vui lòng cung cấp địa chỉ đón/trả và thời gian dự kiến để nhà xe sắp xếp chuyến chu đáo nhất.`,
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
    {
      q: `Đặt xe chiều về từ ${route.destination} về ${route.origin} có cần đặt cọc trước không?`,
      a: `Không cần đặt cọc. Phong Cách áp dụng chính sách đặt trước không mất phí cho cả chiều đi lẫn chiều về. Khách hàng chỉ thanh toán sau chuyến đi an toàn.`,
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
    ? isCbRoute
      ? [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "Xe ghép Hải Dương - Hải Phòng", item: absoluteUrl("/xe-ghep-hai-duong-hai-phong") },
          { "@type": "ListItem", position: 3, name: upgrade.h1, item: pageUrl },
        ]
      : isHlRoute || isVdRoute || isCamPhaRoute || isUongBiRoute
      ? [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "Xe ghép Hải Dương - Quảng Ninh", item: absoluteUrl("/xe-ghep-hai-duong-quang-ninh") },
          { "@type": "ListItem", position: 3, name: upgrade.h1, item: pageUrl },
        ]
      : [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "Tuyến xe", item: absoluteUrl("/tuyen-xe") },
          { "@type": "ListItem", position: 3, name: upgrade.h1, item: pageUrl },
        ]
    : [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: absoluteUrl() },
        { "@type": "ListItem", position: 2, name: "Tuyến xe", item: absoluteUrl("/tuyen-xe") },
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
      ...(isUongBiRoute ? [{
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }] : []),
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
        <SiteFooter placement="money_page" />
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
            isCbRoute ? (
              <nav className="route-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Trang chủ</Link><span>›</span>
                <Link href="/xe-ghep-hai-duong-hai-phong">Xe ghép Hải Dương - Hải Phòng</Link><span>›</span>
                <span aria-current="page">{upgrade.h1}</span>
              </nav>
            ) : isHlRoute ? (
              <nav className="route-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Trang chủ</Link><span>›</span>
                <Link href="/xe-ghep-hai-duong-quang-ninh">Xe ghép Hải Dương - Quảng Ninh</Link><span>›</span>
                <span aria-current="page">Hạ Long</span>
              </nav>
            ) : isVdRoute ? (
              <nav className="route-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Trang chủ</Link><span>›</span>
                <Link href="/xe-ghep-hai-duong-quang-ninh">Xe ghép Hải Dương - Quảng Ninh</Link><span>›</span>
                <span aria-current="page">Vân Đồn</span>
              </nav>
            ) : isCamPhaRoute ? (
              <nav className="route-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Trang chủ</Link><span>›</span>
                <Link href="/xe-ghep-hai-duong-quang-ninh">Xe ghép Hải Dương - Quảng Ninh</Link><span>›</span>
                <span aria-current="page">Cẩm Phả</span>
              </nav>
            ) : isUongBiRoute ? (
              <nav className="route-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Trang chủ</Link><span>›</span>
                <Link href="/xe-ghep-hai-duong-quang-ninh">Xe ghép Hải Dương - Quảng Ninh</Link><span>›</span>
                <span aria-current="page">Uông Bí</span>
              </nav>
            ) : (
              <nav className="route-breadcrumb" aria-label="Breadcrumb"><Link href="/">Trang chủ</Link><span>›</span><Link href="/tuyen-xe">Tuyến xe</Link><span>›</span><span aria-current="page">{upgrade.h1}</span></nav>
            )
          ) : (
            <nav className="route-breadcrumb" aria-label="Breadcrumb"><Link href="/">Trang chủ</Link><span>›</span><Link href="/tuyen-xe">Tuyến xe</Link><span>›</span><span aria-current="page">{route.origin} – {route.destination}</span></nav>
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
            <p>{isCbRoute || isHlRoute || isVdRoute ? "Bao xe riêng chưa bao gồm vé cầu đường cao tốc (tollIncluded: false). Đặt trước không mất phí. Thanh toán sau chuyến." : isUongBiRoute ? "Bao xe riêng chưa bao gồm vé cầu đường cao tốc (tollIncluded: false). Cung cấp điểm đón, điểm trả và thời gian để xác nhận chuyến." : isCamPhaRoute ? "Giá bao xe là khoảng đã xác thực; hãy cung cấp điểm đón, điểm trả và thời gian để xác nhận chuyến." : "Giá thực tế phụ thuộc địa chỉ đón/trả, thời gian di chuyển, ngày đi và điều kiện chuyến."}</p>
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
          <h2 id="route-service-title">{isCbRoute ? "Bảng giá xe Hải Dương ⇄ Sân bay Cát Bi" : isHlRoute ? "Bảng giá xe Hải Dương ⇄ Hạ Long" : isVdRoute ? "Bảng giá xe Hải Dương ⇄ Vân Đồn" : isCamPhaRoute ? "Bảng giá xe Hải Dương ⇄ Cẩm Phả" : isUongBiRoute ? "Bảng giá xe Hải Dương ⇄ Uông Bí" : "Giá xe ghép, bao xe và gửi hàng"}</h2>
          <p>{isCbRoute ? "Bảng giá tham khảo cho hành trình đón trả tận nơi giữa Hải Dương và Sân bay Cát Bi." : isHlRoute ? "Bảng giá xe ghép, bao xe riêng và gửi hàng giữa Hải Dương và Hạ Long (Bãi Cháy có giá endpoint đã xác thực riêng)." : isVdRoute ? "Bảng giá xe ghép, bao xe riêng và gửi hàng giữa Hải Dương và Vân Đồn / Cảng Ao Tiên." : isCamPhaRoute ? "Xe ghép có giá chính xác 450.000đ/người; bao xe riêng là khoảng giá đã xác thực, không tách theo xe 4 chỗ và 7 chỗ." : isUongBiRoute ? "Xe ghép có giá chính xác 300.000đ/người; bao xe riêng có giá chính xác 600.000đ/chuyến, không tách theo xe 4 chỗ và 7 chỗ." : "Bốn mức dưới đây là giá bắt đầu, không phải giá cố định cho mọi chuyến."}</p>
          <div className="route-price-table">
            {commercialPriceRows.map((item) => <div key={item.label}>
              <span><b>{item.label}</b><small>{item.detail}</small></span>
              <strong>{item.text}</strong>
            </div>)}
          </div>
          {isHlRoute ? (
            <div className="route-comparison-box" style={{ marginTop: "1rem", padding: "1rem", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0f172a", marginBottom: "0.35rem" }}>
                SO SÁNH THƯƠNG MẠI: HẠ LONG VS BÃI CHÁY
              </div>
              <p style={{ margin: "0 0 0.75rem", fontSize: "0.9rem", color: "#475569" }}>
                Bãi Cháy có giá endpoint đã xác thực, không phải là phụ phí cộng dồn của Hạ Long:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem" }}>
                <div style={{ padding: "0.75rem", background: "#ffffff", borderRadius: "6px", border: "1px solid #cbd5e1" }}>
                  <div style={{ fontWeight: 600, color: "#0369a1", fontSize: "0.95rem" }}>Khu vực Bãi Cháy</div>
                  <div style={{ fontSize: "0.9rem", marginTop: "0.25rem" }}>• Xe ghép: <strong>350.000đ/người</strong></div>
                  <div style={{ fontSize: "0.9rem" }}>• Bao xe: <strong>900.000đ/chuyến</strong></div>
                  <div style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "0.25rem" }}>Khách sạn ven biển, Sun World, cảng tàu</div>
                </div>
                <div style={{ padding: "0.75rem", background: "#ffffff", borderRadius: "6px", border: "1px solid #cbd5e1" }}>
                  <div style={{ fontWeight: 600, color: "#0369a1", fontSize: "0.95rem" }}>Khu vực Hạ Long (Hòn Gai)</div>
                  <div style={{ fontSize: "0.9rem", marginTop: "0.25rem" }}>• Xe ghép: <strong>400.000đ/người</strong></div>
                  <div style={{ fontSize: "0.9rem" }}>• Bao xe: <strong>1.000.000đ/chuyến</strong></div>
                  <div style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "0.25rem" }}>Trung tâm Hòn Gai, Cột 5 - Cột 8, Bảo tàng</div>
                </div>
              </div>
              <div style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.5rem" }}>
                <em>Bao xe cả hai khu vực đều chưa bao gồm vé cầu đường cao tốc (tollIncluded: false).</em>
              </div>
            </div>
          ) : isVdRoute ? (
            <div className="route-comparison-box" style={{ marginTop: "1rem", padding: "1rem", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#0f172a", marginBottom: "0.35rem" }}>
                KẾT NỐI CẢNG TÀU QUỐC TẾ AO TIÊN (ĐI CÔ TÔ, QUAN LẠN)
              </div>
              <p style={{ margin: "0 0 0.75rem", fontSize: "0.9rem", color: "#475569" }}>
                Phục vụ xe ghép và bao xe riêng đường bộ đón trả tận nơi đến sảnh Cảng tàu Ao Tiên:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem" }}>
                <div style={{ padding: "0.75rem", background: "#ffffff", borderRadius: "6px", border: "1px solid #cbd5e1" }}>
                  <div style={{ fontWeight: 600, color: "#0369a1", fontSize: "0.95rem" }}>Xe ghép đi Cảng Ao Tiên</div>
                  <div style={{ fontSize: "0.9rem", marginTop: "0.25rem" }}>• Xe ghép: <strong>500.000đ/người</strong></div>
                  <div style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "0.25rem" }}>Đón tận nhà tại Hải Dương, trả tận sảnh Cảng Ao Tiên</div>
                </div>
                <div style={{ padding: "0.75rem", background: "#ffffff", borderRadius: "6px", border: "1px solid #cbd5e1" }}>
                  <div style={{ fontWeight: 600, color: "#0369a1", fontSize: "0.95rem" }}>Bao xe riêng đi Cảng Ao Tiên</div>
                  <div style={{ fontSize: "0.9rem", marginTop: "0.25rem" }}>• Bao xe riêng: <strong>Liên hệ xác nhận</strong></div>
                  <div style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "0.25rem" }}>Xác nhận theo điểm đón, điểm trả và chuyến thực tế</div>
                </div>
              </div>
              <div style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.5rem" }}>
                <em>Lưu ý: Nhà Xe Phong Cách chỉ phục vụ vận chuyển đường bộ đến Cảng Ao Tiên / Vân Đồn; không vận hành tàu cao tốc ra các đảo. Khách đi Cảng Ao Tiên để tiếp tục hành trình ra Cô Tô, Quan Lạn nên cung cấp giờ tàu dự kiến khi đặt xe để nhà xe kiểm tra chuyến phù hợp.</em>
              </div>
            </div>
          ) : null}
          <p className="route-variable-note">{isCbRoute || isHlRoute || isVdRoute ? <><b>Bao xe riêng chưa bao gồm vé cầu đường cao tốc (tollIncluded: false).</b> Đặt trước không mất phí. Thanh toán sau chuyến.</> : isUongBiRoute ? <><b>Bao xe riêng chưa bao gồm vé cầu đường cao tốc (tollIncluded: false).</b> Cung cấp điểm đón, điểm trả và thời gian để Phong Cách xác nhận chuyến.</> : isCamPhaRoute ? <><b>Khoảng giá bao xe không phải giá cố định.</b> Phong Cách xác nhận theo điểm đón, điểm trả và thời gian chuyến; website không công bố dịch vụ hoặc giá gửi hàng riêng cho tuyến này.</> : <><b>Giá thực tế phụ thuộc địa chỉ đón/trả, thời gian di chuyển, ngày đi và điều kiện chuyến.</b> Không có bảng phụ phí tự động; Phong Cách xác nhận giá sau khi có thông tin chuyến.</>}</p>
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
            {isCommercialUpgrade ? (
              isCbRoute ? (
                <>
                  <article><b>01</b><h3>Xe ghép sân bay</h3><p>300.000đ/người đón trả tận nơi giữa Hải Dương và Sân bay Cát Bi.</p></article>
                  <article><b>02</b><h3>Bao xe riêng</h3><p>550.000đ/chuyến đi riêng (chưa gồm vé cao tốc), linh hoạt thời gian theo lịch trình cá nhân.</p></article>
                  <article><b>03</b><h3>Đón trả hai chiều</h3><p>Phục vụ cả hai chiều Hải Dương đi Sân bay Cát Bi và đón từ Sân bay Cát Bi về Hải Dương.</p></article>
                  <article><b>04</b><h3>Đặt trước không mất phí</h3><p>Đặt trước không mất phí. Thanh toán sau chuyến.</p></article>
                </>
              ) : isHlRoute ? (
                <>
                  <article><b>01</b><h3>Xe ghép Hạ Long</h3><p>400.000đ/người (Bãi Cháy 350.000đ) đón trả tận nơi hai chiều an toàn.</p></article>
                  <article><b>02</b><h3>Bao xe theo chuyến</h3><p>1.000.000đ/chuyến (Bãi Cháy 900.000đ, chưa gồm vé cao tốc), riêng tư và chủ động thời gian.</p></article>
                  <article><b>03</b><h3>Đón trả hai chiều</h3><p>Nhận đón tại nhà ở Hải Dương và đón từ Hạ Long / Bãi Cháy về lại Hải Dương.</p></article>
                  <article><b>04</b><h3>Đặt trước không mất phí</h3><p>Đặt trước không mất phí. Thanh toán sau chuyến.</p></article>
                </>
              ) : isVdRoute ? (
                <>
                  <article><b>01</b><h3>Xe ghép Vân Đồn / Ao Tiên</h3><p>500.000đ/người đón trả tận nơi hai đầu an toàn.</p></article>
                  <article><b>02</b><h3>Bao xe theo chuyến</h3><p>1.500.000đ/chuyến (chưa gồm vé cao tốc), riêng tư và chủ động thời gian.</p></article>
                  <article><b>03</b><h3>Hỗ trợ kết nối ra đảo</h3><p>Tư vấn giờ đón đường bộ theo khung giờ tàu cao tốc dự kiến đi Cô Tô, Quan Lạn.</p></article>
                  <article><b>04</b><h3>Đặt trước không mất phí</h3><p>Đặt trước không mất phí. Thanh toán sau chuyến.</p></article>
                </>
              ) : isCamPhaRoute ? (
                <>
                  <article><b>01</b><h3>Xe ghép Cẩm Phả</h3><p>Giá xe ghép Hải Dương ⇄ Cẩm Phả là 450.000đ/người theo pricing engine hiện hành.</p></article>
                  <article><b>02</b><h3>Bao xe theo chuyến</h3><p>Giá bao xe riêng là khoảng 1.200.000 – 1.300.000đ/chuyến, không tách thành giá xe 4 chỗ và 7 chỗ.</p></article>
                  <article><b>03</b><h3>Khu vực Cửa Ông</h3><p>Xe ghép Hải Dương ⇄ Cửa Ông có giá chính xác {formatEnginePrice("Cửa Ông", "shared")}; bao xe riêng và gửi hàng cần liên hệ xác nhận theo điểm đón, điểm trả.</p></article>
                  <article><b>04</b><h3>Gửi thông tin chuyến</h3><p>Gọi hoặc nhắn Zalo, cho biết ngày đi, thời gian, điểm đón, điểm trả và số khách để xác nhận.</p></article>
                </>
              ) : isUongBiRoute ? (
                <>
                  <article><b>01</b><h3>Xe ghép Uông Bí</h3><p>Giá xe ghép Hải Dương ⇄ Uông Bí là 300.000đ/người theo pricing engine hiện hành.</p></article>
                  <article><b>02</b><h3>Bao xe theo chuyến</h3><p>Giá bao xe riêng là 600.000đ/chuyến, không tách thành giá xe 4 chỗ và 7 chỗ.</p></article>
                  <article><b>03</b><h3>Khu vực Yên Tử</h3><p>Chưa công bố giá số riêng cho Yên Tử; cần cung cấp điểm trả cụ thể để kiểm tra chuyến.</p></article>
                  <article><b>04</b><h3>Gửi thông tin chuyến</h3><p>Gọi hoặc nhắn Zalo, cho biết ngày đi, thời gian, điểm đón, điểm trả và số khách để xác nhận.</p></article>
                </>
              ) : (
                <>
                  <article><b>01</b><h3>Xe ghép</h3><p>Phù hợp khi khách chấp nhận đi cùng người khác; giá từ được hiển thị ở đầu trang.</p></article>
                  <article><b>02</b><h3>Bao xe 4-7 chỗ</h3><p>Dành cho nhu cầu đi riêng và chủ động hơn; loại xe cần được kiểm tra khi đặt.</p></article>
                  <article><b>03</b><h3>Gửi hàng</h3><p>Có nhận theo chuyến; cần cung cấp loại hàng, kích thước, đóng gói và điểm giao nhận.</p></article>
                  <article><b>04</b><h3>Đón và trả tận nơi</h3><p>Cung cấp địa chỉ cụ thể hai đầu để Phong Cách kiểm tra xe và xác nhận giá.</p></article>
                </>
              )
            ) : hasOwnerVerifiedService ? <>
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
      {isCommercialUpgrade ? (
        <section className="route-supporting-content">
          <div><span className="section-kicker">{upgrade.support.kicker ?? "BÀI SO SÁNH LIÊN QUAN"}</span><h2>{upgrade.support.label}</h2><p>{upgrade.support.copy}</p>{upgrade.relatedLinks?.map((item: { href: string; label: string }) => <p key={item.href}><Link href={item.href}>{item.label} →</Link></p>)}</div>
          <Link href={upgrade.support.href}>{upgrade.support.cta ?? "Đọc bài so sánh →"}</Link>
        </section>
      ) : companionGuide ? (
        <section className="route-supporting-content">
          <div><span className="section-kicker">CẨM NANG SO SÁNH PHƯƠNG TIỆN</span><h2>{companionGuide.title}</h2><p>{companionGuide.directAnswer}</p></div>
          <Link href={`/blog/${companionGuide.slug}`}>Đọc bài so sánh chi tiết →</Link>
        </section>
      ) : null}
      {!isCommercialUpgrade && relatedPosts.length > 0 && (
        <section className="related-routes"><div className="related-routes-heading"><div><span className="section-kicker">BÀI VIẾT LIÊN QUAN</span><h2>Xem thêm các tuyến Phong Cách có xe</h2></div><Link href="/blog">Vào Blog →</Link></div><div>{relatedPosts.map((item) => <Link href={`/${item.route.slug}`} key={item.route.id}><small>{item.category}</small><b>{item.route.origin} ⇄ {item.route.destination}</b><span>Đọc bài viết →</span></Link>)}</div></section>
      )}
      {isCommercialUpgrade ? <section className="final-cta"><div><span>{upgrade.summaryTitle}</span><h2>Gọi hoặc nhắn Zalo để kiểm tra chuyến</h2><p>Gửi ngày đi, thời gian, điểm đón, điểm trả và số khách để Phong Cách xác nhận xe và giá.</p></div><div className="final-cta-actions"><TrackedLink className="btn btn-white" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "route_footer", route_slug: route.slug }}>☎ Gọi {siteConfig.phoneDisplay}</TrackedLink><TrackedLink className="btn btn-outline-white" href={zaloUrl} target="_blank" rel="noopener noreferrer" eventName="click_zalo" eventData={{ placement: "route_footer", route_slug: route.slug }}>Nhắn Zalo</TrackedLink></div></section> : <section className="final-cta"><div><span>TUYẾN {route.origin.toUpperCase()} – {route.destination.toUpperCase()}</span><h2>Phong Cách có xe cho tuyến này</h2><p>Muốn đi, hãy gọi để bên mình kiểm tra xe phù hợp.</p></div><TrackedLink className="btn btn-white" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "route_footer", route_slug: route.slug }}>☎ Gọi {siteConfig.phoneDisplay}</TrackedLink></section>}
      <SiteFooter placement="route_page" />
    </main>
  );
}
