# DATA-003 — Quảng Ninh Endpoint Verification

Status: `READY_FOR_REVIEW`

Audit date: 2026-08-23

Baseline: `main@80f1e46c8b04b1ecf2bee9a384a9e442fd2da5ae`, production stable, 39 sitemap URLs.

## Executive decision

`RECOMMENDED NEXT MONEY PAGE: NONE`

Hạ Long is already published as MP-019. Bãi Cháy has Owner-backed service evidence, but the existing MP-019 already owns Hạ Long/Bãi Cháy intent and no distinct operating boundary has been confirmed. The other seven Quảng Ninh endpoints remain service-unconfirmed. A new URL now would either cannibalize MP-019 or turn geography/parent-corridor price policy into an unsupported service claim.

## Knowledge Base fact delta

| Metric | Before DATA-003 | After DATA-003 | Delta |
|---|---:|---:|---:|
| Total canonical KB facts | 444 | 444 | 0 |
| VERIFIED | 101 | 113 | +12 |
| PUBLIC_SOURCE | 0 | 0 | 0 |
| ESTIMATE | 8 | 8 | 0 |
| UNKNOWN | 335 | 323 | -12 |

The only evidence reclassification is `hd-bai-chay`. `OWNER_VERIFICATION_RECORD_PHASE1.md` already confirms actual Hải Dương - Hạ Long/Bãi Cháy service. DATA-003 aligns the stale KB record with that existing evidence while preserving:

- `publicationState: DATA_ONLY`;
- `canonical: null`;
- no asset registration;
- `publicationEligible: false`;
- no separate Bãi Cháy price.

No other endpoint fact was promoted. The endpoint audit itself classifies 90 decision facts: 21 `VERIFIED`, 0 `ESTIMATE`, and 69 `UNKNOWN`.

## Endpoint readiness matrix

`VERIFIED*` means the service is verified with an exact-address/trip check, not an always-available or every-address guarantee.

| Endpoint | Route availability | Door-to-door | Shared ride | Charter | Parcel | Price evidence | Reverse direction | Evidence status | SEO value | Publication readiness | Blocking unknowns |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Hạ Long | VERIFIED | VERIFIED* | VERIFIED | VERIFIED | VERIFIED | Separate endpoint price `UNKNOWN`; corridor inheritance `VERIFIED_FROM` | VERIFIED | 7 VERIFIED / 3 UNKNOWN | Heuristic; existing strong cluster role | READY — already MP-019 | None for current page; operational schedule/hours remain intentionally omitted |
| Bãi Cháy | VERIFIED | VERIFIED* | VERIFIED | VERIFIED | VERIFIED | Separate endpoint price `UNKNOWN`; corridor inheritance allowed with “Từ” | VERIFIED | 7 VERIFIED / 3 UNKNOWN | Heuristic; strong but overlaps MP-019 | NEAR_READY | Distinctness from Hạ Long, address boundary, and cannibalization/ownership decision |
| Vân Đồn | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | Endpoint prices `UNKNOWN`; inheritance policy exists but service gate is closed | UNKNOWN | 1 VERIFIED policy / 9 UNKNOWN | Heuristic; requires SERP validation | BLOCKED | Actual service, reverse, modes, door-to-door scope, Ao Tiên relationship |
| Cẩm Phả | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | Endpoint prices `UNKNOWN`; inheritance policy exists but service gate is closed | UNKNOWN | 1 VERIFIED policy / 9 UNKNOWN | Heuristic; requires SERP validation | BLOCKED | Hải Dương-wide versus selected-area service, reverse, modes, address scope |
| Đông Triều | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | Endpoint prices `UNKNOWN`; inheritance policy exists but service gate is closed | UNKNOWN | 1 VERIFIED policy / 9 UNKNOWN | Heuristic; requires SERP validation | BLOCKED | Actual service, reverse, modes, door-to-door scope |
| Móng Cái | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | Endpoint prices `UNKNOWN`; inheritance policy exists but service gate is closed | UNKNOWN | 1 VERIFIED policy / 9 UNKNOWN | Heuristic; requires SERP validation | BLOCKED | Actual service, reverse, modes, address scope, regular versus quote-only acceptance |
| Uông Bí | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | Endpoint prices `UNKNOWN`; inheritance policy exists but service gate is closed | UNKNOWN | 1 VERIFIED policy / 9 UNKNOWN | Heuristic; requires SERP validation | BLOCKED | Actual service, reverse, modes, door-to-door scope |
| Ao Tiên | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | Endpoint prices `UNKNOWN`; inheritance policy exists but service gate is closed | UNKNOWN | 1 VERIFIED policy / 9 UNKNOWN | Heuristic; likely part of Vân Đồn | BLOCKED | Actual service, reverse, modes, and standalone-versus-Vân Đồn scope |
| Quảng Yên | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | Endpoint prices `UNKNOWN`; inheritance policy exists but service gate is closed | UNKNOWN | 1 VERIFIED policy / 9 UNKNOWN | Heuristic; weakest independent signal | BLOCKED | Actual service, reverse, modes, address scope, distinct search demand |

## Priority scoring

No search volume is asserted. SEO values are internal heuristics based on existing RES-002 evidence and require later SERP validation.

| Rank | Endpoint | Evidence /40 | Transactional SEO /25 | Strategic fit /20 | Internal links /10 | Operations /5 | Total /100 |
|---:|---|---:|---:|---:|---:|---:|---:|
| 1 | Hạ Long — existing | 38 | 22 | 20 | 10 | 3 | 93 |
| 2 | Bãi Cháy | 32 | 22 | 20 | 10 | 2 | 86 |
| 3 | Vân Đồn | 4 | 20 | 20 | 8 | 0 | 52 |
| 4 | Cẩm Phả | 4 | 18 | 20 | 8 | 0 | 50 |
| 5 | Đông Triều | 4 | 18 | 19 | 8 | 0 | 49 |
| 6 | Móng Cái | 4 | 17 | 18 | 7 | 0 | 46 |
| 7 | Uông Bí | 4 | 12 | 19 | 8 | 0 | 43 |
| 8 | Ao Tiên | 4 | 10 | 16 | 6 | 0 | 36 |
| 9 | Quảng Yên | 4 | 8 | 15 | 6 | 0 | 33 |

Evidence completeness gives four points to unconfirmed endpoints only because the Owner-approved parent-corridor inheritance policy exists. Those points do not establish service, price for a named endpoint, or publication eligibility.

## Governance audit

| Surface | Finding | Decision |
|---|---|---|
| Route Knowledge Base | `hd-bai-chay` was stale: Owner record confirmed service while KB said `UNCONFIRMED`. | Resolved from existing Owner evidence; record remains `DATA_ONLY`. |
| Owner verification | Traceable confirmation exists for Hạ Long/Bãi Cháy and general Phase 1 modes/both directions/door-to-door. | Sufficient for current MP-019 scope, not sufficient for a second overlapping page. |
| Route evidence | Only Hạ Long is a published endpoint evidence consumer; other endpoint price resolution remains behind service/publication gates. | Preserve. |
| Money-page upgrades / MP-005 live render | Governed upgrade data labels endpoints as geography/search orientation and denies automatic availability or one fixed endpoint fare. The live scan-first renderer no longer displays that endpoint list/boundary, while the FAQ still refers to “các endpoint được liệt kê”. | Data model compliant; public render gap recorded for separate remediation. DATA-003 does not change UI. |
| MP-019 | Mentions Hạ Long/Bãi Cháy, inherits parent prices, and explicitly avoids a separate Bãi Cháy fare/every-address guarantee. | Compliant with Owner record. |
| Asset registry/publication gate | No endpoint asset besides MP-019 exists; candidates have no canonical or asset registration. | Preserve; no publication status change. |
| Owner request files | Earlier forms contain broad unanswered blanks and must not be treated as evidence. | Superseded for the next decision by the minimal DATA-003 request. |
| Duplicate/cannibalization | A standalone Bãi Cháy URL would overlap MP-019 title, H1, copy, FAQ and endpoint scope. | Strategy blocker even though service evidence exists. |

No public claim stronger than evidence was found after the stale KB record was aligned. Fixed frequency, schedules, hours, lead time, waiting, surcharges and every-address availability remain omitted/unknown. The missing MP-005 orientation block is a presentation/SEO-check regression, not an overclaim.

## Validation note

- KB validation: PASS (`444` facts, no validation errors).
- Lint: PASS.
- Typecheck: PASS.
- Full tests: PASS (`60/60`).
- Production build: PASS.
- `git diff --check`: PASS.
- Production `seo:check`: `372 PASS / 2 FAIL` because MP-005 scan-first no longer renders the endpoint orientation/boundary assertions. This pre-exists DATA-003 and is intentionally not repaired in this data-only task.

## Endpoint blockers and next action

- **Bãi Cháy:** obtain only the operating-boundary answer and decide whether MP-019 should continue owning the intent. Do not create a URL merely because evidence is stronger.
- **Vân Đồn/Ao Tiên:** highest-value unresolved Owner check; treat as one operating question until Owner separates them.
- **Cẩm Phả:** confirm whether service is Hải Dương-wide or limited to selected origins such as Chí Linh.
- **Đông Triều:** good market heuristic, but all Phong Cách service facts remain unknown.
- **Móng Cái:** service and operating mode are unknown; distance/market references do not substitute for Owner evidence.
- **Uông Bí:** service unknown and independent SERP value weaker than the endpoints above.
- **Quảng Yên:** service unknown and independent strategic value is currently lowest.

## SPRINT-006 recommendation

`RECOMMENDED NEXT MONEY PAGE: NONE`

Reasoning:

- Evidence: only Hạ Long and Bãi Cháy have endpoint service confirmation; Hạ Long is already published.
- Operational confidence: Bãi Cháy is confirmed within the Hạ Long/Bãi Cháy scope, but not as a distinct operating product.
- SEO fit: Bãi Cháy has the strongest candidate heuristic, yet MP-019 already owns that intent.
- Risk: publishing Bãi Cháy separately risks cannibalization; publishing any other endpoint risks unsupported availability and price interpretation.

## Scope preservation

- New URLs: 0
- Sitemap delta: 0; remains 39 URLs
- Asset/publication status changes: 0
- Production code/content changes: 0
- New public numeric prices: 0
- Production deployment: none

Machine-readable audit: `data/seo/route-knowledge/data-003-endpoint-audit.mjs`.
