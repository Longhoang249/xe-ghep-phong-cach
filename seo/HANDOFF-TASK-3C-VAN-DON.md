# HANDOFF — Task 3C: Vân Đồn / Cảng Ao Tiên Money Page (MP-020)

## Release Summary

| Field | Value |
|---|---|
| Asset ID | MP-020 |
| Canonical URL | `/xe-ghep-hai-duong-van-don` |
| Parent Pillar | `/xe-ghep-hai-duong-quang-ninh` |
| Commit | `3cd9f79` |
| Branch | `main` |
| Date | 2026-09-10 |
| Previous HEAD | `8edb60e` |

## Verified Pricing (source: `owner_price_sheet_2026_09_09`)

| Service | Vân Đồn | Cảng Ao Tiên |
|---|---|---|
| Xe ghép | 500.000đ/người | 500.000đ/người |
| Bao xe | 1.500.000đ/chuyến | Liên hệ xác nhận |
| Toll included | ❌ | ❌ |
| Parcel | UNKNOWN — Liên hệ | UNKNOWN — Liên hệ |

## Files Changed (29 files, +1014 / -57)

### New Files
- `data/seo/hd-van-don-gold-content.ts` — Gold dataset (comparison rows, destination hubs, decision guide)
- `seo/facts/xe-ghep-hai-duong-van-don.md` — Fact ledger with 13 material claims
- `tests/task-3c-van-don.test.mjs` — 5 dedicated test cases

### Modified Files (key)
- `data/routes.ts` — Added `hd-van-don` route entry
- `data/seo/asset-registry.mjs` — Registered MP-020
- `data/seo/route-evidence.mjs` — Added evidence chain `hd-van-don → hd-qn`
- `data/seo/money-page-upgrades.mjs` — Added full upgrade object (~97 lines)
- `app/[slug]/page.tsx` — Added `isVdRoute`, commercial price rows, breadcrumb, Ao Tiên comparison box
- `app/sitemap.ts` — Added `hd-van-don` to golden corridor
- `seo/content-map.json` — Moved to `publishedEndpoints`
- `seo/url-inventory.json` — Updated counts 39→40, moneyPages 19→20

### Test Baseline Updates (all pass 107/107)
- `tests/rem-001.test.mjs` — 39→40
- `tests/sprint-001a.test.mjs` — 32→33, 39→40
- `tests/sprint-002a.test.mjs` — 39→40
- `tests/sprint-005.test.mjs` — 39→40
- `tests/seo-governance.test.mjs` — 32→33, 39→40, 19→20
- `tests/data-003.test.mjs` — 32→33, 39→40
- `tests/route-knowledge.test.mjs` — 32→33, 39→40
- `tests/sprint-005-1.test.mjs` — 39→40
- `tests/sprint-003a.test.mjs` — 39→40
- `scripts/seo-audit.mjs` — 32→33, 39→40
- `scripts/seo-check.mjs` — 39→40

## Verification Gates

| Gate | Result |
|---|---|
| Tests (107/107) | ✅ PASS |
| SEO Audit (100/100) | ✅ PASS |
| TypeScript (`tsc --noEmit`) | ✅ PASS |
| Build (`next build`) | ✅ PASS (52 static pages) |

## Content Guardrails Enforced

- ❌ Zero "cam kết kịp tàu" / "đảm bảo kịp giờ tàu"
- ❌ Zero "bán vé tàu cao tốc" / "phục vụ chặng tàu"
- ❌ Zero 24/7 / "0đ cọc" / "xác nhận tức thì"
- ❌ Zero legacy 600k/750k prices
- ❌ Zero 4-seat/7-seat split
- ❌ Zero synonym URLs created
- ✅ Road transport boundary only — Phong Cách does NOT operate boats
- ✅ Ao Tiên is SECTION_IN_VAN_DON, not a separate endpoint

## URL Contract

| Metric | Before | After |
|---|---|---|
| Total URLs | 39 | 40 |
| Money Pages | 19 | 20 |
| Published Assets | 32 | 33 |
| Baseline URLs | 38 | 38 (unchanged) |

## Forbidden URLs (NOT created)

- `/xe-hai-duong-van-don`
- `/xe-ghep-hai-duong-ao-tien`
- `/xe-hai-duong-cang-ao-tien`
- `/xe-hai-duong-co-to`
- `/xe-ghep-hai-duong-quan-lan`
