# TASK 4B.1 — GSC / INDEXING AUDIT

**Audit date:** 11 September 2026  
**Production:** https://xeghepphongcach.com  
**Scope:** Quảng Ninh pillar and four approved canonical endpoints only. No pages, pricing, content, backlinks, Facebook distribution or indexing requests were created.

## Safety / current state

The original local checkout is on `65c7d27` with untracked `seo/` content, while `origin/main` is `b24f906`. It was left untouched. This handoff was prepared from a clean worktree based on `origin/main`; no blind merge was performed.

## GSC access

**GSC ACCESS: YES** — audited property: `sc-domain:xeghepphongcach.com`.

## Robots

**PASS** — `https://xeghepphongcach.com/robots.txt` returned `200` and currently declares:

```text
User-Agent: *
Allow: /
Disallow: /admin
Disallow: /api
Host: https://xeghepphongcach.com
Sitemap: https://xeghepphongcach.com/sitemap.xml
```

Googlebot and `/xe-ghep-*` routes are not blocked.

## Sitemap

| Field | Result |
| --- | --- |
| Public URL | `https://xeghepphongcach.com/sitemap.xml` |
| Public response | `200`, valid `application/xml` |
| Current public contents | 42 HTTPS URLs; no duplicate `<loc>` entries |
| Target inclusion | Every one of the five canonical URLs appears exactly once |
| GSC submitted sitemap | `https://xeghepphongcach.com/sitemap.xml` |
| GSC status | Success |
| GSC submitted | 06 Sep 2026 |
| GSC last read | 08 Sep 2026 |
| GSC discovered URLs | 39 |

The GSC read is older than the Task 4A production release and does not yet reflect the current 42-URL sitemap. The public sitemap itself is healthy; this is indexing-discovery lag, not a verified sitemap/code defect.

## Public technical audit

Every target returned `200` with no redirect, self-canonical, `meta robots="index, follow"`, no `X-Robots-Tag`, a page title, an H1, and valid SSR-rendered JSON-LD (`WebPage`, `BreadcrumbList`, `Service`; Uông Bí also has `FAQPage`). No numeric `Offer.price` is emitted for governed range/contact pricing.

| URL | HTTP | Canonical / robots | Title / H1 | Structured data |
| --- | --- | --- | --- | --- |
| `/xe-ghep-hai-duong-quang-ninh` | 200 | Self / index, follow | Present / present | WebPage, BreadcrumbList, Service |
| `/xe-ghep-hai-duong-uong-bi` | 200 | Self / index, follow | Present / present | WebPage, BreadcrumbList, Service, FAQPage |
| `/xe-ghep-hai-duong-ha-long` | 200 | Self / index, follow | Present / present | WebPage, BreadcrumbList, Service |
| `/xe-ghep-hai-duong-cam-pha` | 200 | Self / index, follow | Present / present | WebPage, BreadcrumbList, Service |
| `/xe-ghep-hai-duong-van-don` | 200 | Self / index, follow | Present / present | WebPage, BreadcrumbList, Service |

## Internal discovery audit

**PASS — 0/5 orphaned.** The Quảng Ninh pillar contains direct canonical hrefs to Uông Bí, Hạ Long, Cẩm Phả and Vân Đồn. Each endpoint contains a canonical href back to the pillar; contextual sibling links use existing canonical routes. No target link resolves through a redirect or an unapproved synonym URL.

## Cluster indexing matrix

| URL | GSC status | User canonical | Google canonical | Last crawl | Sitemap / discovery | Internal discovery | Action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `https://xeghepphongcach.com/xe-ghep-hai-duong-quang-ninh` | **INDEXED_OK** | Self | URL inspected (self) | 06 Sep 2026 00:54:51, Googlebot Smartphone; fetch success | `/sitemap.xml`; referring page `/` | Pillar | NONE |
| `https://xeghepphongcach.com/xe-ghep-hai-duong-uong-bi` | **UNKNOWN_TO_GOOGLE** | Not yet available to GSC | Not applicable | Not applicable | No sitemap/referrer recorded yet | Pillar → endpoint; endpoint → pillar | REQUEST_INDEXING |
| `https://xeghepphongcach.com/xe-ghep-hai-duong-ha-long` | **INDEXED_OK** | Self | URL inspected (self) | 26 Aug 2026 00:42:54, Googlebot Smartphone; fetch success | `/sitemap.xml`; URL Inspection displayed temporary sitemap processing warning | Pillar → endpoint; endpoint → pillar | MONITOR |
| `https://xeghepphongcach.com/xe-ghep-hai-duong-cam-pha` | **UNKNOWN_TO_GOOGLE** | Not yet available to GSC | Not applicable | Not applicable | No sitemap/referrer recorded yet | Pillar → endpoint; endpoint → pillar | REQUEST_INDEXING |
| `https://xeghepphongcach.com/xe-ghep-hai-duong-van-don` | **UNKNOWN_TO_GOOGLE** | Not yet available to GSC | Not applicable | No crawl | No sitemap/referrer recorded yet | Pillar → endpoint; endpoint → pillar | REQUEST_INDEXING |

For both indexed URLs, GSC reports crawling allowed, indexing allowed and a successful page fetch. The Google-selected canonical field resolves to the inspected URL, matching the user-declared self-canonical. There is **no canonical mismatch**.

The Hạ Long URL Inspection's temporary sitemap-processing message is a monitoring warning only: the sitemap-level GSC report is `Success`, the live sitemap is valid, and the URL is already indexed with the correct canonical.

## GSC performance (supporting evidence only)

Available GSC reporting window is 21 Aug–08 Sep 2026 (updated 9 hours before audit): site total `1` click, `65` impressions, `1.5%` CTR and average position `22.6`.

- Hạ Long: `0` clicks / `1` impression in the available page table.
- Pillar, Uông Bí, Cẩm Phả and Vân Đồn: no page-level rows or query data in the available window (record as **ZERO / NO DATA**, not a ranking conclusion).

This reporting window ends before the Task 4A release, so it cannot measure the three new/updated endpoint URLs fairly.

## Totals

| Measure | Result |
| --- | --- |
| Indexed | **2/5** |
| READY_TO_REQUEST_INDEXING | **3/5** — Uông Bí, Cẩm Phả, Vân Đồn |
| Technical fix required | **0/5** |
| Canonical mismatch | **0/5** |
| Orphan | **0/5** |
| Missing from current public sitemap | **0/5** |

## Recommended next action

**A. REQUEST INDEXING NOW** — request exactly these technically ready, non-indexed URLs in GSC:

1. `https://xeghepphongcach.com/xe-ghep-hai-duong-uong-bi`
2. `https://xeghepphongcach.com/xe-ghep-hai-duong-cam-pha`
3. `https://xeghepphongcach.com/xe-ghep-hai-duong-van-don`

No request was submitted in Task 4B.1 because this task is audit-only. Do not request the two URLs already indexed. Monitor the GSC sitemap reread and Hạ Long's URL-level temporary sitemap message; no production change is warranted today.
