# HANDOFF REPORT — PILLAR RELEASE GATE (TASK 2C)

**Project**: Xe Ghép Phong Cách — https://xeghepphongcach.com  
**Date**: September 9, 2026  
**Status**: **PILLAR PHASE = RELEASED**  
**Release Commit**: `9df06eb`  
**Production Domain**: `https://xeghepphongcach.com`  
**Vercel Production Deployment**: `https://xe-ghep-phong-cach-phpnc4rmv-longhoang249s-projects.vercel.app`  
**Vercel Inspect**: `https://vercel.com/longhoang249s-projects/xe-ghep-phong-cach/C9w5hvzo6Va7HjKBn6ybtYcoxumY`  

---

## 1. Executive Summary

Task 2C officially marks the completion and release of both foundational Pillar Money Pages for the Xe Ghép Phong Cách organic search cluster:
1. `/xe-ghep-hai-duong-hai-phong` (Gold Standard Template)
2. `/xe-ghep-hai-duong-quang-ninh` (High-Volume Secondary Pillar)

Both pages have successfully passed every engineering, factual, architectural, administrative, and real browser verification gate directly on the live production environment (`https://xeghepphongcach.com`) via Google Chrome Blink remote debugging (CDP).

Zero synthetic HTML was used in the final qualification tests; every DOM inspection, viewport measurement, network check, schema parse, and screenshot was executed against the authentic production Next.js application bundle.

---

## 2. Pillar Route Summary & Deliverables

| Attribute | Hải Dương ⇄ Hải Phòng | Hải Dương ⇄ Quảng Ninh |
| :--- | :--- | :--- |
| **Live Production URL** | `https://xeghepphongcach.com/xe-ghep-hai-duong-hai-phong` | `https://xeghepphongcach.com/xe-ghep-hai-duong-quang-ninh` |
| **Canonical URL** | `https://xeghepphongcach.com/xe-ghep-hai-duong-hai-phong` | `https://xeghepphongcach.com/xe-ghep-hai-duong-quang-ninh` |
| **HTTP Status Code** | 200 OK | 200 OK |
| **Primary Query** | `xe ghép Hải Dương Hải Phòng` | `xe ghép Hải Dương Quảng Ninh` |
| **H1 Tag** | `Xe ghép Hải Dương - Hải Phòng` | `Xe ghép Hải Dương - Quảng Ninh` |
| **Starting Fare** | Từ 250.000đ/người | Từ 250.000đ/người |
| **Pricing Endpoints** | Exactly 11 endpoints | Exactly 16 endpoints |
| **Endpoint Fare Range** | Ghép: 250.000đ - 300.000đ<br>Bao xe: 500.000đ - 10.000đ/km | Ghép: 250.000đ - 700.000đ<br>Bao xe: 600.000đ - Liên hệ |
| **Toll Fee Policy** | `tollIncluded: false` (Chưa gồm vé cầu đường cao tốc) | `tollIncluded: false` (Chưa gồm vé cầu đường cao tốc) |
| **Parcel Delivery Policy**| Nhận gửi theo chuyến từ 150.000đ/kiện | Nhận gửi theo chuyến từ 150.000đ/kiện |
| **Canonical Contact** | Hotline: `0987 663 883` \| Zalo: `0987 663 883` | Hotline: `0987 663 883` \| Zalo: `0987 663 883` |
| **Booking CTA Link** | `/?from=Hải Dương&to=Hải Phòng#dat-xe` | `/?from=Hải Dương&to=Quảng Ninh#dat-xe` |
| **Schema Types** | `Service`, `BreadcrumbList` (FAQPage REMOVED) | `Service`, `BreadcrumbList` (FAQPage REMOVED) |
| **Administrative Boundary**| Neutral 2026 terminology (Khu vực...) | Neutral 2026 terminology (Khu vực...) |
| **Factual Integrity** | 0 unverified claims (CLM-01 to CLM-10 PASS) | 0 unverified claims (CLM-01 to CLM-10 PASS) |

---

## 3. Price Source Precedence Policy Lock

The permanent precedence rule is locked in `seo/PRICE_SOURCE_PRECEDENCE.md` and enforced by automated tests in `tests/price-source-precedence.test.mjs`:

```
TIER 1: LATEST VERIFIED ENDPOINT-SPECIFIC SOURCE (owner_price_sheet_2026_09_09)
         ⬇ (overrides)
TIER 2: OLDER CORRIDOR-LEVEL VERIFIED SOURCE (owner_corridor_2026_03_14)
         ⬇ (overrides)
TIER 3: LEGACY IMPLEMENTATION DATA (data/routes.ts base fares)
         ⬇ (overrides)
TIER 4: UNKNOWN / DATA_REQUIRED (strict contact fallback)
```

### Critical Policy Decisions Enforced:
1. **Quảng Ninh Commercial Cards (UI Cleanliness)**:
   - Because `owner_price_sheet_2026_09_09` defines specific bao xe rates per endpoint (600k Uông Bí, 1.000k Hạ Long, 1.200k Cẩm Phả, 1.500k Vân Đồn) rather than flat 4-seat/7-seat rates, public summary cards do NOT display legacy 900k/1.1m rates.
   - Instead, the UI displays `"Bao xe theo chuyến"`: `"Giá theo điểm đến"` and points directly to the 16-endpoint detailed table.
2. **Toll Fee Transparency**:
   - Every private car record is explicitly marked `tollIncluded: false`.
   - Clear footnote: `* Giá bao xe chưa bao gồm vé cầu đường cao tốc (nếu quý khách chọn đi cao tốc)`.
3. **Parcel Rate Range**:
   - Fixed promises (e.g. 2-3h delivery SLA or flat 150k for all sizes) are eliminated.
   - Qualified statement: `Từ 150.000đ/kiện tùy kích thước, khối lượng và điểm giao nhận thực tế`.

---

## 4. Factual Audit & Provenance Separation

In previous iterations, factual claims had two issues:
1. Conflating **Provenance** (Evidence Source: *why trusted*) with **Implementation Storage** (*where stored in codebase*).
2. Introducing operational promises beyond verified owner records.

### Resolved in Release Gate:
- **Evidence Source vs Storage**:
  - `Evidence Source`: `owner_price_sheet_2026_09_09` / `owner_corridor_2026_03_14` / `owner_interview_2026_09_09`.
  - `Storage Path`: `data/seo/pricing-engine.ts`, `data/seo/hd-hp-gold-content.ts`, `data/seo/hd-qn-gold-content.ts`.
- **Scrubbed Operational Claims**:
  - "0đ cọc" ➔ "Đặt trước không mất phí - thanh toán sau chuyến".
  - "Giao nhận 2-3h hỏa tốc" ➔ "Gửi hàng theo chuyến xe chạy hàng ngày".
  - "100% không khói thuốc" ➔ "Xe vệ sinh sạch sẽ, ưu tiên không gian thông thoáng".
  - "Đúng số ghế quy định" ➔ "Bố trí ghế ngồi hợp lý theo thỏa thuận".
  - "Tài xế bốc xếp hành lý tận nơi" ➔ "Hỗ trợ sắp xếp hành lý gọn gàng vào cốp".
  - Outdated administrative designations (`thị xã Quảng Yên`, `thành phố Uông Bí`, `huyện Vân Đồn`) ➔ Neutral geographic labels (`Khu vực Quảng Yên`, `Khu vực Uông Bí`, `Khu vực Vân Đồn`).

---

## 5. Live Production Browser QA Verification

Testing was conducted using real Google Chrome (Blink engine) via Chrome DevTools Protocol (`scripts/qa-live-route.mjs`) hitting `https://xeghepphongcach.com` directly.

### Verification Results Summary:

| Check | Hải Dương ⇄ Hải Phòng | Hải Dương ⇄ Quảng Ninh | Status |
| :--- | :--- | :--- | :--- |
| **HTTP Status** | 200 OK | 200 OK | **PASS** |
| **Canonical Tag** | `https://xeghepphongcach.com/xe-ghep-hai-duong-hai-phong` | `https://xeghepphongcach.com/xe-ghep-hai-duong-quang-ninh` | **PASS** |
| **Meta Robots** | `index, follow` | `index, follow` | **PASS** |
| **H1 Heading** | `Xe ghép Hải Dương - Hải Phòng` | `Xe ghép Hải Dương - Quảng Ninh` | **PASS** |
| **Hero Price** | `Từ 250.000đ/người` | `Từ 250.000đ/người` | **PASS** |
| **Table Rows** | Exactly 11 rows in `pricingTable` | Exactly 16 rows in `pricingTable` | **PASS** |
| **Sample Endpoint Verification** | Trung tâm (250k/500k)<br>Cát Bi (300k/550k)<br>Tiên Lãng (300k/10k/km) | Đông Triều (250k/10k/km)<br>Uông Bí (300k/600k)<br>Hạ Long (400k/1.000k)<br>Cẩm Phả (450k/1.2m-1.3m)<br>Vân Đồn (500k/1.5m)<br>Móng Cái (700k/Liên hệ) | **PASS** |
| **Phone CTA** | `tel:+84987663883` | `tel:+84987663883` | **PASS** |
| **Zalo CTA** | `https://zalo.me/0987663883` | `https://zalo.me/0987663883` | **PASS** |
| **Booking CTA** | `to=Hải Phòng#dat-xe` | `to=Quảng Ninh#dat-xe` | **PASS** |
| **Schema: Service** | Present | Present | **PASS** |
| **Schema: BreadcrumbList** | Present | Present | **PASS** |
| **Schema: FAQPage** | REMOVED (Deprecated) | REMOVED (Deprecated) | **PASS** |
| **Desktop Overflow** | `scrollWidth=1425 <= clientWidth=1425` | `scrollWidth=1425 <= clientWidth=1425` | **PASS** |
| **Mobile Overflow (390px)** | `scrollWidth=390 <= clientWidth=390` | `scrollWidth=390 <= clientWidth=390` | **PASS** |
| **Mobile Table Scroll** | `canScroll=true`, `scrollLeft=120` | `canScroll=true`, `scrollLeft=120` | **PASS** |
| **Touch Target Size** | `354x51px` (>= 40px standard) | `354x51px` (>= 40px standard) | **PASS** |

### Live Screenshots Saved:
- `seo/screenshots/live-xe-ghep-hai-duong-hai-phong-desktop.png`
- `seo/screenshots/live-xe-ghep-hai-duong-hai-phong-mobile.png`
- `seo/screenshots/live-xe-ghep-hai-duong-quang-ninh-desktop.png`
- `seo/screenshots/live-xe-ghep-hai-duong-quang-ninh-mobile.png`

---

## 6. Search Engine Release Check

- **Canonical Check**: PASS. Both pages self-canonicalize with absolute HTTPS URLs.
- **Robots.txt Check**: PASS. `Allow: /`, `Disallow: /admin`, `Disallow: /api`, `Sitemap: https://xeghepphongcach.com/sitemap.xml`.
- **Sitemap XML Check**: PASS. Both routes are indexed in `https://xeghepphongcach.com/sitemap.xml`.
- **FAQPage Schema Elimination**: PASS. Zero deprecated `FAQPage` schemas found in application DOM.
- **Google Search Console**: `GSC = NOT RUN` (No API service account or OAuth credentials configured in local environment; manual submission via Search Console URL Inspection is recommended).

---

## 7. Automated Test Suite Metrics

- **Unit Test Suite**: `node --test tests/*.test.mjs`  
  - Total Tests: 92 passed, 0 failed (15.5s)
- **TypeScript Typecheck**: `npm run typecheck` (`tsc --noEmit`)  
  - Result: Exit code 0 (0 errors)
- **SEO Audit Linting**: `npm run seo:audit` (`scripts/seo-audit.mjs`)  
  - Result: 100 / 100 points, 0 critical issues, 0 warnings

---

## 8. Transition Recommendation: Task 3 (Endpoint Expansion)

With both Corridor Pillars locked, tested, and released to production, the architecture is ready for **Task 3: High-Intent Endpoint Money Pages**.

### Recommended Task 3 Phasing:
1. **Task 3A — Sân bay Cát Bi (`/xe-hai-duong-san-bay-cat-bi`)**:
   - Hai Phong cluster high-intent money query.
   - Price verified: 300.000đ/ghế ghép, 550.000đ/bao xe.
   - Flight-delay waiting policy & terminal drop-off focus.
2. **Task 3B — Hạ Long / Bãi Cháy (`/xe-ghep-hai-duong-ha-long`)**:
   - High-volume tourism & business query.
   - Price verified: 400.000đ/ghế ghép, 1.000.000đ/bao xe.
   - Tuan Chau & Sun World port drop-offs.
3. **Task 3C — Vân Đồn / Cảng Ao Tiên (`/xe-ghep-hai-duong-van-don`)**:
   - Island transit query (Co To, Quan Lan ferries).
   - Price verified: 500.000đ/ghế ghép, 1.500.000đ/bao xe.
4. **Task 3D — Cẩm Phả / Cửa Ông (`/xe-ghep-hai-duong-cam-pha`)**:
   - Spiritual tourism & commercial industrial hub.
   - Price verified: 450.000đ/ghế ghép, 1.200.000 - 1.300.000đ/bao xe.
5. **Task 3E — Uông Bí / Yên Tử (`/xe-ghep-hai-duong-uong-bi`)**:
   - Nearest Quang Ninh endpoint, high spiritual pilgrimage demand.
   - Price verified: 300.000đ/ghế ghép, 600.000đ/bao xe.

> [!IMPORTANT]
> **Scope Guard**: Zero endpoint pages have been created during Task 2C. Awaiting explicit user approval before initiating Task 3.
