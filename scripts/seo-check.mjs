import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const canonicalOrigin = "https://xeghepphongcach.com";
const baseUrl = (process.env.SEO_CHECK_BASE_URL || canonicalOrigin).replace(/\/$/, "");
const sampledRoutePages = [
  { path: "/xe-ghep-hai-duong-hai-phong", origin: "Hải Dương", destination: "Hải Phòng", offer: "STARTING_FROM_DESCRIPTION" },
  { path: "/xe-ghep-hai-duong-quang-ninh", origin: "Hải Dương", destination: "Quảng Ninh", offer: "STARTING_FROM_DESCRIPTION" },
  { path: "/xe-ghep-hai-phong-quang-ninh", origin: "Hải Phòng", destination: "Quảng Ninh", offer: false },
];
const upgradedMoneyPagePaths = new Set(sampledRoutePages.filter((page) => page.offer === "STARTING_FROM_DESCRIPTION").map((page) => page.path));
const sampledGuidePages = [
  "/blog/di-hai-duong-ha-noi-bang-phuong-tien-gi",
  "/blog/nhung-chuyen-xe-tu-hai-duong-di-quang-ninh",
];
const failures = [];
const passes = [];

function check(condition, label, detail = "") {
  if (condition) passes.push(label);
  else failures.push(`${label}${detail ? ` — ${detail}` : ""}`);
}

function expectedCanonical(path) {
  return new URL(path, canonicalOrigin).toString();
}

function sameUrl(first, second) {
  return first.replace(/\/$/, "") === second.replace(/\/$/, "");
}

function attribute(html, tagPattern, attributeName) {
  const tag = html.match(tagPattern)?.[0] || "";
  return tag.match(new RegExp(`${attributeName}=["']([^"']+)["']`, "i"))?.[1] || "";
}

function metadata(html) {
  return {
    title: html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "",
    description: attribute(html, /<meta\b[^>]*name=["']description["'][^>]*>/i, "content") || attribute(html, /<meta\b[^>]*content=["'][^"']+["'][^>]*name=["']description["'][^>]*>/i, "content"),
    canonical: attribute(html, /<link\b[^>]*rel=["']canonical["'][^>]*>/i, "href") || attribute(html, /<link\b[^>]*href=["'][^"']+["'][^>]*rel=["']canonical["'][^>]*>/i, "href"),
  };
}

function jsonLdObjects(html) {
  return [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].flatMap((match) => {
    try { return [JSON.parse(match[1])]; } catch { return []; }
  });
}

function containsType(value, type) {
  if (!value || typeof value !== "object") return false;
  if (Array.isArray(value)) return value.some((item) => containsType(item, type));
  if (value["@type"] === type || (Array.isArray(value["@type"]) && value["@type"].includes(type))) return true;
  return Object.values(value).some((item) => containsType(item, type));
}

function objectsWithType(value, type, matches = []) {
  if (!value || typeof value !== "object") return matches;
  if (Array.isArray(value)) {
    for (const item of value) objectsWithType(item, type, matches);
    return matches;
  }
  if (value["@type"] === type || (Array.isArray(value["@type"]) && value["@type"].includes(type))) matches.push(value);
  for (const item of Object.values(value)) objectsWithType(item, type, matches);
  return matches;
}

function textInside(html, tagName) {
  const raw = html.match(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i"))?.[1] || "";
  return raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

async function fetchPage(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, options);
  return { response, html: await response.text() };
}

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return [".ts", ".tsx", ".js", ".mjs"].includes(extname(entry.name)) ? [path] : [];
  }));
  return nested.flat();
}

console.log(`SEO check: ${baseUrl}`);

const publicSourceFiles = (await Promise.all(["app", "components", "lib", "data"].map(sourceFiles))).flat();
const wrongPhoneMatches = [];
for (const file of publicSourceFiles) {
  const content = await readFile(file, "utf8");
  if (/0978663883|0978\s*663\s*883/.test(content)) wrongPhoneMatches.push(file);
}
check(wrongPhoneMatches.length === 0, "Mã nguồn công khai không chứa hotline sai", wrongPhoneMatches.join(", "));

const pageDefinitions = [{ path: "/", origin: "", destination: "", offer: false }, ...sampledRoutePages];
const seenTitles = new Set();
for (const page of pageDefinitions) {
  const { response, html } = await fetchPage(page.path);
  const meta = metadata(html);
  const jsonLd = jsonLdObjects(html);
  check(response.status === 200, `${page.path} trả HTTP 200`, `HTTP ${response.status}`);
  check(Boolean(meta.title), `${page.path} có title`);
  check(Boolean(meta.description), `${page.path} có meta description`);
  check(sameUrl(meta.canonical, expectedCanonical(page.path)), `${page.path} có canonical đúng`, meta.canonical);
  check((html.match(/<h1\b/gi) || []).length === 1, `${page.path} có đúng một H1`);
  check(jsonLd.length > 0, `${page.path} có JSON-LD hợp lệ`);
  check(!/0978663883|0978\s*663\s*883/.test(html), `${page.path} không hiển thị hotline sai`);
  check(html.includes("tel:+84987663883"), `${page.path} dùng tel URI chuẩn`);
  check(html.includes("0987 663 883"), `${page.path} hiển thị hotline chuẩn`);
  if (page.path !== "/") {
    check(!seenTitles.has(meta.title), `${page.path} có title duy nhất`, meta.title);
    seenTitles.add(meta.title);
    check(html.includes(page.origin) && html.includes(page.destination) && html.includes("cả hai chiều"), `${page.path} có nội dung hai chiều`);
    check(upgradedMoneyPagePaths.has(page.path) ? html.includes("Giá xe ghép") && html.includes("Gọi") && html.includes("Zalo") : html.includes("Phong Cách có xe") && html.includes("Muốn đi"), `${page.path} tập trung từ khóa và kêu gọi liên hệ`);
    check(!/Quãng đường<|Thời gian di chuyển(?:<\/[^>]+>|:)\s*\d+|Khoảng\s+\d+(?:[.,]\d+)?\s*(?:km|giờ|phút)/i.test(html), `${page.path} không công bố quãng đường hoặc thời gian cố định`);
    check(containsType(jsonLd, "Service"), `${page.path} có Service schema`);
    check(containsType(jsonLd, "BreadcrumbList"), `${page.path} có Breadcrumb schema`);
    check(containsType(jsonLd, "FAQPage"), `${page.path} có FAQ schema`);
    const hasOffer = containsType(jsonLd, "Offer");
    if (page.offer === "STARTING_FROM_DESCRIPTION") {
      const service = jsonLd.flatMap((item) => objectsWithType(item, "Service"))[0];
      const offer = service?.offers;
      const h1 = textInside(html, "h1");
      check(hasOffer, `${page.path} có Offer mô tả giá bắt đầu`);
      check(offer && !("price" in offer) && !("priceCurrency" in offer), `${page.path} không phát numeric fixed Offer`);
      check(/Giá .*từ/i.test(offer?.description || ""), `${page.path} Offer mô tả rõ giá từ`);
      check(!meta.title.includes("–") && !h1.includes("–"), `${page.path} title/H1 dùng punctuation tự nhiên`);
      check((html.match(/<strong>Từ\s+[\d.]+đ(?:\/người|\/chuyến)?<\/strong>/g) || []).length >= 8, `${page.path} render bốn giá từ ở hero và bảng giá`);
      check(!/<strong>(?!Từ\s)(?:250\.000|500\.000|650\.000|900\.000|1\.100\.000|150\.000|180\.000)đ/i.test(html), `${page.path} không render bare governed amount`);
      check(html.includes("Giá thực tế phụ thuộc địa chỉ đón/trả, thời gian di chuyển, ngày đi và điều kiện chuyến"), `${page.path} đặt variability note cạnh giá`);
      check(html.includes(page.path.endsWith("hai-phong") ? "/blog/di-hai-duong-hai-phong-bang-phuong-tien-gi" : "/blog/nhung-chuyen-xe-tu-hai-duong-di-quang-ninh"), `${page.path} link đúng supporting article`);
      check(!containsType(jsonLd, "Article"), `${page.path} dùng Service/WebPage thay vì Article schema dư thừa`);
      if (page.path.endsWith("quang-ninh")) {
        check(["Đông Triều", "Uông Bí", "Quảng Yên", "Hạ Long / Bãi Cháy", "Cẩm Phả", "Vân Đồn / Ao Tiên", "Móng Cái"].every((endpoint) => html.includes(endpoint)), `${page.path} có endpoint orientation`);
        check(!/Móng Cái[^<]{0,100}(?:250\.000|900\.000|1\.100\.000)đ/i.test(html), `${page.path} không bịa giá endpoint`);
        check(html.includes("Danh sách không xác nhận Phong Cách luôn phục vụ từng endpoint"), `${page.path} không biến geography thành availability`);
      }
    } else {
      check(hasOffer === page.offer, `${page.path} chỉ có Offer khi có giá công khai`);
    }
  } else {
    check(containsType(jsonLd, "Organization"), "Trang chủ có Organization schema");
    check(!containsType(jsonLd, "TaxiService"), "Trang chủ không tự nhận TaxiService");
  }
}

const robots = await fetchPage("/robots.txt");
check(robots.response.status === 200, "robots.txt trả HTTP 200");
check(/User-agent:\s*\*/i.test(robots.html) && /Allow:\s*\//i.test(robots.html), "robots.txt cho phép crawler công khai");
check(/Disallow:\s*\/admin/i.test(robots.html) && /Disallow:\s*\/api/i.test(robots.html), "robots.txt chặn admin và API");
check(!/Disallow:\s*\/$/im.test(robots.html), "robots.txt không chặn toàn site");
check(robots.html.includes(`${canonicalOrigin}/sitemap.xml`), "robots.txt trỏ đúng sitemap");

const oaiRobots = await fetchPage("/robots.txt", { headers: { "User-Agent": "OAI-SearchBot/1.0" } });
check(oaiRobots.response.status === 200 && !/Disallow:\s*\/$/im.test(oaiRobots.html), "OAI-SearchBot truy cập được robots.txt");

const sitemap = await fetchPage("/sitemap.xml");
check(sitemap.response.status === 200, "sitemap.xml trả HTTP 200");
const sitemapUrls = [...sitemap.html.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
check(sitemapUrls.length > 0, "sitemap có URL");
check(new Set(sitemapUrls).size === sitemapUrls.length, "sitemap không có URL trùng");
check(sitemapUrls.every((url) => url.startsWith(`${canonicalOrigin}/`) || url === `${canonicalOrigin}/`), "sitemap chỉ dùng domain chính");
check(sitemapUrls.every((url) => !/vercel\.app|www\.|[?#]/.test(url)), "sitemap không chứa preview/www/query/hash");
check(sitemapUrls.every((url) => !/\/admin|\/api/.test(url)), "sitemap không chứa trang riêng tư");
check(sitemap.html.includes(`${canonicalOrigin}/images/hero-xe-ghep-phong-cach.png`), "image sitemap dùng ảnh hero hiện tại");
check(sitemapUrls.includes(`${canonicalOrigin}/blog`), "/blog có trong sitemap");
for (const page of sampledRoutePages) check(sitemapUrls.includes(expectedCanonical(page.path)), `${page.path} có trong sitemap`);

const blog = await fetchPage("/blog");
const blogMeta = metadata(blog.html);
const blogJsonLd = jsonLdObjects(blog.html);
const blogArticleUrls = new Set([...blog.html.matchAll(/href=["']((?:\/blog\/[^"'#?]+)|(?:\/xe-[^"'#?]+))["']/g)].map((match) => match[1]));
check(blog.response.status === 200, "/blog trả HTTP 200", `HTTP ${blog.response.status}`);
check(sameUrl(blogMeta.canonical, `${canonicalOrigin}/blog`), "/blog có canonical đúng", blogMeta.canonical);
check((blog.html.match(/<h1\b/gi) || []).length === 1, "/blog có đúng một H1");
check(containsType(blogJsonLd, "CollectionPage"), "/blog có CollectionPage schema");
check(containsType(blogJsonLd, "ItemList"), "/blog có ItemList schema");
check(blogArticleUrls.size >= 26, "/blog hiển thị đầy đủ bài SEO", `${blogArticleUrls.size} URL bài viết`);
for (const path of sampledGuidePages) {
  const guide = await fetchPage(path);
  const guideMeta = metadata(guide.html);
  const guideJsonLd = jsonLdObjects(guide.html);
  check(guide.response.status === 200, `${path} trả HTTP 200`, `HTTP ${guide.response.status}`);
  check(Boolean(guideMeta.title) && Boolean(guideMeta.description), `${path} có metadata riêng`);
  check(sameUrl(guideMeta.canonical, expectedCanonical(path)), `${path} có canonical đúng`, guideMeta.canonical);
  check((guide.html.match(/<h1\b/gi) || []).length === 1, `${path} có đúng một H1`);
  check(containsType(guideJsonLd, "Article"), `${path} có Article schema`);
  check(containsType(guideJsonLd, "FAQPage"), `${path} có FAQ schema`);
  check(containsType(guideJsonLd, "BreadcrumbList"), `${path} có Breadcrumb schema`);
  check(!/<meta\b[^>]*property=["']og:image["']/i.test(guide.html), `${path} không dùng ảnh OG chung cho bài chi tiết`);
}

for (const sitemapUrl of sitemapUrls) {
  const url = new URL(sitemapUrl);
  const result = await fetchPage(`${url.pathname}${url.search}`);
  check(result.response.status === 200, `${url.pathname} trong sitemap trả HTTP 200`, `HTTP ${result.response.status}`);
  const canonical = metadata(result.html).canonical;
  check(sameUrl(canonical, sitemapUrl), `${url.pathname} canonical tự tham chiếu`, canonical);
  if (/^\/xe-/.test(url.pathname)) {
    const articleJsonLd = jsonLdObjects(result.html);
    check(upgradedMoneyPagePaths.has(url.pathname) ? result.html.includes("Giá xe ghép") && result.html.includes("Gọi") : result.html.includes("Phong Cách có xe") && result.html.includes("Muốn đi"), `${url.pathname} có thông điệp gọi kiểm tra xe`);
    check(!/Quãng đường<|Thời gian di chuyển(?:<\/[^>]+>|:)\s*\d+|Khoảng\s+\d+(?:[.,]\d+)?\s*(?:km|giờ|phút)/i.test(result.html), `${url.pathname} không công bố quãng đường hoặc thời gian cố định`);
    check(upgradedMoneyPagePaths.has(url.pathname) ? !containsType(articleJsonLd, "Article") && containsType(articleJsonLd, "Service") : containsType(articleJsonLd, "Article"), `${url.pathname} dùng schema đúng loại trang`);
  }
  if (/^\/blog\//.test(url.pathname)) {
    const guideJsonLd = jsonLdObjects(result.html);
    check(result.html.includes("Phong Cách") && result.html.includes("Gọi"), `${url.pathname} có CTA liên hệ Phong Cách`);
    check(!/Quãng đường<|Thời gian di chuyển|Khoảng\s+\d+(?:[.,]\d+)?\s*(?:km|giờ|phút)/i.test(result.html), `${url.pathname} không công bố quãng đường hoặc thời gian cố định`);
    check(containsType(guideJsonLd, "Article"), `${url.pathname} có Article schema`);
    check(containsType(guideJsonLd, "FAQPage"), `${url.pathname} có FAQ schema`);
  }
}

const reverseAliases = [
  ["/xe-ghep-hai-phong-hai-duong", "/xe-ghep-hai-duong-hai-phong"],
  ["/xe-ghep-quang-ninh-hai-duong", "/xe-ghep-hai-duong-quang-ninh"],
  ["/xe-ghep-quang-ninh-hai-phong", "/xe-ghep-hai-phong-quang-ninh"],
];
for (const [source, destination] of reverseAliases) {
  const response = await fetch(`${baseUrl}${source}`, { redirect: "manual" });
  check(response.status === 308, `${source} redirect 308`, `HTTP ${response.status}`);
  check(new URL(response.headers.get("location") || "/", baseUrl).pathname === destination, `${source} redirect về URL hai chiều chuẩn`);
}

console.log(`PASS: ${passes.length}`);
passes.forEach((label) => console.log(`  ✓ ${label}`));
if (failures.length) {
  console.error(`FAIL: ${failures.length}`);
  failures.forEach((label) => console.error(`  ✗ ${label}`));
  process.exitCode = 1;
} else {
  console.log("SEO checks passed.");
}
