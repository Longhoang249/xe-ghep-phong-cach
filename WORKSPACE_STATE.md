# WORKSPACE STATE — OPS-001

Date: 2026-08-21 (Asia/Ho_Chi_Minh)

Status: REVIEW

Branch: `main`

Opening HEAD: `4214f65` (`docs: audit SEO execution architecture`)

## Scope and method

This is a forensic manifest of the dirty workspace captured at the start of OPS-001. OPS-001 does not reset, clean, stash, overwrite, stage, or commit any existing change.

The opening population was obtained with `git status --porcelain=v1 -uall`: 24 tracked modified files plus 39 untracked files, for 63 file entries. Classification uses:

1. the Git snapshot recorded before TECH-001;
2. the TECH-001 created/modified-file handoff;
3. current diffs against `HEAD`;
4. the current import/dependency graph.

`PRE_EXISTING` means the file/change was observed before TECH-001. It does not claim who authored it or whether it is ready to publish. Git has no native authorship record for uncommitted changes.

`Safe separation` answers whether the file can be attributed without rewriting or discarding the current working copy. It does not mean that a complete, buildable TECH-001 commit can omit all runtime dependencies marked `PRE_EXISTING`.

## Opening classification totals

| Classification | Files | Meaning |
|---|---:|---|
| `PRE_EXISTING` | 42 | Present or modified before TECH-001. |
| `TECH_001` | 11 | Created or changed only for TECH-001 at the opening OPS-001 snapshot. |
| `MIXED` | 10 | Contains both pre-TECH work and required TECH-001 integration. |
| `UNKNOWN` | 0 | No unattributed opening entries remain. |
| **Total** | **63** | 24 tracked modified + 39 untracked. |

## PRE_EXISTING — tracked modified

| Path | Git state | TECH-001 dependency | Safe separation |
|---|---|---|---|
| `.env.example` | `M` | No direct dependency | Yes — keep outside TECH-001. |
| `.gitignore` | `M` | No direct dependency | Yes — keep outside TECH-001. |
| `README.md` | `M` | No direct dependency | Yes — keep outside TECH-001. |
| `app/api/bookings/route.ts` | `M` | Existing booking runtime used by the mixed booking UI; no TECH-specific edit | Yes by attribution; restore/build work must preserve it separately. |
| `app/api/geocode/route.ts` | `M` | Existing booking runtime; no TECH-specific edit | Yes by attribution; restore/build work must preserve it separately. |
| `app/api/route-map/route.ts` | `M` | Existing booking runtime; no TECH-specific edit | Yes by attribution; restore/build work must preserve it separately. |
| `app/globals.css` | `M` | Styles for pre-existing page rewrites; TECH-001 made no visual change | Yes by attribution; required by the current rendered site. |
| `app/layout.tsx` | `M` | Existing site metadata/layout; no TECH-specific edit | Yes by attribution; required by the current rendered site. |
| `app/robots.ts` | `M` | Existing crawl configuration; TECH gate did not edit it | Yes — keep outside TECH-001. |
| `components/RoutesDirectory.tsx` | `M` | Direct dependency of mixed `app/tuyen-xe/page.tsx`; no TECH-specific edit | Yes by attribution; commit it in its pre-existing batch before/with its caller. |
| `data/location-coordinates.ts` | `M` | Direct dependency of mixed `BookingExperience`; no TECH-specific edit | Yes by attribution; preserve in the pre-existing booking batch. |
| `lib/tracking.ts` | `M` | Direct dependency of mixed `BookingExperience`; no TECH-specific edit | Yes by attribution; preserve in the pre-existing analytics batch. |
| `next-env.d.ts` | `M` | Build-generated/type environment; no TECH-specific edit identified | Yes — keep outside TECH-001 and review whether regeneration is expected. |
| `next.config.ts` | `M` | Current build/runtime configuration; no TECH-specific edit | Yes by attribution; a reconstructed tree may still require it. |
| `package-lock.json` | `M` | Dependency state for the pre-existing application changes | Yes by attribution; pair with the reviewed package manifest. |
| `package.json` | `M` | Provides current scripts including validation; change predates TECH-001 | Yes by attribution; pair with `package-lock.json`. |

## PRE_EXISTING — untracked

| Path | Git state | TECH-001 dependency | Safe separation |
|---|---|---|---|
| `AGENTS.md` | `??` | Repository instructions only | Yes — whole file predates TECH-001. |
| `BRIEF-TU-VAN-SEO-GEO.md` | `??` | Background/strategy material only | Yes — whole file predates TECH-001. |
| `CLAUDE.md` | `??` | Repository instructions only | Yes — whole file predates TECH-001. |
| `KE-HOACH-SEO-GEO-90-NGAY.md` | `??` | Background/strategy material only | Yes — whole file predates TECH-001. |
| `app/8bf433997324b52e41264c57cbd4a3a0.txt/route.ts` | `??` | Existing site-verification route; no TECH-specific edit | Yes — whole file predates TECH-001. |
| `app/an-toan-va-doi-xe/page.tsx` | `??` | Existing public supporting page represented by the migrated registry | Yes by origin; a reconstructed live baseline must preserve it. |
| `app/chinh-sach-dat-xe/page.tsx` | `??` | Existing public supporting page represented by the migrated registry | Yes by origin; a reconstructed live baseline must preserve it. |
| `app/gioi-thieu/page.tsx` | `??` | Existing public page; not a TECH-created asset | Yes by origin; preserve separately. |
| `app/lien-he/page.tsx` | `??` | Existing public page; not a TECH-created asset | Yes by origin; preserve separately. |
| `app/llms.txt/route.ts` | `??` | Existing machine-readable discovery endpoint | Yes — whole file predates TECH-001. |
| `app/manifest.ts` | `??` | Existing web manifest | Yes — whole file predates TECH-001. |
| `components/JsonLd.tsx` | `??` | Direct dependency of multiple mixed pages | Yes by origin, but must exist before a mixed page can build. |
| `components/RouteViewTracker.tsx` | `??` | Direct dependency of mixed route detail page | Yes by origin, but must exist before the route page can build. |
| `components/TrackedLink.tsx` | `??` | Direct dependency of multiple mixed pages | Yes by origin, but must exist before those pages can build. |
| `components/TrustPage.tsx` | `??` | Existing supporting-page component | Yes — whole file predates TECH-001. |
| `data/guide-posts.ts` | `??` | Direct raw-data dependency of TECH `published-content.ts` | Yes by origin, but it must be present for the current TECH integration to compile. |
| `lib/analytics.ts` | `??` | Direct dependency of mixed `BookingExperience` and tracking components | Yes by origin, but required by the current runtime tree. |
| `lib/server-logging.ts` | `??` | Existing server observability helper; no TECH-specific edit | Yes — whole file predates TECH-001. |
| `lib/site.ts` | `??` | Direct dependency of mixed route/blog/home/sitemap pages | Yes by origin, but it must be present for those pages to compile. |
| `public/images/dich-vu-xe-4-cho.png` | `??` | Existing presentation asset; no TECH dependency | Yes — binary whole file predates TECH-001. |
| `public/images/dich-vu-xe-7-cho.png` | `??` | Existing presentation asset; no TECH dependency | Yes — binary whole file predates TECH-001. |
| `public/images/gui-hang-theo-chuyen.png` | `??` | Existing presentation asset; no TECH dependency | Yes — binary whole file predates TECH-001. |
| `public/images/hero-phong-cach-fleet.png` | `??` | Existing presentation asset; no TECH dependency | Yes — binary whole file predates TECH-001. |
| `public/images/hero-xe-ghep-phong-cach.png` | `??` | Existing presentation asset; no TECH dependency | Yes — binary whole file predates TECH-001. |
| `scripts/seo-check.mjs` | `??` | Used to validate the final implementation, but not created by TECH-001 | Yes by origin; preserve as a pre-existing validation tool. |
| `scripts/submit-indexnow.mjs` | `??` | Existing indexing utility; not invoked or changed by TECH-001 | Yes — whole file predates TECH-001. |

## TECH_001

| Path | Git state | TECH-001 dependency | Safe separation |
|---|---|---|---|
| `SEO_STATUS.md` | `M` | Operational status record | Yes at OPS opening; OPS-001 updates this same file after the snapshot, so final attribution is TECH-001 + OPS-001 by distinct documentation hunks. |
| `UNVERIFIED_PRICE_INVENTORY.md` | `??` | Required inventory of legacy price fallbacks | Yes — whole file. |
| `data/seo/asset-registry.mjs` | `??` | Core 31-asset registry | Yes — whole file. |
| `data/seo/cluster-graph.mjs` | `??` | Explicit Phase 1/legacy cluster graph | Yes — whole file. |
| `data/seo/existing-public-url-baseline.mjs` | `??` | Exact 38-URL regression baseline | Yes — whole file. |
| `data/seo/published-content.ts` | `??` | Production join/filter between raw data and published assets | Yes — whole file, but it imports pre-existing `routes` and `guide-posts`. |
| `data/seo/route-evidence.mjs` | `??` | Evidence records and neutral unknown state | Yes — whole file. |
| `data/seo/types.ts` | `??` | Governance/evidence TypeScript contracts | Yes — whole file. |
| `docs/SEO_GOVERNANCE.md` | `??` | Authoring, review, approval, and publishing procedure | Yes — whole file. |
| `lib/seo/publication.mjs` | `??` | Core publication and price-fallback policy | Yes — whole file. |
| `tests/seo-governance.test.mjs` | `??` | Acceptance and regression tests | Yes — whole file. |

## MIXED

These files cannot be used in a high-confidence isolated TECH-001 commit from the current Git baseline. The three untracked files have no Git base version at all; the tracked files combine earlier site rewrites/data edits with TECH gate integration in the same working diff.

| Path | Git state | TECH-001 dependency | Safe separation |
|---|---|---|---|
| `app/[slug]/page.tsx` | `M` | Required: published route static params and lookup | No — TECH imports/lookup are layered on a large pre-existing route-page rewrite. |
| `app/blog/[slug]/page.tsx` | `??` | Required: published guide static params and lookup | No — untracked before TECH; Git has no pre-TECH base to split from. |
| `app/blog/page.tsx` | `??` | Required: published guide discovery/listing | No — untracked before TECH; Git has no pre-TECH base to split from. |
| `app/page.tsx` | `M` | Required: homepage receives only published routes | No — publication import/prop is inside a larger pre-existing metadata/schema rewrite. |
| `app/sitemap.ts` | `M` | Required: only published route/guide assets enter sitemap | No — current file also contains the pre-existing sitemap/site-config rewrite. |
| `app/tuyen-xe/page.tsx` | `M` | Required: route directory receives only published routes | No — publication import is inside a larger pre-existing directory-page rewrite. |
| `components/BookingExperience.tsx` | `M` | Required: lookup and discovery use published routes only | No — gate imports/lookups are interwoven with a large pre-existing booking UI rewrite. |
| `data/blog-posts.ts` | `??` | Required: generated route-post collection uses published routes | No — untracked before TECH; Git has no pre-TECH base to split from. |
| `data/routes.ts` | `M` | Required: `priceFallbackPolicy` contract for legacy versus governed routes | No — the TECH field shares the file/hunk with pre-existing route additions and price edits. |
| `lib/pricing.ts` | `M` | Required: new governed assets cannot synthesize numeric fares | No — TECH guards share hunks with pre-existing formula/value changes and depend on mixed route data. |

## UNKNOWN

None in the 63-entry opening snapshot. This means every entry can be placed relative to TECH-001 from recorded snapshots; it does not independently validate the business correctness or authorship of pre-existing work.

## Why no commit was created

- A file-only TECH commit would omit required production gates in all 10 `MIXED` files.
- A complete implementation commit would necessarily absorb pre-existing page, data, booking, analytics, and presentation work.
- Three required mixed files were already untracked before TECH-001, so Git cannot provide a safe pre-TECH version for selective staging.
- Manual reconstruction in the active workspace would violate the preservation constraint and could alter valid pre-existing work.

Result: no files were staged and no commit was created.

## Safe clean-baseline options — proposal only

### Option A — Owner-approved recovered baseline branch

After owner review, create a dedicated recovery branch from current `HEAD`, commit the complete validated working tree as a clearly named recovered baseline, and retain this manifest in that commit. Do not describe it as a clean historical attribution of TECH-001.

- Benefits: lowest risk of losing the current working implementation; immediately gives future sprints a clean, reversible baseline.
- Risks: the baseline commit intentionally combines pre-existing and TECH-001 work; granular historical attribution remains in this manifest rather than Git commits.
- Required guardrails: explicit owner approval, final full diff review, validation rerun, and no unrelated new work before the baseline is sealed.

### Option B — Reconstruct on a new branch/worktree from `4214f65`

Leave the present workspace untouched. In a separate worktree/branch, port reviewed `PRE_EXISTING` batches first, then TECH-only files, then manually reconstruct the 10 mixed integrations with validation after each batch.

- Benefits: best attainable commit-level attribution and reviewability.
- Risks: highest time cost; manual reconstruction can omit behavior; the three untracked mixed files still require human judgment because no pre-TECH Git base exists.
- Required guardrails: file-by-file owner review, rendered-output comparison, sitemap comparison, and all current tests/build checks before switching branches.

### Option C — Recover an authoritative pre-TECH snapshot, then three-way split

If an external copy, editor history, deployment artifact, or prior branch exists from immediately before TECH-001, use it only in a separate worktree to create a real three-way comparison: committed `HEAD`, pre-TECH snapshot, and current workspace.

- Benefits: strongest possible attribution for the 10 mixed files; can produce distinct pre-existing and TECH commits without guessing.
- Risks: blocked unless the snapshot is complete and trustworthy; deployment output may not preserve source exactly; timestamp mismatch can create false attribution.
- Required guardrails: checksum/source verification and no replacement of files in the active workspace.

## Recommendation

Choose **Option A** if no authoritative pre-TECH source snapshot exists. It is the lowest-risk way to preserve the already validated site and establish a clean rollback point for future sprints, provided the owner explicitly accepts that the recovery commit is a consolidated baseline rather than historical attribution.

Choose **Option C** instead if a trustworthy pre-TECH source snapshot can be supplied. Option B should be reserved for cases where commit-level separation is worth the reconstruction cost and the owner can review the mixed files.

OPS-001 does not execute any option.

## Validation after forensic documentation

OPS-001 changed documentation only. Validation was rerun against the unchanged implementation:

| Check | Result |
|---|---|
| `npm run typecheck` | PASS |
| `npm run build` | PASS — 49/49 static pages generated; 18 route paths and 13 guide paths remain in the build. |
| `node --test tests/seo-governance.test.mjs` | PASS — 8/8 tests. |
| `git diff --check` | PASS |
| Staged diff | Empty |

Final expanded Git status after adding this manifest: 24 tracked modified files plus 40 untracked files, for 64 file entries. The one-entry increase from the opening snapshot is `WORKSPACE_STATE.md`; no website code/content file was added or changed by OPS-001.

## OPS-001 artifacts

The opening 63-entry classification above intentionally excludes the manifest that records it. OPS-001 adds only:

- `WORKSPACE_STATE.md` — this forensic manifest;
- documentation-only updates to `SEO_STATUS.md` reflecting TECH-001 approval, DATA_REQUIRED price fallbacks, and OPS-001 REVIEW.

No website code or content file is changed by OPS-001.
