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

export type GuideImage = {
  src: string;
  alt: string;
  caption: string;
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
  image?: GuideImage;
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
    title: "Đi Hải Dương - Hà Nội bằng gì? So sánh 5 phương tiện phổ biến",
    seoTitle: "Đi Hải Dương - Hà Nội bằng gì?",
    description: "So sánh xe khách bến Giáp Bát/Gia Lâm, tàu hỏa, xe limousine, xe ghép đón tận nhà và bao xe Hải Dương - Hà Nội theo chi phí, thời gian và điểm đón trả.",
    category: "So sánh phương tiện",
    primaryKeyword: "đi Hải Dương Hà Nội bằng phương tiện gì",
    secondaryKeywords: ["xe Hải Dương đi Hà Nội", "phương tiện Hải Dương Hà Nội", "xe ghép Hải Dương Hà Nội", "tàu hỏa Hải Dương Hà Nội"],
    directAnswer: "Từ Hải Dương đi Hà Nội khoảng 55 - 75km tùy điểm đón, thời gian di chuyển 50 - 90 phút. Nếu ưu tiên giá rẻ và gần ga/bến, xe khách hoặc tàu hỏa là lựa chọn tiết kiệm nhất. Nếu bạn đi khám bệnh tại các bệnh viện lớn (Bạch Mai, Việt Đức, K Tân Triều...), đi sân bay Nội Bài hoặc muốn được đón tận cửa tại Hải Dương trả tận nơi tại Hà Nội, xe ghép hoặc bao xe riêng 4-7 chỗ giúp tiết kiệm 1-2 lần tiền bắt taxi trung chuyển.",
    image: {
      src: "/images/cao-toc-ha-noi-hai-phong.jpg",
      alt: "Tuyến cao tốc Hà Nội Hải Phòng kết nối Hải Dương giúp xe ghép di chuyển êm ái và nhanh chóng",
      caption: "Nút giao cao tốc Hà Nội - Hải Phòng (5B), trục giao thông huyết mạch giúp xe ghép Phong Cách kết nối Hải Dương và Hà Nội chỉ mất 50 - 60 phút.",
    },
    choices: [
      { title: "Xe khách bến liên tỉnh", bestFor: "Ưu tiên giá vé rẻ, ít hành lý", description: "Bắt xe tại bến xe Hải Dương đi các bến Gia Lâm, Giáp Bát, Nước Ngầm; cần tự ra bến." },
      { title: "Tàu hỏa Hà Nội - Hải Phòng", bestFor: "Tránh kẹt xe giờ cao điểm", description: "Chạy đúng giờ từ ga Hải Dương về ga Hà Nội hoặc Long Biên, an toàn và ngắm cảnh." },
      { title: "Limousine chạy tuyến", bestFor: "Khách đặt ghế theo trục đón", description: "Ghế ngả êm ái, đón trả tại các trục đường lớn hoặc văn phòng cố định của nhà xe." },
      { title: "Xe ghép Phong Cách", bestFor: "Khách lẻ muốn đón trả tận nơi", description: "Đón tận nhà tại Hải Dương, trả tận nơi tại các quận Hà Nội; đặt trước 0đ cọc, trả sau chuyến." },
    ],
    comparison: {
      title: "Bảng so sánh 5 phương tiện Hải Dương đi Hà Nội",
      note: "Giá vé xe khách và tàu hỏa mang tính tham khảo tại thời điểm khảo sát. Giá xe ghép và bao xe của Phong Cách được báo trực tiếp theo chuyến thực tế.",
      rows: [
        { option: "Xe khách bến liên tỉnh", cost: "Khoảng 60.000đ - 90.000đ/vé", time: "1h30 - 2h (qua QL5)", convenience: "Tự ra bến, đổi xe trung chuyển", pickupDropoff: "Bến xe Hải Dương ⇄ Gia Lâm/Giáp Bát", bestFor: "Sinh viên, người đi 1 mình, ít đồ" },
        { option: "Tàu hỏa", cost: "Khoảng 70.000đ - 100.000đ/vé", time: "1h15 - 1h30", convenience: "Đúng giờ, không lo tắc đường", pickupDropoff: "Ga Hải Dương ⇄ Ga Hà Nội/Long Biên", bestFor: "Khách ở gần khu vực ga trung tâm" },
        { option: "Limousine chạy tuyến", cost: "Khoảng 130.000đ - 180.000đ/ghế", time: "1h15 - 1h30", convenience: "Ghế da ngả êm", pickupDropoff: "Theo trục đường quy định", bestFor: "Người đi làm việc, công tác nhanh" },
        { option: "Xe ghép Phong Cách", cost: "Báo giá trực tiếp theo chuyến", time: "50 - 70 phút (qua cao tốc 5B)", convenience: "Đón tận nhà, trả tận nơi", pickupDropoff: "Đón trả tận cửa theo yêu cầu", bestFor: "Khách cần đón trả tận nơi, đi viện" },
        { option: "Bao xe riêng Phong Cách", cost: "Báo giá trực tiếp theo chuyến", time: "50 - 60 phút chạy thẳng", convenience: "Riêng tư 100%, chủ động giờ", pickupDropoff: "Đón trả mọi điểm theo yêu cầu", bestFor: "Gia đình, nhóm đông, nhiều hành lý" },
      ],
    },
    sections: [
      { heading: "Lộ trình di chuyển: Cao tốc 5B và Quốc lộ 5 cũ", paragraphs: ["Khoảng cách từ trung tâm TP. Hải Dương lên trung tâm Hà Nội khoảng 55km đến 65km. Trước đây, các phương tiện chủ yếu di chuyển theo Quốc lộ 5 cũ với mật độ xe container và xe tải rất lớn, thường xuyên ùn ứ tại các nút giao Như Quỳnh hoặc cầu Thanh Trì, mất từ 1.5 đến 2 tiếng.", "Hiện nay, tuyến cao tốc Hà Nội - Hải Phòng (cao tốc 5B) cho phép ô tô chạy với vận tốc tối đa 120km/h, rút ngắn thời gian di chuyển từ Hải Dương về nút giao Cổ Linh hoặc cầu Vĩnh Tuy chỉ còn khoảng 45 đến 55 phút."], bullets: ["Cao tốc 5B: êm ái, chạy thẳng, chỉ mất 45 - 55 phút", "Quốc lộ 5 cũ: nhiều điểm giao cắt, mật độ xe tải đông, mất 1.5 - 2 tiếng", "Tùy điểm đến cụ thể ở Hà Nội mà tài xế sẽ lựa chọn lộ trình nhanh nhất"] },
      { heading: "Xe khách và tàu hỏa: rẻ nhưng phát sinh chi phí trung chuyển", paragraphs: ["Một sai lầm phổ biến khi so sánh phương tiện là chỉ nhìn vào tiền vé. Vé xe khách (60.000đ - 90.000đ) hay vé tàu hỏa (70.000đ - 100.000đ) thoạt nhìn rất rẻ, nhưng bạn phải tự tốn thêm tiền xe ôm/taxi từ nhà ra bến (khoảng 30.000đ - 50.000đ) và từ bến xe Gia Lâm/Giáp Bát đến điểm đến ở Hà Nội (thường mất thêm 70.000đ - 120.000đ).", "Tổng chi phí thực tế cho một người có thể lên tới 180.000đ - 220.000đ cộng thêm sự mệt mỏi khi phải xách vác đồ đạc đổi xe giữa trời mưa nắng."], bullets: ["Tính đúng tổng chi phí door-to-door, không chỉ so mỗi giá vé", "Người già, người ốm đi khám bệnh nên tránh đổi nhiều chặng xe", "Thời gian chờ đợi tại bến xe có thể kéo dài thêm 30 - 45 phút"] },
      { heading: "Xe ghép đón tận nơi: giải pháp tiện lợi cho người đi khám bệnh", paragraphs: ["Rất nhiều hành khách tại Hải Dương có nhu cầu lên Hà Nội khám chữa bệnh vào sáng sớm tại các bệnh viện tuyến đầu như Bệnh viện Bạch Mai, Bệnh viện K (Tân Triều), Bệnh viện Việt Đức, Bệnh viện Nhi Trung ương hoặc Bệnh viện 108.", "Với dịch vụ xe ghép đón tận cửa, bác tài sẽ đón bạn ngay tại nhà từ 04h30 - 06h00 sáng và đưa thẳng đến cổng khoa khám bệnh. Bạn không phải chen chúc, không lo trễ giờ lấy số khám và có thể hẹn xe đón về ngay trong ngày sau khi khám xong."], bullets: ["Đón tận cửa tại các huyện Hải Dương từ sáng sớm", "Trả thẳng cổng các bệnh viện lớn ở Hà Nội", "Hỗ trợ đón chiều về ngay sau khi hoàn thành khám bệnh"] },
      { heading: "Bao xe riêng 4-7 chỗ: chủ động trọn vẹn cho gia đình", paragraphs: ["Nếu đi cùng cả gia đình từ 3 đến 6 người, bao xe riêng 4 hoặc 7 chỗ là lựa chọn tối ưu nhất về cả chi phí lẫn sự thoải mái. Chi phí tính theo đầu người tương đương hoặc thậm chí rẻ hơn so với đi xe ghép lẻ.", "Khách hàng được toàn quyền quyết định giờ xuất phát, điểm đón và điểm dừng nghỉ dọc đường nếu có trẻ nhỏ hoặc người cao tuổi."], bullets: ["Xe riêng sạch sẽ, không mùi thuốc lá, điều hòa mát mẻ", "Khoang cốp rộng rãi để đồ đạc, vali và quà quê thoải mái", "Đón trả nhiều điểm trong cùng lộ trình nếu thông báo trước"] },
      { heading: "Chính sách đặt trước 0đ cọc và thanh toán sau chuyến", paragraphs: ["Phong Cách duy trì cam kết minh bạch trên hành lang Hải Dương - Hà Nội: không yêu cầu đặt cọc tiền trước, không thu phụ phí phát sinh dọc đường. Khách hàng chỉ thanh toán sau khi hoàn thành hành trình an toàn.", "Để có chuyến đi thuận lợi nhất, quý khách nên liên hệ đặt xe trước ít nhất 1-2 tiếng hoặc đặt từ tối hôm trước nếu đi chuyến sáng sớm."], bullets: ["Đặt trước 0đ cọc, thanh toán sau chuyến", "Hủy hoặc đổi giờ không lo mất tiền cọc", "Tài xế bản địa Hải Dương nhiệt tình, lái xe an toàn"] },
    ],
    checklist: ["Địa chỉ đón cụ thể tại Hải Dương", "Điểm đến chi tiết tại Hà Nội (quận, bệnh viện, sân bay)", "Ngày và khung giờ muốn xuất phát", "Số lượng người đi cùng", "Lượng hành lý mang theo", "Nhu cầu đi ghép hay bao trọn xe"],
    faq: [
      { q: "Từ Hải Dương lên Hà Nội đi mất bao lâu?", a: "Nếu đi theo cao tốc Hà Nội - Hải Phòng (5B), thời gian chạy xe thực tế chỉ khoảng 50 - 70 phút tùy điểm đón trả cụ thể." },
      { q: "Giá xe ghép Hải Dương đi Hà Nội là bao nhiêu?", a: "Giá chuyến được Phong Cách báo trực tiếp khi liên hệ hotline 0987 663 883. Chi phí phụ thuộc vào điểm đón tại Hải Dương và điểm trả tại nội thành Hà Nội." },
      { q: "Có xe đưa đón tận cổng bệnh viện ở Hà Nội không?", a: "Có. Phong Cách nhận đón tận nhà đưa thẳng tới cổng các bệnh viện lớn như Bạch Mai, Việt Đức, K Tân Triều, 108, Nhi Trung ương..." },
      { q: "Có nhận chiều Hà Nội về lại Hải Dương không?", a: "Có. Nhà xe phục vụ hai chiều mỗi ngày, nhận đón tại các quận Hà Nội đưa về tận nhà tại Hải Dương." },
      { q: "Đặt xe Hải Dương - Hà Nội có cần chuyển khoản cọc không?", a: "Không. Phong Cách áp dụng chính sách đặt trước 0đ cọc, thanh toán bằng tiền mặt hoặc chuyển khoản sau khi chuyến đi hoàn thành." },
    ],
    sources: [
      { title: "Thông tin giờ tàu tuyến Hà Nội - Hải Phòng", publisher: "Tổng công ty Đường sắt Việt Nam", url: "https://dsvn.vn/", checkedAt: "2026-09-03", supports: "Lịch trình chạy tàu hỏa qua ga Hải Dương về ga Hà Nội và Long Biên." },
      { title: "Quy hoạch hạ tầng cao tốc Hà Nội - Hải Phòng (QL5B)", publisher: "Bộ Giao thông Vận tải", url: "https://mt.gov.vn/", checkedAt: "2026-09-03", supports: "Thông số vận tốc và lộ trình kết nối giữa Hà Nội và Hải Dương." },
      { title: "Thông tin các tuyến xe khách Hải Dương đi Hà Nội", publisher: "Vexere", url: "https://vexere.com/vi-VN/ve-xe-khach-tu-hai-duong-di-ha-noi-126t1241.html", checkedAt: "2026-09-03", supports: "Tham khảo mạng lưới xe khách liên tỉnh giữa Hải Dương và các bến xe Hà Nội." },
    ],
    updatedAt: "2026-09-03",
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
    image: {
      src: "/images/dich-vu-xe-7-cho.png",
      alt: "Dịch vụ xe 7 chỗ đón trả tận nơi tuyến Hải Dương đi các điểm Quảng Ninh như Hạ Long Cẩm Phả Vân Đồn",
      caption: "Dòng xe 7 chỗ tiện nghi của Phong Cách chuyên phục vụ các tuyến liên tỉnh Hải Dương ⇄ Quảng Ninh.",
    },
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
    image: {
      src: "/images/dich-vu-xe-4-cho.png",
      alt: "Dịch vụ xe 4 chỗ và 7 chỗ đón trả tận nhà tuyến Hải Dương Hải Phòng của Phong Cách",
      caption: "Dịch vụ xe 4 chỗ và 7 chỗ của Xe Ghép Phong Cách phục vụ liên tục hàng ngày tuyến Hải Dương ⇄ Hải Phòng.",
    },
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
    image: {
      src: "/images/cau-bach-dang-hai-phong-quang-ninh.jpg",
      alt: "Cầu Bạch Đằng kết nối Hải Phòng và Quảng Ninh trên tuyến cao tốc giúp xe ghép di chuyển chỉ mất 35 phút",
      caption: "Cầu Bạch Đằng nối liền Hải Phòng và Quảng Ninh, giúp rút ngắn thời gian di chuyển giữa hai đô thị lớn chỉ còn 35 - 45 phút.",
    },
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
    title: "Nên đi xe ghép hay xe khách Hải Dương - Hà Nội? So sánh chi tiết",
    seoTitle: "Xe ghép hay xe khách Hải Dương Hà Nội",
    description: "So sánh xe ghép đón tận nhà và xe khách tuyến cố định Hải Dương - Hà Nội theo tổng chi phí thực tế, thời gian, sự tiện lợi và số lượng hành lý.",
    category: "So sánh dịch vụ",
    primaryKeyword: "xe ghép hay xe khách Hải Dương Hà Nội",
    secondaryKeywords: ["xe khách Hải Dương Hà Nội", "xe ghép Hải Dương Hà Nội", "nên đi xe ghép hay xe khách"],
    directAnswer: "Xe khách có giá vé rẻ (60.000đ - 90.000đ) nhưng chỉ đón trả tại bến xe cố định, bạn phải tự tốn thêm tiền xe ôm/taxi hai đầu và xách vác đồ đạc. Xe ghép đưa đón tận cửa tại Hải Dương và trả tận nơi tại Hà Nội bằng xe 4-7 chỗ sạch sẽ, chạy cao tốc 5B chỉ mất 50 - 60 phút. Nếu tính tổng chi phí trung chuyển và công sức, xe ghép là lựa chọn tiện lợi và êm ái hơn hẳn cho người đi khám bệnh, người có hành lý hoặc gia đình có con nhỏ.",
    image: {
      src: "/images/dich-vu-xe-4-cho.png",
      alt: "So sánh xe ghép đưa đón tận nhà và xe khách bến bãi tuyến Hải Dương Hà Nội",
      caption: "Dịch vụ xe ô tô 4-7 chỗ đưa đón tận cửa của Xe Ghép Phong Cách giúp hành khách không phải ra bến xe đông đúc.",
    },
    choices: [
      { title: "Xe ghép đón tận nơi", bestFor: "Khách lẻ, người đi khám bệnh, người nhiều đồ", description: "Đón trả tận cửa hai đầu Hải Dương và các quận nội thành Hà Nội; đi cao tốc 5B êm ái." },
      { title: "Xe khách tuyến bến", bestFor: "Sinh viên, người ở ngay sát bến xe", description: "Tiết kiệm chi phí vé xe; cần tự di chuyển ra bến xe Hải Dương và bến Gia Lâm, Giáp Bát." },
      { title: "Bao xe riêng 4-7 chỗ", bestFor: "Gia đình, nhóm công tác, người già", description: "Riêng tư 100%, chủ động giờ xuất phát theo lịch trình cá nhân, không ghép thêm khách." },
      { title: "Limousine chạy trục", bestFor: "Khách ở gần trục đường lớn quy định", description: "Ghế da ngả êm nhưng chỉ đón trả theo cung đường cố định của từng nhà xe." },
    ],
    comparison: {
      title: "Bảng so sánh thực tế xe ghép và xe khách Hải Dương - Hà Nội",
      note: "Giá vé xe khách chỉ tính chặng bến-đến-bến. Chi phí thực tế cần cộng thêm tiền di chuyển trung chuyển hai đầu.",
      rows: [
        { option: "Xe ghép Phong Cách", cost: "Báo giá trực tiếp theo chuyến", time: "50 - 60 phút (cao tốc 5B)", convenience: "Đón trả tận cửa, không đổi xe", pickupDropoff: "Tận nhà Hải Dương ⇄ Tận nơi Hà Nội", bestFor: "Khách đi khám bệnh, đi công tác, có vali" },
        { option: "Xe khách bến", cost: "60.000đ - 90.000đ (vé xe)", time: "1h30 - 2h (qua QL5 cũ)", convenience: "Tự ra bến, đổi 2-3 chặng xe", pickupDropoff: "Bến xe Hải Dương ⇄ Gia Lâm/Giáp Bát", bestFor: "Sinh viên, người đi một mình ít đồ" },
        { option: "Bao xe riêng 4-7 chỗ", cost: "Báo giá trực tiếp theo chuyến", time: "50 - 60 phút chạy thẳng", convenience: "Riêng tư 100%, tự chọn giờ", pickupDropoff: "Đón trả theo mọi yêu cầu", bestFor: "Gia đình, nhóm đông, người cao tuổi" },
        { option: "Limousine chạy tuyến", cost: "130.000đ - 180.000đ/ghế", time: "1h15 - 1h30", convenience: "Ghế êm, đón trục đường lớn", pickupDropoff: "Văn phòng / điểm đón cố định", bestFor: "Khách ở gần các trục đón quy định" },
      ],
    },
    sections: [
      { heading: "Bài toán tổng chi phí thực tế: Đừng chỉ nhìn vào tiền vé", paragraphs: ["Nhiều người so sánh thường chỉ nhìn vào giá vé xe khách từ 60.000đ đến 90.000đ và nghĩ rằng đi xe khách rẻ hơn rất nhiều. Tuy nhiên, nếu bạn không ở ngay sát bến xe Hải Dương, bạn sẽ phải tốn thêm từ 30.000đ đến 50.000đ tiền xe ôm hoặc taxi để ra bến.", "Khi đến các bến xe ở Hà Nội (Gia Lâm, Giáp Bát, Nước Ngầm), bạn lại phải tiếp tục bắt taxi hoặc xe ôm vào nội thành, bệnh viện hoặc cơ quan, chi phí này thường dao động từ 70.000đ đến 120.000đ. Tổng chi phí một lượt có thể lên tới 180.000đ - 250.000đ, tương đương hoặc thậm chí cao hơn khi đi xe ghép đón trả tận cửa."], bullets: ["Vé xe khách 70K + xe ôm ra bến 40K + taxi ở Hà Nội 90K = 200K tổng chi phí", "Tốn gấp đôi thời gian vì phải chờ xe xuất bến và chuyển phương tiện", "Mệt mỏi và bất tiện khi trời mưa nắng hoặc xách theo đồ đạc"] },
      { heading: "Thời gian di chuyển: Cao tốc 5B so với Quốc lộ 5 cũ", paragraphs: ["Hầu hết các tuyến xe khách truyền thống di chuyển theo Quốc lộ 5 cũ để bắt thêm khách dọc đường. Tuyến đường này có mật độ xe container và xe tải rất lớn, đèn đỏ liên tục và thường xuyên ùn ứ tại các nút giao Như Quỳnh, Phú Thụy, mất từ 1 tiếng rưỡi đến 2 tiếng.", "Trong khi đó, xe ghép Phong Cách di chuyển thẳng qua cao tốc Hà Nội - Hải Phòng (cao tốc 5B) với vận tốc tối đa 120km/h, mặt đường êm ái, chỉ mất khoảng 50 đến 60 phút để tới cửa ngõ Thủ đô."], bullets: ["Cao tốc 5B: êm ái, an toàn, thời gian chỉ 50 - 60 phút", "Quốc lộ 5 cũ: nhiều điểm giao cắt, mất từ 90 đến 120 phút", "Xe ghép đi cao tốc giúp người say xe cảm thấy dễ chịu hơn rất nhiều"] },
      { heading: "Đi khám bệnh tại các bệnh viện lớn ở Hà Nội nên chọn xe nào?", paragraphs: ["Với các hành khách từ Hải Dương lên Hà Nội khám chữa bệnh tại các bệnh viện tuyến đầu như Bệnh viện Bạch Mai, Bệnh viện K (Tân Triều), Bệnh viện Việt Đức, Bệnh viện Nhi Trung ương hay Bệnh viện 108, xe ghép đón tận nhà là lựa chọn vượt trội.", "Bác tài đón bạn tận ngõ từ 04h30 - 06h00 sáng và đưa thẳng vào cổng khoa khám bệnh. Bạn không phải vác theo kết quả xét nghiệm hay túi đồ chen chúc trên xe buýt, xe ôm, đảm bảo sức khỏe cho người bệnh và người nhà đi cùng."], bullets: ["Đón sớm từ 04h30 - 06h00 sáng để kịp lấy số khám đầu giờ", "Đưa thẳng cổng bệnh viện, không phải đổi chặng trung chuyển", "Hỗ trợ đón chiều về tận cổng viện ngay sau khi khám xong"] },
      { heading: "Khi nào gia đình nên cân nhắc bao xe riêng 4-7 chỗ?", paragraphs: ["Nếu đoàn đi từ 3 đến 6 người gồm bố mẹ, con nhỏ hoặc người lớn tuổi, bao xe riêng 4 chỗ hoặc 7 chỗ là giải pháp kinh tế và tiện nghi nhất. Khi chia chi phí theo đầu người, mức giá tương đương xe ghép nhưng bạn có được không gian riêng tư hoàn toàn.", "Gia đình có thể thoải mái trò chuyện, dừng nghỉ vệ sinh hoặc ăn sáng dọc đường tùy thích mà không làm ảnh hưởng đến bất kỳ hành khách nào khác."], bullets: ["Không gian riêng tư, xe thơm tho, không mùi thuốc lá", "Khoang chứa đồ rộng rãi, chở được cả xe đẩy em bé và vali lớn", "Đón trả tại nhiều điểm trong cùng lộ trình nếu hẹn trước"] },
      { heading: "Chính sách đặt trước 0đ cọc và thanh toán sau chuyến", paragraphs: ["Để mang lại sự an tâm tuyệt đối cho hành khách, Xe Ghép Phong Cách không thu bất kỳ khoản tiền đặt cọc nào khi bạn đặt xe tuyến Hải Dương - Hà Nội. Bạn chỉ cần gọi điện thoại hoặc nhắn tin cung cấp địa chỉ đón trả và thời gian mong muốn.", "Chi phí chuyến đi chỉ được thanh toán sau khi bác tài đưa bạn đến đúng điểm hẹn an toàn. Mọi thắc mắc hoặc nhu cầu đổi giờ đều được hỗ trợ linh hoạt mà không phát sinh phí phạt."], bullets: ["Đặt xe trước 0đ cọc, hoàn toàn không lo lừa đảo", "Thanh toán tiền mặt hoặc chuyển khoản sau chuyến", "Hỗ trợ đổi giờ hoặc hủy chuyến linh hoạt khi có việc đột xuất"] },
    ],
    checklist: ["Điểm đón chi tiết tại Hải Dương (xã, huyện, ngõ phố)", "Điểm trả cụ thể tại Hà Nội (quận, bệnh viện, trường học)", "Thời gian muốn có mặt tại Hà Nội", "Số lượng người đi cùng", "Số lượng hành lý hoặc vali mang theo", "Nhu cầu đi xe ghép hay bao trọn xe"],
    faq: [
      { q: "Xe ghép Hải Dương - Hà Nội có đón tận nhà không?", a: "Có. Phong Cách đón tận ngõ tại các huyện, thị xã, thành phố thuộc Hải Dương và đưa về trả tận nơi tại các quận nội thành Hà Nội." },
      { q: "Giá xe ghép Hải Dương đi Hà Nội là bao nhiêu?", a: "Giá chuyến được báo trực tiếp theo điểm đón trả thực tế khi bạn liên hệ hotline 0987 663 883. Chi phí luôn trọn gói và minh bạch, không phát sinh phụ phí dọc đường." },
      { q: "Xe có nhận đón chiều Hà Nội về lại Hải Dương không?", a: "Có. Nhà xe phục vụ liên tục hai chiều mỗi ngày, nhận đón khách tại các quận Hà Nội đưa về tận nhà tại Hải Dương." },
      { q: "Đi khám bệnh sáng sớm có xe đón từ mấy giờ?", a: "Nhà xe có các chuyến khởi hành sớm từ 04h30 - 05h30 sáng để kịp đưa bệnh nhân đến các bệnh viện lớn tại Hà Nội lấy số khám đầu giờ." },
      { q: "Đặt xe ghép có cần chuyển khoản đặt cọc trước không?", a: "Không cần đặt cọc. Phong Cách áp dụng chính sách đặt trước 0đ cọc, thanh toán bằng tiền mặt hoặc chuyển khoản sau khi chuyến đi hoàn thành." },
    ],
    sources: [
      { title: "Báo cáo hạ tầng giao thông liên tỉnh Hà Nội - Hải Dương", publisher: "Bộ Giao thông Vận tải", url: "https://mt.gov.vn/", checkedAt: "2026-09-05", supports: "Thông số kết nối hạ tầng giữa Quốc lộ 5 cũ và cao tốc Hà Nội - Hải Phòng." },
      { title: "Mạng lưới tuyến xe khách liên tỉnh Hà Nội", publisher: "Sở Giao thông Vận tải Hà Nội", url: "https://sogtvt.hanoi.gov.vn/", checkedAt: "2026-09-05", supports: "Thông tin các bến xe liên tỉnh tiếp nhận tuyến Hải Dương gồm Gia Lâm, Giáp Bát, Nước Ngầm." },
      { title: "Thông tin khảo sát cước vận tải hành khách liên tỉnh", publisher: "Cục Đường bộ Việt Nam", url: "https://drvn.gov.vn/", checkedAt: "2026-09-05", supports: "Khảo sát mặt bằng cước xe khách và phương tiện vận chuyển hành khách công cộng." },
    ],
    updatedAt: "2026-09-05",
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
    title: "Gửi hàng Hải Dương - Hải Phòng theo chuyến: nhận ngay sau 1-2 tiếng",
    seoTitle: "Gửi hàng Hải Dương Hải Phòng theo chuyến",
    description: "Dịch vụ gửi hàng hỏa tốc Hải Dương - Hải Phòng theo chuyến xe ghép: gửi đồ ăn tươi sống, bánh đậu xanh, hải sản, bưu phẩm, giấy tờ nhận ngay trong ngày.",
    category: "Gửi hàng theo chuyến",
    primaryKeyword: "gửi hàng Hải Dương Hải Phòng theo chuyến",
    secondaryKeywords: ["xe ghép gửi hàng Hải Dương Hải Phòng", "gửi đồ Hải Dương Hải Phòng", "gửi hàng hỏa tốc Hải Dương Hải Phòng"],
    directAnswer: "Gửi hàng theo chuyến xe ghép Hải Dương - Hải Phòng là giải pháp giao nhận hỏa tốc nhanh nhất hiện nay: hàng được giao tận tay người nhận chỉ sau 1 đến 2 tiếng chạy xe thay vì phải chờ 1-2 ngày như chuyển phát bưu điện truyền thống. Dịch vụ phù hợp cho đồ ăn tươi sống, hải sản Cát Bà, bánh đậu xanh đặc sản, giấy tờ tài liệu gấp hoặc hàng mẫu doanh nghiệp với cước phí minh bạch khởi điểm từ 150.000đ/kiện.",
    image: {
      src: "/images/gui-hang-theo-chuyen.png",
      alt: "Dịch vụ gửi hàng hỏa tốc theo chuyến xe ghép Hải Dương Hải Phòng nhận ngay sau 1 đến 2 tiếng",
      caption: "Dịch vụ gửi hàng hỏa tốc theo chuyến xe ghép Phong Cách, hỗ trợ nhận tận nơi giao tận tay hai đầu Hải Dương và Hải Phòng.",
    },
    choices: [
      { title: "Tài liệu, hồ sơ gấp", bestFor: "Doanh nghiệp, cá nhân cần giao hỏa tốc", description: "Hồ sơ công chứng, hợp đồng kinh doanh, giấy tờ chuyển phát khẩn cấp trong 1-2 giờ." },
      { title: "Thực phẩm, đặc sản", bestFor: "Bánh đậu xanh, hải sản tươi sống, đồ ăn", description: "Vận chuyển trong khoang xe sạch sẽ có điều hòa, giữ nguyên độ tươi ngon của thực phẩm." },
      { title: "Kiện hàng thùng xốp", bestFor: "Hàng gia đình, hàng buôn bán vừa và nhỏ", description: "Xếp gọn gàng trong khoang cốp xe 4-7 chỗ, không bị chèn ép, quăng quật hay móp méo." },
      { title: "Hàng mẫu, linh kiện", bestFor: "Xưởng sản xuất, cửa hàng linh kiện", description: "Giao nhận đúng giờ hẹn trực tiếp cho đối tác tại Hải Phòng hoặc các khu công nghiệp Hải Dương." },
    ],
    comparison: {
      title: "So sánh gửi hàng xe ghép và chuyển phát truyền thống",
      note: "Mức giá từ 150.000đ là giá sàn khởi điểm (VERIFIED_FROM) đã được xác nhận. Giá thực tế phụ thuộc kích thước kiện hàng và địa chỉ giao nhận.",
      rows: [
        { option: "Xe ghép Phong Cách", cost: "Từ 150.000đ/kiện", time: "1 - 2 tiếng nhận ngay", convenience: "Giao nhận tận nơi hai đầu", pickupDropoff: "Hải Dương ⇄ Hải Phòng", bestFor: "Đồ tươi sống, giấy tờ khẩn cấp" },
        { option: "Chuyển phát bưu điện", cost: "30.000đ - 60.000đ", time: "24 - 48 tiếng (1-2 ngày)", convenience: "Phải ra bưu cục gửi đồ", pickupDropoff: "Theo tuyến bưu tá giao", bestFor: "Hàng thông thường, không cần gấp" },
        { option: "Gửi xe khách bến", cost: "50.000đ - 100.000đ", time: "3 - 5 tiếng", convenience: "Tự mang ra bến xe gửi và lấy", pickupDropoff: "Bến xe Hải Dương ⇄ Bến Vĩnh Niệm", bestFor: "Người ở sát bến xe hai đầu" },
      ],
    },
    sections: [
      { heading: "Ưu thế vượt trội: Giao nhận hỏa tốc chỉ sau 1 đến 2 tiếng", paragraphs: ["Khi sử dụng các dịch vụ chuyển phát nhanh bưu chính thông thường, dù là gói hỏa tốc thì bưu phẩm vẫn phải trải qua các khâu gom hàng, phân loại tại kho trung chuyển và phát vào ngày hôm sau. Điều này không thể đáp ứng được các nhu cầu khẩn cấp như gửi giấy tờ tài liệu đấu thầu, hộ chiếu, visa hoặc các mặt hàng thực phẩm cần sử dụng ngay.", "Với dịch vụ gửi hàng theo chuyến của Xe Ghép Phong Cách, hàng hóa được xếp trực tiếp lên xe ô tô đang chuẩn bị khởi hành và chạy thẳng qua Quốc lộ 5 hoặc cao tốc 5B. Người nhận tại Hải Phòng có thể nhận hàng tận tay chỉ sau 60 đến 90 phút kể từ lúc xe xuất phát."], bullets: ["Thời gian giao hàng siêu tốc chỉ 1 - 2 tiếng", "Không qua kho trung chuyển, hạn chế tối đa thất lạc", "Tài xế gọi điện thoại trực tiếp cho người nhận trước khi giao 15-20 phút"] },
      { heading: "Các mặt hàng phù hợp gửi theo chuyến xe ghép", paragraphs: ["Do vận chuyển bằng xe ô tô du lịch 4 chỗ và 7 chỗ sạch sẽ, nhà xe tiếp nhận đa dạng các mặt hàng có kích thước vừa và nhỏ. Đặc biệt, khoang xe luôn bật điều hòa mát mẻ, rất lý tưởng để bảo quản các loại thực phẩm đặc sản.", "Các mặt hàng thường xuyên được gửi gồm: bánh đậu xanh Hải Dương, chả rươi Tứ Kỳ, hải sản tươi sống Cát Bà/Đồ Sơn, hoa quả sạch, quần áo thời trang, phụ tùng máy móc nhỏ, hồ sơ hợp đồng và quà biếu gia đình."], bullets: ["Tài liệu, hóa đơn, giấy tờ, hợp đồng quan trọng", "Đặc sản vùng miền, thực phẩm đóng hộp, hoa quả tươi", "Thùng xốp hải sản ướp đá được đóng kín không rò rỉ nước", "Hàng linh kiện điện tử, mẫu vải may mặc, đồ gia dụng nhỏ"] },
      { heading: "Quy trình giao nhận: Đón tận nơi hoặc hẹn tại điểm thuận tiện", paragraphs: ["Khách hàng có thể lựa chọn hai hình thức giao nhận tùy theo nhu cầu: giao nhận tận nhà hoặc hẹn giao nhận tại các trục đường chính/nút giao cao tốc để tối ưu chi phí.", "Nếu bạn ở trung tâm TP Hải Dương hoặc các thị trấn dọc Quốc lộ 5 (Lai Cách, Phú Thái, Nam Sách), tài xế có thể ghé qua tận nơi lấy hàng hoặc bạn chỉ cần mang ra điểm hẹn gần nhất trên lộ trình xe chạy."], bullets: ["Hình thức 1: Giao nhận tận nơi theo địa chỉ hai đầu", "Hình thức 2: Hẹn giao nhận tại các điểm dừng chân hoặc nút giao thuận tiện", "Luôn có biên nhận hoặc chụp ảnh xác nhận lúc nhận và giao hàng"] },
      { heading: "Hướng dẫn đóng gói an toàn trước khi gửi", paragraphs: ["Để đảm bảo hàng hóa nguyên vẹn trong suốt hành trình, người gửi cần đóng gói cẩn thận bằng thùng carton hoặc thùng xốp đối với đồ dễ vỡ hoặc thực phẩm tươi sống có nước.", "Bên ngoài kiện hàng cần ghi rõ ràng bằng bút lông: Họ tên người nhận, Số điện thoại người nhận và Địa chỉ nhận hàng tại Hải Phòng hoặc Hải Dương. Điều này giúp tài xế liên lạc nhanh chóng ngay khi tới nơi."], bullets: ["Dán kín băng dính các góc và mép thùng hàng", "Ghi rõ SĐT và tên người nhận to rõ ràng bên ngoài kiện", "Thông báo trước với tài xế nếu là hàng dễ vỡ hoặc cần giữ nằm ngang"] },
      { heading: "Cam kết an toàn và cước phí minh bạch", paragraphs: ["Một trong những điểm khác biệt của Phong Cách là tài xế nhận hàng trực tiếp và chịu trách nhiệm bảo quản nguyên vẹn kiện hàng đến tận tay người nhận. Không có tình trạng quăng quật, xếp chồng đè nén làm bẹp hộp như trên xe tải hay xe khách bến bãi.", "Cước phí gửi hàng được báo rõ ràng ngay từ đầu, khởi điểm từ 150.000đ/kiện tùy theo kích thước và quãng đường giao nhận, thanh toán linh hoạt đầu gửi hoặc đầu nhận."], bullets: ["Cam kết hàng hóa nguyên vẹn 100%, không móp méo", "Báo giá trọn gói minh bạch, không phát sinh chi phí", "Hỗ trợ thu hộ tiền hàng (COD) cho các chủ shop kinh doanh"] },
    ],
    checklist: ["Tên hàng hóa và đặc tính", "Kích thước ước tính (dài x rộng x cao)", "Họ tên và số điện thoại người nhận", "Địa chỉ giao hàng cụ thể tại Hải Phòng", "Họ tên và số điện thoại người gửi tại Hải Dương", "Quy cách đóng gói kín đáo, an toàn"],
    faq: [
      { q: "Gửi hàng từ Hải Dương đi Hải Phòng mất bao lâu thì tới?", a: "Thời gian vận chuyển thực tế chỉ từ 1 đến 2 tiếng tùy theo địa chỉ giao nhận tại trung tâm TP Hải Phòng hay các quận huyện lân cận." },
      { q: "Giá gửi hàng Hải Dương - Hải Phòng là bao nhiêu?", a: "Cước gửi hàng khởi điểm từ 150.000đ/kiện đối với bưu phẩm hoặc kiện hàng tiêu chuẩn. Kiện hàng lớn hoặc cồng kềnh sẽ được báo giá cụ thể khi liên hệ hotline 0987 663 883." },
      { q: "Nhà xe có nhận gửi hải sản tươi sống hoặc đồ ăn không?", a: "Có nhận. Thực phẩm cần được đóng trong thùng xốp dán kín nắp, không rò rỉ nước để đảm bảo vệ sinh khoang xe." },
      { q: "Tài xế có giao hàng tận nhà người nhận ở Hải Phòng không?", a: "Có. Phong Cách hỗ trợ giao tận tay người nhận tại các quận nội thành Hải Phòng hoặc hẹn tại các nút giao thuận tiện nhất cho khách." },
      { q: "Nhà xe có hỗ trợ thu hộ tiền hàng (COD) không?", a: "Có hỗ trợ thu hộ tiền hàng cho các cửa hàng và chủ shop kinh doanh, sau đó chuyển khoản lại ngay cho người gửi sau khi giao thành công." },
    ],
    sources: [
      { title: "Quy định vận tải hàng hóa đường bộ liên tỉnh", publisher: "Bộ Giao thông Vận tải", url: "https://mt.gov.vn/", checkedAt: "2026-09-05", supports: "Quy định về quy chuẩn đóng gói và an toàn bưu phẩm, hàng hóa trên phương tiện cơ giới đường bộ." },
      { title: "Mạng lưới kết nối giao thông thương mại Hải Dương - Hải Phòng", publisher: "Cổng thông tin điện tử thành phố Hải Phòng", url: "https://haiphong.gov.vn/", checkedAt: "2026-09-05", supports: "Hành lang vận chuyển hàng hóa kết nối các đô thị vệ tinh vùng duyên hải Bắc Bộ." },
      { title: "Thông tin bến xe và dịch vụ tiếp nhận hàng hóa liên tỉnh", publisher: "Công ty Cổ phần Bến xe Hải Phòng", url: "https://benxevinhniem.vn/", checkedAt: "2026-09-05", supports: "Tham khảo quy trình tiếp nhận và giao trả hàng gửi tại các đầu mối giao thông liên tỉnh." },
    ],
    updatedAt: "2026-09-05",
    routeSlug: "xe-ghep-hai-duong-hai-phong",
    routeLabel: "Xe Hải Dương - Hải Phòng",
  },
  {
    slug: "xe-hai-duong-di-noi-bai-cho-gia-dinh",
    title: "Xe Hải Dương đi Nội Bài cho gia đình: kinh nghiệm không lo trễ chuyến",
    seoTitle: "Xe Hải Dương đi Nội Bài cho gia đình",
    description: "Kinh nghiệm chọn xe ghép, bao xe 4-7 chỗ từ Hải Dương đi sân bay Nội Bài cho gia đình; cách tính giờ xuất phát, sắp xếp vali và đón trả sảnh ga T1, T2.",
    category: "Xe đi sân bay",
    primaryKeyword: "xe Hải Dương đi Nội Bài cho gia đình",
    secondaryKeywords: ["xe Hải Dương Nội Bài", "bao xe Hải Dương đi Nội Bài", "xe 7 chỗ Hải Dương Nội Bài", "xe Nội Bài về Hải Dương"],
    directAnswer: "Từ Hải Dương đi sân bay Nội Bài khoảng 85 - 105km tùy huyện, thời gian chạy xe trung bình 1h20 - 1h45 qua cao tốc 5B và cầu Nhật Tân hoặc cầu Đông Trù. Với gia đình có trẻ nhỏ, người già hoặc mang từ 2-3 vali ký gửi trở lên, bao xe riêng 4 chỗ hoặc 7 chỗ đón tận nhà chạy thẳng sảnh ga T1/T2 là giải pháp tối ưu nhất: vừa chủ động 100% thời gian theo giờ bay, vừa không lo nhồi nhét hay trễ giờ làm thủ tục.",
    image: {
      src: "/images/san-bay-noi-bai-terminal.jpg",
      alt: "Cảng hàng không quốc tế Nội Bài nơi xe ghép và bao xe Phong Cách đón trả tận sảnh T1 T2",
      caption: "Nhà ga Cảng hàng không quốc tế Nội Bài (Hà Nội), nơi Xe Ghép Phong Cách phục vụ đưa đón tận sảnh ga quốc nội T1 và quốc tế T2.",
    },
    choices: [
      { title: "Bao xe riêng 4 chỗ", bestFor: "Gia đình nhỏ 2-3 người, đi công tác", description: "Xe sedan sạch sẽ, chủ động 100% thời gian xuất phát theo giờ bay, cốp vừa 2-3 vali cỡ trung." },
      { title: "Bao xe riêng 7 chỗ", bestFor: "Gia đình 4-6 người, nhiều đồ đạc", description: "Dòng xe gầm cao Xpander, Veloz thoáng rộng, cốp chứa 4-5 vali lớn và xe đẩy em bé." },
      { title: "Xe ghép Phong Cách", bestFor: "Khách lẻ 1-2 người, 1 vali gọn", description: "Đón tận nhà tại Hải Dương, trả sảnh ga Nội Bài; tiết kiệm chi phí cho người đi một mình." },
      { title: "Taxi tính km", bestFor: "Khách cần đi gấp trong 15-30 phút", description: "Tính tiền theo đồng hồ km (khoảng 1.100.000đ - 1.400.000đ/chuyến), không cần đặt lịch trước." },
    ],
    comparison: {
      title: "Bảng so sánh phương án Hải Dương đi sân bay Nội Bài",
      note: "Giá xe ghép và bao xe của Phong Cách được báo trực tiếp theo chuyến thực tế, cam kết trọn gói và không phát sinh phí cầu đường.",
      rows: [
        { option: "Bao xe riêng 4 chỗ", cost: "Báo giá trực tiếp theo chuyến", time: "1h20 - 1h35 chạy thẳng", convenience: "Đón tận nhà, trả sảnh ga", pickupDropoff: "Hải Dương ⇄ Sảnh ga T1/T2", bestFor: "Cặp đôi, gia đình 2-3 người" },
        { option: "Bao xe riêng 7 chỗ", cost: "Báo giá trực tiếp theo chuyến", time: "1h20 - 1h35 chạy thẳng", convenience: "Cốp rộng, xe thoáng êm", pickupDropoff: "Đón trả tận nơi theo yêu cầu", bestFor: "Gia đình 4-6 người, nhiều vali" },
        { option: "Xe ghép Phong Cách", cost: "Báo giá trực tiếp theo chuyến", time: "1h45 - 2h10", convenience: "Đón tận nơi, ghép hợp lý", pickupDropoff: "Đón trả theo chuyến ghép", bestFor: "Khách lẻ 1 người, ít hành lý" },
        { option: "Taxi tính km", cost: "Khoảng 1.100.000đ - 1.400.000đ", time: "1h30 - 2h", convenience: "Gọi xe nhanh", pickupDropoff: "Theo vị trí gọi xe", bestFor: "Khách đi đột xuất không hẹn trước" },
      ],
    },
    sections: [
      { heading: "Khoảng cách và lộ trình từ Hải Dương đi sân bay Nội Bài", paragraphs: ["Khoảng cách từ trung tâm TP. Hải Dương đến Cảng hàng không quốc tế Nội Bài (huyện Sóc Sơn, Hà Nội) khoảng 85km đến 95km. Đối với các huyện phía Tây như Cẩm Giàng, Bình Giang, khoảng cách khoảng 75 - 85km; trong khi từ Thanh Miện, Ninh Giang hay Kinh Môn có thể lên tới 100 - 115km.", "Hiện nay lộ trình tối ưu nhất là di chuyển qua cao tốc Hà Nội - Hải Phòng (5B), sau đó rẽ theo đường Vành đai 3 hoặc qua cầu Đông Trù / cầu Nhật Tân để nhập vào đường Võ Nguyên Giáp chạy thẳng tới nhà ga sân bay. Thời gian chạy xe ô tô thực tế dao động từ 1 tiếng 20 phút đến 1 tiếng 45 phút."], bullets: ["TP. Hải Dương đi Nội Bài: khoảng 85 - 90km (1h20 - 1h35)", "Huyện Cẩm Giàng, Bình Giang đi Nội Bài: khoảng 75 - 85km (1h15 - 1h30)", "Huyện Kim Thành, Kinh Môn đi Nội Bài: khoảng 95 - 110km (1h35 - 1h50)", "Huyện Thanh Miện, Ninh Giang đi Nội Bài: khoảng 100 - 115km (1h40 - 2h00)"] },
      { heading: "Công thức căn giờ xuất phát theo lịch bay", paragraphs: ["Theo quy định của các hãng hàng không tại Nội Bài (Vietnam Airlines, Vietjet Air, Bamboo Airways), quầy thủ tục nội địa sẽ đóng trước giờ bay 40 phút và ga quốc tế đóng trước 50 phút. Để đảm bảo không gặp rủi ro trễ chuyến, gia đình nên có mặt tại sân bay trước giờ cất cánh tối thiểu 90 đến 120 phút đối với chuyến bay nội địa và 150 đến 180 phút đối với chuyến bay quốc tế.", "Công thức hẹn giờ xe đón: Giờ đón tại nhà = Giờ bay - 120 phút (thời gian check-in và soi chiếu) - 100 phút (thời gian chạy xe dự phòng tắc đường). Ví dụ chuyến bay cất cánh lúc 11h00 trưa, gia đình nên xuất phát từ Hải Dương lúc 07h15 đến 07h30 sáng."], bullets: ["Chuyến bay nội địa (nhà ga T1): có mặt tại sân bay trước 90 - 120 phút", "Chuyến bay quốc tế (nhà ga T2): có mặt tại sân bay trước 150 - 180 phút", "Các khung giờ cao điểm sáng 06h00 - 08h30 hoặc chiều 16h30 - 19h00 nên cộng thêm 20 phút dự phòng"] },
      { heading: "Nhiều vali hành lý nên chọn xe 4 chỗ hay 7 chỗ?", paragraphs: ["Khi đi sân bay theo gia đình, khối lượng hành lý thường rất lớn: từ 2 đến 4 chiếc vali kéo, xe đẩy em bé, thùng xốp quà quê hoặc đồ hải sản đóng thùng. Nếu chọn xe 4 chỗ sedan (Vios, Accent), khoang cốp sau chỉ chứa vừa khoảng 2 vali cỡ trung (size 24) và 1 vali xách tay (size 20).", "Đối với gia đình từ 4 người trở lên mang nhiều hành lý ký gửi, lựa chọn bao xe 7 chỗ gầm cao (Xpander, Veloz, Innova, Fortuner) là giải pháp tối ưu. Khi gập hàng ghế thứ 3, khoang xe có thể chứa thoải mái 5-6 vali cỡ đại cùng nhiều túi đồ phụ trợ mà không gây chật chội không gian ngồi của người thân."], bullets: ["Bao xe 4 chỗ: phù hợp 2-3 người + 2 vali size 24 + 1 balo", "Bao xe 7 chỗ: phù hợp 4-6 người + 4-5 vali lớn + xe đẩy trẻ em", "Xe ghép: chỉ nhận hành lý tiêu chuẩn (1 vali size 20-24 inch cho mỗi khách)"] },
      { heading: "Quy trình đón chiều về từ sân bay Nội Bài về Hải Dương", paragraphs: ["Phong Cách phục vụ đón hai chiều liên tục. Khi hạ cánh tại Nội Bài, hành khách chỉ cần mở điện thoại liên hệ với tài xế đã được sắp xếp trước. Bác tài sẽ thông báo vị trí đỗ xe tại sảnh đón tầng 1 (cột đón khách nhà ga T1 hoặc T2) và hỗ trợ bê hành lý lên xe.", "Dù bạn hạ cánh vào đêm muộn (23h00 - 02h00 sáng) hay sáng sớm, xe riêng vẫn luôn túc trực đúng giờ hẹn, đưa gia đình bạn về trả tận cửa nhà tại Hải Dương mà không phải loay hoay tìm taxi giữa đêm."], bullets: ["Cung cấp mã chuyến bay và giờ hạ cánh dự kiến khi đặt xe", "Tài xế chủ động theo dõi bảng điện tử để cập nhật giờ hạ cánh thực tế", "Đón tận sảnh đến tầng 1 ga quốc nội T1 hoặc quốc tế T2"] },
      { heading: "Chính sách đặt trước 0đ cọc và hỗ trợ dời giờ khi chuyến bay bị delay", paragraphs: ["Một trong những nỗi lo lớn nhất của hành khách đi máy bay là tình trạng chuyến bay bị hoãn (delay) hoặc đổi lịch đột xuất. Tại Phong Cách, chúng tôi áp dụng chính sách đặt trước 0đ cọc: khách hàng không phải chuyển khoản trước bất kỳ đồng nào.", "Nếu hãng bay thông báo hoãn chuyến, bạn chỉ cần nhắn tin báo lại mã chuyến bay mới, nhà xe sẽ tự động điều chỉnh giờ đón hoàn toàn miễn phí, không phạt hủy chuyến và không tăng giá vô lý."], bullets: ["Đặt trước 0đ cọc, thanh toán sau khi về đến nhà", "Tự động đổi giờ đón nếu chuyến bay bị delay mà không tính thêm phí", "Hủy chuyến trước không mất tiền cọc, bảo đảm quyền lợi tối đa cho khách hàng"] },
    ],
    checklist: ["Mã số chuyến bay và hãng hàng không", "Giờ cất cánh (chiều đi) hoặc giờ hạ cánh (chiều về)", "Nhà ga xuất phát hoặc đến (ga quốc nội T1 hay quốc tế T2)", "Số lượng người lớn và trẻ nhỏ", "Số lượng và kích thước vali hành lý ký gửi", "Địa chỉ đón tận nơi cụ thể tại Hải Dương"],
    faq: [
      { q: "Từ Hải Dương đi sân bay Nội Bài mất bao lâu?", a: "Thời gian di chuyển trung bình từ 1 tiếng 20 phút đến 1 tiếng 45 phút tùy điểm đón tại TP Hải Dương hay các huyện lân cận và lộ trình di chuyển." },
      { q: "Giá bao xe từ Hải Dương đi Nội Bài là bao nhiêu?", a: "Giá chuyến bao xe 4 chỗ và 7 chỗ được Phong Cách báo trực tiếp theo địa chỉ đón cụ thể tại Hải Dương khi bạn liên hệ hotline 0987 663 883. Chi phí luôn trọn gói và không phát sinh phí cầu đường." },
      { q: "Chuyến bay đêm muộn hoặc sáng sớm nhà xe có phục vụ không?", a: "Có. Phong Cách phục vụ đưa đón sân bay Nội Bài 24/7, nhận các chuyến đón sáng sớm từ 03h00 - 05h00 sáng và đón đêm muộn hạ cánh sau 23h00." },
      { q: "Nếu chuyến bay bị delay thì nhà xe có chờ không?", a: "Có. Nhà xe theo dõi mã chuyến bay trên hệ thống hàng không và sẽ đón đúng giờ bạn thực tế hạ cánh mà không phát sinh chi phí chờ đợi." },
      { q: "Đặt xe đi sân bay Nội Bài có phải đặt cọc trước không?", a: "Không. Toàn bộ chuyến đi đều áp dụng chính sách đặt trước 0đ cọc, khách hàng chỉ thanh toán tiền mặt hoặc chuyển khoản sau khi chuyến đi hoàn thành an toàn." },
    ],
    sources: [
      { title: "Thông tin Cảng hàng không quốc tế Nội Bài", publisher: "Tổng công ty Cảng hàng không Việt Nam (ACV)", url: "https://noibaiairport.vn/", checkedAt: "2026-09-05", supports: "Sơ đồ luồng di chuyển đón trả khách tại nhà ga hành khách T1 và T2 sân bay Nội Bài." },
      { title: "Hướng dẫn làm thủ tục chuyến bay nội địa và quốc tế", publisher: "Vietnam Airlines", url: "https://www.vietnamairlines.com/", checkedAt: "2026-09-05", supports: "Quy định thời gian đóng quầy làm thủ tục và thời gian có mặt trước giờ bay." },
      { title: "Quy hoạch các tuyến giao thông kết nối sân bay Nội Bài", publisher: "Bộ Giao thông Vận tải", url: "https://mt.gov.vn/", checkedAt: "2026-09-05", supports: "Thông số tuyến cao tốc và các cầu vượt sông Hồng kết nối về sân bay Nội Bài." },
    ],
    updatedAt: "2026-09-05",
    routeSlug: "xe-hai-duong-noi-bai",
    routeLabel: "Xe Hải Dương - Nội Bài",
  },
  {
    slug: "xe-ha-noi-ve-hai-duong-chon-phuong-tien-nao",
    title: "Xe Hà Nội về Hải Dương: chọn xe ghép, xe khách hay tàu hỏa?",
    seoTitle: "Xe Hà Nội về Hải Dương",
    description: "So sánh các cách đi từ Hà Nội về Hải Dương: xe ghép đón tận cửa, xe khách bến Gia Lâm/Giáp Bát, tàu hỏa và bao xe 4-7 chỗ; mẹo chọn xe sau khám bệnh, tan làm, về quê.",
    category: "So sánh phương tiện",
    primaryKeyword: "xe Hà Nội về Hải Dương",
    secondaryKeywords: ["xe Hà Nội Hải Dương", "xe ghép Hà Nội Hải Dương", "xe từ Hà Nội về Hải Dương", "xe Hà Nội về Hải Dương đón tận nơi"],
    directAnswer: "Từ Hà Nội về Hải Dương khoảng 55 - 75km, thời gian di chuyển 50 - 70 phút qua cao tốc 5B. Nếu ở gần ga Hà Nội/Long Biên hoặc bến xe Gia Lâm/Giáp Bát và ít đồ đạc, đi tàu hỏa hoặc xe khách là cách tiết kiệm vé nhất. Nếu bạn vừa khám bệnh xong tại các bệnh viện lớn (Bạch Mai, Việt Đức, K Tân Triều...), có nhiều đồ đạc, quà cáp hoặc muốn được đón tận nơi tại các quận nội thành Hà Nội trả tận cửa nhà ở Hải Dương, xe ghép hoặc bao xe 4-7 chỗ giúp tiết kiệm 1-2 lần tiền bắt taxi trung chuyển.",
    image: {
      src: "/images/cao-toc-ha-noi-hai-phong.jpg",
      alt: "Xe ghép Hà Nội về Hải Dương chạy cao tốc 5B đón tận cửa trả tận nhà chỉ 50 phút",
      caption: "Tuyến cao tốc Hà Nội - Hải Phòng (5B), lộ trình êm ái giúp xe ghép Phong Cách đưa khách từ Hà Nội về Hải Dương nhanh chóng.",
    },
    choices: [
      { title: "Xe ghép Phong Cách", bestFor: "Khách lẻ, người đi khám bệnh, người nhiều đồ", description: "Đón tận nơi tại các quận nội thành Hà Nội, trả tận nhà tại các huyện Hải Dương; đặt trước 0đ cọc." },
      { title: "Xe khách bến liên tỉnh", bestFor: "Khách ở gần bến xe Gia Lâm, Giáp Bát", description: "Bắt xe tại bến về bến xe Hải Dương; cần tự đi xe ôm/taxi ra bến và từ bến về nhà." },
      { title: "Tàu hỏa Hà Nội - Hải Dương", bestFor: "Khách ở khu vực Hoàn Kiếm, Long Biên", description: "Chạy đúng giờ từ ga Hà Nội hoặc Long Biên về ga Hải Dương; tránh ùn tắc giờ cao điểm." },
      { title: "Bao xe riêng 4-7 chỗ", bestFor: "Gia đình về quê cuối tuần, nhóm công tác", description: "Xe riêng 100%, chủ động hoàn toàn giờ xuất phát, đón trả nhiều điểm theo yêu cầu." },
    ],
    comparison: {
      title: "Bảng so sánh phương tiện chiều Hà Nội về Hải Dương",
      note: "Giá vé xe khách và tàu hỏa mang tính tham khảo. Giá xe ghép và bao xe của Phong Cách được báo trực tiếp theo điểm đón trả thực tế.",
      rows: [
        { option: "Xe ghép Phong Cách", cost: "Báo giá trực tiếp theo chuyến", time: "50 - 60 phút (cao tốc 5B)", convenience: "Đón tận nơi Hà Nội, trả tận nhà", pickupDropoff: "Cửa nhà / Cổng viện ⇄ Tận nhà Hải Dương", bestFor: "Người khám bệnh, mang vali, đi một mình" },
        { option: "Xe khách tuyến bến", cost: "60.000đ - 90.000đ/vé", time: "1h30 - 2h (QL5 cũ)", convenience: "Phải tự di chuyển ra bến xe", pickupDropoff: "Bến Gia Lâm/Giáp Bát ⇄ Bến Hải Dương", bestFor: "Sinh viên, người đi ít đồ ở gần bến" },
        { option: "Tàu hỏa", cost: "70.000đ - 100.000đ/vé", time: "1h15 - 1h30", convenience: "Đúng giờ, tránh kẹt xe", pickupDropoff: "Ga Hà Nội/Long Biên ⇄ Ga Hải Dương", bestFor: "Khách ở gần ga trung tâm" },
        { option: "Bao xe riêng 4-7 chỗ", cost: "Báo giá trực tiếp theo chuyến", time: "50 - 60 phút chạy thẳng", convenience: "Riêng tư 100%, tự chọn giờ", pickupDropoff: "Đón trả mọi điểm theo yêu cầu", bestFor: "Gia đình về quê, nhóm đông, nhiều hành lý" },
      ],
    },
    sections: [
      { heading: "Chiều Hà Nội về Hải Dương: Những bất tiện khi đi xe truyền thống", paragraphs: ["Bắt xe từ Hà Nội về quê Hải Dương vào buổi chiều tối hoặc cuối tuần thường là nỗi ám ảnh của nhiều người. Tại các bến xe như Giáp Bát, Gia Lâm hay Nước Ngầm, tình trạng chen chúc, cò mồi chèo kéo và xe chạy rùa bò lòng vòng gom khách trên đường Giải Phóng, Nguyễn Văn Cừ diễn ra phổ biến.", "Đặc biệt đối với bệnh nhân và người nhà vừa trải qua một ngày dài mệt mỏi khám bệnh tại các bệnh viện lớn, việc phải xách vác túi thuốc, kết quả chụp chiếu ra bến xe bắt xe khách là vô cùng vất vả."], bullets: ["Tránh được cảnh chen lấn, xô đẩy tại các bến xe đông đúc", "Không bị xe dù bắt khách dọc đường kéo dài thời gian di chuyển", "Bác tài đón tận cổng bệnh viện hoặc cơ quan đưa thẳng về nhà"] },
      { heading: "Điểm đón linh hoạt tại các quận nội thành Hà Nội", paragraphs: ["Xe Ghép Phong Cách nhận đón khách tại hầu hết các quận nội thành Hà Nội: Cầu Giấy, Nam Từ Liêm, Bắc Từ Liêm, Thanh Xuân, Đống Đa, Hai Bà Trưng, Ba Đình, Hoàn Kiếm, Hoàng Mai và Long Biên.", "Đặc biệt, xe có các chuyến đón cố định tại cổng các bệnh viện lớn (Bạch Mai, Việt Đức, K Tân Triều, 108, Tai Mũi Họng, Nhi Trung ương) từ 10h00 trưa đến 17h00 chiều, giúp bà con khám xong là có xe đón về ngay mà không phải chờ đợi lâu."], bullets: ["Đón tại các quận trung tâm và trường đại học lớn", "Đón trực tiếp tại sảnh hoặc cổng các bệnh viện tuyến đầu", "Hẹn giờ đón linh hoạt theo tiến độ khám bệnh thực tế của khách"] },
      { heading: "Lộ trình cao tốc 5B kết nối nhanh về các huyện Hải Dương", paragraphs: ["Từ các điểm đón tại Hà Nội, xe nhanh chóng nhập vào đường Vành đai 3 hoặc cầu Vĩnh Tuy, Cổ Linh để đi thẳng vào cao tốc Hà Nội - Hải Phòng (5B). Tuyến cao tốc hiện đại 6 làn xe giúp rút ngắn thời gian di chuyển về Hải Dương chỉ còn khoảng 50 phút.", "Tùy thuộc vào địa chỉ nhà của hành khách, xe sẽ rẽ xuống các nút giao phù hợp: nút giao Gia Lộc (về TP Hải Dương, Tứ Kỳ, Gia Lộc, Ninh Giang, Thanh Miện), nút giao Bình Giang hoặc nút giao Thanh Hà."], bullets: ["Nút giao Bình Giang: phục vụ Bình Giang, Cẩm Giàng", "Nút giao Gia Lộc: phục vụ TP Hải Dương, Gia Lộc, Tứ Kỳ, Ninh Giang", "Nút giao Thanh Hà: phục vụ Thanh Hà, Kim Thành"] },
      { heading: "Về quê cuối tuần theo gia đình: Khi nào nên bao xe riêng 4-7 chỗ?", paragraphs: ["Vào chiều thứ Sáu hoặc sáng thứ Bảy, nhu cầu cả gia đình từ Hà Nội về quê Hải Dương thăm ông bà, dự đám cưới hoặc ăn giỗ rất cao. Khi đi cùng trẻ nhỏ, người cao tuổi và mang theo nhiều đồ đạc, vali, bao xe riêng 4 hoặc 7 chỗ là phương án hoàn hảo nhất.", "Chi phí bao trọn chuyến tính theo đầu người rất hợp lý, nhưng gia đình được hưởng trọn vẹn sự thoải mái: xe riêng sạch sẽ, không mùi thuốc lá, chủ động hoàn toàn giờ xuất phát và có thể dừng nghỉ dọc đường theo ý muốn."], bullets: ["Xe riêng tiện nghi, máy lạnh mát mẻ, tài xế lái xe điềm đạm", "Khoang cốp rộng rãi chứa thoải mái vali và quà cáp", "Đón trả nhiều điểm nếu các thành viên ở các địa chỉ khác nhau"] },
      { heading: "Chính sách đặt trước 0đ cọc và thanh toán sau chuyến", paragraphs: ["Một trong những ưu điểm lớn nhất của Xe Ghép Phong Cách là chính sách đặt trước 0đ cọc: quý khách hoàn toàn không phải chuyển khoản tiền cọc trước khi lên xe.", "Khách hàng chỉ thanh toán sau khi xe đưa về đến tận cổng nhà an toàn. Trường hợp bạn có việc bận đột xuất hoặc giờ khám bệnh kéo dài, chỉ cần gọi điện báo sớm cho nhà xe để điều chỉnh chuyến mà không mất bất kỳ khoản phí phạt nào."], bullets: ["Đặt xe trước 0đ cọc, thanh toán bằng tiền mặt hoặc chuyển khoản sau chuyến", "Hỗ trợ đổi giờ đón linh hoạt nếu giờ khám bệnh bị kéo dài", "Cam kết giá báo trọn gói, tuyệt đối không phụ thu dọc đường"] },
    ],
    checklist: ["Địa chỉ đón cụ thể tại Hà Nội (số nhà, ngõ phố, tên cổng viện)", "Địa chỉ trả tận nơi tại Hải Dương (xã, huyện, thị trấn)", "Khung giờ mong muốn xuất phát", "Số lượng người đi cùng", "Khối lượng hành lý mang theo", "Nhu cầu đi xe ghép hay bao trọn xe"],
    faq: [
      { q: "Xe từ Hà Nội về Hải Dương có đón tận nơi tại các quận không?", a: "Có. Phong Cách nhận đón tận nơi tại các quận nội thành Hà Nội như Cầu Giấy, Đống Đa, Thanh Xuân, Hai Bà Trưng, Hoàn Kiếm, Hoàng Mai... và đưa về tận nhà tại Hải Dương." },
      { q: "Giá xe ghép Hà Nội về Hải Dương là bao nhiêu?", a: "Giá chuyến được báo trực tiếp theo địa chỉ đón trả cụ thể khi bạn liên hệ hotline 0987 663 883. Chi phí luôn trọn gói và minh bạch, không phát sinh phụ phí dọc đường." },
      { q: "Khám bệnh xong lúc trưa hoặc chiều có xe về ngay không?", a: "Có. Nhà xe có các chuyến chạy liên tục từ trưa đến tối, nhận đón bệnh nhân và người nhà tại cổng các bệnh viện lớn ở Hà Nội đưa về Hải Dương trong ngày." },
      { q: "Đi cùng gia đình có trẻ nhỏ có bao xe riêng được không?", a: "Có. Bạn có thể chọn bao xe riêng 4 chỗ hoặc 7 chỗ để gia đình có không gian riêng tư và chủ động hoàn toàn giờ xuất phát." },
      { q: "Đặt xe chiều Hà Nội về Hải Dương có phải cọc tiền trước không?", a: "Không. Phong Cách áp dụng chính sách đặt trước 0đ cọc, khách hàng chỉ thanh toán tiền sau khi xe đưa về đến tận nhà an toàn." },
    ],
    sources: [
      { title: "Báo cáo lưu lượng phương tiện cửa ngõ phía Đông Hà Nội", publisher: "Sở Giao thông Vận tải Hà Nội", url: "https://sogtvt.hanoi.gov.vn/", checkedAt: "2026-09-05", supports: "Thống kê mật độ giao thông và phương án phân luồng xe khách liên tỉnh hướng Hà Nội đi Hải Dương." },
      { title: "Thông tin vận hành đường cao tốc Hà Nội - Hải Phòng", publisher: "Tổng công ty Phát triển hạ tầng và Đầu tư tài chính Việt Nam (VIDIFI)", url: "https://vidifi.vn/", checkedAt: "2026-09-05", supports: "Thông số các nút giao kết nối cao tốc 5B về các huyện thuộc tỉnh Hải Dương." },
      { title: "Lịch trình tàu hỏa chiều Hà Nội về Hải Dương", publisher: "Tổng công ty Đường sắt Việt Nam", url: "https://dsvn.vn/", checkedAt: "2026-09-05", supports: "Lịch trình các chuyến tàu xuất phát từ ga Hà Nội và ga Long Biên về ga Hải Dương." },
    ],
    updatedAt: "2026-09-05",
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
    seoTitle: "Đi sân bay Cát Bi từ Hải Dương",
    description: "So sánh xe ghép, bao xe 4-7 chỗ và taxi từ Hải Dương đi sân bay Cát Bi (Hải Phòng); kinh nghiệm căn giờ bay, đón sảnh ga đến không lo trễ chuyến.",
    category: "Xe đi sân bay",
    primaryKeyword: "xe Hải Dương đi Cát Bi",
    secondaryKeywords: ["xe ghép Hải Dương Cát Bi", "xe Hải Dương sân bay Cát Bi", "xe Cát Bi về Hải Dương"],
    directAnswer: "Từ Hải Dương đến sân bay Cát Bi khoảng 45 - 60km, thời gian chạy xe trung bình 50 - 75 phút qua QL5 hoặc cao tốc 5B. Khách lẻ đi 1-2 người có thể chọn xe ghép (từ 300.000đ/người) để tối ưu chi phí. Gia đình có người già, trẻ nhỏ hoặc mang nhiều vali ký gửi nên chọn bao xe 4 chỗ (từ 600.000đ) hoặc 7 chỗ (từ 750.000đ) đón tận nhà đi thẳng sân bay, chủ động giờ giấc và đảm bảo không trễ chuyến bay.",
    image: {
      src: "/images/san-bay-cat-bi-terminal.jpg",
      alt: "Cảng hàng không quốc tế Cát Bi Hải Phòng nơi xe ghép Phong Cách đón trả khách tận sảnh 2 chiều",
      caption: "Nhà ga Cảng hàng không quốc tế Cát Bi (Hải Phòng), điểm đón trả khách tận sảnh của các chuyến xe ghép và bao xe Hải Dương.",
    },
    choices: [
      { title: "Xe ghép Phong Cách", bestFor: "Khách lẻ 1-2 người, ít hành lý", description: "Đón tận nhà tại Hải Dương, trả thẳng sảnh ga Cát Bi; tiết kiệm chi phí cho người đi một mình." },
      { title: "Bao xe riêng 4 chỗ", bestFor: "Gia đình nhỏ 2-3 người, đi công tác", description: "Chủ động 100% thời gian xuất phát theo giờ bay, không gian riêng tư, cốp vừa 2-3 vali." },
      { title: "Bao xe riêng 7 chỗ", bestFor: "Đoàn 4-6 người, nhiều đồ ký gửi", description: "Xe gầm cao êm ái, khoang hành lý rộng rãi, phù hợp cho cả gia đình đi du lịch dài ngày." },
      { title: "Taxi truyền thống", bestFor: "Cần xe gấp trong 15-30 phút", description: "Tính tiền theo đồng hồ km (khoảng 650.000đ - 850.000đ), không cần đặt lịch trước." },
    ],
    comparison: {
      title: "Bảng so sánh phương tiện Hải Dương đi sân bay Cát Bi",
      note: "Các mức giá của Phong Cách là giá sàn bắt đầu (VERIFIED_FROM) đã được xác nhận. Giá thực tế phụ thuộc địa chỉ đón tại Hải Dương và khung giờ di chuyển.",
      rows: [
        { option: "Xe ghép Phong Cách", cost: "Từ 300.000đ/người", time: "50 - 75 phút", convenience: "Đón tận nhà, trả sảnh ga", pickupDropoff: "Hải Dương ⇄ Sảnh ga Cát Bi", bestFor: "Khách lẻ, 1 vali tiêu chuẩn" },
        { option: "Bao xe riêng 4 chỗ", cost: "Từ 600.000đ/chuyến", time: "50 - 60 phút chạy thẳng", convenience: "Riêng tư, đúng giờ hẹn", pickupDropoff: "Đón tận nơi mọi huyện", bestFor: "Gia đình nhỏ, khách công tác" },
        { option: "Bao xe riêng 7 chỗ", cost: "Từ 750.000đ/chuyến", time: "50 - 60 phút chạy thẳng", convenience: "Cốp rộng, xe thoáng êm", pickupDropoff: "Đón tận nơi theo yêu cầu", bestFor: "Đoàn 4-6 người, nhiều vali" },
        { option: "Taxi tính km", cost: "Khoảng 650.000đ - 850.000đ", time: "60 - 75 phút", convenience: "Bắt xe nhanh", pickupDropoff: "Theo vị trí gọi xe", bestFor: "Khách đi đột xuất không hẹn trước" },
      ],
    },
    sections: [
      { heading: "Quãng đường và thời gian di chuyển từ Hải Dương đến Cát Bi", paragraphs: ["Khoảng cách từ TP. Hải Dương đến Cảng hàng không quốc tế Cát Bi (quận Hải An, Hải Phòng) khoảng 45km đến 55km tùy theo lộ trình di chuyển qua Quốc lộ 5 cũ hoặc đường tỉnh kết nối cao tốc Hà Nội - Hải Phòng. Đối với các huyện như Kim Thành, Kinh Môn, khoảng cách sẽ ngắn hơn (khoảng 35 - 45km), trong khi từ Thanh Miện, Ninh Giang hay Cẩm Giàng có thể lên tới 65 - 75km.", "Thời gian chạy xe ô tô thực tế dao động từ 50 phút đến 1 tiếng 20 phút. Để đảm bảo an toàn, hành khách nên tính thêm khoảng dự phòng 15 - 20 phút đề phòng tình huống mật độ phương tiện đông đúc tại các nút giao cầu vượt."], bullets: ["TP. Hải Dương đi Cát Bi: khoảng 45 - 50km (khoảng 50 - 60 phút)", "Huyện Kim Thành, Kinh Môn đi Cát Bi: khoảng 35 - 45km (khoảng 40 - 50 phút)", "Huyện Cẩm Giàng, Bình Giang đi Cát Bi: khoảng 60 - 70km (khoảng 70 - 80 phút)", "Huyện Thanh Miện, Ninh Giang đi Cát Bi: khoảng 65 - 75km (khoảng 75 - 90 phút)"] },
      { heading: "Quy tắc căn giờ xuất phát theo lịch bay", paragraphs: ["Theo quy định hàng không, với các chuyến bay nội địa (Vietnam Airlines, Vietjet Air, Bamboo Airways), quầy thủ tục sẽ đóng trước giờ cất cánh 40 phút. Do đó, bạn bắt buộc phải có mặt tại sảnh sân bay trước giờ bay tối thiểu 90 đến 120 phút.", "Công thức tính giờ xuất phát an toàn: Giờ đón tại nhà = Giờ bay - 90 phút (thời gian làm thủ tục) - Thời gian chạy xe (khoảng 60 phút). Ví dụ: chuyến bay cất cánh lúc 10h00 sáng, bạn nên hẹn nhà xe đón tại Hải Dương lúc 07h00 đến 07h15 sáng."], bullets: ["Chuyến bay nội địa: có mặt tại sân bay trước 90 - 120 phút", "Chuyến bay quốc tế: có mặt tại sân bay trước 150 - 180 phút", "Hành khách có hành lý ký gửi hoặc đi cùng trẻ em nên cộng thêm 20 phút"] },
      { heading: "Nhiều hành lý nên chọn xe ghép hay bao xe riêng?", paragraphs: ["Nếu đi 1 người với 1 vali size 20 hoặc 24 inch cùng balo cá nhân, xe ghép là lựa chọn kinh tế nhất. Tuy nhiên, nếu bạn mang theo từ 2 vali lớn trở lên, đồ cồng kềnh hoặc thùng xốp đặc sản, bao xe riêng 4 hoặc 7 chỗ là giải pháp cần thiết.", "Khoang cốp của xe 7 chỗ (Innova, Xpander, Veloz, Fortuner) có thể chứa thoải mái 4-5 vali lớn cùng nhiều kiện hành lý xách tay, tránh tình trạng hành lý bị chèn ép hoặc không đủ chỗ trên xe ghép chung."], bullets: ["Xe ghép: phù hợp 1 khách + 1 vali tiêu chuẩn + 1 balo", "Bao xe 4 chỗ: phù hợp 2-3 khách + 2-3 vali cỡ trung", "Bao xe 7 chỗ: phù hợp 4-6 khách + 4-5 vali lớn và xe đẩy em bé"] },
      { heading: "Quy trình đón chiều về từ sân bay Cát Bi về Hải Dương", paragraphs: ["Phong Cách phục vụ đón hai chiều. Khi hạ cánh tại Cát Bi, bạn chỉ cần mở điện thoại liên hệ với tài xế đã được hẹn trước. Bác tài sẽ đón bạn ngay tại sảnh ga đến (tầng 1) và hỗ trợ xếp hành lý lên xe.", "Khách hàng không phải kéo vali ra ngoài đường lớn tìm taxi hay chờ đợi xe buýt. Xe sẽ đưa bạn và gia đình về trả tận cửa nhà tại bất kỳ huyện, xã nào trên địa bàn tỉnh Hải Dương."], bullets: ["Cung cấp mã chuyến bay và giờ hạ cánh dự kiến khi đặt xe", "Bật điện thoại ngay sau khi máy bay hạ cánh an toàn", "Tài xế đón tại cửa sảnh ga đến, hỗ trợ xách hành lý"] },
      { heading: "Chính sách đặt trước 0đ cọc và thanh toán sau chuyến", paragraphs: ["Một trong những lo lắng lớn nhất của hành khách khi đặt xe đi sân bay là sợ bị ép cọc tiền trước rồi bị trễ giờ hoặc hủy chuyến. Tại Xe Ghép Phong Cách, chúng tôi áp dụng chính sách: đặt trước 0đ cọc, thanh toán sau khi hoàn thành hành trình an toàn.", "Trường hợp chuyến bay bị delay hoặc thay đổi giờ cất cánh/hạ cánh, hành khách chỉ cần thông báo sớm cho nhà xe để điều chỉnh giờ đón mà không mất bất kỳ khoản phí phạt nào."], bullets: ["Đặt xe trước 0đ cọc, không lo rủi ro mất tiền", "Chỉ thanh toán tiền mặt hoặc chuyển khoản sau khi đến nơi", "Hỗ trợ đổi giờ đón linh hoạt nếu chuyến bay bị delay"] },
    ],
    checklist: ["Mã số chuyến bay và hãng bay", "Giờ cất cánh (chiều đi) hoặc giờ hạ cánh (chiều về)", "Số lượng người lớn và trẻ em", "Số kiện và kích thước vali hành lý", "Địa chỉ đón/trả cụ thể tại Hải Dương", "Nhu cầu đi ghép hay bao trọn xe"],
    faq: [
      { q: "Từ Hải Dương đi sân bay Cát Bi mất bao lâu?", a: "Thời gian di chuyển trung bình từ 50 đến 75 phút tùy thuộc vào điểm đón tại TP Hải Dương hay các huyện lân cận." },
      { q: "Giá xe ghép Hải Dương đi Cát Bi là bao nhiêu?", a: "Giá xe ghép khởi điểm từ 300.000đ/người. Bao xe 4 chỗ từ 600.000đ/chuyến và bao xe 7 chỗ từ 750.000đ/chuyến. Giá thực tế phụ thuộc địa chỉ đón cụ thể." },
      { q: "Có đón khách từ sân bay Cát Bi về Hải Dương không?", a: "Có. Nhà xe đón hai chiều, đón tận sảnh ga đến Cát Bi đưa về tận nhà tại Hải Dương. Bạn chỉ cần báo mã chuyến bay khi đặt." },
      { q: "Nếu chuyến bay bị delay thì có bị tính phí chờ không?", a: "Không. Khi bạn cung cấp mã chuyến bay, nhà xe sẽ chủ động theo dõi giờ hạ cánh thực tế để đón đúng giờ mà không phát sinh phụ phí vô lý." },
      { q: "Đặt xe đi sân bay Cát Bi có cần đặt cọc trước không?", a: "Không cần đặt cọc. Phong Cách áp dụng chính sách đặt trước 0đ cọc, thanh toán sau chuyến đi bằng tiền mặt hoặc chuyển khoản." },
    ],
    sources: [
      { title: "Thông tin Cảng hàng không quốc tế Cát Bi", publisher: "Tổng công ty Cảng hàng không Việt Nam (ACV)", url: "https://catbiairport.vn/", checkedAt: "2026-09-03", supports: "Vị trí địa lý sân bay Cát Bi tại quận Hải An, Hải Phòng và quy trình nhà ga đón trả khách." },
      { title: "Cẩm nang di chuyển sân bay Cát Bi", publisher: "Vietnam Airlines", url: "https://www.vietnamairlines.com/go/vi/plan-book/travel/travel-guide/san-bay-cat-bi", checkedAt: "2026-09-03", supports: "Hướng dẫn thời gian làm thủ tục chuyến bay nội địa và quốc tế tại Cát Bi." },
      { title: "Hạ tầng kết nối Hải Dương - Hải Phòng", publisher: "Cổng thông tin điện tử thành phố Hải Phòng", url: "https://haiphong.gov.vn/co-so-ha-tang/co-so-ha-tang-ky-thuat-thanh-pho-hai-phong-743051", checkedAt: "2026-09-03", supports: "Tuyến giao thông kết nối liên tỉnh giữa Hải Dương và Hải Phòng." },
    ],
    updatedAt: "2026-09-03",
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
