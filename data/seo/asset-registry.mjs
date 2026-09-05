/**
 * Explicit production SEO asset registry.
 *
 * Raw route or guide data is not publishable by itself. Only records whose
 * status is exactly PUBLISHED are eligible for production rendering, sitemap
 * inclusion, indexability, and automatic discovery.
 */
export const seoAssets = Object.freeze([
  { assetId: "MP-001", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-duong-ha-noi", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "hd-hn", canonical: "/xe-ghep-hai-duong-ha-noi", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-002", assetType: "MONEY_PAGE", slug: "xe-hai-duong-noi-bai", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "hd-nb", canonical: "/xe-hai-duong-noi-bai", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-003", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-duong-hai-phong", cluster: "CLUSTER-A", status: "PUBLISHED", legacy: false, dataKey: "hd-hp", canonical: "/xe-ghep-hai-duong-hai-phong", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-004", assetType: "MONEY_PAGE", slug: "xe-hai-duong-cat-bi", cluster: "CLUSTER-A", status: "PUBLISHED", legacy: false, dataKey: "hd-cb", canonical: "/xe-hai-duong-cat-bi", publishedAt: null, lastReviewedAt: "2026-08-22", backfilledExisting: true },
  { assetId: "MP-005", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-duong-quang-ninh", cluster: "CLUSTER-B", status: "PUBLISHED", legacy: false, dataKey: "hd-qn", canonical: "/xe-ghep-hai-duong-quang-ninh", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-006", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-phong-quang-ninh", cluster: "CLUSTER-C", status: "PUBLISHED", legacy: false, dataKey: "hp-qn", canonical: "/xe-ghep-hai-phong-quang-ninh", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-007", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-duong-bac-ninh", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "hd-bn", canonical: "/xe-ghep-hai-duong-bac-ninh", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-008", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-duong-bac-giang", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "hd-bg", canonical: "/xe-ghep-hai-duong-bac-giang", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-009", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-duong-thai-nguyen", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "hd-tn", canonical: "/xe-ghep-hai-duong-thai-nguyen", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-010", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-duong-vinh-phuc", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "hd-vp", canonical: "/xe-ghep-hai-duong-vinh-phuc", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-011", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-duong-phu-tho", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "hd-pt", canonical: "/xe-ghep-hai-duong-phu-tho", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-012", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-duong-thai-binh", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "hd-tb", canonical: "/xe-ghep-hai-duong-thai-binh", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-013", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-duong-nam-dinh", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "hd-nd", canonical: "/xe-ghep-hai-duong-nam-dinh", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-014", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-duong-hung-yen", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "hd-hy", canonical: "/xe-ghep-hai-duong-hung-yen", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-015", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-duong-ha-nam", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "hd-hanam", canonical: "/xe-ghep-hai-duong-ha-nam", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-016", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-duong-phu-ly", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "hd-pl", canonical: "/xe-ghep-hai-duong-phu-ly", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-017", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-duong-ninh-binh", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "hd-nb2", canonical: "/xe-ghep-hai-duong-ninh-binh", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "MP-018", assetType: "MONEY_PAGE", slug: "xe-ghep-hai-duong-thanh-hoa", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "hd-th", canonical: "/xe-ghep-hai-duong-thanh-hoa", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  {
    assetId: "MP-019",
    assetType: "MONEY_PAGE",
    slug: "xe-ghep-hai-duong-ha-long",
    cluster: "CLUSTER-B",
    status: "PUBLISHED",
    legacy: false,
    dataKey: "hd-ha-long",
    canonical: "/xe-ghep-hai-duong-ha-long",
    publishedAt: "2026-08-22",
    lastReviewedAt: "2026-08-22",
    backfilledExisting: false,
    publicationHistory: Object.freeze([
      Object.freeze({ status: "REGISTERED", at: "2026-08-22", decision: "SPRINT-003A" }),
      Object.freeze({ status: "REVIEW", at: "2026-08-22", decision: "SPRINT-003A" }),
      Object.freeze({ status: "APPROVED", at: "2026-08-22", decision: "Owner Wave 2 approval" }),
      Object.freeze({ status: "PUBLISHED", at: "2026-08-22", decision: "SPRINT-003A controlled publication" }),
    ]),
  },

  { assetId: "CP-001", assetType: "COMPARISON", slug: "di-hai-duong-ha-noi-bang-phuong-tien-gi", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "di-hai-duong-ha-noi-bang-phuong-tien-gi", canonical: "/blog/di-hai-duong-ha-noi-bang-phuong-tien-gi", publishedAt: null, lastReviewedAt: "2026-09-03", backfilledExisting: true },
  { assetId: "CP-002", assetType: "COMPARISON", slug: "nhung-chuyen-xe-tu-hai-duong-di-quang-ninh", cluster: "CLUSTER-B", status: "PUBLISHED", legacy: false, dataKey: "nhung-chuyen-xe-tu-hai-duong-di-quang-ninh", canonical: "/blog/nhung-chuyen-xe-tu-hai-duong-di-quang-ninh", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "CP-003", assetType: "COMPARISON", slug: "di-hai-duong-hai-phong-bang-phuong-tien-gi", cluster: "CLUSTER-A", status: "PUBLISHED", legacy: false, dataKey: "di-hai-duong-hai-phong-bang-phuong-tien-gi", canonical: "/blog/di-hai-duong-hai-phong-bang-phuong-tien-gi", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "CP-004", assetType: "COMPARISON", slug: "di-hai-phong-quang-ninh-bang-phuong-tien-gi", cluster: "CLUSTER-C", status: "PUBLISHED", legacy: false, dataKey: "di-hai-phong-quang-ninh-bang-phuong-tien-gi", canonical: "/blog/di-hai-phong-quang-ninh-bang-phuong-tien-gi", publishedAt: null, lastReviewedAt: "2026-09-03", backfilledExisting: true },
  { assetId: "CP-005", assetType: "COMPARISON", slug: "xe-ghep-hay-xe-khach-hai-duong-ha-noi", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "xe-ghep-hay-xe-khach-hai-duong-ha-noi", canonical: "/blog/xe-ghep-hay-xe-khach-hai-duong-ha-noi", publishedAt: null, lastReviewedAt: "2026-09-05", backfilledExisting: true },
  { assetId: "SC-001", assetType: "SUPPORTING", slug: "cach-dat-xe-ghep-hai-duong-quang-ninh", cluster: "CLUSTER-B", status: "PUBLISHED", legacy: false, dataKey: "cach-dat-xe-ghep-hai-duong-quang-ninh", canonical: "/blog/cach-dat-xe-ghep-hai-duong-quang-ninh", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "SC-002", assetType: "SUPPORTING", slug: "gui-hang-hai-duong-hai-phong-theo-chuyen", cluster: "CLUSTER-A", status: "PUBLISHED", legacy: false, dataKey: "gui-hang-hai-duong-hai-phong-theo-chuyen", canonical: "/blog/gui-hang-hai-duong-hai-phong-theo-chuyen", publishedAt: null, lastReviewedAt: "2026-09-05", backfilledExisting: true },
  { assetId: "SC-003", assetType: "SUPPORTING", slug: "xe-hai-duong-di-noi-bai-cho-gia-dinh", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "xe-hai-duong-di-noi-bai-cho-gia-dinh", canonical: "/blog/xe-hai-duong-di-noi-bai-cho-gia-dinh", publishedAt: null, lastReviewedAt: "2026-09-05", backfilledExisting: true },
  { assetId: "CP-006", assetType: "COMPARISON", slug: "xe-ha-noi-ve-hai-duong-chon-phuong-tien-nao", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "xe-ha-noi-ve-hai-duong-chon-phuong-tien-nao", canonical: "/blog/xe-ha-noi-ve-hai-duong-chon-phuong-tien-nao", publishedAt: null, lastReviewedAt: "2026-09-05", backfilledExisting: true },
  { assetId: "SC-004", assetType: "SUPPORTING", slug: "xe-hai-phong-ve-hai-duong-can-chuan-bi-gi", cluster: "CLUSTER-A", status: "PUBLISHED", legacy: false, dataKey: "xe-hai-phong-ve-hai-duong-can-chuan-bi-gi", canonical: "/blog/xe-hai-phong-ve-hai-duong-can-chuan-bi-gi", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "CP-007", assetType: "COMPARISON", slug: "xe-hai-duong-di-cat-bi-chon-xe-ghep-hay-bao-xe", cluster: "CLUSTER-A", status: "PUBLISHED", legacy: false, dataKey: "xe-hai-duong-di-cat-bi-chon-xe-ghep-hay-bao-xe", canonical: "/blog/xe-hai-duong-di-cat-bi-chon-xe-ghep-hay-bao-xe", publishedAt: null, lastReviewedAt: "2026-09-03", backfilledExisting: true },
  { assetId: "SC-005", assetType: "SUPPORTING", slug: "dat-xe-hai-duong-ha-noi-can-thong-tin-gi", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "dat-xe-hai-duong-ha-noi-can-thong-tin-gi", canonical: "/blog/dat-xe-hai-duong-ha-noi-can-thong-tin-gi", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
  { assetId: "SC-006", assetType: "SUPPORTING", slug: "gui-hang-hai-duong-ha-noi-theo-chuyen", cluster: "OTHER", status: "PUBLISHED", legacy: true, dataKey: "gui-hang-hai-duong-ha-noi-theo-chuyen", canonical: "/blog/gui-hang-hai-duong-ha-noi-theo-chuyen", publishedAt: null, lastReviewedAt: "2026-08-21", backfilledExisting: true },
]);
