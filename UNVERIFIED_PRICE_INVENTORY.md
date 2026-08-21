# UNVERIFIED_PRICE_INVENTORY

Task: `TECH-001`

Audit date: 2026-08-21

Scope: Existing live numeric prices produced by missing-value fallback formulas. Public output is intentionally unchanged in this task.

## Summary

- Public URL surface affected: **1** (`/`, after a booking request is submitted).
- Registered routes with missing fields that become numeric fallback prices: **2**.
- Missing registered price fields affected: **4**.
- Exact fallback amounts generated for those fields: **4**.
- Custom-route formula branches: **4** (shared, private 4-seat, private 7-seat, parcel); amounts vary by geocoded distance, passenger count, and cargo inputs.
- Total missing-value/custom formula paths inventoried: **8**.
- Overall risk: **P0/Critical** because a derived value is displayed as “Tham khảo” and persisted as `estimated_price` without evidence metadata.

## Missing registered values that generate a numeric price

| URL | Route | Public Price | Source | Generated/Verified | Risk | Duplicated elsewhere? |
|---|---|---:|---|---|---|---|
| `/` | Hải Dương ⇄ Hưng Yên — bao xe 4 chỗ | 560.000đ | `max(250.000, ceil10k(48 × 11.500))` in `lib/pricing.ts` | GENERATED; no evidence record | Critical | Visible once in success summary; also persisted as `estimated_price`, not rendered in another public section. |
| `/` | Hải Dương ⇄ Hưng Yên — bao xe 7 chỗ | 700.000đ | `max(300.000, ceil10k(48 × 14.500))` in `lib/pricing.ts` | GENERATED; no evidence record | Critical | Visible once in success summary; also persisted as `estimated_price`, not rendered in another public section. |
| `/` | Hải Dương ⇄ Hà Nam — bao xe 4 chỗ | 990.000đ | `max(250.000, ceil10k(86 × 11.500))` in `lib/pricing.ts` | GENERATED; no evidence record | Critical | Visible once in success summary; also persisted as `estimated_price`, not rendered in another public section. |
| `/` | Hải Dương ⇄ Hà Nam — bao xe 7 chỗ | 1.250.000đ | `max(300.000, ceil10k(86 × 14.500))` in `lib/pricing.ts` | GENERATED; no evidence record | Critical | Visible once in success summary; also persisted as `estimated_price`, not rendered in another public section. |

`ceil10k` means rounding upward to the next 10.000đ.

## Custom-route fallback branches

| URL | Route | Public Price | Source | Generated/Verified | Risk | Duplicated elsewhere? |
|---|---|---:|---|---|---|---|
| `/` | Custom route — xe ghép | Variable: `max(120.000, ceil10k(distance × 3.200)) × passengers` | Approximate geocoded distance + `lib/pricing.ts` | GENERATED; no evidence record | Critical | Success summary and persisted `estimated_price`. |
| `/` | Custom route — bao xe 4 chỗ | Variable: `max(250.000, ceil10k(distance × 11.500))` | Approximate geocoded distance + `lib/pricing.ts` | GENERATED; no evidence record | Critical | Success summary and persisted `estimated_price`. |
| `/` | Custom route — bao xe 7 chỗ | Variable: `max(300.000, ceil10k(distance × 14.500))` | Approximate geocoded distance + `lib/pricing.ts` | GENERATED; no evidence record | Critical | Success summary and persisted `estimated_price`. |
| `/` | Custom route — parcel | Variable: `ceil10k(max(150.000, ceil10k(distance × 1.200)) + excess weight × 6.000)` | Approximate geocoded distance, volumetric weight, and `lib/pricing.ts` | GENERATED; no evidence record | Critical | Success summary and persisted `estimated_price`. |

The approximate distance is straight-line distance multiplied by `1.2`, calculated in `components/BookingExperience.tsx`.

## Related numeric claims not counted as missing-value fallbacks

These values also require owner/evidence review, but they are not included in the eight fallback paths above:

- Homepage route tiles display `sharedPrice` from `data/routes.ts` for 17 routes.
- `/xe-ghep-hai-duong-phu-tho` displays 400.000đ/người and emits an `Offer` from the stored route value.
- The homepage cargo note contains the hard-coded claim “Chỉ từ 150k”.
- Parcel prices for 17 registered routes use a stored base price but can add a formula-generated weight surcharge above 5 kg.
- Stored shared/private/parcel values currently have no per-field source, verifier, or verification date in the repository.

## TECH-001 treatment

- Existing backfilled assets use `priceFallbackPolicy: "LEGACY_FORMULA"` so this task does not change live output.
- Future assets use `priceFallbackPolicy: "GOVERNED"` and cannot use distance as a numeric price fallback.
- An `UNKNOWN` numeric value produces the neutral state: “Liên hệ xác nhận giá theo điểm đón/trả.”
- Strategy Lead and Owner must resolve the inventory in a separate approved task.
