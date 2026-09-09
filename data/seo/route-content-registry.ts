/**
 * ROUTE CONTENT REGISTRY (DATA-DRIVEN SEO ROUTE ENGINE)
 *
 * Replaces route-specific JSX conditionals in MoneyLandingPage.
 * Allows each route (Hải Phòng, Quảng Ninh, Bắc Ninh...) to declare its
 * Gold Standard content configuration independently without modifying page logic.
 */

import {
  getHdHpEndpointRows,
  decisionGuideData,
  reversePickupCategories,
  whyChoosePhongCach,
  mediaGalleryList,
  type EndpointGuideItem,
  type DecisionGuideRow,
  type HubCategory,
  type MediaGalleryItem,
  type QualityCommitment,
} from "./hd-hp-gold-content";
import {
  getHdQnEndpointRows,
  HD_QN_DECISION_ROWS,
  HD_QN_REVERSE_HUBS,
  HD_QN_QUALITY_COMMITMENTS,
  HD_QN_MEDIA_GALLERY,
} from "./hd-qn-gold-content";

export interface DirectAnswerConfig {
  heading: string;
  summary: string;
  charterAndRouteInfo: string;
  takeaways: { label: string; value: string }[];
}

export interface PricingTableConfig {
  kicker: string;
  heading: string;
  subtitle: string;
  endpoints: EndpointGuideItem[];
  footnotesTitle: string;
  footnotes: { strong: string; text: string }[];
}

export interface PricingFactorItem {
  title: string;
  description: string;
}

export interface PricingFactorsConfig {
  kicker: string;
  heading: string;
  subtitle: string;
  factors: PricingFactorItem[];
}

export interface JourneyGuideConfig {
  kicker: string;
  heading: string;
  subtitle: string;
  paragraphs: string[];
  timeSlots: { label: string; value: string }[];
  image: { src: string; alt: string };
}

export interface ReverseHubsConfig {
  kicker: string;
  heading: string;
  subtitle: string;
  categories: readonly HubCategory[];
}

export interface DecisionGuideConfig {
  kicker: string;
  heading: string;
  subtitle: string;
  rows: readonly DecisionGuideRow[];
}

export interface ParcelServiceConfig {
  heading: string;
  description: string;
  features: string[];
  image: { src: string; alt: string };
}

export interface WhyUsConfig {
  kicker: string;
  heading: string;
  subtitle: string;
  items: readonly QualityCommitment[];
}

export interface MediaGalleryConfig {
  kicker: string;
  heading: string;
  subtitle: string;
  items: readonly MediaGalleryItem[];
}

export interface RouteGoldStandardContent {
  slug: string;
  directAnswer?: DirectAnswerConfig;
  pricingTable?: PricingTableConfig;
  pricingFactors?: PricingFactorsConfig;
  journeyGuide?: JourneyGuideConfig;
  reverseHubs?: ReverseHubsConfig;
  decisionGuide?: DecisionGuideConfig;
  parcelService?: ParcelServiceConfig;
  whyUs?: WhyUsConfig;
  mediaGallery?: MediaGalleryConfig;
}

export interface ContentResolveOptions {
  sharedPrice?: string;
  charter4Price?: string;
  parcelPrice?: string;
  phoneDisplay?: string;
}

/**
 * Resolves typed Gold Standard content for a route slug.
 * If a route does not have Gold Standard content configured, returns undefined.
 */
export function getRouteGoldContent(
  slug: string,
  options?: ContentResolveOptions
): RouteGoldStandardContent | undefined {
  if (slug === "xe-ghep-hai-duong-hai-phong") {
    const sharedPrice = options?.sharedPrice ?? "250.000đ/người";
    const charter4Price = options?.charter4Price ?? "500.000đ/chuyến";
    const parcelPrice = options?.parcelPrice ?? "150.000đ";
    const phoneDisplay = options?.phoneDisplay ?? "0987 663 883";

    return {
      slug,
      directAnswer: {
        heading: "Câu hỏi nhanh: Giá xe ghép Hải Dương đi Hải Phòng bao nhiêu và đi mất bao lâu?",
        summary: `Dịch vụ xe ghép Hải Dương đi Hải Phòng của Nhà Xe Phong Cách nhận đưa đón khách hai chiều theo lịch hẹn trước tại các khu vực thuộc địa bàn Hải Dương trước đây và 11 khu vực điểm đến trên toàn địa bàn Hải Phòng. Mức giá xe ghép chỉ từ ${sharedPrice} đối với khu vực trung tâm (Hồng Bàng, Ngô Quyền, Lê Chân) và các khu vực lân cận như An Dương, An Lão; các điểm đến Sân bay Cát Bi, Thủy Nguyên, Tiên Lãng, Vĩnh Bảo có mức giá vé ghép là 300.000 đồng/ghế; riêng các chặng Kiến Thụy, Dương Kinh dao động từ 300.000 đến 350.000 đồng/ghế, và khu vực Đồ Sơn, Cát Hải từ 350.000 đến 400.000 đồng/ghế.`,
        charterAndRouteInfo: `Hành khách có nhu cầu đi riêng có thể lựa chọn dịch vụ bao xe 4 chỗ hoặc 7 chỗ trọn gói giá chỉ từ ${charter4Price} (chưa bao gồm vé cầu đường cao tốc). Kết nối giao thông giữa Hải Dương và Hải Phòng gồm hai trục chính là Quốc lộ 5 và Cao tốc Hà Nội - Hải Phòng (5B). Thời gian di chuyển ước tính theo bản đồ giao thông khoảng 45 đến 60 phút tùy thuộc vào vị trí đón trả cụ thể và mật độ phương tiện thực tế. Nhà xe áp dụng chính sách đặt trước không mất phí, thanh toán sau chuyến đi. Quý khách nên liên hệ trước qua tổng đài ${phoneDisplay} hoặc nhắn tin Zalo để được kiểm tra và sắp xếp xe thuận tiện nhất cho lịch trình.`,
        takeaways: [
          { label: "Cự ly hành trình", value: "Khoảng 45 - 65 km (tùy điểm đến)" },
          { label: "Thời gian di chuyển", value: "Khoảng 45 - 60 phút (ước tính tham khảo)" },
          { label: "Lịch đón trả", value: "Theo lịch hẹn trước của khách" },
          { label: "Chính sách đặt xe", value: "Đặt trước không mất phí - Trả sau chuyến" },
        ],
      },
      pricingTable: {
        kicker: "BẢNG GIÁ MINH BẠCH",
        heading: "Bảng giá xe ghép & bao xe Hải Dương ⇄ Hải Phòng chi tiết 11 điểm đến",
        subtitle: "Bảng giá niêm yết chính thức áp dụng đồng bộ cho cả hai chiều Hải Dương đi Hải Phòng và Hải Phòng về Hải Dương.",
        endpoints: getHdHpEndpointRows(),
        footnotesTitle: "Lưu ý quan trọng về giá cước và phí cầu đường:",
        footnotes: [
          {
            strong: "Phí cầu đường cao tốc khi bao xe:",
            text: "Mức giá bao xe riêng chưa bao gồm chi phí vé trạm BOT cao tốc (tollIncluded: false). Quý khách có thể tự thanh toán tại làn thu phí hoặc gửi tài xế thanh toán theo biên lai thực tế của trạm.",
          },
          {
            strong: "Cách tính cước Tiên Lãng & Vĩnh Bảo:",
            text: "Riêng dịch vụ bao xe đến các khu vực Tiên Lãng và Vĩnh Bảo được áp dụng đơn giá theo cự ly thực tế là 10.000đ/km (tính theo km di chuyển), đảm bảo sự công bằng và tiết kiệm nhất cho khách hàng ở các xã gần hoặc xa.",
          },
          {
            strong: "Giá vé xe ghép tính theo người/ghế:",
            text: "Giá vé xe ghép là mức cước tính theo mỗi người cho từng điểm đến cụ thể, đưa đón tận nơi theo thỏa thuận trước chuyến đi.",
          },
          {
            strong: "Thời gian di chuyển tham khảo:",
            text: "Thời gian ghi trên bảng là ước tính tham khảo theo bản đồ giao thông trong điều kiện bình thường, có thể thay đổi tùy mật độ phương tiện và vị trí đón trả cụ thể.",
          },
        ],
      },
      pricingFactors: {
        kicker: "YẾU TỐ TÍNH CƯỚC",
        heading: "Các yếu tố quyết định chi phí chuyến đi Hải Dương - Hải Phòng",
        subtitle: "Hiểu rõ cách tính giá giúp quý khách chủ động lựa chọn phương án xe phù hợp và tiết kiệm nhất.",
        factors: [
          {
            title: "1. Cự ly & Vị trí đón trả",
            description: "Quãng đường từ khu vực trung tâm Hải Dương đến các khu vực trung tâm Hải Phòng (Hồng Bàng, Ngô Quyền, Lê Chân) khoảng 45km. Đối với các khu vực xa hơn như Cát Hải hoặc bãi biển Đồ Sơn (cự ly 65 - 75km), thời gian và quãng đường dài hơn nên cước phí có sự điều chỉnh tương ứng.",
          },
          {
            title: "2. Tuyến đường di chuyển",
            description: "Trục đường kết nối gồm Quốc lộ 5 và Cao tốc Hà Nội - Hải Phòng (5B). Đối với dịch vụ bao xe riêng, vé cầu đường cao tốc được tính riêng theo hóa đơn trạm thu phí nếu quý khách chọn đi cao tốc.",
          },
          {
            title: "3. Ghép ghế hay bao xe riêng",
            description: "Đi xe ghép là giải pháp tiết kiệm chi phí tối đa cho cá nhân (1 - 2 người). Trong khi đó, bao xe mang lại không gian riêng tư, chủ động thời gian xuất phát cho gia đình hoặc đoàn công tác.",
          },
        ],
      },
      journeyGuide: {
        kicker: "CẨM NANG HÀNH TRÌNH",
        heading: "Từ Hải Dương đi Hải Phòng mất bao lâu và đi cung đường nào?",
        subtitle: "Thông tin lộ trình thực tế giúp quý khách chủ động sắp xếp thời gian cho công việc và chuyến bay.",
        paragraphs: [
          "Tuyến đường từ Hải Dương đi Hải Phòng hiện nay rất thuận tiện nhờ mạng lưới cao tốc và quốc lộ kết nối trực tiếp. Tài xế đón quý khách tận nơi tại khu vực Hải Dương (trung tâm và các địa bàn Tứ Kỳ, Gia Lộc, Cẩm Giàng, Nam Sách, Thanh Hà, Kim Thành trước đây...), sau đó kết nối vào Cao tốc Hà Nội - Hải Phòng (nút giao Gia Lộc hoặc nút giao QL10) hoặc trục Quốc lộ 5 tùy điểm đến.",
          "Xe đưa đón trực tiếp theo địa chỉ đã hẹn trước của hành khách đến các khu vực nội thành, khu công nghiệp hoặc Sân bay Cát Bi.",
        ],
        timeSlots: [
          { label: "Thời gian thông thường (giao thông thuận lợi):", value: "Khoảng 45 - 55 phút (ước tính tham khảo)" },
          { label: "Khung giờ cao điểm:", value: "Khoảng 60 - 75 phút (tùy mật độ xe)" },
          { label: "Đi Sân bay Cát Bi check-in:", value: "Khuyến nghị xuất phát sớm trước giờ bay" },
        ],
        image: {
          src: "/images/cao-toc-ha-noi-hai-phong.jpg",
          alt: "Tuyến đường cao tốc Hà Nội - Hải Phòng kết nối nhanh chóng giữa Hải Dương và Hải Phòng",
        },
      },
      reverseHubs: {
        kicker: "CHIỀU NGƯỢC LẠI",
        heading: "Xe ghép Hải Phòng về Hải Dương đón tận nơi, trả tận nhà",
        subtitle: "Các khu vực đón trả phổ biến phục vụ tận nơi theo yêu cầu của hành khách từ Hải Phòng về Hải Dương.",
        categories: reversePickupCategories,
      },
      decisionGuide: {
        kicker: "HƯỚNG DẪN LỰA CHỌN",
        heading: "So sánh toàn diện: Khi nào nên đi xe ghép và khi nào nên bao xe?",
        subtitle: "Bảng so sánh 5 tiêu chí thực tế giúp quý khách cân nhắc phương án tối ưu cho chuyến đi của mình.",
        rows: decisionGuideData,
      },
      parcelService: {
        heading: "Dịch vụ gửi đồ, gửi hàng hai chiều Hải Dương ⇄ Hải Phòng theo chuyến xe",
        description: `Bên cạnh vận chuyển hành khách, Nhà Xe Phong Cách nhận chuyển hàng hóa, tài liệu, bưu phẩm giữa Hải Dương và Hải Phòng theo thỏa thuận chuyến. Cước phí từ ${parcelPrice} tùy thuộc vào loại hàng, kích thước, khối lượng và điểm giao nhận thực tế.`,
        features: [
          "Nhận gửi bưu phẩm, tài liệu và hàng hóa theo thỏa thuận chuyến.",
          "Hàng hóa được xếp gọn gàng trong khoang cốp xe, giữ gìn cẩn thận.",
          "Tài xế liên hệ người nhận trước khi tới điểm giao hàng.",
        ],
        image: {
          src: "/images/gui-hang-theo-chuyen.png",
          alt: "Dịch vụ gửi hàng hóa hai chiều Hải Dương Hải Phòng giao nhận tận nơi",
        },
      },
      whyUs: {
        kicker: "CAM KẾT CHẤT LƯỢNG",
        heading: "Tại sao khách hàng tin tưởng lựa chọn Nhà Xe Phong Cách?",
        subtitle: "Uy tín tạo dựng từ sự an toàn, đúng giờ và trải nghiệm phục vụ chu đáo.",
        items: whyChoosePhongCach,
      },
      mediaGallery: {
        kicker: "HÌNH ẢNH THỰC TẾ",
        heading: "Hình ảnh thực tế đội xe và hành trình phục vụ",
        subtitle: "Phương tiện xe gia đình sạch sẽ, rộng rãi phục vụ hai chiều thuận tiện.",
        items: mediaGalleryList,
      },
    };
  }

  if (slug === "xe-ghep-hai-duong-quang-ninh") {
    const sharedPrice = options?.sharedPrice ?? "250.000đ/người";
    const charter4Price = options?.charter4Price ?? "600.000đ/chuyến";
    const parcelPrice = options?.parcelPrice ?? "180.000đ";
    const phoneDisplay = options?.phoneDisplay ?? "0987 663 883";

    return {
      slug,
      directAnswer: {
        heading: "Câu hỏi nhanh: Giá xe ghép Hải Dương đi Quảng Ninh bao nhiêu và đi mất bao lâu?",
        summary: `Dịch vụ xe ghép Hải Dương đi Quảng Ninh của Nhà Xe Phong Cách nhận đưa đón hành khách hai chiều theo lịch hẹn trước tại các khu vực thuộc địa bàn Hải Dương và 16 khu vực điểm đến trên toàn địa bàn Quảng Ninh. Mức giá xe ghép chỉ từ ${sharedPrice} đối với cửa ngõ Đông Triều, Mạo Khê (250.000 đồng/ghế); Uông Bí 300.000 đồng/ghế; Quảng Yên, Bãi Cháy 350.000 đồng/ghế; trung tâm Hạ Long 400.000 đồng/ghế; Cẩm Phả 450.000 đồng/ghế; Đền Cửa Ông, Sân bay Vân Đồn và Cảng tàu khách quốc tế Ao Tiên 500.000 đồng/ghế; Ba Chẽ, Tiên Yên 600.000 đồng/ghế; Đầm Hà, Bình Liêu, Hải Hà 650.000 đồng/ghế; và Móng Cái (Cửa khẩu quốc tế, Trà Cổ) 700.000 đồng/ghế.`,
        charterAndRouteInfo: `Hành khách có nhu cầu đi riêng có thể lựa chọn dịch vụ bao xe theo chuyến với mức giá khởi điểm chỉ từ ${charter4Price} (Uông Bí 600.000 đồng, Quảng Yên 700.000 đồng, Bãi Cháy 900.000 đồng, Hạ Long 1.000.000 đồng, Cẩm Phả 1.200.000 - 1.300.000 đồng, Vân Đồn 1.500.000 đồng theo bảng giá chi tiết; các chặng gần Đông Triều, Mạo Khê áp dụng cước theo cự ly thực tế 10.000đ/km; các chặng xa liên hệ thỏa thuận theo chuyến). Kết nối giao thông giữa Hải Dương và Quảng Ninh gồm hai trục huyết mạch: Quốc lộ 18 truyền thống và trục Cao tốc CT06 hiện đại (qua cầu Bạch Đằng kết nối Hạ Long, Vân Đồn và Móng Cái). Thời gian di chuyển ước tính theo bản đồ giao thông từ 45 phút (Đông Triều) đến 3 - 3,5 giờ (Móng Cái) tùy điểm đến cụ thể và mật độ phương tiện. Nhà xe áp dụng chính sách đặt trước không mất phí, thanh toán sau chuyến đi. Quý khách nên liên hệ trước qua tổng đài ${phoneDisplay} hoặc nhắn tin Zalo để được kiểm tra và sắp xếp xe thuận tiện nhất cho lịch trình.`,
        takeaways: [
          { label: "Cự ly hành trình", value: "Khoảng 40 - 180 km (tùy điểm đến)" },
          { label: "Thời gian di chuyển", value: "Khoảng 45 phút - 3,5 giờ (ước tính tham khảo)" },
          { label: "Lịch đón trả", value: "Theo lịch hẹn trước của khách" },
          { label: "Chính sách đặt xe", value: "Đặt trước không mất phí - Trả sau chuyến" },
        ],
      },
      pricingTable: {
        kicker: "BẢNG GIÁ MINH BẠCH",
        heading: "Bảng giá xe ghép & bao xe Hải Dương ⇄ Quảng Ninh chi tiết 16 điểm đến",
        subtitle: "Bảng giá niêm yết chính thức áp dụng đồng bộ cho cả hai chiều Hải Dương đi Quảng Ninh và Quảng Ninh về Hải Dương.",
        endpoints: getHdQnEndpointRows(),
        footnotesTitle: "Lưu ý quan trọng về giá cước và phương án di chuyển:",
        footnotes: [
          {
            strong: "Phí cầu đường cao tốc khi bao xe:",
            text: "Mức giá bao xe riêng chưa bao gồm chi phí vé trạm BOT cao tốc (tollIncluded: false). Quý khách có thể tự thanh toán tại làn thu phí hoặc gửi tài xế thanh toán theo hóa đơn thực tế của trạm.",
          },
          {
            strong: "Cách tính cước Đông Triều & Mạo Khê:",
            text: "Dịch vụ bao xe riêng đến các khu vực Đông Triều và Mạo Khê được áp dụng đơn giá theo cự ly thực tế là 10.000đ/km (tính theo km di chuyển thực tế), đảm bảo tính công bằng và tiết kiệm nhất cho hành khách.",
          },
          {
            strong: "Bao xe các chặng xa miền Đông Quảng Ninh:",
            text: "Đối với các điểm đến xa (Cửa Ông, Cảng Ao Tiên, Ba Chẽ, Tiên Yên, Đầm Hà, Bình Liêu, Hải Hà, Móng Cái), giá dịch vụ bao xe riêng vui lòng liên hệ tổng đài để thỏa thuận chi tiết theo lịch trình và phương án đi cao tốc.",
          },
          {
            strong: "Giá vé xe ghép tính theo người/ghế:",
            text: "Giá vé xe ghép là mức cước tính theo mỗi người cho từng điểm đến cụ thể, đưa đón tận nơi theo thỏa thuận trước chuyến đi.",
          },
          {
            strong: "Thời gian di chuyển tham khảo:",
            text: "Thời gian ghi trên bảng là ước tính tham khảo theo bản đồ giao thông trong điều kiện bình thường, có thể thay đổi tùy mật độ phương tiện và vị trí đón trả cụ thể.",
          },
        ],
      },
      pricingFactors: {
        kicker: "YẾU TỐ TÍNH CƯỚC",
        heading: "Các yếu tố quyết định chi phí chuyến đi Hải Dương - Quảng Ninh",
        subtitle: "Hiểu rõ cách tính giá giúp quý khách chủ động lựa chọn phương án xe phù hợp và tiết kiệm nhất.",
        factors: [
          {
            title: "1. Cự ly & Chiều dài hành lang di chuyển",
            description: "Địa bàn Quảng Ninh trải dài hơn 150km từ Tây sang Đông. Quãng đường từ Hải Dương đến Đông Triều chỉ khoảng 40km, đến Hạ Long khoảng 70 - 80km, nhưng đến Vân Đồn (Cảng Ao Tiên) là 120km và Móng Cái lên tới gần 180km. Do đó mức giá được phân bậc khoa học theo từng cụm điểm đến.",
          },
          {
            title: "2. Tuyến đường di chuyển: Quốc lộ 18 vs Cao tốc CT06",
            description: "Hành khách có thể lựa chọn di chuyển theo Quốc lộ 18 truyền thống hoặc tuyến Cao tốc CT06 hiện đại (qua cầu Bạch Đằng kết nối cao tốc Hạ Long - Vân Đồn - Móng Cái). Khi bao xe riêng đi cao tốc, chi phí vé trạm BOT được tính theo thực tế biểu phí của trạm.",
          },
          {
            title: "3. Nhu cầu ghép ghế hay bao xe riêng",
            description: "Đi ghép ghế là phương án tối ưu chi phí cho hành khách đi 1 - 2 người. Với các nhóm khách gia đình có trẻ nhỏ, người cao tuổi hoặc mang theo nhiều đồ đạc, phương án bao xe trọn chuyến mang lại không gian riêng tư và linh hoạt hơn cho lịch trình.",
          },
        ],
      },
      journeyGuide: {
        kicker: "CẨM NANG HÀNH TRÌNH",
        heading: "Từ Hải Dương đi Quảng Ninh mất bao lâu và đi cung đường nào thuận tiện nhất?",
        subtitle: "Thông tin lộ trình thực tế giúp quý khách chủ động sắp xếp thời gian cho công việc, du lịch và khớp giờ tàu ra đảo.",
        paragraphs: [
          "Tuyến đường kết nối giữa Hải Dương và Quảng Ninh hiện nay rất đồng bộ với hai lựa chọn giao thông chính. Với các điểm đến phía Tây như Đông Triều, Mạo Khê, Uông Bí, phương tiện thường di chuyển qua Quốc lộ 18 hoặc các trục kết nối liên tỉnh nhanh chóng.",
          "Đối với các điểm đến từ Bãi Cháy, Hạ Long đến Cẩm Phả, Vân Đồn (Cảng Ao Tiên) và Móng Cái, xe di chuyển theo hành lang Cao tốc CT06 qua cầu Bạch Đằng. Tuyến cao tốc tiêu chuẩn hiện đại giúp rút ngắn đáng kể thời gian hành trình, xe chạy êm ái và an toàn.",
          "Đối với hành khách có lịch nối chuyến tàu cao tốc đi đảo Cô Tô, Quan Lạn tại Cảng quốc tế Ao Tiên (Vân Đồn) hoặc chuyến bay tại Sân bay Vân Đồn, quý khách nên thông báo trước giờ tàu chạy hoặc giờ bay dự kiến để nhà xe tư vấn khung giờ đón phù hợp.",
        ],
        timeSlots: [
          { label: "Hải Dương ⇄ Đông Triều / Mạo Khê / Uông Bí:", value: "Khoảng 45 - 75 phút" },
          { label: "Hải Dương ⇄ Bãi Cháy / Hạ Long:", value: "Khoảng 75 - 100 phút" },
          { label: "Hải Dương ⇄ Cẩm Phả / Vân Đồn (Cảng Ao Tiên):", value: "Khoảng 100 - 140 phút" },
          { label: "Hải Dương ⇄ Ba Chẽ / Tiên Yên / Bình Liêu / Đầm Hà / Hải Hà:", value: "Khoảng 2 - 3 giờ" },
          { label: "Hải Dương ⇄ Móng Cái (Cửa khẩu, Trà Cổ):", value: "Khoảng 3 - 3,5 giờ" },
        ],
        image: {
          src: "/images/cau-bach-dang-hai-phong-quang-ninh.jpg",
          alt: "Cầu Bạch Đằng và hệ thống cao tốc kết nối Hải Dương đi Quảng Ninh thông suốt",
        },
      },
      reverseHubs: {
        kicker: "CHIỀU NGƯỢC LẠI",
        heading: "Xe ghép Quảng Ninh về Hải Dương đón tận nơi, trả tận nhà",
        subtitle: "Các khu vực đón trả phổ biến phục vụ tận nơi theo yêu cầu của hành khách từ khắp các địa bàn Quảng Ninh về Hải Dương.",
        categories: HD_QN_REVERSE_HUBS,
      },
      decisionGuide: {
        kicker: "HƯỚNG DẪN LỰA CHỌN",
        heading: "So sánh toàn diện: Khi nào nên đi xe ghép và khi nào nên bao xe đi Quảng Ninh?",
        subtitle: "Bảng so sánh 5 tiêu chí thực tế giúp quý khách cân nhắc phương án tối ưu cho hành trình dài đến Quảng Ninh.",
        rows: HD_QN_DECISION_ROWS,
      },
      parcelService: {
        heading: "Dịch vụ gửi đồ, gửi hàng hai chiều Hải Dương ⇄ Quảng Ninh theo chuyến xe",
        description: `Bên cạnh vận chuyển hành khách, Nhà Xe Phong Cách nhận gửi hàng hóa, bưu phẩm, tài liệu và đặc sản giữa Hải Dương và Quảng Ninh theo chuyến xe hàng ngày. Cước phí gửi hàng khoảng 150.000 – 200.000đ trở lên, tùy điểm đến và hàng hóa cụ thể.`,
        features: [
          "Nhận gửi bưu phẩm, tài liệu, hàng mẫu và đặc sản theo chuyến xe thuận tiện.",
          "Cước gửi hàng từ khoảng 150.000 – 200.000đ trở lên tùy loại hàng và điểm giao nhận.",
          "Hàng hóa được xếp gọn gàng trong khoang xe, trao đổi trước với tài xế khi gửi.",
        ],
        image: {
          src: "/images/gui-hang-theo-chuyen.png",
          alt: "Dịch vụ gửi hàng hai chiều Hải Dương Quảng Ninh giao nhận tận nơi chu đáo",
        },
      },
      whyUs: {
        kicker: "CAM KẾT CHẤT LƯỢNG",
        heading: "Tại sao khách hàng tin tưởng lựa chọn Nhà Xe Phong Cách đi Quảng Ninh?",
        subtitle: "Uy tín tạo dựng từ sự an toàn, chu đáo và phương tiện sạch sẽ trên từng chặng đường.",
        items: HD_QN_QUALITY_COMMITMENTS,
      },
      mediaGallery: {
        kicker: "HÌNH ẢNH THỰC TẾ",
        heading: "Hình ảnh thực tế đội xe và hành trình phục vụ trên trục Quảng Ninh",
        subtitle: "Phương tiện xe gia đình sạch sẽ, rộng rãi phục vụ hai chiều an toàn và thoải mái.",
        items: HD_QN_MEDIA_GALLERY,
      },
    };
  }

  return undefined;
}
