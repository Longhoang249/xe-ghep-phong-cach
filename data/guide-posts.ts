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
    title: "Cách đặt xe ghép Hải Dương - Quảng Ninh: 3 bước nhanh, không lo cọc ảo",
    seoTitle: "Cách đặt xe ghép Hải Dương Quảng Ninh",
    description: "Hướng dẫn 3 bước đặt xe ghép, bao xe Hải Dương đi Quảng Ninh (Hạ Long, Bãi Cháy, Cẩm Phả, Uông Bí); chính sách đặt trước 0đ cọc và đón trả tận nhà.",
    category: "Hướng dẫn đặt xe",
    primaryKeyword: "cách đặt xe ghép Hải Dương Quảng Ninh",
    secondaryKeywords: ["đặt xe Hải Dương Quảng Ninh", "gọi xe ghép Hải Dương Quảng Ninh", "xe Quảng Ninh về Hải Dương", "xe ghép Hạ Long Hải Dương"],
    directAnswer: "Để đặt xe ghép Hải Dương - Quảng Ninh nhanh nhất, bạn chỉ cần gọi điện hoặc nhắn Zalo hotline 0987 663 883 cung cấp địa chỉ đón tại Hải Dương, điểm trả tại Quảng Ninh (Hạ Long, Bãi Cháy, Uông Bí, Cẩm Phả), số lượng khách và vali. Phong Cách áp dụng chính sách độc quyền đặt trước 0đ cọc: xe đón tận ngõ đưa về tận nơi, chỉ thanh toán sau khi kết thúc chuyến đi an toàn, giá xe ghép khởi điểm từ 250.000đ/người.",
    image: {
      src: "/images/cau-bach-dang-hai-phong-quang-ninh.jpg",
      alt: "Lộ trình vượt cầu Bạch Đằng sang cao tốc Hạ Long Quảng Ninh của xe ghép Phong Cách",
      caption: "Cầu Bạch Đằng nối Hải Phòng và Quảng Ninh, cung đường cao tốc giúp xe ghép Phong Cách rút ngắn thời gian di chuyển chỉ còn 1h15 - 1h45.",
    },
    choices: [
      { title: "Gọi hotline trực tiếp", bestFor: "Cần xe gấp hoặc đi trong ngày", description: "Hotline 0987 663 883 hỗ trợ 24/7, xác nhận tình trạng xe và điểm đón chỉ trong 2 phút." },
      { title: "Nhắn tin Zalo", bestFor: "Gửi định vị nhà và ảnh vali", description: "Gửi vị trí đón trả chính xác qua Zalo giúp tài xế điều hướng vào tận cổng nhà." },
      { title: "Bao xe riêng 4-7 chỗ", bestFor: "Gia đình đi du lịch Hạ Long, công tác", description: "Chủ động hoàn toàn giờ xuất phát, dừng nghỉ ngắm cảnh hoặc ăn uống tùy thích." },
      { title: "Xe ghép chuyến tiện lợi", bestFor: "Khách đi lẻ 1-2 người tiết kiệm chi phí", description: "Ghép khách văn minh cùng cung đường, không nhồi nhét, giá khởi điểm từ 250.000đ." },
    ],
    comparison: {
      title: "Bảng tham khảo lộ trình Hải Dương đi các điểm tại Quảng Ninh",
      note: "Giá xe ghép khởi điểm từ 250.000đ/người cho chặng cơ bản (Hạ Long / Bãi Cháy). Các điểm xa hơn như Cẩm Phả, Vân Đồn, Móng Cái được báo giá trọn gói trực tiếp.",
      rows: [
        { option: "Hải Dương ⇄ Hạ Long / Bãi Cháy", cost: "Từ 250.000đ/người (Bao xe: từ 900.000đ)", time: "1h15 - 1h30 (cao tốc 5B - Bạch Đằng)", convenience: "Đón tận nhà, trả khách sạn / bến tàu", pickupDropoff: "Tận nơi Hải Dương ⇄ TP Hạ Long", bestFor: "Khách du lịch, công tác, thăm thân" },
        { option: "Hải Dương ⇄ TP Uông Bí (Yên Tử)", cost: "Báo giá trực tiếp theo chuyến", time: "50 - 70 phút (qua QL10 / QL18)", convenience: "Đón trả tận nơi", pickupDropoff: "Tận nơi Hải Dương ⇄ TP Uông Bí", bestFor: "Khách đi chùa Yên Tử, công tác" },
        { option: "Hải Dương ⇄ TP Cẩm Phả", cost: "Báo giá trực tiếp theo chuyến", time: "1h45 - 2h10 (cao tốc)", convenience: "Đón trả tận cửa", pickupDropoff: "Hải Dương ⇄ Cẩm Phả", bestFor: "Người dân về quê, đi công việc" },
        { option: "Hải Dương ⇄ Vân Đồn / Sân bay Vân Đồn", cost: "Báo giá trực tiếp theo chuyến", time: "2h00 - 2h30", convenience: "Đón trả tận sảnh", pickupDropoff: "Hải Dương ⇄ Huyện Vân Đồn", bestFor: "Khách đi cảng Ao Tiên / bay Vân Đồn" },
      ],
    },
    sections: [
      { heading: "Bước 1: Chuẩn bị thông tin điểm đón trả chi tiết", paragraphs: ["Để việc điều xe diễn ra nhanh chóng và chính xác nhất, khách hàng nên chuẩn bị sẵn địa chỉ đón cụ thể (xã, huyện, ngõ phố tại Hải Dương) và điểm đến chi tiết tại Quảng Ninh.", "Tỉnh Quảng Ninh có địa bàn trải dài ven biển với nhiều thành phố khác nhau (Uông Bí, Hạ Long, Cẩm Phả, Móng Cái). Việc cung cấp rõ khách sạn ở Bãi Cháy, Hòn Gai hay cảng tàu Tuần Châu giúp bác tài chọn tuyến đường cao tốc tối ưu nhất."], bullets: ["Địa chỉ đón cụ thể tại Hải Dương (ngõ ngách xe vào được không)", "Điểm trả tại Quảng Ninh (tên khách sạn, bãi tắm hoặc cơ quan)", "Thời gian mong muốn có mặt tại Quảng Ninh", "Số lượng người đi cùng và số kiện vali kéo"] },
      { heading: "Bước 2: Lựa chọn hình thức xe ghép hay bao xe riêng", paragraphs: ["Nếu đi một mình hoặc đi đôi với hành lý gọn gàng, xe ghép là lựa chọn tiết kiệm nhất với chi phí chỉ từ 250.000đ/người. Phong Cách cam kết chỉ ghép tối đa 2-3 khách trên xe 4 chỗ hoặc 4-5 khách trên xe 7 chỗ, tuyệt đối không nhồi nhét.", "Đối với gia đình đi nghỉ dưỡng tại Hạ Long có trẻ nhỏ hoặc nhóm bạn từ 3 đến 6 người, bao trọn gói xe 4 chỗ (từ 900.000đ) hoặc 7 chỗ (từ 1.100.000đ) mang lại sự riêng tư tối đa và chủ động dừng nghỉ chụp ảnh trên cung đường biển."], bullets: ["Xe ghép: tiết kiệm tối đa, ghép khách lịch sự cùng tuyến", "Bao xe 4 chỗ: xe sedan êm ái, phù hợp 2-3 khách", "Bao xe 7 chỗ: gầm cao Xpander/Veloz, phù hợp 4-6 khách nhiều đồ"] },
      { heading: "Bước 3: Nhận xác nhận chuyến và lưu số bác tài", paragraphs: ["Sau khi tiếp nhận yêu cầu, tổng đài Phong Cách sẽ kiểm tra lộ trình và gửi thông báo xác nhận gồm: Biển số xe, tên và số điện thoại của bác tài phụ trách chuyến đi.", "Trước giờ khởi hành từ 20 đến 30 phút, bác tài sẽ chủ động gọi điện để thông báo giờ xe đến ngõ đón bạn, giúp bạn thong thả chuẩn bị hành lý mà không phải sốt ruột chờ đợi."], bullets: ["Xác nhận rõ ràng thông tin xe và bác tài", "Bác tài gọi điện trước 20-30 phút khi đến điểm hẹn", "Hỗ trợ xách hành lý lên xe chu đáo"] },
      { heading: "Cảnh báo bẫy lừa tiền cọc xe ghép trên mạng xã hội", paragraphs: ["Hiện nay trên các hội nhóm mạng xã hội xuất hiện nhiều đối tượng giả danh nhà xe yêu cầu khách chuyển khoản đặt cọc từ 100.000đ đến 300.000đ rồi chặn số, bùng xe sát giờ khởi hành khiến khách lỡ dở công việc.", "Tại Xe Ghép Phong Cách, chúng tôi thực hiện chính sách minh bạch 100%: không thu bất kỳ đồng đặt cọc nào. Quý khách lên xe, trải nghiệm dịch vụ an toàn rồi mới thanh toán tiền mặt hoặc chuyển khoản trực tiếp cho tài xế."], bullets: ["Tuyệt đối không chuyển tiền cọc cho bất kỳ ai yêu cầu cọc xe ghép", "Phong Cách áp dụng chính sách đặt trước 0đ cọc uy tín số 1", "Chỉ thanh toán khi đã về đến nơi an toàn"] },
      { heading: "Chiều ngược lại: Xe từ Quảng Ninh về Hải Dương", paragraphs: ["Phong Cách phục vụ liên tục hai chiều mỗi ngày. Khi kết thúc kỳ nghỉ du lịch hoặc chuyến công tác tại Quảng Ninh, bạn chỉ cần báo trước cho nhà xe từ 1 đến 2 tiếng.", "Bác tài sẽ ghé sảnh khách sạn hoặc địa chỉ hẹn đón bạn đưa về trả tận cổng nhà tại Hải Dương, không phải kéo vali ra bến xe Bãi Cháy hay bắt xe buýt liên tỉnh mệt mỏi."], bullets: ["Đón tại sảnh mọi khách sạn, resort tại Hạ Long, Bãi Cháy", "Chạy cao tốc Hạ Long - Hải Phòng - Hải Dương chỉ 1h20", "Đặt xe chiều về cùng lúc chiều đi để nhận ưu đãi tốt nhất"] },
    ],
    checklist: ["Địa chỉ đón trả cụ thể hai đầu", "Thời gian muốn xe đón tại nhà", "Số lượng khách lớn và trẻ nhỏ", "Số kiện vali và đồ đạc mang theo", "Lựa chọn đi ghép hay bao xe riêng", "Số điện thoại liên lạc chính xác"],
    faq: [
      { q: "Cách đặt xe ghép Hải Dương đi Quảng Ninh nhanh nhất là gì?", a: "Cách nhanh nhất là gọi điện thoại hoặc nhắn tin Zalo tới hotline 0987 663 883. Bạn sẽ nhận được báo giá trọn gói và thông tin chuyến chỉ sau 2 phút." },
      { q: "Giá xe ghép từ Hải Dương đi Hạ Long là bao nhiêu?", a: "Giá xe ghép Hải Dương đi Hạ Long / Bãi Cháy khởi điểm từ 250.000đ/người. Bao xe 4 chỗ từ 900.000đ/chuyến và bao xe 7 chỗ từ 1.100.000đ/chuyến." },
      { q: "Có phải chuyển khoản cọc tiền trước không?", a: "Không. Phong Cách áp dụng chính sách đặt trước 0đ cọc, khách hàng chỉ thanh toán tiền sau khi chuyến đi hoàn thành an toàn." },
      { q: "Xe có đón trả tận bến tàu du lịch Tuần Châu hoặc cảng Hạ Long không?", a: "Có. Bác tài đưa đón tận cửa sảnh cảng tàu quốc tế Tuần Châu hoặc cảng tàu quốc tế Hạ Long để bạn kịp giờ lên du thuyền tham quan vịnh." },
      { q: "Từ Quảng Ninh về lại Hải Dương có xe đón không?", a: "Có. Nhà xe chạy hai chiều liên tục mỗi ngày, đón khách tại tất cả các khách sạn tại Quảng Ninh đưa về tận nhà tại Hải Dương." },
    ],
    sources: [
      { title: "Quy hoạch mạng lưới giao thông đường bộ tỉnh Quảng Ninh", publisher: "Sở Giao thông Vận tải Quảng Ninh", url: "https://sgtvt.quangninh.gov.vn/", checkedAt: "2026-09-05", supports: "Thông số kết nối giữa đường cao tốc Hạ Long - Hải Phòng và hệ thống cảng tàu du lịch quốc tế." },
      { title: "Thông tin du lịch vịnh Hạ Long và cảng tàu khách quốc tế", publisher: "Cổng thông tin du lịch Quảng Ninh", url: "https://halongcity.gov.vn/", checkedAt: "2026-09-05", supports: "Vị trí địa lý các bến tàu tham quan vịnh Hạ Long tại Tuần Châu và Bãi Cháy." },
      { title: "Báo cáo hạ tầng cầu Bạch Đằng và cao tốc ven biển", publisher: "Bộ Giao thông Vận tải", url: "https://mt.gov.vn/", checkedAt: "2026-09-05", supports: "Tuyến kết nối hành lang kinh tế ven biển Hải Dương - Hải Phòng - Quảng Ninh." },
    ],
    updatedAt: "2026-09-05",
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
    title: "Xe Hải Phòng về Hải Dương: 5 lưu ý đặt xe đón tận nơi không lo chờ đợi",
    seoTitle: "Xe Hải Phòng về Hải Dương",
    description: "Kinh nghiệm đặt xe ghép, bao xe Hải Phòng về Hải Dương; thông tin đón tại các quận Hải Phòng hoặc sân bay Cát Bi đưa về tận nhà; giá xe và chính sách 0đ cọc.",
    category: "Kinh nghiệm đặt xe",
    primaryKeyword: "xe Hải Phòng về Hải Dương",
    secondaryKeywords: ["xe Hải Phòng Hải Dương", "xe ghép Hải Phòng Hải Dương", "đặt xe Hải Phòng về Hải Dương", "xe từ Hải Phòng về Hải Dương"],
    directAnswer: "Từ Hải Phòng về Hải Dương qua Quốc lộ 5 hoặc cao tốc 5B chỉ mất 40 - 60 phút (khoảng 40 - 55km). Khi đặt xe ghép (từ 250.000đ/người) hoặc bao xe 4-7 chỗ (từ 600.000đ/chuyến), bạn nên chuẩn bị địa chỉ đón cụ thể tại các quận Hải Phòng (Hồng Bàng, Ngô Quyền, Lê Chân, Hải An...) hoặc sảnh ga đến Cát Bi, điểm trả tại các huyện Hải Dương, số người và vali. Phong Cách áp dụng chính sách đón tận nơi, đặt trước 0đ cọc, thanh toán sau chuyến an toàn.",
    image: {
      src: "/images/dich-vu-xe-4-cho.png",
      alt: "Xe ghép Hải Phòng về Hải Dương đón tận nơi trả tận nhà êm ái",
      caption: "Dịch vụ xe ghép ô tô du lịch 4-7 chỗ Phong Cách phục vụ chiều Hải Phòng về Hải Dương đón trả tận cửa.",
    },
    choices: [
      { title: "Xe ghép Phong Cách", bestFor: "Khách lẻ 1-2 người, ít hành lý", description: "Đón tận nơi tại các quận nội thành Hải Phòng, trả tận nhà tại các huyện Hải Dương; giá từ 250.000đ." },
      { title: "Bao xe riêng 4 chỗ", bestFor: "Gia đình nhỏ 2-3 người, đi công tác", description: "Xe sedan riêng tư, chủ động 100% thời gian xuất phát theo lịch hẹn; giá từ 600.000đ." },
      { title: "Bao xe riêng 7 chỗ", bestFor: "Nhóm 4-6 người, mang nhiều hải sản/đồ đạc", description: "Dòng xe gầm cao Xpander/Veloz rộng rãi, khoang cốp lớn chứa thoải mái thùng xốp và vali; giá từ 750.000đ." },
      { title: "Đón tại sảnh ga Cát Bi", bestFor: "Hành khách vừa hạ cánh máy bay", description: "Tài xế đón tại sảnh ga đến tầng 1, hỗ trợ bê hành lý đưa về tận nhà." },
    ],
    comparison: {
      title: "Bảng so sánh phương tiện chiều Hải Phòng về Hải Dương",
      note: "Các mức giá của Phong Cách là giá sàn bắt đầu (VERIFIED_FROM) đã được xác nhận. Giá thực tế phụ thuộc địa chỉ đón tại Hải Phòng và huyện trả khách tại Hải Dương.",
      rows: [
        { option: "Xe ghép Phong Cách", cost: "Từ 250.000đ/người", time: "40 - 60 phút", convenience: "Đón trả tận cửa, không đổi xe", pickupDropoff: "Tận nơi Hải Phòng ⇄ Tận nhà Hải Dương", bestFor: "Khách lẻ, người đi khám bệnh, người có vali" },
        { option: "Xe khách bến Vĩnh Niệm", cost: "50.000đ - 70.000đ/vé", time: "1h15 - 1h30 (QL5 cũ)", convenience: "Phải tự di chuyển ra bến", pickupDropoff: "Bến Vĩnh Niệm ⇄ Bến xe Hải Dương", bestFor: "Sinh viên, người ở sát bến xe" },
        { option: "Tàu hỏa", cost: "50.000đ - 70.000đ/vé", time: "50 - 60 phút", convenience: "Chạy theo giờ tàu cố định", pickupDropoff: "Ga Hải Phòng ⇄ Ga Hải Dương", bestFor: "Khách ở gần ga trung tâm" },
        { option: "Bao xe riêng 4-7 chỗ", cost: "Từ 600.000đ/chuyến", time: "40 - 50 phút chạy thẳng", convenience: "Riêng tư 100%, tự chọn giờ", pickupDropoff: "Đón trả theo mọi yêu cầu", bestFor: "Gia đình, đoàn đông, nhiều đồ đạc" },
      ],
    },
    sections: [
      { heading: "Năm thông tin cần chuẩn bị khi gọi xe", paragraphs: ["Nhiều khách hàng khi gọi điện chỉ hỏi chung chung “có xe Hải Phòng về Hải Dương không” khiến việc sắp xếp chuyến mất thời gian trao đổi. Để nhận được thông tin xe phù hợp nhất, bạn nên chuẩn bị trước 5 điểm sau.", "Thứ nhất là địa chỉ đón tại Hải Phòng (ngõ phố, tên bệnh viện hoặc sảnh Cát Bi); thứ hai là địa chỉ trả cụ thể tại Hải Dương (xã, huyện); thứ ba là khung giờ muốn đi; thứ tư là số lượng khách và thứ năm là lượng hành lý hoặc thùng hàng đi kèm."], bullets: ["Địa chỉ đón cụ thể tại Hải Phòng", "Địa chỉ trả tận nơi tại Hải Dương", "Thời gian mong muốn xuất phát", "Số lượng người lớn và trẻ nhỏ", "Khối lượng hành lý hoặc thùng xốp hải sản"] },
      { heading: "Lộ trình di chuyển: Quốc lộ 5 cũ và cao tốc Hà Nội - Hải Phòng", paragraphs: ["Từ Hải Phòng về Hải Dương có hai trục giao thông chính: Quốc lộ 5 cũ chạy qua các huyện An Dương, Kim Thành, TP Hải Dương; và đường cao tốc Hà Nội - Hải Phòng (5B) kết nối nhanh về các nút giao Gia Lộc, Thanh Hà, Bình Giang.", "Tùy thuộc vào vị trí nhà bạn ở huyện Kim Thành, Kinh Môn hay ở Gia Lộc, Thanh Miện, tài xế Phong Cách sẽ lựa chọn cung đường tối ưu nhất để rút ngắn thời gian di chuyển chỉ còn khoảng 40 đến 50 phút."], bullets: ["Về Kim Thành, Kinh Môn: đi theo trục QL5 hoặc đường tỉnh 388", "Về TP Hải Dương, Gia Lộc, Tứ Kỳ: đi theo cao tốc 5B nút giao Gia Lộc", "Về Thanh Hà: đi theo cao tốc 5B nút giao Thanh Hà"] },
      { heading: "Đón tại sảnh sân bay Cát Bi hoặc ga tàu Hải Phòng", paragraphs: ["Nếu bạn vừa đáp chuyến bay xuống sân bay Cát Bi hoặc xuống tàu tại ga Hải Phòng, việc tìm xe ôm hay taxi ra bến xe bắt xe khách về Hải Dương rất vất vả và tốn kém.", "Với Xe Ghép Phong Cách, tài xế sẽ có mặt sẵn tại sảnh đón, hỗ trợ xếp đồ đạc lên cốp xe và đưa thẳng bạn về nhà, không phải trung chuyển qua bất kỳ chặng trung gian nào."], bullets: ["Đón tại sảnh ga đến sân bay Cát Bi hai chiều", "Đón tại cổng ga Hải Phòng theo đúng giờ tàu đến", "Hỗ trợ khách mang nhiều hành lý hoặc quà quê cồng kềnh"] },
      { heading: "Chở đồ hải sản và quà biếu: Cần đóng gói thế nào?", paragraphs: ["Nhiều hành khách từ Hải Phòng về Hải Dương thường mang theo hải sản tươi sống (cua, ghẹ, tôm, mực Đồ Sơn, Cát Bà) hoặc bánh mì que, chả mực làm quà. Để đảm bảo vệ sinh cho khoang xe, bạn nên yêu cầu nơi bán đóng gói trong thùng xốp dán kín băng dính.", "Khoang cốp của đội xe Phong Cách rất rộng rãi, thoáng mát, đảm bảo hải sản giữ nguyên độ tươi ngon và không gây mùi khó chịu cho người ngồi trên xe."], bullets: ["Hải sản tươi sống cần đóng thùng xốp dán kín băng dính", "Báo trước với nhà xe nếu mang từ 2-3 thùng xốp trở lên", "Khoang cốp xe 4-7 chỗ rộng rãi, sạch sẽ"] },
      { heading: "Chính sách đặt trước 0đ cọc và thanh toán sau chuyến", paragraphs: ["Phong Cách duy trì cam kết vàng đối với mọi hành khách: không bao giờ thu tiền đặt cọc trước. Quý khách chỉ thanh toán tiền cước cho tài xế sau khi chuyến đi kết thúc an toàn tại cửa nhà.", "Nếu bạn cần dời giờ đón do công việc hoặc giờ máy bay delay, chỉ cần thông báo sớm cho nhà xe, chúng tôi sẽ hỗ trợ đổi chuyến hoàn toàn miễn phí."], bullets: ["Đặt xe trước 0đ cọc, thanh toán sau khi về đến nhà", "Thanh toán bằng tiền mặt hoặc chuyển khoản linh hoạt", "Hỗ trợ hủy chuyến hoặc đổi giờ linh hoạt không mất phí"] },
    ],
    checklist: ["Địa chỉ đón tại Hải Phòng (quận, phố, sảnh sân bay)", "Địa chỉ trả tại Hải Dương (xã, huyện)", "Khung giờ mong muốn đón", "Số người đi cùng", "Số vali và thùng xốp mang theo", "Số điện thoại liên lạc"],
    faq: [
      { q: "Xe từ Hải Phòng về Hải Dương có đón tận nơi không?", a: "Có. Phong Cách đón tận nơi tại các quận nội thành Hải Phòng và đưa về tận nhà tại tất cả các huyện, thị xã, thành phố của Hải Dương." },
      { q: "Giá xe ghép Hải Phòng về Hải Dương là bao nhiêu?", a: "Giá xe ghép khởi điểm từ 250.000đ/người. Bao xe 4 chỗ từ 600.000đ/chuyến và bao xe 7 chỗ từ 750.000đ/chuyến. Giá thực tế phụ thuộc địa chỉ đón trả cụ thể." },
      { q: "Đón tại sân bay Cát Bi về Hải Dương giá thế nào?", a: "Tuyến đón từ sảnh ga Cát Bi về Hải Dương có giá xe ghép khởi điểm từ 300.000đ/người, bao xe 4 chỗ từ 600.000đ và bao xe 7 chỗ từ 750.000đ." },
      { q: "Đặt xe chiều Hải Phòng về Hải Dương có cần đặt cọc trước không?", a: "Không. Toàn bộ chuyến đi đều áp dụng chính sách đặt trước 0đ cọc, thanh toán bằng tiền mặt hoặc chuyển khoản sau khi về đến nhà." },
      { q: "Mang theo thùng xốp hải sản có bị phụ thu không?", a: "Không phụ thu nếu hành lý ở mức độ vừa phải đã được đóng gói thùng xốp kín đáo. Bạn chỉ cần báo trước khi đặt xe để bác tài sắp xếp chỗ để gọn gàng." },
    ],
    sources: [
      { title: "Báo cáo hạ tầng giao thông kết nối Hải Phòng - Hải Dương", publisher: "Sở Giao thông Vận tải Hải Phòng", url: "https://sogtvt.haiphong.gov.vn/", checkedAt: "2026-09-05", supports: "Thông số kết nối hạ tầng giữa Quốc lộ 5 và cao tốc Hà Nội - Hải Phòng." },
      { title: "Quy hoạch các bến xe khách liên tỉnh thành phố Hải Phòng", publisher: "Công ty Cổ phần Bến xe Hải Phòng", url: "https://benxevinhniem.vn/", checkedAt: "2026-09-05", supports: "Lộ trình và biểu đồ hoạt động của các tuyến vận tải hành khách liên tỉnh." },
      { title: "Lịch trình chạy tàu tuyến Hà Nội - Hải Phòng", publisher: "Tổng công ty Đường sắt Việt Nam", url: "https://dsvn.vn/", checkedAt: "2026-09-05", supports: "Giờ xuất phát và đến ga Hải Phòng của các chuyến tàu hỏa liên tỉnh." },
    ],
    updatedAt: "2026-09-05",
    routeSlug: "xe-ghep-hai-duong-hai-phong",
    routeLabel: "Xe Hải Dương - Hải Phòng",
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
    title: "Đặt xe Hải Dương - Hà Nội cần chuẩn bị gì? Checklist 5 bước chuẩn xác",
    seoTitle: "Đặt xe Hải Dương Hà Nội cần thông tin gì",
    description: "Checklist 5 thông tin quan trọng khi đặt xe ghép, bao xe Hải Dương - Hà Nội: địa chỉ đón trả, số khách, hành lý, khung giờ đón bệnh viện; chính sách 0đ cọc.",
    category: "Kinh nghiệm đặt xe",
    primaryKeyword: "đặt xe Hải Dương Hà Nội",
    secondaryKeywords: ["đặt xe ghép Hải Dương Hà Nội", "xe Hải Dương Hà Nội", "gọi xe Hải Dương đi Hà Nội", "kinh nghiệm đi xe ghép Hải Dương Hà Nội"],
    directAnswer: "Để đặt xe Hải Dương - Hà Nội được đón đúng giờ và bố trí xe 4-7 chỗ ưng ý nhất, bạn chỉ cần chuẩn bị 5 thông tin cơ bản: địa chỉ đón cụ thể (ngõ phố, huyện tại Hải Dương), địa điểm trả tại Hà Nội (quận, bệnh viện, trường học), thời gian cần có mặt, số lượng người lớn/trẻ em và số vali hành lý. Gọi hoặc nhắn Zalo 0987 663 883 để được báo giá trọn gói và xác nhận chuyến ngay trong 2 phút, không cần đặt cọc trước.",
    image: {
      src: "/images/cao-toc-ha-noi-hai-phong.jpg",
      alt: "Checklist đặt xe ghép và bao xe Hải Dương đi Hà Nội qua cao tốc 5B",
      caption: "Cung đường cao tốc Hà Nội - Hải Phòng hiện đại giúp các chuyến xe ghép Phong Cách đưa đón khách nhanh chóng và êm ái.",
    },
    choices: [
      { title: "Gọi hotline 0987 663 883", bestFor: "Cần đi gấp hoặc xác nhận trong 2 phút", description: "Báo giá trọn gói ngay trong cuộc gọi, điều xe nhanh chóng theo địa chỉ của bạn." },
      { title: "Nhắn tin qua Zalo", bestFor: "Gửi định vị nhà và số lượng vali", description: "Gửi vị trí đón trả chính xác qua Zalo giúp tài xế điều hướng vào tận cổng ngõ." },
      { title: "Đặt trước chuyến sáng sớm", bestFor: "Đi khám bệnh tại các bệnh viện Hà Nội", description: "Hẹn đón từ 04h30 - 05h30 sáng để kịp vào viện lấy số khám đầu giờ." },
      { title: "Bao xe riêng 4-7 chỗ", bestFor: "Gia đình có trẻ nhỏ, người cao tuổi", description: "Chủ động 100% thời gian xuất phát, không ghép thêm khách, không gian riêng tư." },
    ],
    comparison: {
      title: "Bảng chuẩn bị thông tin theo từng nhu cầu đi xe",
      note: "Giá chuyến của Phong Cách được báo trực tiếp theo điểm đón trả thực tế, cam kết trọn gói và không phát sinh chi phí cầu đường.",
      rows: [
        { option: "Đi khám bệnh Hà Nội", cost: "Báo giá trực tiếp theo chuyến", time: "50 - 60 phút (cao tốc 5B)", convenience: "Đón 4h30-5h30 sáng tận ngõ", pickupDropoff: "Tận nhà ⇄ Cổng viện (Bạch Mai, K, Việt Đức)", bestFor: "Bệnh nhân và người nhà đi chăm" },
        { option: "Đi công tác / Hội họp", cost: "Báo giá trực tiếp theo chuyến", time: "50 - 60 phút chạy thẳng", convenience: "Đúng giờ hẹn 100%, xe sang lịch sự", pickupDropoff: "Tận nhà ⇄ Cơ quan / Khách sạn Hà Nội", bestFor: "Cán bộ, chuyên gia, doanh nhân" },
        { option: "Gia đình về quê / Du lịch", cost: "Báo giá trực tiếp theo chuyến", time: "50 - 60 phút", convenience: "Bao xe riêng 4-7 chỗ rộng rãi", pickupDropoff: "Đón trả nhiều điểm theo yêu cầu", bestFor: "Gia đình 3-6 người, nhiều vali" },
        { option: "Sinh viên / Đi làm cuối tuần", cost: "Báo giá trực tiếp theo chuyến", time: "60 - 75 phút", convenience: "Xe ghép tiết kiệm chi phí", pickupDropoff: "Đón tận cổng trường ⇄ Tận nhà quê", bestFor: "Khách lẻ đi lại định kỳ" },
      ],
    },
    sections: [
      { heading: "Checklist 5 thông tin quan trọng nhất khi đặt xe", paragraphs: ["Khi liên hệ nhà xe, việc cung cấp đầy đủ thông tin ngay từ đầu giúp tổng đài điều phối xe đón đúng giờ và đúng dòng xe phù hợp với nhu cầu của bạn.", "5 thông tin cơ bản bao gồm: Địa chỉ đón cụ thể (ngõ ngách xe vào được không); Địa chỉ trả tại Hà Nội (tên đường, quận, cổng cơ quan); Khung giờ muốn có mặt; Số lượng khách (người lớn và trẻ em); Khối lượng hành lý hoặc vali mang theo."], bullets: ["Địa chỉ đón cụ thể tại Hải Dương (xã, huyện, ngõ phố)", "Địa chỉ trả tại Hà Nội (quận, bệnh viện, trường học)", "Thời gian cần có mặt tại điểm đến", "Số lượng người đi cùng", "Số lượng vali hoặc túi đồ lớn"] },
      { heading: "Kinh nghiệm đặt xe đi khám bệnh sáng sớm tại Hà Nội", paragraphs: ["Nhu cầu bà con Hải Dương lên Hà Nội khám chữa bệnh tại các bệnh viện lớn (Bạch Mai, Việt Đức, K Tân Triều, 108, Nhi Trung ương) rất cao. Tại các bệnh viện này, việc lấy được số khám đầu giờ giúp bạn hoàn thành các xét nghiệm máu, chụp chiếu ngay trong buổi sáng và có kết quả vào buổi chiều.", "Xe Ghép Phong Cách có các chuyến đón sớm từ 04h30 đến 05h30 sáng tại tận cửa nhà ở các huyện, đưa thẳng vào sảnh khoa khám bệnh mà bạn không phải đi xe ôm hay chờ đợi bến cóc."], bullets: ["Nên hẹn xe đón sớm từ 04h30 - 05h30 sáng", "Bác tài đưa thẳng vào cổng khoa khám bệnh", "Hẹn trước chiều đón về để bác tài túc trực cổng viện"] },
      { heading: "Cách đặt xe chiều về từ Hà Nội về lại Hải Dương", paragraphs: ["Khi đã có lịch về quê hoặc sau khi khám bệnh, tan ca làm việc tại Hà Nội, bạn chỉ cần gọi điện hoặc nhắn tin báo trước cho nhà xe từ 30 đến 60 phút.", "Tài xế sẽ đón bạn tại cổng bệnh viện, sảnh cơ quan hoặc nhà riêng tại các quận nội thành Hà Nội và đưa về trả tận nhà tại Hải Dương, không phải chen chúc ra bến xe Giáp Bát hay Gia Lâm."], bullets: ["Báo trước từ 30-60 phút khi chuẩn bị về", "Đón tại cổng bệnh viện hoặc sảnh cơ quan", "Chạy cao tốc 5B đưa về tận ngõ nhà"] },
      { heading: "Tuyệt đối không chuyển khoản tiền cọc xe ghép", paragraphs: ["Hiện nay có rất nhiều tài khoản mạng xã hội giả mạo nhà xe ghép để lừa đảo thu tiền cọc từ 100.000đ đến 200.000đ của người đi xe rồi biến mất.", "Chính sách bất di bất dịch của Xe Ghép Phong Cách là: Đặt trước 0đ cọc. Bạn hoàn toàn không phải chuyển khoản trước bất kỳ đồng nào. Chỉ thanh toán sau khi bác tài đưa bạn đến đúng điểm hẹn an toàn."], bullets: ["Đặt xe trước 0đ cọc, hoàn toàn không lo lừa đảo", "Thanh toán bằng tiền mặt hoặc chuyển khoản sau chuyến", "Hỗ trợ đổi giờ hoặc hủy chuyến linh hoạt khi có việc đột xuất"] },
      { heading: "Thời gian xe chạy cao tốc 5B mất bao lâu?", paragraphs: ["Nhờ hệ thống đường cao tốc Hà Nội - Hải Phòng (5B) hiện đại 6 làn xe với vận tốc tối đa 120km/h, thời gian di chuyển thực tế từ trung tâm Hải Dương đến các quận nội thành Hà Nội chỉ mất từ 50 đến 60 phút.", "Xe chạy êm ái, không có tình trạng phanh giật hay dừng đỗ bắt khách dọc đường, giúp hành khách, đặc biệt là người già, trẻ nhỏ và người dễ say xe cảm thấy vô cùng thoải mái suốt hành trình."], bullets: ["Lộ trình cao tốc 5B êm ái, chỉ mất 50 - 60 phút", "Không bắt khách dọc đường, không vòng vo", "Xe sạch sẽ, máy lạnh mát mẻ, không mùi khói thuốc"] },
    ],
    checklist: ["Địa chỉ đón trả cụ thể hai đầu", "Khung giờ mong muốn có mặt", "Số lượng người lớn và trẻ nhỏ", "Số lượng vali và đồ cồng kềnh", "Lựa chọn đi xe ghép hay bao xe", "Số điện thoại người đi xe"],
    faq: [
      { q: "Đặt xe ghép Hải Dương - Hà Nội trước bao lâu là tốt nhất?", a: "Với các chuyến đi khám bệnh sáng sớm, bạn nên đặt trước vào chiều hoặc tối hôm trước. Với các chuyến đi ban ngày, bạn chỉ cần báo trước từ 30 đến 60 phút để nhà xe sắp xếp xe đón chu đáo." },
      { q: "Giá xe ghép Hải Dương đi Hà Nội là bao nhiêu?", a: "Giá chuyến được báo trực tiếp trọn gói theo điểm đón trả thực tế khi bạn liên hệ hotline 0987 663 883. Chi phí luôn minh bạch và không phát sinh phụ phí dọc đường." },
      { q: "Xe có nhận đón bệnh nhân đi khám bệnh từ sáng sớm không?", a: "Có. Phong Cách có các chuyến khởi hành từ 04h30 - 05h30 sáng, đón tận nhà đưa thẳng vào cổng các bệnh viện lớn tại Hà Nội lấy số khám đầu giờ." },
      { q: "Có phải chuyển khoản cọc tiền trước không?", a: "Không. Toàn bộ chuyến đi đều áp dụng chính sách đặt trước 0đ cọc, khách hàng chỉ thanh toán tiền sau khi chuyến đi hoàn thành an toàn." },
      { q: "Có xe đón chiều Hà Nội về lại Hải Dương không?", a: "Có. Nhà xe phục vụ liên tục hai chiều mỗi ngày, nhận đón khách tại các quận Hà Nội đưa về tận nhà tại Hải Dương." },
    ],
    sources: [
      { title: "Báo cáo hạ tầng giao thông liên tỉnh Hà Nội - Hải Dương", publisher: "Bộ Giao thông Vận tải", url: "https://mt.gov.vn/", checkedAt: "2026-09-05", supports: "Thông số kết nối hạ tầng giao thông giữa Hải Dương và Hà Nội qua cao tốc 5B." },
      { title: "Hướng dẫn đăng ký khám bệnh ngoại trú tại các bệnh viện tuyến Trung ương", publisher: "Bộ Y tế", url: "https://moh.gov.vn/", checkedAt: "2026-09-05", supports: "Thời gian tiếp nhận bệnh nhân và quy trình đăng ký khám chữa bệnh tại các bệnh viện lớn ở Hà Nội." },
      { title: "Thông tin vận hành đường cao tốc Hà Nội - Hải Phòng", publisher: "Tổng công ty Phát triển hạ tầng và Đầu tư tài chính Việt Nam (VIDIFI)", url: "https://vidifi.vn/", checkedAt: "2026-09-05", supports: "Quy định tốc độ và phương án lưu thông trên tuyến cao tốc 5B." },
    ],
    updatedAt: "2026-09-05",
    routeSlug: "xe-ghep-hai-duong-ha-noi",
    routeLabel: "Xe ghép Hải Dương - Hà Nội",
  },
  {
    slug: "gui-hang-hai-duong-ha-noi-theo-chuyen",
    title: "Gửi hàng Hải Dương - Hà Nội theo chuyến: nhận hỏa tốc sau 1-2 tiếng",
    seoTitle: "Gửi hàng Hải Dương Hà Nội theo chuyến",
    description: "Dịch vụ gửi hàng hỏa tốc Hải Dương - Hà Nội theo chuyến xe ghép: gửi đồ ăn sạch, bánh đặc sản, tài liệu công chứng, hàng hóa giao nhận tận tay trong ngày.",
    category: "Gửi hàng theo chuyến",
    primaryKeyword: "gửi hàng Hải Dương Hà Nội theo chuyến",
    secondaryKeywords: ["gửi đồ Hải Dương Hà Nội", "ship hàng Hải Dương Hà Nội", "gửi hàng theo xe Hải Dương Hà Nội", "xe ghép gửi hàng Hà Nội Hải Dương"],
    directAnswer: "Gửi hàng theo chuyến xe ghép Hải Dương - Hà Nội qua cao tốc 5B chỉ mất 1 đến 2 tiếng là người nhận tại các quận nội thành Hà Nội có thể nhận đồ tận tay. Đây là giải pháp giao nhận hỏa tốc lý tưởng cho thực phẩm quê tươi sạch, bánh đậu xanh đặc sản, giấy tờ hồ sơ khẩn cấp hoặc hàng mẫu kinh doanh, bảo quản trong khoang xe ô tô máy lạnh sạch sẽ, không lo móp méo hay thất lạc.",
    image: {
      src: "/images/gui-hang-theo-chuyen.png",
      alt: "Dịch vụ gửi hàng hỏa tốc theo chuyến xe ghép Hải Dương Hà Nội nhận tận tay sau 1 đến 2 tiếng",
      caption: "Dịch vụ gửi hàng hỏa tốc liên tỉnh Hải Dương - Hà Nội theo chuyến xe ô tô 4-7 chỗ, giao nhận tận nơi hai đầu.",
    },
    choices: [
      { title: "Thực phẩm, đồ ăn quê", bestFor: "Rau củ sạch, bánh đặc sản, thịt cá tươi", description: "Bảo quản trong khoang xe có điều hòa mát mẻ, giữ trọn độ tươi ngon đến tay người thân." },
      { title: "Giấy tờ, tài liệu gấp", bestFor: "Hồ sơ thầu, công chứng, hợp đồng", description: "Giao hỏa tốc trực tiếp cho đối tác hoặc người nhận tại Hà Nội chỉ sau 1-2 giờ." },
      { title: "Kiện hàng thùng carton", bestFor: "Quần áo, đồ gia dụng, linh kiện máy móc", description: "Xếp ngay ngắn trong khoang cốp xe du lịch, không quăng quật hay đè nén làm hỏng hộp." },
      { title: "Hàng cồng kềnh, thùng xốp", bestFor: "Cần trao đổi kích thước trước", description: "Cung cấp kích thước ba chiều và khối lượng để nhà xe bố trí chỗ ngồi hoặc cốp xe phù hợp." },
    ],
    comparison: {
      title: "Bảng so sánh gửi hàng xe ghép và chuyển phát thông thường",
      note: "Cước gửi hàng xe ghép được báo trực tiếp theo kích thước kiện hàng và quãng đường giao nhận hai đầu.",
      rows: [
        { option: "Xe ghép Phong Cách", cost: "Báo giá trực tiếp theo chuyến", time: "1 - 2 tiếng nhận ngay", convenience: "Giao tận tay hai đầu", pickupDropoff: "Hải Dương ⇄ Các quận Hà Nội", bestFor: "Đồ tươi sống, tài liệu gấp, hàng cẩn thận" },
        { option: "Chuyển phát bưu cục", cost: "35.000đ - 70.000đ", time: "24 - 48 tiếng (1-2 ngày)", convenience: "Tự ra bưu cục gửi", pickupDropoff: "Theo tuyến bưu tá", bestFor: "Hàng khô thông thường không vội" },
        { option: "Gửi xe khách bến", cost: "50.000đ - 100.000đ", time: "3 - 5 tiếng", convenience: "Tự mang ra bến xe và đón lấy", pickupDropoff: "Bến Hải Dương ⇄ Gia Lâm/Giáp Bát", bestFor: "Người ở ngay sát bến xe hai đầu" },
      ],
    },
    sections: [
      { heading: "Thời gian giao hàng siêu tốc 1-2 tiếng qua cao tốc 5B", paragraphs: ["Khoảng cách giữa Hải Dương và Hà Nội qua cao tốc 5B chỉ khoảng 55km - 75km. Xe ô tô du lịch chạy thẳng tuyến chỉ mất 50 - 60 phút, do đó kiện hàng của bạn có thể đến tay người nhận tại Hà Nội hoặc chiều ngược lại về Hải Dương chỉ trong vòng 1 đến 2 tiếng.", "Khác với các công ty chuyển phát bưu chính phải gom hàng về tổng kho rồi phân loại mất 1-2 ngày, gửi theo chuyến xe ghép là hình thức đi thẳng, hàng lên xe là chạy ngay."], bullets: ["Nhận hàng hỏa tốc trong 1-2 giờ", "Chạy thẳng cao tốc 5B êm ái, an toàn", "Bác tài gọi điện trước cho người nhận 15-20 phút"] },
      { heading: "Các mặt hàng phù hợp gửi theo chuyến ô tô 4-7 chỗ", paragraphs: ["Khoang xe ô tô du lịch luôn bật máy lạnh điều hòa và giữ gìn vệ sinh sạch sẽ, rất thích hợp cho những mặt hàng có giá trị cao hoặc đòi hỏi bảo quản kỹ lưỡng.", "Các kiện hàng phổ biến gồm: bánh đậu xanh Hải Dương gửi làm quà biếu, gà quê, thực phẩm tươi sạch gia đình gửi cho con em học đại học, tài liệu hợp đồng kinh doanh, hộ chiếu visa, phụ tùng cơ khí, mẫu vải và linh kiện điện tử."], bullets: ["Thực phẩm tươi sạch đóng gói kín", "Bánh kẹo đặc sản quà biếu trang trọng", "Tài liệu hồ sơ công chứng khẩn cấp", "Hàng mẫu thời trang và linh kiện thương mại"] },
      { heading: "Quy trình giao nhận tận nơi tại các quận Hà Nội", paragraphs: ["Phong Cách hỗ trợ nhận hàng tận nhà tại các huyện, thị xã, thành phố Hải Dương và giao tận tay người nhận tại hầu hết các quận nội thành Hà Nội: Cầu Giấy, Nam Từ Liêm, Thanh Xuân, Đống Đa, Hoàn Kiếm, Hai Bà Trưng, Ba Đình, Long Biên...", "Bạn cũng có thể hẹn tài xế giao nhận tại các điểm dừng chân hoặc nút giao cao tốc (nút Cổ Linh, cầu Vĩnh Tuy, nút Gia Lộc...) để tiết kiệm chi phí vận chuyển."], bullets: ["Nhận tận nơi tại Hải Dương theo yêu cầu", "Giao tận tay người nhận tại các quận nội thành Hà Nội", "Có biên nhận hoặc hình ảnh xác nhận khi giao hàng thành công"] },
      { heading: "Hướng dẫn đóng gói an toàn và ghi thông tin", paragraphs: ["Để tránh thất lạc hoặc hư hỏng trong quá trình vận chuyển, người gửi nên đóng hàng trong thùng carton hoặc thùng xốp dán kín băng keo.", "Bên ngoài vỏ thùng cần dùng bút lông ghi rõ ràng: Họ tên người nhận, Số điện thoại và Địa chỉ giao hàng cụ thể. Nếu bên trong là hàng dễ vỡ hoặc thực phẩm cần giữ chiều đứng, hãy dán giấy ghi chú rõ cho tài xế."], bullets: ["Dán kín các mép thùng và chèn xốp giảm chấn", "Ghi rõ SĐT và tên người nhận bên ngoài thùng", "Báo trước với tài xế nếu là hàng thủy tinh hoặc dễ vỡ"] },
      { heading: "Chính sách bảo đảm an toàn và cước phí minh bạch", paragraphs: ["Xe Ghép Phong Cách cam kết hàng hóa được tài xế trông nom trực tiếp, tuyệt đối không quăng quật, dẫm đạp làm biến dạng vỏ hộp như xe khách hay xe tải chở hàng ghép.", "Cước phí gửi hàng được báo rõ ràng ngay từ đầu khi bạn gọi điện hoặc nhắn Zalo hotline 0987 663 883, hỗ trợ thanh toán linh hoạt đầu gửi hoặc đầu nhận và hỗ trợ thu hộ COD an toàn."], bullets: ["Cam kết bồi thường thỏa đáng nếu hư hỏng do lỗi vận chuyển", "Báo giá trọn gói minh bạch, không phụ phí dọc đường", "Hỗ trợ thu tiền hàng COD chuyển khoản lại ngay"] },
    ],
    checklist: ["Tên loại hàng hóa gửi đi", "Kích thước ước tính (dài x rộng x cao)", "Khối lượng ước tính của kiện hàng", "Họ tên và số điện thoại người nhận tại Hà Nội", "Địa chỉ giao hàng cụ thể tại Hà Nội", "Thông tin người gửi và quy cách đóng gói"],
    faq: [
      { q: "Gửi hàng từ Hải Dương lên Hà Nội mất bao lâu thì tới?", a: "Thời gian vận chuyển thực tế chỉ từ 1 đến 2 tiếng tùy theo địa chỉ giao nhận tại các quận nội thành Hà Nội." },
      { q: "Giá gửi hàng Hải Dương - Hà Nội theo chuyến là bao nhiêu?", a: "Cước gửi hàng được báo trực tiếp theo kích thước kiện hàng và địa chỉ giao nhận cụ thể khi bạn liên hệ hotline 0987 663 883. Chi phí luôn trọn gói và minh bạch." },
      { q: "Nhà xe có nhận gửi hàng chiều Hà Nội về Hải Dương không?", a: "Có. Phong Cách nhận gửi hàng hai chiều liên tục mỗi ngày giữa Hải Dương và Hà Nội." },
      { q: "Có giao hàng tận nhà người nhận tại Hà Nội không?", a: "Có. Bác tài hỗ trợ giao tận tay người nhận tại nhà riêng, cơ quan hoặc sảnh chung cư tại các quận Hà Nội." },
      { q: "Nhà xe có nhận thu hộ tiền hàng (COD) không?", a: "Có hỗ trợ thu hộ tiền hàng COD cho các cửa hàng buôn bán và chuyển khoản lại ngay cho người gửi sau khi giao thành công." },
    ],
    sources: [
      { title: "Quy định dịch vụ bưu chính và chuyển phát hàng hóa", publisher: "Bộ Thông tin và Truyền thông", url: "https://mic.gov.vn/", checkedAt: "2026-09-05", supports: "Các quy chuẩn về an toàn bưu gửi và quyền lợi người tiêu dùng trong chuyển phát." },
      { title: "Báo cáo lưu thông hàng hóa kết nối vùng Thủ đô", publisher: "Sở Công Thương Hà Nội", url: "https://socongthuong.hanoi.gov.vn/", checkedAt: "2026-09-05", supports: "Hành lang cung ứng nông sản và thực phẩm sạch từ Hải Dương về Hà Nội." },
      { title: "Thông tin mạng lưới đường cao tốc Hà Nội - Hải Phòng", publisher: "Tổng công ty Phát triển hạ tầng và Đầu tư tài chính Việt Nam (VIDIFI)", url: "https://vidifi.vn/", checkedAt: "2026-09-05", supports: "Quy định tốc độ và tải trọng vận chuyển trên cao tốc 5B." },
    ],
    updatedAt: "2026-09-05",
    routeSlug: "xe-ghep-hai-duong-ha-noi",
    routeLabel: "Xe ghép Hải Dương - Hà Nội",
  },
];

export function guidePostForSlug(slug: string) {
  return guidePosts.find((post) => post.slug === slug);
}
