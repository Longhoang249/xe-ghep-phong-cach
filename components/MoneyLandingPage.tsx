import Image from "next/image";
import Link from "next/link";
import type { ScanFirstMoneyPageLayout } from "@/data/seo/money-page-layouts";
import TrackedLink from "@/components/TrackedLink";
import {
  getRouteGoldContent,
  type RouteGoldStandardContent,
} from "@/data/seo/route-content-registry";
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

type EndpointOrientation = {
  names: ReadonlyArray<string>;
  kicker?: string;
  title?: string;
  intro?: string;
  boundary?: string;
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
  endpointOrientation?: EndpointOrientation;
  bookingUrl: string;
  phoneHref: string;
  phoneDisplay: string;
  zaloUrl: string;
  goldContentOverride?: RouteGoldStandardContent;
};

function RouteCarIcon() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Xe di chuyển giữa hai điểm">
      <path d="M13 35h38l-4-12a6 6 0 0 0-6-4H23a6 6 0 0 0-6 4l-4 12Z" fill="currentColor" opacity=".18" />
      <path d="m17 34 4-10a4 4 0 0 1 4-3h14a4 4 0 0 1 4 3l4 10M15 34h34a4 4 0 0 1 4 4v7H11v-7a4 4 0 0 1 4-4Zm4 11v4m26-4v4M18 39h5m18 0h5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureIcon({ name }: { name: "person" | "group" | "parcel" | "pin" | "check" | "clock" | "shield" }) {
  const paths = {
    person: <><circle cx="12" cy="8" r="3" /><path d="M6.5 20c.5-4 2.3-6 5.5-6s5 2 5.5 6" /></>,
    group: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2.5" /><path d="M3.5 20c.5-4 2.3-6 5.5-6s5 2 5.5 6M14 15c3.8-.5 5.8 1.2 6.5 4.5" /></>,
    parcel: <><path d="m4 7 8-4 8 4-8 4-8-4Z" /><path d="M4 7v10l8 4 8-4V7M12 11v10" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
    shield: <path d="M12 3s8 3 8 9c0 6-8 9-8 9s-8-3-8-9c0-6 8-9 8-9Z" />,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function MoneyLandingPage({
  route,
  h1,
  layout,
  prices,
  faq,
  support,
  endpointOrientation,
  bookingUrl,
  phoneHref,
  phoneDisplay,
  zaloUrl,
  goldContentOverride,
}: MoneyLandingPageProps) {
  const isQnRoute = route.slug === "xe-ghep-hai-duong-quang-ninh";
  const priceByLabel = new Map(prices.map((price) => [price.label, price.text]));
  const sharedPrice = priceByLabel.get("Giá xe ghép") ?? "Liên hệ";
  const charter4Price = priceByLabel.get("Bao xe 4 chỗ") ?? "Liên hệ";
  const charter7Price = priceByLabel.get("Bao xe 7 chỗ") ?? "Liên hệ";
  const charterGenericPrice = priceByLabel.get("Bao xe theo chuyến") ?? "Giá theo điểm đến";
  const parcelPrice = priceByLabel.get("Gửi hàng") ?? (isQnRoute ? "150.000 – 200.000đ trở lên" : "Liên hệ");

  // Data-Driven Architecture: Gold Standard content resolved via typed registry
  const goldContent = goldContentOverride ?? getRouteGoldContent(route.slug, {
    sharedPrice,
    charter4Price: isQnRoute ? charterGenericPrice : charter4Price,
    parcelPrice,
    phoneDisplay,
  });

  const quickPrices = isQnRoute
    ? [
        { label: "Xe ghép", value: sharedPrice, icon: "person" as const },
        { label: "Bao xe theo chuyến", value: charterGenericPrice, icon: "group" as const },
        { label: "Gửi hàng", value: parcelPrice, icon: "parcel" as const },
      ]
    : [
        { label: "Xe ghép", value: sharedPrice, icon: "person" as const },
        { label: "Bao xe 4 chỗ", value: charter4Price, icon: "group" as const },
        { label: "Bao xe 7 chỗ", value: charter7Price, icon: "group" as const },
        { label: "Gửi hàng", value: parcelPrice, icon: "parcel" as const },
      ];

  const servicePrices = {
    shared: [{ label: "Giá mỗi người", value: sharedPrice }],
    charter: isQnRoute
      ? [{ label: "Bao xe theo chuyến", value: "Giá theo điểm đến" }]
      : [{ label: "4 chỗ", value: charter4Price }, { label: "7 chỗ", value: charter7Price }],
    parcel: [{ label: "Giá bắt đầu", value: parcelPrice }],
  } as const;

  return (
    <div className={styles.moneyLanding}>
      {/* 1. HERO SECTION */}
      <section className={styles.hero} aria-labelledby="route-heading">
        <div className={styles.heroLayout}>
          <div className={styles.heroCopy}>
            <span className={styles.heroEyebrow}>
              Xe ghép và bao xe hai chiều
            </span>
            <h1 id="route-heading">{h1}</h1>
            <p className={styles.heroSubline}>
              {layout.subline ?? `Dịch vụ xe ghép và bao xe 4-7 chỗ hai chiều ${route.origin} - ${route.destination}, đón trả tận nơi, đặt trước không mất phí, thanh toán sau chuyến.`}
            </p>
            <div className={styles.heroPrice}>
              <span>Mức giá xuất phát điểm</span>
              <strong>{sharedPrice}</strong>
              <small>Giá thay đổi theo địa chỉ đón/trả, thời gian và điều kiện thực tế</small>
            </div>
            <div className={styles.heroActions}>
              <TrackedLink className="btn btn-primary" href={bookingUrl} eventName="booking_start" eventData={{ placement: "money_landing_hero", route_slug: route.slug }}>Đặt xe ngay</TrackedLink>
              <TrackedLink className="btn btn-ghost" href={phoneHref} eventName="click_call" eventData={{ placement: "money_landing_hero", route_slug: route.slug }}>Gọi {phoneDisplay}</TrackedLink>
              <TrackedLink className={styles.zaloLink} href={zaloUrl} target="_blank" rel="noopener noreferrer" eventName="click_zalo" eventData={{ placement: "money_landing_hero", route_slug: route.slug }}>Nhắn Zalo</TrackedLink>
            </div>
            <div className={styles.heroBadges}>
              <span>Hai chiều</span>
              <span>Đặt trước không mất phí</span>
              <span>Thanh toán sau chuyến</span>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImageCard}>
              <Image
                src={layout.heroImage}
                alt={`Dịch vụ xe ghép và bao xe tuyến ${route.origin} - ${route.destination}`}
                priority
                fill
                sizes="(max-width: 960px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK FACTS BAR */}
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

      {/* 3. DIRECT ANSWER SECTION (ANSWER-FIRST FOR GOLD STANDARD) */}
      {goldContent?.directAnswer ? (
        <section className={styles.directAnswerSection} aria-labelledby="direct-answer-heading">
          <div className={styles.directAnswerBox}>
            <div className={styles.directAnswerHeader}>
              <h2 id="direct-answer-heading">{goldContent.directAnswer.heading}</h2>
              <span className={styles.verifiedBadge}><FeatureIcon name="shield" /> Dữ liệu giá xác thực</span>
            </div>
            <p>{goldContent.directAnswer.summary}</p>
            <p>{goldContent.directAnswer.charterAndRouteInfo}</p>
            <div className={styles.takeawaysGrid}>
              {goldContent.directAnswer.takeaways.map((item) => (
                <div key={item.label} className={styles.takeawayItem}>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 4. FULL HTML PRICING TABLE (DATA-DRIVEN GOLD STANDARD) */}
      {goldContent?.pricingTable ? (
        <section className={styles.goldTableSection} aria-labelledby="endpoint-table-heading">
          <div className={styles.sectionHeading}>
            <span>{goldContent.pricingTable.kicker}</span>
            <h2 id="endpoint-table-heading">{goldContent.pricingTable.heading}</h2>
            <p>{goldContent.pricingTable.subtitle}</p>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.pricingTable}>
              <thead>
                <tr>
                  <th scope="col">Điểm đến / Khu vực</th>
                  <th scope="col">Giá xe ghép</th>
                  <th scope="col">Giá bao xe riêng</th>
                  <th scope="col">Thời gian tham khảo</th>
                  <th scope="col">Khu vực đón trả tiêu biểu</th>
                </tr>
              </thead>
              <tbody>
                {goldContent.pricingTable.endpoints.map((item) => (
                  <tr key={item.id}>
                    <td className={styles.endpointName}>
                      <strong>{item.name}</strong>
                    </td>
                    <td className={styles.endpointPriceCol}>
                      <strong>{item.sharedPriceDisplay}</strong>
                    </td>
                    <td className={styles.endpointPriceCol}>
                      <strong>{item.privatePriceDisplay}</strong>
                    </td>
                    <td className={styles.timeCol}>{item.travelTime}</td>
                    <td>{item.hubs.slice(0, 3).join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.tableFootnotes}>
            <h3>{goldContent.pricingTable.footnotesTitle}</h3>
            <ul>
              {goldContent.pricingTable.footnotes.map((fn) => (
                <li key={fn.strong}>
                  <strong>{fn.strong}</strong> {fn.text}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* 5. PRICING FACTORS SECTION */}
      {goldContent?.pricingFactors ? (
        <section className={styles.directAnswerSection} aria-labelledby="factors-heading">
          <div className={styles.sectionHeading}>
            <span>{goldContent.pricingFactors.kicker}</span>
            <h2 id="factors-heading">{goldContent.pricingFactors.heading}</h2>
            <p>{goldContent.pricingFactors.subtitle}</p>
          </div>
          <div className={styles.factorsGrid}>
            {goldContent.pricingFactors.factors.map((factor) => (
              <article key={factor.title} className={styles.factorCard}>
                <h3>{factor.title}</h3>
                <p>{factor.description}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {/* 6. ROUTE STRIP */}
      <section className={styles.routeStrip} aria-label={`Tuyến ${route.origin} - ${route.destination} hai chiều`}>
        <div className={styles.routePlace}><small>ĐIỂM ĐẦU</small><strong>{route.origin}</strong><span>Đón theo địa chỉ</span></div>
        <div className={styles.routeJourney}><i /><div><RouteCarIcon /></div><i /></div>
        <div className={styles.routePlace}><small>ĐIỂM ĐẾN</small><strong>{route.destination}</strong><span>Trả theo địa chỉ</span></div>
        <p>Nhận khách cả hai chiều. Gửi địa chỉ đón/trả để kiểm tra chuyến thực tế.</p>
      </section>

      {/* 7. JOURNEY GUIDE SECTION */}
      {goldContent?.journeyGuide ? (
        <section className={styles.journeySection} aria-labelledby="journey-guide-heading">
          <div className={styles.sectionHeading}>
            <span>{goldContent.journeyGuide.kicker}</span>
            <h2 id="journey-guide-heading">{goldContent.journeyGuide.heading}</h2>
            <p>{goldContent.journeyGuide.subtitle}</p>
          </div>
          <div className={styles.journeyGrid}>
            <div className={styles.journeyCopy}>
              {goldContent.journeyGuide.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
              <div className={styles.timeSlotsList}>
                {goldContent.journeyGuide.timeSlots.map((slot) => (
                  <div key={slot.label} className={styles.timeSlotItem}>
                    <span>{slot.label}</span>
                    <strong>{slot.value}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.journeyVisual}>
              <Image
                src={goldContent.journeyGuide.image.src}
                alt={goldContent.journeyGuide.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      ) : null}

      {/* 8. REVERSE DIRECTION COVERAGE */}
      {goldContent?.reverseHubs ? (
        <section className={styles.reverseSection} aria-labelledby="reverse-heading">
          <div className={styles.sectionHeading}>
            <span>{goldContent.reverseHubs.kicker}</span>
            <h2 id="reverse-heading">{goldContent.reverseHubs.heading}</h2>
            <p>{goldContent.reverseHubs.subtitle}</p>
          </div>
          <div className={styles.reverseGrid}>
            {goldContent.reverseHubs.categories.map((cat) => (
              <article key={cat.categoryName} className={styles.hubCategoryCard}>
                <h3>{cat.categoryName}</h3>
                <ul className={styles.hubList}>
                  {cat.hubs.map((hub) => (
                    <li key={hub.name}>
                      <strong>{hub.name}</strong>
                      <span>{hub.addressOrArea} — {hub.note}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {/* 9. DETAILED ENDPOINT CARDS (IF GOLD CONTENT DEFINES ENDPOINTS) OR FALLBACK ORIENTATION */}
      {goldContent?.pricingTable ? (
        <section className={styles.endpointGridSection} aria-labelledby="endpoints-detail-heading">
          <div className={styles.sectionHeading}>
            <span>KHU VỰC PHỤC VỤ</span>
            <h2 id="endpoints-detail-heading">Thông tin đón trả chi tiết tại {goldContent.pricingTable.endpoints.length} khu vực</h2>
            <p>Mỗi khu vực đều có mạng lưới xe đưa đón tận cửa ngõ, đáp ứng chính xác điểm đến của quý khách.</p>
          </div>
          <div className={styles.endpointsCardsGrid}>
            {goldContent.pricingTable.endpoints.map((ep) => {
              const href = layout.endpointLinks?.[ep.name];
              const card = <>
                <div>
                  <div className={styles.endpointCardHeader}>
                    <h3>{ep.name}</h3>
                    <span>{ep.travelTime}</span>
                  </div>
                  <p>{ep.description}</p>
                  <div className={styles.endpointCardPrices}>
                    <div>
                      <small>Vé ghép</small>
                      <strong>{ep.sharedPriceDisplay}</strong>
                    </div>
                    <div>
                      <small>Bao xe</small>
                      <strong>{ep.privatePriceDisplay}</strong>
                    </div>
                  </div>
                </div>
                <p><small><strong>Điểm đón trả:</strong> {ep.pickupNote}</small></p>
              </>;
              return href
                ? <Link href={href} key={ep.id} className={`${styles.endpointCard} ${styles.endpointCardLink}`}>{card}</Link>
                : <article key={ep.id} className={styles.endpointCard}>{card}</article>;
            })}
          </div>
        </section>
      ) : endpointOrientation?.names.length ? (
        <section className={styles.endpointOrientation} aria-labelledby="endpoint-orientation-title">
          <div className={styles.endpointHeading}>
            <span>{endpointOrientation.kicker ?? "ĐỊNH HƯỚNG KHU VỰC"}</span>
            <h2 id="endpoint-orientation-title">{endpointOrientation.title ?? "Bạn đi khu vực nào?"}</h2>
            <p>{endpointOrientation.intro}</p>
          </div>
          <div className={styles.endpointList} aria-label="Khu vực và điểm đến">
            {endpointOrientation.names.map((endpoint) => {
              const href = layout.endpointLinks?.[endpoint];
              return href
                ? <Link href={href} key={endpoint}>{endpoint}<span>→</span></Link>
                : <span key={endpoint}>{endpoint}</span>;
            })}
          </div>
          <p className={styles.endpointBoundary}><FeatureIcon name="pin" /><span>{endpointOrientation.boundary}</span></p>
        </section>
      ) : null}

      {/* 10. COMPARISON & DECISION GUIDE */}
      {goldContent?.decisionGuide ? (
        <section className={styles.decisionSection} aria-labelledby="decision-guide-heading">
          <div className={styles.sectionHeading}>
            <span>{goldContent.decisionGuide.kicker}</span>
            <h2 id="decision-guide-heading">{goldContent.decisionGuide.heading}</h2>
            <p>{goldContent.decisionGuide.subtitle}</p>
          </div>
          <div className={styles.comparisonWrap}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th scope="col">Tiêu chí so sánh</th>
                  <th scope="col">Đi Xe Ghép (Đi chung)</th>
                  <th scope="col">Bao Xe Riêng (4 - 7 chỗ)</th>
                  <th scope="col">Lời khuyên của Phong Cách</th>
                </tr>
              </thead>
              <tbody>
                {goldContent.decisionGuide.rows.map((row) => (
                  <tr key={row.criterion}>
                    <td className={styles.endpointName}><strong>{row.criterion}</strong></td>
                    <td>{row.sharedRide}</td>
                    <td>{row.privateCar}</td>
                    <td><small>{row.recommendation}</small></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {/* 11. PARCEL SERVICE SECTION */}
      {goldContent?.parcelService ? (
        <section className={styles.parcelSection} aria-labelledby="parcel-service-heading">
          <div className={styles.parcelCard}>
            <div className={styles.parcelCopy}>
              <span className={styles.parcelPriceBadge}>Cước gửi hàng từ {parcelPrice}</span>
              <h2 id="parcel-service-heading">{goldContent.parcelService.heading}</h2>
              <p>{goldContent.parcelService.description}</p>
              <ul className={styles.parcelFeatures}>
                {goldContent.parcelService.features.map((feat) => (
                  <li key={feat}><FeatureIcon name="check" /> {feat}</li>
                ))}
              </ul>
              <TrackedLink className="btn btn-primary" href={bookingUrl} eventName="booking_start" eventData={{ placement: "money_landing_parcel", route_slug: route.slug }}>Gửi thông tin gửi hàng</TrackedLink>
            </div>
            <div className={styles.parcelVisual}>
              <Image
                src={goldContent.parcelService.image.src}
                alt={goldContent.parcelService.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>
      ) : null}

      {/* 12. THREE WAYS OF SERVICE (STANDARD LAYOUT COMPATIBILITY) */}
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

      {/* 13. QUICK NEEDS */}
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

      {/* 14. BOOKING STEPS */}
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

      {/* 15. WHY CHOOSE US (GOLD STANDARD COMMITMENTS) */}
      {goldContent?.whyUs ? (
        <section className={styles.whyUsSection} aria-labelledby="why-us-heading">
          <div className={styles.sectionHeading}>
            <span>{goldContent.whyUs.kicker}</span>
            <h2 id="why-us-heading">{goldContent.whyUs.heading}</h2>
            <p>{goldContent.whyUs.subtitle}</p>
          </div>
          <div className={styles.whyUsGrid}>
            {goldContent.whyUs.items.map((item) => (
              <article key={item.title} className={styles.whyUsCard}>
                <div className={styles.whyUsCardHeader}>
                  <h3>{item.title}</h3>
                  <span className={styles.whyUsBadge}>{item.badge}</span>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {/* 16. MEDIA GALLERY (REAL FLEET & INFRASTRUCTURE) */}
      {goldContent?.mediaGallery ? (
        <section className={styles.gallerySection} aria-labelledby="gallery-heading">
          <div className={styles.sectionHeading}>
            <span>{goldContent.mediaGallery.kicker}</span>
            <h2 id="gallery-heading">{goldContent.mediaGallery.heading}</h2>
            <p>{goldContent.mediaGallery.subtitle}</p>
          </div>
          <div className={styles.galleryGrid}>
            {goldContent.mediaGallery.items.map((item) => (
              <figure key={item.src} className={styles.galleryCard}>
                <div className={styles.galleryImageWrap}>
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 25vw" />
                </div>
                <figcaption><p>{item.caption}</p></figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {/* 17. FAQ SECTION (HTML FAQs for users & GEO) */}
      <section className={styles.faqSection} aria-labelledby="faq-title">
        <div className={styles.sectionHeading}>
          <span>CÂU HỎI THƯỜNG GẶP</span>
          <h2 id="faq-title">Thông tin cần biết trước khi đặt</h2>
        </div>
        <div className={styles.faqList}>{faq.map((item, index) => <details key={item.q} open={index === 0}><summary><span>{item.q}</span><b>+</b></summary><p>{item.a}</p></details>)}</div>
      </section>

      {/* 18. RELATED ROUTES */}
      <section className={styles.related} aria-labelledby="related-title">
        <div className={styles.sectionHeading}>
          <span>TUYẾN LIÊN QUAN</span>
          <h2 id="related-title">Xem thêm tuyến đang phục vụ</h2>
        </div>
        <div className={styles.relatedGrid}>{layout.relatedRoutes.map((item) => <Link href={item.href} key={item.href}><small>{item.eyebrow}</small><strong>{item.label}</strong><span>Xem thông tin tuyến →</span></Link>)}</div>
        <div className={styles.supportLink}><div><small>{support.kicker ?? "BÀI SO SÁNH LIÊN QUAN"}</small><strong>{support.label}</strong><p>{support.copy}</p></div><Link href={support.href}>{support.cta ?? "Đọc bài so sánh →"}</Link></div>
      </section>

      {/* 19. FINAL CTA SECTION */}
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
