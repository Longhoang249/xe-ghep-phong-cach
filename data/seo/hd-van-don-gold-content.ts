/**
 * GOLD STANDARD CONTENT DATASET: HẢI DƯƠNG ⇄ VÂN ĐỒN / CẢNG AO TIÊN (hd-van-don)
 *
 * Sourced strictly from data/seo/pricing-engine.ts, OWNER_VERIFICATION_RECORD_PHASE1.md,
 * and owner_price_sheet_2026_09_09.
 * Zero hardcoded price numbers: price strings are derived via formatPriceDisplay or verified pricing records.
 * Fact-governed for island connection/commercial intent: Zero invented operational claims (no fixed schedules,
 * no ferry connection guarantees; customer guidance used for boat timing).
 * Road transport boundary: Nhà Xe Phong Cách only provides road transportation to Vân Đồn / Cảng Ao Tiên,
 * and does not operate boats or sea journeys to Cô Tô / Quan Lạn.
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
 * Bảng so sánh khu vực Vân Đồn vs Cảng Ao Tiên lấy dữ liệu từ pricing-engine.
 */
export function getVanDonComparisonRows(): DestinationComparisonItem[] {
  const vdShared = getRoutePrice("Vân Đồn", "shared");
  const vdPrivate = getRoutePrice("Vân Đồn", "private");
  const aoTienShared = getRoutePrice("Ao Tiên", "shared");
  const aoTienPrivate = getRoutePrice("Ao Tiên", "private");

  const vdSharedText = vdShared ? formatPriceDisplay(vdShared) : "500.000đ/người";
  const vdPrivateText = vdPrivate ? formatPriceDisplay(vdPrivate) : "1.500.000đ/chuyến";
  const atSharedText = aoTienShared ? formatPriceDisplay(aoTienShared) : "500.000đ/người";
  const atPrivateText = aoTienPrivate && aoTienPrivate.pricingType !== "CONTACT"
    ? formatPriceDisplay(aoTienPrivate)
    : "Liên hệ xác nhận";

  return [
    {
      id: "cang-ao-tien",
      name: "Cảng quốc tế Ao Tiên (Đi Cô Tô, Quan Lạn)",
      sharedPriceDisplay: atSharedText,
      privatePriceDisplay: atPrivateText,
      travelTime: "2 - 2,5 giờ (ước tính)",
      distanceKm: "~130 - 145 km",
      description: "Cửa ngõ cảng tàu hiện đại trung chuyển hành khách đi tàu cao tốc sang các đảo Cô Tô, Quan Lạn, Minh Châu và Ngọc Vừng.",
      popularSpots: ["Nhà ga Cảng quốc tế Ao Tiên", "Bến tàu cao tốc đi Cô Tô", "Bến tàu cao tốc đi Quan Lạn - Minh Châu"],
      note: "Khách đi tàu cao tốc ra đảo nên chủ động thông báo trước giờ tàu xuất bến để nhà xe sắp xếp giờ đón đường bộ phù hợp.",
    },
    {
      id: "van-don-center",
      name: "Khu vực Huyện Vân Đồn & Thị trấn Cái Rồng",
      sharedPriceDisplay: vdSharedText,
      privatePriceDisplay: vdPrivateText,
      travelTime: "2 - 2,5 giờ (ước tính)",
      distanceKm: "~125 - 140 km",
      description: "Phục vụ khách đi công tác, du lịch nghỉ dưỡng hoặc về thăm người thân tại trung tâm thị trấn Cái Rồng, Chùa Cái Bầu và các xã đảo kết nối cầu.",
      popularSpots: ["Thị trấn Cái Rồng", "Chùa Cái Bầu (Thiền viện Trúc Lâm)", "Khu đô thị Phương Đông", "Bãi Dài Vân Đồn"],
      note: "Bao xe riêng chưa gồm vé cầu đường cao tốc (tollIncluded: false). Đặt trước không mất phí. Thanh toán sau chuyến.",
    },
  ];
}

/**
 * Danh sách điểm đến địa phương để định hướng khách hàng.
 */
export const VAN_DON_DESTINATION_HUBS: HubCategory[] = [
  {
    categoryName: "Bến cảng & Cửa ngõ kết nối đảo",
    icon: "🚢",
    hubs: [
      { name: "Cảng tàu quốc tế Ao Tiên", addressOrArea: "Xã Hạ Long, Vân Đồn", note: "Cảng hành khách chính đi tàu cao tốc ra Cô Tô, Quan Lạn, Minh Châu" },
      { name: "Cảng Cái Rồng", addressOrArea: "Thị trấn Cái Rồng, Vân Đồn", note: "Bến cảng truyền thống trung chuyển hàng hóa và tàu dân sinh" },
    ],
  },
  {
    categoryName: "Điểm du lịch & Tâm linh",
    icon: "⛩️",
    hubs: [
      { name: "Chùa Cái Bầu (Thiền viện Trúc Lâm Giác Tâm)", addressOrArea: "Xã Hạ Long, Vân Đồn", note: "Ngôi chùa hướng biển nổi tiếng, điểm du lịch tâm linh đặc sắc" },
      { name: "Bãi Dài Vân Đồn", addressOrArea: "Xã Hạ Long, Vân Đồn", note: "Bãi biển tự nhiên trải dài, các khu nghỉ dưỡng ven vịnh Bái Tử Long" },
      { name: "Khu đô thị Phương Đông", addressOrArea: "Xã Đông Xá, Vân Đồn", note: "Khu đô thị hiện đại ngay cửa ngõ huyện đảo Vân Đồn" },
    ],
  },
  {
    categoryName: "Hạ tầng giao thông & Dân cư",
    icon: "✈️",
    hubs: [
      { name: "Sân bay Quốc tế Vân Đồn (VDO)", addressOrArea: "Xã Đoàn Kết, Vân Đồn", note: "Cảng hàng không quốc tế phục vụ các chuyến bay nội địa và quốc tế" },
      { name: "Chợ Cái Rồng & Trung tâm thị trấn", addressOrArea: "Thị trấn Cái Rồng, Vân Đồn", note: "Khu vực chợ đầu mối hải sản và trung tâm hành chính huyện" },
    ],
  },
];

/**
 * Hướng dẫn lựa chọn phương án xe phù hợp nhu cầu.
 */
export const VAN_DON_DECISION_GUIDE: DecisionGuideRow[] = [
  {
    criterion: "Đi cá nhân 1 - 2 người",
    sharedRide: "500.000đ/người (Vân Đồn / Cảng Ao Tiên)",
    privateCar: "1.500.000đ/chuyến (chưa gồm vé cao tốc)",
    recommendation: "Nên chọn xe ghép để tiết kiệm chi phí tối đa, vẫn đón trả tận nơi hai chiều an toàn.",
  },
  {
    criterion: "Khách đi tour ra đảo Cô Tô / Quan Lạn",
    sharedRide: "500.000đ/người (cần báo trước giờ tàu)",
    privateCar: "1.500.000đ/chuyến (chủ động giờ đón tận nhà)",
    recommendation: "Quý khách nên thông báo trước giờ tàu xuất bến dự kiến để nhà xe tư vấn khung giờ xuất phát đường bộ phù hợp.",
  },
  {
    criterion: "Gia đình hoặc nhóm bạn 3 - 7 người",
    sharedRide: "Tính theo số người (500k/người)",
    privateCar: "1.500.000đ/chuyến (không gian riêng tư)",
    recommendation: "Bao xe trọn gói theo chuyến mang lại sự tiện nghi, không phụ thuộc vào hành khách khác và linh hoạt giờ đón.",
  },
  {
    criterion: "Đi du lịch mang nhiều hành lý, đồ bơi",
    sharedRide: "Hạn chế vali quá khổ hoặc nhiều kiện lớn",
    privateCar: "Cốp xe riêng rộng rãi chứa thoải mái đồ đạc",
    recommendation: "Nếu mang theo nhiều hành lý cồng kềnh hoặc đồ dã ngoại đi đảo, quý khách nên ưu tiên chọn bao xe riêng.",
  },
  {
    criterion: "Về quê thăm thân hoặc công tác Vân Đồn",
    sharedRide: "500.000đ/người (đón trả tận nhà)",
    privateCar: "1.500.000đ/chuyến (đón trả linh hoạt điểm)",
    recommendation: "Tùy số lượng người đi cùng để chọn xe ghép tiết kiệm hoặc bao xe chủ động hành trình.",
  },
];

/**
 * Cam kết chất lượng dịch vụ chuẩn hóa cho tuyến Vân Đồn.
 */
export const VAN_DON_QUALITY_COMMITMENTS: QualityCommitment[] = [
  {
    title: "Đặt trước không mất phí",
    description: "Khách giữ chỗ không cần chuyển khoản cọc. Toàn bộ tiền cước thanh toán trực tiếp cho tài xế sau chuyến đi an toàn.",
    badge: "ĐẶT TRƯỚC 0Đ",
  },
  {
    title: "Đón tận nơi, trả tận điểm",
    description: "Đón tại địa chỉ nhà ở Hải Dương, trả tại sảnh nhà ga Cảng tàu Ao Tiên, khách sạn hoặc khu dân cư theo nhu cầu tại Vân Đồn.",
    badge: "TẬN NƠI HAI ĐẦU",
  },
  {
    title: "Hỗ trợ kết nối ra đảo",
    description: "Tư vấn giờ xuất phát đường bộ phù hợp theo khung giờ tàu cao tốc dự kiến ra đảo Cô Tô, Quan Lạn mà khách cung cấp.",
    badge: "KẾT NỐI ĐẢO",
  },
  {
    title: "Lái xe an toàn, chu đáo",
    description: "Tài xế quen đường cao tốc Hà Nội - Hải Phòng - Quảng Ninh - Vân Đồn, phong cách điềm đạm, an toàn và hỗ trợ hành lý.",
    badge: "AN TÂM",
  },
];

/**
 * Bộ sưu tập hình ảnh phương tiện thực tế.
 */
export const VAN_DON_MEDIA_GALLERY: MediaGalleryItem[] = [
  {
    src: "/images/dich-vu-xe-4-cho.png",
    alt: "Xe 4 chỗ đưa đón khách Hải Dương đi Cảng Ao Tiên Vân Đồn",
    caption: "Dòng xe sedan 4 chỗ phục vụ khách đi ghép hoặc bao xe riêng nhanh chóng, an toàn.",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/dich-vu-xe-7-cho.png",
    alt: "Xe 7 chỗ đưa đón gia đình đi du lịch Vân Đồn Cảng Ao Tiên",
    caption: "Dòng xe MPV/SUV 7 chỗ rộng rãi, khoang hành lý lớn phù hợp đoàn khách mang nhiều đồ đi đảo.",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/gui-hang-theo-chuyen.png",
    alt: "Nhận chuyển hàng hóa Hải Dương đi Vân Đồn",
    caption: "Nhận gửi bưu phẩm, tài liệu và hàng hóa theo chuyến xe đến trung tâm Vân Đồn.",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/hero-phong-cach-fleet.png",
    alt: "Đội xe Phong Cách tuyến đường bộ Hải Dương - Vân Đồn",
    caption: "Đội ngũ phương tiện sẵn sàng kết nối hành khách Hải Dương đến huyện đảo Vân Đồn.",
    width: 1448,
    height: 1086,
  },
];
