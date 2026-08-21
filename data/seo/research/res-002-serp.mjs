/**
 * RES-002 — Phase 1 SERP research snapshot.
 *
 * This is a bounded market-research sample, not a rank tracker or keyword-
 * volume dataset. Search volume is deliberately UNKNOWN because no GSC,
 * Keyword Planner, Ahrefs, Semrush, or equivalent source was available.
 */

export const res002Meta = Object.freeze({
  taskId: "RES-002",
  checkedAt: "2026-08-21",
  locale: "vi-VN",
  market: "Vietnam",
  method: "Live web-search snapshots across exact, reverse, price, endpoint, informational, and service-modifier queries.",
  searchVolumeStatus: "UNKNOWN",
  limitations: Object.freeze([
    "Results are directional snapshots and can vary by location, device, personalization, and time.",
    "No first-party Search Console or paid keyword-volume source was available.",
    "Facebook and TikTok visibility was incomplete; TikTok result pages were blocked from inspection.",
    "Competitor frequency counts query-source occurrences in this sample, not traffic or market share.",
  ]),
});

export const res002Sources = Object.freeze({
  GHD: Object.freeze({ domain: "ghephaiduong.com", url: "https://www.ghephaiduong.com/", title: "Xe ghép Hải Dương", pageType: "OPERATOR_HOME", routeSpecificity: "MULTI_ROUTE", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: false, freshness: "OUTDATED_COPY_VISIBLE", notes: "Recurring exact-route operator; broad Hải Dương–Hải Phòng/Quảng Ninh endpoint coverage, but old COVID-era copy weakens freshness." }),
  MOTOR_HD_HP: Object.freeze({ domain: "motortrip.vn", url: "https://motortrip.vn/dich-vu/xe-ghep-hai-duong-hai-phong", title: "Xe ghép Hải Dương Hải Phòng", pageType: "EDITORIAL_LIST", routeSpecificity: "EXACT_CORRIDOR", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: false, freshness: "2026_VISIBLE", notes: "Fresh comparison/list format with multiple operators and fare presentation." }),
  TAXI_HP_HD: Object.freeze({ domain: "taxihaiduong24h.net", url: "https://www.taxihaiduong24h.net/xe-ghep-hai-phong-hai-duong/", title: "Xe ghép Hải Phòng Hải Dương", pageType: "OPERATOR_LANDING", routeSpecificity: "EXACT_REVERSE", pricePresent: true, tablePresent: true, faqPresent: true, exactEndpointPage: false, freshness: "RECENT_VISIBLE", notes: "Dedicated reverse-direction page with dense commercial answers." }),
  XGHP: Object.freeze({ domain: "xeghephaiphong.vn", url: "https://xeghephaiphong.vn/", title: "Xe ghép Hải Phòng", pageType: "OPERATOR_HOME", routeSpecificity: "MULTI_ROUTE", pricePresent: true, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "UNCLEAR", notes: "Broad Hải Phòng/Hà Nội/Quảng Ninh coverage and keyword-heavy commercial copy." }),
  XGHDHP_PRICE: Object.freeze({ domain: "xeghephaiduonghaiphong.com", url: "https://xeghephaiduonghaiphong.com/bang-gia/", title: "Bảng giá xe ghép Hải Dương Hải Phòng", pageType: "OPERATOR_PRICE", routeSpecificity: "EXACT_CORRIDOR", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: false, freshness: "2023_VISIBLE", notes: "Exact-match price surface; useful intent evidence but visibly old." }),
  XGHDHP_HOME: Object.freeze({ domain: "xeghephaiduonghaiphong.com", url: "https://xeghephaiduonghaiphong.com/", title: "Xe ghép Hải Dương Hải Phòng", pageType: "OPERATOR_HOME", routeSpecificity: "EXACT_CORRIDOR", pricePresent: true, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "UNCLEAR", notes: "Exact-match operator domain; also mentions Cát Bi service." }),
  REDBUS_HD_HP: Object.freeze({ domain: "redbus.vn", url: "https://www.redbus.vn/ve-xe-khach/tuyen-duong/hai-duong-di-hai-phong", title: "Vé xe khách Hải Dương đi Hải Phòng", pageType: "AGGREGATOR", routeSpecificity: "EXACT_CORRIDOR", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: false, freshness: "LIVE_INVENTORY", notes: "Aggregator result competing for broad transport intent." }),
  VEXERE_QN_HD: Object.freeze({ domain: "vexere.com", url: "https://www.vexere.com/vi-VN/ve-xe-khach-tu-quang-ninh-di-hai-duong-149t1261.html", title: "Vé xe Quảng Ninh đi Hải Dương", pageType: "AGGREGATOR", routeSpecificity: "EXACT_REVERSE", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: false, freshness: "LIVE_INVENTORY", notes: "Strong aggregator for reverse-direction and schedule intent." }),
  PHUCLONG: Object.freeze({ domain: "nhaxephuclong365.com", url: "https://nhaxephuclong365.com/", title: "Nhà xe Phúc Long 365", pageType: "OPERATOR_HOME", routeSpecificity: "MULTI_ROUTE", pricePresent: true, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "UNCLEAR", notes: "Operator covering Hải Dương, Hải Phòng, and Quảng Ninh queries." }),
  XGQN: Object.freeze({ domain: "xeghepquangninh.com", url: "https://xeghepquangninh.com/", title: "Xe ghép Quảng Ninh", pageType: "OPERATOR_HOME", routeSpecificity: "MULTI_ROUTE", pricePresent: true, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "OUTDATED_COPY_VISIBLE", notes: "Generic Quảng Ninh operator; wide route coverage but limited freshness." }),
  BUSVN_HD_QN: Object.freeze({ domain: "busvietnam.net", url: "https://busvietnam.net/xe-ghep/xe-ghep-hai-duong-quang-ninh.html", title: "Xe ghép Hải Dương Quảng Ninh", pageType: "EDITORIAL_LIST", routeSpecificity: "EXACT_CORRIDOR", pricePresent: true, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "OUTDATED_COPY_VISIBLE", notes: "Older exact-corridor list result." }),
  TAXI_HD_HL: Object.freeze({ domain: "taxihaiduong24h.net", url: "https://www.taxihaiduong24h.net/xe-ghep-ha-long-hai-duong/", title: "Xe ghép Hạ Long Hải Dương", pageType: "OPERATOR_LANDING", routeSpecificity: "EXACT_ENDPOINT", pricePresent: true, tablePresent: true, faqPresent: true, exactEndpointPage: true, freshness: "RECENT_VISIBLE", notes: "Dedicated endpoint/reverse page; strong commercial coverage though templated claims require independent verification." }),
  VEXERE_DONGTRIEU: Object.freeze({ domain: "vexere.com", url: "https://vexere.com/vi-VN/ve-xe-khach-tu-hai-duong-di-dong-trieu-quang-ninh-126t26111.html", title: "Vé xe Hải Dương đi Đông Triều", pageType: "AGGREGATOR", routeSpecificity: "EXACT_ENDPOINT", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: true, freshness: "LIVE_INVENTORY", notes: "Dedicated endpoint inventory validates transport intent, not Phong service availability." }),
  VEXERE_BAICHAY: Object.freeze({ domain: "vexere.com", url: "https://vexere.com/vi-VN/ve-xe-khach-tu-hai-duong-di-bai-chay-126t21362261.html", title: "Vé xe Hải Dương đi Bãi Cháy", pageType: "AGGREGATOR", routeSpecificity: "EXACT_ENDPOINT", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: true, freshness: "LIVE_INVENTORY", notes: "Dedicated Bãi Cháy transport inventory." }),
  VEXERE_CAMPHA: Object.freeze({ domain: "vexere.com", url: "https://vexere.com/vi-VN/ve-xe-limousine-tu-chi-linh-hai-duong-di-cam-pha-quang-ninh-2275t26081.html", title: "Xe limousine Chí Linh đi Cẩm Phả", pageType: "AGGREGATOR", routeSpecificity: "EXACT_ENDPOINT", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: true, freshness: "LIVE_INVENTORY", notes: "Endpoint evidence is strongest for Chí Linh rather than all Hải Dương." }),
  LIMODY_VANDON: Object.freeze({ domain: "limody.vn", url: "https://limody.vn/xe-hai-duong-van-don/", title: "Xe Hải Dương Vân Đồn", pageType: "EDITORIAL_LIST", routeSpecificity: "EXACT_ENDPOINT", pricePresent: true, tablePresent: false, faqPresent: false, exactEndpointPage: true, freshness: "RECENT_VISIBLE", notes: "Dedicated endpoint list suggests a distinct trip-planning need." }),
  GOV_ROUTE_PDF: Object.freeze({ domain: "qppl.dienbien.gov.vn", url: "https://qppl.dienbien.gov.vn/qlvb/vbpq.nsf/3d0f058120469ad34725726600365420/32E9E73B18A90DD54725888A0001AE05/%24file/576d513d-0dca-4b46-9590-edf399fb4fbd.pdf", title: "Danh mục tuyến vận tải hành khách cố định", pageType: "GOVERNMENT_PDF", routeSpecificity: "ENDPOINT_REFERENCE", pricePresent: false, tablePresent: true, faqPresent: false, exactEndpointPage: false, freshness: "DOCUMENT_DATE_ONLY", notes: "Market/infrastructure evidence for Bãi Cháy and Móng Cái routes; never treated as Phong service evidence." }),
  XGHD_PROVINCES: Object.freeze({ domain: "xeghephaiduongdicactinh24h.com", url: "https://xeghephaiduongdicactinh24h.com/hai-duong-quang-ninh/", title: "Xe Hải Dương Quảng Ninh", pageType: "OPERATOR_LANDING", routeSpecificity: "EXACT_CORRIDOR", pricePresent: true, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "UNCLEAR", notes: "Corridor page explicitly names Hạ Long, Vân Đồn, and Móng Cái." }),
  MOTOR_HP_QN: Object.freeze({ domain: "motortrip.vn", url: "https://motortrip.vn/dich-vu/xe-ghep-hai-phong-quang-ninh", title: "Xe ghép Hải Phòng Quảng Ninh", pageType: "EDITORIAL_LIST", routeSpecificity: "EXACT_CORRIDOR", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: false, freshness: "RECENT_VISIBLE", notes: "Fresh operator comparison for the broad corridor." }),
  THUEXE_HP: Object.freeze({ domain: "thuexehaiphong.net", url: "https://www.thuexehaiphong.net/xe-ghep", title: "Xe ghép Hải Phòng", pageType: "OPERATOR_LANDING", routeSpecificity: "MULTI_ROUTE", pricePresent: true, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "UNCLEAR", notes: "Commercial operator result spanning Hải Phòng and Quảng Ninh." }),
  TRAVELOKA_HP_HL: Object.freeze({ domain: "traveloka.com", url: "https://www.traveloka.com/vi-vn/bus-and-shuttle/route/ve-xe-hai-phong-city.ha-long-city", title: "Vé xe Hải Phòng đi Hạ Long", pageType: "AGGREGATOR", routeSpecificity: "EXACT_ENDPOINT", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: true, freshness: "LIVE_INVENTORY", notes: "Strong endpoint marketplace with multiple operators and dense schedule/fare inventory." }),
  REDBUS_HP_HL: Object.freeze({ domain: "redbus.vn", url: "https://www.redbus.vn/ve-xe-khach/tuyen-duong/hai-phong-di-ha-long", title: "Vé xe khách Hải Phòng đi Hạ Long", pageType: "AGGREGATOR", routeSpecificity: "EXACT_ENDPOINT", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: true, freshness: "LIVE_INVENTORY", notes: "Strong endpoint aggregator competing on inventory and booking utility." }),
  MOTOGO_HP_QN: Object.freeze({ domain: "motogo.vn", url: "https://motogo.vn/xe-hai-phong-quang-ninh/", title: "Xe Hải Phòng Quảng Ninh", pageType: "EDITORIAL_LIST", routeSpecificity: "EXACT_CORRIDOR", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: false, freshness: "RECENT_VISIBLE", notes: "Fresh comparison/list result for broad corridor intent." }),
  TAXI_HD_CB: Object.freeze({ domain: "taxihaiduong.net.vn", url: "https://taxihaiduong.net.vn/bang-gia/hai-duong-san-bay-cat-bi", title: "Bảng giá Hải Dương sân bay Cát Bi", pageType: "OPERATOR_PRICE", routeSpecificity: "EXACT_AIRPORT_ROUTE", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: true, freshness: "UNCLEAR", notes: "Exact airport-route pricing page and the closest direct commercial competitor." }),
  AIRPORT_TRANSFER: Object.freeze({ domain: "vemaybayhaiduong.com", url: "https://vemaybayhaiduong.com/xe-dua-don/", title: "Xe đưa đón sân bay", pageType: "OPERATOR_LANDING", routeSpecificity: "AIRPORT_SERVICE", pricePresent: true, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "UNCLEAR", notes: "Airport-transfer provider surface mentioning Cát Bi." }),
  VNA_CATBI: Object.freeze({ domain: "vietnamairlines.com", url: "https://www.vietnamairlines.com/go/vi/plan-book/travel/travel-guide/san-bay-cat-bi", title: "Sân bay Cát Bi", pageType: "AUTHORITATIVE_INFO", routeSpecificity: "AIRPORT_INFORMATION", pricePresent: false, tablePresent: false, faqPresent: false, exactEndpointPage: true, freshness: "MAINTAINED", notes: "Authoritative airport-information source for future factual research, not an operator competitor." }),
  THUEXE_CB_HD: Object.freeze({ domain: "thuexehaiphong.net", url: "https://www.thuexehaiphong.net/taxi/taxi-cat-bi/taxi-cat-bi-hai-duong", title: "Taxi Cát Bi Hải Dương", pageType: "OPERATOR_LANDING", routeSpecificity: "EXACT_REVERSE_AIRPORT", pricePresent: true, tablePresent: false, faqPresent: false, exactEndpointPage: true, freshness: "UNCLEAR", notes: "Dedicated reverse airport transfer page." }),
  HOANGPHU_HP_HL: Object.freeze({ domain: "xehoangphu.vn", url: "https://xehoangphu.vn/dat-ve/dat-xe-hai-phong-ha-long/", title: "Đặt xe Hải Phòng Hạ Long", pageType: "OPERATOR_BOOKING", routeSpecificity: "EXACT_ENDPOINT", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: true, freshness: "LIVE_BOOKING", notes: "Strong operator/booking result for the Hải Phòng–Hạ Long endpoint." }),
  SONHANG_HP_MC: Object.freeze({ domain: "sonhangtravel.com", url: "https://sonhangtravel.com/blog/xe-hai-phong-di-mong-cai-nha-xe-so-dien-thoai-diem-don", title: "Xe Hải Phòng đi Móng Cái", pageType: "EDITORIAL_LIST", routeSpecificity: "EXACT_ENDPOINT", pricePresent: true, tablePresent: false, faqPresent: false, exactEndpointPage: true, freshness: "RECENT_VISIBLE", notes: "Dedicated long-distance endpoint article." }),
  HOANGCONG: Object.freeze({ domain: "nhaxehoangcong.com", url: "https://www.nhaxehoangcong.com/", title: "Nhà xe Hoàng Công", pageType: "OPERATOR_HOME", routeSpecificity: "HP_QN_OPERATOR", pricePresent: true, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "UNCLEAR", notes: "Recurring Hải Phòng–Quảng Ninh operator." }),
  ALOGIARE: Object.freeze({ domain: "alogiare.vn", url: "https://alogiare.vn/shop/xe-ghep-hai-duong-hai-phong", title: "Xe ghép Hải Dương Hải Phòng", pageType: "MARKETPLACE_PROFILE", routeSpecificity: "EXACT_CORRIDOR", pricePresent: false, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "UNCLEAR", notes: "Marketplace/profile surface exposing social/contact distribution." }),
  LINKTREE_HD: Object.freeze({ domain: "linktr.ee", url: "https://linktr.ee/xeghephaiduong", title: "Xe ghép Hải Dương", pageType: "SOCIAL_LINK_HUB", routeSpecificity: "MULTI_ROUTE", pricePresent: false, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "LIVE_PROFILE", notes: "Social-link hub surfaced for operator discovery." }),
  BAOAN: Object.freeze({ domain: "xetienchuyenbaoan.com", url: "https://xetienchuyenbaoan.com/", title: "Xe tiện chuyến Bảo An", pageType: "OPERATOR_HOME", routeSpecificity: "MULTI_ROUTE", pricePresent: true, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "UNCLEAR", notes: "Operator site with Facebook fanpage linkage." }),
  FINDGLOCAL: Object.freeze({ domain: "findglocal.com", url: "https://www.findglocal.com/VN/Hanoi/112048047922020/", title: "Xe ghép listing mirror", pageType: "SOCIAL_MIRROR", routeSpecificity: "MULTI_ROUTE", pricePresent: false, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "MIRRORED_POSTS", notes: "Third-party mirror of social posts; evidence of social distribution, not authoritative business facts." }),
  REDDIT: Object.freeze({ domain: "reddit.com", url: "https://www.reddit.com/r/u_mrleoseo/comments/xcfuz6", title: "Xe ghép Hải Phòng community mention", pageType: "UGC_FORUM", routeSpecificity: "GENERAL", pricePresent: false, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "OLDER_UGC", notes: "UGC reference to ride-sharing groups; GEO handoff only." }),
  DAILYVE_HP_HL: Object.freeze({ domain: "dailyve.com.vn", url: "https://dailyve.com.vn/ve-xe-khach/tuyen-duong/hai-phong-di-ha-long/", title: "Vé xe Hải Phòng đi Hạ Long", pageType: "AGGREGATOR", routeSpecificity: "EXACT_ENDPOINT", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: true, freshness: "LIVE_INVENTORY", notes: "Endpoint inventory and booking competition." }),
  MOTOGO_HP_HL: Object.freeze({ domain: "motogo.vn", url: "https://motogo.vn/xe-limousine-hai-phong-ha-long/", title: "Xe limousine Hải Phòng Hạ Long", pageType: "EDITORIAL_LIST", routeSpecificity: "EXACT_ENDPOINT", pricePresent: true, tablePresent: true, faqPresent: false, exactEndpointPage: true, freshness: "RECENT_VISIBLE", notes: "Dedicated endpoint list; confirms a distinct limousine sub-intent." }),
  GOGREEN_HP_HL: Object.freeze({ domain: "gogreenhalong.com", url: "https://gogreenhalong.com/", title: "Go Green Hạ Long", pageType: "OPERATOR_HOME", routeSpecificity: "EXACT_ENDPOINT_SERVICE", pricePresent: true, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "LIVE_OPERATOR", notes: "Specialist operator reinforcing the Hải Phòng–Hạ Long battle." }),
  VJOL_DISTANCE: Object.freeze({ domain: "vjol.info", url: "https://www.vjol.info/hai-duong-cach-hai-phong-bao-nhieu-km", title: "Hải Dương cách Hải Phòng bao nhiêu km", pageType: "INFORMATIONAL", routeSpecificity: "EXACT_CORRIDOR", pricePresent: false, tablePresent: false, faqPresent: true, exactEndpointPage: false, freshness: "UNCLEAR", notes: "Informational distance result; any numeric fact needs source validation before content use." }),
  VEXERE_DISTANCE: Object.freeze({ domain: "blog.vexere.com", url: "https://blog.vexere.com/hai-phong-di-quang-ninh-bao-nhieu-km/", title: "Hải Phòng đi Quảng Ninh bao nhiêu km", pageType: "INFORMATIONAL", routeSpecificity: "EXACT_CORRIDOR", pricePresent: false, tablePresent: false, faqPresent: true, exactEndpointPage: false, freshness: "UNCLEAR", notes: "Distance/time informational result; not Phong operational evidence." }),
  HP_GOV_LINK: Object.freeze({ domain: "thanhphohaiphong.gov.vn", url: "https://thanhphohaiphong.gov.vn/ket-noi-giao-thong-hai-phong-quang-ninh-tren-duong-bo-tao-khong-gian-phat-trien-lien-vung.html", title: "Kết nối giao thông Hải Phòng–Quảng Ninh", pageType: "GOVERNMENT_INFO", routeSpecificity: "EXACT_CORRIDOR", pricePresent: false, tablePresent: false, faqPresent: false, exactEndpointPage: false, freshness: "DATED_ARTICLE", notes: "Public infrastructure context only." }),
});

const scoreWeights = Object.freeze({ searchEvidence: 0.25, commercialIntent: 0.25, serpWeakness: 0.2, businessFit: 0.2, dataReadiness: 0.1 });

function opportunityScore(scores) {
  return Math.round(20 * Object.entries(scoreWeights).reduce((sum, [key, weight]) => sum + scores[key] * weight, 0));
}

function record(query, cluster, category, intent, recommendation, sourceIds, scores, observedWeakness, dataStatus, serpFeatures = []) {
  return Object.freeze({
    query,
    cluster,
    category,
    intent,
    checkedAt: res002Meta.checkedAt,
    searchVolume: null,
    searchVolumeStatus: "UNKNOWN",
    recommendation,
    sourceIds: Object.freeze(sourceIds),
    topResults: Object.freeze(sourceIds.map((id) => Object.freeze({ id, ...res002Sources[id] }))),
    serpFeatures: Object.freeze(serpFeatures),
    observedWeakness,
    dataStatus,
    scores: Object.freeze(scores),
    opportunityScore: opportunityScore(scores),
  });
}

const confirmed = (searchEvidence, commercialIntent, serpWeakness, dataReadiness) => ({ searchEvidence, commercialIntent, serpWeakness, businessFit: 5, dataReadiness });
const endpoint = (searchEvidence, commercialIntent, serpWeakness, dataReadiness = 1) => ({ searchEvidence, commercialIntent, serpWeakness, businessFit: 3, dataReadiness });
const info = (searchEvidence, serpWeakness, businessFit = 4, dataReadiness = 2) => ({ searchEvidence, commercialIntent: 2, serpWeakness, businessFit, dataReadiness });

export const res002QueryResearch = Object.freeze([
  // Commercial and reverse-direction intent (18)
  record("xe ghép Hải Dương Hải Phòng", "CLUSTER-A", "COMMERCIAL", "Book shared ride", "EXISTING_PAGE:MP-003", ["GHD", "MOTOR_HD_HP", "XGHDHP_HOME"], confirmed(5, 5, 2, 4), "Strong exact operators and a fresh comparison page; differentiated verified answers are required.", "ROUTE_CONFIRMED"),
  record("xe Hải Dương Hải Phòng", "CLUSTER-A", "COMMERCIAL", "Compare/book transport", "EXISTING_PAGE:MP-003", ["REDBUS_HD_HP", "GHD", "MOTOR_HD_HP"], confirmed(5, 5, 2, 4), "Mixed aggregator/operator SERP; current asset can cover broad intent.", "ROUTE_CONFIRMED"),
  record("xe Hải Phòng Hải Dương", "CLUSTER-A", "COMMERCIAL", "Book reverse trip", "MERGE_WITH_PARENT:MP-003", ["TAXI_HP_HD", "GHD", "PHUCLONG"], confirmed(5, 5, 2, 4), "One strong reverse landing page exists, but the underlying service intent remains bidirectional.", "ROUTE_CONFIRMED"),
  record("xe ghép Hải Phòng Hải Dương", "CLUSTER-A", "COMMERCIAL", "Book reverse shared ride", "MERGE_WITH_PARENT:MP-003", ["TAXI_HP_HD", "GHD", "ALOGIARE"], confirmed(5, 5, 2, 4), "Exact reverse competitor is dense; no evidence yet that a separate Phong URL would add unique value.", "ROUTE_CONFIRMED"),
  record("xe tiện chuyến Hải Dương Hải Phòng", "CLUSTER-A", "COMMERCIAL", "Find shared/return-leg ride", "EXISTING_PAGE:MP-003", ["BAOAN", "GHD", "ALOGIARE"], confirmed(3, 4, 3, 4), "Specialist results are fragmented and social/profile-heavy.", "ROUTE_CONFIRMED", ["SOCIAL_PROFILE"]),
  record("nhà xe Hải Dương Hải Phòng", "CLUSTER-A", "COMMERCIAL", "Choose operator", "EXISTING_PAGE:MP-003", ["MOTOR_HD_HP", "REDBUS_HD_HP", "PHUCLONG"], confirmed(4, 4, 2, 3), "List/aggregator pages dominate; operator trust evidence must be concrete.", "ROUTE_CONFIRMED"),
  record("xe ghép Hải Dương Quảng Ninh", "CLUSTER-B", "COMMERCIAL", "Book shared ride", "EXISTING_PAGE:MP-005", ["GHD", "BUSVN_HD_QN", "XGHD_PROVINCES"], confirmed(5, 5, 4, 3), "Exact results exist but several are old, broad, or thin; room for a current evidence-led parent page.", "ROUTE_CONFIRMED"),
  record("xe Hải Dương Quảng Ninh", "CLUSTER-B", "COMMERCIAL", "Compare/book transport", "EXISTING_PAGE:MP-005", ["GHD", "XGHD_PROVINCES", "VEXERE_QN_HD"], confirmed(5, 5, 3, 3), "Mixed operator/aggregator results and weak endpoint clarity.", "ROUTE_CONFIRMED"),
  record("xe Quảng Ninh Hải Dương", "CLUSTER-B", "COMMERCIAL", "Book reverse trip", "MERGE_WITH_PARENT:MP-005", ["VEXERE_QN_HD", "GHD", "TAXI_HD_HL"], confirmed(4, 5, 3, 3), "Reverse intent is visible but results overlap the same corridor/endpoints.", "ROUTE_CONFIRMED"),
  record("xe ghép Quảng Ninh Hải Dương", "CLUSTER-B", "COMMERCIAL", "Book reverse shared ride", "MERGE_WITH_PARENT:MP-005", ["GHD", "TAXI_HD_HL", "XGQN"], confirmed(4, 5, 3, 3), "No sufficiently distinct reverse SERP set to justify a duplicate route page.", "ROUTE_CONFIRMED"),
  record("xe tiện chuyến Hải Dương Quảng Ninh", "CLUSTER-B", "COMMERCIAL", "Find shared/return-leg ride", "EXISTING_PAGE:MP-005", ["BAOAN", "GHD", "XGHD_PROVINCES"], confirmed(3, 4, 4, 3), "Specialist exact pages are sparse; terminology overlaps xe ghép.", "ROUTE_CONFIRMED"),
  record("nhà xe Hải Dương Quảng Ninh", "CLUSTER-B", "COMMERCIAL", "Choose operator", "EXISTING_PAGE:CP-002", ["BUSVN_HD_QN", "XGHD_PROVINCES", "VEXERE_QN_HD"], confirmed(4, 4, 3, 2), "List intent is served unevenly; current comparison asset is the safer fit.", "ROUTE_CONFIRMED"),
  record("xe ghép Hải Phòng Quảng Ninh", "CLUSTER-C", "COMMERCIAL", "Book shared ride", "EXISTING_PAGE:MP-006", ["MOTOR_HP_QN", "XGHP", "THUEXE_HP"], confirmed(5, 5, 2, 3), "Several dedicated operators/list pages create a strategic rather than easy battle.", "ROUTE_CONFIRMED"),
  record("xe Hải Phòng Quảng Ninh", "CLUSTER-C", "COMMERCIAL", "Compare/book transport", "EXISTING_PAGE:MP-006", ["MOTOGO_HP_QN", "MOTOR_HP_QN", "HOANGCONG"], confirmed(5, 5, 2, 3), "Broad route intent mixes operators, coaches, and endpoint trips.", "ROUTE_CONFIRMED"),
  record("xe Quảng Ninh Hải Phòng", "CLUSTER-C", "COMMERCIAL", "Book reverse trip", "MERGE_WITH_PARENT:MP-006", ["XGHP", "HOANGCONG", "MOTOR_HP_QN"], confirmed(4, 5, 2, 3), "Reverse results do not demonstrate a materially different intent.", "ROUTE_CONFIRMED"),
  record("xe ghép Quảng Ninh Hải Phòng", "CLUSTER-C", "COMMERCIAL", "Book reverse shared ride", "MERGE_WITH_PARENT:MP-006", ["XGHP", "XGQN", "THUEXE_HP"], confirmed(4, 5, 2, 3), "Operator competition is broad but substantially bidirectional.", "ROUTE_CONFIRMED"),
  record("xe tiện chuyến Hải Phòng Quảng Ninh", "CLUSTER-C", "COMMERCIAL", "Find shared/return-leg ride", "EXISTING_PAGE:MP-006", ["BAOAN", "XGHP", "THUEXE_HP"], confirmed(3, 4, 3, 3), "Fragmented terminology; no separate URL need.", "ROUTE_CONFIRMED"),
  record("nhà xe Hải Phòng Quảng Ninh", "CLUSTER-C", "COMMERCIAL", "Choose operator", "EXISTING_PAGE:CP-004", ["MOTOR_HP_QN", "MOTOGO_HP_QN", "HOANGCONG"], confirmed(5, 4, 2, 2), "Fresh list content and known operators make this competitive.", "ROUTE_CONFIRMED"),

  // Price and service-modifier intent (12)
  record("giá xe ghép Hải Dương Hải Phòng", "CLUSTER-A", "PRICE", "Compare shared fare", "EXISTING_PAGE:MP-003", ["XGHDHP_PRICE", "GHD", "MOTOR_HD_HP"], confirmed(5, 5, 2, 5), "Price tables are common; win requires current verified values and fare scope.", "VERIFIED_PRICE_AVAILABLE"),
  record("xe Hải Dương Hải Phòng bao nhiêu tiền", "CLUSTER-A", "PRICE", "Find fare", "EXISTING_PAGE:MP-003", ["GHD", "MOTOR_HD_HP", "REDBUS_HD_HP"], confirmed(5, 5, 2, 5), "Many prices appear without transparent provenance or exact service scope.", "VERIFIED_PRICE_AVAILABLE"),
  record("bao xe Hải Dương Hải Phòng", "CLUSTER-A", "PRICE", "Book private car", "EXISTING_PAGE:MP-003", ["GHD", "XGHDHP_PRICE", "TAXI_HP_HD"], confirmed(4, 5, 3, 5), "Shared and charter prices are often blended; verified 4/7-seat presentation is differentiating.", "VERIFIED_PRICE_AVAILABLE"),
  record("giá taxi Hải Dương Hải Phòng", "CLUSTER-A", "PRICE", "Compare private transport", "EXISTING_PAGE:MP-003", ["TAXI_HP_HD", "GHD", "XGHDHP_PRICE"], confirmed(4, 5, 2, 5), "Taxi intent is competitive but compatible with the charter section, not a new URL.", "VERIFIED_PRICE_AVAILABLE"),
  record("giá xe ghép Hải Dương Quảng Ninh", "CLUSTER-B", "PRICE", "Compare shared fare", "EXISTING_PAGE:MP-005", ["GHD", "BUSVN_HD_QN", "XGHD_PROVINCES"], confirmed(5, 5, 4, 4), "Competitor endpoint prices exist but freshness/provenance is weak; only approved parent fare may be shown.", "PARENT_PRICE_VERIFIED_ENDPOINTS_UNCONFIRMED"),
  record("xe Hải Dương Quảng Ninh bao nhiêu tiền", "CLUSTER-B", "PRICE", "Find fare", "EXISTING_PAGE:MP-005", ["GHD", "VEXERE_QN_HD", "BUSVN_HD_QN"], confirmed(5, 5, 3, 4), "SERP mixes corridor and endpoint pricing, creating answer ambiguity.", "PARENT_PRICE_VERIFIED_ENDPOINTS_UNCONFIRMED"),
  record("bao xe Hải Dương Quảng Ninh", "CLUSTER-B", "PRICE", "Book private car", "EXISTING_PAGE:MP-005", ["GHD", "XGHD_PROVINCES", "TAXI_HD_HL"], confirmed(4, 5, 3, 4), "Endpoint distance changes fare; page must distinguish verified parent rule from unconfirmed endpoint quotes.", "PARENT_PRICE_VERIFIED_ENDPOINTS_UNCONFIRMED"),
  record("giá taxi Hải Dương Quảng Ninh", "CLUSTER-B", "PRICE", "Compare private transport", "EXISTING_PAGE:MP-005", ["TAXI_HD_HL", "GHD", "XGHD_PROVINCES"], confirmed(4, 5, 3, 3), "Dedicated endpoint taxi pages expose a gap but operational coverage is not locked.", "ENDPOINT_PRICE_DATA_REQUIRED"),
  record("giá xe ghép Hải Phòng Quảng Ninh", "CLUSTER-C", "PRICE", "Compare shared fare", "EXISTING_PAGE:MP-006", ["MOTOR_HP_QN", "XGHP", "THUEXE_HP"], confirmed(5, 5, 2, 4), "Fresh comparison/operator pages and endpoint-dependent prices make the SERP strong.", "PARENT_PRICE_VERIFIED_ENDPOINTS_UNCONFIRMED"),
  record("xe Hải Phòng Quảng Ninh bao nhiêu tiền", "CLUSTER-C", "PRICE", "Find fare", "EXISTING_PAGE:MP-006", ["MOTOGO_HP_QN", "MOTOR_HP_QN", "HOANGCONG"], confirmed(5, 5, 2, 4), "Broad price question fragments into Hạ Long and longer endpoints.", "PARENT_PRICE_VERIFIED_ENDPOINTS_UNCONFIRMED"),
  record("bao xe Hải Phòng Quảng Ninh", "CLUSTER-C", "PRICE", "Book private car", "EXISTING_PAGE:MP-006", ["THUEXE_HP", "XGHP", "HOANGCONG"], confirmed(4, 5, 2, 4), "Strong local operator competition; endpoint-specific quote rules still missing.", "PARENT_PRICE_VERIFIED_ENDPOINTS_UNCONFIRMED"),
  record("gửi hàng Hải Dương Hải Phòng theo chuyến", "CLUSTER-A", "SERVICE_MODIFIER", "Send parcel", "NO_ACTION:SC-002_FREEZE", ["GHD", "ALOGIARE", "BAOAN"], { searchEvidence: 3, commercialIntent: 4, serpWeakness: 3, businessFit: 0, dataReadiness: 0 }, "Some operators mention parcel service, but Phong availability is unverified.", "BUSINESS_DATA_UNVERIFIED"),

  // Endpoint and airport intent (22)
  record("xe Hải Dương Hạ Long", "CLUSTER-B", "ENDPOINT", "Book endpoint trip", "NEW_PAGE_CANDIDATE", ["TAXI_HD_HL", "GHD", "XGHD_PROVINCES"], endpoint(5, 5, 3), "Dedicated competitor exists, but results still include broad route pages and templated claims.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe ghép Hải Dương Hạ Long", "CLUSTER-B", "ENDPOINT", "Book shared endpoint trip", "NEW_PAGE_CANDIDATE", ["TAXI_HD_HL", "GHD", "XGHD_PROVINCES"], endpoint(5, 5, 3), "Exact commercial intent is clear; operational truth is the gating constraint.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe Hạ Long Hải Dương", "CLUSTER-B", "ENDPOINT", "Book reverse endpoint trip", "MERGE_WITH_ENDPOINT_CANDIDATE", ["TAXI_HD_HL", "VEXERE_QN_HD", "GHD"], endpoint(4, 5, 3), "Reverse intent is visible but should be served bidirectionally if the endpoint is approved.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe Hải Dương Đông Triều", "CLUSTER-B", "ENDPOINT", "Book endpoint trip", "NEW_PAGE_BACKLOG", ["VEXERE_DONGTRIEU", "GHD", "GOV_ROUTE_PDF"], endpoint(4, 5, 3), "Aggregator endpoint coverage exists; specialist operator competition is limited.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe ghép Hải Dương Đông Triều", "CLUSTER-B", "ENDPOINT", "Book shared endpoint trip", "MERGE_WITH_PARENT_PENDING_EVIDENCE", ["GHD", "VEXERE_DONGTRIEU"], endpoint(3, 5, 4), "Few dedicated shared-ride pages; validate demand and service before splitting.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe Hải Dương Uông Bí", "CLUSTER-B", "ENDPOINT", "Book endpoint trip", "MERGE_WITH_PARENT_PENDING_EVIDENCE", ["GHD", "VEXERE_QN_HD"], endpoint(3, 5, 4), "Generic corridor/operator results dominate; dedicated evidence is limited.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe ghép Hải Dương Uông Bí", "CLUSTER-B", "ENDPOINT", "Book shared endpoint trip", "MERGE_WITH_PARENT_PENDING_EVIDENCE", ["GHD", "XGHD_PROVINCES"], endpoint(3, 5, 4), "Weak dedicated competition but insufficient independent demand evidence.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe Hải Dương Quảng Yên", "CLUSTER-B", "ENDPOINT", "Book endpoint trip", "NO_ACTION", ["GHD", "VEXERE_QN_HD"], endpoint(2, 4, 4), "Almost no dedicated endpoint results observed.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe Hải Dương Bãi Cháy", "CLUSTER-B", "ENDPOINT", "Book endpoint trip", "NEW_PAGE_BACKLOG", ["VEXERE_BAICHAY", "GHD", "GOV_ROUTE_PDF"], endpoint(4, 5, 3), "Dedicated aggregator and route-reference evidence; specialist shared-ride result remains limited.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe ghép Hải Dương Bãi Cháy", "CLUSTER-B", "ENDPOINT", "Book shared endpoint trip", "MERGE_WITH_HA_LONG_PENDING_EVIDENCE", ["GHD", "VEXERE_BAICHAY"], endpoint(3, 5, 4), "Potential geographic overlap with Hạ Long creates cannibalization risk.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe Hải Dương Cẩm Phả", "CLUSTER-B", "ENDPOINT", "Book endpoint trip", "NEW_PAGE_BACKLOG", ["VEXERE_CAMPHA", "GHD", "XGHD_PROVINCES"], endpoint(4, 5, 3), "Endpoint demand evidence exists, but one strong result is Chí Linh-specific.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe ghép Hải Dương Cẩm Phả", "CLUSTER-B", "ENDPOINT", "Book shared endpoint trip", "NEW_PAGE_BACKLOG", ["GHD", "TAXI_HD_HL", "VEXERE_CAMPHA"], endpoint(3, 5, 4), "Exact shared-ride competition is weak; service and fare remain unknown.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe Hải Dương Vân Đồn", "CLUSTER-B", "ENDPOINT", "Book endpoint trip", "NEW_PAGE_BACKLOG", ["LIMODY_VANDON", "GHD", "XGHD_PROVINCES"], endpoint(4, 5, 3), "Dedicated list result and repeated operator coverage show a distinct trip need.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe ghép Hải Dương Vân Đồn", "CLUSTER-B", "ENDPOINT", "Book shared endpoint trip", "NEW_PAGE_BACKLOG", ["GHD", "LIMODY_VANDON", "XGHD_PROVINCES"], endpoint(4, 5, 3), "Exact shared-ride results are not deep, but service confirmation is mandatory.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe Hải Dương Ao Tiên", "CLUSTER-B", "ENDPOINT", "Reach ferry terminal", "NO_ACTION", ["GHD", "LIMODY_VANDON"], endpoint(2, 4, 4), "No convincing standalone SERP; likely belongs with Vân Đồn if operationally valid.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe Hải Dương Móng Cái", "CLUSTER-B", "ENDPOINT", "Book long-distance endpoint trip", "NEW_PAGE_BACKLOG", ["XGHD_PROVINCES", "GHD", "GOV_ROUTE_PDF"], endpoint(4, 5, 3), "Independent long-distance route evidence exists, but Phong service and commercial viability are unknown.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe Hải Phòng Hạ Long", "CLUSTER-C", "ENDPOINT", "Book endpoint trip", "NEW_PAGE_CANDIDATE", ["TRAVELOKA_HP_HL", "REDBUS_HP_HL", "HOANGPHU_HP_HL"], endpoint(5, 5, 1), "Dense aggregator/operator inventory makes this a high-demand strategic battle, not a quick win.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe ghép Hải Phòng Hạ Long", "CLUSTER-C", "ENDPOINT", "Book shared endpoint trip", "NEW_PAGE_CANDIDATE", ["GOGREEN_HP_HL", "MOTOGO_HP_HL", "HOANGPHU_HP_HL"], endpoint(5, 5, 1), "Specialist and limousine pages are strong; differentiation needs verified door-to-door/shared service details.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe Hải Phòng Vân Đồn", "CLUSTER-C", "ENDPOINT", "Book endpoint trip", "NEW_PAGE_BACKLOG", ["MOTOR_HP_QN", "MOTOGO_HP_QN", "HOANGCONG"], endpoint(3, 5, 2), "Broad corridor pages appear more often than dedicated endpoint pages in the sample.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe Hải Phòng Móng Cái", "CLUSTER-C", "ENDPOINT", "Book long-distance endpoint trip", "NEW_PAGE_BACKLOG", ["SONHANG_HP_MC", "HOANGCONG", "MOTOR_HP_QN"], endpoint(4, 5, 2), "Dedicated article and operators show demand, but competition and operational uncertainty are high.", "MARKET_CANDIDATE — SERVICE UNCONFIRMED"),
  record("xe Hải Dương sân bay Cát Bi", "CLUSTER-A", "ENDPOINT", "Book airport transfer", "EXISTING_PAGE:MP-004", ["TAXI_HD_CB", "XGHDHP_HOME", "AIRPORT_TRANSFER"], confirmed(5, 5, 3, 3), "Exact commercial pages exist; verified airport-specific rules are missing from Phong data.", "ROUTE_CONFIRMED_AIRPORT_RULES_UNKNOWN"),
  record("xe sân bay Cát Bi Hải Dương", "CLUSTER-A", "ENDPOINT", "Book reverse airport transfer", "MERGE_WITH_PARENT:MP-004", ["THUEXE_CB_HD", "TAXI_HD_CB", "XGHDHP_HOME"], confirmed(4, 5, 3, 3), "A reverse competitor page exists, but a bidirectional airport asset remains the cleaner architecture.", "ROUTE_CONFIRMED_AIRPORT_RULES_UNKNOWN"),

  // Problem/informational intent (12)
  record("Hải Dương Hải Phòng bao nhiêu km", "CLUSTER-A", "INFORMATIONAL", "Estimate distance", "SUPPORT_CONTENT:CP-003", ["VJOL_DISTANCE", "MOTOR_HD_HP", "REDBUS_HD_HP"], info(4, 3), "Informational answers are scattered; numeric facts require authoritative sourcing.", "PUBLIC_SOURCE_REQUIRED"),
  record("Hải Dương Hải Phòng mất bao lâu", "CLUSTER-A", "INFORMATIONAL", "Estimate duration", "SUPPORT_CONTENT:CP-003", ["VJOL_DISTANCE", "MOTOR_HD_HP", "GHD"], info(4, 3), "Travel-time answers often lack conditions and source context.", "PUBLIC_SOURCE_AND_OPERATIONAL_RANGE_REQUIRED"),
  record("Hải Dương Hải Phòng đi bằng gì", "CLUSTER-A", "INFORMATIONAL", "Compare transport modes", "EXISTING_PAGE:CP-003", ["REDBUS_HD_HP", "MOTOR_HD_HP", "GHD"], info(4, 3, 5, 3), "Current comparison asset matches intent; no additional URL needed.", "ROUTE_CONFIRMED"),
  record("xe Hải Dương Hải Phòng đón tận nhà", "CLUSTER-A", "INFORMATIONAL", "Check door-to-door service", "EXISTING_PAGE:MP-003", ["GHD", "TAXI_HP_HD", "XGHDHP_HOME"], confirmed(4, 4, 3, 4), "Competitor claims are generic; Phong has Owner-verified door-to-door truth.", "VERIFIED_SERVICE_CLAIM"),
  record("Hải Dương Quảng Ninh bao nhiêu km", "CLUSTER-B", "INFORMATIONAL", "Estimate distance", "SUPPORT_CONTENT:CP-002", ["GHD", "BUSVN_HD_QN", "VEXERE_QN_HD"], info(3, 3, 4, 1), "A single corridor distance is misleading across many endpoints.", "ENDPOINT_AND_PUBLIC_SOURCE_REQUIRED"),
  record("Hải Dương Quảng Ninh mất bao lâu", "CLUSTER-B", "INFORMATIONAL", "Estimate duration", "SUPPORT_CONTENT:CP-002", ["GHD", "XGHD_PROVINCES", "VEXERE_QN_HD"], info(3, 3, 4, 1), "Duration depends materially on endpoint and operational conditions.", "ENDPOINT_AND_OPERATIONAL_RANGE_REQUIRED"),
  record("Hải Dương Quảng Ninh đi bằng gì", "CLUSTER-B", "INFORMATIONAL", "Compare transport modes", "EXISTING_PAGE:CP-002", ["VEXERE_QN_HD", "BUSVN_HD_QN", "GHD"], info(4, 3, 5, 2), "Existing comparison page is the right intent container.", "ROUTE_CONFIRMED_ENDPOINTS_UNKNOWN"),
  record("xe Hải Dương Quảng Ninh đón tận nhà", "CLUSTER-B", "INFORMATIONAL", "Check door-to-door service", "EXISTING_PAGE:MP-005", ["GHD", "XGHD_PROVINCES", "TAXI_HD_HL"], confirmed(4, 4, 3, 3), "Parent service claim is verified, but named endpoint coverage is not.", "PARENT_CLAIM_VERIFIED_ENDPOINTS_UNCONFIRMED"),
  record("Hải Phòng Quảng Ninh bao nhiêu km", "CLUSTER-C", "INFORMATIONAL", "Estimate distance", "SUPPORT_CONTENT:CP-004", ["VEXERE_DISTANCE", "HP_GOV_LINK", "MOTOGO_HP_QN"], info(4, 2, 4, 1), "Endpoint ambiguity makes generic numeric answers weak.", "ENDPOINT_AND_PUBLIC_SOURCE_REQUIRED"),
  record("Hải Phòng Quảng Ninh mất bao lâu", "CLUSTER-C", "INFORMATIONAL", "Estimate duration", "SUPPORT_CONTENT:CP-004", ["VEXERE_DISTANCE", "MOTOR_HP_QN", "MOTOGO_HP_QN"], info(4, 2, 4, 1), "Time varies significantly by endpoint and service mode.", "ENDPOINT_AND_OPERATIONAL_RANGE_REQUIRED"),
  record("Hải Phòng Quảng Ninh đi bằng gì", "CLUSTER-C", "INFORMATIONAL", "Compare transport modes", "EXISTING_PAGE:CP-004", ["MOTOGO_HP_QN", "MOTOR_HP_QN", "TRAVELOKA_HP_HL"], info(5, 2, 5, 2), "Existing comparison page matches the broad intent; endpoint sections can route deeper later.", "ROUTE_CONFIRMED_ENDPOINTS_UNKNOWN"),
  record("đi sân bay Cát Bi từ Hải Dương", "CLUSTER-A", "INFORMATIONAL", "Plan airport transfer", "EXISTING_PAGE:CP-007", ["VNA_CATBI", "TAXI_HD_CB", "AIRPORT_TRANSFER"], info(5, 3, 5, 2), "Commercial and authoritative information are split; airport rules must be verified before upgrade.", "ROUTE_CONFIRMED_AIRPORT_RULES_UNKNOWN"),
]);

export const res002CompetitorFrequency = Object.freeze(
  Object.entries(res002QueryResearch.reduce((counts, item) => {
    for (const sourceId of item.sourceIds) {
      const domain = res002Sources[sourceId].domain;
      counts[domain] = (counts[domain] ?? 0) + 1;
    }
    return counts;
  }, {}))
    .map(([domain, queryOccurrences]) => Object.freeze({ domain, queryOccurrences }))
    .sort((a, b) => b.queryOccurrences - a.queryOccurrences || a.domain.localeCompare(b.domain)),
);

export const res002Summary = Object.freeze({
  totalQueries: res002QueryResearch.length,
  byCategory: Object.freeze(res002QueryResearch.reduce((counts, item) => {
    counts[item.category] = (counts[item.category] ?? 0) + 1;
    return counts;
  }, {})),
  totalSourcePages: Object.keys(res002Sources).length,
  totalDomains: new Set(Object.values(res002Sources).map(({ domain }) => domain)).size,
  searchVolumeStatus: "UNKNOWN",
});

if (res002Summary.totalQueries < 50 || res002Summary.totalQueries > 100) {
  throw new Error(`RES-002 must contain 50–100 purposeful queries; found ${res002Summary.totalQueries}.`);
}

for (const item of res002QueryResearch) {
  if (!item.checkedAt || item.searchVolumeStatus !== "UNKNOWN" || item.sourceIds.length === 0) {
    throw new Error(`Invalid RES-002 research record: ${item.query}`);
  }
}
