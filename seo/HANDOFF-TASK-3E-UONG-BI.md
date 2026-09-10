# Task 3E — Hải Dương ⇄ Uông Bí / Yên Tử: production handoff

## Verdict

**ACCEPTED — production verified.**

- Canonical: `https://xeghepphongcach.com/xe-ghep-hai-duong-uong-bi`
- Asset: `MP-022`
- Code release commit: `871f8e10d5857dbe50a1eb068f316769c34a1f0c`
- Production deployment: `dpl_35EHcvWh1Ukd2abrwtAqjBthoFgE`
- Deployment URL: `https://xe-ghep-phong-cach-q64ml4gpw-longhoang249s-projects.vercel.app`

## Published facts and boundaries

| Subject | Published outcome | Evidence/status |
| --- | --- | --- |
| Uông Bí xe ghép | `300.000đ/người` | `EXACT`, `VERIFIED`, `owner_price_sheet_2026_09_09` |
| Uông Bí bao xe riêng | `600.000đ/chuyến` | `EXACT`, `VERIFIED`, `owner_price_sheet_2026_09_09`; toll is not included |
| Uông Bí 4/7 chỗ | No separate numeric split | No verified split record |
| Yên Tử | Contact-only supporting geographic intent | No pricing-engine record and no canonical URL created |
| Gửi hàng Uông Bí | Contact-only | No verified service/price record |

The page covers both Hải Dương → Uông Bí and Uông Bí → Hải Dương. It links to the Quảng Ninh pillar and the published Hạ Long, Cẩm Phả, and Vân Đồn endpoint pages. The Quảng Ninh pillar now links back to Uông Bí.

## Verification

All required gates passed before release:

- `git diff --check`
- `node --test tests/*.test.mjs` — **115 passed, 0 failed**
- `npm run seo:audit` — **100/100**, 0 critical, 0 warnings, 42 audited URLs
- `npm run typecheck`
- `npm run build`

Local and production checks passed:

- Uông Bí, Quảng Ninh pillar, Hạ Long, Cẩm Phả, and Vân Đồn return HTTP 200.
- Production canonical is self-referential; robots is `index, follow`.
- Production H1, exact Uông Bí prices, visible FAQ and matching `FAQPage` JSON-LD, phone and Zalo CTAs are present.
- Mobile viewport `390 × 844`: `scrollWidth = 390`, `clientWidth = 390`.

## Evidence discrepancy retained

`data/seo/route-knowledge/data-003-endpoint-audit.mjs` retains the earlier evidence audit that listed `hd-uong-bi` as `BLOCKED` because it lacked operational verification at that audit stage. The active pricing engine now contains newer, route-specific `VERIFIED` exact records from `owner_price_sheet_2026_09_09` for Uông Bí (300.000/600.000). Task 3E uses that current pricing-engine source only for those two Uông Bí facts; it does not infer a Yên Tử fare, a parcel price, or a 4/7-seat split. The historical audit remains preserved as a discrepancy record rather than rewritten.

## Non-release notes

- Existing lint configuration was not changed; lint remains informational under the established waiver.
- No Task 4 endpoint, Yên Tử canonical page, or unrelated endpoint was created.
