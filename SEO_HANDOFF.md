# SEO HANDOFF & ARCHITECTURAL CONTINUITY RECORD

**Dự án**: Xe Ghép Phong Cách (`https://xeghepphongcach.com`)  
**Ngày lập**: 2026-09-03 (Asia/Ho_Chi_Minh)  
**Tác giả bàn giao**: Antigravity  
**Nhánh làm việc**: `codex/release-ops-003-sprint-003a`  
**HEAD Commit**: `e58c4f8` (`feat: implement per-asset sitemap freshness, polish mobile booking styles, and establish SEO handoff`)  
**Tình trạng**: `APPROVED` — Đã sẵn sàng deploy Production.

---

## 1. MỤC ĐÍCH TÀI LIỆU
Tài liệu này được thiết kế để bất kỳ AI hoặc kỹ sư nào khi tiếp quản (takeover) hoặc phối hợp làm việc song song (parallel workstream) có thể:
1. Nắm trọn vẹn hiện trạng dự án chỉ trong 3 phút mà không làm vỡ các quy tắc kiến trúc đã thiết lập.
2. Hiểu rõ các **bất biến kiến trúc (architectural invariants)** bắt buộc phải tuân thủ.
3. Biết chính xác những gì vừa được thay đổi và các bước kế tiếp cần làm.

---

## 2. CÁC QUY TẮC BẤT BIẾN BẮT BUỘC (CRITICAL INVARIANTS)

> [!CAUTION]
> **QUY TẮC 1: TUYỆT ĐỐI KHÔNG TỰ BỊA GIÁ (ZERO-HALLUCINATION PRICING)**  
> - Toàn bộ giá số hiển thị công khai trên web phải được truy vết nguồn gốc trong `data/seo/route-knowledge/owner-verification.mjs` với model `VERIFIED_FROM`.
> - Tuyệt đối không dùng công thức tính theo khoảng cách km trong `lib/pricing.ts` để gán giá cho các tuyến mới.
> - Các tuyến/điểm chưa có giá xác nhận từ chủ xe (Owner) BẮT BUỘC hiển thị trạng thái "Liên hệ".
> - Trong Schema `Offer`, TUYỆT ĐỐI KHÔNG xuất trường số `price` và `priceCurrency` cố định; bắt buộc dùng `Offer` mô tả với category "Giá bắt đầu" để tránh vi phạm chính sách hiển thị giá Merchant/Service của Google.

> [!IMPORTANT]
> **QUY TẮC 2: CƠ CHẾ QUẢN TRỊ XUẤT BẢN (ASSET LIFECYCLE)**  
> - Vòng đời một trang SEO: `REGISTERED` → `REVIEW` → `APPROVED` → `PUBLISHED`.
> - Khai báo dữ liệu trong `data/routes.ts` hay `data/guide-posts.ts` KHÔNG ĐỒNG NGHĨA với việc trang được xuất bản.
> - Chỉ những asset có trạng thái chính xác `status: "PUBLISHED"` trong `data/seo/asset-registry.mjs` mới được:
>   1. Sinh trang tĩnh trong `generateStaticParams()` (`app/[slug]/page.tsx` & `app/blog/[slug]/page.tsx`).
>   2. Xuất hiện trong `app/sitemap.ts`.
>   3. Cho phép bot index và hiển thị trong điều hướng nội bộ.

> [!WARNING]
> **QUY TẮC 3: CHỐNG XUNG ĐỘT TỪ KHÓA & CANNIBALIZATION (1 CORRIDOR = 1 URL)**  
> - Mỗi hành lang tuyến xe 2 chiều chỉ dùng DUY NHẤT 1 URL chuẩn (Ví dụ: `/xe-ghep-hai-duong-hai-phong`, `/xe-ghep-hai-duong-quang-ninh`).
> - Nhu cầu chiều ngược (ví dụ: "xe ghép Hải Phòng về Hải Dương", "Hạ Long về Hải Dương") phải được giải quyết bằng Section chiều về trên chính trang đó, KHÔNG TẠO URL CHIỀU NGƯỢC RIÊNG. Các URL chiều ngược cũ phải redirect 308 về trang 2 chiều chuẩn.
> - Không tạo trang hàng loạt (page factory) cho các điểm đến Quảng Ninh (Đông Triều, Uông Bí, Cẩm Phả, Vân Đồn, Móng Cái) khi chưa có xác nhận vận hành thực tế từ Owner.

> [!NOTE]
> **QUY TẮC 4: TIÊU CHUẨN KỸ THUẬT & ON-PAGE**  
> - Hotline chuẩn toàn hệ thống: `0987 663 883` (`tel:+84987663883`). Kiểm tra tự động nghiêm ngặt không cho phép sai số hotline.
> - Mỗi trang có chính xác 1 thẻ `<h1>`.
> - Dùng dấu gạch nối tự nhiên `-` trong title và h1, không dùng gạch ngang dài `–`.
> - Không gắn ảnh OG chung `/og.png` vào các bài cẩm nang chi tiết (bị chặn bởi assertion trong `scripts/seo-check.mjs`).

---

## 3. TIẾN ĐỘ & TRẠNG THÁI HIỆN TẠI

### Quy mô URL Sitemap
- **Baseline Sản xuất (Production `https://xeghepphongcach.com`)**: 38 URLs (gồm MP-003, MP-005, CP-002, CP-003 đã live và được index).
- **Trạng thái nhánh `codex/release-ops-003-sprint-003a`**: 39 URLs (đã thêm MP-019 `/xe-ghep-hai-duong-ha-long` và nâng cấp MP-004 `/xe-hai-duong-cat-bi`).

### Những thay đổi mới nhất trong phiên này:
1. **Rà soát hiện trạng**: Tạo tài liệu kế hoạch hành động 3 giai đoạn được Owner duyệt tại `implementation_plan.md`.
2. **Nâng cấp Freshness cho Sitemap**:
   - Chỉnh sửa [app/sitemap.ts](app/sitemap.ts): Sử dụng thuộc tính `lastReviewedAt` riêng biệt của từng asset tuyến xe và bài viết cho thẻ `<lastmod>`, giúp Google bot nhận biết chính xác độ tươi mới của từng trang thay vì dùng mốc thời gian chung `siteConfig.contentUpdatedAt`.
3. **Cập nhật Trạng thái Dự án**:
   - Cập nhật [SEO_STATUS.md](SEO_STATUS.md): Đưa SPRINT-003A từ `REVIEW` sang `APPROVED` (Sẵn sàng deploy).
4. **Kiểm thử tự động**:
   - `node --test tests/seo-governance.test.mjs` đạt **10/10 PASS**.

---

## 4. BẢNG TRA CỨU CÁC FILE TRỌNG TÂM

| Đường dẫn file | Vai trò trong dự án |
|---|---|
| [data/seo/asset-registry.mjs](data/seo/asset-registry.mjs) | Registry quản trị trạng thái xuất bản của toàn bộ 32 SEO assets. |
| [data/seo/published-content.ts](data/seo/published-content.ts) | Tầng lọc sản xuất: chỉ xuất bản nội dung từ registry đạt chuẩn `PUBLISHED`. |
| [data/seo/route-knowledge/owner-verification.mjs](data/seo/route-knowledge/owner-verification.mjs) | Kho bằng chứng xác thực từ chủ xe (Route Knowledge Base & Evidence). |
| [data/seo/money-page-upgrades.mjs](data/seo/money-page-upgrades.mjs) | Gói nội dung nâng cấp thương mại chuyên sâu cho từng tuyến xe (MP-003, MP-004, MP-005, MP-019). |
| [app/[slug]/page.tsx](app/[slug]/page.tsx) | Template render động (SSG) cho tất cả các trang tuyến xe (Money Pages). |
| [app/blog/[slug]/page.tsx](app/blog/[slug]/page.tsx) | Template render động (SSG) cho các bài viết cẩm nang, so sánh (Guides). |
| [app/sitemap.ts](app/sitemap.ts) | Sinh dynamic sitemap theo chuẩn 39 URLs. |
| [scripts/seo-check.mjs](scripts/seo-check.mjs) | Script tự động quét và xác thực hơn 290 tiêu chí SEO on-page, canonical, hotline, schema. |
| [tests/seo-governance.test.mjs](tests/seo-governance.test.mjs) | Bộ unit test kiểm tra tính toàn vẹn của registry và quy tắc giá. |

---

## 5. HƯỚNG DẪN DÀNH CHO AI TIẾP QUẢN (NEXT STEPS)

Khi tiếp quản dự án này để làm tiếp, AI cần thực hiện theo các bước ưu tiên sau:

### Bước 1: Deploy SPRINT-003A lên Production
1. Kiểm tra git working directory: `git status -s`.
2. Commit các thay đổi sitemap và tài liệu:
   ```bash
   git add app/sitemap.ts SEO_STATUS.md SEO_HANDOFF.md
   git commit -m "feat: implement per-asset sitemap freshness and prepare SPRINT-003A release"
   ```
3. Merge nhánh `codex/release-ops-003-sprint-003a` vào `main` hoặc đẩy lên Vercel để deploy production.
4. Xác minh production live tại `https://xeghepphongcach.com/sitemap.xml` đạt đúng 39 URLs.

### Bước 2: Google Search Console Actions
1. Kiểm tra GSC property `sc-domain:xeghepphongcach.com`.
2. Gửi yêu cầu lập chỉ mục (URL Inspection -> Request Indexing) cho 2 URL:
   - `https://xeghepphongcach.com/xe-hai-duong-cat-bi`
   - `https://xeghepphongcach.com/xe-ghep-hai-duong-ha-long`
3. Theo dõi chỉ số tại các mốc T+7 và T+14 (ghi nhận vào `SEO_MONITORING_BASELINE.md`).

### Bước 3: Triển khai Wave 3 (Hải Phòng ⇄ Quảng Ninh)
1. Hỏi Owner bảng giá sàn tuyến Hải Phòng ⇄ Quảng Ninh (`hp-qn`).
2. Nâng cấp MP-006 (`/xe-ghep-hai-phong-quang-ninh`) và CP-004 (`/blog/di-hai-phong-quang-ninh-bang-phuong-tien-gi`) theo mẫu `SEO_UPGRADE_MP003.md` / `SEO_UPGRADE_MP005.md`.
3. Tiếp tục cập nhật tiến độ vào file Handoff này.
