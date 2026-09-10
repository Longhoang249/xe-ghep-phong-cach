# HANDOFF REPORT — TASK 3A / 3A.1: SÂN BAY CÁT BI ENDPOINT MONEY PAGE

**Target Route**: `/xe-hai-duong-cat-bi` (Asset `MP-004`)  
**Parent Pillar**: `/xe-ghep-hai-duong-hai-phong`  
**Deployment Status**: **RELEASED & LIVE IN PRODUCTION**  
**Production URL**: https://xeghepphongcach.com/xe-hai-duong-cat-bi  

---

## 1. Executive Summary & Verification Matrix

Task 3A & 3A.1 transforms the canonical endpoint page `/xe-hai-duong-cat-bi` (`MP-004`) into the first production Endpoint Money Page using the locked Pillar Gold Standard governance and rigorous factual claim scrubbing.

| Verification Dimension | Governed Requirement | Live Verified Reality | Status |
| :--- | :--- | :--- | :---: |
| **Canonical URL** | Strictly `/xe-hai-duong-cat-bi` | `https://xeghepphongcach.com/xe-hai-duong-cat-bi` | **PASS** |
| **Synonym URLs** | Zero new URLs, no synonym routes | Asset `MP-004` upgraded in place, sitemap strictly at 39 | **PASS** |
| **Xe ghép Fare** | Exactly `300.000đ/người` | `300.000đ/người` displayed in Hero, Price Panel, and Schema | **PASS** |
| **Bao xe Fare** | Exactly `550.000đ/chuyến` | `550.000đ/chuyến` displayed (single charter fare) | **PASS** |
| **Charter Split** | No 4-chỗ / 7-chỗ classification | Single charter row "Bao xe theo chuyến" | **PASS** |
| **Legacy Fares** | Zero legacy fares (600k/750k) | Completely scrubbed from code, content, and tests | **PASS** |
| **Toll Excluded** | `tollIncluded: false` | Explicitly notes chưa gồm vé cầu đường cao tốc | **PASS** |
| **Airport Sảnh Fees** | Zero unsupported airport fees | Scrubbed all "vé sảnh", "phí sảnh", "vé vào cổng sảnh" | **PASS** |
| **Airport Operating Promises** | Zero flight-delay guarantee / buffer / sảnh SLAs | Neutralized to customer-guidance pattern | **PASS** |
| **Reverse Price Symmetry** | NOT VERIFIED (first-party evidence) | Removed claims of identical price in both directions | **PASS** |
| **Booking Policy Wording** | Exact wording locked | "Đặt trước không mất phí." & "Thanh toán sau chuyến." | **PASS** |
| **Parent Pillar Link** | Support & breadcrumb link to parent | Links directly to `/xe-ghep-hai-duong-hai-phong` | **PASS** |
| **Hotline & Zalo** | Hotline `0987 663 883` | `tel:+84987663883` & `https://zalo.me/0987663883` verified | **PASS** |
| **Booking CTA** | Pre-fills origin & destination | `/?from=Hải Dương&to=Cát Bi#dat-xe` | **PASS** |
| **Schema Integrity** | Service + BreadcrumbList, no FAQPage | Valid JSON-LD graph verified on live DOM | **PASS** |
| **Responsive QA** | No 390px overflow, touch target >= 40px | 0px overflow, CTA touch target = 354x50px | **PASS** |

---

## 2. Pricing & Operational Precedence Audit (Task 3A.1 Factual Hotfix)

According to `owner_price_sheet_2026_09_09` and the locked Precedence Hierarchy:
1. **Xe ghép**: `300.000đ/người` (Theo người, trả tại khu vực Sân bay Cát Bi).
2. **Bao xe**: `550.000đ/chuyến` (Đi riêng theo chuyến, chưa bao gồm vé cầu đường cao tốc).
3. **Airport Fee Status**: `REMOVED`. All references to "vé sảnh sân bay", "phí sảnh sân bay", "vé vào cổng sảnh" are scrubbed. The only verified rule: Bao xe 550.000đ/chuyến (chưa bao gồm vé cầu đường cao tốc).
4. **Airport Operating Promises**: `NEUTRALIZED (0 remaining)`. All unverified operational promises ("trả đúng sảnh ga đi T1 để kịp chuyến", "đón tại sảnh ga đến T1 sau khi máy bay hạ cánh", "hỗ trợ hành lý", "xác nhận xe và tài xế trước giờ đón", "xe và thời gian được sắp xếp theo khung giờ bay") replaced with customer guidance:
   `"Quý khách cung cấp điểm đón/trả tại Sân bay Cát Bi, ngày đi và giờ bay để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp."`
5. **Exact Booking Policy Wording**: Locked to `"Đặt trước không mất phí."` and `"Thanh toán sau chuyến."` (Never reinterpreted as a deposit policy).
6. **Reverse Price Symmetry**: `NOT VERIFIED`. Biểu giá nguồn ngày 09/09 chỉ niêm yết mức giá chiều đi. Dù tuyến hoạt động hai chiều, đã loại bỏ tuyên bố "áp dụng đồng bộ cho cả hai chiều".
7. **Gửi hàng**: `Liên hệ` (Theo thỏa thuận chuyến).

---

## 3. Evidence Artifacts

1. **SERP Research Dataset**:
   - `seo/research/xe-hai-duong-cat-bi.json`
   - `seo/research/xe-hai-duong-cat-bi.md`
2. **Fact Ledger**:
   - `seo/facts/xe-hai-duong-cat-bi.md` (11/11 verified claims, 0 unknown claims published, 8 forbidden claim classes codified)
3. **Automated Unit Tests**:
   - `tests/task-3a-cat-bi.test.mjs` (5/5 dedicated test cases PASS)
   - `node --test tests/*.test.mjs` (**97 / 97 PASS**)
4. **Static SEO Audit**:
   - `npm run seo:audit` (**100 / 100 points**, 0 critical, 0 warnings)
5. **TypeScript Compilation**:
   - `npm run typecheck` (**PASS - exit code 0**)
6. **Live Chrome CDP QA Engine**:
   - `scripts/qa-live-route.mjs` executed against `https://xeghepphongcach.com/xe-hai-duong-cat-bi` (PASS)
   - Desktop Screenshot: `seo/screenshots/live-xe-hai-duong-cat-bi-desktop.png`
   - Mobile Screenshot: `seo/screenshots/live-xe-hai-duong-cat-bi-mobile.png`

---

## 4. Current Lifecycle State

- **Task 1 (Architecture & Governance)**: **CLOSED**
- **Task 2A (Hải Phòng Pillar)**: **RELEASED**
- **Task 2B (Quảng Ninh Pillar)**: **RELEASED**
- **Task 2C / 2C.1 / 2C.2 (Pillar Release Gate & Governance)**: **CLOSED**
- **Task 3A / 3A.1 (Sân bay Cát Bi Endpoint Money Page)**: **RELEASED**

> [!IMPORTANT]
> **FINAL STATUS: TASK 3A = RELEASED**  
> Antigravity has stopped as instructed by the user brief. **Task 3B (Hạ Long) has NOT been started.** Awaiting user review and explicit approval to proceed.

