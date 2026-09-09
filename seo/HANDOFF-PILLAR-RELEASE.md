# HANDOFF REPORT — PILLAR RELEASE GATE (TASK 2C.1 CLOSEOUT)

**Project**: Xe Ghép Phong Cách — https://xeghepphongcach.com  
**Date**: September 9, 2026  
**Status**: **PILLAR PHASE = CLOSED (READY FOR TASK 3A)**  

---

## 1. Release Commit & Deployment Metadata

To prevent confusion and ensure rollback safety, release commits are strictly disambiguated:

| Metadata Field | Value / Identifier | Notes |
| :--- | :--- | :--- |
| **PRODUCTION_CODE_COMMIT** | `9df06ebc3d1461049d13924f915c3014adb169c5` (`9df06eb`) | The exact git commit containing application code running live on `xeghepphongcach.com` |
| **PRODUCTION_DEPLOYMENT** | `https://xe-ghep-phong-cach-phpnc4rmv-longhoang249s-projects.vercel.app` | Vercel production deployment aliased to `https://xeghepphongcach.com` |
| **PRODUCTION_INSPECT** | `https://vercel.com/longhoang249s-projects/xe-ghep-phong-cach/C9w5hvzo6Va7HjKBn6ybtYcoxumY` | Vercel build & inspect log URI |
| **DOCUMENTATION_COMMIT** | `17cf96ccb44a3f2c19802943e5e57c1b38570348` (`17cf96c`) | Added initial Pillar Release Gate handoff report |
| **SCREENSHOT_COMMIT** | `3c0ac34fbb91a9f7516adfa62f1b8e123f5e509d` (`3c0ac34`) | Refreshed live production Chrome CDP screenshots |

---

## 2. Pillar Route Summary & Deliverables

| Attribute | Hải Dương ⇄ Hải Phòng (`MP-003`) | Hải Dương ⇄ Quảng Ninh (`MP-005`) |
| :--- | :--- | :--- |
| **Live Production URL** | `https://xeghepphongcach.com/xe-ghep-hai-duong-hai-phong` | `https://xeghepphongcach.com/xe-ghep-hai-duong-quang-ninh` |
| **Canonical URL** | `https://xeghepphongcach.com/xe-ghep-hai-duong-hai-phong` | `https://xeghepphongcach.com/xe-ghep-hai-duong-quang-ninh` |
| **HTTP Status Code** | 200 OK | 200 OK |
| **Primary Query** | `xe ghép Hải Dương Hải Phòng` | `xe ghép Hải Dương Quảng Ninh` |
| **H1 Tag** | `Xe ghép Hải Dương - Hải Phòng` | `Xe ghép Hải Dương - Quảng Ninh` |
| **Starting Fare** | Từ 250.000đ/người | Từ 250.000đ/người |
| **Pricing Endpoints** | Exactly 11 endpoints | Exactly 16 endpoints |
| **HP Price Summary** | **Xe ghép**: `250.000đ – 400.000đ` tùy điểm đến (Đồ Sơn, Cát Hải đạt 350k–400k).<br>**Bao xe**: Giá theo điểm đến (cố định hoặc khoảng giá 500k–700k); riêng Tiên Lãng và Vĩnh Bảo áp dụng `10.000đ/km`. | — |
| **QN Price Summary** | — | **Xe ghép**: `250.000đ – 700.000đ` tùy điểm đến.<br>**Bao xe**: Giá theo điểm đến (600k–1.500k); riêng Đông Triều, Mạo Khê tính `10.000đ/km`; 8 điểm đến xa giữ `Liên hệ` (`UNKNOWN`). |
| **Toll Fee Policy** | `tollIncluded: false` (Chưa gồm vé cầu đường cao tốc) | `tollIncluded: false` (Chưa gồm vé cầu đường cao tốc) |
| **Parcel Delivery Policy**| Nhận gửi theo chuyến từ `150.000đ` (kế thừa Phase 1, tùy loại hàng, kích thước, nơi nhận) | Nhận gửi theo chuyến, khoảng `150.000 – 200.000đ trở lên`, tùy điểm đến và hàng hóa cụ thể (theo nguồn 09/09) |
| **Canonical Contact** | Hotline: `0987 663 883` \| Zalo: `0987 663 883` | Hotline: `0987 663 883` \| Zalo: `0987 663 883` |
| **Booking CTA Link** | `/?from=Hải Dương&to=Hải Phòng#dat-xe` | `/?from=Hải Dương&to=Quảng Ninh#dat-xe` |
| **Schema Types** | `Service`, `BreadcrumbList` (FAQPage REMOVED) | `Service`, `BreadcrumbList` (FAQPage REMOVED) |
| **Administrative Boundary**| Neutral 2026 terminology (`Khu vực...`) | Neutral 2026 terminology (`Khu vực...`) |
| **Fact Ledger Coverage** | **37 material claims audited** (100% accounted for, 0 unknown) | **45 material claims audited** (100% accounted for, 0 unknown) |

---

## 3. Verified Source IDs & Governance Audit

### Invalid / Synthetic Source IDs Removed
The synthetic provenance names `owner_corridor_2026_03_14` and `owner_interview_2026_09_09` have been **COMPLETELY AUDITED AND REMOVED**. They were AI-generated descriptive aliases that did not map to any underlying physical artifact on disk.

### Canonical Verified First-Party Source Records

| Source ID | Artifact Path on Disk | Source Owner | Verified Date | Facts Supported |
| :--- | :--- | :--- | :--- | :--- |
| **`owner_price_sheet_2026_09_09`** | `seo/pricing-source.md` (implemented in `data/seo/pricing-engine.ts`) | Chủ nhà xe Phong Cách | `2026-09-09` | - **11 điểm đến Hải Phòng**: Ghép 250k–400k (Đồ Sơn/Cát Hải 350k–400k); Bao xe 500k–700k; Tiên Lãng & Vĩnh Bảo 10k/km.<br>- **16 điểm đến Quảng Ninh**: Ghép 250k–700k; Bao xe 600k–1.500k; Đông Triều & Mạo Khê 10k/km; 8 điểm xa để `Liên hệ` (`UNKNOWN`).<br>- **Vé cao tốc bao xe**: `tollIncluded: false` cho mọi chuyến bao xe.<br>- **Cước gửi hàng Quảng Ninh**: Khoảng `150.000 – 200.000đ trở lên`, tùy điểm đến và hàng hóa cụ thể. |
| **`OWNER_VERIFICATION_RECORD_PHASE1.md`** | `OWNER_VERIFICATION_RECORD_PHASE1.md` | Chủ nhà xe Phong Cách | `2026-08-22` | - **Hành lang khởi điểm**: Xe ghép từ 250k; gửi hàng từ 150k (Hải Phòng).<br>- **Cam kết dịch vụ**: Đón trả tận nơi hai chiều; phục vụ xe gia đình 4–7 chỗ; đặt trước không mất phí, thanh toán sau chuyến đi.<br>- **Ranh giới cấm**: Cấm tự suy diễn giờ chạy cố định, tần suất xe/ngày, lead time đón khách, chính sách bảo dưỡng hay SLA hỏa tốc 2-3h. |

> Implementation files such as `data/routes.ts` or `data/seo/pricing-engine.ts` are technical storage files and are **NOT** evidence sources.

---

## 4. Complete Fact Ledger Reference

Every factual statement published across both pillar pages has been mapped to its comprehensive ledger.

### Hải Phòng Fact Ledger (`seo/facts/xe-ghep-hai-duong-hai-phong-fact-ledger.md`)
- **HP material claims audited**: **37** (CLM-01 to CLM-37)
  - Verified first-party: 19
  - Verified external fact: 3 (CLM-16 cự ly, CLM-26 trục giao thông QL5/CT04, CLM-28 địa chỉ bệnh viện/KCN/sân bay)
  - Legacy geographic label / Search language: 1 (CLM-22 11 khu vực theo Nghị quyết 76/2025/UBTVQH15)
  - Estimate with source: 6 (CLM-13, CLM-17, CLM-21, CLM-27, CLM-36, CLM-37)
  - Removed unsupported claims: 8 (CLM-11 giờ chạy cố định, CLM-15 lead time 30-60p, CLM-18 tần suất liên tục, CLM-29 xe không hút thuốc, CLM-30 dung sai 10-15p, CLM-31 SLA hỏa tốc 2-3h, CLM-32 xe đời mới 2022-2025, CLM-33 100% không mùi say xe)
- **Unknown remaining**: **0**

### Quảng Ninh Fact Ledger (`seo/facts/xe-ghep-hai-duong-quang-ninh-fact-ledger.md`)
- **QN material claims audited**: **45** (CLM-01 to CLM-45)
  - Verified first-party: 28
  - Verified external fact: 7 (CLM-14 trục đường QL18/CT06, CLM-18 cự ly, CLM-28 địa lý, CLM-29 lộ trình, CLM-31 cầu Bạch Đằng, CLM-34 điểm đón, CLM-36 so sánh chi phí)
  - Estimate with source: 5 (CLM-15, CLM-19, CLM-27, CLM-33, CLM-37)
  - Customer guidance: 5 (CLM-17 liên hệ trước, CLM-30 tư vấn chọn xe, CLM-32 thông báo giờ tàu/bay, CLM-35 hành trình riêng, CLM-38 trao đổi hành lý trước)
  - Removed unsupported promises: 11 (CLM-08 sửa giá 800k, CLM-11 giờ chạy, CLM-26 suy diễn trọn gói BOT vé ghép, CLM-38 quy định 1 vali 1 túi, CLM-39 dừng nghỉ bất kỳ lúc nào, CLM-40 chu đáo mẹ và bé, CLM-41 chuyên gia công nhân, CLM-42 hỗ trợ bốc xếp hành lý, CLM-43 suy luận đảo ngược BOT, CLM-44 căn giờ chính xác, CLM-45 xuất phát ngay/tiết kiệm 45-60p)
- **Unknown remaining**: **0**

---

## 5. Live Production Browser QA Verification

Testing was executed on Google Chrome (Blink engine) via Chrome DevTools Protocol (`scripts/qa-live-route.mjs`) directly inspecting `https://xeghepphongcach.com` (ZERO synthetic HTML generation).

| Check Dimension | Hải Dương ⇄ Hải Phòng | Hải Dương ⇄ Quảng Ninh | Status |
| :--- | :--- | :--- | :--- |
| **HTTP Status Code** | 200 OK | 200 OK | **PASS** |
| **Canonical Header/Tag** | `https://xeghepphongcach.com/xe-ghep-hai-duong-hai-phong` | `https://xeghepphongcach.com/xe-ghep-hai-duong-quang-ninh` | **PASS** |
| **Meta Robots** | `index, follow` | `index, follow` | **PASS** |
| **H1 Heading Tag** | `Xe ghép Hải Dương - Hải Phòng` | `Xe ghép Hải Dương - Quảng Ninh` | **PASS** |
| **Starting Price Display** | `Từ 250.000đ/người` | `Từ 250.000đ/người` | **PASS** |
| **Pricing Table Rows** | Exactly 11 rows in `pricingTable` | Exactly 16 rows in `pricingTable` | **PASS** |
| **Endpoint Verification** | Trung tâm (250k/500k)<br>Cát Bi (300k/550k)<br>Tiên Lãng (300k/10k/km) | Đông Triều (250k/10k/km)<br>Uông Bí (300k/600k)<br>Hạ Long (400k/1.000k)<br>Cẩm Phả (450k/1.2m-1.3m)<br>Vân Đồn (500k/1.5m)<br>Móng Cái (700k/Liên hệ) | **PASS** |
| **Phone CTA** | `tel:+84987663883` (calls canonical hotline) | `tel:+84987663883` (calls canonical hotline) | **PASS** |
| **Zalo CTA** | `https://zalo.me/0987663883` | `https://zalo.me/0987663883` | **PASS** |
| **Booking CTA Link** | `to=Hải Phòng#dat-xe` | `to=Quảng Ninh#dat-xe` | **PASS** |
| **Schema: Service** | Present & Valid | Present & Valid | **PASS** |
| **Schema: BreadcrumbList** | Present & Valid | Present & Valid | **PASS** |
| **Schema: FAQPage** | REMOVED (Deprecated) | REMOVED (Deprecated) | **PASS** |
| **Desktop Layout (1440x900)** | Zero horizontal overflow (`scrollWidth <= clientWidth`) | Zero horizontal overflow (`scrollWidth <= clientWidth`) | **PASS** |
| **Mobile Layout (390x844)** | Zero page overflow (`scrollWidth = 390px`) | Zero page overflow (`scrollWidth = 390px`) | **PASS** |
| **Mobile Table Scrolling** | `canScroll=true`, `scrollLeft=120` | `canScroll=true`, `scrollLeft=120` | **PASS** |
| **Hero Touch Target** | `354x51px` (>= 40px standard) | `354x51px` (>= 40px standard) | **PASS** |

### Verified Live Screenshots
- `seo/screenshots/live-xe-ghep-hai-duong-hai-phong-desktop.png`
- `seo/screenshots/live-xe-ghep-hai-duong-hai-phong-mobile.png`
- `seo/screenshots/live-xe-ghep-hai-duong-quang-ninh-desktop.png`
- `seo/screenshots/live-xe-ghep-hai-duong-quang-ninh-mobile.png`

---

## 6. Task 3 URL Governance & Architecture Lock

To prevent cannibalization and keep the index strictly unified, the following rules are permanently locked for all endpoint pages:

1. **Mandatory Inventory Check**:
   - Before drafting any endpoint route, the agent must inspect:
     - `seo/url-inventory.json`
     - `seo/content-map.json`
2. **Upgrade Existing Canonical URLs (Zero Synonyms)**:
   - If a URL for the intent already exists in the inventory, **UPGRADE THAT EXISTING URL**.
   - For Sân bay Cát Bi: The existing canonical URL is **`/xe-hai-duong-cat-bi`** (Asset `MP-004`).
   - **NEVER create**:
     - `/xe-hai-duong-san-bay-cat-bi`
     - `/xe-ghep-hai-duong-cat-bi`
   - **One intent cluster = One canonical endpoint page**.
3. **Endpoint Inventory Mapping for Task 3**:
   - **Task 3A**: Sân bay Cát Bi ➔ Existing URL **`/xe-hai-duong-cat-bi`** (Asset `MP-004`).
   - **Task 3B**: Hạ Long / Bãi Cháy ➔ Existing URL **`/xe-ghep-hai-duong-ha-long`** (Asset `MP-019`).
   - **Task 3C**: Vân Đồn / Cảng Ao Tiên ➔ **`/xe-ghep-hai-duong-van-don`** (Planned in `content-map.json`).
   - **Task 3D**: Cẩm Phả / Cửa Ông ➔ **`/xe-ghep-hai-duong-cam-pha`** (Planned in `content-map.json`).
   - **Task 3E**: Uông Bí / Yên Tử ➔ **`/xe-ghep-hai-duong-uong-bi`** (Planned in `content-map.json`).

---

## 7. Task 3 Factual Invariant: Search Intent Does Not Prove An Operating Policy

> [!IMPORTANT]
> **PERMANENT INVARIANT**:  
> **SEARCH INTENT DOES NOT PROVE AN OPERATING POLICY.**

Just because users search for "xe ghép đón sảnh ga bay" or "xe đi kịp giờ tàu đảo", the agent **MUST NOT** invent unverified operational policies.

### Strictly Forbidden Inventions:
- Flight delay waiting policy / miễn phí chờ hoãn chuyến bay.
- Guaranteed airport arrival time / cam kết có mặt đúng giờ bay.
- Exact waiting allowance / dung sai thời gian chờ tài xế.
- Guaranteed ferry connection / cam kết kịp giờ tàu cao tốc ra đảo.
- Guaranteed pickup lead time / cam kết đón sau 15–30 phút.
- Fixed luggage limits / mỗi khách 1 vali + 1 túi.
- Driver waiting or baggage handling SLAs.

### Required Customer Guidance Pattern:
Unless an explicit first-party verified source document exists, use neutral customer guidance:
> *"Quý khách nên cung cấp mã chuyến bay hoặc giờ tàu khi gửi thông tin đặt xe để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp."*

---

## 8. Final Status & Lifecycle Transition

- **Task 1 (Audit & Clean Build)**: **CLOSED**
- **Task 2A (Hải Dương ⇄ Hải Phòng Gold Standard)**: **RELEASED**
- **Task 2B (Hải Dương ⇄ Quảng Ninh Secondary Pillar)**: **RELEASED**
- **Task 2C (Pillar Release Gate & Governance Patch)**: **CLOSED**

**PILLAR PHASE = CLOSED**

Next step upon user instruction: Initiate **Task 3A: Sân bay Cát Bi** upgrading existing canonical URL `/xe-hai-duong-cat-bi` (`MP-004`).
