import Image from "next/image";
import Link from "next/link";
import type { ScanFirstMoneyPageLayout } from "@/data/seo/money-page-layouts";
import TrackedLink from "@/components/TrackedLink";
import styles from "./MoneyLandingPage.module.css";

type PriceRow = {
  label: string;
  detail: string;
  text: string;
};

type FaqItem = {
  q: string;
  a: string;
};

type SupportLink = {
  href: string;
  label: string;
  copy: string;
  kicker?: string;
  cta?: string;
};

type MoneyLandingPageProps = {
  route: {
    slug: string;
    origin: string;
    destination: string;
  };
  h1: string;
  layout: ScanFirstMoneyPageLayout;
  prices: ReadonlyArray<PriceRow>;
  faq: ReadonlyArray<FaqItem>;
  support: SupportLink;
  bookingUrl: string;
  phoneHref: string;
  phoneDisplay: string;
  zaloUrl: string;
};

function RouteCarIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Xe di chuyển giữa hai điểm">
      <path d="M13 35h38l-4-12a6 6 0 0 0-6-4H23a6 6 0 0 0-6 4l-4 12Z" fill="currentColor" opacity=".18" />
      <path d="m17 34 4-10a4 4 0 0 1 4-3h14a4 4 0 0 1 4 3l4 10M15 34h34a4 4 0 0 1 4 4v7H11v-7a4 4 0 0 1 4-4Zm4 11v4m26-4v4M18 39h5m18 0h5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureIcon({ name }: { name: "person" | "group" | "parcel" | "pin" | "check" }) {
  const paths = {
    person: <><circle cx="12" cy="8" r="3" /><path d="M6.5 20c.5-4 2.3-6 5.5-6s5 2 5.5 6" /></>,
    group: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2.5" /><path d="M3.5 20c.5-4 2.3-6 5.5-6s5 2 5.5 6M14 15c3.8-.5 5.8 1.2 6.5 4.5" /></>,
    parcel: <><path d="m4 7 8-4 8 4-8 4-8-4Z" /><path d="M4 7v10l8 4 8-4V7M12 11v10" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

export default function MoneyLandingPage({
  route,
  h1,
  layout,
  prices,
  faq,
  support,
  bookingUrl,
  phoneHref,
  phoneDisplay,
  zaloUrl,
}: MoneyLandingPageProps) {
  const priceByLabel = new Map(prices.map((price) => [price.label, price.text]));
  const sharedPrice = priceByLabel.get("Giá xe ghép") ?? "Liên hệ";
  const charter4Price = priceByLabel.get("Bao xe 4 chỗ") ?? "Liên hệ";
  const charter7Price = priceByLabel.get("Bao xe 7 chỗ") ?? "Liên hệ";
  const parcelPrice = priceByLabel.get("Gửi hàng") ?? "Liên hệ";

  const quickPrices = [
    { label: "Xe ghép", value: sharedPrice, icon: "person" as const },
    { label: "Bao xe 4 chỗ", value: charter4Price, icon: "group" as const },
    { label: "Bao xe 7 chỗ", value: charter7Price, icon: "group" as const },
    { label: "Gửi hàng", value: parcelPrice, icon: "parcel" as const },
  ];

  const servicePrices = {
    shared: [{ label: "Giá mỗi người", value: sharedPrice }],
    charter: [{ label: "4 chỗ", value: charter4Price }, { label: "7 chỗ", value: charter7Price }],
    parcel: [{ label: "Giá bắt đầu", value: parcelPrice }],
  } as const;

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="money-page-title">
        <div className={styles.heroCopy}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Trang chủ</Link><span>/</span><Link href="/tuyen-xe">Tuyến xe</Link><span>/</span><span aria-current="page">{h1}</span>
          </nav>
          <div className={styles.eyebrow}><span /> Xe ghép và bao xe hai chiều</div>
          <h1 id="money-page-title">{h1}</h1>
          <p className={styles.subline}>{layout.subline}</p>
          <div className={styles.heroPrice}>
            <small>Giá xe ghép</small>
            <strong>{sharedPrice}</strong>
            <span>Giá bắt đầu - xác nhận theo chuyến thực tế</span>
          </div>
          <div className={styles.heroActions}>
            <TrackedLink className="btn btn-primary" href={bookingUrl} eventName="booking_start" eventData={{ placement: "money_landing_hero", route_slug: route.slug }}>Đặt xe ngay</TrackedLink>
            <TrackedLink className="btn btn-ghost" href={phoneHref} eventName="click_call" eventData={{ placement: "money_landing_hero", route_slug: route.slug }}>Gọi {phoneDisplay}</TrackedLink>
          </div>
          <div className={styles.trustBadges} aria-label="Quyền lợi đặt xe">
            {[
              "Hai chiều",
              "Đặt trước miễn phí",
              "Thanh toán sau chuyến",
            ].map((item) => <span key={item}><FeatureIcon name="check" />{item}</span>)}
          </div>
        </div>
        <div className={styles.heroVisual}>
          <Image src={layout.heroImage} alt={layout.heroImageAlt} width={1448} height={1086} priority sizes="(max-width: 760px) 100vw, 48vw" />
          <div className={styles.heroVisualRoute}><span>{route.origin}</span><b>⇄</b><span>{route.destination}</span></div>
          <div className={styles.heroVisualNote}><FeatureIcon name="pin" /><span><small>Đón và trả</small><strong>Theo địa chỉ thực tế</strong></span></div>
        </div>
      </section>

      <section className={styles.quickFacts} aria-labelledby="quick-price-title">
        <div className={styles.sectionHeading}>
          <span>THÔNG TIN NHANH</span>
          <h2 id="quick-price-title">Chọn đúng nhu cầu, xem giá ngay</h2>
          <p>Tất cả mức giá dưới đây đều là giá bắt đầu.</p>
        </div>
        <div className={styles.quickGrid}>
          {quickPrices.map((item) => <article key={item.label}><span className={styles.iconBox}><FeatureIcon name={item.icon} /></span><div><small>{item.label}</small><strong>{item.value}</strong></div></article>)}
        </div>
        <p className={styles.priceBoundary}>Giá thực tế phụ thuộc địa chỉ đón/trả, thời gian di chuyển, ngày đi và điều kiện chuyến.</p>
      </section>

      <section className={styles.routeStrip} aria-label={`Tuyến ${route.origin} - ${route.destination} hai chiều`}>
        <div className={styles.routePlace}><small>ĐIỂM ĐẦU</small><strong>{route.origin}</strong><span>Đón theo địa chỉ</span></div>
        <div className={styles.routeJourney}><i /><div><RouteCarIcon /></div><i /></div>
        <div className={styles.routePlace}><small>ĐIỂM ĐẾN</small><strong>{route.destination}</strong><span>Trả theo địa chỉ</span></div>
        <p>Nhận khách cả hai chiều. Gửi địa chỉ đón/trả để kiểm tra chuyến thực tế.</p>
      </section>

      <section className={styles.services} aria-labelledby="service-title">
        <div className={styles.sectionHeading}>
          <span>DỊCH VỤ CHÍNH</span>
          <h2 id="service-title">Một tuyến, ba cách phục vụ</h2>
          <p>Chọn theo số người, mức độ chủ động và nhu cầu của chuyến.</p>
        </div>
        <div className={styles.serviceGrid}>
          {layout.services.map((service) => <article id={`service-${service.key}`} key={service.key}>
            <div className={styles.serviceImage}><Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
            <div className={styles.serviceBody}>
              <div><span>0{layout.services.indexOf(service) + 1}</span><h3>{service.title}</h3></div>
              <p>{service.copy}</p>
              <div className={styles.servicePrices}>{servicePrices[service.key].map((price) => <span key={price.label}><small>{price.label}</small><strong>{price.value}</strong></span>)}</div>
            </div>
          </article>)}
        </div>
      </section>

      <section className={styles.needs} aria-labelledby="needs-title">
        <div className={styles.sectionHeading}>
          <span>CHỌN NHANH</span>
          <h2 id="needs-title">Bạn đang cần gì?</h2>
        </div>
        <div className={styles.needGrid}>
          <a href="#service-shared"><FeatureIcon name="person" /><span><strong>Đi 1 người / 2 người</strong><small>Ưu tiên hỏi xe ghép để tối ưu chi phí.</small></span><b>→</b></a>
          <a href="#service-charter"><FeatureIcon name="group" /><span><strong>Đi nhóm / gia đình</strong><small>Ưu tiên bao xe khi cần đi riêng, chủ động hơn.</small></span><b>→</b></a>
          <a href="#service-parcel"><FeatureIcon name="parcel" /><span><strong>Gửi đồ / gửi hàng</strong><small>Gửi thông tin hàng để kiểm tra chuyến phù hợp.</small></span><b>→</b></a>
        </div>
      </section>

      <section className={styles.booking} aria-labelledby="booking-title">
        <div className={styles.bookingHeading}>
          <span>ĐẶT XE KHÔNG MẤT PHÍ</span>
          <h2 id="booking-title">Ba bước để bắt đầu chuyến</h2>
          <p>Phong Cách xác nhận xe và giá theo thông tin chuyến thực tế.</p>
        </div>
        <div className={styles.stepGrid}>
          {[
            ["01", "Gửi điểm đón và điểm trả", "Cung cấp địa chỉ cụ thể ở hai đầu."],
            ["02", "Xác nhận xe và giá theo chuyến", "Chọn xe ghép, bao xe hoặc gửi hàng."],
            ["03", "Xe đến đón", "Di chuyển và thanh toán sau chuyến."],
          ].map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
        <TrackedLink className="btn btn-primary" href={bookingUrl} eventName="booking_start" eventData={{ placement: "money_landing_steps", route_slug: route.slug }}>Gửi thông tin đặt xe</TrackedLink>
      </section>

      <section className={styles.faqSection} aria-labelledby="faq-title">
        <div className={styles.sectionHeading}>
          <span>CÂU HỎI THƯỜNG GẶP</span>
          <h2 id="faq-title">Thông tin cần biết trước khi đặt</h2>
        </div>
        <div className={styles.faqList}>{faq.map((item, index) => <details key={item.q} open={index === 0}><summary><span>{item.q}</span><b>+</b></summary><p>{item.a}</p></details>)}</div>
      </section>

      <section className={styles.related} aria-labelledby="related-title">
        <div className={styles.sectionHeading}>
          <span>TUYẾN LIÊN QUAN</span>
          <h2 id="related-title">Xem thêm tuyến đang phục vụ</h2>
        </div>
        <div className={styles.relatedGrid}>{layout.relatedRoutes.map((item) => <Link href={item.href} key={item.href}><small>{item.eyebrow}</small><strong>{item.label}</strong><span>Xem thông tin tuyến →</span></Link>)}</div>
        <div className={styles.supportLink}><div><small>{support.kicker ?? "BÀI SO SÁNH LIÊN QUAN"}</small><strong>{support.label}</strong><p>{support.copy}</p></div><Link href={support.href}>{support.cta ?? "Đọc bài so sánh →"}</Link></div>
      </section>

      <section className={styles.finalCta}>
        <div><span>SẴN SÀNG ĐẶT CHUYẾN?</span><h2>Gửi điểm đón và điểm trả để kiểm tra xe</h2><p>Đặt trước không mất phí. Thanh toán sau chuyến.</p></div>
        <div className={styles.finalActions}>
          <TrackedLink className="btn btn-white" href={bookingUrl} eventName="booking_start" eventData={{ placement: "money_landing_footer", route_slug: route.slug }}>Đặt xe ngay</TrackedLink>
          <TrackedLink className="btn btn-outline-white" href={phoneHref} eventName="click_call" eventData={{ placement: "money_landing_footer", route_slug: route.slug }}>Gọi {phoneDisplay}</TrackedLink>
          <TrackedLink className={styles.zaloLink} href={zaloUrl} target="_blank" rel="noopener noreferrer" eventName="click_zalo" eventData={{ placement: "money_landing_footer", route_slug: route.slug }}>Nhắn Zalo</TrackedLink>
        </div>
      </section>
    </div>
  );
}
