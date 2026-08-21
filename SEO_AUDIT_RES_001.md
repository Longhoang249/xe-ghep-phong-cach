# RES-001 — SEO Execution Architecture Audit

Audit date: 2026-08-21

Status: `REVIEW`

Scope: Repository architecture, current production SEO inventory, technical SEO, publication controls, and Route Data Layer proposal.

Non-goals respected: no homepage/UI changes, no new page, no content rewrite, no publishing action.

## A. Repo Architecture Summary

### Framework and rendering

- Next.js `16.3.1`, React `19.2.8`, TypeScript, App Router, and Tailwind/PostCSS-based global styling.
- Static pages use App Router `page.tsx` files. Route pages use the root dynamic segment `app/[slug]/page.tsx`; guides use `app/blog/[slug]/page.tsx`.
- Both dynamic page families use `generateStaticParams`, so their current records are prerendered as static HTML at build time.
- The production build generated 49 static/SSG outputs and completed successfully during this audit.

### Content architecture and sources

- `data/routes.ts`: 18 route records with endpoints, slug, region, distance, duration, fare fields, tags, and featured state.
- `data/blog-posts.ts`: generates one route-page title, excerpt, category, and keyword set for every record in `data/routes.ts`.
- `data/guide-posts.ts`: 13 manually authored supporting/comparison articles, including sections, choices, checklists, FAQ, and one related money-page slug.
- Static trust/core content lives directly in its route's `page.tsx` file.
- `lib/site.ts`: global brand, domain, phone, social fallback, locale, service areas, and one global content update timestamp.
- There is no CMS or SEO content database. Supabase is used for booking persistence, not content.

### Metadata, discovery, and indexability

- Root defaults are defined through the Next.js Metadata API in `app/layout.tsx`; detail pages use `generateMetadata`.
- Every URL in the production sitemap has a self-referencing canonical and exactly one H1 in the automated crawl.
- `app/sitemap.ts` emits core pages, all guide records, and all route records.
- `app/robots.ts` allows public crawling, disallows `/admin` and `/api`, and references the canonical sitemap.
- `/admin/bookings` is publicly reachable but emits `noindex, nofollow` and is absent from the sitemap.
- Three reverse-direction aliases are permanent redirects to the canonical two-way route URLs.
- HTTP and `www` redirect to the canonical HTTPS non-`www` origin.

### Structured data

- Homepage: `Organization`, `WebSite`, and service graphs.
- Route pages: `WebPage`, `Article`, `BreadcrumbList`, `Service`, and `FAQPage`; `Offer` is currently emitted only for the Hải Dương–Phú Thọ route.
- Guide pages: `Article`, `WebPage`, `BreadcrumbList`, and `FAQPage`.
- Directory/blog pages: `CollectionPage`, `ItemList`, and breadcrumbs.
- Trust pages: `AboutPage`, `ContactPage`, or `WebPage` as appropriate.

### Analytics and reusable UI

- Vercel Analytics and Speed Insights are mounted globally.
- GA4 loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` exists.
- Conversion events include call, Zalo, booking start/submit/save, route view, and route filter. Tracking code deliberately strips PII.
- Reusable presentation includes `JsonLd`, `TrackedLink`, `RouteViewTracker`, `RoutesDirectory`, `TrustPage`, booking/address/map components, and a shared site configuration.

## B. Existing SEO Inventory

`PUBLISHED` below means the URL was observed in the live production sitemap and returned successfully on 2026-08-21. It does **not** mean the asset has received approval under the new workflow.

Source keys:

- `R`: `data/routes.ts` → `data/blog-posts.ts` → `app/[slug]/page.tsx`
- `G`: `data/guide-posts.ts` → `app/blog/[slug]/page.tsx`
- `S`: static route `page.tsx`

| URL | Rendered title | H1 | Type | Cluster | Status | Source |
|---|---|---|---|---|---|---|
| `/` | Xe ghép Hải Dương – Hải Phòng – Quảng Ninh | Xe Ghép Liên Tỉnh Đón tận nhà, trả khách tận nơi! | Homepage | Sitewide | PUBLISHED | `S: app/page.tsx` |
| `/tuyen-xe` | Danh sách tuyến xe ghép hai chiều \| Xe Ghép Phong Cách | Xe ghép Hải Dương Hải Phòng · Quảng Ninh. | Route directory | Sitewide | PUBLISHED | `S: app/tuyen-xe/page.tsx` |
| `/blog` | Blog xe ghép và các tuyến Phong Cách có xe \| Xe Ghép Phong Cách | Tìm tuyến bạn muốn đi. Phong Cách kiểm tra xe. | Content hub | Sitewide | PUBLISHED | `S: app/blog/page.tsx` |
| `/gioi-thieu` | Giới thiệu Xe Ghép Phong Cách \| Xe Ghép Phong Cách | Xe ghép liên tỉnh, rõ thông tin trước chuyến | Trust | Sitewide | PUBLISHED | `S: app/gioi-thieu/page.tsx` |
| `/lien-he` | Liên hệ đặt xe ghép Phong Cách \| Xe Ghép Phong Cách | Gửi tuyến để Phong Cách kiểm tra xe | Trust/conversion | Sitewide | PUBLISHED | `S: app/lien-he/page.tsx` |
| `/chinh-sach-dat-xe` | Chính sách đặt và xác nhận chuyến xe \| Xe Ghép Phong Cách | Xác nhận rõ trước khi khách quyết định đi | Trust/policy | Sitewide | PUBLISHED | `S: app/chinh-sach-dat-xe/page.tsx` |
| `/an-toan-va-doi-xe` | An toàn và loại xe phục vụ \| Xe Ghép Phong Cách | Chọn loại xe phù hợp với nhu cầu chuyến đi | Trust | Sitewide | PUBLISHED | `S: app/an-toan-va-doi-xe/page.tsx` |
| `/blog/di-hai-duong-ha-noi-bang-phuong-tien-gi` | Đi Hải Dương – Hà Nội bằng phương tiện gì? \| Xe Ghép Phong Cách | Đi Hải Dương – Hà Nội bằng phương tiện gì? | Comparison/discovery | Legacy/outside Phase 1 | PUBLISHED | `G` |
| `/blog/nhung-chuyen-xe-tu-hai-duong-di-quang-ninh` | Những chuyến xe từ Hải Dương đi Quảng Ninh \| Xe Ghép Phong Cách | Những chuyến xe từ Hải Dương đi Quảng Ninh | Comparison/discovery | B | PUBLISHED | `G` |
| `/blog/di-hai-duong-hai-phong-bang-phuong-tien-gi` | Đi Hải Dương – Hải Phòng bằng phương tiện gì? \| Xe Ghép Phong Cách | Đi Hải Dương – Hải Phòng bằng phương tiện gì? | Comparison/discovery | A | PUBLISHED | `G` |
| `/blog/di-hai-phong-quang-ninh-bang-phuong-tien-gi` | Đi Hải Phòng – Quảng Ninh bằng phương tiện gì? \| Xe Ghép Phong Cách | Đi Hải Phòng – Quảng Ninh bằng phương tiện gì? | Comparison/discovery | C | PUBLISHED | `G` |
| `/blog/xe-ghep-hay-xe-khach-hai-duong-ha-noi` | Xe ghép hay xe khách khi đi Hải Dương – Hà Nội? \| Xe Ghép Phong Cách | Xe ghép hay xe khách khi đi Hải Dương – Hà Nội? | Comparison | Legacy/outside Phase 1 | PUBLISHED | `G` |
| `/blog/cach-dat-xe-ghep-hai-duong-quang-ninh` | Cách đặt xe ghép Hải Dương – Quảng Ninh \| Xe Ghép Phong Cách | Cách đặt xe ghép Hải Dương – Quảng Ninh | Supporting | B | PUBLISHED | `G` |
| `/blog/gui-hang-hai-duong-hai-phong-theo-chuyen` | Gửi hàng Hải Dương – Hải Phòng theo chuyến cần chuẩn bị gì? \| Xe Ghép Phong Cách | Gửi hàng Hải Dương – Hải Phòng theo chuyến cần chuẩn bị gì? | Supporting | A | PUBLISHED | `G` |
| `/blog/xe-hai-duong-di-noi-bai-cho-gia-dinh` | Chọn xe Hải Dương đi Nội Bài cho gia đình \| Xe Ghép Phong Cách | Chọn xe Hải Dương đi Nội Bài cho gia đình | Supporting/discovery | Legacy/outside Phase 1 | PUBLISHED | `G` |
| `/blog/xe-ha-noi-ve-hai-duong-chon-phuong-tien-nao` | Xe Hà Nội về Hải Dương: chọn phương tiện nào? \| Xe Ghép Phong Cách | Xe Hà Nội về Hải Dương: chọn phương tiện nào? | Comparison/discovery | Legacy/outside Phase 1 | PUBLISHED | `G` |
| `/blog/xe-hai-phong-ve-hai-duong-can-chuan-bi-gi` | Xe Hải Phòng về Hải Dương: cần chuẩn bị gì khi đặt xe? \| Xe Ghép Phong Cách | Xe Hải Phòng về Hải Dương: cần chuẩn bị gì khi đặt xe? | Supporting | A | PUBLISHED | `G` |
| `/blog/xe-hai-duong-di-cat-bi-chon-xe-ghep-hay-bao-xe` | Xe Hải Dương đi Cát Bi: chọn xe ghép hay bao xe? \| Xe Ghép Phong Cách | Xe Hải Dương đi Cát Bi: chọn xe ghép hay bao xe? | Comparison | A | PUBLISHED | `G` |
| `/blog/dat-xe-hai-duong-ha-noi-can-thong-tin-gi` | Đặt xe Hải Dương – Hà Nội cần cung cấp thông tin gì? \| Xe Ghép Phong Cách | Đặt xe Hải Dương – Hà Nội cần cung cấp thông tin gì? | Supporting | Legacy/outside Phase 1 | PUBLISHED | `G` |
| `/blog/gui-hang-hai-duong-ha-noi-theo-chuyen` | Gửi hàng Hải Dương – Hà Nội theo chuyến cần lưu ý gì? \| Xe Ghép Phong Cách | Gửi hàng Hải Dương – Hà Nội theo chuyến cần lưu ý gì? | Supporting | Legacy/outside Phase 1 | PUBLISHED | `G` |
| `/xe-ghep-hai-duong-ha-noi` | Xe ghép Hải Dương – Hà Nội: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Hà Nội | Money/route | Legacy/outside Phase 1 | PUBLISHED | `R` |
| `/xe-hai-duong-noi-bai` | Xe ghép Hải Dương – Nội Bài: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Nội Bài | Money/airport | Legacy/outside Phase 1 | PUBLISHED | `R` |
| `/xe-ghep-hai-duong-hai-phong` | Xe ghép Hải Dương – Hải Phòng: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Hải Phòng | Money/route | A | PUBLISHED | `R` |
| `/xe-hai-duong-cat-bi` | Xe ghép Hải Dương – Cát Bi: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Cát Bi | Money/airport | A | PUBLISHED | `R` |
| `/xe-ghep-hai-duong-quang-ninh` | Xe ghép Hải Dương – Quảng Ninh: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Quảng Ninh | Money/route | B | PUBLISHED | `R` |
| `/xe-ghep-hai-phong-quang-ninh` | Xe ghép Hải Phòng – Quảng Ninh: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Phòng ⇄ Quảng Ninh | Money/route | C | PUBLISHED | `R` |
| `/xe-ghep-hai-duong-bac-ninh` | Xe ghép Hải Dương – Bắc Ninh: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Bắc Ninh | Money/route | Legacy/outside Phase 1 | PUBLISHED | `R` |
| `/xe-ghep-hai-duong-bac-giang` | Xe ghép Hải Dương – Bắc Giang: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Bắc Giang | Money/route | Legacy/outside Phase 1 | PUBLISHED | `R` |
| `/xe-ghep-hai-duong-thai-nguyen` | Xe ghép Hải Dương – Thái Nguyên: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Thái Nguyên | Money/route | Legacy/outside Phase 1 | PUBLISHED | `R` |
| `/xe-ghep-hai-duong-vinh-phuc` | Xe ghép Hải Dương – Vĩnh Phúc: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Vĩnh Phúc | Money/route | Legacy/outside Phase 1 | PUBLISHED | `R` |
| `/xe-ghep-hai-duong-phu-tho` | Xe ghép Hải Dương – Phú Thọ: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Phú Thọ | Money/route | Legacy/outside Phase 1 | PUBLISHED | `R` |
| `/xe-ghep-hai-duong-thai-binh` | Xe ghép Hải Dương – Thái Bình: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Thái Bình | Money/route | Legacy/outside Phase 1 | PUBLISHED | `R` |
| `/xe-ghep-hai-duong-nam-dinh` | Xe ghép Hải Dương – Nam Định: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Nam Định | Money/route | Legacy/outside Phase 1 | PUBLISHED | `R` |
| `/xe-ghep-hai-duong-hung-yen` | Xe ghép Hải Dương – Hưng Yên: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Hưng Yên | Money/route | Legacy/outside Phase 1 | PUBLISHED | `R` |
| `/xe-ghep-hai-duong-ha-nam` | Xe ghép Hải Dương – Hà Nam: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Hà Nam | Money/route | Legacy/outside Phase 1 | PUBLISHED | `R` |
| `/xe-ghep-hai-duong-phu-ly` | Xe ghép Hải Dương – Phủ Lý: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Phủ Lý | Money/route | Legacy/outside Phase 1 | PUBLISHED | `R` |
| `/xe-ghep-hai-duong-ninh-binh` | Xe ghép Hải Dương – Ninh Bình: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Ninh Bình | Money/route | Legacy/outside Phase 1 | PUBLISHED | `R` |
| `/xe-ghep-hai-duong-thanh-hoa` | Xe ghép Hải Dương – Thanh Hoá: Phong Cách có xe \| Xe Ghép Phong Cách | Xe ghép Hải Dương ⇄ Thanh Hoá | Money/route | Legacy/outside Phase 1 | PUBLISHED | `R` |

Additional non-sitemap endpoints:

- `/admin/bookings`: internal/demo page; HTTP 200, `noindex, nofollow`, robots-disallowed.
- `/llms.txt`: machine-readable brand/service summary; not an SEO landing page.
- `/manifest.webmanifest`, `/robots.txt`, `/sitemap.xml`: discovery/platform endpoints.
- `/8bf433997324b52e41264c57cbd4a3a0.txt`: IndexNow key verification.
- `/api/bookings`, `/api/geocode`, `/api/route-map`: application APIs, robots-disallowed.

## C. Technical SEO Findings

### Critical

1. **Unverified public price synthesis.** `lib/pricing.ts` calculates fares from distance when a stored value is missing, including custom routes, limousine, private trips, shared trips, and parcel delivery. `BookingExperience` can display and persist this result as a price estimate. This conflicts with the new rule that Codex must not invent a fare when verified data is absent.
2. **No publication gate.** Every `routes` record becomes a root route page through `generateStaticParams`; every guide record becomes a guide page; both arrays are included wholesale in the sitemap. Adding data can therefore publish an indexable page without passing `REVIEW` → `APPROVED` → `PUBLISHED`.

### High

1. **No evidence/provenance model.** Exact fares, distance, duration, route availability, two-way service, vehicle/service coverage, cargo service, and business promises have no source reference, verifier, verified date, or expiry.
2. **Template/doorway risk.** All 18 route pages use one largely generic content template. The distinguishing information is mainly origin/destination and optional price; route-specific pickup/drop-off, journey, use-case, and proof data are absent.
3. **Internal linking is not cluster-governed.** Route related links use a broad `region` match; guide related links use array order. Guides point to one money page, but money pages do not link back to relevant supporting guides. There is no explicit parent/child cluster graph.
4. **Phase scope drift.** Only 4 route pages and 7 guides belong to Clusters A–C as classified in this audit; 14 route pages and 6 guides target legacy/out-of-scope corridors. Strategy must decide their disposition before any removal, merge, redirect, or rewrite.
5. **Business claims need owner evidence.** The current site states route availability, both-direction service, pickup at home/drop at destination, 4–7 seat service, parcel service, and payment/booking terms. The repository does not hold approval evidence for those claims.

### Medium

1. **Freshness is global rather than asset-specific.** Sitemap `lastModified`, `Article.datePublished`, and `dateModified` all derive from one `siteConfig.contentUpdatedAt` value.
2. **Schema intent needs review.** Money pages emit both `Service` and `Article`; the same generic FAQ graph appears across route pages. Markup is syntactically valid, but should follow the final page intent and visible unique content.
3. **No route/guide social preview image.** Detail metadata intentionally sets empty Open Graph/Twitter images. This avoids a misleading generic image but reduces share-preview quality.
4. **Webmaster/GA configuration is unconfirmed.** Production HTML contains no Google/Bing meta verification tag and no GA4 ID. DNS verification may still exist, so owner confirmation is required. Vercel Analytics/Speed Insights are present in code.
5. **Current automated SEO checks validate mechanics, not evidence or uniqueness.** The 290 checks passed, but they do not detect unverified pricing, cluster scope, per-page unique value, or publication workflow status.

### Low

1. Sitemap priority is manually assigned and should not be treated as a substitute for internal-link authority or publication governance.
2. Route and guide static params allow unknown dynamic paths to reach the page lookup before returning 404; an explicit approved asset registry would make route eligibility clearer.

### Confirmed strengths

- Production returned HTTP 200 for all 38 sitemap URLs during the automated crawl.
- Canonicals are self-referencing and use the HTTPS non-`www` domain.
- All sitemap pages have one H1, a title, and a meta description.
- Robots, sitemap, reverse-direction redirects, HTTPS redirect, `www` redirect, and admin `noindex` behave correctly.
- JSON-LD serialization escapes `<`, matching current Next.js guidance.
- Typecheck, lint, build, and 290 automated SEO assertions all pass.

## D. Route Page Architecture Proposal

Keep current public slugs stable, but separate four concerns that are currently coupled:

1. **Operational facts** — verified route availability, services, prices, pickup/drop-off, distance, and duration.
2. **SEO assets** — explicit approved pages with intent, page type, cluster, canonical URL, unique modules, and internal links.
3. **Presentation** — reusable renderers for Money, Supporting, and Comparison pages.
4. **Publication** — one gate that controls static params, sitemap inclusion, indexability, and preview behavior.

Recommended flow:

```text
Verified locations/routes
        ↓
Explicit SEO asset registry (status + intent + unique value)
        ↓
Validation and quality gate
        ↓
Page renderer by tier
        ↓
generateStaticParams + sitemap (PUBLISHED assets only)
```

Important constraints:

- Do not create a route page merely because an operational route exists.
- Do not generate a public price from a fallback formula. Missing/unverified values remain `null`; public copy uses a neutral contact message.
- Do not automatically expose `REVIEW` assets in production. A later preview mechanism can render them `noindex` outside the public sitemap.
- Define related routes and supporting articles explicitly by asset ID; do not infer them from array order.
- Keep the first 10–20 approved pages manually authored through structured modules to discover a winning template before generation is expanded.

## E. Recommended Data Model

Conceptual TypeScript model; this is a proposal only and was not implemented in RES-001:

```ts
type SeoStatus =
  | "BACKLOG"
  | "RESEARCH"
  | "DATA_REQUIRED"
  | "READY"
  | "IN_PROGRESS"
  | "REVIEW"
  | "APPROVED"
  | "PUBLISHED"
  | "MONITORING"
  | "UPDATE_REQUIRED"
  | "BLOCKED";

type Evidence = {
  sourceType: "OWNER" | "OPERATIONAL_RECORD" | "MAP" | "PUBLIC_AUTHORITY";
  sourceRef: string;
  verifiedBy: string;
  verifiedAt: string;
  reviewAfter?: string;
};

type VerifiedValue<T> = {
  value: T | null;
  status: "VERIFIED" | "DATA_REQUIRED" | "EXPIRED";
  evidence?: Evidence;
};

type Location = {
  id: string;
  name: string;
  kind: "PROVINCE" | "CITY" | "DISTRICT" | "AIRPORT" | "AREA";
  parentId?: string;
  aliases?: string[];
};

type RouteRecord = {
  id: string;
  originId: string;
  destinationId: string;
  availability: VerifiedValue<"ONE_WAY" | "BOTH_DIRECTIONS">;
  services: {
    sharedRide: VerifiedValue<boolean>;
    private4Seat: VerifiedValue<boolean>;
    private7Seat: VerifiedValue<boolean>;
    parcel: VerifiedValue<boolean>;
  };
  prices: Array<{
    service: "SHARED" | "PRIVATE_4" | "PRIVATE_7" | "PARCEL";
    amount: VerifiedValue<number>;
    unit: "PER_PERSON" | "PER_TRIP" | "STARTING_FROM";
  }>;
  distanceKm: VerifiedValue<number>;
  durationMinutes: VerifiedValue<{ min: number; max: number }>;
  pickupAreaIds: VerifiedValue<string[]>;
  dropoffAreaIds: VerifiedValue<string[]>;
};

type SeoAsset = {
  id: `MP-${string}` | `SC-${string}` | `CP-${string}`;
  slug: string;
  routeId?: string;
  type: "MONEY" | "SUPPORTING" | "COMPARISON";
  clusterId: "A" | "B" | "C";
  status: SeoStatus;
  indexable: boolean;
  intent: string;
  primaryQuery: string;
  uniqueValue: string;
  title: string;
  description: string;
  h1: string;
  modules: ContentModule[];
  faqIds: string[];
  relatedAssetIds: string[];
  createdAt: string;
  updatedAt: string;
};
```

Validation rules should fail the build or SEO check when:

- a `PUBLISHED` asset is not explicitly `indexable`;
- a published money page lacks a verified route-availability record;
- a visible price lacks current evidence and a unit;
- a slug/canonical collides or violates URL rules;
- a related asset is missing, outside the allowed cluster without explicit approval, or not publishable;
- `lastModified` or schema dates cannot be traced to the asset;
- a new asset has no declared unique value.

## F. Risks Before Scale

1. A route-data expansion currently creates pages faster than Strategy can review them.
2. Generic route copy can multiply into thin or doorway-like pages.
3. Public fare formulas can surface invented values and become booking/business commitments.
4. No per-field evidence trail exists for operational facts or claims.
5. Existing legacy corridors can dilute the three approved clusters and complicate internal linking.
6. Global update dates can imply that unchanged pages were refreshed.
7. Supporting content and money pages do not form a deliberate two-way cluster graph.
8. Search Console/index coverage and conversion baselines are not available in the repository, so impact cannot yet be measured.
9. The working tree already contains extensive pre-existing uncommitted changes; future SEO batches must isolate their commits carefully.

## G. Files Needed in the Next Approved Sprint

Proposed new files:

- `data/seo/types.ts` — status, evidence, route, location, and asset types.
- `data/seo/locations.ts` — normalized location entities.
- `data/seo/route-records.ts` — operational route facts with evidence.
- `data/seo/assets.ts` — explicit SEO asset registry and internal-link graph.
- `lib/seo/validate-assets.ts` — publication/data quality validation.
- `components/seo/MoneyPage.tsx` — approved Money Page renderer.

Proposed edits, only after approval:

- `app/[slug]/page.tsx` — resolve an explicitly approved asset instead of every route record.
- `app/blog/[slug]/page.tsx` — resolve approved supporting/comparison assets.
- `app/sitemap.ts` — emit only explicitly `PUBLISHED` and indexable assets.
- `scripts/seo-check.mjs` — add status, evidence, uniqueness, and cluster-link assertions.
- `lib/pricing.ts` and `components/BookingExperience.tsx` — stop exposing fallback fare calculations when verified price data is absent.
- `data/routes.ts`, `data/blog-posts.ts`, and `data/guide-posts.ts` — migrate gradually; do not delete or redirect current URLs without a Strategy decision.

## H. Status Record

The project status single source of truth is `SEO_STATUS.md`. RES-001 is recorded there as `REVIEW`.
