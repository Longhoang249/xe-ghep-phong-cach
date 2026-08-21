export type SeoStatus =
  | "BACKLOG"
  | "RESEARCH"
  | "DATA_REQUIRED"
  | "READY"
  | "IN_PROGRESS"
  | "REVIEW"
  | "APPROVED"
  | "PUBLISHED"
  | "MONITORING"
  | "UPDATE_REQUIRED"
  | "BLOCKED";

export type SeoAssetType = "MONEY_PAGE" | "SUPPORTING" | "COMPARISON";
export type SeoCluster = "CLUSTER-A" | "CLUSTER-B" | "CLUSTER-C" | "OTHER";

export type SeoAsset = {
  assetId: string;
  assetType: SeoAssetType;
  slug: string;
  cluster: SeoCluster;
  status: SeoStatus;
  legacy: boolean;
  dataKey: string;
  canonical: string;
  publishedAt: string | null;
  lastReviewedAt: string | null;
  /** Preserves public behavior for the 31 pages that predate TECH-001. */
  backfilledExisting: boolean;
};

export type EvidenceStatus = "VERIFIED" | "PUBLIC_SOURCE" | "ESTIMATE" | "UNKNOWN";

export type EvidenceFact<T> = {
  value: T | null;
  status: EvidenceStatus;
  sourceType: string | null;
  sourceRef: string | null;
  verifiedAt: string | null;
  verifiedBy: string | null;
  notes: string | null;
};

export type RouteEvidence = {
  price: EvidenceFact<number>;
  distance: EvidenceFact<number>;
  duration: EvidenceFact<number>;
  pickupAreas: EvidenceFact<string[]>;
  dropoffAreas: EvidenceFact<string[]>;
  operatingHours: EvidenceFact<string>;
  parcelPrice: EvidenceFact<number>;
  charter4Price: EvidenceFact<number>;
  charter7Price: EvidenceFact<number>;
  sharedRideAvailable: EvidenceFact<boolean>;
  charterAvailable: EvidenceFact<boolean>;
  parcelAvailable: EvidenceFact<boolean>;
  bidirectional: EvidenceFact<boolean>;
  doorToDoor: EvidenceFact<boolean>;
  paymentAfterTrip: EvidenceFact<boolean>;
  advanceBookingFree: EvidenceFact<boolean>;
};
