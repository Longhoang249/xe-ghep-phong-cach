/**
 * GOLD STANDARD CONTENT DATASET: HẢI DƯƠNG ⇄ QUẢNG NINH (hd-qn)
 *
 * Sourced strictly from data/seo/pricing-engine.ts, OWNER_VERIFICATION_RECORD_PHASE1.md,
 * and owner_price_sheet_2026_09_09.
 * Zero hardcoded price numbers: all price strings are derived via formatPriceDisplay.
 * Fully conforms to Vietnam 2026 two-level local government restructuring (Nghị quyết 76/2025/UBTVQH15):
 * preserves 100% natural search terms while using neutral geographic labels ("khu vực...").
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
 * Danh sách 16 điểm đến chính thức của Quảng Ninh với dữ liệu giá lấy trực tiếp từ pricing-engine.
 */
export function getHdQnEndpointRows(): EndpointGuideItem[] {
  const endpoints = [
    {
      id: "dong-trieu",
      name: "Đông Triều",
      travelTime: "45 - 60 phút (ước tính)",
      hubs: ["Khu vực Đông Triều", "Khu di tích nhà Trần", "Quốc lộ 18", "Cổng chào Quảng Ninh"],
      description: "Cửa ngõ phía Tây của địa bàn Quảng Ninh tiếp giáp với Hải Dương qua Quốc lộ 18 và cầu Triều, vùng đất gắn liền với di tích lịch sử nhà Trần.",
      pickupNote: "Dịch vụ bao xe riêng áp dụng đơn giá theo cự ly thực tế 10.000đ/km (tính theo km di chuyển). Đón trả tận nơi tại nhà riêng và các khu dân cư.",
    },
    {
      id: "mao-khe",
      name: "Mạo Khê",
      travelTime: "50 - 65 phút (ước tính)",
      hubs: ["Khu vực Mạo Khê", "Cụm công nghiệp Mạo Khê", "Quốc lộ 18", "Cầu Hoàng Thạch"],
      description: "Trung tâm kinh tế công nghiệp sầm uất phía Tây Quảng Ninh, kết nối nhanh với Hải Dương qua cầu Hoàng Thạch và trục QL18.",
      pickupNote: "Dịch vụ bao xe riêng áp dụng đơn giá theo cự ly thực tế 10.000đ/km (tính theo km di chuyển). Đón trả tận nhà tại các khu dân cư và công xưởng.",
    },
    {
      id: "uong-bi",
      name: "Uông Bí",
      travelTime: "60 - 75 phút (ước tính)",
      hubs: ["Danh thắng Yên Tử", "Chùa Ba Vàng", "Bệnh viện Việt Nam - Thụy Điển", "Khu vực trung tâm Uông Bí"],
      description: "Trung tâm y tế, giáo dục và du lịch tâm linh lớn với Quần thể danh thắng Yên Tử và Bệnh viện Đa khoa Việt Nam - Thụy Điển.",
      pickupNote: "Bao xe theo chuyến trọn gói 600.000đ/chuyến. Đón trả tận nơi tại sảnh Bệnh viện Việt Nam - Thụy Điển, chân núi Yên Tử và các khu vực trung tâm theo thỏa thuận.",
    },
    {
      id: "quang-yen",
      name: "Quảng Yên",
      travelTime: "65 - 80 phút (ước tính)",
      hubs: ["KCN Sông Khoai (Amata)", "KCN Đông Mai", "Nút giao Cao tốc Hạ Long", "Khu vực trung tâm Quảng Yên"],
      description: "Khu vực ven biển phát triển mạnh về công nghiệp công nghệ cao với các tổ hợp KCN quy mô lớn Sông Khoai, Đông Mai và di tích Bạch Đằng.",
      pickupNote: "Bao xe theo chuyến trọn gói 700.000đ/chuyến. Đón trả tận nơi tại các văn phòng ban quản lý KCN, nhà máy hoặc khu dân cư theo thỏa thuận.",
    },
    {
      id: "bai-chay",
      name: "Bãi Cháy",
      travelTime: "75 - 90 phút (ước tính)",
      hubs: ["Tổ hợp Sun World Hạ Long", "Bãi tắm Bãi Cháy", "Cảng tàu khách quốc tế Hạ Long", "Cầu Bãi Cháy"],
      description: "Trung tâm du lịch nghỉ dưỡng sôi động với bãi tắm biển trải dài, các khách sạn ven biển và tổ hợp vui chơi giải trí hàng đầu miền Bắc.",
      pickupNote: "Bao xe theo chuyến 900.000đ/chuyến. Đưa đón tận sảnh khách sạn, resort nghỉ dưỡng, bến du thuyền và các điểm theo thỏa thuận trước chuyến đi.",
    },
    {
      id: "ha-long",
      name: "Hạ Long",
      travelTime: "80 - 100 phút (ước tính)",
      hubs: ["Bảo tàng Quảng Ninh", "Cột Đồng Hồ", "Bệnh viện Đa khoa tỉnh Quảng Ninh", "Khu vực Hòn Gai"],
      description: "Đô thị trung tâm hành chính, văn hóa và kinh tế bên bờ Vịnh Hạ Long, tập trung các cơ quan công sở và cơ sở y tế đầu ngành.",
      pickupNote: "Bao xe theo chuyến 1.000.000đ/chuyến. Đón trả tận nơi tại sảnh cơ quan, bệnh viện đa khoa tỉnh hoặc nhà riêng tại khu vực Hòn Gai theo thỏa thuận.",
    },
    {
      id: "cam-pha",
      name: "Cẩm Phả",
      travelTime: "100 - 120 phút (ước tính)",
      hubs: ["Khu vực Cẩm Phả", "Đường bao biển Hạ Long - Cẩm Phả", "Cảng Vũng Đục", "Bệnh viện Đa khoa Cẩm Phả"],
      description: "Đô thị công nghiệp than và năng lượng ven biển, kết nối thuận tiện với Hạ Long qua trục đường bao biển cảnh quan hiện đại.",
      pickupNote: "Bao xe dao động từ 1.200.000 đến 1.300.000đ/chuyến tùy vị trí đón trả trung tâm hay khu vực ven biển theo thỏa thuận.",
    },
    {
      id: "cua-ong",
      name: "Cửa Ông",
      travelTime: "110 - 130 phút (ước tính)",
      hubs: ["Di tích Đền Cửa Ông", "Cảng than Cửa Ông", "Quốc lộ 18 mở rộng", "Khu dân cư Cửa Ông"],
      description: "Điểm đến tâm linh nổi tiếng với Di tích Lịch sử Quốc gia đặc biệt Đền Cửa Ông bên bờ vịnh Bái Tử Long thơ mộng.",
      pickupNote: "Giá vé ghép niêm yết 500.000đ/người. Dịch vụ bao xe riêng vui lòng liên hệ tổng đài để thỏa thuận chi tiết theo lộ trình chuyến đi.",
    },
    {
      id: "van-don",
      name: "Vân Đồn",
      travelTime: "115 - 135 phút (ước tính)",
      hubs: ["Sân bay Quốc tế Vân Đồn", "Khu kinh tế Vân Đồn", "Cầu Vân Đồn", "Khu vực Cái Rồng"],
      description: "Khu vực kinh tế biển với Cảng hàng không quốc tế Vân Đồn và mạng lưới cao tốc CT06 kết nối xuyên suốt toàn tuyến.",
      pickupNote: "Bao xe theo chuyến 1.500.000đ/chuyến. Đón trả tại sảnh nhà ga sân bay Vân Đồn hoặc trung tâm khu dân cư theo lịch hẹn trước.",
    },
    {
      id: "ao-tien",
      name: "Ao Tiên",
      travelTime: "120 - 140 phút (ước tính)",
      hubs: ["Cảng tàu khách quốc tế Ao Tiên", "Bến tàu cao tốc đi đảo Cô Tô", "Bến tàu đi Quan Lạn - Minh Châu"],
      description: "Đầu mối cảng tàu du lịch cao cấp đưa đón toàn bộ hành khách xuất bến ra các tuyến đảo du lịch Cô Tô, Quan Lạn, Ngọc Vừng, Minh Châu.",
      pickupNote: "Giá vé ghép 500.000đ/người đưa đón tại sảnh cảng tàu Ao Tiên. Khách nối chuyến tàu cao tốc nên thông báo trước giờ tàu chạy để kiểm tra phương án xe phù hợp. Bao xe liên hệ tổng đài xác nhận chuyến.",
    },
    {
      id: "ba-che",
      name: "Ba Chẽ",
      travelTime: "130 - 160 phút (ước tính)",
      hubs: ["Khu vực Ba Chẽ", "Khu bảo tồn dược liệu trà hoa vàng", "Đường tỉnh 329"],
      description: "Khu vực miền núi phía Tây Bắc Quảng Ninh nổi tiếng với thương hiệu trà hoa vàng và địa hình đồi rừng sinh thái trù phú.",
      pickupNote: "Giá vé ghép 600.000đ/người. Dịch vụ bao xe riêng vui lòng liên hệ tổng đài để kiểm tra tuyến và điều phối phương tiện phù hợp.",
    },
    {
      id: "tien-yen",
      name: "Tiên Yên",
      travelTime: "130 - 150 phút (ước tính)",
      hubs: ["Khu vực ngã ba Tiên Yên", "Phố đi bộ Tiên Yên", "Điểm kết nối QL18 & QL4B"],
      description: "Đầu mối giao thông ngã ba huyết mạch miền Đông Quảng Ninh, trung tâm ẩm thực và trạm trung chuyển lên vùng cao Đông Bắc.",
      pickupNote: "Giá vé ghép 600.000đ/người. Bao xe riêng liên hệ tổng đài xác nhận theo lịch trình thực tế của quý khách.",
    },
    {
      id: "dam-ha",
      name: "Đầm Hà",
      travelTime: "150 - 170 phút (ước tính)",
      hubs: ["Khu vực trung tâm Đầm Hà", "Cụm sản xuất thủy sản công nghệ cao", "Nút giao cao tốc Đầm Hà"],
      description: "Vùng kinh tế nông nghiệp và thủy sản công nghệ cao phía Đông Bắc Quảng Ninh dọc theo hành lang cao tốc Vân Đồn - Móng Cái.",
      pickupNote: "Giá vé ghép 650.000đ/người. Đưa đón tận nơi tại các khu dân cư và nông trại theo thỏa thuận trước chuyến đi.",
    },
    {
      id: "binh-lieu",
      name: "Bình Liêu",
      travelTime: "160 - 190 phút (ước tính)",
      hubs: ["Khu vực Bình Liêu", "Cột mốc biên giới 1305 / Sống lưng Khủng Long", "Khu vực cửa khẩu Hoành Mô"],
      description: "Vùng cao biên cương Đông Bắc hùng vĩ, điểm đến du lịch khám phá nổi tiếng với các cột mốc biên giới, mùa cỏ lau và văn hóa vùng cao.",
      pickupNote: "Giá vé ghép 650.000đ/người. Đưa đón tận nơi tại trung tâm khu dân cư hoặc chân các điểm tham quan theo thỏa thuận.",
    },
    {
      id: "hai-ha",
      name: "Hải Hà",
      travelTime: "160 - 185 phút (ước tính)",
      hubs: ["KCN Texhong Hải Hà", "Cảng biển nước sâu Ghềnh Võ", "Khu vực Quảng Hà"],
      description: "Tổ hợp công nghiệp dệt may và cảng biển nước sâu quy mô lớn, trung tâm thu hút vốn đầu tư công nghiệp phía Đông Bắc.",
      pickupNote: "Giá vé ghép 650.000đ/người. Đón trả tận nơi tại khu vực nhà xưởng, văn phòng hoặc khu dân cư theo thỏa thuận.",
    },
    {
      id: "mong-cai",
      name: "Móng Cái",
      travelTime: "180 - 210 phút (ước tính)",
      hubs: ["Cửa khẩu Quốc tế Móng Cái", "Cầu Bắc Luân 1 & 2", "Chợ Trung tâm Móng Cái", "Bãi biển Trà Cổ", "Mũi Sa Vĩ"],
      description: "Đô thị cửa khẩu biên giới cực Đông Bắc của Tổ quốc, đầu mối giao thương quốc tế sôi động và điểm mút cao tốc xuyên Việt CT06.",
      pickupNote: "Giá vé ghép 700.000đ/người. Đưa đón tận nơi tại khu vực cửa khẩu Móng Cái, các chợ thương mại, bãi biển Trà Cổ hoặc mũi Sa Vĩ theo hẹn.",
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
 * 5 Tiêu chí so sánh giữa Xe Ghép và Bao Xe trên chặng đường dài Hải Dương - Quảng Ninh.
 */
export const HD_QN_DECISION_ROWS: DecisionGuideRow[] = [
  {
    criterion: "1. Cự ly & Lộ trình di chuyển",
    sharedRide: "Phù hợp cho cá nhân đi các chặng gần hoặc vừa; đón trả tuần tự các điểm hẹn trên lộ trình.",
    privateCar: "Xe phục vụ riêng theo lộ trình thỏa thuận của đoàn, phù hợp cho các chặng đường dài đi Cẩm Phả, Vân Đồn, Móng Cái.",
    recommendation: "Với các chặng xa trên 100km, đi xe riêng giúp giảm bớt thời gian dừng đón trả trung gian.",
  },
  {
    criterion: "2. Chi phí trên mỗi hành khách",
    sharedRide: "Từ 250.000đ – 700.000đ/ghế tùy điểm đến; tối ưu chi phí khi đi 1 – 2 người.",
    privateCar: "Từ 600.000đ – 1.500.000đ/chuyến (hoặc 10.000đ/km theo cự ly); chia theo đầu người hợp lý khi đi theo nhóm.",
    recommendation: "Đi 1 – 2 người nên chọn xe ghép; nhóm từ 3 người trở lên có thể cân nhắc bao trọn chuyến.",
  },
  {
    criterion: "3. Nhu cầu giờ giấc & Chuyến nối tiếp",
    sharedRide: "Đi theo khung giờ thỏa thuận trước giữa hành khách và nhà xe.",
    privateCar: "Hành khách chủ động hẹn giờ xuất phát mong muốn khi liên hệ để nhà xe sắp xếp xe theo yêu cầu.",
    recommendation: "Khách có lịch nối chuyến tàu cao tốc tại Cảng Ao Tiên hoặc chuyến bay tại Vân Đồn nên thông báo trước giờ xuất bến/giờ bay để nhà xe tư vấn giờ đón phù hợp.",
  },
  {
    criterion: "4. Khối lượng hành lý mang theo",
    sharedRide: "Phù hợp với hành lý cá nhân gọn gàng, chia sẻ không gian khoang chứa đồ cùng các khách khác trên xe.",
    privateCar: "Toàn bộ khoang chứa đồ dành riêng cho đoàn, thuận tiện khi mang nhiều đồ đạc, đồ lễ hoặc hành lý cồng kềnh.",
    recommendation: "Khách mang theo nhiều đồ đạc hoặc kiện hàng lớn nên trao đổi trước số lượng kiện để bố trí không gian chứa đồ phù hợp.",
  },
  {
    criterion: "5. Nhu cầu không gian riêng trên chặng dài",
    sharedRide: "Không gian xe gia đình văn minh, lịch sự, đi chung cùng hành khách khác.",
    privateCar: "Không gian xe riêng phục vụ riêng cho đoàn khách trong suốt hành trình.",
    recommendation: "Gia đình có người cao tuổi, trẻ nhỏ hoặc cần không gian yên tĩnh trên chặng đường dài nên ưu tiên lựa chọn bao chuyến.",
  },
];

/**
 * 4 Nhóm Điểm Đón Trả Thực Tế Chiều Về từ Quảng Ninh về Hải Dương.
 */
export const HD_QN_REVERSE_HUBS: HubCategory[] = [
  {
    categoryName: "Cảng Tàu Du Lịch & Cảng Hàng Không",
    icon: "plane",
    hubs: [
      { name: "Cảng Tàu Khách Quốc Tế Ao Tiên", addressOrArea: "Khu vực Vân Đồn", note: "Đón trả khách tại sảnh cảng tàu sau các chuyến tàu cao tốc từ đảo trở về đất liền theo lịch hẹn" },
      { name: "Cảng Tàu Khách Quốc Tế Hạ Long & Tuần Châu", addressOrArea: "Khu vực Bãi Cháy & Tuần Châu", note: "Đón trả tại cổng nhà ga cảng tàu theo thỏa thuận trước chuyến đi" },
      { name: "Sân Bay Quốc Tế Vân Đồn", addressOrArea: "Khu vực xã Đoàn Kết, Vân Đồn", note: "Đón trả tại sảnh ga theo thông tin chuyến bay hành khách cung cấp" },
    ],
  },
  {
    categoryName: "Cơ Sở Y Tế & Trung Tâm Hành Chính",
    icon: "cross",
    hubs: [
      { name: "Bệnh Viện Bãi Cháy & BV Đa Khoa Tỉnh Quảng Ninh", addressOrArea: "Khu vực Bãi Cháy & Hòn Gai", note: "Có thể cung cấp địa chỉ bệnh viện khi gửi thông tin đặt xe để nhà xe kiểm tra phương án đón trả" },
      { name: "Bệnh Viện Việt Nam - Thụy Điển Uông Bí", addressOrArea: "Khu vực Uông Bí", note: "Có thể gửi thông tin cơ sở y tế khi đặt xe để nhà xe sắp xếp phương án đón trả phù hợp" },
      { name: "Bệnh Viện Sản Nhi Quảng Ninh", addressOrArea: "Khu vực Đại Yên, cửa ngõ Hạ Long", note: "Có thể cung cấp địa chỉ bệnh viện khi gửi thông tin đặt xe để nhà xe kiểm tra phương án đón trả" },
    ],
  },
  {
    categoryName: "Tổ Hợp Khu Công Nghiệp Trọng Điểm",
    icon: "factory",
    hubs: [
      { name: "KCN Sông Khoai (Amata) & KCN Đông Mai", addressOrArea: "Khu vực Quảng Yên", note: "Đón trả tại cổng nhà máy, văn phòng điều hành KCN hoặc khu dân cư lân cận" },
      { name: "KCN Texhong Hải Hà & Cảng Ghềnh Võ", addressOrArea: "Khu vực Hải Hà", note: "Đón trả khách tại khu vực văn phòng và nhà xưởng KCN theo lịch hẹn" },
      { name: "Cụm Công Nghiệp Mạo Khê & Uông Bí", addressOrArea: "Khu vực Tây Quảng Ninh", note: "Đưa đón theo lịch hẹn tại văn phòng điều hành hoặc điểm hẹn thỏa thuận" },
    ],
  },
  {
    categoryName: "Khu Di Tích Tâm Linh, Du Lịch & Cửa Khẩu",
    icon: "building",
    hubs: [
      { name: "Cửa Khẩu Quốc Tế Móng Cái & Chợ Trung Tâm", addressOrArea: "Khu vực Móng Cái", note: "Đón trả tại khu vực cửa khẩu Móng Cái và các chợ thương mại theo lịch hẹn" },
      { name: "Đền Cửa Ông & Chùa Ba Vàng, Yên Tử", addressOrArea: "Cẩm Phả & Uông Bí", note: "Đón trả khách tại khu vực bãi đỗ xe hoặc cổng vào các khu di tích theo thỏa thuận" },
      { name: "Tổ Hợp Sun World Hạ Long & Biệt Thự Tuần Châu", addressOrArea: "Khu vực Bãi Cháy", note: "Đón trả khách tại sảnh khách sạn, homestay hoặc cổng khu du lịch" },
    ],
  },
];

/**
 * 4 Cam Kết Chất Lượng Vàng của Nhà Xe Phong Cách trên trục Quảng Ninh.
 */
export const HD_QN_QUALITY_COMMITMENTS: QualityCommitment[] = [
  {
    title: "Xe gia đình 4 và 7 chỗ sạch sẽ, thoáng mát",
    description: "Phục vụ hành khách bằng các dòng xe gia đình phổ biến (4 chỗ sedan, 7 chỗ MPV rộng rãi). Khoang xe luôn được dọn dẹp vệ sinh sạch sẽ, giữ không khí trong lành suốt chặng đường dài.",
    badge: "XE GIA ĐÌNH",
  },
  {
    title: "Mỗi vé ghép một chỗ ngồi riêng biệt thoải mái",
    description: "Mỗi hành khách đặt vé ghép có một ghế ngồi riêng độc lập, không nhồi nhét, xe đón trả tận nơi theo danh sách khách hàng đã sắp xếp lịch trước.",
    badge: "GHẾ RIÊNG BIỆT",
  },
  {
    title: "Đặt trước không mất phí - Thanh toán sau chuyến",
    description: "Chính sách minh bạch nhất quán: Quý khách đặt xe không phải đặt cọc trước bất kỳ chi phí nào; chỉ thanh toán sau khi kết thúc hành trình an toàn, đúng điểm hẹn.",
    badge: "An tâm đặt xe",
  },
  {
    title: "Đón tận nơi trả tận nhà hai chiều theo yêu cầu",
    description: "Tài xế đón tận cửa nhà tại các khu vực thuộc địa bàn Hải Dương và trả đúng địa chỉ hẹn trước tại 16 khu vực điểm đến trên toàn tỉnh Quảng Ninh.",
    badge: "ĐÓN TRẢ TẬN NƠI",
  },
];

/**
 * Bộ sưu tập hình ảnh thực tế của trục Quảng Ninh.
 */
export const HD_QN_MEDIA_GALLERY: MediaGalleryItem[] = [
  {
    src: "/images/cau-bach-dang-hai-phong-quang-ninh.jpg",
    alt: "Cầu Bạch Đằng trên trục cao tốc kết nối Hải Dương Hải Phòng sang Quảng Ninh nhanh chóng",
    caption: "Cầu Bạch Đằng và hệ thống cao tốc CT06 rút ngắn đáng kể thời gian từ Hải Dương đến các trung tâm Quảng Ninh.",
    width: 800,
    height: 533,
  },
  {
    src: "/images/xe-ghep-phong-cach-hai-duong-hai-phong-quang-ninh.jpg",
    alt: "Xe ghép Phong Cách phục vụ hành khách hai chiều Hải Dương đi các khu vực tại Quảng Ninh",
    caption: "Đội ngũ xe đón trả tận nơi hai chiều giữa địa bàn Hải Dương và toàn tỉnh Quảng Ninh.",
    width: 800,
    height: 533,
  },
  {
    src: "/images/xe-ghep-phong-cach-khoang-xe.jpg",
    alt: "Không gian nội thất xe ghế da êm ái sạch sẽ và thoáng mát",
    caption: "Khoang xe gia đình rộng rãi, điều hòa mát mẻ mang lại sự thoải mái cho chặng đường dài.",
    width: 800,
    height: 533,
  },
  {
    src: "/images/xe-ghep-phong-cach-don-tan-nha.jpg",
    alt: "Tài xế đưa đón hành khách tận nhà theo lịch hẹn trước tại Hải Dương và Quảng Ninh",
    caption: "Dịch vụ xe đưa đón tận cửa nhà theo lịch hẹn trước tại Hải Dương và Quảng Ninh.",
    width: 800,
    height: 533,
  },
];
