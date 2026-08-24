# REM-001 — Public Pricing Integrity

Status: `READY_FOR_REVIEW`

Date: 2026-08-24 (Asia/Ho_Chi_Minh)

## Scope result

REM-001 changes only the homepage booking/cargo pricing flow, its persistence semantics, regression coverage and governance documentation. It creates no URL, changes no money-page price, and leaves metadata, canonical, schema, asset registry and publication states untouched.

## Before / after

| Surface | Before | After |
|---|---|---|
| Owner-verified starting price | Bare number under the generic label `Tham khảo`; payload stored only `estimated_price`. | `Giá bắt đầu` + `Từ [amount]`; payload stores `STARTING_FROM`, amount and unit. |
| Traceable registered-route fallback | Formula result looked like the same kind of price as an Owner-verified base. | Only the four already mapped registered-route fallbacks can render; label is `Ước tính chưa xác nhận` and output says `Ước tính khoảng…`; payload stores `ESTIMATE`. |
| UNKNOWN/custom route | Distance formula could emit and persist a number. | Public summary says `Liên hệ xác nhận`; `estimated_price` is `null`; payload semantic is `CONTACT`. |
| Cargo price | Code calculated distance + volumetric/excess-weight pricing and UI exposed the formula. | No cargo price formula executes. Name, dimensions and weight remain lead inputs; copy says price is checked from cargo information and the actual trip. |
| Final fare | Generic callback copy. | Explicitly says the final price is confirmed from trip information and actual conditions. |

## Persistence contract

Migration `supabase/migrations/003_add_booking_price_semantics.sql` adds:

- `estimated_price_semantic`: `STARTING_FROM`, `ESTIMATE`, `CONTACT`, or historical `LEGACY_UNCLASSIFIED`;
- `estimated_price_unit`: `PER_PERSON`, `PER_TRIP`, or `null`.

Historical numeric rows are not silently relabeled: they become `LEGACY_UNCLASSIFIED`. The API normalizes missing/invalid semantic metadata to `CONTACT` and clears the unclassified number while preserving all lead and cargo fields.

The migration must be applied before any future deployment of the REM-001 application commit.

## Regression coverage

- Owner `VERIFIED_FROM` fact renders and persists with `STARTING_FROM` / `Từ`.
- Traceable registered-route `ESTIMATE` cannot masquerade as a confirmed or starting fare.
- UNKNOWN and custom routes cannot create a numeric public or persisted fare.
- Cargo formula is absent from booking UI and runtime pricing code; cargo lead inputs remain.
- Server-side normalization preserves the lead while clearing unclassified numeric pricing.
- URL/sitemap contract remains 39.

## Validation

- `npm run lint`: PASS
- `npm run typecheck`: PASS
- `node --test tests/*.test.mjs`: 66/66 PASS
- `npm run build`: PASS (50/50 static pages generated)
- Candidate `npm run seo:check`: 372 PASS / 2 known FAIL
- `git diff --check`: PASS
- Candidate sitemap: 39 URLs
- Booking API demo POST: PASS

The two SEO failures are the pre-existing MP-005 endpoint-orientation/boundary checks. They remain outside REM-001 and are assigned to SPRINT-005.1; REM-001 introduces no new SEO-check failure.

## Remaining remediation

- SPRINT-005.1: restore the MP-005 endpoint orientation/boundary contract and its two SEO checks.
- Obtain Owner evidence to replace the four registered-route legacy estimates; no custom-route formula remains public.
- Review the generic homepage cargo banner scope separately.
- Review parcel handling wording, Cát Bi operating exceptions, frequency claims and endpoint service boundaries under their existing queue items.
