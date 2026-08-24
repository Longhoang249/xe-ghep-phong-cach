# SPRINT-005.1 — MP-005 Endpoint Orientation / Boundary

Status: `READY_FOR_REVIEW`

Date: 2026-08-24 (Asia/Ho_Chi_Minh)

Base: `rem/rem-001-public-pricing-integrity @ 2d6e88a427e6310fd65d232e501748eed63677d8`

## Before / after

Before, MP-005 scan-first omitted the governed endpoint orientation block even though the FAQ referred to the listed endpoints. This caused two known SEO-check failures.

After, MP-005 renders a compact block after the route visual and before the service cards. The block reads all seven labels and all boundary copy from `money-page-upgrades.mjs`. The shared component contains no endpoint names or endpoint prices.

- Đông Triều
- Uông Bí
- Quảng Yên
- Hạ Long / Bãi Cháy
- Cẩm Phả
- Vân Đồn / Ao Tiên
- Móng Cái

Only `Hạ Long / Bãi Cháy` links to the already published MP-019. All other endpoint labels remain non-link text. No URL, asset, publication status or endpoint price is created.

## Boundary

Visible copy:

> Việc nêu tên khu vực không xác nhận mọi địa chỉ luôn có xe hoặc cùng một mức giá. Hãy gửi điểm đón/trả cụ thể để Phong Cách kiểm tra chuyến.

The existing FAQ answer remains consistent: the list is geography/search orientation, not evidence that every endpoint is served or shares one fare.

## Exact SEO checks fixed

1. `/xe-ghep-hai-duong-quang-ninh có endpoint orientation`
2. `/xe-ghep-hai-duong-quang-ninh không biến geography thành availability`

Candidate `seo:check`: `374/374 PASS`.

## Validation

- `npm run lint`: PASS
- `npm run typecheck`: PASS
- `node --test tests/*.test.mjs`: 71/71 PASS
- `npm run build`: PASS; 50/50 static pages generated
- Candidate `npm run seo:check`: 374/374 PASS
- `git diff --check`: PASS
- Sitemap: 39 URLs
- Mobile viewport: 390px document width / 390px viewport, no horizontal overflow
- Endpoint block mobile: no internal overflow

Local analytics/speed-insights scripts return expected 404s outside Vercel. No application console error was observed beyond those two unavailable local Vercel integrations.

## Visual QA

- Desktop 1440px: `output/playwright/sprint-005-1/endpoint-desktop-1440.png`
- Mobile 390px: `output/playwright/sprint-005-1/endpoint-mobile-390.png`

Screenshots are local ignored QA artifacts and are not part of the application commit.

## Remaining risks

- Uông Bí, Cẩm Phả, Vân Đồn, Ao Tiên and the other unconfirmed endpoints remain data-only/UNKNOWN; this block does not change evidence state.
- REM-001 and SPRINT-005.1 must not deploy until migration `003_add_booking_price_semantics.sql` is applied and verified.
- Production live QA remains required after the combined release.
