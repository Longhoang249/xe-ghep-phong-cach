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

export type GuidePost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  directAnswer: string;
  choices: GuideChoice[];
  sections: GuideSection[];
  checklist: string[];
  faq: Array<{ q: string; a: string }>;
  routeSlug: string;
  routeLabel: string;
};

export const guidePosts: GuidePost[] = [
  {
    slug: "di-hai-duong-ha-noi-bang-phuong-tien-gi",
    title: "Đi Hải Dương – Hà Nội bằng phương tiện gì?",
    description: "So sánh xe khách, limousine, xe ghép và bao xe khi đi Hải Dương – Hà Nội; chọn theo nhu cầu đón trả, số người và hành lý.",
    category: "Tư vấn phương tiện",
    primaryKeyword: "đi Hải Dương Hà Nội bằng phương tiện gì",
    secondaryKeywords: ["xe Hải Dương đi Hà Nội", "phương tiện Hải Dương Hà Nội", "xe ghép Hải Dương Hà Nội"],
    directAnswer: "Bạn có thể chọn xe khách, limousine, xe ghép hoặc bao xe. Nếu ưu tiên được trao đổi điểm đón trả và đi bằng xe 4–7 chỗ, hãy gọi Phong Cách để kiểm tra xe ghép hoặc bao xe cho tuyến Hải Dương – Hà Nội.",
    choices: [
      { title: "Xe khách", bestFor: "Người quen đi từ điểm cố định", description: "Nên kiểm tra bến, điểm đón, điểm trả và thông tin của đơn vị vận tải trước khi đi." },
      { title: "Limousine", bestFor: "Khách muốn đặt ghế theo nhà xe", description: "Phù hợp khi điểm đón trả và cách vận hành của chuyến đáp ứng nhu cầu cá nhân." },
      { title: "Xe ghép", bestFor: "Khách đi một mình hoặc nhóm nhỏ", description: "Có thể trao đổi nhu cầu đón trả với nhà xe; tình trạng ghép phụ thuộc chuyến thực tế." },
      { title: "Bao xe", bestFor: "Gia đình, nhóm riêng hoặc nhiều hành lý", description: "Không gian riêng hơn; loại xe và chi phí được xác nhận theo yêu cầu cụ thể." },
    ],
    sections: [
      { heading: "Nên chọn phương tiện theo tiêu chí nào?", paragraphs: ["Không có một lựa chọn phù hợp cho mọi chuyến. Người đi làm, người lên Hà Nội khám bệnh, gia đình có trẻ nhỏ và khách mang nhiều hành lý sẽ có ưu tiên khác nhau.", "Trước khi chọn, hãy xác định điều quan trọng nhất là điểm đón trả, mức riêng tư, số người đi hay khả năng mang theo hành lý. Từ đó bạn mới so sánh đúng giữa xe ghép, bao xe và các hình thức vận tải khác."], bullets: ["Bạn đi một mình hay đi theo nhóm?", "Có cần trao đổi điểm đón và điểm trả cụ thể không?", "Có hành lý cồng kềnh, trẻ nhỏ hoặc người lớn tuổi không?", "Bạn muốn ghép chuyến hay muốn đi riêng?"] },
      { heading: "Khi nào nên gọi xe ghép Hải Dương – Hà Nội?", paragraphs: ["Xe ghép thường được người đi một mình hoặc nhóm nhỏ tìm kiếm khi muốn sử dụng xe 4–7 chỗ và trao đổi trực tiếp với nhà xe. Tuy nhiên, khả năng bố trí xe còn phụ thuộc thời điểm, nơi đón, nơi trả và tình trạng chuyến.", "Phong Cách có tiếp nhận nhu cầu xe ghép Hải Dương – Hà Nội cả hai chiều. Muốn đi, bạn nên gọi và cung cấp thông tin chuyến để bên mình kiểm tra xe phù hợp."], bullets: ["Đi công tác hoặc đi làm theo nhu cầu riêng", "Đi khám bệnh, thăm người thân", "Đi cùng hành lý vừa phải", "Cần xe Hà Nội về Hải Dương chiều ngược lại"] },
      { heading: "Khi nào bao xe 4–7 chỗ phù hợp hơn?", paragraphs: ["Bao xe phù hợp khi nhóm muốn không gian riêng, cần chủ động trao đổi điểm đón trả hoặc có nhu cầu hành lý đặc biệt. Đây cũng là lựa chọn đáng cân nhắc cho gia đình, người cao tuổi hoặc chuyến cần hạn chế ghép thêm khách.", "Để được tư vấn đúng loại xe, hãy nói rõ số khách, hành lý và nhu cầu đi riêng ngay từ đầu. Phong Cách sẽ kiểm tra xe 4 chỗ hoặc 7 chỗ theo tình trạng thực tế." ] },
    ],
    checklist: ["Nơi đón mong muốn", "Nơi trả mong muốn", "Thời điểm cần đi", "Số khách và hành lý", "Nhu cầu xe ghép hay bao xe"],
    faq: [
      { q: "Phong Cách có xe Hải Dương đi Hà Nội không?", a: "Có. Phong Cách tiếp nhận nhu cầu xe ghép và bao xe 4–7 chỗ tuyến Hải Dương – Hà Nội cả hai chiều. Hãy gọi để kiểm tra xe." },
      { q: "Website có lịch chạy cố định không?", a: "Không. Thời điểm và xe được kiểm tra theo nhu cầu chuyến thực tế, vì vậy khách nên gọi trực tiếp." },
      { q: "Đi nhóm gia đình nên chọn hình thức nào?", a: "Bạn có thể cân nhắc bao xe nếu muốn đi riêng. Loại xe phù hợp còn phụ thuộc số khách và hành lý." },
    ],
    routeSlug: "xe-ghep-hai-duong-ha-noi",
    routeLabel: "Xe ghép Hải Dương – Hà Nội",
  },
  {
    slug: "nhung-chuyen-xe-tu-hai-duong-di-quang-ninh",
    title: "Những chuyến xe từ Hải Dương đi Quảng Ninh",
    description: "Các lựa chọn xe từ Hải Dương đi Quảng Ninh gồm xe khách, limousine, xe ghép và bao xe; cách chọn theo điểm đến và nhu cầu thực tế.",
    category: "Tổng hợp lựa chọn",
    primaryKeyword: "những chuyến xe từ Hải Dương đi Quảng Ninh",
    secondaryKeywords: ["xe Hải Dương đi Quảng Ninh", "xe từ Hải Dương đi Quảng Ninh", "xe ghép Hải Dương Quảng Ninh"],
    directAnswer: "Người đi Hải Dương – Quảng Ninh có thể tìm xe khách, limousine, xe ghép hoặc bao xe. Vì Quảng Ninh có nhiều điểm đến khác nhau, bạn nên cung cấp địa chỉ đón trả cụ thể; Phong Cách có xe cho tuyến và sẽ kiểm tra theo nhu cầu thực tế.",
    choices: [
      { title: "Xe khách tuyến cố định", bestFor: "Khách phù hợp với điểm đón của nhà xe", description: "Cần tự kiểm tra lịch, điểm dừng và thông tin đang áp dụng của từng đơn vị." },
      { title: "Limousine", bestFor: "Khách muốn đặt ghế theo chuyến", description: "Nên hỏi rõ khu vực phục vụ tại Quảng Ninh trước khi đặt." },
      { title: "Xe ghép Phong Cách", bestFor: "Khách lẻ hoặc nhóm nhỏ", description: "Gọi để trao đổi điểm đến và kiểm tra khả năng ghép xe 4–7 chỗ." },
      { title: "Bao xe Phong Cách", bestFor: "Nhóm muốn đi riêng", description: "Phù hợp khi cần trao đổi chuyến riêng theo nơi đón trả thực tế." },
    ],
    sections: [
      { heading: "Vì sao phải nói rõ điểm đến tại Quảng Ninh?", paragraphs: ["Cụm từ “đi Quảng Ninh” có thể chỉ nhiều khu vực khác nhau. Điểm trả thực tế ảnh hưởng trực tiếp đến khả năng bố trí xe, hình thức ghép chuyến và thông tin mà nhà xe cần xác nhận.", "Thay vì chỉ hỏi chung “có xe đi Quảng Ninh không”, bạn nên nói rõ nơi muốn đến. Phong Cách sẽ dựa trên thông tin đó để kiểm tra xe, không áp dụng một lộ trình hoặc thời gian cố định cho mọi khách."], bullets: ["Tên khu vực hoặc địa chỉ cần đến", "Số khách và lượng hành lý", "Thời điểm muốn đi", "Có cần xe chiều về hay không"] },
      { heading: "Xe ghép phù hợp với nhu cầu nào?", paragraphs: ["Xe ghép phù hợp khi khách muốn đi bằng xe 4–7 chỗ và chấp nhận nhà xe kiểm tra khả năng kết hợp chuyến. Hình thức này thường được tìm kiếm bởi khách lẻ, nhóm nhỏ, người đi công tác hoặc về thăm gia đình.", "Tình trạng xe ghép có thể khác nhau theo từng ngày và từng điểm đón trả. Vì vậy, bài viết này không đưa lịch chạy cố định; cách nhanh nhất là gọi Phong Cách để kiểm tra." ] },
      { heading: "Bao xe khi nào đáng cân nhắc?", paragraphs: ["Nếu đi theo gia đình, nhóm riêng, có nhiều hành lý hoặc muốn hạn chế ghép thêm khách, bạn có thể hỏi phương án bao xe. Khi liên hệ, hãy cho biết rõ số người và loại hành lý để Phong Cách kiểm tra xe 4 chỗ hoặc 7 chỗ.", "Chi phí và thông tin chuyến được trao đổi trước khi khách quyết định. Website không sử dụng bảng giá của đơn vị khác để báo cho chuyến của Phong Cách." ] },
    ],
    checklist: ["Điểm đón tại Hải Dương", "Điểm trả cụ thể tại Quảng Ninh", "Ngày và thời điểm mong muốn", "Số khách", "Hành lý hoặc hàng hóa", "Nhu cầu chiều về"],
    faq: [
      { q: "Phong Cách có xe từ Hải Dương đi Quảng Ninh không?", a: "Có. Phong Cách tiếp nhận nhu cầu xe ghép, bao xe và gửi hàng trên tuyến Hải Dương – Quảng Ninh. Hãy gọi để xác nhận điểm đến và kiểm tra xe." },
      { q: "Có nên dùng lịch xe trên bài tổng hợp của website khác không?", a: "Bạn chỉ nên xem để tham khảo và cần xác nhận lại với đúng đơn vị vận tải, vì lịch, điểm đón và dịch vụ có thể thay đổi." },
      { q: "Có xe Quảng Ninh về Hải Dương không?", a: "Phong Cách tiếp nhận nhu cầu cả hai chiều. Khách nên cung cấp rõ nơi đón tại Quảng Ninh để bên mình kiểm tra." },
    ],
    routeSlug: "xe-ghep-hai-duong-quang-ninh",
    routeLabel: "Xe ghép Hải Dương – Quảng Ninh",
  },
  {
    slug: "di-hai-duong-hai-phong-bang-phuong-tien-gi",
    title: "Đi Hải Dương – Hải Phòng bằng phương tiện gì?",
    description: "Gợi ý chọn xe khách, limousine, xe ghép hoặc bao xe Hải Dương – Hải Phòng theo điểm đón trả, số khách và nhu cầu hành lý.",
    category: "Tư vấn phương tiện",
    primaryKeyword: "đi Hải Dương Hải Phòng bằng phương tiện gì",
    secondaryKeywords: ["xe Hải Dương đi Hải Phòng", "phương tiện Hải Dương Hải Phòng", "xe ghép Hải Dương Hải Phòng"],
    directAnswer: "Xe khách và limousine phù hợp khi bạn dùng được điểm đón của nhà xe; xe ghép hoặc bao xe phù hợp khi muốn trao đổi nhu cầu đón trả bằng xe 4–7 chỗ. Phong Cách có xe tuyến Hải Dương – Hải Phòng cả hai chiều.",
    choices: [
      { title: "Xe khách", bestFor: "Khách quen điểm đón cố định", description: "Nên xác nhận trực tiếp với đơn vị khai thác về điểm đón và cách đặt chỗ." },
      { title: "Limousine", bestFor: "Khách muốn đặt ghế", description: "Hãy kiểm tra khu vực đón trả thực tế trước khi chọn." },
      { title: "Xe ghép", bestFor: "Khách lẻ, nhóm nhỏ", description: "Phong Cách kiểm tra khả năng ghép theo nơi đón, nơi trả và thời điểm." },
      { title: "Bao xe", bestFor: "Gia đình hoặc nhóm đi riêng", description: "Có thể trao đổi xe 4–7 chỗ theo số khách và hành lý." },
    ],
    sections: [
      { heading: "Chọn xe theo điểm đón và điểm trả", paragraphs: ["Điểm đón trả là tiêu chí quan trọng hơn việc chỉ so sánh tên loại xe. Một chuyến có giá ghế hấp dẫn nhưng điểm đón không thuận tiện vẫn có thể khiến khách phải đổi thêm phương tiện.", "Nếu bạn muốn trao đổi nơi đón và nơi trả cụ thể, hãy gọi Phong Cách. Bên mình có xe tuyến Hải Dương – Hải Phòng và sẽ kiểm tra theo chuyến thực tế."], bullets: ["Đón tại khu vực nào ở Hải Dương?", "Trả tại khu vực nào ở Hải Phòng?", "Đi một chiều hay cần chiều về?", "Có hành lý hoặc hàng hóa đi kèm không?"] },
      { heading: "Xe ghép và bao xe khác nhau ở điểm nào?", paragraphs: ["Xe ghép là phương án nhà xe kiểm tra khả năng kết hợp khách có nhu cầu phù hợp. Bao xe dành cho người muốn sử dụng riêng xe theo chuyến đã trao đổi.", "Nếu ưu tiên chi phí và có thể ghép chuyến, bạn có thể hỏi xe ghép. Nếu đi cùng gia đình, nhóm riêng hoặc cần không gian riêng tư, hãy hỏi phương án bao xe." ] },
      { heading: "Đặt xe thế nào để dễ được kiểm tra?", paragraphs: ["Thông tin càng rõ thì việc kiểm tra xe càng nhanh. Khách nên gửi đầy đủ nơi đón, nơi trả, thời điểm, số người và hành lý ngay từ lần liên hệ đầu tiên.", "Phong Cách không công bố lịch chạy cố định trong bài này vì tình trạng xe và nhu cầu ghép thay đổi theo chuyến." ] },
    ],
    checklist: ["Nơi đón ở Hải Dương", "Nơi trả ở Hải Phòng", "Thời điểm muốn đi", "Số người", "Lượng hành lý", "Xe ghép hay bao xe"],
    faq: [
      { q: "Phong Cách có xe Hải Dương – Hải Phòng không?", a: "Có. Đây là một trong các tuyến Phong Cách tiếp nhận cả hai chiều." },
      { q: "Có thể gửi hàng theo chuyến không?", a: "Phong Cách có tiếp nhận nhu cầu gửi hàng. Hãy cung cấp loại hàng, kích thước và nơi giao nhận để kiểm tra." },
      { q: "Muốn đi riêng thì chọn gì?", a: "Bạn có thể hỏi phương án bao xe 4–7 chỗ và cung cấp số khách, hành lý để bên mình kiểm tra." },
    ],
    routeSlug: "xe-ghep-hai-duong-hai-phong",
    routeLabel: "Xe ghép Hải Dương – Hải Phòng",
  },
  {
    slug: "di-hai-phong-quang-ninh-bang-phuong-tien-gi",
    title: "Đi Hải Phòng – Quảng Ninh bằng phương tiện gì?",
    description: "So sánh các lựa chọn xe Hải Phòng – Quảng Ninh và cách gọi Phong Cách kiểm tra xe ghép, bao xe theo điểm đón trả thực tế.",
    category: "Tư vấn phương tiện",
    primaryKeyword: "đi Hải Phòng Quảng Ninh bằng phương tiện gì",
    secondaryKeywords: ["xe Hải Phòng Quảng Ninh", "xe ghép Hải Phòng Quảng Ninh", "phương tiện Hải Phòng đi Quảng Ninh"],
    directAnswer: "Bạn có thể tìm xe khách, limousine, xe ghép hoặc bao xe Hải Phòng – Quảng Ninh. Điểm đến tại Quảng Ninh rất đa dạng, vì vậy nên nêu địa chỉ cụ thể và gọi Phong Cách để kiểm tra xe phù hợp.",
    choices: [
      { title: "Xe khách", bestFor: "Khách đi theo tuyến công bố", description: "Tự xác nhận bến, điểm dừng và thông tin chuyến với nhà xe vận hành." },
      { title: "Limousine", bestFor: "Khách muốn đặt ghế", description: "Phù hợp khi khu vực đón trả đáp ứng đúng nhu cầu." },
      { title: "Xe ghép", bestFor: "Khách lẻ hoặc nhóm nhỏ", description: "Phong Cách kiểm tra xe theo nơi đón, nơi trả và thời điểm mong muốn." },
      { title: "Bao xe", bestFor: "Nhóm đi riêng", description: "Trao đổi loại xe 4–7 chỗ theo số người và hành lý." },
    ],
    sections: [
      { heading: "Điểm đến quyết định cách chọn xe", paragraphs: ["Khi tìm “xe Hải Phòng Quảng Ninh”, người dùng có thể muốn đến các khu vực khác nhau. Vì vậy, một danh sách chung không thể thay thế việc xác nhận điểm trả cụ thể.", "Phong Cách tiếp nhận nhu cầu trên tuyến Hải Phòng – Quảng Ninh. Khi gọi, khách nên nói rõ địa chỉ để bên mình kiểm tra xe thay vì mặc định một lộ trình cho toàn tỉnh."], bullets: ["Nơi đón tại Hải Phòng", "Điểm trả cụ thể tại Quảng Ninh", "Số người và hành lý", "Nhu cầu chiều đi hoặc chiều về"] },
      { heading: "Khi nào xe ghép là lựa chọn phù hợp?", paragraphs: ["Xe ghép đáng cân nhắc khi khách đi một mình hoặc nhóm nhỏ, muốn sử dụng xe 4–7 chỗ và có thể kết hợp chuyến với nhu cầu phù hợp khác.", "Khả năng ghép không cố định. Bạn nên gọi Phong Cách sớm, cung cấp đầy đủ thông tin và chờ bên mình kiểm tra xe." ] },
      { heading: "Khi nào nên hỏi bao xe?", paragraphs: ["Bao xe phù hợp hơn khi nhóm muốn đi riêng, có hành lý cần trao đổi trước hoặc cần không gian riêng cho gia đình. Phong Cách kiểm tra xe 4 chỗ hoặc 7 chỗ theo nhu cầu thực tế.", "Mọi thông tin về xe và chi phí cần được xác nhận trước chuyến; không nên dùng bảng giá của một nhà xe khác để suy ra giá của Phong Cách." ] },
    ],
    checklist: ["Điểm đón tại Hải Phòng", "Điểm trả tại Quảng Ninh", "Thời điểm", "Số khách", "Hành lý", "Hình thức ghép hay đi riêng"],
    faq: [
      { q: "Phong Cách có xe Hải Phòng – Quảng Ninh không?", a: "Có. Phong Cách tiếp nhận nhu cầu xe ghép, bao xe và gửi hàng trên tuyến cả hai chiều." },
      { q: "Có lịch chạy cố định trên website không?", a: "Không. Khách gọi để Phong Cách kiểm tra xe theo điểm đón trả và thời điểm thực tế." },
      { q: "Đi nhóm nhỏ có thể bao xe không?", a: "Có thể hỏi phương án bao xe. Loại xe phù hợp sẽ được trao đổi theo số người và hành lý." },
    ],
    routeSlug: "xe-ghep-hai-phong-quang-ninh",
    routeLabel: "Xe ghép Hải Phòng – Quảng Ninh",
  },
  {
    slug: "xe-ghep-hay-xe-khach-hai-duong-ha-noi",
    title: "Xe ghép hay xe khách khi đi Hải Dương – Hà Nội?",
    description: "So sánh xe ghép và xe khách Hải Dương – Hà Nội theo điểm đón trả, cách đặt chỗ, số người và nhu cầu đi riêng.",
    category: "So sánh dịch vụ",
    primaryKeyword: "xe ghép hay xe khách Hải Dương Hà Nội",
    secondaryKeywords: ["xe khách Hải Dương Hà Nội", "xe ghép Hải Dương Hà Nội", "nên đi xe ghép hay xe khách"],
    directAnswer: "Xe khách phù hợp khi bạn chủ động đến điểm đón của đơn vị vận tải. Xe ghép phù hợp khi muốn trao đổi nhu cầu đón trả bằng xe 4–7 chỗ và chấp nhận nhà xe kiểm tra khả năng ghép theo chuyến.",
    choices: [
      { title: "Chọn xe khách", bestFor: "Ưu tiên tuyến và điểm đón công bố", description: "Luôn xác nhận lịch và điểm dừng trực tiếp với đơn vị vận tải trước khi đi." },
      { title: "Chọn xe ghép", bestFor: "Ưu tiên trao đổi nhu cầu đón trả", description: "Phong Cách kiểm tra xe dựa trên thông tin thực tế của khách." },
      { title: "Chọn bao xe", bestFor: "Muốn đi riêng", description: "Phù hợp nhóm gia đình hoặc chuyến cần không gian riêng." },
    ],
    sections: [
      { heading: "Khác biệt lớn nhất nằm ở cách tổ chức chuyến", paragraphs: ["Xe khách thường vận hành theo điểm và cách đặt chỗ mà đơn vị vận tải công bố. Xe ghép là hình thức nhà xe kiểm tra khả năng kết hợp những nhu cầu phù hợp trên cùng tuyến.", "Vì cách tổ chức khác nhau, khách không nên chỉ so sánh bằng một con số. Hãy cân nhắc tổng thể điểm đón, điểm trả, số lần đổi phương tiện và nhu cầu hành lý." ] },
      { heading: "Ai thường tìm xe ghép Hải Dương – Hà Nội?", paragraphs: ["Nhóm khách phổ biến là người đi một mình, nhóm nhỏ, người đi công tác, đi khám bệnh hoặc về thăm gia đình. Điều họ quan tâm thường là khả năng trao đổi chuyến trực tiếp với nhà xe.", "Phong Cách có xe tuyến Hải Dương – Hà Nội cả hai chiều. Tình trạng ghép được kiểm tra sau khi biết nơi đón, nơi trả và thời điểm mong muốn."], bullets: ["Khách lẻ và nhóm nhỏ", "Người có hành lý vừa phải", "Khách cần hỏi chuyến chiều về", "Người muốn đi bằng xe 4–7 chỗ"] },
      { heading: "Ba câu hỏi nên đặt trước khi chọn", paragraphs: ["Hãy hỏi đơn vị vận tải về nơi đón, nơi trả và cách xác nhận chuyến. Với Phong Cách, khách cũng nên nói rõ mình muốn xe ghép hay bao xe để bên mình kiểm tra đúng nhu cầu.", "Nếu thông tin trên một bài tổng hợp không còn mới, hãy ưu tiên xác nhận trực tiếp thay vì mặc định lịch hoặc giá vẫn còn áp dụng." ] },
    ],
    checklist: ["Có thuận tiện đến điểm đón không?", "Có cần trao đổi nơi trả cụ thể không?", "Đi một mình hay theo nhóm?", "Có cần đi riêng không?", "Có hành lý đặc biệt không?"],
    faq: [
      { q: "Xe ghép có lịch cố định như xe khách không?", a: "Không nhất thiết. Với Phong Cách, khách gọi để kiểm tra khả năng bố trí xe theo chuyến thực tế." },
      { q: "Đi gia đình nên chọn xe nào?", a: "Nếu muốn đi riêng, bạn có thể cân nhắc bao xe 4–7 chỗ và trao đổi số khách, hành lý khi gọi." },
      { q: "Phong Cách có nhận chiều Hà Nội về Hải Dương không?", a: "Có. Tuyến được tiếp nhận cả hai chiều; hãy gọi để kiểm tra xe." },
    ],
    routeSlug: "xe-ghep-hai-duong-ha-noi",
    routeLabel: "Xe ghép Hải Dương – Hà Nội",
  },
  {
    slug: "cach-dat-xe-ghep-hai-duong-quang-ninh",
    title: "Cách đặt xe ghép Hải Dương – Quảng Ninh",
    description: "Hướng dẫn chuẩn bị nơi đón, điểm trả, số khách và hành lý khi gọi đặt xe ghép Hải Dương – Quảng Ninh với Phong Cách.",
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
      { heading: "Bước 2: Nói rõ xe ghép hay bao xe", paragraphs: ["Nếu chấp nhận kết hợp chuyến, hãy hỏi xe ghép. Nếu muốn đi riêng, hãy hỏi bao xe 4–7 chỗ. Hai nhu cầu này được kiểm tra theo cách khác nhau.", "Trường hợp chưa biết nên chọn gì, hãy mô tả ưu tiên của bạn. Phong Cách có thể giải thích phương án phù hợp để khách tự quyết định." ] },
      { heading: "Bước 3: Chỉ chốt sau khi đã xác nhận", paragraphs: ["Trước khi quyết định, khách cần nghe lại các thông tin quan trọng của chuyến. Những thông tin chưa được Phong Cách xác nhận không nên được xem là cam kết.", "Website không đăng lịch hoặc thời gian cố định cho tuyến này vì điều kiện chuyến thay đổi theo nơi đón, nơi trả và tình trạng xe." ] },
    ],
    checklist: ["Đủ nơi đón và điểm trả", "Đã nói rõ số khách", "Đã báo hành lý", "Đã chọn ghép hay đi riêng", "Đã nghe xác nhận từ Phong Cách"],
    faq: [
      { q: "Có thể đặt xe ghép ngay trên website không?", a: "Bạn có thể gửi thông tin chuyến qua biểu mẫu; Phong Cách sẽ liên hệ lại để kiểm tra và xác nhận." },
      { q: "Chỉ ghi đi Quảng Ninh có đủ không?", a: "Chưa đủ. Bạn nên cho biết điểm trả cụ thể để bên mình kiểm tra đúng chuyến." },
      { q: "Có cần đặt cả chiều về cùng lúc không?", a: "Nếu đã có nhu cầu chiều về, bạn nên báo ngay để Phong Cách kiểm tra cả hai chiều." },
    ],
    routeSlug: "xe-ghep-hai-duong-quang-ninh",
    routeLabel: "Xe ghép Hải Dương – Quảng Ninh",
  },
  {
    slug: "gui-hang-hai-duong-hai-phong-theo-chuyen",
    title: "Gửi hàng Hải Dương – Hải Phòng theo chuyến cần chuẩn bị gì?",
    description: "Danh sách thông tin cần chuẩn bị khi gửi hàng Hải Dương – Hải Phòng theo chuyến: loại hàng, kích thước, nơi nhận và người liên hệ.",
    category: "Gửi hàng theo chuyến",
    primaryKeyword: "gửi hàng Hải Dương Hải Phòng theo chuyến",
    secondaryKeywords: ["xe ghép gửi hàng Hải Dương Hải Phòng", "gửi đồ Hải Dương Hải Phòng", "xe gửi hàng theo chuyến"],
    directAnswer: "Bạn nên chuẩn bị tên hàng, kích thước, khối lượng ước tính, cách đóng gói, nơi nhận – giao và số điện thoại người liên hệ. Phong Cách sẽ kiểm tra chuyến phù hợp sau khi biết đầy đủ thông tin.",
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
      { q: "Phong Cách có nhận gửi hàng Hải Dương – Hải Phòng không?", a: "Có tiếp nhận nhu cầu gửi hàng theo chuyến. Việc nhận hàng được xác nhận sau khi biết loại hàng và tình trạng chuyến." },
      { q: "Có nhận mọi loại hàng không?", a: "Không thể mặc định. Bạn cần mô tả chính xác loại hàng để Phong Cách kiểm tra trước." },
      { q: "Giá gửi hàng được tính thế nào?", a: "Mức cụ thể được trao đổi dựa trên kiện hàng, nơi giao nhận và chuyến thực tế." },
    ],
    routeSlug: "xe-ghep-hai-duong-hai-phong",
    routeLabel: "Xe Hải Dương – Hải Phòng",
  },
  {
    slug: "xe-hai-duong-di-noi-bai-cho-gia-dinh",
    title: "Chọn xe Hải Dương đi Nội Bài cho gia đình",
    description: "Gia đình đi Hải Dương – Nội Bài nên chuẩn bị số khách, hành lý và thông tin chuyến thế nào khi chọn xe ghép hoặc bao xe.",
    category: "Xe đi sân bay",
    primaryKeyword: "xe Hải Dương đi Nội Bài cho gia đình",
    secondaryKeywords: ["xe Hải Dương Nội Bài", "bao xe Hải Dương đi Nội Bài", "xe 7 chỗ Hải Dương Nội Bài"],
    directAnswer: "Gia đình nên chọn xe theo số người, hành lý và nhu cầu đi riêng. Nếu muốn không gian riêng hoặc có nhiều đồ, hãy hỏi bao xe 4–7 chỗ; Phong Cách sẽ kiểm tra xe Hải Dương – Nội Bài theo chuyến thực tế.",
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
      { q: "Phong Cách có xe Hải Dương đi Nội Bài không?", a: "Có. Phong Cách tiếp nhận nhu cầu xe ghép và bao xe tuyến Hải Dương – Nội Bài." },
      { q: "Gia đình nên chọn xe 4 hay 7 chỗ?", a: "Cần dựa trên số người và hành lý. Hãy cung cấp thông tin để Phong Cách kiểm tra xe phù hợp." },
      { q: "Có thể đặt chiều Nội Bài về Hải Dương không?", a: "Có thể gửi nhu cầu chiều về; Phong Cách sẽ kiểm tra theo thời điểm và thông tin chuyến thực tế." },
    ],
    routeSlug: "xe-hai-duong-noi-bai",
    routeLabel: "Xe Hải Dương – Nội Bài",
  },
  {
    slug: "xe-ha-noi-ve-hai-duong-chon-phuong-tien-nao",
    title: "Xe Hà Nội về Hải Dương: chọn phương tiện nào?",
    description: "Gợi ý chọn xe khách, xe ghép hoặc bao xe khi cần xe Hà Nội về Hải Dương; gọi Phong Cách để kiểm tra xe theo nhu cầu thực tế.",
    category: "Tư vấn phương tiện",
    primaryKeyword: "xe Hà Nội về Hải Dương",
    secondaryKeywords: ["xe Hà Nội Hải Dương", "xe ghép Hà Nội Hải Dương", "xe từ Hà Nội về Hải Dương"],
    directAnswer: "Bạn có thể chọn xe khách, xe ghép hoặc bao xe khi đi từ Hà Nội về Hải Dương. Nếu muốn trao đổi điểm đón trả và đi bằng xe 4–7 chỗ, hãy gọi Phong Cách để bên mình kiểm tra xe ghép hoặc bao xe phù hợp.",
    choices: [
      { title: "Xe khách", bestFor: "Khách phù hợp với điểm đón của nhà xe", description: "Nên xác nhận trực tiếp điểm đón, điểm trả và cách đặt chỗ trước khi đi." },
      { title: "Xe ghép", bestFor: "Khách lẻ hoặc nhóm nhỏ", description: "Phong Cách kiểm tra khả năng ghép theo thông tin chuyến thực tế." },
      { title: "Bao xe", bestFor: "Gia đình hoặc nhóm muốn đi riêng", description: "Có thể trao đổi xe 4–7 chỗ theo số người và hành lý." },
    ],
    sections: [
      { heading: "Chọn xe theo nhu cầu thay vì chỉ nhìn tên loại xe", paragraphs: ["Mỗi người có một ưu tiên khác nhau khi tìm xe Hà Nội về Hải Dương. Có người cần đi một mình, có người đi cùng gia đình, mang nhiều hành lý hoặc muốn trao đổi điểm đón trả cụ thể.", "Vì vậy, bạn nên so sánh theo số người, hành lý, nhu cầu đi ghép hay đi riêng. Phong Cách có xe cho chiều Hà Nội về Hải Dương và sẽ kiểm tra theo thông tin khách cung cấp."], bullets: ["Đi một mình hay theo nhóm", "Nơi muốn đón tại Hà Nội", "Nơi muốn trả tại Hải Dương", "Hành lý hoặc đồ mang theo", "Nhu cầu ghép chuyến hay bao xe"] },
      { heading: "Khi nào nên gọi xe ghép Hà Nội – Hải Dương?", paragraphs: ["Xe ghép phù hợp khi khách muốn sử dụng xe 4–7 chỗ và có thể kết hợp với chuyến phù hợp khác. Khả năng bố trí phụ thuộc nơi đón, nơi trả, thời điểm và tình trạng xe.", "Phong Cách không công bố lịch cố định cho mọi chuyến. Cách nhanh nhất là gọi, nói rõ nhu cầu và chờ bên mình kiểm tra xe." ] },
      { heading: "Khi nào bao xe phù hợp hơn?", paragraphs: ["Bao xe đáng cân nhắc khi gia đình hoặc nhóm muốn đi riêng, có nhiều hành lý, đi cùng trẻ nhỏ hoặc người lớn tuổi.", "Hãy cho Phong Cách biết số người và hành lý để kiểm tra xe 4 chỗ hoặc 7 chỗ phù hợp. Thông tin chuyến và chi phí được xác nhận trước khi khách quyết định." ] },
    ],
    checklist: ["Điểm đón tại Hà Nội", "Điểm trả tại Hải Dương", "Ngày và thời điểm muốn đi", "Số khách", "Hành lý", "Xe ghép hay bao xe"],
    faq: [
      { q: "Phong Cách có xe Hà Nội về Hải Dương không?", a: "Có. Phong Cách tiếp nhận nhu cầu xe ghép và bao xe Hà Nội – Hải Dương cả hai chiều. Hãy gọi để kiểm tra xe." },
      { q: "Có lịch chạy cố định trên website không?", a: "Không. Xe được kiểm tra theo thời điểm, nơi đón trả và tình trạng chuyến thực tế." },
      { q: "Đi nhóm gia đình có thể bao xe không?", a: "Có thể. Bạn nên cung cấp số người và lượng hành lý để Phong Cách kiểm tra loại xe phù hợp." },
    ],
    routeSlug: "xe-ghep-hai-duong-ha-noi",
    routeLabel: "Xe ghép Hải Dương – Hà Nội",
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
      { q: "Phong Cách có xe Hải Phòng về Hải Dương không?", a: "Có. Phong Cách phục vụ tuyến Hải Dương – Hải Phòng cả hai chiều và kiểm tra xe theo nhu cầu thực tế." },
      { q: "Có thể đặt xe ghép cho một người không?", a: "Bạn có thể gửi nhu cầu. Khả năng ghép còn phụ thuộc chuyến phù hợp tại thời điểm kiểm tra." },
      { q: "Muốn đi riêng thì đặt thế nào?", a: "Hãy nói rõ nhu cầu bao xe, số khách và hành lý để Phong Cách kiểm tra xe 4–7 chỗ." },
    ],
    routeSlug: "xe-ghep-hai-duong-hai-phong",
    routeLabel: "Xe ghép Hải Dương – Hải Phòng",
  },
  {
    slug: "xe-hai-duong-di-cat-bi-chon-xe-ghep-hay-bao-xe",
    title: "Xe Hải Dương đi Cát Bi: chọn xe ghép hay bao xe?",
    description: "So sánh xe ghép và bao xe Hải Dương đi sân bay Cát Bi theo số khách, hành lý và nhu cầu đi riêng; gọi Phong Cách để kiểm tra xe.",
    category: "Xe đi sân bay",
    primaryKeyword: "xe Hải Dương đi Cát Bi",
    secondaryKeywords: ["xe ghép Hải Dương Cát Bi", "xe Hải Dương sân bay Cát Bi", "xe Cát Bi về Hải Dương"],
    directAnswer: "Khách lẻ hoặc nhóm nhỏ có thể hỏi xe ghép Hải Dương – Cát Bi; gia đình, nhóm riêng hoặc khách nhiều hành lý có thể cân nhắc bao xe. Hãy gọi Phong Cách và cung cấp thông tin chuyến bay để bên mình kiểm tra xe phù hợp.",
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
      { q: "Phong Cách có xe Hải Dương đi Cát Bi không?", a: "Có. Phong Cách tiếp nhận nhu cầu xe ghép và bao xe Hải Dương – sân bay Cát Bi cả hai chiều." },
      { q: "Đi một người có thể đặt xe ghép không?", a: "Có thể gửi nhu cầu. Phong Cách sẽ kiểm tra khả năng ghép theo chuyến thực tế." },
      { q: "Nhiều vali nên chọn xe nào?", a: "Bạn cần mô tả số lượng và kích thước hành lý để Phong Cách kiểm tra xe 4 chỗ hoặc 7 chỗ phù hợp." },
    ],
    routeSlug: "xe-hai-duong-cat-bi",
    routeLabel: "Xe Hải Dương – sân bay Cát Bi",
  },
  {
    slug: "dat-xe-hai-duong-ha-noi-can-thong-tin-gi",
    title: "Đặt xe Hải Dương – Hà Nội cần cung cấp thông tin gì?",
    description: "Danh sách thông tin cần chuẩn bị khi đặt xe Hải Dương – Hà Nội để Phong Cách kiểm tra xe ghép hoặc bao xe nhanh hơn.",
    category: "Kinh nghiệm đặt xe",
    primaryKeyword: "đặt xe Hải Dương Hà Nội",
    secondaryKeywords: ["đặt xe ghép Hải Dương Hà Nội", "xe Hải Dương Hà Nội", "gọi xe Hải Dương đi Hà Nội"],
    directAnswer: "Để đặt xe Hải Dương – Hà Nội, bạn nên cung cấp nơi đón, nơi trả, thời điểm, số khách, hành lý và nhu cầu xe ghép hay bao xe. Phong Cách sẽ dựa vào đó để kiểm tra xe và xác nhận thông tin chuyến.",
    choices: [
      { title: "Gọi hotline", bestFor: "Khách muốn trao đổi nhanh", description: "Chuẩn bị sẵn thông tin chuyến để Phong Cách kiểm tra ngay trong cuộc gọi." },
      { title: "Nhắn Zalo", bestFor: "Khách cần gửi địa chỉ hoặc ảnh hành lý", description: "Gửi đủ thông tin và để lại số điện thoại liên hệ." },
      { title: "Đặt trên website", bestFor: "Khách muốn gửi yêu cầu", description: "Điền rõ nơi đón trả, thời điểm, số khách và loại nhu cầu." },
    ],
    sections: [
      { heading: "Thông tin tối thiểu khi đặt xe", paragraphs: ["Nhà xe chỉ có thể kiểm tra đúng khi biết nhu cầu cụ thể. Nếu thiếu nơi đón, nơi trả hoặc số khách, quá trình trao đổi thường phải lặp lại nhiều lần.", "Hãy chuẩn bị đủ thông tin trước khi gọi hoặc nhắn. Phong Cách có xe cho tuyến Hải Dương – Hà Nội cả hai chiều và sẽ kiểm tra theo chuyến thực tế."], bullets: ["Chiều đi", "Nơi đón", "Nơi trả", "Ngày và thời điểm", "Số khách", "Hành lý", "Xe ghép hay bao xe"] },
      { heading: "Vì sao không có một lịch chung cho mọi khách?", paragraphs: ["Nhu cầu đón trả và tình trạng chuyến có thể thay đổi. Vì vậy, một lịch chung không thể thay thế việc kiểm tra trực tiếp cho từng yêu cầu.", "Bài viết cũng không cam kết cứng lộ trình, quãng đường hay thời lượng. Phong Cách sẽ trao đổi thông tin phù hợp sau khi nhận đủ nhu cầu." ] },
      { heading: "Cách xác nhận trước chuyến", paragraphs: ["Sau khi được tư vấn, bạn nên kiểm tra lại chiều đi, điểm đón trả, số khách, hành lý và hình thức ghép hay bao xe.", "Nếu có thay đổi, hãy báo sớm để Phong Cách kiểm tra lại. Mọi thông tin quan trọng nên được xác nhận trước khi khách khởi hành." ] },
    ],
    checklist: ["Chiều đi đã đúng", "Điểm đón trả đã rõ", "Thời điểm đã thống nhất", "Số khách chính xác", "Hành lý đã mô tả", "Số điện thoại liên hệ"],
    faq: [
      { q: "Có thể đặt xe Hải Dương – Hà Nội trên website không?", a: "Có thể gửi yêu cầu trên website hoặc gọi trực tiếp. Phong Cách sẽ kiểm tra và xác nhận lại theo chuyến thực tế." },
      { q: "Có cần nói rõ xe ghép hay bao xe không?", a: "Nên nói rõ ưu tiên. Nếu chưa biết chọn loại nào, hãy cung cấp số khách và hành lý để được tư vấn." },
      { q: "Phong Cách có nhận chiều Hà Nội về Hải Dương không?", a: "Có. Tuyến được tiếp nhận cả hai chiều; khách cần nói rõ chiều đi khi liên hệ." },
    ],
    routeSlug: "xe-ghep-hai-duong-ha-noi",
    routeLabel: "Xe ghép Hải Dương – Hà Nội",
  },
  {
    slug: "gui-hang-hai-duong-ha-noi-theo-chuyen",
    title: "Gửi hàng Hải Dương – Hà Nội theo chuyến cần lưu ý gì?",
    description: "Hướng dẫn chuẩn bị thông tin khi gửi hàng Hải Dương – Hà Nội theo chuyến; gọi Phong Cách để kiểm tra loại hàng và khả năng nhận.",
    category: "Gửi hàng theo chuyến",
    primaryKeyword: "gửi hàng Hải Dương Hà Nội theo chuyến",
    secondaryKeywords: ["gửi đồ Hải Dương Hà Nội", "ship hàng Hải Dương Hà Nội", "gửi hàng theo xe Hải Dương Hà Nội"],
    directAnswer: "Khi gửi hàng Hải Dương – Hà Nội theo chuyến, bạn cần mô tả loại hàng, kích thước, khối lượng, cách đóng gói và nơi giao nhận. Hãy gọi Phong Cách để bên mình kiểm tra khả năng nhận trên chuyến thực tế.",
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
      { q: "Phong Cách có nhận gửi hàng Hải Dương – Hà Nội không?", a: "Phong Cách có tiếp nhận nhu cầu gửi hàng theo chuyến và sẽ xác nhận sau khi biết loại hàng cùng tình trạng xe." },
      { q: "Có nhận mọi loại hàng không?", a: "Không. Loại hàng, cách đóng gói và khả năng sắp xếp cần được kiểm tra trước." },
      { q: "Có thể gửi hàng chiều Hà Nội về Hải Dương không?", a: "Bạn có thể gửi nhu cầu cả hai chiều. Phong Cách sẽ kiểm tra theo chuyến thực tế." },
    ],
    routeSlug: "xe-ghep-hai-duong-ha-noi",
    routeLabel: "Xe Hải Dương – Hà Nội",
  },
];

export function guidePostForSlug(slug: string) {
  return guidePosts.find((post) => post.slug === slug);
}
