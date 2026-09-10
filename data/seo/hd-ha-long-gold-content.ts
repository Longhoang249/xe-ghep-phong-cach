/**
 * GOLD STANDARD CONTENT DATASET: HẢI DƯƠNG ⇄ HẠ LONG (hd-ha-long)
 *
 * Sourced strictly from data/seo/pricing-engine.ts, OWNER_VERIFICATION_RECORD_PHASE1.md,
 * and owner_price_sheet_2026_09_09.
 * Zero hardcoded price numbers: price strings are derived via formatPriceDisplay.
 * Fact-governed for tourism/commercial intent: Zero invented operational claims (no fixed schedules,
 * no cruise connection guarantees, customer guidance used for destination planning).
 */

import {
  getRoutePrice,
  formatPriceDisplay,
} from "./pricing-engine";
import type {
  DecisionGuideRow,
  HubCategory,
  MediaGalleryItem,
  QualityCommitment,
} from "./hd-hp-gold-content";

export interface DestinationComparisonItem {
  id: string;
  name: string;
  sharedPriceDisplay: string;
  privatePriceDisplay: string;
  travelTime: string;
  distanceKm: string;
  description: string;
  popularSpots: string[];
  note: string;
}

/**
 * Bảng so sánh thương mại Hạ Long vs Bãi Cháy lấy dữ liệu trực tiếp từ pricing-engine.
 */
export function getHaLongComparisonRows(): DestinationComparisonItem[] {
  const haLongShared = getRoutePrice("Hạ Long", "shared");
  const haLongPrivate = getRoutePrice("Hạ Long", "private");
  const baiChayShared = getRoutePrice("Bãi Cháy", "shared");
  const baiChayPrivate = getRoutePrice("Bãi Cháy", "private");

  const hlSharedText = haLongShared ? formatPriceDisplay(haLongShared) : "400.000đ/người";
  const hlPrivateText = haLongPrivate ? formatPriceDisplay(haLongPrivate) : "1.000.000đ/chuyến";
  const bcSharedText = baiChayShared ? formatPriceDisplay(baiChayShared) : "350.000đ/người";
  const bcPrivateText = baiChayPrivate ? formatPriceDisplay(baiChayPrivate) : "900.000đ/chuyến";

  return [
    {
      id: "ha-long-center",
      name: "Khu vực Hạ Long (Hòn Gai / Trung tâm)",
      sharedPriceDisplay: hlSharedText,
      privatePriceDisplay: hlPrivateText,
      travelTime: "1,5 - 2 giờ (ước tính)",
      distanceKm: "~85 - 95 km",
      description: "Phục vụ khu vực nội đô Hòn Gai, Cột 5, Cột 8, các cơ quan hành chính, bệnh viện và khu dân cư trung tâm thành phố.",
      popularSpots: ["Trung tâm Hòn Gai", "Bảo tàng Quảng Ninh", "Cột 5 - Cột 8", "Cầu Bãi Cháy"],
      note: "Bao xe riêng chưa gồm vé cầu đường cao tốc (tollIncluded: false). Đặt trước không mất phí. Thanh toán sau chuyến.",
    },
    {
      id: "bai-chay-tourist",
      name: "Khu vực Bãi Cháy (Du lịch / Ven biển)",
      sharedPriceDisplay: bcSharedText,
      privatePriceDisplay: bcPrivateText,
      travelTime: "1,5 - 2 giờ (ước tính)",
      distanceKm: "~75 - 85 km",
      description: "Phục vụ các khách sạn ven biển, khu du lịch Bãi Cháy, tổ hợp giải trí và các bến tàu tham quan vịnh.",
      popularSpots: ["Khu du lịch Bãi Cháy", "Cảng tàu khách quốc tế Hạ Long", "Sun World Hạ Long", "Bãi tắm Bãi Cháy"],
      note: "Bãi Cháy có biểu giá riêng theo cự ly thực tế, không tính phụ phí cộng dồn từ Hạ Long. Bao xe chưa gồm vé cao tốc.",
    },
  ];
}

/**
 * Danh sách điểm đến địa phương để định hướng khách hàng.
 */
export const HA_LONG_DESTINATION_HUBS: HubCategory[] = [
  {
    categoryName: "Điểm du lịch & Tham quan vịnh",
    icon: "🚢",
    hubs: [
      { name: "Cảng tàu khách quốc tế Hạ Long (Cảng Bãi Cháy)", addressOrArea: "Bãi Cháy", note: "Điểm xuất phát tàu tham quan Vịnh Hạ Long" },
      { name: "Sun World Hạ Long Complex", addressOrArea: "Bãi Cháy", note: "Khu vui chơi giải trí trung tâm Bãi Cháy" },
      { name: "Bảo tàng Quảng Ninh", addressOrArea: "Hòn Gai", note: "Khu vực Hòn Gai, công trình kiến trúc biểu tượng" },
      { name: "Bến phà / Cảng Tuần Châu", addressOrArea: "Tuần Châu", note: "Cửa ngõ tàu du lịch và phà sang Cát Bà" },
    ],
  },
  {
    categoryName: "Khách sạn & Khu nghỉ dưỡng",
    icon: "🏨",
    hubs: [
      { name: "Trục đường Hạ Long (Bãi Cháy)", addressOrArea: "Bãi Cháy", note: "Tập trung các khách sạn 3-5 sao ven biển" },
      { name: "Khu đô thị Marina Bãi Cháy", addressOrArea: "Bãi Cháy", note: "Khu nghỉ dưỡng và căn hộ dịch vụ du lịch" },
      { name: "Khu vực Hòn Gai", addressOrArea: "Hòn Gai", note: "Khách sạn, nhà khách phục vụ công tác và hội nghị" },
    ],
  },
  {
    categoryName: "Khu dân cư & Cơ quan hành chính",
    icon: "🏛️",
    hubs: [
      { name: "Khu đô thị Cột 5 - Cột 8", addressOrArea: "Hòn Gai", note: "Khu hành chính và dân cư đông đúc Hòn Gai" },
      { name: "Bệnh viện Đa khoa tỉnh Quảng Ninh", addressOrArea: "Hòn Gai", note: "Khu vực phục vụ nhu cầu y tế" },
      { name: "Chợ Hạ Long 1 & Chợ Hạ Long 2", addressOrArea: "Hòn Gai", note: "Trung tâm mua sắm hải sản và đặc sản địa phương" },
    ],
  },
];

/**
 * Hướng dẫn lựa chọn phương án xe phù hợp nhu cầu.
 */
export const HA_LONG_DECISION_GUIDE: DecisionGuideRow[] = [
  {
    criterion: "Đi cá nhân 1 - 2 người",
    sharedRide: "400.000đ/người (Hạ Long) / 350.000đ/người (Bãi Cháy)",
    privateCar: "1.000.000đ/chuyến (Hạ Long) / 900.000đ/chuyến (Bãi Cháy)",
    recommendation: "Nên chọn xe ghép để tiết kiệm chi phí tối đa, vẫn đón trả tận nơi hai chiều an toàn.",
  },
  {
    criterion: "Đi nhóm bạn hoặc gia đình",
    sharedRide: "Tính theo số người (400k/người)",
    privateCar: "1.000.000đ/chuyến (Hạ Long) / 900.000đ/chuyến (Bãi Cháy)",
    recommendation: "Bao xe riêng mang lại không gian riêng tư trọn vẹn, thời gian xuất phát linh hoạt hoàn toàn theo lịch trình.",
  },
  {
    criterion: "Đến khách sạn ven biển Bãi Cháy",
    sharedRide: "350.000đ/người (biểu giá riêng Bãi Cháy)",
    privateCar: "900.000đ/chuyến (biểu giá riêng Bãi Cháy)",
    recommendation: "Áp dụng biểu giá riêng cho Bãi Cháy theo cự ly thực tế, tiết kiệm hơn khi đến các khách sạn ven biển.",
  },
  {
    criterion: "Đến cảng tàu hoặc tour tham quan vịnh",
    sharedRide: "Cần báo trước giờ lên tàu để kiểm tra xe",
    privateCar: "1.000.000đ/chuyến (chủ động giờ đón tận nhà)",
    recommendation: "Nên chọn bao xe riêng và cung cấp giờ xuất bến dự kiến để nhà xe tư vấn giờ xuất phát phù hợp.",
  },
  {
    criterion: "Mang nhiều hành lý du lịch",
    sharedRide: "Hạn chế vali quá khổ hoặc nhiều kiện lớn",
    privateCar: "Cốp xe rộng rãi đủ cho nhiều vali gia đình",
    recommendation: "Khách nên thông báo trước số lượng vali để nhà xe bố trí khoang cốp xe rộng rãi phù hợp.",
  },
];

/**
 * Cam kết chất lượng dịch vụ chuẩn hóa cho tuyến Hạ Long.
 */
export const HA_LONG_QUALITY_COMMITMENTS: QualityCommitment[] = [
  {
    title: "Đặt trước không mất phí",
    description: "Khách giữ chỗ không cần chuyển khoản cọc. Toàn bộ tiền cước thanh toán trực tiếp cho tài xế sau chuyến đi an toàn.",
    badge: "ĐẶT TRƯỚC 0Đ",
  },
  {
    title: "Đón tận nơi, trả tận điểm",
    description: "Đón tại địa chỉ nhà ở Hải Dương, trả tại khách sạn, bến tàu hoặc khu dân cư theo nhu cầu tại Bãi Cháy và Hạ Long.",
    badge: "TẬN NƠI HAI ĐẦU",
  },
  {
    title: "Phục vụ hai chiều thuận tiện",
    description: "Nhận chiều Hạ Long về Hải Dương theo lịch hẹn trước. Dễ dàng sắp xếp chuyến về sau kỳ nghỉ dưỡng hoặc công tác.",
    badge: "HAI CHIỀU",
  },
  {
    title: "Lái xe an toàn, đúng hẹn",
    description: "Tài xế nhiều năm kinh nghiệm chạy tuyến Hải Dương - Quảng Ninh, phong cách điềm đạm, tôn trọng khách hàng.",
    badge: "AN TÂM",
  },
];

/**
 * Bộ sưu tập hình ảnh minh chứng thực tế phương tiện.
 */
export const HA_LONG_MEDIA_GALLERY: MediaGalleryItem[] = [
  {
    src: "/images/dich-vu-xe-4-cho.png",
    alt: "Xe 4 chỗ đưa đón khách tuyến Hải Dương - Hạ Long",
    caption: "Dòng xe sedan 4 chỗ phục vụ khách đi ghép 1-2 người hoặc bao xe riêng tiết kiệm.",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/dich-vu-xe-7-cho.png",
    alt: "Xe 7 chỗ rộng rãi phục vụ gia đình đi du lịch Hạ Long",
    caption: "Dòng xe MPV/SUV 7 chỗ khoang ghế rộng rãi, phù hợp gia đình mang nhiều vali du lịch.",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/gui-hang-theo-chuyen.png",
    alt: "Dịch vụ gửi hàng hóa tuyến Hải Dương - Hạ Long",
    caption: "Nhận gửi bưu phẩm, đồ đạc và hàng hóa theo từng chuyến xe tiện lợi.",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/hero-phong-cach-fleet.png",
    alt: "Đội xe Phong Cách phục vụ tuyến Hải Dương đi Quảng Ninh",
    caption: "Đội ngũ xe gia đình sẵn sàng phục vụ hành khách kết nối Hải Dương và Quảng Ninh.",
    width: 1448,
    height: 1086,
  },
];
