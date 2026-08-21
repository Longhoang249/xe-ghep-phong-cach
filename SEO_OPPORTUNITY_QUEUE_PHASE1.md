# RES-002 — SEO Opportunity Queue Phase 1

Checked: 2026-08-21

## Internal prioritization model

`Opportunity score = 20 × (25% Search Evidence + 25% Commercial Intent + 20% SERP Weakness + 20% Business Fit + 10% Data Readiness)`

Each input is scored 0–5 from the bounded SERP sample and current governed business truth. The 0–100 result is an internal ordering device, **not** a Google score, search-volume estimate, traffic forecast or conversion forecast. Endpoint candidates cannot receive Business Fit 5/5 while service is unconfirmed. Search volume is `UNKNOWN` for every row.

## Prioritized opportunities

| Rank | Query / intent | Cluster | Score | Asset recommendation | Existing / new | Evidence | Competition | Business fit | Data status |
|---:|---|---|---:|---|---|---|---|---|---|
| 1 | giá xe ghép Hải Dương Quảng Ninh | B | 94 | Upgrade MP-005 with verified fare scope and “Liên hệ” for unresolved endpoint values | EXISTING_PAGE | Exact operator/price surfaces recur; several are stale or broad | Weakness 4/5 | Confirmed corridor | Parent price verified; endpoints unconfirmed |
| 2 | xe ghép Hải Dương Quảng Ninh | B | 92 | Make MP-005 the definitive bidirectional parent | EXISTING_PAGE | [GhepHaiDuong](https://www.ghephaiduong.com/), [BusVietnam](https://busvietnam.net/xe-ghep/xe-ghep-hai-duong-quang-ninh.html), [route operator](https://xeghephaiduongdicactinh24h.com/hai-duong-quang-ninh/) | Weakness 4/5 | Confirmed corridor | Parent facts usable; endpoint facts unavailable |
| 3 | xe Hải Dương Quảng Ninh bao nhiêu tiền | B | 90 | Answer in MP-005; distinguish parent fare from endpoint quote | EXISTING_PAGE | Price intent repeatedly appears on operator and aggregator surfaces | Weakness 3/5 | Confirmed corridor | Endpoint fare scope required |
| 4 | giá xe ghép Hải Dương Hải Phòng | A | 88 | Upgrade MP-003 price table and fare definitions | EXISTING_PAGE | [Exact price page](https://xeghephaiduonghaiphong.com/bang-gia/), operator and fresh comparison pages | Weakness 2/5 | Confirmed corridor | Verified shared/private values available |
| 5 | xe Hải Dương sân bay Cát Bi | A | 88 | Upgrade MP-004 as bidirectional airport money page | EXISTING_PAGE | [Exact airport price page](https://taxihaiduong.net.vn/bang-gia/hai-duong-san-bay-cat-bi), airport-transfer competitors | Weakness 3/5 | Confirmed route | Airport rules still required |
| 6 | bao xe Hải Dương Hải Phòng | A | 87 | Add verified 4/7-seat charter scope to MP-003 | EXISTING_PAGE | Shared and taxi/private pages overlap | Weakness 3/5 | Confirmed corridor | Verified charter values available |
| 7 | xe ghép Hải Dương Hải Phòng | A | 86 | Strengthen MP-003; serve both directions | EXISTING_PAGE | Fresh [MotorTrip comparison](https://motortrip.vn/dich-vu/xe-ghep-hai-duong-hai-phong) plus exact operators | Weakness 2/5 | Confirmed corridor | Core service facts ready |
| 8 | xe Hải Phòng Hải Dương | A | 86 | Consolidate reverse intent into MP-003, not a new URL | MERGE_WITH_PARENT | [Dedicated reverse competitor](https://www.taxihaiduong24h.net/xe-ghep-hai-phong-hai-duong/) exists, but intent remains same service | Weakness 2/5 | Confirmed corridor | Core service facts ready |
| 9 | giá xe ghép Hải Phòng Quảng Ninh | C | 86 | Upgrade MP-006 with parent fare scope and endpoint caveat | EXISTING_PAGE | Fresh comparison/operator pages | Weakness 2/5 | Confirmed corridor | Endpoints unconfirmed |
| 10 | xe ghép Hải Phòng Quảng Ninh | C | 84 | Strengthen MP-006 parent route | EXISTING_PAGE | [MotorTrip](https://motortrip.vn/dich-vu/xe-ghep-hai-phong-quang-ninh), [Motogo](https://motogo.vn/xe-hai-phong-quang-ninh/), local operators | Weakness 2/5 | Confirmed corridor | Parent facts usable |
| 11 | xe Hải Dương Quảng Ninh đón tận nhà | B | 78 | Place verified parent claim on MP-005; do not imply every endpoint | EXISTING_PAGE | Competitor claims are common but provenance is weak | Weakness 3/5 | Confirmed parent | Endpoint scope unconfirmed |
| 12 | nhà xe Hải Phòng Quảng Ninh | C | 77 | Upgrade CP-004 for comparison/choice intent | SUPPORT_CONTENT | Fresh lists and operators indicate a distinct evaluation intent | Weakness 2/5 | Confirmed corridor | Public-source operator details required at writing time |
| 13 | nhà xe Hải Dương Quảng Ninh | B | 76 | Upgrade CP-002; link to MP-005 | SUPPORT_CONTENT | Exact list pages exist but freshness is uneven | Weakness 3/5 | Confirmed corridor | Public-source comparison evidence required |
| 14 | xe Hải Dương Hạ Long | B | 76 | Conditional bidirectional endpoint landing page | NEW_PAGE_CANDIDATE | Dedicated competitor + recurring endpoint mentions | Weakness 3/5 | Candidate only (3/5 cap) | `MARKET_CANDIDATE — SERVICE UNCONFIRMED` |
| 15 | Hải Dương Hải Phòng đi bằng gì | A | 70 | Upgrade CP-003, preserving MP-003’s booking intent | SUPPORT_CONTENT | Aggregator/list/operator mix | Weakness 3/5 | Confirmed corridor | Mode facts need current sources |
| 16 | đi sân bay Cát Bi từ Hải Dương | A | 70 | Upgrade CP-007 as decision/support content | SUPPORT_CONTENT | Airport info and commercial results are split | Weakness 3/5 | Confirmed route | Airport rules required |
| 17 | xe Hải Dương Vân Đồn | B | 68 | Conditional endpoint backlog after Hạ Long | NEW_PAGE_BACKLOG | [Dedicated list](https://limody.vn/xe-hai-duong-van-don/) + repeated operator coverage | Weakness 3/5 | Candidate only | Service/fare/areas unconfirmed |
| 18 | xe Hải Dương Đông Triều | B | 68 | Conditional endpoint backlog | NEW_PAGE_BACKLOG | [Dedicated aggregator inventory](https://vexere.com/vi-VN/ve-xe-khach-tu-hai-duong-di-dong-trieu-quang-ninh-126t26111.html) | Weakness 3/5 | Candidate only | Service/fare/areas unconfirmed |
| 19 | xe Hải Dương Bãi Cháy | B | 68 | Merge with Hạ Long unless operations/SERP prove separate value | NEW_PAGE_BACKLOG / MERGE CHECK | Dedicated aggregator page plus route-reference evidence | Weakness 3/5 | Candidate only | Hạ Long/Bãi Cháy distinction required |
| 20 | xe Hải Dương Cẩm Phả | B | 68 | Conditional endpoint backlog | NEW_PAGE_BACKLOG | Exact endpoint inventory, strongest around Chí Linh | Weakness 3/5 | Candidate only | Coverage scope unconfirmed |
| 21 | xe Hải Phòng Hạ Long | C | 68 | Conditional strategic endpoint landing page | NEW_PAGE_CANDIDATE | Traveloka, redBus, Hoàng Phú, Dailyve and specialist operators | Weakness 1/5 | Candidate only | Service/fare/areas unconfirmed |
| 22 | xe Hải Dương Móng Cái | B | 68 | Research/owner backlog, not Sprint 001 by default | NEW_PAGE_BACKLOG | Dedicated route mentions and fixed-route references | Weakness 3/5 | Candidate only | Long-distance service unconfirmed |
| 23 | xe Hải Phòng Móng Cái | C | 64 | Research/owner backlog | NEW_PAGE_BACKLOG | [Dedicated current article](https://sonhangtravel.com/blog/xe-hai-phong-di-mong-cai-nha-xe-so-dien-thoai-diem-don) and operator results | Weakness 2/5 | Candidate only | Service unconfirmed |
| 24 | xe Hải Dương Uông Bí | B | 64 | Keep within MP-005 until stronger independent evidence | MERGE_WITH_PARENT | Mostly broad operator/corridor results | Weakness 4/5 | Candidate only | Service unconfirmed |
| 25 | gửi hàng Hải Dương Hải Phòng theo chuyến | A | 43 | Freeze SC-002; no new/expanded content | NO_ACTION | Some competitor/operator evidence | Weakness 3/5 | 0/5 | Business availability unverified |
| 26 | xe Hải Dương Quảng Yên | B | 54 | Do not create URL | NO_ACTION | Almost no dedicated result evidence | Weakness 4/5 | Candidate only | Service unconfirmed |
| 27 | xe Hải Dương Ao Tiên | B | 54 | Do not create standalone URL; treat only with Vân Đồn if proven | NO_ACTION | No convincing standalone SERP | Weakness 4/5 | Candidate only | Service unconfirmed |

## Bucket decisions

### Quick wins

- MP-005: parent Hải Dương ⇄ Quảng Ninh commercial/price intent.
- MP-003: verified price, charter and door-to-door answers on the existing bidirectional page.
- CP-003: strengthen mode-choice intent and reinforce MP-003 without duplicating booking intent.

### Strategic battles

- MP-006 / CP-004: Hải Phòng ⇄ Quảng Ninh is crowded by operators, lists and aggregators.
- MP-004 / CP-007: Cát Bi has exact commercial competition; airport operating rules gate execution.
- Conditional Hải Phòng ⇄ Hạ Long endpoint: clear independent demand, very strong competition.

### Long-tail saturation backlog

- Hải Dương ⇄ Hạ Long first, then consider Đông Triều, Bãi Cháy, Cẩm Phả, Vân Đồn and Móng Cái only after Owner verification.
- Do not split reverse directions; make approved route/endpoint pages bidirectional.

### Do not pursue

- Standalone Quảng Yên or Ao Tiên pages from current evidence.
- Standalone Uông Bí until independent evidence improves.
- Parcel/gửi hàng expansion while the business fact is unverified.
- Any “Hải Dương → every district” page factory.

## URL and cannibalization rules

- MP-003 owns both `Hải Dương → Hải Phòng` and `Hải Phòng → Hải Dương` commercial/price intent.
- MP-005 and MP-006 own broad bidirectional corridor intent. Endpoint URLs may exist only when service truth and distinct SERP demand are both established.
- CP-002/003/004 own comparison, “đi bằng gì”, and “nhà xe nào” intent; they should link to—not restate—the corresponding money-page booking proposition.
- CP-007 owns airport mode-choice intent; MP-004 owns airport booking/price intent.
- Hạ Long and Bãi Cháy must remain one candidate until operational geography and SERP differentiation justify a split.
- SC-004’s reverse-direction framing overlaps MP-003. Consider consolidation/redirect only in a separately approved implementation task; RES-002 makes no URL change.
