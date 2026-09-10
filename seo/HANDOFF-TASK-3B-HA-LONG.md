# HANDOFF: TASK 3B — HẠ LONG ENDPOINT MONEY PAGE UPGRADE

**Target Canonical URL**: `https://xeghepphongcach.com/xe-ghep-hai-duong-ha-long`  
**Asset ID**: `MP-019`  
**Parent Pillar**: `https://xeghepphongcach.com/xe-ghep-hai-duong-quang-ninh`  
**Production Commit**: `28f323f` (Deployed & aliased to `xeghepphongcach.com`)  
**Status**: **TASK 3B = RELEASED TO PRODUCTION**  
**Next Task Constraint**: **STOP. DO NOT START TASK 3C (VÂN ĐỒN).**

---

## 1. Executive Summary

Task 3B successfully upgraded the existing canonical route `/xe-ghep-hai-duong-ha-long` (`MP-019`) into a focused, high-intent endpoint money page while maintaining strict URL governance and verified price precedence.

### Strict Governance Checklist
- [x] **Zero Synonym URLs**: No new URLs created (`/xe-hai-duong-ha-long`, `/xe-hai-duong-di-ha-long`, `/xe-ghep-hai-duong-bai-chay`, `/xe-hai-duong-bai-chay` were strictly rejected).
- [x] **URL Inventory Invariant**: Total site URL count remains strictly **39**.
- [x] **Bãi Cháy Placement**: Bãi Cháy is integrated as a supporting sub-intent comparison block within the canonical Hạ Long endpoint page, not a separate URL.
- [x] **Parent Pillar Link**: Direct breadcrumb and navigation card point to parent pillar `/xe-ghep-hai-duong-quang-ninh`.
- [x] **Precedence Source**: Strictly governed by `owner_price_sheet_2026_09_09` and Phase 1 facts.

---

## 2. Commercial Pricing & Fare Structure

All fares reflect the owner's latest verified price sheet (`2026-09-09`). Legacy corridor rates (250k) and legacy 4-seat / 7-seat splits (900k / 1.1m) were completely removed.

| Dịch vụ | Khu vực Hạ Long (Hòn Gai / TT) | Khu vực Bãi Cháy (Ven biển / Du lịch) | Ghi chú vận hành |
| :--- | :--- | :--- | :--- |
| **Xe ghép** | **400.000đ/người** | **350.000đ/người** | Đón trả tận nơi hai chiều; Bãi Cháy có biểu giá độc lập theo cự ly thực tế |
| **Bao xe theo chuyến** | **1.000.000đ/chuyến** | **900.000đ/chuyến** | Không phân loại 4c/7c; **chưa bao gồm vé cầu đường cao tốc (`tollIncluded: false`)** |
| **Gửi hàng** | **150.000 – 200.000đ trở lên** | **150.000 – 200.000đ trở lên** | Giá thay đổi tùy khối lượng, kích thước bưu phẩm và điểm giao nhận |

### Exact Commercial Copy Standards
- **Booking Terms**: `"Đặt trước không mất phí."` và `"Thanh toán sau chuyến."` (Khách thanh toán trực tiếp cho lái xe sau khi hoàn thành chuyến đi an toàn).
- **Toll Terms**: `"Bao xe riêng chưa bao gồm vé cầu đường cao tốc (tollIncluded: false)."`
- **Call-to-Action Pre-fill**: Booking CTA links to `/?from=H%E1%BA%A3i%20D%C6%B0%C6%A1ng&to=H%E1%BA%A1%20Long#dat-xe`.

---

## 3. Fact Governance & Copy Neutralization

All 12 material claims identified during SERP and market research were audited in `seo/facts/xe-ghep-hai-duong-ha-long.md`. Unverified claims were scrubbed or converted to customer guidance:

1. **Cruise & Ferry Connection**: No guarantees to arrive "kịp giờ xuất bến" or "kịp tour du thuyền". Neutralized to: *"Quý khách nên cung cấp giờ xuất bến dự kiến để nhà xe tư vấn giờ xuất phát phù hợp."*
2. **Hotel & Attraction Pickups**: No promises to "đón tận sảnh khách sạn" or "đưa đón cổng Sun World". Neutralized to standard destination orientation.
3. **24/7 Operation**: Strictly banned (`/24\/7/i`, `/24\/24/i`). Neutralized to pre-booked scheduling.
4. **Deposit Slogans**: Banned all `"0đ cọc"`, `"0 đồng cọc"`, `"không mất cọc"`. Standardized to: `"Đặt trước không mất phí"`.
5. **Reverse Direction Symmetry**: Confirmed Phong Cách operates two-way service (Hải Dương ⇄ Hạ Long), but fare symmetry is marked `NOT VERIFIED` (no claim that reverse fares are always identical).

---

## 4. Verification Matrix

| Verification Gate | Command | Result | Details |
| :--- | :--- | :--- | :--- |
| **Unit Test Suite** | `node --test tests/*.test.mjs` | **PASS (102/102)** | All regression, sprint, factual, and Task 3B tests passed |
| **Dedicated Task 3B Test** | `node --test tests/task-3b-ha-long.test.mjs` | **PASS (5/5)** | Canonical URL, 400k/1m & 350k/900k pricing, no 4c/7c split, parent pillar link, copy neutralization |
| **SEO Rule Audit** | `npm run seo:audit` | **PASS (100/100)** | 0 critical, 0 warnings across all 39 URLs |
| **TypeScript Engine** | `npm run typecheck` | **PASS (0 errors)** | `tsc --noEmit` cleanly passed |
| **Production Build** | `npm run build` | **PASS (51/51)** | All static SSG routes and dynamic endpoints rendered |
| **Vercel Production Deployment** | `npx vercel --prod --yes` | **LIVE (28f323f)** | Aliased to `https://xeghepphongcach.com` |

---

## 5. Live Chrome DevTools Protocol (CDP) Browser QA

All tests executed against the authentic production environment (`https://xeghepphongcach.com`) with zero synthetic HTML mocking.

### 5.1 Target Endpoint: `/xe-ghep-hai-duong-ha-long`
- **HTTP Status**: `200 OK`
- **Canonical Link**: `https://xeghepphongcach.com/xe-ghep-hai-duong-ha-long` (PASS)
- **Robots Meta**: `index, follow` (PASS)
- **H1 Header**: `Xe Ghép Hải Dương - Hạ Long` (PASS)
- **Verified Fares in DOM**:
  - Xe ghép: `400.000đ/người` (PASS)
  - Bao xe: `1.000.000đ/chuyến` (PASS)
  - Gửi hàng: `150.000 – 200.000đ trở lên` (PASS)
- **Bãi Cháy Comparison Box**:
  - Xe ghép Bãi Cháy: `350.000đ/người` (PASS)
  - Bao xe Bãi Cháy: `900.000đ/chuyến` (PASS)
  - `tollIncluded: false` explicitly noted (PASS)
- **Exact Booking Copy**: `"Đặt trước không mất phí"` & `"Thanh toán sau chuyến"` verified in live DOM.
- **Booking Destination Prefill**: `/?from=H%E1%BA%A3i%20D%C6%B0%C6%A1ng&to=H%E1%BA%A1%20Long#dat-xe` (PASS)
- **Schema JSON-LD**:
  - `Service`: Valid (PASS)
  - `BreadcrumbList`: Root › Xe ghép Hải Dương - Quảng Ninh › Hạ Long (PASS)
  - `FAQPage`: Fully eliminated (PASS)
- **Desktop Viewport (1440x900)**: `scrollWidth=1425 <= clientWidth=1425` (PASS - Zero overflow)
- **Mobile Viewport (390x844)**: `scrollWidth=390 <= clientWidth=390` (PASS - Zero overflow)
- **Mobile CTA Touch Target**: `354x50px` (PASS >= 40px standard)

### 5.2 Regression Smoke Checks
- **Quảng Ninh Parent Pillar (`/xe-ghep-hai-duong-quang-ninh`)**:
  - Status 200, H1 PASS, 16/16 endpoints verified in DOM table, mobile table horizontal scroll verified (`scrollLeft=120`).
- **Cát Bi Endpoint (`/xe-hai-duong-cat-bi`)**:
  - Status 200, H1 PASS, 300k ghép / 550k bao xe verified, Task 3A.1 copy neutralization verified.

---

## 6. Visual Evidence (Live Production Screenshots)

### Desktop Viewport (1440x900)
![Hạ Long Desktop](/Users/hoangvan/.gemini/antigravity/brain/f55e09b5-4b83-4505-86ca-8f87c4fb6040/screenshots/live-xe-ghep-hai-duong-ha-long-desktop.png)

### Mobile Viewport (390x844)
![Hạ Long Mobile](/Users/hoangvan/.gemini/antigravity/brain/f55e09b5-4b83-4505-86ca-8f87c4fb6040/screenshots/live-xe-ghep-hai-duong-ha-long-mobile.png)

---

## 7. Next Task Directive

```text
==================================================
TASK 3B = RELEASED TO PRODUCTION
STATUS: COMPLETE & STABLE
DO NOT PROCEED TO TASK 3C (VÂN ĐỒN).
AWAITING USER FEEDBACK / REVIEW.
==================================================
```
