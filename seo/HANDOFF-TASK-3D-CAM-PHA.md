# Task 3D integration handoff — Hải Dương ⇄ Cẩm Phả

**Status:** ACCEPTED — production verified on 2026-09-10

## Release

- Commit: `0a04d389075390423e09782588e07ef7611dc00c`
- Canonical: `https://xeghepphongcach.com/xe-ghep-hai-duong-cam-pha`
- Vercel production deployment: `dpl_EsjN8sknG9b8Kh1iYYHBKuNYo2mm`
- Vercel deployment URL: `https://xe-ghep-phong-cach-27pucrenz-longhoang249s-projects.vercel.app`

## Published scope

- MP-021 is the only new canonical money page: `/xe-ghep-hai-duong-cam-pha`.
- Shared ride is exact: `450.000đ/người`.
- Private charter is a range: `1.200.000 – 1.300.000đ/chuyến`; it is not flattened and is not split into 4-seat/7-seat prices.
- Cửa Ông is a contact-confirmation section on the Cẩm Phả page; no separate Cửa Ông URL or numeric page price is published.
- Parcel service and pricing remain contact-only for this page.
- The page links to the Quảng Ninh pillar and the published Hạ Long/Vân Đồn pages.

## Verification

- `git diff --check` — pass
- `node --test tests/*.test.mjs` — 111/111 pass
- `npm run seo:audit` — 100/100, 0 critical issues, 41 URLs
- `npm run typecheck` — pass
- `npm run build` — pass
- Local and production page QA — HTTP 200, canonical, title, one H1, exact/range/contact copy, CTA links, sitemap inclusion, and 390×844 mobile viewport verified

## Known non-blocker

- The repository's informational lint waiver remains in effect. It was not used to alter or suppress a Task 3D failure.
- `seo:check` is not a release gate in this integration: when pointed at the local production build it reports pre-existing assertions that do not match current `main` across older routes. The required source, audit, typecheck, build, and targeted runtime gates above all pass.

## Follow-up boundary

Task 3D is complete. Do not begin Task 3E from this handoff.
