# SEO Monitoring Baseline — MON-001A

Status: `REVIEW`

Baseline captured: `2026-08-22 21:35 +07:00` (Asia/Ho_Chi_Minh)

Search Console property: `sc-domain:xeghepphongcach.com`

Property verification: `VERIFIED` by DNS TXT on 2026-08-22. The verification record must remain in Vercel DNS.

## Interpretation rule

Search Console is still processing the new property. `PENDING_GSC_DATA` means Google has not made performance data available yet. It does not mean zero impressions, clicks, CTR, or position.

## Monitoring baseline

| Asset | URL | Index Status | Last Crawl | Canonical | Impressions | Clicks | CTR | Position | Notes |
|---|---|---|---|---|---|---|---|---|---|
| MP-003 | https://xeghepphongcach.com/xe-ghep-hai-duong-hai-phong | `INDEXED` — URL is on Google | 2026-08-22 18:11:51 (GSC display) | User: inspected URL; Google: inspected URL | `PENDING_GSC_DATA` | `PENDING_GSC_DATA` | `PENDING_GSC_DATA` | `PENDING_GSC_DATA` | Mobile Googlebot; crawl allowed; fetch successful; indexing allowed. No indexing request sent because the page is already indexed. |
| MP-005 | https://xeghepphongcach.com/xe-ghep-hai-duong-quang-ninh | `INDEXED` — URL is on Google | 2026-08-22 11:04:53 (GSC display) | User: inspected URL; Google: inspected URL | `PENDING_GSC_DATA` | `PENDING_GSC_DATA` | `PENDING_GSC_DATA` | `PENDING_GSC_DATA` | Mobile Googlebot; crawl allowed; fetch successful; indexing allowed. Pre-submit inspection showed a temporary sitemap-processing message; the sitemap was subsequently accepted successfully. No indexing request sent. |
| CP-003 | https://xeghepphongcach.com/blog/di-hai-duong-hai-phong-bang-phuong-tien-gi | `NOT_INDEXED_CRAWLED` — crawled, currently not indexed | 2026-08-22 21:21:35 (GSC display) | User: inspected URL; Google: inspected URL | `PENDING_GSC_DATA` | `PENDING_GSC_DATA` | `PENDING_GSC_DATA` | `PENDING_GSC_DATA` | Crawl allowed; fetch successful; indexing allowed; referring sitemap and MP-003 detected. One indexing request accepted on 2026-08-22. |
| CP-002 | https://xeghepphongcach.com/blog/nhung-chuyen-xe-tu-hai-duong-di-quang-ninh | `NOT_INDEXED_DISCOVERED` — discovered, currently not indexed | `NOT_APPLICABLE` — not crawled at inspection time | `NOT_APPLICABLE` — not crawled at inspection time | `PENDING_GSC_DATA` | `PENDING_GSC_DATA` | `PENDING_GSC_DATA` | `PENDING_GSC_DATA` | Referring sitemap and CP-003 detected. One indexing request accepted on 2026-08-22. |

## Sitemap baseline

| Field | Value |
|---|---|
| Sitemap | `https://xeghepphongcach.com/sitemap.xml` |
| Submission | `SUCCESS` — submitted once on 2026-08-22 |
| Last read | 2026-08-22 |
| Status | `SUCCESS` |
| Discovered pages | 38 |
| Discovered videos | 0 |
| New sitemap created | No |

## Indexing requests

| Asset | Request status | Timestamp rule |
|---|---|---|
| MP-003 | `NOT_REQUESTED_ALREADY_INDEXED` | No request on 2026-08-22 |
| MP-005 | `NOT_REQUESTED_ALREADY_INDEXED` | No request on 2026-08-22 |
| CP-003 | `REQUEST_ACCEPTED` — added to Google's priority crawl queue | One request on 2026-08-22; do not repeat today |
| CP-002 | `REQUEST_ACCEPTED` — added to Google's priority crawl queue | One request on 2026-08-22; do not repeat today |

## Query watchlist

The watchlist checks whether Google begins associating each asset with its intended search need. It is not a ranking promise and is not a reason to create another URL.

### MP-003 — commercial owner

- xe ghép Hải Dương Hải Phòng
- xe Hải Dương Hải Phòng
- giá xe Hải Dương Hải Phòng
- giá xe ghép Hải Dương Hải Phòng
- bao xe Hải Dương Hải Phòng
- Hải Phòng Hải Dương
- xe Hải Phòng về Hải Dương
- xe đón tận nơi Hải Dương Hải Phòng

### MP-005 — commercial owner

- xe ghép Hải Dương Quảng Ninh
- xe Hải Dương Quảng Ninh
- giá xe Hải Dương Quảng Ninh
- giá xe ghép Hải Dương Quảng Ninh
- bao xe Hải Dương Quảng Ninh
- Quảng Ninh Hải Dương
- xe Quảng Ninh về Hải Dương
- xe đón tận nơi Hải Dương Quảng Ninh

### CP-003 — informational comparison support

- đi Hải Dương Hải Phòng bằng phương tiện gì
- từ Hải Dương đi Hải Phòng bằng gì
- Hải Dương Hải Phòng đi xe gì
- xe khách hay xe ghép Hải Dương Hải Phòng

### CP-002 — informational comparison support

- đi Hải Dương Quảng Ninh bằng phương tiện gì
- từ Hải Dương đi Quảng Ninh bằng gì
- các cách đi Hải Dương Quảng Ninh
- xe khách hay xe ghép Hải Dương Quảng Ninh

Commercial price, booking, charter, reverse-direction and door-to-door queries remain owned by MP-003 and MP-005. CP-002 and CP-003 are monitored for informational comparison modifiers only.

## Monitoring checkpoints

| Checkpoint | Date | Required review |
|---|---|---|
| T+1 day | 2026-08-23 | Recheck indexation for all four URLs and confirm sitemap remains successful. Do not treat pending performance data as zero. |
| T+7 days | 2026-08-29 | Review page/query footprint, impressions, clicks, CTR and position when available; test whether Google assigns commercial intent to the money pages and informational intent to the comparison pages. |
| T+14 days | 2026-09-05 | Review ranking/opportunity evidence and cannibalization before proposing any Wave 3 asset or releasing SC-001 from `HOLD`. |

## Technical assessment

No `TECHNICAL_BLOCKER` was found. Inspected pages are accessible, crawlable and indexable where Google has crawled them. User canonicals match the inspected URLs; Google selected the inspected URLs for the three crawled pages. The two supporting-page index states are monitoring conditions, not evidence of a technical block.

Performance data status: `PENDING_GSC_DATA`.

MON-001A stops at `REVIEW`. No content, URL, metadata, schema or internal-link changes were made.
