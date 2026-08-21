# RES-002 — Competitor Map Phase 1

Checked: 2026-08-21 (Asia/Ho_Chi_Minh)

Scope: Hải Dương ⇄ Hải Phòng, Hải Dương ⇄ Quảng Ninh, Hải Phòng ⇄ Quảng Ninh, and Hải Dương ⇄ Cát Bi.

## How the set was selected

The ten domains below have the highest query-source occurrence count in the 64-query structured sample. A count means that one or more pages from the domain were recorded for that query. It is not traffic, market share, rank stability, or an SEO-tool visibility estimate.

| Rank | Domain | Query occurrences | Main page types | Route/endpoint coverage | Observed price/depth | Freshness signal | Exact-match/template/internal-link pattern | Trust signals | Strengths | Weaknesses |
|---:|---|---:|---|---|---|---|---|---|---|---|
| 1 | [ghephaiduong.com](https://www.ghephaiduong.com/) | 42 | Operator home / multi-route landing | HD–HP, HD–QN and a broad QN endpoint list | Price tables and endpoint values; high answer density | Old COVID/2023-era copy visible | One broad keyword-led surface; endpoint rows rather than dedicated endpoint architecture; internal-link depth not verified | Phone/contact and operational claims | Recurs across most relevant commercial, price and endpoint variants | Stale copy; pricing provenance unclear; broad page must serve many intents |
| 2 | [motortrip.vn](https://motortrip.vn/dich-vu/xe-ghep-hai-duong-hai-phong) | 18 | Editorial/operator comparison | Exact HD–HP and HP–QN corridor pages | Operator lists, prices, tables; deep editorial format | 2026/recent signals visible in sampled pages | Exact corridor URLs and repeatable comparison template; related-site linking visible at site level | Named operators and structured comparison | Fresh, comprehensive, matches “xe nào/nhà xe nào” intent | Third-party facts can age; lead path is indirect; not first-party operator evidence |
| 3 | [vexere.com](https://www.vexere.com/vi-VN/ve-xe-khach-tu-quang-ninh-di-hai-duong-149t1261.html) | 16 | Aggregator inventory | Reverse corridor plus Đông Triều, Bãi Cháy and Cẩm Phả endpoint pages | Live-looking fare/schedule tables and booking utility | Inventory-style pages appear maintained | Exact origin/destination URL templates and dense route graph | Marketplace inventory, operators, booking interface | Strong authority and endpoint coverage; satisfies transactional comparison | Focuses scheduled coach/limousine inventory rather than door-to-door xe ghép; endpoint facts are not Phong facts |
| 4 | [xeghephaiduongdicactinh24h.com](https://xeghephaiduongdicactinh24h.com/hai-duong-quang-ninh/) | 16 | Operator route landing | HD–QN with Hạ Long, Vân Đồn and Móng Cái mentions | Prices and broad service claims | Date/freshness unclear | Exact corridor slug; endpoints consolidated on parent; internal-link depth not verified | Direct operator/contact framing | High route specificity and commercial relevance | Broad endpoint claims; evidence and freshness are not transparent |
| 5 | [taxihaiduong24h.net](https://www.taxihaiduong24h.net/xe-ghep-hai-phong-hai-duong/) | 14 | Operator landing | Exact HP–HD reverse and Hạ Long–HD endpoint | Price tables, FAQs and dense commercial answers | Recent-looking pages | Exact-match route URLs with repeatable landing template and cross-route navigation | Phone/contact, FAQ, detailed service sections | Strong exact intent coverage; good answer density | Templated/overlapping claims; differentiation and factual provenance require scrutiny |
| 6 | [motogo.vn](https://motogo.vn/xe-hai-phong-quang-ninh/) | 8 | Editorial comparison | HP–QN and HP–Hạ Long limousine | Tables, operator lists, trip planning | Recent signals visible | Dedicated corridor/endpoint articles with editorial internal linking | Named operators and detailed comparison | Strong informational/comparison coverage and freshness | Competitive content depth; not a first-party service source |
| 7 | [nhaxehoangcong.com](https://www.nhaxehoangcong.com/) | 7 | Operator home / booking | HP–QN and longer QN destinations | Fare/contact information; moderate depth | Unclear | Operator-led route architecture; exact endpoint depth not fully audited | Recognizable operator and booking/contact surface | Strong business fit for scheduled-route queries | Different service model from xe ghép; page-level freshness and endpoint depth unclear |
| 8 | [xeghephaiduonghaiphong.com](https://xeghephaiduonghaiphong.com/) | 7 | Exact-match operator home / price page | HD–HP and Cát Bi mentions | Separate price page and commercial details | 2023 signal visible on price content | Exact-match domain, corridor home and `/bang-gia/`; basic related navigation | Direct contact/operator identity | Strong keyword relevance and clear fare intent coverage | Visible age; pricing scope/provenance unclear; limited differentiated evidence |
| 9 | [busvietnam.net](https://busvietnam.net/xe-ghep/xe-ghep-hai-duong-quang-ninh.html) | 6 | Editorial list | Exact HD–QN corridor | Price/operator summary; moderate depth | Old content visible | Exact corridor article in a repeatable xe-ghép directory | Named services/operators | Exact intent and list format | Stale content and limited first-party trust; weaker utility than live aggregators |
| 10 | [redbus.vn](https://www.redbus.vn/ve-xe-khach/tuyen-duong/hai-duong-di-hai-phong) | 6 | Aggregator inventory | HD–HP and HP–Hạ Long | Fare/schedule tables and booking utility | Live-inventory pattern | Exact route URL templates and large route graph | Marketplace/booking interface | Strong transactional utility and route coverage | Primarily scheduled buses; weak fit for door-to-door shared/private ride specifics |

Counts and source metadata are generated from [`data/seo/research/res-002-serp.mjs`](data/seo/research/res-002-serp.mjs). Domains outside the top ten still matter for specific battles, notably [xeghephaiphong.vn](https://xeghephaiphong.vn/), [thuexehaiphong.net](https://www.thuexehaiphong.net/xe-ghep), [Traveloka’s Hải Phòng–Hạ Long inventory](https://www.traveloka.com/vi-vn/bus-and-shuttle/route/ve-xe-hai-phong-city.ha-long-city), and [Hoàng Phú’s endpoint booking page](https://xehoangphu.vn/dat-ve/dat-xe-hai-phong-ha-long/).

## Repeatable competitor patterns

1. **Price-table pattern:** exact route operators routinely expose prices and tables. Phong can compete only with Owner-verified values and clear scope—not copied or inferred endpoint numbers.
2. **Exact-match route pattern:** operators use exact domains/slugs, while aggregators generate origin/destination pages at scale. This supports strong parent-route optimization but not automatic one-keyword-one-page creation.
3. **List/comparison pattern:** MotorTrip, Motogo and older directories capture “xe nào/nhà xe nào” intent. Existing CP assets should own this intent rather than money pages trying to rank as operator lists.
4. **Inventory pattern:** Vexere, redBus and Traveloka dominate schedule/fare comparison where they have endpoint inventory. A Phong page should not imitate an inventory marketplace; it should answer door-to-door, two-way, shared/private, payment and booking details with evidence.
5. **Endpoint pattern:** Hạ Long has a genuinely independent SERP. Other QN endpoints have uneven evidence, often one aggregator or broad parent-route mention.

## Limits

- Frequency was calculated from the bounded query sample; rank positions were not monitored longitudinally.
- Internal-link and template observations are limited to visible sampled surfaces; no private analytics or full-site crawl was available.
- Competitor prices and service claims are market evidence only and must never enter the Route Knowledge Base as Phong facts.
- No fabricated Domain Authority, traffic, search volume, or conversion estimate is used.
