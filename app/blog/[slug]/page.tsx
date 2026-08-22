import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";
import { findPublishedGuidePost, publishedGuidePosts as guidePosts } from "@/data/seo/published-content";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return guidePosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = findPublishedGuidePost(slug);
  if (!post) return {};

  const canonical = `/blog/${post.slug}`;
  return {
    title: post.seoTitle ?? post.title,
    description: post.description,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: absoluteUrl(canonical),
      title: post.title,
      description: post.description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [],
    },
    twitter: { card: "summary", title: post.title, description: post.description, images: [] },
  };
}

export default async function GuidePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = findPublishedGuidePost(slug);
  if (!post) notFound();

  const pageUrl = absoluteUrl(`/blog/${post.slug}`);
  const routeUrl = `/${post.routeSlug}`;
  const relatedPosts = guidePosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: post.title,
        description: post.description,
        url: pageUrl,
        inLanguage: siteConfig.language,
        datePublished: siteConfig.contentUpdatedAt,
        dateModified: post.updatedAt ?? siteConfig.contentUpdatedAt,
        author: { "@id": `${absoluteUrl()}#organization` },
        publisher: { "@id": `${absoluteUrl()}#organization` },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
        citation: post.sources?.map((source) => source.url),
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: post.title,
        description: post.description,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": `${absoluteUrl()}#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#article` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
          { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <main className="guide-page">
      <JsonLd data={jsonLd} />
      <header className="inner-header guide-header">
        <Link className="brand" href="/"><span className="brand-mark">PC</span><span><strong>PHONG CÁCH</strong><small>Xe ghép & bao xe liên tỉnh</small></span></Link>
        <div className="inner-header-actions"><Link className="inner-blog-link" href="/blog">Tất cả bài viết</Link><TrackedLink className="btn btn-primary" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "guide_header", article_slug: post.slug }}>☎ Gọi tư vấn</TrackedLink></div>
      </header>

      <article>
        <header className="guide-hero">
          <nav className="route-breadcrumb" aria-label="Breadcrumb"><Link href="/">Trang chủ</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span aria-current="page">{post.category}</span></nav>
          <div className="guide-hero-grid">
            <div>
              <span className="section-kicker">{post.category.toUpperCase()}</span>
              <h1>{post.title}</h1>
              <p>{post.description}</p>
              <div className="guide-keywords" aria-label="Từ khóa của bài viết">{post.secondaryKeywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div>
            </div>
            <aside className="guide-answer-card">
              <span>TRẢ LỜI NGẮN</span>
              <p>{post.directAnswer}</p>
              <TrackedLink href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "guide_answer", article_slug: post.slug }}>Gọi {siteConfig.phoneDisplay} →</TrackedLink>
            </aside>
          </div>
        </header>

        <section className="guide-content">
          <div className="guide-main-column">
            <section className="guide-choice-section" aria-labelledby="guide-options-title">
              <span className="section-kicker">CÁC LỰA CHỌN CẦN CÂN NHẮC</span>
              <h2 id="guide-options-title">Chọn theo nhu cầu thực tế</h2>
              <div className="guide-choice-grid">
                {post.choices.map((choice, index) => <article key={choice.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{choice.title}</h3><b>{choice.bestFor}</b><p>{choice.description}</p></article>)}
              </div>
            </section>

            {post.comparison ? (
              <section className="guide-comparison" aria-labelledby="guide-comparison-title">
                <span className="section-kicker">SO SÁNH NHANH</span>
                <h2 id="guide-comparison-title">{post.comparison.title}</h2>
                <div className="guide-table-scroll">
                  <table>
                    <thead><tr><th>Phương án</th><th>Giá / chi phí</th><th>Thời gian</th><th>Tiện lợi</th><th>Đón trả</th><th>Phù hợp</th></tr></thead>
                    <tbody>{post.comparison.rows.map((row) => <tr key={row.option}><th scope="row">{row.option}</th><td>{row.cost}</td><td>{row.time}</td><td>{row.convenience}</td><td>{row.pickupDropoff}</td><td>{row.bestFor}</td></tr>)}</tbody>
                  </table>
                </div>
                <p>{post.comparison.note}</p>
              </section>
            ) : null}

            {post.sections.map((section) => (
              <section className="guide-text-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
              </section>
            ))}

            <section className="guide-checklist" aria-labelledby="guide-checklist-title">
              <span className="section-kicker">CHECKLIST TRƯỚC KHI GỌI</span>
              <h2 id="guide-checklist-title">Chuẩn bị đủ để Phong Cách kiểm tra nhanh</h2>
              <div>{post.checklist.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b></p>)}</div>
            </section>

            <section className="guide-faq" aria-labelledby="guide-faq-title">
              <span className="section-kicker">CÂU HỎI THƯỜNG GẶP</span>
              <h2 id="guide-faq-title">Thông tin cần xác nhận</h2>
              {post.faq.map((item) => <details key={item.q}><summary>{item.q}<span>＋</span></summary><p>{item.a}</p></details>)}
            </section>

            {post.sources?.length ? (
              <section className="guide-sources" aria-labelledby="guide-sources-title">
                <span className="section-kicker">NGUỒN ĐỐI CHIẾU</span>
                <h2 id="guide-sources-title">Nguồn công khai đã kiểm tra</h2>
                <p>Các nguồn dưới đây dùng cho bối cảnh địa lý, hạ tầng và lựa chọn vận tải; không thay thế xác nhận chuyến với đơn vị vận hành.</p>
                <ol>{post.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a><span>{source.publisher} · Đối chiếu {source.checkedAt.split("-").reverse().join("/")}</span><small>{source.supports}</small></li>)}</ol>
              </section>
            ) : null}
          </div>

          <aside className="guide-sidebar">
            <div className="guide-route-card"><span>TUYẾN LIÊN QUAN</span><h2>{post.routeLabel}</h2><p>Phong Cách có xe cho tuyến này. Xem trang tuyến hoặc gọi để kiểm tra chuyến thực tế.</p><Link href={routeUrl}>Xem trang tuyến →</Link></div>
            <div className="guide-call-card"><span>MUỐN ĐI?</span><h2>Gọi Phong Cách</h2><p>Cho bên mình biết nơi đón, nơi trả và thời điểm mong muốn.</p><TrackedLink className="btn btn-primary" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "guide_sidebar", article_slug: post.slug }}>☎ {siteConfig.phoneDisplay}</TrackedLink></div>
          </aside>
        </section>
      </article>

      <section className="guide-related">
        <div className="related-routes-heading"><div><span className="section-kicker">ĐỌC TIẾP</span><h2>Bài hướng dẫn liên quan</h2></div><Link href="/blog">Xem toàn bộ Blog →</Link></div>
        <div>{relatedPosts.map((item) => <Link href={`/blog/${item.slug}`} key={item.slug}><small>{item.category}</small><b>{item.title}</b><span>Đọc bài viết →</span></Link>)}</div>
      </section>

      <section className="final-cta guide-final-cta"><div><span>PHONG CÁCH CÓ XE</span><h2>Muốn đi, hãy gọi để kiểm tra</h2><p>Mỗi chuyến được trao đổi theo nhu cầu thực tế.</p></div><TrackedLink className="btn btn-white" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "guide_footer", article_slug: post.slug }}>☎ {siteConfig.phoneDisplay}</TrackedLink></section>
    </main>
  );
}
