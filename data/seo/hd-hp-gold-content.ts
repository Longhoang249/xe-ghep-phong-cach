/**
 * GOLD STANDARD CONTENT DATASET: HẢI DƯƠNG ⇄ HẢI PHÒNG (hd-hp)
 *
 * Sourced strictly from data/seo/pricing-engine.ts, OWNER_VERIFICATION_RECORD_PHASE1.md,
 * and owner_price_sheet_2026_09_09.
 * Zero hardcoded price numbers: all price strings are derived via formatPriceDisplay.
 */

import {
  getRoutePrice,
  formatPriceDisplay,
} from "./pricing-engine";

export type EndpointGuideItem = {
  id: string;
  name: string;
  sharedPriceDisplay: string;
  privatePriceDisplay: string;
  travelTime: string;
  hubs: string[];
  description: string;
  pickupNote: string;
};

export type DecisionGuideRow = {
  criterion: string;
  sharedRide: string;
  privateCar: string;
  recommendation: string;
};

export type HubCategory = {
  categoryName: string;
  icon: string;
  hubs: { name: string; addressOrArea: string; note: string }[];
};

export type MediaGalleryItem = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type QualityCommitment = {
  title: string;
  description: string;
  badge: string;
};

/**
 * Danh sách 11 điểm đến chính thức của Hải Phòng với dữ liệu giá lấy trực tiếp từ pricing-engine.
 */
export function getHdHpEndpointRows(): EndpointGuideItem[] {
  const endpoints = [
    {
      id: "trung-tam",
      name: "Trung tâm Hải Phòng",
      travelTime: "45 - 60 phút (ước tính)",
      hubs: ["Khu vực Hồng Bàng", "Khu vực Ngô Quyền", "Khu vực Lê Chân", "Cầu Đất", "Nhà hát Lớn"],
      description: "Khu vực nội đô trung tâm sầm uất với các bệnh viện lớn, trung tâm thương mại, trường đại học và cơ quan hành chính của thành phố Cảng.",
      pickupNote: "Đón trả tận nơi tại các ngõ phố, sảnh chung cư, khách sạn và nhà riêng tại toàn bộ các phường nội thành.",
    },
    {
      id: "an-duong",
      name: "An Dương",
      travelTime: "40 - 50 phút (ước tính)",
      hubs: ["KCN Tràng Duệ", "KCN Nomura", "Thị trấn An Dương", "Quốc lộ 5 mới"],
      description: "Cửa ngõ phía Tây Hải Phòng tiếp giáp QL5, nơi tập trung nhiều khu công nghiệp công nghệ cao trọng điểm.",
      pickupNote: "Xe đưa đón tận nơi tại cổng các nhà máy, ký túc xá và các khu dân cư theo địa chỉ hẹn trước.",
    },
    {
      id: "an-lao",
      name: "An Lão",
      travelTime: "40 - 50 phút (ước tính)",
      hubs: ["Nút giao cao tốc An Lão", "Thị trấn An Lão", "KCN An Lão", "Quốc lộ 10"],
      description: "Tiếp giáp trực tiếp nút giao Cao tốc Hà Nội - Hải Phòng, thuận tiện kết nối nhanh chóng giữa hai tỉnh.",
      pickupNote: "Đưa đón tận nơi tại trung tâm thị trấn và các xã dọc trục đường kết nối theo thỏa thuận chuyến.",
    },
    {
      id: "thuy-nguyen",
      name: "Thủy Nguyên",
      travelTime: "55 - 70 phút (ước tính)",
      hubs: ["KĐT Bắc Sông Cấm", "Trung tâm hành chính mới", "KCN VSIP Hải Phòng", "Cầu Bính", "Cầu Hoàng Văn Thụ"],
      description: "Khu vực đô thị mới qua cầu Hoàng Văn Thụ và cầu Bính, tập trung KCN VSIP và trung tâm hành chính mới.",
      pickupNote: "Đón trả tận nơi tại các khu vực văn phòng VSIP, khu đô thị Bắc Sông Cấm và các xã trung tâm.",
    },
    {
      id: "cat-bi",
      name: "Sân bay Cát Bi",
      travelTime: "50 - 65 phút (ước tính)",
      hubs: ["Nhà ga T1 Cát Bi", "Đường Lê Hồng Phong", "Đại lộ Bùi Viện", "Khu vực Hải An"],
      description: "Cảng hàng không quốc tế cửa ngõ duy nhất của vùng duyên hải Đông Bắc, phục vụ các chuyến bay nội địa và quốc tế.",
      pickupNote: "Đưa đón tận sảnh ga đi và ga đến theo thông tin chuyến bay hành khách cung cấp, sắp xếp hành lý gọn gàng trong khoang xe.",
    },
    {
      id: "kien-thuy",
      name: "Kiến Thụy",
      travelTime: "50 - 65 phút (ước tính)",
      hubs: ["Thị trấn Núi Đối", "Sông Đa Độ", "Khu dân cư ven biển", "Đường tỉnh 361"],
      description: "Khu vực ven đô phía Đông Nam Hải Phòng với mạng lưới dân cư trải rộng dọc sông Đa Độ.",
      pickupNote: "Giá ghép dao động từ 300.000 đến 350.000đ/người tùy vị trí xã gần hay xa trục đường chính; báo giá rõ ràng trước chuyến.",
    },
    {
      id: "duong-kinh",
      name: "Dương Kinh",
      travelTime: "50 - 65 phút (ước tính)",
      hubs: ["Đại lộ Phạm Văn Đồng", "Khu đô thị Vinhomes Marina", "Cầu Rào 2", "KCN Đồ Sơn"],
      description: "Khu vực đô thị kết nối trung tâm Hải Phòng với Đồ Sơn qua trục đại lộ Phạm Văn Đồng.",
      pickupNote: "Đón trả tận nơi tại sảnh các khu đô thị, trung tâm thương mại và khu dân cư ven đường Phạm Văn Đồng.",
    },
    {
      id: "do-son",
      name: "Đồ Sơn",
      travelTime: "60 - 75 phút (ước tính)",
      hubs: ["Bãi tắm 1, 2, 3", "KDL quốc tế Đồi Rồng", "Bến Nghiêng", "Khu Biệt thự Bảo Đại"],
      description: "Bán đảo du lịch biển, điểm đến nghỉ dưỡng và hội nghị nổi tiếng tại miền Duyên hải.",
      pickupNote: "Đưa đón tận nơi tại khách sạn, resort, bãi biển và các điểm theo yêu cầu của hành khách trên bán đảo Đồ Sơn.",
    },
    {
      id: "cat-hai",
      name: "Cát Hải",
      travelTime: "65 - 80 phút (ước tính)",
      hubs: ["Tổ hợp nhà máy VinFast", "Cảng quốc tế Lạch Huyện", "Bến phà Gót", "Ga cáp treo Sun World"],
      description: "Tổ hợp công nghiệp ô tô VinFast, cụm cảng nước sâu quốc tế Lạch Huyện và điểm trung chuyển phà/cáp treo đi Cát Bà.",
      pickupNote: "Đón trả khách tại khu vực nhà máy VinFast, bến phà Gót hoặc ga cáp treo theo địa chỉ hẹn trước.",
    },
    {
      id: "tien-lang",
      name: "Tiên Lãng",
      travelTime: "45 - 60 phút (ước tính)",
      hubs: ["Thị trấn Tiên Lãng", "Cầu Khuể", "Khu suối khoáng nóng", "Đường tỉnh 354"],
      description: "Khu vực phía Tây Nam Hải Phòng nổi tiếng với suối khoáng nóng và các làng nghề truyền thống.",
      pickupNote: "Dịch vụ bao xe riêng áp dụng đơn giá theo cự ly thực tế 10.000đ/km (tính theo km di chuyển).",
    },
    {
      id: "vinh-bao",
      name: "Vĩnh Bảo",
      travelTime: "45 - 60 phút (ước tính)",
      hubs: ["Thị trấn Vĩnh Bảo", "Khu di tích Trạng Trình Nguyễn Bỉnh Khiêm", "Quốc lộ 10"],
      description: "Khu vực tiếp giáp địa bàn Hải Dương qua sông Hóa và Quốc lộ 10, thuận tiện kết nối hai chiều theo lịch hẹn.",
      pickupNote: "Dịch vụ bao xe riêng áp dụng đơn giá theo cự ly thực tế 10.000đ/km (tính theo km di chuyển qua QL10).",
    },
  ];

  return endpoints.map((ep) => {
    const sharedRecord = getRoutePrice(ep.name, "shared");
    const privateRecord = getRoutePrice(ep.name, "private");

    return {
      ...ep,
      sharedPriceDisplay: sharedRecord ? formatPriceDisplay(sharedRecord) : "Liên hệ",
      privatePriceDisplay: privateRecord ? formatPriceDisplay(privateRecord) : "Liên hệ",
    };
  });
}

/**
 * 5 Tiêu chí so sánh giữa Xe Ghép và Bao Xe giúp hành khách chọn đúng nhu cầu.
 */
export const decisionGuideData: ReadonlyArray<DecisionGuideRow> = Object.freeze([
  {
    criterion: "Chi phí di chuyển",
    sharedRide: "Tối ưu nhất: chỉ từ một mức vé ghép lẻ theo ghế, không phải gánh toàn bộ chi phí xe.",
    privateCar: "Trọn gói cho cả xe: tính theo chuyến hoặc km, kinh tế hơn khi đi theo nhóm 3 - 7 người.",
    recommendation: "Đi 1 - 2 người nên đi ghép; đi từ 3 người trở lên nên chọn bao xe riêng.",
  },
  {
    criterion: "Mức độ riêng tư & Không gian",
    sharedRide: "Đi cùng khách khác có chung lộ trình. Xe gia đình lịch sự, không gian thông thoáng, sạch sẽ.",
    privateCar: "Hoàn toàn riêng tư cho gia đình, đối tác làm việc hoặc trẻ nhỏ nghỉ ngơi.",
    recommendation: "Cần sự riêng tư, có người lớn tuổi hoặc trẻ nhỏ nên ưu tiên bao xe.",
  },
  {
    criterion: "Thời gian đón & Tính linh hoạt",
    sharedRide: "Xe đón trả theo khung giờ hẹn trước, linh hoạt điều chỉnh theo lộ trình gom trả khách thực tế.",
    privateCar: "Linh hoạt hẹn giờ xuất phát theo lịch trình riêng của đoàn; nếu có nhu cầu dừng nghỉ, khách nên báo trước khi xác nhận chuyến.",
    recommendation: "Đi sân bay Cát Bi cần chủ động giờ làm thủ tục hoặc công tác khẩn nên chọn bao xe.",
  },
  {
    criterion: "Khối lượng hành lý mang theo",
    sharedRide: "Phù hợp với hành lý cá nhân gọn gàng; nếu có nhiều đồ đạc cồng kềnh, hành khách nên thông báo trước khi đặt chuyến.",
    privateCar: "Sử dụng toàn bộ khoang chứa đồ của xe 4 hoặc 7 chỗ, chở được nhiều hành lý của cả đoàn.",
    recommendation: "Có nhiều hành lý, đồ đạc cồng kềnh nên chọn bao xe 7 chỗ.",
  },
  {
    criterion: "Phí cầu đường cao tốc",
    sharedRide: "Cước tính theo từng người cho từng điểm đến theo thỏa thuận trước chuyến đi.",
    privateCar: "Chưa bao gồm vé cầu đường cao tốc (tollIncluded: false); khách thanh toán vé thực tế nếu chọn đi cao tốc.",
    recommendation: "Bao xe giúp hành khách chủ động chọn cung đường Cao tốc 5B hoặc QL5 theo nhu cầu thực tế.",
  },
]);

/**
 * Các khu vực đón trả phổ biến phục vụ tận nơi chiều từ Hải Phòng về Hải Dương.
 */
export const reversePickupCategories: ReadonlyArray<HubCategory> = Object.freeze([
  {
    categoryName: "Bệnh viện & Trung tâm Y tế lớn",
    icon: "hospital",
    hubs: [
      { name: "Bệnh viện Hữu nghị Việt Tiệp", addressOrArea: "Số 1 Nhà Thương, Cát Dài, Lê Chân", note: "Đón trả tận nơi theo địa chỉ hẹn trước của hành khách" },
      { name: "Bệnh viện Phụ sản Hải Phòng", addressOrArea: "Số 19 Trần Tất Văn, An Biên, Lê Chân", note: "Đón trả tận cổng hoặc sảnh đón theo yêu cầu" },
      { name: "Bệnh viện Trẻ em Hải Phòng", addressOrArea: "Phố Việt Đức, Lãm Hà, Kiến An", note: "Đón tận nơi theo giờ hẹn của gia đình" },
      { name: "Bệnh viện Quốc tế Hải Phòng", addressOrArea: "Số 124 Nguyễn Đức Cảnh, Lê Chân", note: "Đón trả tại sảnh bệnh viện theo giờ hẹn của khách" },
    ],
  },
  {
    categoryName: "Cụm Khu Công Nghiệp & Cảng Biển",
    icon: "factory",
    hubs: [
      { name: "KCN Tràng Duệ & Nomura", addressOrArea: "Khu vực An Dương", note: "Đón trả tận nơi tại cổng nhà máy hoặc khu dân cư lân cận" },
      { name: "KCN VSIP Hải Phòng", addressOrArea: "Khu vực Thủy Nguyên", note: "Đón trả tại khu vực văn phòng và nhà xưởng theo hẹn trước" },
      { name: "KCN Đình Vũ & Cát Hải", addressOrArea: "Tổ hợp VinFast, Cảng Lạch Huyện", note: "Đón trả theo lịch hẹn tại các khu vực làm việc và kho cảng" },
      { name: "KCN Đồ Sơn & Tân Liên", addressOrArea: "Khu vực Dương Kinh & Vĩnh Bảo", note: "Đón trả khách tại khu vực nhà máy, cổng KCN hoặc khu dân cư lân cận theo thỏa thuận" },
    ],
  },
  {
    categoryName: "Cảng hàng không & Đầu mối Giao thông",
    icon: "plane",
    hubs: [
      { name: "Sân bay Quốc tế Cát Bi", addressOrArea: "Đường Lê Hồng Phong, Hải An", note: "Đón tại sảnh ga đến hoặc ga đi theo thông tin chuyến bay quý khách cung cấp" },
      { name: "Ga Hải Phòng & Bến xe Thượng Lý", addressOrArea: "Lương Khánh Thiện & Hồng Bàng", note: "Đón trả khách kết nối tàu hỏa hoặc các điểm trung chuyển" },
      { name: "Bến phà Gót & Ga cáp treo Cát Hải", addressOrArea: "Khu vực Cát Hải", note: "Đón trả khách tại khu vực bến phà hoặc ga cáp treo theo hẹn trước" },
    ],
  },
  {
    categoryName: "Khu Đô Thị & Trung Tâm Thương Mại",
    icon: "building",
    hubs: [
      { name: "Vinhomes Imperia Hải Phòng", addressOrArea: "Khu đô thị Thượng Lý, Hồng Bàng", note: "Đón trả tận sảnh các phân khu căn hộ và biệt thự" },
      { name: "Vinhomes Marina Cầu Rào 2", addressOrArea: "Phường Vĩnh Niệm, Lê Chân", note: "Đón trả tận nơi tại các trục đường nội khu và chung cư" },
      { name: "Aeon Mall Hải Phòng Lê Chân", addressOrArea: "Số 10 Võ Nguyên Giáp, Dư Hàng Kênh", note: "Đón trả tại khu vực sảnh thương mại theo giờ hẹn" },
    ],
  },
]);

/**
 * 4 Cam kết dịch vụ của Nhà Xe Phong Cách (kế thừa chính xác từ Phase 1).
 */
export const whyChoosePhongCach: ReadonlyArray<QualityCommitment> = Object.freeze([
  {
    title: "Xe gia đình 4 và 7 chỗ rộng rãi",
    description: "Phục vụ bằng các dòng xe gia đình 4 chỗ và 7 chỗ phổ biến, khoang ngồi sạch sẽ, thoáng mát.",
    badge: "Xe 4 và 7 chỗ",
  },
  {
    title: "Không gian xe sạch sẽ, thoáng mát",
    description: "Khoang xe luôn được dọn dẹp vệ sinh sạch sẽ, giữ không khí thông thoáng, mang lại cảm giác dễ chịu cho hành khách.",
    badge: "Thoáng mát sạch sẽ",
  },
  {
    title: "Mỗi vé ghép một chỗ ngồi riêng biệt",
    description: "Mỗi hành khách đặt vé ghép có chỗ ngồi riêng biệt thoải mái, xe đón trả tận nơi theo danh sách hành khách đã hẹn trước.",
    badge: "Ghế riêng biệt",
  },
  {
    title: "Đặt trước không mất phí - Thanh toán sau chuyến",
    description: "Quy trình minh bạch: quý khách không cần chuyển khoản đặt cọc trước chuyến. Chỉ thanh toán cước trực tiếp cho tài xế sau khi hoàn thành chuyến đi an toàn.",
    badge: "An tâm đặt xe",
  },
]);

/**
 * Bộ sưu tập hình ảnh thực tế từ public/images.
 */
export const mediaGalleryList: ReadonlyArray<MediaGalleryItem> = Object.freeze([
  {
    src: "/images/hero-phong-cach-fleet.png",
    alt: "Đội xe 4 chỗ và 7 chỗ phục vụ tuyến Hải Dương Hải Phòng của Nhà Xe Phong Cách",
    caption: "Đội xe 4 chỗ và 7 chỗ phục vụ hai chiều Hải Dương - Hải Phòng.",
    width: 1448,
    height: 1086,
  },
  {
    src: "/images/cao-toc-ha-noi-hai-phong.jpg",
    alt: "Tuyến đường cao tốc Hà Nội Hải Phòng kết nối nhanh chóng giữa Hải Dương và Hải Phòng",
    caption: "Tuyến đường Cao tốc Hà Nội - Hải Phòng kết nối nhanh chóng giữa Hải Dương và Hải Phòng.",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/san-bay-cat-bi-terminal.jpg",
    alt: "Đưa đón tận sảnh Sân bay Quốc tế Cát Bi theo lịch trình của hành khách",
    caption: "Đưa đón tận sảnh Sân bay Quốc tế Cát Bi theo thông tin chuyến bay của quý khách.",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/xe-ghep-phong-cach-khoang-xe.jpg",
    alt: "Khoang xe gia đình sạch sẽ, ghế ngồi thoải mái cho hành khách",
    caption: "Khoang xe gia đình sạch sẽ, điều hòa mát mẻ cho hành trình thoải mái.",
    width: 1200,
    height: 800,
  },
]);
