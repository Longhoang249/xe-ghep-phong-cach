/** Explicit SEO relationships. OTHER is frozen and has no expansion graph. */
export const seoClusterGraph = Object.freeze({
  "CLUSTER-A": Object.freeze({
    parentAsset: "MP-003",
    children: Object.freeze(["MP-004"]),
    siblings: Object.freeze([]),
    supportingAssets: Object.freeze(["CP-003", "SC-002", "SC-004", "CP-007"]),
    frozen: false,
  }),
  "CLUSTER-B": Object.freeze({
    parentAsset: "MP-005",
    children: Object.freeze([]),
    siblings: Object.freeze([]),
    supportingAssets: Object.freeze(["CP-002", "SC-001"]),
    frozen: false,
  }),
  "CLUSTER-C": Object.freeze({
    parentAsset: "MP-006",
    children: Object.freeze([]),
    siblings: Object.freeze([]),
    supportingAssets: Object.freeze(["CP-004"]),
    frozen: false,
  }),
  OTHER: Object.freeze({
    parentAsset: null,
    children: Object.freeze([]),
    siblings: Object.freeze([]),
    supportingAssets: Object.freeze([]),
    frozen: true,
  }),
});

