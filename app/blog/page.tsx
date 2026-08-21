import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";
import { blogPosts } from "@/data/blog-posts";
import { publishedGuidePosts as guidePosts } from "@/data/seo/published-content";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog xe ghép và các tuyến Phong Cách có xe",
  description: "Tổng hợp bài viết về các tuyến xe ghép, bao xe 4–7 chỗ và gửi hàng theo chuyến mà Phong Cách đang tiếp nhận nhu cầu.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Blog tuyến xe Phong Cách",
    description: "Tìm bài viết theo tuyến và gọi Phong Cách để kiểm tra xe phù hợp với nhu cầu thực tế.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Blog tuyến xe Phong Cách" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog tuyến xe Phong Cách",
    description: "Các tuyến xe Phong Cách đang tiếp nhận nhu cầu.",
    images: ["/og.png"],
  },
};

export default function BlogPage() {
  const pageUrl = absoluteUrl("/blog");
  const totalPosts = blogPosts.length + guidePosts.length;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Blog tuyến xe Phong Cách",
        description: "Tổng hợp bài viết về các tuyến xe mà Phong Cách đang tiếp nhận nhu cầu.",
        inLanguage: siteConfig.language,
        isPartOf: { "@id": `${absoluteUrl()}#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "Blog", item: pageUrl },
        ],
      },
      {
        "@type": "ItemList",
        name: "Bài viết về các tuyến xe Phong Cách",
        numberOfItems: totalPosts,
        itemListElement: [
          ...guidePosts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: post.title,
            url: absoluteUrl(`/blog/${post.slug}`),
          })),
          ...blogPosts.map((post, index) => ({
            "@type": "ListItem",
            position: guidePosts.length + index + 1,
            name: post.title,
            url: absoluteUrl(`/${post.route.slug}`),
          })),
        ],
      },
    ],
  };

  return (
    <main className="blog-page">
      <JsonLd data={jsonLd} />
      <header className="inner-header blog-header">
        <Link className="brand" href="/"><span className="brand-mark">PC</span><span><strong>PHONG CÁCH</strong><small>Xe ghép & bao xe liên tỉnh</small></span></Link>
        <nav aria-label="Điều hướng Blog"><Link href="/tuyen-xe">Tuyến xe</Link><Link className="active" href="/blog">Blog</Link></nav>
        <TrackedLink className="btn btn-primary" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "blog_header" }}>☎ Gọi tư vấn</TrackedLink>
      </header>

      <section className="blog-hero">
        <nav className="route-breadcrumb" aria-label="Breadcrumb"><Link href="/">Trang chủ</Link><span>›</span><span aria-current="page">Blog</span></nav>
        <div className="blog-hero-grid">
          <div>
            <span className="section-kicker">BLOG PHONG CÁCH</span>
            <h1>Tìm tuyến bạn muốn đi.<br /><em>Phong Cách kiểm tra xe.</em></h1>
          </div>
          <div className="blog-hero-note">
            <b>{totalPosts} bài viết hữu ích</b>
            <p>Gồm bài tư vấn chọn phương tiện, cách đặt chuyến và bài theo tuyến. Thông tin chuyến thực tế được Phong Cách trao đổi khi bạn gọi.</p>
            <TrackedLink href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "blog_hero" }}>Gọi {siteConfig.phoneDisplay} →</TrackedLink>
          </div>
        </div>
      </section>

      <section className="blog-featured" aria-labelledby="blog-featured-title">
        <div className="blog-section-heading"><div><span className="section-kicker">GIẢI ĐÁP TRƯỚC CHUYẾN ĐI</span><h2 id="blog-featured-title">Bài hướng dẫn mới</h2></div><Link href="#bai-huong-dan">Xem tất cả ↓</Link></div>
        <div className="blog-featured-grid">
          {guidePosts.slice(0, 4).map((post, index) => <GuideCard post={post} featured={index === 0} number={index + 1} key={post.slug} />)}
        </div>
      </section>

      <section className="blog-library" id="bai-huong-dan" aria-labelledby="blog-guide-title">
        <div className="blog-section-heading"><div><span className="section-kicker">TỪ KHÓA THÔNG TIN</span><h2 id="blog-guide-title">Tư vấn chọn xe và đặt chuyến</h2></div><p>Giải đáp những câu hỏi khách thường tìm trước khi gọi xe.</p></div>
        <div className="blog-card-grid">
          {guidePosts.map((post, index) => <GuideCard post={post} number={index + 1} key={post.slug} />)}
        </div>
      </section>

      <section className="blog-library blog-route-library" id="bai-theo-tuyen" aria-labelledby="blog-library-title">
        <div className="blog-section-heading"><div><span className="section-kicker">THƯ VIỆN TUYẾN XE</span><h2 id="blog-library-title">Bài viết theo tuyến</h2></div><p>Chọn nơi bạn muốn đi để xem thông tin và gọi Phong Cách kiểm tra xe.</p></div>
        <div className="blog-card-grid">
          {blogPosts.map((post, index) => <ArticleCard post={post} number={guidePosts.length + index + 1} key={post.route.id} />)}
        </div>
      </section>

      <section className="final-cta blog-final-cta"><div><span>CHƯA THẤY TUYẾN CẦN ĐI?</span><h2>Gọi Phong Cách để kiểm tra xe</h2><p>Cho bên mình biết nơi đón, nơi trả và thời điểm mong muốn.</p></div><TrackedLink className="btn btn-white" href={siteConfig.phoneHref} eventName="click_call" eventData={{ placement: "blog_footer_cta" }}>☎ {siteConfig.phoneDisplay}</TrackedLink></section>
    </main>
  );
}

function GuideCard({ post, featured = false, number }: { post: (typeof guidePosts)[number]; featured?: boolean; number: number }) {
  return (
    <article className={`blog-card${featured ? " blog-card-lead" : ""}`}>
      <Link className="blog-card-link" href={`/blog/${post.slug}`} aria-label={`Đọc ${post.title}`}>
        <div className="blog-card-top"><span>{post.category}</span><i aria-hidden="true">{String(number).padStart(2, "0")}</i></div>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <div className="blog-card-keywords">{[post.primaryKeyword, ...post.secondaryKeywords].slice(0, featured ? 3 : 2).map((keyword) => <span key={keyword}>{keyword}</span>)}</div>
        <strong>Đọc hướng dẫn <b>→</b></strong>
      </Link>
    </article>
  );
}

function ArticleCard({ post, number }: { post: (typeof blogPosts)[number]; number: number }) {
  return (
    <article className="blog-card">
      <Link className="blog-card-link" href={`/${post.route.slug}`} aria-label={`Đọc ${post.title}`}>
        <div className="blog-card-top"><span>{post.category}</span><i aria-hidden="true">{String(number).padStart(2, "0")}</i></div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <div className="blog-card-keywords">{post.keywords.slice(0, 2).map((keyword) => <span key={keyword}>{keyword}</span>)}</div>
        <strong>Đọc bài viết <b>→</b></strong>
      </Link>
    </article>
  );
}
