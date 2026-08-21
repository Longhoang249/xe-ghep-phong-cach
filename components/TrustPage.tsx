import Link from "next/link";
import type { ReactNode } from "react";
import TrackedLink from "@/components/TrackedLink";
import { siteConfig } from "@/lib/site";

type TrustPageProps = {
  kicker: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export default function TrustPage({ kicker, title, intro, children }: TrustPageProps) {
  return (
    <main className="trust-page">
      <header className="inner-header">
        <Link className="brand" href="/"><span className="brand-mark">PC</span><span><strong>PHONG CÁCH</strong><small>Xe ghép & bao xe liên tỉnh</small></span></Link>
        <TrackedLink className="btn btn-primary" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "trust_header" }}>☎ Gọi tư vấn</TrackedLink>
      </header>
      <section className="trust-hero">
        <Link href="/">← Trang chủ</Link>
        <span className="section-kicker">{kicker}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <article className="trust-content">{children}</article>
      <nav className="trust-links" aria-label="Thông tin về Xe Ghép Phong Cách">
        <Link href="/gioi-thieu">Giới thiệu</Link>
        <Link href="/lien-he">Liên hệ</Link>
        <Link href="/chinh-sach-dat-xe">Chính sách đặt xe</Link>
        <Link href="/an-toan-va-doi-xe">An toàn & đội xe</Link>
        <Link href="/tuyen-xe">Tất cả tuyến</Link>
      </nav>
    </main>
  );
}
