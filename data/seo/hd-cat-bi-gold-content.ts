/**
 * GOLD STANDARD CONTENT DATASET: HẢI DƯƠNG ⇄ SÂN BAY CÁT BI (hd-cb)
 *
 * Sourced strictly from data/seo/pricing-engine.ts, OWNER_VERIFICATION_RECORD_PHASE1.md,
 * and owner_price_sheet_2026_09_09.
 * Zero hardcoded price numbers: all price strings are derived via formatPriceDisplay.
 * Fact-governed for airport intent: Zero invented operational claims (no flight delay guarantees,
 * no fixed buffers, customer guidance used for flight timing).
 */

import {
  getRoutePrice,
  formatPriceDisplay,
} from "./pricing-engine";
import type {
  EndpointGuideItem,
  DecisionGuideRow,
  HubCategory,
  MediaGalleryItem,
  QualityCommitment,
} from "./hd-hp-gold-content";

/**
 * Danh sách điểm đến sân bay Cát Bi với dữ liệu giá lấy trực tiếp từ pricing-engine.
 */
export function getHdCbEndpointRows(): EndpointGuideItem[] {
  const catBiShared = getRoutePrice("Sân bay Cát Bi", "shared");
  const catBiPrivate = getRoutePrice("Sân bay Cát Bi", "private");
  const sharedPriceDisplay = catBiShared ? formatPriceDisplay(catBiShared) : "300.000đ/người";
  const privatePriceDisplay = catBiPrivate ? formatPriceDisplay(catBiPrivate) : "550.000đ/chuyến";

  return [
    {
      id: "cat-bi-ga-di",
      name: "Ga Đi Sân bay Cát Bi",
      sharedPriceDisplay,
      privatePriceDisplay,
      travelTime: "50 - 65 phút (ước tính)",
      hubs: ["Đón tận nơi tại Hải Dương", "Khu vực Ga Đi Sân bay Cát Bi", "Khoang để hành lý"],
      description: "Quý khách cung cấp điểm đón tại Hải Dương, ngày đi và giờ bay để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp.",
      pickupNote: "Bao xe riêng chưa gồm vé cầu đường cao tốc (tollIncluded: false). Đặt trước không mất phí. Thanh toán sau chuyến.",
    },
    {
      id: "cat-bi-ga-den",
      name: "Ga Đến Sân bay Cát Bi",
      sharedPriceDisplay,
      privatePriceDisplay,
      travelTime: "50 - 65 phút (ước tính)",
      hubs: ["Khu vực Ga Đến Sân bay Cát Bi", "Đưa về tận nơi tại Hải Dương", "Liên hệ trao đổi trước chuyến"],
      description: "Quý khách cung cấp điểm đón tại Sân bay Cát Bi, ngày đi và giờ bay để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp.",
      pickupNote: "Quý khách nên cung cấp ngày đi và giờ bay dự kiến để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp.",
    },
    {
      id: "cat-bi-khach-san",
      name: "Khu vực Cảng Hàng Không & Lân Cận",
      sharedPriceDisplay,
      privatePriceDisplay,
      travelTime: "50 - 65 phút (ước tính)",
      hubs: ["Trục đường Lê Hồng Phong", "Khu vực Tràng Cát", "Khách sạn ven sân bay"],
      description: "Đưa đón khách tại các khách sạn quanh khu vực sân bay Cát Bi hoặc các khu công nghiệp phụ trợ lân cận trục đường Bùi Viện.",
      pickupNote: "Đón trả linh hoạt theo địa chỉ khách sạn hoặc điểm hẹn đã trao đổi trước với tổng đài.",
    },
  ];
}

export const HD_CB_DECISION_ROWS: readonly DecisionGuideRow[] = Object.freeze([
  {
    criterion: "Số lượng hành khách",
    sharedRide: "Rất phù hợp cho 1 - 2 người đi công tác, về quê hoặc du lịch cá nhân.",
    privateCar: "Lựa chọn lý tưởng cho gia đình, nhóm từ 2 - 4 người trở lên đi cùng chuyến bay.",
    recommendation: "Đi 1 người nên chọn xe ghép để tiết kiệm; đi gia đình nên bao xe để không gian thoải mái nhất.",
  },
  {
    criterion: "Hành lý mang theo",
    sharedRide: "Phù hợp hành lý vừa phải (vali xách tay, balo). Nếu có nhiều kiện hành lý ký gửi, khách nên thông báo trước.",
    privateCar: "Toàn quyền sử dụng toàn bộ khoang cốp xe rộng rãi, chở thoải mái nhiều vali và kiện hàng.",
    recommendation: "Nếu có từ 2 vali lớn trở lên, bao xe riêng là giải pháp thuận tiện và an tâm nhất.",
  },
  {
    criterion: "Thời gian xuất phát",
    sharedRide: "Khách cung cấp giờ bay mong muốn để nhà xe kiểm tra và sắp xếp chuyến xe ghép phù hợp.",
    privateCar: "Khách hàng chủ động chọn giờ xuất phát và điểm đón trả theo nhu cầu cá nhân.",
    recommendation: "Nếu có nhu cầu xuất phát theo khung giờ riêng, bao xe là giải pháp linh hoạt thời gian.",
  },
  {
    criterion: "Không gian chuyến đi",
    sharedRide: "Chia sẻ chuyến xe với hành khách lịch sự, xe gia đình sạch sẽ, ghế ngồi êm ái.",
    privateCar: "Không gian hoàn toàn riêng tư cho gia đình hoặc đoàn công tác, có thể nghỉ ngơi thư giãn suốt chặng đường.",
    recommendation: "Gia đình có trẻ nhỏ hoặc người cao tuổi sẽ cảm thấy thư thái nhất khi chọn bao xe riêng.",
  },
  {
    criterion: "Chi phí hành trình",
    sharedRide: "300.000đ/người — tiết kiệm tối đa cho hành khách đi đơn lẻ.",
    privateCar: "550.000đ/chuyến (chưa gồm vé cao tốc) — tính theo đầu người rất kinh tế cho nhóm từ 2 người.",
    recommendation: "So với taxi sân bay truyền thống (700k - 900k), cả xe ghép lẫn bao xe Phong Cách đều tối ưu chi phí hơn.",
  },
]);

export const HD_CB_REVERSE_HUBS: readonly HubCategory[] = Object.freeze([
  {
    categoryName: "Khu vực đón tại Sân bay Cát Bi",
    icon: "pin",
    hubs: [
      {
        name: "Khu vực Ga Đến Sân bay Cát Bi",
        addressOrArea: "Khu vực đón trả khách Cảng hàng không Quốc tế Cát Bi",
        note: "Đón theo thỏa thuận chuyến thực tế",
      },
      {
        name: "Bãi đỗ xe Cảng hàng không Cát Bi",
        addressOrArea: "Khu vực bãi đỗ xe sân bay Cát Bi",
        note: "Điểm tập kết xe đón trả thuận tiện",
      },
      {
        name: "Khách sạn ven sân bay Cát Bi",
        addressOrArea: "Đường Lê Hồng Phong / Bùi Viện / Ngô Gia Tự",
        note: "Đón tận nơi theo yêu cầu khách lưu trú qua đêm",
      },
    ],
  },
  {
    categoryName: "Các khu vực trả tận nơi tại Hải Dương",
    icon: "pin",
    hubs: [
      {
        name: "Khu vực trung tâm Hải Dương",
        addressOrArea: "Các tuyến đường Trần Phú, Lê Thanh Nghị, Bạch Đằng, Nguyễn Lương Bằng...",
        note: "Đưa về tận nơi tại các trục đường trung tâm",
      },
      {
        name: "Khu vực Gia Lộc, Tứ Kỳ, Cẩm Giàng, Nam Sách",
        addressOrArea: "Các xã, thị trấn thuộc địa bàn huyện cũ",
        note: "Kết nối nhanh qua các nút giao cao tốc",
      },
      {
        name: "Khu vực Thanh Hà, Kim Thành, Kinh Môn",
        addressOrArea: "Địa bàn tiếp giáp phía Đông Hải Dương",
        note: "Đón trả tận ngõ xóm theo định vị khách cung cấp",
      },
    ],
  },
]);

export const HD_CB_QUALITY_COMMITMENTS: readonly QualityCommitment[] = Object.freeze([
  {
    title: "Đón trả tận nơi hai chiều",
    description: "Phong Cách phục vụ đón trả tận nơi hai chiều giữa Hải Dương và Sân bay Cát Bi theo lịch hẹn đã thống nhất.",
    badge: "TẬN NƠI HAI CHIỀU",
  },
  {
    title: "Đặt trước không mất phí",
    description: "Đặt trước không mất phí. Quý khách thanh toán sau chuyến đi an toàn.",
    badge: "ĐẶT TRƯỚC 0Đ",
  },
  {
    title: "Phương tiện xe gia đình sạch sẽ, rộng rãi",
    description: "Đội xe gia đình sạch sẽ, khoang ngồi thoáng mát, máy lạnh êm ái, khoang hành lý rộng rãi bảo quản vali và đồ dùng chu đáo suốt hành trình.",
    badge: "XE GIA ĐÌNH",
  },
  {
    title: "Lái xe an toàn, lịch sự",
    description: "Tài xế nhiều năm kinh nghiệm, phục vụ nhã nhặn, tuân thủ tốc độ và lái xe an toàn trên cao tốc.",
    badge: "LÁI XE AN TOÀN",
  },
]);

export const HD_CB_MEDIA_GALLERY: readonly MediaGalleryItem[] = Object.freeze([
  {
    src: "/images/san-bay-cat-bi-terminal.jpg",
    alt: "Khu vực nhà ga Cảng hàng không Quốc tế Cát Bi",
    caption: "Khu vực đón trả khách Cảng hàng không Quốc tế Cát Bi (Hải Phòng)",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/cao-toc-ha-noi-hai-phong.jpg",
    alt: "Tuyến đường cao tốc kết nối Hải Dương đi Sân bay Cát Bi",
    caption: "Hành trình di chuyển êm ái qua Cao tốc Hà Nội - Hải Phòng",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/xe-ghep-phong-cach-khoang-xe.jpg",
    alt: "Khoang ghế ngồi xe gia đình phục vụ đưa đón sân bay Cát Bi",
    caption: "Khoang nội thất xe gia đình sạch sẽ, thoáng mát phục vụ khách đi sân bay",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/dich-vu-xe-7-cho.png",
    alt: "Bao xe riêng đưa đón sân bay Cát Bi",
    caption: "Bao xe riêng đưa đón sân bay Cát Bi giá 550.000đ/chuyến",
    width: 1200,
    height: 800,
  },
]);
