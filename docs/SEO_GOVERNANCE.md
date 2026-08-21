# SEO Publication Governance

`TECH-001` separates raw route/content data from publishable SEO assets. A record in `data/routes.ts` or `data/guide-posts.ts` does not create a production URL by itself.

## Publication flow

```text
Raw data
  → explicit Asset Registry record
  → REVIEW
  → Strategy approval
  → APPROVED
  → explicit publish commit
  → PUBLISHED
  → production render + index + sitemap + automatic discovery
```

Only `status: "PUBLISHED"` passes the production gate. `APPROVED` is intentionally non-public.

## Key files

- `data/seo/asset-registry.mjs`: explicit registry of publishable SEO assets.
- `data/seo/types.ts`: actual Asset Registry and evidence types.
- `data/seo/published-content.ts`: joins published assets to raw route/guide data.
- `data/seo/route-evidence.mjs`: evidence records for important route facts.
- `data/seo/cluster-graph.mjs`: explicit Phase 1 parent/child/supporting relationships.
- `lib/seo/publication.mjs`: shared publication and public-evidence rules.
- `tests/seo-governance.test.mjs`: governance tests A–F and migration counts.

## How to add SEO data

1. Add or update operational data in the appropriate raw data source.
2. Do not add a registry record merely to make the route visible.
3. Add evidence for each important fact in `routeEvidenceByDataKey`:
   - `value`
   - `status`: `VERIFIED`, `PUBLIC_SOURCE`, `ESTIMATE`, or `UNKNOWN`
   - `sourceType`
   - `sourceRef`
   - `verifiedAt`
   - `verifiedBy`
   - `notes`
4. Never promote `UNKNOWN` to `ESTIMATE`, or `ESTIMATE` to `VERIFIED`, without a deliberate evidence update.

Raw data addition alone must leave production static params, sitemap, route lookup, and automatic discovery unchanged.

## How to create an SEO asset

1. Receive an approved Execution Brief with an asset ID, intent, cluster, and required URL.
2. Add one explicit record to `data/seo/asset-registry.mjs` with a non-public status such as `BACKLOG`, `DATA_REQUIRED`, or `READY`.
3. Use only `CLUSTER-A`, `CLUSTER-B`, or `CLUSTER-C` for new Phase 1 work. `OTHER` is frozen.
4. Set `legacy: false` for new approved Phase 1 assets.
5. Set `backfilledExisting: false`; this activates governed facts and disables distance-based price fallbacks.
6. Add explicit cluster relationships by asset ID. Do not infer SEO relationships from array order.

## How to move an asset to REVIEW

1. Confirm the asset has unique value, correct intent, complete metadata, explicit internal links, and required evidence.
2. Change only its registry status to `REVIEW`.
3. Run:

```bash
node --test tests/seo-governance.test.mjs
npm run typecheck
npm run lint
npm run build
```

4. A `REVIEW` asset must still return no production page and must not enter the sitemap.

## How publication is explicitly activated

1. Strategy Lead returns `APPROVED`.
2. Change the registry status to `APPROVED`. This still does not publish the URL.
3. Perform a separate, explicit publish action/commit that changes `APPROVED` to `PUBLISHED` and sets the real `publishedAt` date.
4. Re-run governance tests, build, the local SEO crawl, and the 38-URL regression baseline.
5. Verify the new URL is intentionally present in static params, the sitemap, automatic discovery, and the correct cluster graph.
6. Update `SEO_STATUS.md` and send the required handoff.

## Price rule for new assets

New assets use `priceFallbackPolicy: "GOVERNED"`. If no evidence-approved price exists, public components must use:

> Liên hệ xác nhận giá theo điểm đón/trả.

They must not derive a numeric public price from distance. Existing backfilled pages retain their current output during `TECH-001`; their unresolved fallbacks are documented in `UNVERIFIED_PRICE_INVENTORY.md` for the next owner/strategy task.

