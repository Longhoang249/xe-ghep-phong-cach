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
    schemaOfferDescription: "Giá xe ghép cấp tuyến Hải Dương - Quảng Ninh từ 250.000đ/người. Đây không phải giá cố định hoặc giá riêng cho một endpoint; giá thực tế được xác nhận theo ngày, giờ và địa chỉ đón trả.",
    faq: Object.freeze([
      Object.freeze({ q: "Giá xe ghép Hải Dương - Quảng Ninh bao nhiêu?", a: "Giá xe ghép từ 250.000đ/người ở cấp tuyến Hải Dương - Quảng Ninh. Đây là giá bắt đầu, không phải giá cố định hoặc giá riêng cho một endpoint." }),
      Object.freeze({ q: "Giá có cố định cho mọi điểm tại Quảng Ninh không?", a: "Không. Giá thực tế phụ thuộc địa chỉ đón/trả, thời gian di chuyển, ngày đi và điều kiện chuyến. Cần gửi đúng điểm đến để xác nhận." }),
      Object.freeze({ q: "Có nhận chiều Quảng Ninh về Hải Dương không?", a: "Có nhận chiều về ở cấp tuyến. Điểm đón cụ thể tại Quảng Ninh và xe cho thời điểm thực tế vẫn cần được kiểm tra." }),
      Object.freeze({ q: "Có đón tận nhà và trả tận nơi không?", a: "Có ở cấp tuyến theo xác nhận của Owner. Khách phải cung cấp địa chỉ cụ thể để Phong Cách kiểm tra endpoint, xe và giá chuyến." }),
      Object.freeze({ q: "Bao xe khác xe ghép thế nào?", a: "Xe ghép phù hợp khi khách chấp nhận đi cùng người khác. Bao xe dành cho nhu cầu đi riêng và chủ động hơn; giá bắt đầu khác nhau cho xe 4 và 7 chỗ." }),
      Object.freeze({ q: "Nhóm 3-4 người nên đi xe ghép hay bao xe?", a: "Nên hỏi cả hai phương án theo đúng điểm đến. Nhóm 3-4 người có thể cân nhắc bao xe nếu cần đi riêng, có nhiều hành lý hoặc muốn chủ động hơn." }),
      Object.freeze({ q: "Phong Cách có nhận gửi hàng không?", a: "Có. Giá gửi hàng cấp tuyến từ 180.000đ; loại hàng, kích thước, đóng gói và điểm giao nhận cần được kiểm tra trước chuyến." }),
      Object.freeze({ q: "Các endpoint được liệt kê có phải đều đã xác nhận phục vụ không?", a: "Không. Danh sách endpoint chỉ giúp người đọc xác định khu vực và nhu cầu tìm kiếm. Availability và giá cho từng địa chỉ phải được Phong Cách kiểm tra riêng." }),
    ]),
  }),
});

export function moneyPageUpgradeForRoute(routeId) {
  return moneyPageUpgrades[routeId] ?? null;
}
