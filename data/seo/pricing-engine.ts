/**
 * CENTRAL PRICING DATASET & ENGINE — SINGLE SOURCE OF TRUTH
 *
 * Sourced strictly from owner_price_sheet_2026_09_09 (verified 2026-09-09).
 * Every public pricing presentation on route pages, landing pages, and components
 * must consume or conform to this dataset.
 *
 * CLUSTER-WIDE INVARIANT:
 * "LEGACY SEARCH PLACE NAMES MAY BE USED FOR SEO, BUT THEY MUST NOT BE MISREPRESENTED AS CURRENT OFFICIAL ADMINISTRATIVE UNITS."
 * (Under Vietnam's 2025 two-level local-government model / Nghị quyết 76/2025/UBTVQH15,
 * legacy place names like Hải Dương, An Dương, Thủy Nguyên, Đồ Sơn, etc. are preserved for user search intent
 * but are strictly treated as neutral geographic labels, not current official district-level units).
 */

export type ServiceType = "shared" | "private" | "parcel";
export type PricingType = "EXACT" | "RANGE" | "FROM" | "PER_KM" | "CONTACT";
export type PriceUnit = "person" | "trip" | "parcel" | "km";
export type PriceStatus = "VERIFIED" | "UNKNOWN";

export type RoutePriceRecord = {
  origin: string;
  province: string;
  destination: string;
  service: ServiceType;
  pricingType: PricingType;
  priceMin?: number;
  priceMax?: number;
  pricePerKm?: number;
  unit: PriceUnit;
  tollIncluded?: boolean | null;
  notes?: string;
  sourceId: string;
  verifiedAt: string;
  status: PriceStatus;
};

export const PRICING_SOURCE_ID_0909 = "owner_price_sheet_2026_09_09";
export const PRICING_SOURCE_ID_PHASE1 = "OWNER_VERIFICATION_RECORD_PHASE1.md";
export const PRICING_SOURCE_ID = PRICING_SOURCE_ID_0909;
export const PRICING_VERIFIED_AT = "2026-09-09";

/**
 * 100% Central verified route pricing records.
 * Primary Hub: Hải Dương.
 */
export const routePricingDataset: ReadonlyArray<RoutePriceRecord> = Object.freeze([
  // =========================================================================
  // HẢI DƯƠNG ⇄ HẢI PHÒNG: SHARED RIDE (GHÉP GHẾ)
  // =========================================================================
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Trung tâm Hải Phòng",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 250000,
    priceMax: 250000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "An Dương",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 250000,
    priceMax: 250000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "An Lão",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 250000,
    priceMax: 250000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Kiến Thụy",
    service: "shared",
    pricingType: "RANGE",
    priceMin: 300000,
    priceMax: 350000,
    unit: "person",
    notes: "Tùy vị trí đón trả cụ thể",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Dương Kinh",
    service: "shared",
    pricingType: "RANGE",
    priceMin: 300000,
    priceMax: 350000,
    unit: "person",
    notes: "Tùy vị trí đón trả cụ thể",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Thủy Nguyên",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 300000,
    priceMax: 300000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Sân bay Cát Bi",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 300000,
    priceMax: 300000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Tiên Lãng",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 300000,
    priceMax: 300000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Vĩnh Bảo",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 300000,
    priceMax: 300000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Đồ Sơn",
    service: "shared",
    pricingType: "RANGE",
    priceMin: 350000,
    priceMax: 400000,
    unit: "person",
    notes: "Tùy khu 1, khu 2 hoặc bán đảo",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Cát Hải",
    service: "shared",
    pricingType: "RANGE",
    priceMin: 350000,
    priceMax: 400000,
    unit: "person",
    notes: "Đến đầu đảo / bến phà",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },

  // =========================================================================
  // HẢI DƯƠNG ⇄ HẢI PHÒNG: PRIVATE CHARTER (BAO XE)
  // Quy tắc: Bao xe CHƯA gồm vé cao tốc (tollIncluded: false)
  // =========================================================================
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Trung tâm Hải Phòng",
    service: "private",
    pricingType: "EXACT",
    priceMin: 500000,
    priceMax: 500000,
    unit: "trip",
    tollIncluded: false,
    notes: "Giá chưa bao gồm vé cao tốc",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "An Dương",
    service: "private",
    pricingType: "EXACT",
    priceMin: 500000,
    priceMax: 500000,
    unit: "trip",
    tollIncluded: false,
    notes: "Giá chưa bao gồm vé cao tốc",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "An Lão",
    service: "private",
    pricingType: "EXACT",
    priceMin: 500000,
    priceMax: 500000,
    unit: "trip",
    tollIncluded: false,
    notes: "Giá chưa bao gồm vé cao tốc",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Thủy Nguyên",
    service: "private",
    pricingType: "RANGE",
    priceMin: 500000,
    priceMax: 550000,
    unit: "trip",
    tollIncluded: false,
    notes: "Giá chưa bao gồm vé cao tốc. Tùy khu vực Bắc Sông Cấm hay trung tâm khu vực",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Sân bay Cát Bi",
    service: "private",
    pricingType: "EXACT",
    priceMin: 550000,
    priceMax: 550000,
    unit: "trip",
    tollIncluded: false,
    notes: "Giá chưa bao gồm vé cầu đường cao tốc",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Kiến Thụy",
    service: "private",
    pricingType: "RANGE",
    priceMin: 550000,
    priceMax: 600000,
    unit: "trip",
    tollIncluded: false,
    notes: "Giá chưa bao gồm vé cao tốc",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Dương Kinh",
    service: "private",
    pricingType: "RANGE",
    priceMin: 550000,
    priceMax: 600000,
    unit: "trip",
    tollIncluded: false,
    notes: "Giá chưa bao gồm vé cao tốc",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Đồ Sơn",
    service: "private",
    pricingType: "RANGE",
    priceMin: 650000,
    priceMax: 700000,
    unit: "trip",
    tollIncluded: false,
    notes: "Giá chưa bao gồm vé cao tốc",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Cát Hải",
    service: "private",
    pricingType: "RANGE",
    priceMin: 650000,
    priceMax: 700000,
    unit: "trip",
    tollIncluded: false,
    notes: "Giá chưa bao gồm vé cao tốc",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Tiên Lãng",
    service: "private",
    pricingType: "PER_KM",
    pricePerKm: 10000,
    unit: "km",
    tollIncluded: false,
    notes: "Tính cước 10.000đ/km theo lộ trình thực tế; không tự suy diễn tổng giá trọn gói",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Vĩnh Bảo",
    service: "private",
    pricingType: "PER_KM",
    pricePerKm: 10000,
    unit: "km",
    tollIncluded: false,
    notes: "Tính cước 10.000đ/km theo lộ trình thực tế; không tự suy diễn tổng giá trọn gói",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },

  // =========================================================================
  // HẢI DƯƠNG ⇄ QUẢNG NINH: SHARED RIDE (GHÉP GHẾ)
  // =========================================================================
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Đông Triều",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 250000,
    priceMax: 250000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Mạo Khê",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 250000,
    priceMax: 250000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Uông Bí",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 300000,
    priceMax: 300000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Quảng Yên",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 350000,
    priceMax: 350000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Bãi Cháy",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 350000,
    priceMax: 350000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Hạ Long",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 400000,
    priceMax: 400000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Cẩm Phả",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 450000,
    priceMax: 450000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Cửa Ông",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 500000,
    priceMax: 500000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Vân Đồn",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 500000,
    priceMax: 500000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Ao Tiên",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 500000,
    priceMax: 500000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Ba Chẽ",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 600000,
    priceMax: 600000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Tiên Yên",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 600000,
    priceMax: 600000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Đầm Hà",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 650000,
    priceMax: 650000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Bình Liêu",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 650000,
    priceMax: 650000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Hải Hà",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 650000,
    priceMax: 650000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Móng Cái",
    service: "shared",
    pricingType: "EXACT",
    priceMin: 700000,
    priceMax: 700000,
    unit: "person",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },

  // =========================================================================
  // HẢI DƯƠNG ⇄ QUẢNG NINH: PRIVATE CHARTER (BAO XE)
  // Quy tắc: Bao xe CHƯA gồm vé cao tốc (tollIncluded: false)
  // =========================================================================
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Đông Triều",
    service: "private",
    pricingType: "PER_KM",
    pricePerKm: 10000,
    unit: "km",
    tollIncluded: false,
    notes: "Tính cước 10.000đ/km theo lộ trình thực tế; không tự suy diễn tổng giá trọn gói",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Mạo Khê",
    service: "private",
    pricingType: "PER_KM",
    pricePerKm: 10000,
    unit: "km",
    tollIncluded: false,
    notes: "Tính cước 10.000đ/km theo lộ trình thực tế; không tự suy diễn tổng giá trọn gói",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Uông Bí",
    service: "private",
    pricingType: "EXACT",
    priceMin: 600000,
    priceMax: 600000,
    unit: "trip",
    tollIncluded: false,
    notes: "Giá chưa bao gồm vé cao tốc",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Quảng Yên",
    service: "private",
    pricingType: "EXACT",
    priceMin: 700000,
    priceMax: 700000,
    unit: "trip",
    tollIncluded: false,
    notes: "Giá chưa bao gồm vé cao tốc",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Bãi Cháy",
    service: "private",
    pricingType: "EXACT",
    priceMin: 900000,
    priceMax: 900000,
    unit: "trip",
    tollIncluded: false,
    notes: "Giá chưa bao gồm vé cao tốc",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Hạ Long",
    service: "private",
    pricingType: "EXACT",
    priceMin: 1000000,
    priceMax: 1000000,
    unit: "trip",
    tollIncluded: false,
    notes: "Giá chưa bao gồm vé cao tốc",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Cẩm Phả",
    service: "private",
    pricingType: "RANGE",
    priceMin: 1200000,
    priceMax: 1300000,
    unit: "trip",
    tollIncluded: false,
    notes: "Giá chưa bao gồm vé cao tốc. Tùy khu vực trung tâm hoặc mỏ than/ven biển",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Vân Đồn",
    service: "private",
    pricingType: "EXACT",
    priceMin: 1500000,
    priceMax: 1500000,
    unit: "trip",
    tollIncluded: false,
    notes: "Giá chưa bao gồm vé cao tốc",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
  // 8 điểm đến xa Quảng Ninh KHÔNG CÓ giá bao xe xác nhận -> Bắt buộc CONTACT / UNKNOWN
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Cửa Ông",
    service: "private",
    pricingType: "CONTACT",
    unit: "trip",
    tollIncluded: false,
    notes: "Chưa có biểu giá cố định; liên hệ xác nhận theo chuyến",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "UNKNOWN",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Ao Tiên",
    service: "private",
    pricingType: "CONTACT",
    unit: "trip",
    tollIncluded: false,
    notes: "Chưa có biểu giá cố định; liên hệ xác nhận theo chuyến",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "UNKNOWN",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Ba Chẽ",
    service: "private",
    pricingType: "CONTACT",
    unit: "trip",
    tollIncluded: false,
    notes: "Chưa có biểu giá cố định; liên hệ xác nhận theo chuyến",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "UNKNOWN",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Tiên Yên",
    service: "private",
    pricingType: "CONTACT",
    unit: "trip",
    tollIncluded: false,
    notes: "Chưa có biểu giá cố định; liên hệ xác nhận theo chuyến",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "UNKNOWN",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Đầm Hà",
    service: "private",
    pricingType: "CONTACT",
    unit: "trip",
    tollIncluded: false,
    notes: "Chưa có biểu giá cố định; liên hệ xác nhận theo chuyến",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "UNKNOWN",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Bình Liêu",
    service: "private",
    pricingType: "CONTACT",
    unit: "trip",
    tollIncluded: false,
    notes: "Chưa có biểu giá cố định; liên hệ xác nhận theo chuyến",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "UNKNOWN",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Hải Hà",
    service: "private",
    pricingType: "CONTACT",
    unit: "trip",
    tollIncluded: false,
    notes: "Chưa có biểu giá cố định; liên hệ xác nhận theo chuyến",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "UNKNOWN",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Móng Cái",
    service: "private",
    pricingType: "CONTACT",
    unit: "trip",
    tollIncluded: false,
    notes: "Chưa có biểu giá cố định; liên hệ xác nhận theo chuyến",
    sourceId: PRICING_SOURCE_ID,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "UNKNOWN",
  },

  // =========================================================================
  // DỊCH VỤ GỬI HÀNG (PARCEL DELIVERY)
  // =========================================================================
  // HẢI DƯƠNG ⇄ HẢI PHÒNG & QUẢNG NINH: PARCEL SERVICE (GỬI ĐỒ)
  // =========================================================================
  {
    origin: "Hải Dương",
    province: "Hải Phòng",
    destination: "Toàn tỉnh Hải Phòng",
    service: "parcel",
    pricingType: "FROM",
    priceMin: 150000,
    unit: "parcel",
    notes: "Mức khởi điểm hành lang 150.000đ kế thừa từ Phase 1 (22/08/2026). Nguồn 09/09 chỉ xác thực giá ghép và bao xe theo từng điểm đến, không xác thực chi tiết cước gửi đồ cho từng điểm đến riêng lẻ; giá thực tế phụ thuộc kích thước, khối lượng và điểm giao nhận.",
    sourceId: PRICING_SOURCE_ID_PHASE1,
    verifiedAt: "2026-08-22",
    status: "VERIFIED",
  },
  {
    origin: "Hải Dương",
    province: "Quảng Ninh",
    destination: "Toàn tỉnh Quảng Ninh",
    service: "parcel",
    pricingType: "RANGE",
    priceMin: 150000,
    priceMax: 200000,
    unit: "parcel",
    notes: "Từ 150.000đ – 200.000đ và cao hơn tùy chặng xa gần, tính chất hàng hóa (nguồn: owner_price_sheet_2026_09_09). Không áp dụng mức cố định đồng nhất cho toàn tỉnh.",
    sourceId: PRICING_SOURCE_ID_0909,
    verifiedAt: PRICING_VERIFIED_AT,
    status: "VERIFIED",
  },
]);

/**
 * Định dạng giá hiển thị chuẩn tiếng Việt theo mô hình kinh doanh.
 */
export function formatPriceDisplay(record: RoutePriceRecord): string {
  if (record.status === "UNKNOWN" || record.pricingType === "CONTACT") {
    return "Liên hệ";
  }

  if (record.pricingType === "PER_KM" && record.pricePerKm) {
    const kmFormatted = new Intl.NumberFormat("vi-VN").format(record.pricePerKm);
    return `${kmFormatted}đ/km`;
  }

  if (record.pricingType === "RANGE" && record.priceMin && record.priceMax) {
    const minStr = new Intl.NumberFormat("vi-VN").format(record.priceMin);
    const maxStr = new Intl.NumberFormat("vi-VN").format(record.priceMax);
    const unitStr = record.unit === "person" ? "/người" : record.unit === "trip" ? "/chuyến" : "";
    return `${minStr} – ${maxStr}đ${unitStr}`;
  }

  if (record.pricingType === "FROM" && record.priceMin) {
    const minStr = new Intl.NumberFormat("vi-VN").format(record.priceMin);
    const unitStr = record.unit === "person" ? "/người" : record.unit === "trip" ? "/chuyến" : "";
    return `Từ ${minStr}đ${unitStr}`;
  }

  if (record.pricingType === "EXACT" && record.priceMin) {
    const exactStr = new Intl.NumberFormat("vi-VN").format(record.priceMin);
    const unitStr = record.unit === "person" ? "/người" : record.unit === "trip" ? "/chuyến" : "";
    return `${exactStr}đ${unitStr}`;
  }

  return "Liên hệ";
}

/**
 * Lấy danh sách bảng giá cho một tỉnh đích.
 */
export function getProvincePriceRecords(province: string): RoutePriceRecord[] {
  return routePricingDataset.filter((r) => r.province.toLowerCase() === province.toLowerCase());
}

/**
 * Lấy bản ghi giá chính xác cho một điểm đến và loại dịch vụ.
 */
export function getRoutePrice(destination: string, service: ServiceType): RoutePriceRecord | undefined {
  const norm = destination.trim().toLowerCase();
  return routePricingDataset.find(
    (r) => r.destination.toLowerCase() === norm && r.service === service,
  );
}

/**
 * Kiểm tra tính nhất quán giữa giá hiển thị và Single Source of Truth.
 */
export function validatePriceConsistency(
  destination: string,
  service: ServiceType,
  claimedAmount: number,
): { valid: boolean; reason?: string } {
  const record = getRoutePrice(destination, service);
  if (!record) {
    return { valid: false, reason: `Không tìm thấy điểm đến ${destination} trong dataset chuẩn.` };
  }

  if (record.status === "UNKNOWN") {
    return { valid: false, reason: `Điểm ${destination} có trạng thái UNKNOWN, không được phép gán giá số ${claimedAmount}.` };
  }

  if (record.pricingType === "PER_KM") {
    return { valid: false, reason: `Điểm ${destination} tính theo PER_KM (${record.pricePerKm}đ/km), không được hiển thị giá trọn gói ${claimedAmount}.` };
  }

  if (record.pricingType === "EXACT" && record.priceMin !== claimedAmount) {
    return { valid: false, reason: `Sai lệch giá EXACT: dataset yêu cầu ${record.priceMin} nhưng hiển thị ${claimedAmount}.` };
  }

  if (record.pricingType === "RANGE" && (claimedAmount < (record.priceMin ?? 0) || claimedAmount > (record.priceMax ?? Infinity))) {
    return { valid: false, reason: `Sai lệch khoảng giá RANGE: ${claimedAmount} nằm ngoài [${record.priceMin}, ${record.priceMax}].` };
  }

  return { valid: true };
}
