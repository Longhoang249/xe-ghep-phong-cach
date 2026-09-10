const sharedServiceTags = Object.freeze([
  "Xe ghép",
  "Bao xe 4 và 7 chỗ",
  "Gửi hàng",
  "Hai chiều",
  "Đón tận nơi, trả tận nơi",
]);

const sharedDecisionRows = Object.freeze([
  Object.freeze({
    need: "Đi 1 người",
    guidance: "Xe ghép thường là lựa chọn nên hỏi trước nếu bạn muốn tối ưu chi phí và chấp nhận đi cùng khách khác.",
  }),
  Object.freeze({
    need: "Đi 2 người",
    guidance: "Nên hỏi cả giá ghép và giá bao xe, rồi chọn theo hành lý, thời gian và nhu cầu đi riêng.",
  }),
  Object.freeze({
    need: "Nhóm 3-4 người",
    guidance: "Có thể cân nhắc bao xe để chủ động hơn; loại xe và giá chuyến cần được xác nhận khi đặt.",
  }),
]);

export const moneyPageUpgrades = Object.freeze({
  "hd-hp": Object.freeze({
    assetId: "MP-003",
    updatedAt: "2026-08-22",
    title: "Xe ghép Hải Dương - Hải Phòng từ 250K | Phong Cách",
    description: "Xe ghép Hải Dương - Hải Phòng hai chiều, đón tận nơi, từ 250.000đ/người. Có bao xe 4-7 chỗ, gửi hàng và thanh toán sau chuyến.",
    h1: "Xe ghép Hải Dương - Hải Phòng",
    eyebrow: "XE GHÉP VÀ BAO XE HAI CHIỀU",
    answer: "Phong Cách nhận xe ghép, bao xe 4-7 chỗ và gửi hàng tuyến Hải Dương - Hải Phòng cả hai chiều, đón tận nơi và trả tận nơi. Giá ghép từ 250.000đ/người; giá chuyến cụ thể được xác nhận theo ngày, giờ và địa chỉ đón trả.",
    summaryTitle: "HẢI DƯƠNG - HẢI PHÒNG",
    summaryItems: Object.freeze([
      "Xe ghép, bao xe và gửi hàng",
      "Nhận Hải Dương đi Hải Phòng",
      "Nhận Hải Phòng về Hải Dương",
      "Đón tận nơi, trả tận nơi",
      "Đặt trước không mất phí",
      "Thanh toán sau chuyến",
    ]),
    serviceTags: sharedServiceTags,
    directions: Object.freeze([
      Object.freeze({
        title: "Hải Dương đến Hải Phòng",
        copy: "Gửi địa chỉ đón tại Hải Dương, địa chỉ trả tại Hải Phòng và thời gian bạn muốn đi để Phong Cách kiểm tra xe và báo giá chuyến.",
      }),
      Object.freeze({
        title: "Hải Phòng về Hải Dương",
        copy: "Phong Cách nhận chiều về trên cùng tuyến. Khách không cần tìm một trang chiều ngược riêng; hãy gửi địa chỉ hai đầu để kiểm tra chuyến.",
      }),
    ]),
    decisionRows: sharedDecisionRows,
    support: Object.freeze({
      href: "/blog/di-hai-duong-hai-phong-bang-phuong-tien-gi",
      label: "So sánh các cách đi Hải Dương - Hải Phòng",
      copy: "Nếu bạn còn cân nhắc xe khách, xe ghép, bao xe hay tự lái, bài so sánh trung lập này giúp chọn phương án trước khi đặt.",
    }),
    endpointNames: Object.freeze([]),
    schemaOfferDescription: "Giá xe ghép tuyến Hải Dương - Hải Phòng từ 250.000đ/người. Đây là giá bắt đầu, không phải giá cố định; giá thực tế phụ thuộc ngày đi, thời gian và địa chỉ đón trả.",
    faq: Object.freeze([
      Object.freeze({ q: "Giá xe ghép Hải Dương - Hải Phòng bao nhiêu?", a: "Giá xe ghép từ 250.000đ/người. Đây là giá bắt đầu; giá chuyến cụ thể được xác nhận theo ngày, giờ và địa chỉ đón trả." }),
      Object.freeze({ q: "Giá có cố định không?", a: "Không. Giá thực tế phụ thuộc địa chỉ đón/trả, thời gian di chuyển, ngày đi và điều kiện chuyến. Phong Cách không công bố công thức phụ phí khi chưa có quy tắc được xác nhận." }),
      Object.freeze({ q: "Có xe Hải Phòng về Hải Dương không?", a: "Có. Phong Cách nhận cả hai chiều Hải Dương - Hải Phòng; khách cần liên hệ để kiểm tra xe cho thời điểm thực tế." }),
      Object.freeze({ q: "Có đón tận nhà và trả tận nơi không?", a: "Có. Khách cung cấp địa chỉ cụ thể tại hai đầu để Phong Cách kiểm tra chuyến và xác nhận giá." }),
      Object.freeze({ q: "Bao xe khác xe ghép thế nào?", a: "Xe ghép phù hợp khi khách chấp nhận đi cùng người khác. Bao xe dành cho nhu cầu đi riêng và chủ động hơn; có lựa chọn 4 hoặc 7 chỗ tùy xe thực tế." }),
      Object.freeze({ q: "Nhóm 3-4 người nên đi xe ghép hay bao xe?", a: "Nên hỏi cả hai phương án. Nhóm 3-4 người có thể cân nhắc bao xe nếu cần đi riêng, có nhiều hành lý hoặc muốn chủ động; không có một lựa chọn đúng cho mọi chuyến." }),
      Object.freeze({ q: "Phong Cách có nhận gửi hàng không?", a: "Có. Giá gửi hàng từ 150.000đ; loại hàng, kích thước, đóng gói và điểm giao nhận cần được kiểm tra trước chuyến." }),
    ]),
  }),
  "hd-cb": Object.freeze({
    assetId: "MP-004",
    updatedAt: "2026-09-09",
    title: "Xe Hải Dương - Sân bay Cát Bi từ 300K đón tận nơi | Phong Cách",
    description: "Xe Hải Dương - Sân bay Cát Bi hai chiều đón tận nơi. Xe ghép 300.000đ/người, bao xe 550.000đ/chuyến. Đặt trước không mất phí, gọi 0987 663 883.",
    h1: "Xe Hải Dương - Sân bay Cát Bi",
    eyebrow: "XE ĐƯA ĐÓN SÂN BAY CÁT BI HAI CHIỀU",
    answer: "Phong Cách phục vụ xe ghép và bao xe tuyến Hải Dương - Sân bay Cát Bi hai chiều đón trả tận nơi. Giá vé xe ghép từ 300.000đ/người; bao xe riêng 550.000đ/chuyến (chưa bao gồm vé cầu đường cao tốc). Đặt trước không mất phí. Thanh toán sau chuyến.",
    heroBookingPrompt: "Gửi điểm đón, điểm trả, ngày đi và giờ bay để kiểm tra xe",
    summaryTitle: "HẢI DƯƠNG - SÂN BAY CÁT BI",
    summaryItems: Object.freeze([
      "Xe ghép và bao xe hai chiều",
      "Đón tận nơi tại Hải Dương",
      "Đưa đón Sân bay Cát Bi hai chiều",
      "Trả tận nơi theo địa chỉ",
      "Đặt trước không mất phí",
      "Thanh toán sau chuyến",
    ]),
    serviceTags: sharedServiceTags,
    directions: Object.freeze([
      Object.freeze({
        title: "Hải Dương đến Sân bay Cát Bi",
        copy: "Quý khách cung cấp điểm đón tại Hải Dương, ngày đi và giờ bay để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp.",
      }),
      Object.freeze({
        title: "Sân bay Cát Bi về Hải Dương",
        copy: "Quý khách cung cấp điểm đón tại Sân bay Cát Bi, ngày đi và giờ bay để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp.",
      }),
    ]),
    decisionKicker: "NHU CẦU ĐI SÂN BAY",
    decisionTitle: "Chọn xe theo chuyến và hành lý",
    decisionRows: Object.freeze([
      Object.freeze({ need: "Đi ra sân bay", guidance: "Quý khách cung cấp điểm đón/trả tại Sân bay Cát Bi, ngày đi và giờ bay để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp." }),
      Object.freeze({ need: "Từ sân bay về Hải Dương", guidance: "Quý khách cung cấp điểm đón tại Sân bay Cát Bi, ngày đi và giờ bay để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp." }),
      Object.freeze({ need: "Đi một người", guidance: "Nên chọn xe ghép 300.000đ/người để tối ưu chi phí, đón trả tận nơi hai chiều." }),
      Object.freeze({ need: "Nhóm hoặc gia đình", guidance: "Bao xe riêng 550.000đ/chuyến mang lại không gian riêng tư và linh hoạt thời gian theo lịch trình cá nhân." }),
      Object.freeze({ need: "Nhiều hành lý ký gửi", guidance: "Khách nên thông báo trước số lượng vali để nhà xe bố trí khoang cốp xe rộng rãi phù hợp." }),
    ]),
    decisionNote: "Quý khách cung cấp điểm đón/trả tại Sân bay Cát Bi, ngày đi và giờ bay để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp.",
    bookingGuide: Object.freeze({
      kicker: "ĐẶT XE SÂN BAY DỄ DÀNG",
      title: "Ba bước để kiểm tra xe đi Cát Bi",
      intro: "Phong Cách kiểm tra xe và giá theo chuyến thực tế. Đặt trước không mất phí. Thanh toán sau chuyến.",
      steps: Object.freeze([
        Object.freeze({ title: "Gửi điểm đón và điểm trả", copy: "Cung cấp địa chỉ cụ thể tại Hải Dương và khu vực đón/trả tại Sân bay Cát Bi." }),
        Object.freeze({ title: "Gửi ngày và giờ bay", copy: "Quý khách cung cấp điểm đón/trả tại Sân bay Cát Bi, ngày đi và giờ bay hoặc giờ cần có mặt để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp." }),
        Object.freeze({ title: "Xác nhận và đón xe", copy: "Phong Cách trao đổi và thống nhất lịch hẹn trước chuyến đi. Quý khách lên xe và thanh toán sau chuyến." }),
      ]),
    }),
    support: Object.freeze({
      href: "/xe-ghep-hai-duong-hai-phong",
      label: "Xem tuyến Hải Dương - Hải Phòng",
      copy: "Nếu điểm đến của bạn là các khu vực tại Hải Phòng thay vì Sân bay Cát Bi, trang tuyến chính giúp xem chi tiết bảng giá 11 điểm đến.",
      kicker: "TUYẾN CHÍNH (PILLAR)",
      cta: "Xem tuyến Hải Dương - Hải Phòng →",
    }),
    endpointNames: Object.freeze([]),
    schemaOfferDescription: "Giá vé xe ghép tuyến Hải Dương - Sân bay Cát Bi là 300.000đ/người; bao xe riêng là 550.000đ/chuyến (chưa bao gồm vé cầu đường cao tốc).",
    faq: Object.freeze([
      Object.freeze({
        q: "Giá xe Hải Dương - Sân bay Cát Bi bao nhiêu?",
        a: "Giá xe ghép từ 300.000đ/người và bao xe riêng theo chuyến từ 550.000đ/chuyến (chưa bao gồm vé cầu đường cao tốc). Nhà xe phục vụ cả hai chiều giữa Hải Dương và Sân bay Cát Bi.",
      }),
      Object.freeze({
        q: "Có xe ghép từ Hải Dương đi sân bay Cát Bi không?",
        a: "Có. Phong Cách phục vụ xe ghép tuyến Hải Dương đi Sân bay Cát Bi đón trả tận nơi.",
      }),
      Object.freeze({
        q: "Có xe đón từ Sân bay Cát Bi về Hải Dương khi máy bay hạ cánh không?",
        a: "Có. Phong Cách phục vụ cả hai chiều: đón từ Hải Dương đi Sân bay Cát Bi và đón từ Sân bay Cát Bi về lại Hải Dương.",
      }),
      Object.freeze({
        q: "Có đón tận nơi và trả tận nơi không?",
        a: "Có. Khách cung cấp địa chỉ cụ thể tại hai đầu để Phong Cách kiểm tra xe và xác nhận chuyến đón trả tận nơi.",
      }),
      Object.freeze({
        q: "Một người đi Cát Bi có thể đặt xe ghép không?",
        a: "Có thể đặt xe ghép. Quý khách cung cấp điểm đón/trả tại Sân bay Cát Bi, ngày đi và giờ bay để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp.",
      }),
      Object.freeze({
        q: "Nhóm 2 - 4 người nên ghép hay bao xe?",
        a: "Nên cân nhắc bao xe riêng 550.000đ/chuyến để có không gian riêng tư và linh hoạt thời gian theo lịch trình cá nhân.",
      }),
      Object.freeze({
        q: "Giá bao xe đã bao gồm vé cao tốc chưa?",
        a: "Chưa bao gồm. Mức giá bao xe 550.000đ/chuyến chưa bao gồm vé cầu đường cao tốc (tollIncluded: false). Quý khách có thể tự thanh toán hoặc gửi tài xế thanh toán theo thực tế.",
      }),
      Object.freeze({
        q: "Cần cung cấp thông tin gì khi đặt xe sân bay?",
        a: "Quý khách cung cấp điểm đón/trả tại Sân bay Cát Bi, ngày đi và giờ bay để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp.",
      }),
    ]),
  }),
  "hd-qn": Object.freeze({
    assetId: "MP-005",
    updatedAt: "2026-08-22",
    title: "Xe ghép Hải Dương - Quảng Ninh từ 250K | Phong Cách",
    description: "Xe ghép Hải Dương - Quảng Ninh hai chiều, đón trả tận nơi, từ 250.000đ/người. Có bao xe 4-7 chỗ; giá xác nhận theo điểm đến.",
    h1: "Xe ghép Hải Dương - Quảng Ninh",
    eyebrow: "XE GHÉP VÀ BAO XE HAI CHIỀU",
    answer: "Phong Cách nhận xe ghép, bao xe 4-7 chỗ và gửi hàng tuyến Hải Dương - Quảng Ninh cả hai chiều, đón tận nơi và trả tận nơi. Giá ghép từ 250.000đ/người ở cấp tuyến; địa chỉ cụ thể tại Quảng Ninh cần được kiểm tra để xác nhận xe và giá chuyến.",
    summaryTitle: "HẢI DƯƠNG - QUẢNG NINH",
    summaryItems: Object.freeze([
      "Xe ghép, bao xe và gửi hàng",
      "Nhận Hải Dương đi Quảng Ninh",
      "Nhận Quảng Ninh về Hải Dương",
      "Đón tận nơi, trả tận nơi ở cấp tuyến",
      "Đặt trước không mất phí",
      "Thanh toán sau chuyến",
    ]),
    serviceTags: sharedServiceTags,
    directions: Object.freeze([
      Object.freeze({
        title: "Hải Dương đến Quảng Ninh",
        copy: "Quảng Ninh có nhiều điểm đến khác nhau. Hãy gửi đúng khu vực và địa chỉ trả để Phong Cách kiểm tra xe, điểm đón trả và giá chuyến.",
      }),
      Object.freeze({
        title: "Quảng Ninh về Hải Dương",
        copy: "Phong Cách nhận chiều về ở cấp tuyến. Điểm đón cụ thể tại Quảng Ninh vẫn phải được kiểm tra; không mặc định mọi endpoint đều có cùng availability.",
      }),
    ]),
    decisionRows: sharedDecisionRows,
    support: Object.freeze({
      href: "/blog/nhung-chuyen-xe-tu-hai-duong-di-quang-ninh",
      label: "So sánh các cách đi Hải Dương - Quảng Ninh",
      copy: "Xem bài so sánh phương án di chuyển và bối cảnh các khu vực tại Quảng Ninh trước khi chọn xe.",
    }),
    endpointNames: Object.freeze([
      "Đông Triều",
      "Uông Bí",
      "Quảng Yên",
      "Hạ Long / Bãi Cháy",
      "Cẩm Phả",
      "Vân Đồn / Ao Tiên",
      "Móng Cái",
    ]),
    endpointKicker: "ĐỊNH HƯỚNG KHU VỰC TẠI QUẢNG NINH",
    endpointTitle: "Bạn đi khu vực nào tại Quảng Ninh?",
    endpointIntro: "Quảng Ninh có nhiều khu vực và điểm đến. Danh sách này giúp khách mô tả đúng điểm đến khi hỏi chuyến.",
    endpointBoundary: "Việc nêu tên khu vực không xác nhận mọi địa chỉ luôn có xe hoặc cùng một mức giá. Hãy gửi điểm đón/trả cụ thể để Phong Cách kiểm tra chuyến.",
    schemaOfferDescription: "Giá xe ghép cấp tuyến Hải Dương - Quảng Ninh từ 250.000đ/người. Đây không phải giá cố định hoặc giá riêng cho một endpoint; giá thực tế được xác nhận theo ngày, giờ và địa chỉ đón trả.",
    faq: Object.freeze([
      Object.freeze({ q: "Giá xe ghép Hải Dương - Quảng Ninh bao nhiêu?", a: "Giá xe ghép từ 250.000đ/người ở cấp tuyến Hải Dương - Quảng Ninh. Đây là giá bắt đầu, không phải giá cố định hoặc giá riêng cho một endpoint." }),
      Object.freeze({ q: "Giá có cố định cho mọi điểm tại Quảng Ninh không?", a: "Không. Giá thực tế phụ thuộc địa chỉ đón/trả, thời gian di chuyển, ngày đi và điều kiện chuyến. Cần gửi đúng điểm đến để xác nhận." }),
      Object.freeze({ q: "Có nhận chiều Quảng Ninh về Hải Dương không?", a: "Có nhận chiều về ở cấp tuyến. Điểm đón cụ thể tại Quảng Ninh và xe cho thời điểm thực tế vẫn cần được kiểm tra." }),
      Object.freeze({ q: "Có đón tận nhà và trả tận nơi không?", a: "Có ở cấp tuyến theo xác nhận của Owner. Khách phải cung cấp địa chỉ cụ thể để Phong Cách kiểm tra endpoint, xe và giá chuyến." }),
      Object.freeze({ q: "Bao xe khác xe ghép thế nào?", a: "Xe ghép phù hợp khi khách chấp nhận đi cùng người khác, tối ưu chi phí theo từng người. Bao xe dành cho nhu cầu đi riêng theo chuyến, giá được tính theo từng điểm đến cụ thể (hoặc tính theo km thực tế)." }),
      Object.freeze({ q: "Nhóm 3-4 người nên đi xe ghép hay bao xe?", a: "Nên hỏi cả hai phương án theo đúng điểm đến. Nhóm 3-4 người có thể cân nhắc bao xe nếu cần đi riêng, có nhiều hành lý hoặc muốn chủ động hơn." }),
      Object.freeze({ q: "Phong Cách có nhận gửi hàng không?", a: "Có. Cước gửi hàng khoảng từ 150.000 - 200.000đ trở lên; loại hàng, kích thước, đóng gói và điểm giao nhận cụ thể cần được trao đổi trước chuyến." }),
      Object.freeze({ q: "Các endpoint được liệt kê có phải đều đã xác nhận phục vụ không?", a: "Không. Danh sách endpoint chỉ giúp người đọc xác định khu vực và nhu cầu tìm kiếm. Availability và giá cho từng địa chỉ phải được Phong Cách kiểm tra riêng." }),
    ]),
  }),
  "hd-ha-long": Object.freeze({
    assetId: "MP-019",
    updatedAt: "2026-09-10",
    title: "Xe ghép Hải Dương - Hạ Long từ 400K đón tận nơi | Phong Cách",
    description: "Xe ghép Hải Dương - Hạ Long hai chiều đón tận nơi. Xe ghép 400.000đ/người, bao xe 1.000.000đ/chuyến (Bãi Cháy từ 350k). Đặt trước không mất phí, gọi 0987 663 883.",
    h1: "Xe Ghép Hải Dương - Hạ Long",
    eyebrow: "XE GHÉP VÀ BAO XE HAI CHIỀU",
    answer: "Xe Hải Dương đi Hạ Long giá bao nhiêu? Phong Cách phục vụ xe ghép 400.000đ/người và bao xe riêng theo chuyến 1.000.000đ/chuyến (chưa bao gồm vé cầu đường cao tốc) đón trả tận nơi. Với điểm đến khu vực Bãi Cháy, giá xe ghép là 350.000đ/người và bao xe là 900.000đ/chuyến theo giá endpoint đã xác thực. Dịch vụ gửi hàng khoảng 150.000 - 200.000đ trở lên, tùy điểm đến và hàng hóa cụ thể. Đặt trước không mất phí. Thanh toán sau chuyến.",
    heroBookingPrompt: "Gửi điểm đón, điểm trả, ngày đi và thời gian để kiểm tra xe",
    summaryTitle: "HẢI DƯƠNG - HẠ LONG / BÃI CHÁY",
    summaryItems: Object.freeze([
      "Xe ghép và bao xe hai chiều",
      "Đón tận nơi tại Hải Dương",
      "Trả tận nơi Bãi Cháy và Hạ Long",
      "Bao xe chưa gồm vé cao tốc",
      "Đặt trước không mất phí",
      "Thanh toán sau chuyến",
    ]),
    serviceTags: sharedServiceTags,
    directions: Object.freeze([
      Object.freeze({
        title: "Hải Dương đến Hạ Long",
        copy: "Quý khách cung cấp điểm đón tại Hải Dương, điểm trả cụ thể (khách sạn, cảng tàu hoặc địa chỉ nhà tại Hạ Long hoặc Bãi Cháy), ngày đi, thời gian cần đi và số lượng khách để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp.",
      }),
      Object.freeze({
        title: "Hạ Long về Hải Dương",
        copy: "Phong Cách phục vụ chiều đón từ Hạ Long về Hải Dương. Quý khách cung cấp địa chỉ đón tại Hạ Long, điểm trả tại Hải Dương, ngày về và thời gian mong muốn để nhà xe sắp xếp xe phù hợp.",
      }),
    ]),
    decisionKicker: "PHÙ HỢP VỚI NHU CẦU NÀO?",
    decisionTitle: "Chọn xe theo mục đích và nhóm khách",
    decisionRows: Object.freeze([
      Object.freeze({ need: "Đi cá nhân 1-2 người", guidance: "Nên chọn xe ghép 400.000đ/người (hoặc 350.000đ đi Bãi Cháy) để tối ưu chi phí, đón trả tận nơi hai chiều." }),
      Object.freeze({ need: "Nhóm bạn hoặc gia đình", guidance: "Bao xe riêng 1.000.000đ/chuyến (900.000đ đi Bãi Cháy) mang lại không gian riêng tư và linh hoạt lộ trình cá nhân." }),
      Object.freeze({ need: "Đến khách sạn Bãi Cháy", guidance: "Khu vực Bãi Cháy áp dụng giá endpoint đã xác thực: 350.000đ/người ghép và 900.000đ/chuyến bao xe." }),
      Object.freeze({ need: "Đến cảng tàu hoặc tour vịnh", guidance: "Nên chọn bao xe riêng và cung cấp giờ xuất bến dự kiến để nhà xe tư vấn giờ xuất phát phù hợp." }),
      Object.freeze({ need: "Nhiều hành lý du lịch", guidance: "Khách nên thông báo trước số lượng vali để nhà xe bố trí khoang cốp xe rộng rãi phù hợp." }),
    ]),
    decisionNote: "Quý khách cung cấp điểm đón, điểm trả, ngày đi và thời gian để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp.",
    bookingGuide: Object.freeze({
      kicker: "GỬI ĐỦ THÔNG TIN CHUYẾN",
      title: "Ba bước để kiểm tra xe và giá",
      intro: "Phong Cách kiểm tra xe và giá theo chuyến thực tế. Đặt trước không mất phí. Thanh toán sau chuyến.",
      steps: Object.freeze([
        Object.freeze({ title: "Gửi điểm đón và điểm trả", copy: "Cung cấp địa chỉ cụ thể tại Hải Dương và khách sạn, cảng tàu hoặc điểm đến tại Hạ Long hoặc Bãi Cháy." }),
        Object.freeze({ title: "Gửi ngày đi và thời gian", copy: "Quý khách cho biết ngày đi, thời gian cần có mặt và số người để nhà xe kiểm tra xe phù hợp." }),
        Object.freeze({ title: "Xác nhận và đón xe", copy: "Phong Cách trao đổi và thống nhất lịch hẹn trước chuyến đi. Quý khách lên xe và thanh toán sau chuyến." }),
      ]),
    }),
    support: Object.freeze({
      href: "/xe-ghep-hai-duong-quang-ninh",
      label: "Xem tuyến Hải Dương - Quảng Ninh",
      copy: "Trang tuyến chính Quảng Ninh cung cấp thông tin chi tiết bảng giá 16 điểm đến và các khu vực lân cận.",
      kicker: "TUYẾN CHÍNH (PILLAR)",
      cta: "Xem tuyến Hải Dương - Quảng Ninh →",
    }),
    endpointNames: Object.freeze(["Hạ Long", "Bãi Cháy"]),
    endpointKicker: "BỐI CẢNH HẠ LONG / BÃI CHÁY",
    endpointTitle: "Tên khu vực giúp xác định đúng điểm đến",
    endpointIntro: "Hạ Long và Bãi Cháy được nhắc để người đọc mô tả nhu cầu và địa lý điểm đến. Điểm đến Bãi Cháy có giá endpoint đã xác thực riêng, việc nêu tên không xác nhận mọi địa chỉ luôn có xe.",
    endpointBoundary: "Giá chuyến cụ thể được xác nhận theo điểm đón/trả, ngày, giờ và điều kiện chuyến.",
    schemaOfferDescription: "Giá vé xe ghép tuyến Hải Dương - Hạ Long là 400.000đ/người (Bãi Cháy 350.000đ/người); bao xe riêng là 1.000.000đ/chuyến (Bãi Cháy 900.000đ/chuyến, chưa bao gồm vé cầu đường cao tốc).",
    faq: Object.freeze([
      Object.freeze({
        q: "Xe Hải Dương đi Hạ Long giá bao nhiêu?",
        a: "Giá xe ghép tuyến Hải Dương - Hạ Long là 400.000đ/người đón trả tận nơi. Bao xe riêng theo chuyến là 1.000.000đ/chuyến (chưa bao gồm vé cầu đường cao tốc). Mức giá được xác nhận theo điểm đón trả thực tế.",
      }),
      Object.freeze({
        q: "Bao xe Hải Dương Hạ Long giá bao nhiêu?",
        a: "Mức cước bao xe riêng tuyến Hải Dương - Hạ Long là 1.000.000đ/chuyến (chưa bao gồm vé cầu đường cao tốc). Dịch vụ không phân loại giá theo số chỗ 4 hay 7 chỗ; nhà xe sắp xếp xe phù hợp với số lượng khách và hành lý.",
      }),
      Object.freeze({
        q: "Đi Bãi Cháy giá bao nhiêu?",
        a: "Khu vực Bãi Cháy có giá endpoint đã xác thực: xe ghép 350.000đ/người và bao xe riêng 900.000đ/chuyến (chưa gồm vé cao tốc). Đây là mức cước độc lập cho điểm đến Bãi Cháy, không phải phụ phí cộng dồn.",
      }),
      Object.freeze({
        q: "Có xe Hạ Long về Hải Dương không?",
        a: "Có. Phong Cách phục vụ cả hai chiều: đón từ Hải Dương đi Hạ Long và đón từ Hạ Long về lại Hải Dương. Quý khách vui lòng cung cấp điểm đón tại khách sạn hoặc cảng tàu và thời gian dự kiến để nhà xe sắp xếp xe.",
      }),
      Object.freeze({
        q: "Bao xe đã gồm phí cao tốc chưa?",
        a: "Chưa bao gồm. Mức giá bao xe 1.000.000đ/chuyến (hoặc 900.000đ đi Bãi Cháy) chưa bao gồm vé trạm thu phí cao tốc (tollIncluded: false). Quý khách có thể tự thanh toán tại trạm hoặc gửi tài xế thanh toán theo biên lai thực tế.",
      }),
      Object.freeze({
        q: "Có thể cung cấp địa chỉ khách sạn hoặc cảng tàu khi đặt không?",
        a: "Được. Quý khách nên cung cấp địa chỉ khách sạn tại Bãi Cháy, Hòn Gai, hoặc khu vực cảng tàu khách quốc tế Hạ Long, Tuần Châu khi gửi thông tin để nhà xe kiểm tra phương án đón trả tận nơi.",
      }),
      Object.freeze({
        q: "Gửi hàng Hải Dương Hạ Long giá thế nào?",
        a: "Cước gửi hàng tuyến Hải Dương - Hạ Long khoảng 150.000 - 200.000đ trở lên, tùy điểm đến và hàng hóa cụ thể. Quý khách vui lòng liên hệ tổng đài và cung cấp thông tin bưu phẩm để được báo giá chính xác.",
      }),
      Object.freeze({
        q: "Cần cung cấp thông tin gì khi đặt xe Hạ Long?",
        a: "Quý khách cung cấp điểm đón tại Hải Dương, điểm trả tại Hạ Long hoặc Bãi Cháy, ngày đi, thời gian cần có mặt và số lượng người để nhà xe kiểm tra và tư vấn phương án di chuyển phù hợp.",
      }),
    ]),
  }),
  "hd-van-don": Object.freeze({
    assetId: "MP-020",
    updatedAt: "2026-09-10",
    title: "Xe ghép Hải Dương - Vân Đồn / Cảng Ao Tiên từ 500K | Phong Cách",
    description: "Xe ghép Hải Dương - Vân Đồn, Cảng Ao Tiên đón trả tận nơi. Xe ghép 500.000đ/người, bao xe 1.500.000đ/chuyến. Đặt trước không mất phí, gọi 0987 663 883.",
    h1: "Xe Ghép Hải Dương - Vân Đồn",
    eyebrow: "XE GHÉP VÀ BAO XE HAI CHIỀU",
    answer: "Xe Hải Dương đi Vân Đồn hiện có giá ghép 500.000đ/người và bao xe 1.500.000đ/chuyến (chưa bao gồm vé cầu đường cao tốc). Khách đi Cảng Ao Tiên để tiếp tục hành trình ra Cô Tô, Quan Lạn nên cung cấp giờ tàu dự kiến khi đặt xe để nhà xe kiểm tra chuyến phù hợp. Đặt trước không mất phí. Thanh toán sau chuyến.",
    heroBookingPrompt: "Gửi điểm đón, điểm trả, ngày đi và giờ tàu dự kiến để kiểm tra xe",
    summaryTitle: "HẢI DƯƠNG - VÂN ĐỒN / CẢNG AO TIÊN",
    summaryItems: Object.freeze([
      "Xe ghép và bao xe hai chiều",
      "Đón tận nơi tại Hải Dương",
      "Trả tận nơi Vân Đồn và Cảng Ao Tiên",
      "Bao xe chưa gồm vé cao tốc",
      "Đặt trước không mất phí",
      "Thanh toán sau chuyến",
    ]),
    serviceTags: sharedServiceTags,
    directions: Object.freeze([
      Object.freeze({
        title: "Hải Dương đến Vân Đồn / Cảng Ao Tiên",
        copy: "Quý khách cung cấp điểm đón tại Hải Dương, điểm trả cụ thể (nhà ga Cảng quốc tế Ao Tiên, khách sạn hoặc địa chỉ tại Vân Đồn), ngày đi, giờ tàu dự kiến nếu ra đảo để nhà xe kiểm tra chuyến phù hợp.",
      }),
      Object.freeze({
        title: "Vân Đồn về Hải Dương",
        copy: "Phong Cách nhận chiều về từ Vân Đồn và Cảng Ao Tiên về Hải Dương. Quý khách cung cấp điểm đón, giờ cập bến tàu cao tốc dự kiến và điểm trả tại Hải Dương để nhà xe sắp xếp xe đón phù hợp.",
      }),
    ]),
    decisionKicker: "PHÙ HỢP VỚI NHU CẦU NÀO?",
    decisionTitle: "Chọn xe theo mục đích và hành trình đi đảo",
    decisionRows: Object.freeze([
      Object.freeze({ need: "Đi cá nhân 1-2 người", guidance: "Nên chọn xe ghép 500.000đ/người để tối ưu chi phí, đón trả tận nơi hai chiều an toàn." }),
      Object.freeze({ need: "Khách đi tour ra đảo Cô Tô / Quan Lạn", guidance: "Nên cung cấp giờ tàu xuất bến dự kiến tại Cảng Ao Tiên khi đặt xe để nhà xe tư vấn khung giờ xuất phát đường bộ phù hợp." }),
      Object.freeze({ need: "Nhóm bạn hoặc gia đình", guidance: "Bao xe riêng 1.500.000đ/chuyến mang lại sự riêng tư trọn vẹn, chủ động giờ giấc và không gian hành lý thoải mái." }),
      Object.freeze({ need: "Đi du lịch nhiều hành lý", guidance: "Khách nên thông báo trước số lượng kiện vali lớn để nhà xe bố trí khoang cốp xe rộng rãi phù hợp." }),
      Object.freeze({ need: "Đi công tác hoặc thăm thân Vân Đồn", guidance: "Tùy số lượng người để chọn xe ghép 500k/người hoặc bao xe 1.500k/chuyến đón trả tận nhà tại các xã thuộc huyện Vân Đồn." }),
    ]),
    decisionNote: "Nhà Xe Phong Cách chỉ phục vụ vận chuyển đường bộ đến Vân Đồn / Cảng Ao Tiên; không vận hành tàu cao tốc ra các đảo Cô Tô, Quan Lạn.",
    bookingGuide: Object.freeze({
      kicker: "GỬI ĐỦ THÔNG TIN CHUYẾN",
      title: "Ba bước để kiểm tra xe và giá",
      intro: "Phong Cách kiểm tra xe và giá theo chuyến thực tế. Đặt trước không mất phí. Thanh toán sau chuyến.",
      steps: Object.freeze([
        Object.freeze({ title: "Gửi điểm đón và điểm trả", copy: "Cung cấp địa chỉ cụ thể tại Hải Dương và điểm trả tại Cảng Ao Tiên hoặc khu vực huyện Vân Đồn." }),
        Object.freeze({ title: "Gửi ngày đi và giờ tàu dự kiến", copy: "Quý khách cho biết ngày đi, giờ tàu xuất bến ra đảo (nếu có) và số người để nhà xe kiểm tra xe phù hợp." }),
        Object.freeze({ title: "Xác nhận và đón xe", copy: "Phong Cách trao đổi và thống nhất lịch hẹn trước chuyến đi. Quý khách lên xe và thanh toán sau chuyến." }),
      ]),
    }),
    support: Object.freeze({
      href: "/xe-ghep-hai-duong-quang-ninh",
      label: "Xem tuyến Hải Dương - Quảng Ninh",
      copy: "Trang tuyến chính Quảng Ninh cung cấp thông tin chi tiết bảng giá 16 điểm đến và các khu vực lân cận.",
      kicker: "TUYẾN CHÍNH (PILLAR)",
      cta: "Xem tuyến Hải Dương - Quảng Ninh →",
    }),
    endpointNames: Object.freeze(["Vân Đồn", "Cảng Ao Tiên"]),
    endpointKicker: "BỐI CẢNH VÂN ĐỒN / CẢNG AO TIÊN",
    endpointTitle: "Tên khu vực giúp xác định đúng điểm đến",
    endpointIntro: "Vân Đồn và Cảng Ao Tiên được nhắc để người đọc mô tả nhu cầu và bến cảng trung chuyển ra các tuyến đảo Cô Tô, Quan Lạn.",
    endpointBoundary: "Nhà Xe Phong Cách phục vụ chặng đường bộ đến cảng; cước bao xe chưa gồm vé cao tốc (tollIncluded: false). Quý khách tự túc vé tàu cao tốc ra các đảo.",
    schemaOfferDescription: "Giá vé xe ghép tuyến Hải Dương - Vân Đồn là 500.000đ/người; bao xe riêng là 1.500.000đ/chuyến (chưa bao gồm vé cầu đường cao tốc).",
    faq: Object.freeze([
      Object.freeze({
        q: "Xe Hải Dương đi Vân Đồn giá bao nhiêu?",
        a: "Giá xe ghép tuyến Hải Dương - Vân Đồn là 500.000đ/người đón trả tận nơi. Bao xe riêng theo chuyến là 1.500.000đ/chuyến (chưa bao gồm vé cầu đường cao tốc). Mức giá được xác nhận theo chuyến thực tế.",
      }),
      Object.freeze({
        q: "Xe Hải Dương đi Cảng Ao Tiên giá bao nhiêu?",
        a: "Giá xe ghép từ Hải Dương đến Cảng tàu quốc tế Ao Tiên là 500.000đ/người. Với nhu cầu bao xe riêng đến Cảng Ao Tiên, quý khách vui lòng liên hệ trực tiếp tổng đài để xác nhận theo điểm đón, điểm trả và chuyến thực tế.",
      }),
      Object.freeze({
        q: "Bao xe Hải Dương đi Vân Đồn giá bao nhiêu?",
        a: "Mức cước bao xe riêng tuyến Hải Dương - Vân Đồn là 1.500.000đ/chuyến (chưa bao gồm vé cầu đường cao tốc). Dịch vụ không phân loại giá theo số chỗ 4 hay 7 chỗ; nhà xe sắp xếp xe phù hợp với số lượng khách và hành lý.",
      }),
      Object.freeze({
        q: "Bao xe đã bao gồm vé cầu đường cao tốc chưa?",
        a: "Chưa bao gồm. Mức giá bao xe 1.500.000đ/chuyến chưa bao gồm vé trạm thu phí cao tốc (tollIncluded: false). Quý khách có thể tự thanh toán tại trạm hoặc gửi tài xế thanh toán theo biên lai thực tế.",
      }),
      Object.freeze({
        q: "Khách đi tàu cao tốc ra đảo Cô Tô, Quan Lạn cần lưu ý gì?",
        a: "Quý khách nên cung cấp giờ tàu cao tốc xuất bến dự kiến tại Cảng Ao Tiên khi đặt xe để nhà xe tư vấn khung giờ xuất phát đường bộ phù hợp từ Hải Dương, giúp quý khách chủ động hành trình ra bến cảng.",
      }),
      Object.freeze({
        q: "Nhà xe có phục vụ chặng tàu cao tốc ra đảo không?",
        a: "Không. Nhà Xe Phong Cách chỉ cung cấp dịch vụ vận tải đường bộ từ Hải Dương đến Cảng Ao Tiên / Vân Đồn. Quý khách chủ động mua vé tàu cao tốc và các dịch vụ du lịch trên đảo.",
      }),
      Object.freeze({
        q: "Có xe chiều từ Vân Đồn hoặc Cảng Ao Tiên về Hải Dương không?",
        a: "Có. Phong Cách phục vụ cả hai chiều. Quý khách từ đảo Cô Tô, Quan Lạn trở về đất liền có thể hẹn trước giờ tàu cập Cảng Ao Tiên để nhà xe bố trí xe đường bộ đón về Hải Dương an toàn.",
      }),
      Object.freeze({
        q: "Gửi hàng từ Hải Dương đi Vân Đồn tính phí thế nào?",
        a: "Cước gửi hàng tuyến Hải Dương - Vân Đồn được liên hệ xác nhận theo điểm đón, điểm trả và kiện hàng thực tế. Quý khách vui lòng liên hệ tổng đài 0987 663 883 để được tư vấn cụ thể.",
      }),
    ]),
  }),
});

export function moneyPageUpgradeForRoute(routeId) {
  return moneyPageUpgrades[routeId] ?? null;
}
