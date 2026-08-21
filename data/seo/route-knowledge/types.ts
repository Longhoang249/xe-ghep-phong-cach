export type KnowledgeEvidenceStatus = "VERIFIED" | "PUBLIC_SOURCE" | "ESTIMATE" | "UNKNOWN";

export type KnowledgeSourceType =
  | "OWNER_CONFIRMATION"
  | "PUBLIC_SOURCE"
  | "REPOSITORY"
  | "REPOSITORY_FORMULA"
  | "PROJECT_BRIEF"
  | null;

export type KnowledgeFact<T = unknown> = {
  value: T | null;
  status: KnowledgeEvidenceStatus;
  sourceType: KnowledgeSourceType;
  sourceRef: string | null;
  verifiedAt: string | null;
  verifiedBy: string | null;
  notes: string | null;
};

export type Phase1Cluster = "CLUSTER-A" | "CLUSTER-B" | "CLUSTER-C";
export type Directionality = "BIDIRECTIONAL_CLAIM_UNVERIFIED";
export type EndpointLifecycle = "EXISTING_ASSET" | "CANDIDATE";
export type ServiceStatus = "CONFIRMED" | "UNCONFIRMED" | "NOT_SERVICED";
export type PublicationReadiness = "READY_FOR_CONTENT" | "PARTIAL" | "DATA_REQUIRED" | "DO_NOT_PUBLISH";

export type CommercialFacts = {
  sharedRidePrice: KnowledgeFact<number>;
  charter4SeatPrice: KnowledgeFact<number>;
  charter7SeatPrice: KnowledgeFact<number>;
  parcelPrice: KnowledgeFact<number>;
  pricingNotes: KnowledgeFact<string>;
  surcharges: KnowledgeFact<string[]>;
};

export type JourneyFacts = {
  distanceKm: KnowledgeFact<number>;
  durationMinutes: KnowledgeFact<number>;
  pickupAreas: KnowledgeFact<string[]>;
  dropoffAreas: KnowledgeFact<string[]>;
  majorStops: KnowledgeFact<string[]>;
  airportInformation: KnowledgeFact<string>;
};

export type OperationalFacts = {
  serviceAvailability: KnowledgeFact<string>;
  operatingHours: KnowledgeFact<string>;
  bookingLeadTime: KnowledgeFact<string>;
  vehicleNotes: KnowledgeFact<string>;
  luggageNotes: KnowledgeFact<string>;
  parcelNotes: KnowledgeFact<string>;
  waitingPolicy: KnowledgeFact<string>;
};

export type DirectionFacts = {
  directionId: string;
  origin: string;
  destination: string;
  serviceAvailability: KnowledgeFact<string>;
  pickupPattern: KnowledgeFact<string[]>;
  dropoffPattern: KnowledgeFact<string[]>;
  routeNotes: KnowledgeFact<string>;
  airportRequirements: KnowledgeFact<string>;
};

export type SearchSupport = {
  aliases: string[];
  commonQueries: string[];
  faqCandidates: string[];
  relatedRoutes: string[];
};

export type CompletenessScore = {
  commercial: number;
  journey: number;
  operations: number;
  evidence: number;
};

export type Phase1ParentRoute = {
  routeId: string;
  origin: string;
  destination: string;
  directionality: Directionality;
  parentCluster: Phase1Cluster;
  routeType: "PARENT_CORRIDOR";
  assetIds: string[];
  publicationState: "EXISTING_PUBLISHED";
  commercial: CommercialFacts;
  journey: JourneyFacts;
  operations: OperationalFacts;
  directions: DirectionFacts[];
  searchSupport: SearchSupport;
  completeness: CompletenessScore;
  readiness: PublicationReadiness;
};

export type Phase1SubRoute = {
  subRouteId: string;
  parentRouteId: string;
  parentCluster: Phase1Cluster;
  endpoint: string;
  endpointProvince: string;
  endpointLifecycle: EndpointLifecycle;
  serviceStatus: ServiceStatus;
  existingAssetIds: string[];
  publicationState: "EXISTING_PUBLISHED" | "DATA_ONLY";
  canonical: string | null;
  commercial: CommercialFacts;
  journey: JourneyFacts;
  operations: OperationalFacts;
  completeness: CompletenessScore;
  readiness: PublicationReadiness;
};
