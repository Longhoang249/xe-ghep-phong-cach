import type { Metadata } from "next";
import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";
import styles from "./page.module.css";

const callHref = "tel:0987663883";

export const metadata: Metadata = {
  title: "Gọi đặt xe",
  description: "Gọi Xe Ghép Phong Cách để đặt xe ghép, bao xe hoặc gửi hàng liên tỉnh.",
  alternates: { canonical: "/dat-xe" },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

const trustPoints = [
  "Xe sạch đẹp, tài xế lịch sự",
  "Đón tận nhà – trả tận nơi",
  "Nhận xe ghép, bao xe, gửi hàng",
  "Phục vụ hai chiều",
];

export default function DatXePage() {
  return (
    <main className={styles.page}>
      <section className={styles.panel} aria-labelledby="dat-xe-title">
        <p className={styles.brand}>XE GHÉP PHONG CÁCH</p>

        <div className={styles.heroImage}>
          <Image
            src="/images/hero-phong-cach.jpg"
            alt="Xe Ghép Phong Cách phục vụ khách liên tỉnh"
            fill
            priority
            sizes="(max-width: 600px) 100vw, 560px"
          />
        </div>

        <div className={styles.heroCopy}>
          <h1 id="dat-xe-title">HẢI DƯƠNG ⇄ HẢI PHÒNG ⇄ QUẢNG NINH</h1>
          <p className={styles.serviceLine}>Đón tận nhà – trả tận nơi</p>
          <div className={styles.priceList} aria-label="Giá khởi điểm">
            <p>Xe ghép chỉ từ <strong>250.000đ</strong></p>
            <p>Gửi hàng chỉ từ <strong>150.000đ</strong></p>
          </div>
        </div>

        <TrackedLink
          className={styles.heroCall}
          href={callHref}
          eventName="phone_click"
          eventData={{ source: "micro_landing_hero" }}
          aria-label="Gọi ngay 0987 663 883"
        >
          GỌI NGAY <span>0987 663 883</span>
        </TrackedLink>

        <ul className={styles.trustList}>
          {trustPoints.map((point) => <li key={point}>{point}</li>)}
        </ul>

        <section className={styles.bottomSection} aria-labelledby="bottom-call-title">
          <p id="bottom-call-title">Cần đặt xe ngay? Gọi Phong Cách để chốt chuyến.</p>
          <TrackedLink
            className={styles.bottomCall}
            href={callHref}
            eventName="phone_click"
            eventData={{ source: "micro_landing_bottom" }}
            aria-label="Gọi đặt xe ngay 0987 663 883"
          >
            GỌI ĐẶT XE NGAY
          </TrackedLink>
        </section>
      </section>

      <aside className={styles.stickyCall} aria-label="Gọi đặt xe">
        <TrackedLink
          className={styles.stickyCallLink}
          href={callHref}
          eventName="phone_click"
          eventData={{ source: "micro_landing_sticky" }}
          aria-label="Gọi đặt xe ngay 0987 663 883"
        >
          <span>GỌI ĐẶT XE NGAY</span>
          <strong>0987 663 883</strong>
        </TrackedLink>
      </aside>
    </main>
  );
}
