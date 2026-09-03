export type GuideChoice = {
  title: string;
  bestFor: string;
  description: string;
};

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideComparisonRow = {
  option: string;
  cost: string;
  time: string;
  convenience: string;
  pickupDropoff: string;
  bestFor: string;
};

export type GuideSource = {
  title: string;
  publisher: string;
  url: string;
  checkedAt: string;
  supports: string;
};

export type GuidePost = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  category: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  directAnswer: string;
  choices: GuideChoice[];
  comparison?: {
    title: string;
    note: string;
    rows: GuideComparisonRow[];
  };
  sections: GuideSection[];
  checklist: string[];
  faq: Array<{ q: string; a: string }>;
  sources?: GuideSource[];
  updatedAt?: string;
  routeSlug: string;
  routeLabel: string;
};

export const guidePosts: GuidePost[] = [
  {
    slug: "di-hai-duong-ha-noi-bang-phuong-tien-gi",
    title: "Đi Hải Dương - Hà Nội bằng phương tiện gì?",
    description: "So sánh xe khách, limousine, xe ghép và bao xe khi đi Hải Dương - Hà Nội; chọn theo nhu cầu đón trả, số người và hành lý.",
    category: "Tư vấn phương tiện",
    primaryKeyword: "đi Hải Dương Hà Nội bằng phương tiện gì",
    secondaryKeywords: ["xe Hải Dương đi Hà Nội", "phương tiện Hải Dương Hà Nội", "xe ghép Hải Dương Hà Nội"],
    directAnswer: "Bạn có thể chọn xe khách, limousine, xe ghép hoặc bao xe. Nếu ưu tiên được trao đổi điểm đón trả và đi bằng xe 4-7 chỗ, hãy gọi Phong Cách để kiểm tra xe ghép hoặc bao xe cho tuyến Hải Dương - Hà Nội.",
    choices: [
      { title: "Xe khách", bestFor: "Người quen đi từ điểm cố định", description: "Nên kiểm tra bến, điểm đón, điểm trả và thông tin của đơn vị vận tải trước khi đi." },
      { title: "Limousine", bestFor: "Khách muốn đặt ghế theo nhà xe", description: "Phù hợp khi điểm đón trả và cách vận hành của chuyến đáp ứng nhu cầu cá nhân." },
      { title: "Xe ghép", bestFor: "Khách đi một mình hoặc nhóm nhỏ", description: "Có thể trao đổi nhu cầu đón trả với nhà xe; tình trạng ghép phụ thuộc chuyến thực tế." },
      { title: "Bao xe", bestFor: "Gia đình, nhóm riêng hoặc nhiều hành lý", description: "Không gian riêng hơn; loại xe và chi phí được xác nhận theo yêu cầu cụ thể." },
    ],
    sections: [
      { heading: "Nên chọn phương tiện theo tiêu chí nào?", paragraphs: ["Không có một lựa chọn phù hợp cho mọi chuyến. Người đi làm, người lên Hà Nội khám bệnh, gia đình có trẻ nhỏ và khách mang nhiều hành lý sẽ có ưu tiên khác nhau.", "Trước khi chọn, hãy xác định điều quan trọng nhất là điểm đón trả, mức riêng tư, số người đi hay khả năng mang theo hành lý. Từ đó bạn mới so sánh đúng giữa xe ghép, bao xe và các hình thức vận tải khác."], bullets: ["Bạn đi một mình hay đi theo nhóm?", "Có cần trao đổi điểm đón và điểm trả cụ thể không?", "Có hành lý cồng kềnh, trẻ nhỏ hoặc người lớn tuổi không?", "Bạn muốn ghép chuyến hay muốn đi riêng?"] },
      { heading: "Khi nào nên gọi xe ghép Hải Dương - Hà Nội?", paragraphs: ["Xe ghép thường được người đi một mình hoặc nhóm nhỏ tìm kiếm khi muốn sử dụng xe 4-7 chỗ và trao đổi trực tiếp với nhà xe. Tuy nhiên, khả năng bố trí xe còn phụ thuộc thời điểm, nơi đón, nơi trả và tình trạng chuyến.", "Phong Cách có tiếp nhận nhu cầu xe ghép Hải Dương - Hà Nội cả hai chiều. Muốn đi, bạn nên gọi và cung cấp thông tin chuyến để bên mình kiểm tra xe phù hợp."], bullets: ["Đi công tác hoặc đi làm theo nhu cầu riêng", "Đi khám bệnh, thăm người thân", "Đi cùng hành lý vừa phải", "Cần xe Hà Nội về Hải Dương chiều ngược lại"] },
      { heading: "Khi nào bao xe 4-7 chỗ phù hợp hơn?", paragraphs: ["Bao xe phù hợp khi nhóm muốn không gian riêng, cần chủ động trao đổi điểm đón trả hoặc có nhu cầu hành lý đặc biệt. Đây cũng là lựa chọn đáng cân nhắc cho gia đình, người cao tuổi hoặc chuyến cần hạn chế ghép thêm khách.", "Để được tư vấn đúng loại xe, hãy nói rõ số khách, hành lý và nhu cầu đi riêng ngay từ đầu. Phong Cách sẽ kiểm tra xe 4 chỗ hoặc 7 chỗ theo tình trạng thực tế." ] },
    ],
    checklist: ["Nơi đón mong muốn", "Nơi trả mong muốn", "Thời điểm cần đi", "Số khách và hành lý", "Nhu cầu xe ghép hay bao xe"],
    faq: [
      { q: "Phong Cách có xe Hải Dương đi Hà Nội không?", a: "Có. Phong Cách tiếp nhận nhu cầu xe ghép và bao xe 4-7 chỗ tuyến Hải Dương - Hà Nội cả hai chiều. Hãy gọi để kiểm tra xe." },
      { q: "Website có lịch chạy cố định không?", a: "Không. Thời điểm và xe được kiểm tra theo nhu cầu chuyến thực tế, vì vậy khách nên gọi trực tiếp." },
      { q: "Đi nhóm gia đình nên chọn hình thức nào?", a: "Bạn có thể cân nhắc bao xe nếu muốn đi riêng. Loại xe phù hợp còn phụ thuộc số khách và hành lý." },
    ],
    routeSlug: "xe-ghep-hai-duong-ha-noi",
    routeLabel: "Xe ghép Hải Dương - Hà Nội",
  },
  {
    slug: "nhung-chuyen-xe-tu-hai-duong-di-quang-ninh",
    title: "Đi Hải Dương - Quảng Ninh bằng gì? Cách chọn theo điểm đến",
    seoTitle: "Đi Hải Dương - Quảng Ninh bằng gì?",
    description: "So sánh xe khách, xe ghép, bao xe và tự lái từ Hải Dương đi Quảng Ninh; cách chọn theo Đông Triều, Hạ Long, Vân Đồn, Móng Cái và nhu cầu đón trả.",
    category: "So sánh phương tiện",
    primaryKeyword: "đi Hải Dương Quảng Ninh bằng gì",
    secondaryKeywords: ["xe Hải Dương đi Quảng Ninh", "nhà xe Hải Dương Quảng Ninh", "xe ghép Hải Dương Quảng Ninh"],
    directAnswer: "Nếu dùng được bến hoặc điểm hẹn của nhà xe, hãy kiểm tra xe khách theo đúng điểm đến. Nếu ưu tiên đón tận nơi, trả tận nơi, xe ghép phù hợp với khách lẻ; nhóm muốn đi riêng nên cân nhắc bao xe. Quảng Ninh có nhiều điểm đến cách xa nhau, vì vậy phải so sánh theo đúng endpoint thay vì xem cả tỉnh là một điểm.",
    choices: [
      { title: "Xe khách / limousine", bestFor: "Ưu tiên chuyến công bố", description: "Tìm theo đúng điểm đến, sau đó kiểm tra lại lịch, giá và điểm đón trả với đơn vị khai thác." },
      { title: "Xe ghép", bestFor: "Khách lẻ, nhóm nhỏ", description: "Đáng cân nhắc khi muốn trao đổi điểm đón trả và chấp nhận nhà xe kiểm tra khả năng ghép theo chuyến." },
      { title: "Bao xe / taxi", bestFor: "Gia đình, nhóm đi riêng", description: "Chủ động hơn về không gian và nhu cầu chuyến; cần hỏi giá theo địa chỉ cụ thể." },
      { title: "Tự lái", bestFor: "Người muốn tự chủ hành trình", description: "Phù hợp khi có phương tiện, tự sắp xếp được lộ trình, nhiên liệu, phí đường và chỗ đỗ." },
    ],
    comparison: {
      title: "So sánh nhanh các cách đi Hải Dương - Quảng Ninh",
      note: "Lịch, giá và tổng thời gian của đơn vị khác có thể thay đổi; hãy kiểm tra theo đúng ngày đi và endpoint.",
      rows: [
        { option: "Xe khách / limousine", cost: "Theo nhà xe khi đặt", time: "Theo lịch và điểm dừng", convenience: "Tốt nếu khớp chuyến", pickupDropoff: "Bến hoặc điểm hẹn", bestFor: "Người linh hoạt điểm đón" },
        { option: "Xe ghép Phong Cách", cost: "Từ 250.000đ/người", time: "Phụ thuộc chuyến thực tế", convenience: "Đón/trả tận nơi", pickupDropoff: "Trao đổi địa chỉ cụ thể", bestFor: "Khách lẻ, nhóm nhỏ" },
        { option: "Bao xe Phong Cách", cost: "4 chỗ từ 900.000đ; 7 chỗ từ 1.100.000đ", time: "Phụ thuộc điểm đón/trả", convenience: "Riêng xe, dễ trao đổi nhu cầu", pickupDropoff: "Đón/trả tận nơi", bestFor: "Gia đình, nhóm riêng" },
        { option: "Tự lái", cost: "Tự tính nhiên liệu, phí đường, đỗ xe", time: "Tự chủ, phụ thuộc giao thông", convenience: "Chủ động nhất", pickupDropoff: "Tự chọn", bestFor: "Người có xe và quen đường" },
      ],
    },
    sections: [
      { heading: "Quảng Ninh không phải một điểm đến duy nhất", paragraphs: ["Cổng thông tin Quảng Ninh mô tả chuỗi đô thị từ phía Tây sang phía Đông gồm Đông Triều, Uông Bí, Hạ Long, Cẩm Phả, Vân Đồn và Móng Cái; Quảng Yên cũng là một đô thị quan trọng trong hệ thống của tỉnh. Vì thế, truy vấn “đi Quảng Ninh” chưa đủ để so sánh chuyến.", "Hãy xác định đúng Đông Triều, Uông Bí, Quảng Yên, Hạ Long/Bãi Cháy, Cẩm Phả, Vân Đồn/Ao Tiên hay Móng Cái. Danh sách này chỉ mô tả địa lý và nhu cầu tìm kiếm; không xác nhận Phong Cách phục vụ từng điểm hoặc áp dụng cùng một mức giá. Riêng Ao Tiên là đầu mối cảng khách tại Vân Đồn, nên người nối chuyến ra đảo cần tính thêm thời gian làm thủ tục tàu."], bullets: ["Điểm đến cụ thể, không chỉ tên tỉnh", "Địa chỉ đón và địa chỉ trả", "Có nối chuyến tàu, máy bay hay lịch hẹn không", "Số khách, hành lý và nhu cầu chiều về"] },
      { heading: "Xe khách hoặc limousine: tìm theo endpoint, không tìm chung cả tỉnh", paragraphs: ["Các nền tảng đặt vé hiện tách kết quả theo điểm như Đông Triều hoặc Bãi Cháy. Số chuyến có thể khác nhau theo endpoint và ngày tìm kiếm, nên không nên lấy một lịch cũ làm cam kết cho chuyến sắp tới.", "Phương án này hợp lý nếu bạn dùng được bến hoặc điểm hẹn. Trước khi đặt, hãy kiểm tra đúng đơn vị vận hành, ngày đi, điểm đón, điểm trả, hành lý và chính sách đổi/hủy." ] },
      { heading: "Khi nào nên chọn xe ghép?", paragraphs: ["Xe ghép phù hợp với khách lẻ hoặc nhóm nhỏ muốn trao đổi đón tận nơi, trả tận nơi mà không cần bao riêng cả xe. Đổi lại, khả năng ghép và thời điểm phù hợp phụ thuộc nhu cầu chuyến thực tế.", "Phong Cách xác nhận có nhận hai chiều trên corridor Hải Dương - Quảng Ninh, có xe ghép, bao xe, gửi hàng, thanh toán sau chuyến và đặt trước không mất phí. Thông tin này không đồng nghĩa có lịch cố định hoặc sẵn xe 24/7." ] },
      { heading: "Chi phí Xe Ghép Phong Cách: chỉ hiểu là giá từ", paragraphs: ["Mức đã được Owner xác nhận cho corridor Hải Dương - Quảng Ninh là: xe ghép từ 250.000đ/người; bao xe 4 chỗ từ 900.000đ/chuyến; bao xe 7 chỗ từ 1.100.000đ/chuyến; gửi hàng từ 180.000đ.", "Đây không phải giá cố định và không phải bảng giá riêng cho từng endpoint. Giá chuyến cụ thể phụ thuộc ngày đi, địa chỉ đón, địa chỉ trả, giờ di chuyển và điều kiện thực tế. Không được suy mức từ 250.000đ thành giá cho chuyến từ Hải Dương đến Móng Cái hay bất kỳ endpoint cụ thể nào." ] },
      { heading: "Chọn nhanh theo tình huống", paragraphs: ["Nếu đi một mình và gần điểm đón công bố, hãy so xe khách với xe ghép theo tổng chi phí và số lần đổi xe. Nếu đi gia đình, nhiều hành lý hoặc có lịch nối chuyến, bao xe có thể giảm phần bất tiện dù chi phí cao hơn.", "Nếu tự lái, hãy tính cả nhiên liệu, phí đường, đỗ xe và khả năng lái về. Dù chọn cách nào, điểm đến cụ thể vẫn là dữ liệu quan trọng nhất." ] },
    ],
    checklist: ["Điểm đón cụ thể", "Endpoint và địa chỉ trả", "Ngày, thời điểm mong muốn", "Số khách", "Hành lý hoặc hàng hóa", "Nhu cầu chiều về"],
    faq: [
      { q: "Nên chọn xe khách hay xe ghép Hải Dương - Quảng Ninh?", a: "Xe khách phù hợp khi lịch và điểm hẹn khớp nhu cầu. Xe ghép đáng cân nhắc khi bạn muốn trao đổi đón trả tận nơi và chấp nhận nhà xe kiểm tra chuyến." },
      { q: "Giá xe ghép Hải Dương - Quảng Ninh là bao nhiêu?", a: "Giá Phong Cách hiện từ 250.000đ/người. Đây là giá bắt đầu của corridor, không phải giá cố định hoặc giá riêng cho từng endpoint." },
      { q: "Đi Hạ Long, Vân Đồn hay Móng Cái có cùng giá không?", a: "Không nên hiểu như vậy. Hiện chỉ có giá từ của tuyến cha Hải Dương - Quảng Ninh; giá chuyến cụ thể phụ thuộc địa chỉ và điều kiện chuyến." },
      { q: "Phong Cách có nhận chiều Quảng Ninh về Hải Dương không?", a: "Có nhận hai chiều trên corridor. Bạn cần cung cấp điểm đón cụ thể tại Quảng Ninh để kiểm tra chuyến." },
      { q: "Có thể gửi hàng Hải Dương - Quảng Ninh không?", a: "Có tiếp nhận nhu cầu gửi hàng, giá từ 180.000đ. Loại hàng, kích thước, đóng gói, điểm giao nhận và giá cuối cùng phải được kiểm tra theo chuyến." },
    ],
    sources: [
      { title: "Từ nền tảng đô thị đã định hình", publisher: "Cổng thông tin điện tử tỉnh Quảng Ninh", url: "https://doanhnghiep.quangninh.gov.vn/Trang/ChiTietTinTuc.aspx?nid=8850", checkedAt: "2026-08-22", supports: "Chuỗi đô thị Đông Triều - Uông Bí - Hạ Long - Cẩm Phả - Vân Đồn - Móng Cái; đây chỉ là bằng chứng địa lý." },
      { title: "Chương trình phát triển đô thị tỉnh Quảng Ninh", publisher: "UBND tỉnh Quảng Ninh", url: "https://www.quangninh.gov.vn/So/soxaydung/Lists/TinTuc/Attachments/4362/1.%20942-Q%C4%90%20ph%C3%AA%20duy%E1%BB%87t%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20PT%C4%90T%20T%E1%BB%89nh.pdf", checkedAt: "2026-08-22", supports: "Hệ thống đô thị gồm Quảng Yên và các endpoint chính khác." },
      { title: "UBND đặc khu Vân Đồn gặp mặt các doanh nghiệp vận tải khách đường thủy", publisher: "Cổng thông tin điện tử tỉnh Quảng Ninh", url: "https://quangninh.gov.vn/donvi/vandon/Trang/ChiTietTinTuc.aspx?nid=2906", checkedAt: "2026-08-22", supports: "Ao Tiên là đầu mối vận tải khách đường thủy tại Vân Đồn." },
      { title: "Vé xe Hải Dương đi Đông Triều", publisher: "Vexere", url: "https://vexere.com/vi-VN/ve-xe-khach-tu-hai-duong-di-dong-trieu-quang-ninh-126t26111.html", checkedAt: "2026-08-22", supports: "Ví dụ về inventory vận tải được tách theo endpoint và cần kiểm tra theo ngày." },
      { title: "Vé xe Hải Dương đi Bãi Cháy", publisher: "Vexere", url: "https://vexere.com/vi-VN/ve-xe-khach-tu-hai-duong-di-bai-chay-126t21362261.html", checkedAt: "2026-08-22", supports: "Ví dụ cho thấy kết quả endpoint có thể khác nhau và thay đổi theo thời điểm tra cứu." },
    ],
    updatedAt: "2026-08-22",
    routeSlug: "xe-ghep-hai-duong-quang-ninh",
    routeLabel: "Xe ghép Hải Dương - Quảng Ninh",
  },
  {
    slug: "di-hai-duong-hai-phong-bang-phuong-tien-gi",
    title: "Đi Hải Dương - Hải Phòng bằng gì? So sánh 4 lựa chọn",
    seoTitle: "Đi Hải Dương - Hải Phòng bằng gì?",
    description: "So sánh xe khách, xe ghép, bao xe và tự lái Hải Dương - Hải Phòng theo chi phí, thời gian, điểm đón trả, số khách và hành lý.",
    category: "So sánh phương tiện",
    primaryKeyword: "đi Hải Dương Hải Phòng bằng gì",
    secondaryKeywords: ["xe Hải Dương đi Hải Phòng", "phương tiện Hải Dương Hải Phòng", "xe ghép Hải Dương Hải Phòng"],
    directAnswer: "Xe khách phù hợp khi bạn dùng được bến hoặc điểm hẹn; xe ghép hợp với khách lẻ muốn trao đổi đón trả tận nơi. Nhóm gia đình hoặc người muốn đi riêng nên so sánh bao xe với tự lái. Đừng chọn chỉ theo giá vé: hãy tính cả chặng ra điểm đón, số lần đổi xe và hành lý.",
    choices: [
      { title: "Xe khách / limousine", bestFor: "Ưu tiên chuyến công bố", description: "Kiểm tra lịch, giá, điểm đón trả và đơn vị vận hành tại thời điểm đặt." },
      { title: "Xe ghép", bestFor: "Khách lẻ, nhóm nhỏ", description: "Phù hợp khi ưu tiên trao đổi đón trả tận nơi và có thể ghép theo chuyến thực tế." },
      { title: "Bao xe / taxi", bestFor: "Gia đình, nhóm đi riêng", description: "Chủ động hơn về không gian và điểm đón trả; giá cần được báo theo chuyến." },
      { title: "Tự lái", bestFor: "Người có xe và muốn tự chủ", description: "Cần tính nhiên liệu, phí đường, đỗ xe và việc lái chiều về." },
    ],
    comparison: {
      title: "Bảng so sánh nhanh",
      note: "Lịch và giá của đơn vị khác có thể thay đổi. Bảng không suy diễn giá đối thủ; các số của Phong Cách là giá từ đã được Owner xác nhận.",
      rows: [
        { option: "Xe khách / limousine", cost: "Theo nhà xe khi đặt", time: "Theo lịch và điểm dừng", convenience: "Tốt nếu khớp chuyến", pickupDropoff: "Bến hoặc điểm hẹn", bestFor: "Người đi ít hành lý" },
        { option: "Xe ghép Phong Cách", cost: "Từ 250.000đ/người", time: "Phụ thuộc chuyến thực tế", convenience: "Đón/trả tận nơi", pickupDropoff: "Trao đổi địa chỉ cụ thể", bestFor: "Khách lẻ, nhóm nhỏ" },
        { option: "Bao xe Phong Cách", cost: "4 chỗ từ 500.000đ; 7 chỗ từ 650.000đ", time: "Phụ thuộc điểm đón/trả", convenience: "Riêng xe, dễ trao đổi nhu cầu", pickupDropoff: "Đón/trả tận nơi", bestFor: "Gia đình, nhóm riêng" },
        { option: "Tự lái", cost: "Tự tính nhiên liệu, phí đường, đỗ xe", time: "Tự chủ, phụ thuộc giao thông", convenience: "Chủ động nhất", pickupDropoff: "Tự chọn", bestFor: "Người có xe và quen đường" },
      ],
    },
    sections: [
      { heading: "Xe khách / limousine: hợp khi lịch và điểm hẹn thuận tiện", paragraphs: ["Nền tảng đặt vé có inventory cho tuyến Hải Dương - Hải Phòng, cho thấy xe khách là một lựa chọn thực tế. Tuy nhiên, lịch, giá, điểm đón và đơn vị khai thác là dữ liệu động; bạn cần kiểm tra lại cho ngày đi cụ thể.", "Hãy cộng thêm thời gian và chi phí từ nhà ra điểm đón, rồi từ điểm trả đến đích cuối. Một giá vé thấp hơn chưa chắc là tổng chi phí thấp hơn nếu phải đổi thêm xe." ] },
      { heading: "Tự lái: chủ động nhưng phải tính đủ chi phí", paragraphs: ["Cổng thông tin Hải Phòng ghi nhận Quốc lộ 5 là một trong các tuyến quốc lộ kết nối thành phố với khu vực bên ngoài. Người tự lái có thể chủ động thời điểm và điểm dừng, nhưng lộ trình thực tế vẫn phụ thuộc địa chỉ hai đầu và tình hình giao thông.", "Khi so sánh, hãy tính nhiên liệu, phí đường nếu có, đỗ xe, rủi ro mệt khi lái chiều về và khả năng mang hành lý. Không cần ép một con số thời gian chung cho mọi địa chỉ." ] },
      { heading: "Khi nào nên chọn xe ghép?", paragraphs: ["Xe ghép đáng cân nhắc khi bạn đi một mình hoặc nhóm nhỏ, không thuận tiện ra điểm đón cố định và muốn trao đổi đón tận nơi, trả tận nơi. Hình thức này giảm việc đổi phương tiện nhưng cần nhà xe kiểm tra khả năng ghép.", "Phong Cách xác nhận có nhận hai chiều Hải Dương - Hải Phòng, xe ghép, bao xe, gửi hàng, thanh toán sau chuyến và đặt trước không mất phí. Không có evidence cho lịch chạy cố định, số chuyến mỗi ngày hay 24/7, nên bạn vẫn cần gọi kiểm tra." ] },
      { heading: "Chi phí Xe Ghép Phong Cách: các mức đều là giá từ", paragraphs: ["Mức Owner đã xác nhận cho tuyến Hải Dương - Hải Phòng là: xe ghép từ 250.000đ/người; bao xe 4 chỗ từ 500.000đ/chuyến; bao xe 7 chỗ từ 650.000đ/chuyến; gửi hàng từ 150.000đ.", "Giá thực tế có thể thay đổi theo ngày di chuyển, địa chỉ đón, địa chỉ trả, giờ di chuyển và điều kiện chuyến. Hiện không có công thức phụ phí công khai; hãy cung cấp đủ thông tin để nhận báo giá chuyến cụ thể." ] },
      { heading: "Chọn nhanh theo nhu cầu thực tế", paragraphs: ["Khách lẻ, ít hành lý và gần điểm đón nên kiểm tra xe khách trước, rồi so với xe ghép bằng tổng chi phí door-to-door. Khách lẻ cần đón trả linh hoạt có thể ưu tiên xe ghép.", "Gia đình, người cao tuổi, nhóm nhiều hành lý hoặc người cần đi riêng nên so bao xe với tự lái. Quyết định tốt nhất là phương án phù hợp với địa chỉ và người đi, không chỉ là lựa chọn có con số nhỏ nhất." ] },
    ],
    checklist: ["Địa chỉ đón cụ thể", "Địa chỉ trả cụ thể", "Ngày và thời điểm", "Số người", "Hành lý hoặc hàng hóa", "Xe ghép hay bao xe"],
    faq: [
      { q: "Đi Hải Dương - Hải Phòng nên chọn xe khách hay xe ghép?", a: "Chọn xe khách khi lịch và điểm hẹn thuận tiện. Chọn xe ghép khi bạn ưu tiên trao đổi đón trả tận nơi và chấp nhận việc kiểm tra ghép chuyến." },
      { q: "Giá xe ghép Hải Dương - Hải Phòng là bao nhiêu?", a: "Giá Phong Cách hiện từ 250.000đ/người. Đây là giá bắt đầu, không phải mức cố định cho mọi ngày, địa chỉ và giờ đi." },
      { q: "Đi nhóm thì bao xe 4 chỗ hay 7 chỗ?", a: "Hãy chọn theo số người và hành lý. Mức khởi điểm là 4 chỗ từ 500.000đ/chuyến và 7 chỗ từ 650.000đ/chuyến; loại xe, tình trạng xe và giá cuối cùng cần xác nhận." },
      { q: "Phong Cách có nhận chiều Hải Phòng về Hải Dương không?", a: "Có nhận hai chiều. Bạn cần cung cấp địa chỉ đón, địa chỉ trả và thời điểm để kiểm tra chuyến." },
      { q: "Có thể gửi hàng theo chuyến không?", a: "Có tiếp nhận nhu cầu gửi hàng, giá từ 150.000đ. Hãy cung cấp loại hàng, kích thước, đóng gói và nơi giao nhận để kiểm tra." },
    ],
    sources: [
      { title: "Cơ sở hạ tầng kỹ thuật thành phố Hải Phòng", publisher: "Cổng thông tin điện tử thành phố Hải Phòng", url: "https://haiphong.gov.vn/co-so-ha-tang/co-so-ha-tang-ky-thuat-thanh-pho-hai-phong-743051", checkedAt: "2026-08-22", supports: "Quốc lộ 5 là một tuyến kết nối Hải Phòng với các khu vực bên ngoài." },
      { title: "Hải Phòng quyết tâm xây dựng tuyến Quốc lộ 5 và Quốc lộ 10 an toàn về giao thông", publisher: "Cổng thông tin điện tử phường Hải Dương, Hải Phòng", url: "https://haiduong.haiphong.gov.vn/tin-tuc-su-kien/hai-phong-quyet-tam-xay-dung-tuyen-quoc-lo-5-va-quoc-lo-10-an-toan-ve-giao-thong-889529", checkedAt: "2026-08-22", supports: "Bối cảnh hiện hành của Quốc lộ 5 và yêu cầu an toàn khi tự di chuyển." },
      { title: "Vé xe khách Hải Dương đi Hải Phòng", publisher: "redBus", url: "https://www.redbus.vn/ve-xe-khach/tuyen-duong/hai-duong-di-hai-phong", checkedAt: "2026-08-22", supports: "Inventory xe khách cho tuyến và yêu cầu kiểm tra lại lịch/giá theo thời điểm đặt." },
    ],
    updatedAt: "2026-08-22",
    routeSlug: "xe-ghep-hai-duong-hai-phong",
    routeLabel: "Xe ghép Hải Dương - Hải Phòng",
  },
  {
    slug: "di-hai-phong-quang-ninh-bang-phuong-tien-gi",
    title: "Đi Hải Phòng - Quảng Ninh bằng gì? So sánh 4 phương tiện",
    seoTitle: "Đi Hải Phòng - Quảng Ninh bằng gì?",
    description: "So sánh xe khách, limousine, xe ghép và bao xe Hải Phòng - Quảng Ninh theo chi phí, thời gian chạy cao tốc Bạch Đằng, điểm đón trả và số khách.",
    category: "So sánh phương tiện",
    primaryKeyword: "đi Hải Phòng Quảng Ninh bằng gì",
    secondaryKeywords: ["xe Hải Phòng đi Quảng Ninh", "xe ghép Hải Phòng Quảng Ninh", "phương tiện Hải Phòng đi Hạ Long"],
    directAnswer: "Đi từ Hải Phòng sang Quảng Ninh hiện rất nhanh qua cao tốc Hải Phòng - Hạ Long (cầu Bạch Đằng). Nếu gần bến hoặc điểm đón cố định, xe khách hoặc limousine là lựa chọn quen thuộc. Nếu bạn đi cá nhân hoặc nhóm muốn đón tận nhà, trả tận nơi tại Hạ Long, Uông Bí hay Cẩm Phả, xe ghép hoặc bao xe riêng 4-7 chỗ giúp tiết kiệm thời gian chuyển tuyến.",
    choices: [
      { title: "Xe khách tuyến", bestFor: "Ưu tiên chi phí bến bãi cố định", description: "Bắt xe tại bến xe Vĩnh Niệm hoặc các điểm đón trên đường; cần tự di chuyển ra bến." },
      { title: "Limousine chạy tuyến", bestFor: "Khách đặt ghế cố định", description: "Chạy theo lộ trình quy định, đón trả tại các trục đường chính hoặc văn phòng nhà xe." },
      { title: "Xe ghép Phong Cách", bestFor: "Khách lẻ muốn đón trả tận nơi", description: "Đón tận nhà tại Hải Phòng, trả tận nơi tại Quảng Ninh; đặt trước 0đ cọc, thanh toán sau chuyến." },
      { title: "Bao xe riêng 4-7 chỗ", bestFor: "Gia đình, nhóm du lịch, công tác", description: "Chủ động 100% thời gian xuất phát, không gian riêng tư, xe chạy thẳng qua cao tốc." },
    ],
    comparison: {
      title: "Bảng so sánh 4 phương tiện Hải Phòng - Quảng Ninh",
      note: "Giá và thời gian của các đơn vị khác có thể thay đổi theo thời điểm. Mức giá của Phong Cách là giá sàn tham khảo đề xuất, chi phí cụ thể xác nhận theo điểm đón trả thực tế.",
      rows: [
        { option: "Xe khách tuyến", cost: "Theo vé tại bến (khoảng 80.000đ - 120.000đ)", time: "1h30 - 2h (qua QL10/QL18)", convenience: "Tự ra bến, đổi xe trung chuyển", pickupDropoff: "Bến xe Vĩnh Niệm / bến liên tỉnh", bestFor: "Khách đi một mình, ít hành lý" },
        { option: "Limousine", cost: "Khoảng 150.000đ - 220.000đ/ghế", time: "1h - 1h30 (tùy điểm đón)", convenience: "Khá tiện nếu gần trục đón", pickupDropoff: "Văn phòng / điểm hẹn quy định", bestFor: "Khách đi làm việc, du lịch" },
        { option: "Xe ghép Phong Cách", cost: "Liên hệ báo giá theo chuyến", time: "40 - 60 phút (chạy cao tốc)", convenience: "Đón tận nhà, trả tận nơi", pickupDropoff: "Trao đổi địa chỉ cụ thể hai đầu", bestFor: "Khách cần đón trả tận nơi, gia đình nhỏ" },
        { option: "Bao xe riêng Phong Cách", cost: "Liên hệ báo giá theo chuyến", time: "40 - 50 phút chạy thẳng", convenience: "Riêng xe, chủ động giờ giấc", pickupDropoff: "Đón trả theo yêu cầu mọi điểm", bestFor: "Gia đình, nhóm 3-7 người, nhiều đồ" },
      ],
    },
    sections: [
      { heading: "Cao tốc Hải Phòng - Hạ Long rút ngắn đáng kể thời gian", paragraphs: ["Trước đây, lộ trình từ Hải Phòng sang Quảng Ninh theo Quốc lộ 10 và Quốc lộ 18 thường mất từ 1.5 đến hơn 2 tiếng do mật độ phương tiện đông đúc. Kể từ khi tuyến cao tốc Hạ Long - Hải Phòng cùng cầu Bạch Đằng đưa vào khai thác, thời gian di chuyển giữa hai trung tâm kinh tế chỉ còn khoảng 30 đến 45 phút.", "Lợi thế này giúp các chuyến xe ghép và bao xe riêng chạy thẳng cao tốc tiết kiệm tối đa thời gian cho hành khách, đặc biệt là người đi công tác, khám bệnh hoặc du khách cần di chuyển giữa sân bay Cát Bi và Hạ Long."], bullets: ["Khoảng cách rút ngắn chỉ còn khoảng 25km từ nút giao cao tốc", "Thời gian qua cầu Bạch Đằng sang Hạ Long chỉ khoảng 30-45 phút", "Hạn chế tối đa ùn tắc so với quốc lộ cũ"] },
      { heading: "Quảng Ninh có nhiều điểm đến khác nhau", paragraphs: ["Khi tìm phương tiện Hải Phòng đi Quảng Ninh, bạn cần xác định rõ khu vực cần đến: TP. Uông Bí, TX. Quảng Yên, TP. Hạ Long (Bãi Cháy, Hòn Gai, Tuần Châu), TP. Cẩm Phả hay huyện đảo Vân Đồn.", "Mỗi khu vực có khoảng cách và lộ trình đón trả khác nhau. Các phương tiện xe khách thường chỉ trả khách tại bến xe Bãi Cháy hoặc ngã ba trục đường lớn, trong khi xe ghép và bao xe có thể đưa đón tận cửa khách sạn, resort hoặc nhà riêng."], bullets: ["Uông Bí / Quảng Yên: khu vực công nghiệp và tâm linh Yên Tử", "Hạ Long (Bãi Cháy, Tuần Châu, Hòn Gai): trung tâm du lịch và hành chính", "Cẩm Phả: trung tâm khai thác khoáng sản và cảng biển", "Vân Đồn / Ao Tiên: đầu mối đón tàu cao tốc ra các đảo Cô Tô, Quan Lạn"] },
      { heading: "Khi nào nên chọn xe ghép đón tận nơi?", paragraphs: ["Xe ghép là giải pháp tối ưu khi bạn đi 1-2 người, có hành lý vừa phải và không muốn tốn thêm chi phí bắt taxi ra bến xe hoặc điểm đón cố định. Bạn được đón trả tận cửa bằng xe 4-7 chỗ đời mới, êm ái và sạch sẽ.", "Phong Cách phục vụ hai chiều Hải Phòng - Quảng Ninh với chính sách đặt trước 0đ cọc, thanh toán sau chuyến. Khách hàng chỉ cần báo trước điểm đón, điểm trả và khung giờ mong muốn để nhà xe kiểm tra chuyến phù hợp."] },
      { heading: "Chi phí xe ghép và bao xe: báo giá minh bạch theo chuyến", paragraphs: ["Chi phí thực tế trên tuyến Hải Phòng - Quảng Ninh được Phong Cách xác nhận trực tiếp theo chuyến. Giá chuyến phụ thuộc vào vị trí đón/trả cụ thể tại Hải Phòng và Quảng Ninh (Hạ Long, Uông Bí, Cẩm Phả, Vân Đồn...), khung giờ đón và lượng hành lý.", "Nhà xe cam kết báo giá trọn gói minh bạch trước khi bạn quyết định đặt xe, không phát sinh chi phí dọc đường, đặt trước 0đ cọc và thanh toán sau chuyến đi an toàn."] },
      { heading: "Gợi ý chọn phương tiện theo từng nhu cầu", paragraphs: ["Nếu đi một mình, ít đồ và điểm đi/đến gần các bến xe lớn, xe khách hoặc limousine là phương án kinh tế. Nếu đi cùng người già, trẻ nhỏ hoặc có nhiều vali du lịch, bao xe riêng 4-7 chỗ sẽ mang lại sự thoải mái và an tâm tuyệt đối.", "Trường hợp cần đón tại sân bay Cát Bi đi thẳng sang các khách sạn tại Hạ Long, xe ghép hoặc bao xe riêng là lựa chọn nhanh chóng và tiện lợi nhất."] },
    ],
    checklist: ["Điểm đón cụ thể tại Hải Phòng", "Điểm đến chi tiết tại Quảng Ninh", "Ngày và giờ muốn xuất phát", "Số người lớn và trẻ em", "Lượng hành lý mang theo", "Nhu cầu đi ghép hay bao trọn xe"],
    faq: [
      { q: "Đi Hải Phòng sang Quảng Ninh mất bao lâu?", a: "Nếu đi theo tuyến cao tốc Hải Phòng - Hạ Long qua cầu Bạch Đằng, thời gian di chuyển chỉ khoảng 40 - 60 phút tùy điểm đón trả cụ thể." },
      { q: "Giá xe ghép Hải Phòng đi Quảng Ninh khoảng bao nhiêu?", a: "Hiện tại toàn bộ giá chuyến được báo trực tiếp khi liên hệ hotline 0987 663 883. Chi phí cụ thể sẽ được xác nhận theo điểm đón tại Hải Phòng và điểm trả tại Quảng Ninh." },
      { q: "Phong Cách có xe chiều ngược Quảng Ninh về Hải Phòng không?", a: "Có. Nhà xe phục vụ hai chiều mỗi ngày, nhận đón tận nơi tại các khách sạn, bến tàu ở Quảng Ninh trả về tận nhà tại Hải Phòng." },
      { q: "Từ sân bay Cát Bi sang Hạ Long đi xe nào tiện nhất?", a: "Xe ghép hoặc bao xe riêng đón tại sảnh sân bay Cát Bi đi thẳng cao tốc sang Hạ Long là phương án nhanh và tiện nhất, không phải đổi chuyến trung gian." },
      { q: "Đặt xe ghép có cần cọc tiền trước không?", a: "Không cần đặt cọc. Quý khách chỉ thanh toán tiền mặt hoặc chuyển khoản cho tài xế sau khi hoàn thành chuyến đi an toàn." },
    ],
    sources: [
      { title: "Thông tin cao tốc Hạ Long - Hải Phòng và cầu Bạch Đằng", publisher: "Cổng thông tin điện tử tỉnh Quảng Ninh", url: "https://quangninh.gov.vn/Trang/ChiTietTinTuc.aspx?nid=75324", checkedAt: "2026-09-03", supports: "Tuyến cao tốc rút ngắn khoảng cách Hải Phòng - Quảng Ninh và thời gian di chuyển qua cầu Bạch Đằng." },
      { title: "Hạ tầng giao thông kết nối Hải Phòng với các tỉnh lân cận", publisher: "Cổng thông tin điện tử thành phố Hải Phòng", url: "https://haiphong.gov.vn/co-so-ha-tang/co-so-ha-tang-ky-thuat-thanh-pho-hai-phong-743051", checkedAt: "2026-09-03", supports: "Bối cảnh kết nối giao thông liên tỉnh vùng duyên hải Bắc Bộ." },
      { title: "Thông tin các tuyến xe Hải Phòng đi Quảng Ninh", publisher: "Vexere", url: "https://vexere.com/vi-VN/ve-xe-khach-tu-hai-phong-di-quang-ninh-127t1491.html", checkedAt: "2026-09-03", supports: "Tham khảo các phương tiện vận tải công cộng trên hành lang Hải Phòng - Quảng Ninh." },
    ],
    updatedAt: "2026-09-03",
    routeSlug: "xe-ghep-hai-phong-quang-ninh",
    routeLabel: "Xe ghép Hải Phòng - Quảng Ninh",
  },
  {
    slug: "xe-ghep-hay-xe-khach-hai-duong-ha-noi",
    title: "Xe ghép hay xe khách khi đi Hải Dương - Hà Nội?",
    description: "So sánh xe ghép và xe khách Hải Dương - Hà Nội theo điểm đón trả, cách đặt chỗ, số người và nhu cầu đi riêng.",
    category: "So sánh dịch vụ",
    primaryKeyword: "xe ghép hay xe khách Hải Dương Hà Nội",
    secondaryKeywords: ["xe khách Hải Dương Hà Nội", "xe ghép Hải Dương Hà Nội", "nên đi xe ghép hay xe khách"],
    directAnswer: "Xe khách phù hợp khi bạn chủ động đến điểm đón của đơn vị vận tải. Xe ghép phù hợp khi muốn trao đổi nhu cầu đón trả bằng xe 4-7 chỗ và chấp nhận nhà xe kiểm tra khả năng ghép theo chuyến.",
    choices: [
      { title: "Chọn xe khách", bestFor: "Ưu tiên tuyến và điểm đón công bố", description: "Luôn xác nhận lịch và điểm dừng trực tiếp với đơn vị vận tải trước khi đi." },
      { title: "Chọn xe ghép", bestFor: "Ưu tiên trao đổi nhu cầu đón trả", description: "Phong Cách kiểm tra xe dựa trên thông tin thực tế của khách." },
      { title: "Chọn bao xe", bestFor: "Muốn đi riêng", description: "Phù hợp nhóm gia đình hoặc chuyến cần không gian riêng." },
    ],
    sections: [
      { heading: "Khác biệt lớn nhất nằm ở cách tổ chức chuyến", paragraphs: ["Xe khách thường vận hành theo điểm và cách đặt chỗ mà đơn vị vận tải công bố. Xe ghép là hình thức nhà xe kiểm tra khả năng kết hợp những nhu cầu phù hợp trên cùng tuyến.", "Vì cách tổ chức khác nhau, khách không nên chỉ so sánh bằng một con số. Hãy cân nhắc tổng thể điểm đón, điểm trả, số lần đổi phương tiện và nhu cầu hành lý." ] },
      { heading: "Ai thường tìm xe ghép Hải Dương - Hà Nội?", paragraphs: ["Nhóm khách phổ biến là người đi một mình, nhóm nhỏ, người đi công tác, đi khám bệnh hoặc về thăm gia đình. Điều họ quan tâm thường là khả năng trao đổi chuyến trực tiếp với nhà xe.", "Phong Cách có xe tuyến Hải Dương - Hà Nội cả hai chiều. Tình trạng ghép được kiểm tra sau khi biết nơi đón, nơi trả và thời điểm mong muốn."], bullets: ["Khách lẻ và nhóm nhỏ", "Người có hành lý vừa phải", "Khách cần hỏi chuyến chiều về", "Người muốn đi bằng xe 4-7 chỗ"] },
      { heading: "Ba câu hỏi nên đặt trước khi chọn", paragraphs: ["Hãy hỏi đơn vị vận tải về nơi đón, nơi trả và cách xác nhận chuyến. Với Phong Cách, khách cũng nên nói rõ mình muốn xe ghép hay bao xe để bên mình kiểm tra đúng nhu cầu.", "Nếu thông tin trên một bài tổng hợp không còn mới, hãy ưu tiên xác nhận trực tiếp thay vì mặc định lịch hoặc giá vẫn còn áp dụng." ] },
    ],
    checklist: ["Có thuận tiện đến điểm đón không?", "Có cần trao đổi nơi trả cụ thể không?", "Đi một mình hay theo nhóm?", "Có cần đi riêng không?", "Có hành lý đặc biệt không?"],
    faq: [
      { q: "Xe ghép có lịch cố định như xe khách không?", a: "Không nhất thiết. Với Phong Cách, khách gọi để kiểm tra khả năng bố trí xe theo chuyến thực tế." },
      { q: "Đi gia đình nên chọn xe nào?", a: "Nếu muốn đi riêng, bạn có thể cân nhắc bao xe 4-7 chỗ và trao đổi số khách, hành lý khi gọi." },
      { q: "Phong Cách có nhận chiều Hà Nội về Hải Dương không?", a: "Có. Tuyến được tiếp nhận cả hai chiều; hãy gọi để kiểm tra xe." },
    ],
    routeSlug: "xe-ghep-hai-duong-ha-noi",
    routeLabel: "Xe ghép Hải Dương - Hà Nội",
  },
  {
    slug: "cach-dat-xe-ghep-hai-duong-quang-ninh",
    title: "Cách đặt xe ghép Hải Dương - Quảng Ninh",
    description: "Hướng dẫn chuẩn bị nơi đón, điểm trả, số khách và hành lý khi gọi đặt xe ghép Hải Dương - Quảng Ninh với Phong Cách.",
    category: "Hướng dẫn đặt xe",
    primaryKeyword: "cách đặt xe ghép Hải Dương Quảng Ninh",
    secondaryKeywords: ["đặt xe Hải Dương Quảng Ninh", "gọi xe ghép Hải Dương Quảng Ninh", "xe Quảng Ninh về Hải Dương"],
    directAnswer: "Để đặt xe, hãy gọi Phong Cách và cung cấp nơi đón, điểm trả cụ thể, thời điểm muốn đi, số khách cùng hành lý. Bên mình sẽ kiểm tra xe rồi xác nhận lại thông tin trước khi bạn quyết định.",
    choices: [
      { title: "Gọi trực tiếp", bestFor: "Cần trao đổi nhanh", description: "Nói rõ toàn bộ thông tin chuyến trong lần liên hệ đầu tiên." },
      { title: "Gửi yêu cầu trên web", bestFor: "Muốn để lại thông tin", description: "Điền điểm đón trả và số điện thoại để Phong Cách liên hệ kiểm tra." },
      { title: "Nhắn Zalo", bestFor: "Cần gửi chi tiết bằng tin nhắn", description: "Có thể gửi nội dung chuyến và chờ tư vấn viên phản hồi." },
    ],
    sections: [
      { heading: "Bước 1: Chuẩn bị đúng thông tin chuyến", paragraphs: ["Nhiều yêu cầu mất thời gian kiểm tra vì chỉ ghi “đi Quảng Ninh” mà chưa có điểm trả cụ thể. Bạn nên chuẩn bị địa chỉ hoặc ít nhất tên khu vực cần đến.", "Ngoài nơi đón trả, số khách và hành lý cũng giúp Phong Cách xác định nên kiểm tra xe nào."], bullets: ["Nơi đón tại Hải Dương", "Nơi trả cụ thể tại Quảng Ninh", "Thời điểm mong muốn", "Số khách", "Hành lý hoặc hàng hóa", "Một chiều hay cần chiều về"] },
      { heading: "Bước 2: Nói rõ xe ghép hay bao xe", paragraphs: ["Nếu chấp nhận kết hợp chuyến, hãy hỏi xe ghép. Nếu muốn đi riêng, hãy hỏi bao xe 4-7 chỗ. Hai nhu cầu này được kiểm tra theo cách khác nhau.", "Trường hợp chưa biết nên chọn gì, hãy mô tả ưu tiên của bạn. Phong Cách có thể giải thích phương án phù hợp để khách tự quyết định." ] },
      { heading: "Bước 3: Chỉ chốt sau khi đã xác nhận", paragraphs: ["Trước khi quyết định, khách cần nghe lại các thông tin quan trọng của chuyến. Những thông tin chưa được Phong Cách xác nhận không nên được xem là cam kết.", "Website không đăng lịch hoặc thời gian cố định cho tuyến này vì điều kiện chuyến thay đổi theo nơi đón, nơi trả và tình trạng xe." ] },
    ],
    checklist: ["Đủ nơi đón và điểm trả", "Đã nói rõ số khách", "Đã báo hành lý", "Đã chọn ghép hay đi riêng", "Đã nghe xác nhận từ Phong Cách"],
    faq: [
      { q: "Có thể đặt xe ghép ngay trên website không?", a: "Bạn có thể gửi thông tin chuyến qua biểu mẫu; Phong Cách sẽ liên hệ lại để kiểm tra và xác nhận." },
      { q: "Chỉ ghi đi Quảng Ninh có đủ không?", a: "Chưa đủ. Bạn nên cho biết điểm trả cụ thể để bên mình kiểm tra đúng chuyến." },
      { q: "Có cần đặt cả chiều về cùng lúc không?", a: "Nếu đã có nhu cầu chiều về, bạn nên báo ngay để Phong Cách kiểm tra cả hai chiều." },
    ],
    routeSlug: "xe-ghep-hai-duong-quang-ninh",
    routeLabel: "Xe ghép Hải Dương - Quảng Ninh",
  },
  {
    slug: "gui-hang-hai-duong-hai-phong-theo-chuyen",
    title: "Gửi hàng Hải Dương - Hải Phòng theo chuyến cần chuẩn bị gì?",
    description: "Danh sách thông tin cần chuẩn bị khi gửi hàng Hải Dương - Hải Phòng theo chuyến: loại hàng, kích thước, nơi nhận và người liên hệ.",
    category: "Gửi hàng theo chuyến",
    primaryKeyword: "gửi hàng Hải Dương Hải Phòng theo chuyến",
    secondaryKeywords: ["xe ghép gửi hàng Hải Dương Hải Phòng", "gửi đồ Hải Dương Hải Phòng", "xe gửi hàng theo chuyến"],
    directAnswer: "Bạn nên chuẩn bị tên hàng, kích thước, khối lượng ước tính, cách đóng gói, nơi nhận - giao và số điện thoại người liên hệ. Phong Cách sẽ kiểm tra chuyến phù hợp sau khi biết đầy đủ thông tin.",
    choices: [
      { title: "Hàng gọn nhẹ", bestFor: "Hồ sơ, đồ dùng nhỏ", description: "Vẫn cần đóng gói và ghi rõ người gửi, người nhận." },
      { title: "Hàng có kích thước", bestFor: "Thùng, kiện hoặc túi lớn", description: "Cần báo đủ chiều dài, rộng, cao và khối lượng ước tính." },
      { title: "Hàng cần trao đổi riêng", bestFor: "Hàng dễ vỡ hoặc có yêu cầu đặc biệt", description: "Hãy mô tả rõ để Phong Cách xác nhận có nhận được hay không." },
    ],
    sections: [
      { heading: "Thông tin nào giúp kiểm tra chuyến nhanh hơn?", paragraphs: ["Chỉ nói “một thùng hàng” thường chưa đủ để bố trí chỗ trên xe. Kích thước, khối lượng và đặc tính của hàng là những thông tin cần thiết.", "Nơi giao nhận cũng phải cụ thể. Phong Cách chỉ xác nhận sau khi biết loại hàng và kiểm tra chuyến thực tế."], bullets: ["Tên và loại hàng", "Kích thước ba chiều", "Khối lượng ước tính", "Tình trạng đóng gói", "Nơi nhận và nơi giao", "Số liên hệ hai đầu"] },
      { heading: "Đóng gói thế nào trước khi gửi?", paragraphs: ["Hàng cần được đóng gói phù hợp với đặc tính của đồ vật bên trong. Người gửi nên tự bảo vệ các góc, bề mặt hoặc phần dễ vỡ và thông báo rõ nếu hàng cần đặt theo chiều nhất định.", "Không nên che giấu tính chất của hàng. Phong Cách cần biết đúng thông tin để quyết định có thể tiếp nhận hay không." ] },
      { heading: "Vì sao không có một mức giá chung cho mọi kiện?", paragraphs: ["Mỗi kiện hàng khác nhau về kích thước, khối lượng, nơi giao nhận và khả năng sắp xếp trên chuyến xe. Vì vậy, chi phí chỉ được trao đổi sau khi có thông tin cụ thể.", "Bảng giá hoặc cam kết của đơn vị khác không áp dụng cho Phong Cách. Hãy gọi đúng hotline để được kiểm tra." ] },
    ],
    checklist: ["Đã đóng gói", "Đã đo kích thước", "Đã ước tính khối lượng", "Có số người gửi và nhận", "Có địa chỉ giao nhận", "Đã mô tả yêu cầu đặc biệt"],
    faq: [
      { q: "Phong Cách có nhận gửi hàng Hải Dương - Hải Phòng không?", a: "Có tiếp nhận nhu cầu gửi hàng theo chuyến. Việc nhận hàng được xác nhận sau khi biết loại hàng và tình trạng chuyến." },
      { q: "Có nhận mọi loại hàng không?", a: "Không thể mặc định. Bạn cần mô tả chính xác loại hàng để Phong Cách kiểm tra trước." },
      { q: "Giá gửi hàng được tính thế nào?", a: "Mức cụ thể được trao đổi dựa trên kiện hàng, nơi giao nhận và chuyến thực tế." },
    ],
    routeSlug: "xe-ghep-hai-duong-hai-phong",
    routeLabel: "Xe Hải Dương - Hải Phòng",
  },
  {
    slug: "xe-hai-duong-di-noi-bai-cho-gia-dinh",
    title: "Chọn xe Hải Dương đi Nội Bài cho gia đình",
    description: "Gia đình đi Hải Dương - Nội Bài nên chuẩn bị số khách, hành lý và thông tin chuyến thế nào khi chọn xe ghép hoặc bao xe.",
    category: "Xe đi sân bay",
    primaryKeyword: "xe Hải Dương đi Nội Bài cho gia đình",
    secondaryKeywords: ["xe Hải Dương Nội Bài", "bao xe Hải Dương đi Nội Bài", "xe 7 chỗ Hải Dương Nội Bài"],
    directAnswer: "Gia đình nên chọn xe theo số người, hành lý và nhu cầu đi riêng. Nếu muốn không gian riêng hoặc có nhiều đồ, hãy hỏi bao xe 4-7 chỗ; Phong Cách sẽ kiểm tra xe Hải Dương - Nội Bài theo chuyến thực tế.",
    choices: [
      { title: "Xe ghép", bestFor: "Gia đình nhỏ, hành lý phù hợp", description: "Khả năng ghép được kiểm tra theo số người, hành lý và thời điểm." },
      { title: "Bao xe 4 chỗ", bestFor: "Nhóm nhỏ muốn đi riêng", description: "Cần trao đổi số khách và lượng hành lý trước khi xác nhận." },
      { title: "Bao xe 7 chỗ", bestFor: "Nhóm đông hơn hoặc nhiều hành lý", description: "Không mặc định xe 7 chỗ luôn đủ; hãy mô tả hành lý cụ thể." },
    ],
    sections: [
      { heading: "Đừng chỉ đếm số người, hãy tính cả hành lý", paragraphs: ["Chuyến đi sân bay thường có vali, túi xách hoặc đồ dùng cho trẻ nhỏ. Số ghế phù hợp chưa chắc đồng nghĩa khoang hành lý phù hợp.", "Khi gọi, gia đình nên nói rõ số vali và đồ cồng kềnh. Phong Cách dựa trên đó để kiểm tra xe 4 chỗ hoặc 7 chỗ."], bullets: ["Số người lớn và trẻ em", "Số vali, túi xách", "Xe đẩy hoặc đồ cồng kềnh", "Nhu cầu đi ghép hay đi riêng"] },
      { heading: "Khi nào nên hỏi bao xe?", paragraphs: ["Bao xe đáng cân nhắc khi gia đình muốn đi riêng, có trẻ nhỏ, người lớn tuổi hoặc nhiều hành lý. Đây là lựa chọn về sự riêng tư và khả năng sắp xếp chuyến, không chỉ là số ghế.", "Phong Cách sẽ xác nhận loại xe sau khi biết đầy đủ nhu cầu; bài viết không cam kết trước một xe cụ thể." ] },
      { heading: "Thông tin chuyến bay cần cung cấp ra sao?", paragraphs: ["Bạn nên cho biết ngày đi, thời điểm cần có mặt và nhà ga nếu đã xác định. Phong Cách sẽ trao đổi thời điểm đón phù hợp với thông tin chuyến thực tế.", "Do thời gian cần thiết phụ thuộc nơi đón và nhiều yếu tố, website không công bố một thời lượng cố định cho mọi gia đình." ] },
    ],
    checklist: ["Số người lớn và trẻ em", "Số lượng hành lý", "Đồ cồng kềnh", "Ngày và thông tin chuyến bay", "Nhà ga nếu đã biết", "Xe ghép hay bao xe"],
    faq: [
      { q: "Phong Cách có xe Hải Dương đi Nội Bài không?", a: "Có. Phong Cách tiếp nhận nhu cầu xe ghép và bao xe tuyến Hải Dương - Nội Bài." },
      { q: "Gia đình nên chọn xe 4 hay 7 chỗ?", a: "Cần dựa trên số người và hành lý. Hãy cung cấp thông tin để Phong Cách kiểm tra xe phù hợp." },
      { q: "Có thể đặt chiều Nội Bài về Hải Dương không?", a: "Có thể gửi nhu cầu chiều về; Phong Cách sẽ kiểm tra theo thời điểm và thông tin chuyến thực tế." },
    ],
    routeSlug: "xe-hai-duong-noi-bai",
    routeLabel: "Xe Hải Dương - Nội Bài",
  },
  {
    slug: "xe-ha-noi-ve-hai-duong-chon-phuong-tien-nao",
    title: "Xe Hà Nội về Hải Dương: chọn phương tiện nào?",
    description: "Gợi ý chọn xe khách, xe ghép hoặc bao xe khi cần xe Hà Nội về Hải Dương; gọi Phong Cách để kiểm tra xe theo nhu cầu thực tế.",
    category: "Tư vấn phương tiện",
    primaryKeyword: "xe Hà Nội về Hải Dương",
    secondaryKeywords: ["xe Hà Nội Hải Dương", "xe ghép Hà Nội Hải Dương", "xe từ Hà Nội về Hải Dương"],
    directAnswer: "Bạn có thể chọn xe khách, xe ghép hoặc bao xe khi đi từ Hà Nội về Hải Dương. Nếu muốn trao đổi điểm đón trả và đi bằng xe 4-7 chỗ, hãy gọi Phong Cách để bên mình kiểm tra xe ghép hoặc bao xe phù hợp.",
    choices: [
      { title: "Xe khách", bestFor: "Khách phù hợp với điểm đón của nhà xe", description: "Nên xác nhận trực tiếp điểm đón, điểm trả và cách đặt chỗ trước khi đi." },
      { title: "Xe ghép", bestFor: "Khách lẻ hoặc nhóm nhỏ", description: "Phong Cách kiểm tra khả năng ghép theo thông tin chuyến thực tế." },
      { title: "Bao xe", bestFor: "Gia đình hoặc nhóm muốn đi riêng", description: "Có thể trao đổi xe 4-7 chỗ theo số người và hành lý." },
    ],
    sections: [
      { heading: "Chọn xe theo nhu cầu thay vì chỉ nhìn tên loại xe", paragraphs: ["Mỗi người có một ưu tiên khác nhau khi tìm xe Hà Nội về Hải Dương. Có người cần đi một mình, có người đi cùng gia đình, mang nhiều hành lý hoặc muốn trao đổi điểm đón trả cụ thể.", "Vì vậy, bạn nên so sánh theo số người, hành lý, nhu cầu đi ghép hay đi riêng. Phong Cách có xe cho chiều Hà Nội về Hải Dương và sẽ kiểm tra theo thông tin khách cung cấp."], bullets: ["Đi một mình hay theo nhóm", "Nơi muốn đón tại Hà Nội", "Nơi muốn trả tại Hải Dương", "Hành lý hoặc đồ mang theo", "Nhu cầu ghép chuyến hay bao xe"] },
      { heading: "Khi nào nên gọi xe ghép Hà Nội - Hải Dương?", paragraphs: ["Xe ghép phù hợp khi khách muốn sử dụng xe 4-7 chỗ và có thể kết hợp với chuyến phù hợp khác. Khả năng bố trí phụ thuộc nơi đón, nơi trả, thời điểm và tình trạng xe.", "Phong Cách không công bố lịch cố định cho mọi chuyến. Cách nhanh nhất là gọi, nói rõ nhu cầu và chờ bên mình kiểm tra xe." ] },
      { heading: "Khi nào bao xe phù hợp hơn?", paragraphs: ["Bao xe đáng cân nhắc khi gia đình hoặc nhóm muốn đi riêng, có nhiều hành lý, đi cùng trẻ nhỏ hoặc người lớn tuổi.", "Hãy cho Phong Cách biết số người và hành lý để kiểm tra xe 4 chỗ hoặc 7 chỗ phù hợp. Thông tin chuyến và chi phí được xác nhận trước khi khách quyết định." ] },
    ],
    checklist: ["Điểm đón tại Hà Nội", "Điểm trả tại Hải Dương", "Ngày và thời điểm muốn đi", "Số khách", "Hành lý", "Xe ghép hay bao xe"],
    faq: [
      { q: "Phong Cách có xe Hà Nội về Hải Dương không?", a: "Có. Phong Cách tiếp nhận nhu cầu xe ghép và bao xe Hà Nội - Hải Dương cả hai chiều. Hãy gọi để kiểm tra xe." },
      { q: "Có lịch chạy cố định trên website không?", a: "Không. Xe được kiểm tra theo thời điểm, nơi đón trả và tình trạng chuyến thực tế." },
      { q: "Đi nhóm gia đình có thể bao xe không?", a: "Có thể. Bạn nên cung cấp số người và lượng hành lý để Phong Cách kiểm tra loại xe phù hợp." },
    ],
    routeSlug: "xe-ghep-hai-duong-ha-noi",
    routeLabel: "Xe ghép Hải Dương - Hà Nội",
  },
  {
    slug: "xe-hai-phong-ve-hai-duong-can-chuan-bi-gi",
    title: "Xe Hải Phòng về Hải Dương: cần chuẩn bị gì khi đặt xe?",
    description: "Các thông tin nên chuẩn bị khi tìm xe Hải Phòng về Hải Dương và cách gọi Phong Cách kiểm tra xe ghép, bao xe theo chuyến.",
    category: "Kinh nghiệm đặt xe",
    primaryKeyword: "xe Hải Phòng về Hải Dương",
    secondaryKeywords: ["xe Hải Phòng Hải Dương", "xe ghép Hải Phòng Hải Dương", "đặt xe Hải Phòng về Hải Dương"],
    directAnswer: "Khi đặt xe Hải Phòng về Hải Dương, bạn nên chuẩn bị nơi đón, nơi trả, thời điểm, số khách và hành lý. Phong Cách có xe cho tuyến này; hãy gọi để bên mình kiểm tra xe ghép hoặc bao xe theo nhu cầu thực tế.",
    choices: [
      { title: "Xe ghép", bestFor: "Khách lẻ, nhóm nhỏ", description: "Khả năng ghép được kiểm tra theo nơi đón trả và tình trạng chuyến." },
      { title: "Bao xe 4 chỗ", bestFor: "Nhóm nhỏ muốn đi riêng", description: "Phù hợp khi số khách và hành lý đáp ứng loại xe được xác nhận." },
      { title: "Bao xe 7 chỗ", bestFor: "Nhóm đông hơn hoặc nhiều hành lý", description: "Cần mô tả hành lý để nhà xe kiểm tra không gian phù hợp." },
    ],
    sections: [
      { heading: "Năm thông tin giúp nhà xe kiểm tra nhanh", paragraphs: ["Câu hỏi chung như “có xe Hải Phòng về Hải Dương không” chưa đủ để bố trí chuyến. Điểm đón trả, thời điểm, số khách và hành lý đều có thể ảnh hưởng đến phương án xe.", "Bạn nên gửi đầy đủ thông tin ngay từ lần liên hệ đầu tiên. Phong Cách sẽ kiểm tra khả năng ghép hoặc phương án đi riêng rồi trao đổi lại."], bullets: ["Nơi đón tại Hải Phòng", "Nơi trả tại Hải Dương", "Ngày và thời điểm muốn đi", "Số người", "Hành lý hoặc hàng hóa đi kèm"] },
      { heading: "Đặt chiều Hải Phòng về Hải Dương có khác chiều đi không?", paragraphs: ["Phong Cách tiếp nhận nhu cầu cả hai chiều. Tuy nhiên, tình trạng xe của từng chiều có thể khác nhau nên khách cần nói rõ chiều đi ngay khi gọi.", "Bài viết không mặc định một lịch chạy, lộ trình hoặc thời lượng cho mọi khách. Thông tin cụ thể chỉ được xác nhận theo chuyến thực tế." ] },
      { heading: "Khi nào nên chọn bao xe?", paragraphs: ["Nếu đi cùng gia đình, nhóm riêng hoặc mang nhiều hành lý, bạn có thể hỏi phương án bao xe. Đây là lựa chọn phù hợp khi ưu tiên sự riêng tư và muốn hạn chế ghép thêm khách.", "Loại xe được kiểm tra sau khi biết số người và hành lý. Khách nên xác nhận lại toàn bộ thông tin trước chuyến." ] },
    ],
    checklist: ["Nơi đón", "Nơi trả", "Thời điểm", "Số khách", "Hành lý", "Số điện thoại liên hệ"],
    faq: [
      { q: "Phong Cách có xe Hải Phòng về Hải Dương không?", a: "Có. Phong Cách phục vụ tuyến Hải Dương - Hải Phòng cả hai chiều và kiểm tra xe theo nhu cầu thực tế." },
      { q: "Có thể đặt xe ghép cho một người không?", a: "Bạn có thể gửi nhu cầu. Khả năng ghép còn phụ thuộc chuyến phù hợp tại thời điểm kiểm tra." },
      { q: "Muốn đi riêng thì đặt thế nào?", a: "Hãy nói rõ nhu cầu bao xe, số khách và hành lý để Phong Cách kiểm tra xe 4-7 chỗ." },
    ],
    routeSlug: "xe-ghep-hai-duong-hai-phong",
    routeLabel: "Xe ghép Hải Dương - Hải Phòng",
  },
  {
    slug: "xe-hai-duong-di-cat-bi-chon-xe-ghep-hay-bao-xe",
    title: "Xe Hải Dương đi Cát Bi: chọn xe ghép hay bao xe?",
    description: "So sánh xe ghép và bao xe Hải Dương đi sân bay Cát Bi theo số khách, hành lý và nhu cầu đi riêng; gọi Phong Cách để kiểm tra xe.",
    category: "Xe đi sân bay",
    primaryKeyword: "xe Hải Dương đi Cát Bi",
    secondaryKeywords: ["xe ghép Hải Dương Cát Bi", "xe Hải Dương sân bay Cát Bi", "xe Cát Bi về Hải Dương"],
    directAnswer: "Khách lẻ hoặc nhóm nhỏ có thể hỏi xe ghép Hải Dương - Cát Bi; gia đình, nhóm riêng hoặc khách nhiều hành lý có thể cân nhắc bao xe. Hãy gọi Phong Cách và cung cấp thông tin chuyến bay để bên mình kiểm tra xe phù hợp.",
    choices: [
      { title: "Xe ghép", bestFor: "Khách lẻ, hành lý phù hợp", description: "Phong Cách kiểm tra khả năng ghép theo thời điểm và thông tin chuyến." },
      { title: "Bao xe 4 chỗ", bestFor: "Nhóm nhỏ muốn đi riêng", description: "Cần xác nhận số khách và lượng hành lý trước khi đặt." },
      { title: "Bao xe 7 chỗ", bestFor: "Gia đình hoặc nhóm có nhiều đồ", description: "Không gian hành lý được kiểm tra theo mô tả thực tế của khách." },
    ],
    sections: [
      { heading: "Chọn xe theo số người và hành lý", paragraphs: ["Chuyến đi sân bay thường có vali, túi xách, xe đẩy hoặc đồ dùng cho trẻ nhỏ. Vì thế, chỉ đếm số ghế chưa đủ để chọn xe.", "Khi gọi Phong Cách, bạn nên nói rõ số người và từng loại hành lý. Bên mình sẽ kiểm tra khả năng ghép chuyến hoặc loại xe phù hợp nếu khách muốn bao xe."], bullets: ["Số người lớn và trẻ em", "Số vali và túi xách", "Đồ cồng kềnh nếu có", "Nhu cầu đi ghép hay đi riêng"] },
      { heading: "Thông tin chuyến bay cần cung cấp", paragraphs: ["Khách nên cho biết ngày đi, thông tin chuyến bay và nhà ga nếu đã xác định. Những dữ liệu này giúp nhà xe trao đổi phương án đón phù hợp.", "Thời điểm đón được trao đổi theo điểm xuất phát và điều kiện thực tế của từng chuyến. Khách cần xác nhận trực tiếp trước khi đi." ] },
      { heading: "Có xe Cát Bi về Hải Dương không?", paragraphs: ["Phong Cách tiếp nhận nhu cầu cả chiều Hải Dương đi Cát Bi và chiều sân bay Cát Bi về Hải Dương. Với chiều đón sân bay, hãy gửi thông tin chuyến bay và số điện thoại liên hệ.", "Tình trạng xe được kiểm tra theo thời điểm thực tế. Nếu muốn đi, hãy gọi sớm để Phong Cách kiểm tra phương án phù hợp." ] },
    ],
    checklist: ["Ngày đi", "Thông tin chuyến bay", "Nhà ga nếu đã biết", "Số khách", "Hành lý", "Điểm đón hoặc trả"],
    faq: [
      { q: "Phong Cách có xe Hải Dương đi Cát Bi không?", a: "Có. Phong Cách tiếp nhận nhu cầu xe ghép và bao xe Hải Dương - sân bay Cát Bi cả hai chiều." },
      { q: "Đi một người có thể đặt xe ghép không?", a: "Có thể gửi nhu cầu. Phong Cách sẽ kiểm tra khả năng ghép theo chuyến thực tế." },
      { q: "Nhiều vali nên chọn xe nào?", a: "Bạn cần mô tả số lượng và kích thước hành lý để Phong Cách kiểm tra xe 4 chỗ hoặc 7 chỗ phù hợp." },
    ],
    routeSlug: "xe-hai-duong-cat-bi",
    routeLabel: "Xe Hải Dương - sân bay Cát Bi",
  },
  {
    slug: "dat-xe-hai-duong-ha-noi-can-thong-tin-gi",
    title: "Đặt xe Hải Dương - Hà Nội cần cung cấp thông tin gì?",
    description: "Danh sách thông tin cần chuẩn bị khi đặt xe Hải Dương - Hà Nội để Phong Cách kiểm tra xe ghép hoặc bao xe nhanh hơn.",
    category: "Kinh nghiệm đặt xe",
    primaryKeyword: "đặt xe Hải Dương Hà Nội",
    secondaryKeywords: ["đặt xe ghép Hải Dương Hà Nội", "xe Hải Dương Hà Nội", "gọi xe Hải Dương đi Hà Nội"],
    directAnswer: "Để đặt xe Hải Dương - Hà Nội, bạn nên cung cấp nơi đón, nơi trả, thời điểm, số khách, hành lý và nhu cầu xe ghép hay bao xe. Phong Cách sẽ dựa vào đó để kiểm tra xe và xác nhận thông tin chuyến.",
    choices: [
      { title: "Gọi hotline", bestFor: "Khách muốn trao đổi nhanh", description: "Chuẩn bị sẵn thông tin chuyến để Phong Cách kiểm tra ngay trong cuộc gọi." },
      { title: "Nhắn Zalo", bestFor: "Khách cần gửi địa chỉ hoặc ảnh hành lý", description: "Gửi đủ thông tin và để lại số điện thoại liên hệ." },
      { title: "Đặt trên website", bestFor: "Khách muốn gửi yêu cầu", description: "Điền rõ nơi đón trả, thời điểm, số khách và loại nhu cầu." },
    ],
    sections: [
      { heading: "Thông tin tối thiểu khi đặt xe", paragraphs: ["Nhà xe chỉ có thể kiểm tra đúng khi biết nhu cầu cụ thể. Nếu thiếu nơi đón, nơi trả hoặc số khách, quá trình trao đổi thường phải lặp lại nhiều lần.", "Hãy chuẩn bị đủ thông tin trước khi gọi hoặc nhắn. Phong Cách có xe cho tuyến Hải Dương - Hà Nội cả hai chiều và sẽ kiểm tra theo chuyến thực tế."], bullets: ["Chiều đi", "Nơi đón", "Nơi trả", "Ngày và thời điểm", "Số khách", "Hành lý", "Xe ghép hay bao xe"] },
      { heading: "Vì sao không có một lịch chung cho mọi khách?", paragraphs: ["Nhu cầu đón trả và tình trạng chuyến có thể thay đổi. Vì vậy, một lịch chung không thể thay thế việc kiểm tra trực tiếp cho từng yêu cầu.", "Bài viết cũng không cam kết cứng lộ trình, quãng đường hay thời lượng. Phong Cách sẽ trao đổi thông tin phù hợp sau khi nhận đủ nhu cầu." ] },
      { heading: "Cách xác nhận trước chuyến", paragraphs: ["Sau khi được tư vấn, bạn nên kiểm tra lại chiều đi, điểm đón trả, số khách, hành lý và hình thức ghép hay bao xe.", "Nếu có thay đổi, hãy báo sớm để Phong Cách kiểm tra lại. Mọi thông tin quan trọng nên được xác nhận trước khi khách khởi hành." ] },
    ],
    checklist: ["Chiều đi đã đúng", "Điểm đón trả đã rõ", "Thời điểm đã thống nhất", "Số khách chính xác", "Hành lý đã mô tả", "Số điện thoại liên hệ"],
    faq: [
      { q: "Có thể đặt xe Hải Dương - Hà Nội trên website không?", a: "Có thể gửi yêu cầu trên website hoặc gọi trực tiếp. Phong Cách sẽ kiểm tra và xác nhận lại theo chuyến thực tế." },
      { q: "Có cần nói rõ xe ghép hay bao xe không?", a: "Nên nói rõ ưu tiên. Nếu chưa biết chọn loại nào, hãy cung cấp số khách và hành lý để được tư vấn." },
      { q: "Phong Cách có nhận chiều Hà Nội về Hải Dương không?", a: "Có. Tuyến được tiếp nhận cả hai chiều; khách cần nói rõ chiều đi khi liên hệ." },
    ],
    routeSlug: "xe-ghep-hai-duong-ha-noi",
    routeLabel: "Xe ghép Hải Dương - Hà Nội",
  },
  {
    slug: "gui-hang-hai-duong-ha-noi-theo-chuyen",
    title: "Gửi hàng Hải Dương - Hà Nội theo chuyến cần lưu ý gì?",
    description: "Hướng dẫn chuẩn bị thông tin khi gửi hàng Hải Dương - Hà Nội theo chuyến; gọi Phong Cách để kiểm tra loại hàng và khả năng nhận.",
    category: "Gửi hàng theo chuyến",
    primaryKeyword: "gửi hàng Hải Dương Hà Nội theo chuyến",
    secondaryKeywords: ["gửi đồ Hải Dương Hà Nội", "ship hàng Hải Dương Hà Nội", "gửi hàng theo xe Hải Dương Hà Nội"],
    directAnswer: "Khi gửi hàng Hải Dương - Hà Nội theo chuyến, bạn cần mô tả loại hàng, kích thước, khối lượng, cách đóng gói và nơi giao nhận. Hãy gọi Phong Cách để bên mình kiểm tra khả năng nhận trên chuyến thực tế.",
    choices: [
      { title: "Kiện nhỏ gọn", bestFor: "Đồ đã đóng gói chắc chắn", description: "Cần cung cấp kích thước, khối lượng và thông tin người nhận." },
      { title: "Hàng dễ vỡ", bestFor: "Chỉ khi được kiểm tra trước", description: "Phải nói rõ tính chất hàng và cách đóng gói để Phong Cách xem xét." },
      { title: "Hàng cồng kềnh", bestFor: "Trường hợp có xe phù hợp", description: "Không mặc định nhận; cần gửi kích thước và ảnh để kiểm tra." },
    ],
    sections: [
      { heading: "Thông tin cần gửi trước khi hỏi nhận hàng", paragraphs: ["Tên hàng chung chung thường không đủ để biết có thể nhận hay không. Kích thước, khối lượng, độ dễ vỡ và cách đóng gói đều ảnh hưởng đến việc sắp xếp trên xe.", "Phong Cách chỉ xác nhận sau khi có đủ thông tin và kiểm tra chuyến. Khách không nên tự mang hàng đến khi chưa được đồng ý."], bullets: ["Loại hàng", "Kích thước", "Khối lượng", "Ảnh kiện hàng nếu cần", "Nơi giao và nơi nhận", "Số điện thoại hai bên"] },
      { heading: "Đóng gói và bàn giao", paragraphs: ["Hàng cần được đóng gói phù hợp, ghi rõ người gửi, người nhận và số điện thoại. Với đồ dễ vỡ hoặc có yêu cầu đặc biệt, phải báo trước để Phong Cách kiểm tra.", "Khi bàn giao, hai bên nên thống nhất đúng kiện hàng và thông tin người nhận. Không gửi hàng bị cấm hoặc hàng không khai báo rõ nội dung." ] },
      { heading: "Chi phí được xác nhận thế nào?", paragraphs: ["Chi phí phụ thuộc kiện hàng, nơi giao nhận và khả năng sắp xếp trên chuyến. Vì vậy, bài viết không dùng một mức cố định cho mọi loại hàng.", "Hãy gọi đúng hotline Phong Cách và cung cấp thông tin thật để được kiểm tra. Bảng giá của đơn vị khác không áp dụng cho dịch vụ của Phong Cách." ] },
    ],
    checklist: ["Đã mô tả loại hàng", "Đã đo kích thước", "Đã ước tính khối lượng", "Đã đóng gói", "Có người nhận", "Có địa chỉ giao nhận"],
    faq: [
      { q: "Phong Cách có nhận gửi hàng Hải Dương - Hà Nội không?", a: "Phong Cách có tiếp nhận nhu cầu gửi hàng theo chuyến và sẽ xác nhận sau khi biết loại hàng cùng tình trạng xe." },
      { q: "Có nhận mọi loại hàng không?", a: "Không. Loại hàng, cách đóng gói và khả năng sắp xếp cần được kiểm tra trước." },
      { q: "Có thể gửi hàng chiều Hà Nội về Hải Dương không?", a: "Bạn có thể gửi nhu cầu cả hai chiều. Phong Cách sẽ kiểm tra theo chuyến thực tế." },
    ],
    routeSlug: "xe-ghep-hai-duong-ha-noi",
    routeLabel: "Xe Hải Dương - Hà Nội",
  },
];

export function guidePostForSlug(slug: string) {
  return guidePosts.find((post) => post.slug === slug);
}
