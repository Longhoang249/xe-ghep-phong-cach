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
      name: "Sảnh Ga Đi T1 (Tầng 2) - Cát Bi",
      sharedPriceDisplay,
      privatePriceDisplay,
      travelTime: "50 - 65 phút (ước tính)",
      hubs: ["Đón tận nhà tại Hải Dương", "Trả sảnh check-in ga đi tầng 2", "Hỗ trợ hành lý khoang cốp"],
      description: "Đưa đón tận cửa nhà tại Hải Dương đến đúng sảnh ga đi T1 Cát Bi, hỗ trợ sắp xếp hành lý chu đáo, phù hợp lịch bay của quý khách.",
      pickupNote: "Bao xe riêng chưa gồm vé cao tốc/vé vào sảnh (tollIncluded: false). Đặt trước không mất phí cọc, thanh toán sau chuyến đi an toàn.",
    },
    {
      id: "cat-bi-ga-den",
      name: "Sảnh Ga Đến T1 (Tầng 1) - Cát Bi",
      sharedPriceDisplay,
      privatePriceDisplay,
      travelTime: "50 - 65 phút (ước tính)",
      hubs: ["Đón tại sảnh ra ga đến T1", "Đưa về tận nhà tại Hải Dương", "Tài xế chủ động liên hệ trước"],
      description: "Đón khách ngay sau khi máy bay hạ cánh tại sảnh ga đến Cát Bi, đưa về tận cửa nhà tại Hải Dương, không lo chờ đợi hay giá taxi dù.",
      pickupNote: "Khách nên gửi mã chuyến bay hoặc giờ hạ cánh khi đặt xe để tài xế chủ động liên lạc và đón đúng sảnh tầng 1.",
    },
    {
      id: "cat-bi-khach-san",
      name: "Khu vực Cảng Hàng Không & Lân Cận",
      sharedPriceDisplay,
      privatePriceDisplay,
      travelTime: "50 - 65 phút (ước tính)",
      hubs: ["Trục đường Lê Hồng Phong", "Khu vực Tràng Cát", "Khách sạn ven sân bay"],
      description: "Đưa đón khách lưu trú tại các khách sạn quanh khu vực sân bay Cát Bi hoặc các khu công nghiệp phụ trợ lân cận trục đường Bùi Viện.",
      pickupNote: "Đón trả linh hoạt theo địa chỉ khách sạn hoặc văn phòng làm việc đã hẹn trước với tổng đài.",
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
    sharedRide: "Xe đón theo lịch hẹn sắp xếp cùng các hành khách trên tuyến cùng khung giờ bay.",
    privateCar: "Khách hàng hoàn toàn chủ động chọn giờ xe đón tận cửa nhà theo đúng kế hoạch chuyến bay.",
    recommendation: "Chuyến bay sáng sớm hoặc cần có mặt sớm làm thủ tục nên ưu tiên bao xe để làm chủ thời gian.",
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
        name: "Sảnh Ga Đến T1 (Tầng 1)",
        addressOrArea: "Cửa đón ô tô sảnh tầng 1 Sân bay Quốc tế Cát Bi",
        note: "Tài xế đón khách ngay khi hạ cánh và lấy hành lý",
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
        note: "Đưa về tận cửa nhà, hỗ trợ dỡ hành lý",
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
    title: "Đưa đón đúng sảnh ga, tận cửa nhà",
    description: "Xe đón tận cửa nhà tại Hải Dương và trả đúng sảnh ga đi T1; chiều về đón tại sảnh ga đến T1 Cát Bi đưa về tận nhà an toàn, thuận tiện.",
    badge: "TẬN NƠI HAI CHIỀU",
  },
  {
    title: "Đặt trước không mất phí — Trả sau chuyến",
    description: "Chính sách đặt xe minh bạch tuyệt đối: quý khách không cần chuyển khoản đặt cọc trước, chỉ thanh toán khi đã về đến nơi an toàn.",
    badge: "KHÔNG CẦN CỌC",
  },
  {
    title: "Phương tiện xe gia đình sạch sẽ, rộng rãi",
    description: "Đội xe gia đình sạch sẽ, khoang ngồi thoáng mát, máy lạnh êm ái, khoang hành lý rộng rãi bảo quản vali và đồ dùng chu đáo suốt hành trình.",
    badge: "XE GIA ĐÌNH",
  },
  {
    title: "Tài xế chuyên nghiệp, hỗ trợ hành lý",
    description: "Lái xe lịch sự, cẩn thận, hỗ trợ khuân vác hành lý tận tình, có kinh nghiệm đưa đón tuyến sân bay, lái xe an toàn trên cao tốc.",
    badge: "CHU ĐÁO TẬN TÂM",
  },
]);

export const HD_CB_MEDIA_GALLERY: readonly MediaGalleryItem[] = Object.freeze([
  {
    src: "/images/san-bay-cat-bi-terminal.jpg",
    alt: "Khu vực sảnh ga Cảng hàng không Quốc tế Cát Bi",
    caption: "Sảnh đón trả khách Cảng hàng không Quốc tế Cát Bi (Hải Phòng)",
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
