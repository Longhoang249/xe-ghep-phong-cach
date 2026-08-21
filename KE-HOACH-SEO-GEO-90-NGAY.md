# Kế hoạch SEO/GEO 90 ngày — Xe Ghép Phong Cách

**Website:** https://xeghepphongcach.com  
**Ngày lập:** 19/08/2026  
**Phạm vi:** xe ghép Hải Dương ⇄ Hải Phòng ⇄ Quảng Ninh, cả hai chiều  
**Mục tiêu:** tăng hiện diện tìm kiếm có ý định đặt xe, xây thực thể địa phương rõ ràng và tăng khả năng được trích dẫn trong câu trả lời do AI tạo.

> SEO không thể cam kết thứ hạng. Các mốc dưới đây là kỳ vọng có điều kiện, phụ thuộc tuổi domain, chất lượng dịch vụ thực, review, backlink/citation, tốc độ xuất bản và mức cạnh tranh. Không dùng số liệu volume bịa ước lượng khi chưa có Google Keyword Planner/Search Console.

## 1. Tóm tắt điều hành

Chiến lược nên bắt đầu bằng **3 trang trụ cột tuyến hai chiều**, sau đó mở rộng thành cụm trang điểm đón/trả có nhu cầu thực. Không tạo hai trang xuôi/ngược gần như giống nhau; mỗi trang phải có giá, giờ, khu vực đón, lộ trình, FAQ và bằng chứng riêng.

Ba trang trụ cột:

1. `/xe-ghep-hai-duong-hai-phong` — Hải Dương ⇄ Hải Phòng
2. `/xe-ghep-hai-duong-quang-ninh` — Hải Dương ⇄ Quảng Ninh
3. `/xe-ghep-hai-phong-quang-ninh` — Hải Phòng ⇄ Quảng Ninh

Lợi thế có thể khai thác: SERP hiện có nhiều trang chung chung, nội dung cũ, nhắc thông tin dịch/Tết 2023 hoặc gom rất nhiều tỉnh trên một trang. Website có thể khác biệt bằng giá được xác minh, phạm vi đón trả cụ thể, hình xe/tài xế thật, review thật, thời gian cập nhật và luồng đặt xe rõ ràng.

## 2. Baseline website ngày 19/08/2026

### Đã hoàn tất

- Domain gốc đã gắn vào Vercel project `xe-ghep-phong-cach`, trạng thái verified.
- `https://xeghepphongcach.com` trả HTTP 200 và có SSL/HSTS.
- `https://www.xeghepphongcach.com` chuyển hướng 308 về domain gốc.
- `NEXT_PUBLIC_SITE_URL=https://xeghepphongcach.com` đã được đặt cho production và deploy lại.
- Canonical trang chủ, `robots.txt` và `sitemap.xml` đều dùng domain mới.
- Website đã có metadata, sitemap, robots, FAQ JSON-LD và `TaxiService` JSON-LD cơ bản.

### Khoảng trống cần xử lý

- Chưa có trang Hải Phòng ⇄ Quảng Ninh.
- Hai trang trọng tâm hiện chỉ viết theo chiều Hải Dương → Hải Phòng/Quảng Ninh, chưa phủ rõ ý định chiều về.
- Nội dung tuyến còn mỏng và dùng chung FAQ; chưa có bảng giá theo điểm, khung giờ, điểm đón, chính sách hành lý/gửi đồ, quy trình xử lý trễ/hủy.
- Bảng giá trong code đang được ghi chú là giá demo, cần nhà xe xác minh trước khi dùng làm nội dung SEO.
- Schema doanh nghiệp chưa có địa chỉ, giờ hoạt động, logo chuẩn, `sameAs`, `contactPoint`, `hasOfferCatalog` và thông tin pháp nhân/chủ thể.
- Chưa có trang Giới thiệu, Liên hệ, chính sách đặt/hủy, đội xe/tài xế, an toàn và bằng chứng chuyến đi.
- Chưa có dữ liệu GSC/GA4/Bing Webmaster Tools để biết impression, CTR, vị trí và conversion thực.

## 3. Phương pháp nghiên cứu từ khóa

Danh sách dưới đây kết hợp:

- **AC:** truy vấn xuất hiện trên Google Autocomplete, lấy mẫu với `hl=vi`, `gl=vn` ngày 19/08/2026.
- **SERP:** truy vấn/biến thể đang được các trang xếp hạng sử dụng trong title, heading hoặc nội dung.
- **EXP:** từ khóa mở rộng theo ý định thương mại; cần xác thực bằng GSC/Keyword Planner sau khi có dữ liệu.

Autocomplete phản ánh truy vấn phổ biến/liên quan, nhưng **không phải số lượt tìm kiếm**. Độ ưu tiên dưới đây dựa trên ý định đặt xe, độ khớp dịch vụ và khoảng trống SERP.

## 4. Danh sách từ khóa ưu tiên

### P0 — Từ khóa tiền, phải phủ trong 30 ngày đầu

| Cụm từ khóa | Tín hiệu | Ý định | Trang đích |
|---|---|---|---|
| xe ghép Hải Dương Hải Phòng | AC + SERP | Đặt xe | `/xe-ghep-hai-duong-hai-phong` |
| xe ghép Hải Phòng Hải Dương | AC + SERP | Đặt chiều về | Cùng trang, section riêng |
| xe ghép Hải Dương đi Hải Phòng | AC | Đặt xe | Cùng trang |
| xe ghép Hải Phòng đi Hải Dương | AC | Đặt chiều về | Cùng trang |
| giá xe ghép Hải Dương Hải Phòng | AC + SERP | So sánh giá | Bảng giá trong trang |
| taxi ghép Hải Dương Hải Phòng | AC | Đặt xe | Cùng trang |
| taxi Hải Dương đi Hải Phòng | AC | Thuê xe | Cùng trang |
| xe ghép Hải Dương Quảng Ninh | AC + SERP | Đặt xe | `/xe-ghep-hai-duong-quang-ninh` |
| xe ghép Quảng Ninh Hải Dương | AC + SERP | Đặt chiều về | Cùng trang, section riêng |
| xe ghép Hải Dương đi Quảng Ninh | AC | Đặt xe | Cùng trang |
| xe ghép Quảng Ninh đi Hải Dương | AC | Đặt chiều về | Cùng trang |
| xe ghép Quảng Ninh về Hải Dương | AC | Chiều về/tiện chuyến | Cùng trang |
| xe ghép Hải Phòng Quảng Ninh | AC + SERP | Đặt xe | `/xe-ghep-hai-phong-quang-ninh` |
| xe ghép Quảng Ninh Hải Phòng | AC + SERP | Đặt chiều về | Cùng trang, section riêng |
| xe ghép Hải Phòng đi Quảng Ninh | AC | Đặt xe | Cùng trang |
| xe ghép Hải Dương Hải Phòng Quảng Ninh | AC + SERP | Tìm nhà xe phủ tuyến | Trang chủ + `/tuyen-xe` |
| xe ghép Hải Dương Hải Phòng sân bay Cát Bi | AC | Sân bay | `/xe-hai-duong-cat-bi` |
| xe ghép Hải Dương Cát Bi | AC | Sân bay | `/xe-hai-duong-cat-bi` |
| xe ghép sân bay Cát Bi về Hải Dương | AC | Chiều về sân bay | Cùng trang, section riêng |

### P1 — Từ khóa địa danh có tín hiệu, triển khai ngày 31–60

| Cụm từ khóa | Tín hiệu | Trang đích khuyến nghị |
|---|---|---|
| xe ghép Hải Dương Hạ Long | AC + SERP | `/xe-ghep-hai-duong-ha-long` |
| xe ghép Hải Dương Hạ Long Quảng Ninh | AC | Cùng trang |
| xe ghép Hạ Long Hải Dương | SERP | Section chiều về có giá/lịch riêng |
| xe ghép Hải Dương Bãi Cháy | AC | `/xe-ghep-hai-duong-bai-chay` |
| xe ghép Hải Dương Vân Đồn | AC | `/xe-ghep-hai-duong-van-don` |
| xe ghép Hải Phòng Hạ Long | AC + SERP | `/xe-ghep-hai-phong-ha-long` |
| xe ghép Hải Phòng Uông Bí | AC | `/xe-ghep-hai-phong-uong-bi` |
| xe ghép Hải Phòng Cẩm Phả | AC | `/xe-ghep-hai-phong-cam-pha` |
| xe ghép Hải Phòng Cẩm Phả Quảng Ninh | AC | Cùng trang |
| xe ghép Hải Phòng Vân Đồn | AC | `/xe-ghep-hai-phong-van-don` |
| xe ghép Hải Phòng Vân Đồn Quảng Ninh | AC | Cùng trang |
| xe ghép Hải Phòng Móng Cái | AC + SERP | `/xe-ghep-hai-phong-mong-cai` |
| xe ghép Hải Phòng Ninh Giang | AC | Chỉ tạo nếu nhà xe phục vụ thực |
| xe ghép Hải Phòng Thanh Hà Hải Dương | AC | Chỉ tạo nếu có lịch/giá riêng |

### P2 — Biến thể thương mại và nhu cầu phụ, ngày 61–90

| Nhóm | Từ khóa |
|---|---|
| Giá | giá xe ghép Hải Dương Quảng Ninh; giá xe ghép Hải Phòng Quảng Ninh; bảng giá xe ghép 2 chiều |
| Chuyển đổi | số điện thoại xe ghép [tuyến]; hotline xe ghép [tuyến]; đặt xe ghép [tuyến]; xe ghép gần đây |
| Dịch vụ | xe tiện chuyến [tuyến]; taxi ghép [tuyến]; xe đi chung [tuyến]; bao xe [tuyến]; xe riêng 4 chỗ/7 chỗ [tuyến] |
| Thuộc tính | đón trả tận nơi; 24/7; giá rẻ; chạy hàng ngày; không bắt khách dọc đường; đúng giờ |
| Nhóm khách | xe ghép đi công tác; đi bệnh viện; đi du lịch; gia đình; 1 người; nhóm 4–6 người |
| Hàng hóa | gửi đồ theo xe [tuyến]; ship hỏa tốc [tuyến]; gửi hàng 2 chiều — chỉ tối ưu nếu dịch vụ có thật |
| Thời điểm | xe ghép sáng sớm/tối muộn; xe ghép lễ Tết; xe ghép hôm nay — cần năng lực cập nhật tồn chỗ |

### Từ khóa nên loại trừ hoặc tách rõ

- `xe tải ghép`, `xe ghép hàng`: ý định logistics, không gom vào trang chở khách.
- `xe khách`, `xe buýt`, `lịch bến xe`: chỉ dùng cho bài so sánh, không để Google hiểu nhầm loại hình kinh doanh.
- Tên đối thủ/số điện thoại đối thủ: không dùng để “chiếm” truy vấn, tránh gây nhầm lẫn thương hiệu.

## 5. Bản đồ nội dung và cấu trúc trang

### Mẫu trang trụ cột tuyến

Mỗi trang trụ cột phải có nội dung thực, không chỉ thay tên địa phương:

1. H1 nêu cả hai chiều, ví dụ: `Xe ghép Hải Dương – Hải Phòng 2 chiều`.
2. Khối trả lời nhanh 40–60 từ: giá từ bao nhiêu, thời gian, khu vực đón, cách đặt.
3. Bảng giá hai chiều: ghép 1 ghế, 2 ghế, bao xe 4 chỗ, bao xe 7 chỗ, gửi đồ; ghi ngày cập nhật và điều kiện phụ thu.
4. Khung giờ/lịch chạy thật; nếu không cố định, ghi rõ `ghép theo yêu cầu, nên đặt trước X phút`.
5. Ma trận điểm đón/trả thật: phường/xã, bến, bệnh viện, khu công nghiệp, sân bay; không liệt kê nơi không phục vụ.
6. Lộ trình, quãng đường và thời gian theo tình huống giao thông.
7. Hai section riêng cho chiều đi và chiều về, có CTA được gắn tham số tuyến.
8. Hình xe, biển hiệu, khoang hành lý và tài xế thật; alt text mô tả đúng hình.
9. Review chuyến thật có ngày/tuyến; không tự tạo rating.
10. FAQ riêng theo tuyến: trẻ em, hành lý, thú cưng, đón sân bay, hủy/trễ, thanh toán, hóa đơn.
11. `Service`/`TaxiService`, `Offer`, `areaServed`, `provider`, `availableChannel` và breadcrumb JSON-LD phù hợp nội dung hiển thị.
12. `datePublished`, `dateModified`, người viết/người duyệt có kinh nghiệm vận hành.

### Trang tin cậy bắt buộc

- `/gioi-thieu`: câu chuyện, chủ thể vận hành, đội xe, khu vực phục vụ.
- `/lien-he`: tên, hotline, Zalo, giờ trực, địa chỉ/vùng phục vụ, bản đồ nếu có điểm giao dịch thật.
- `/chinh-sach-dat-huy-xe`: đặt, đổi giờ, hủy, chờ, phụ thu, thanh toán.
- `/an-toan-va-doi-xe`: quy trình tài xế, bảo dưỡng, bảo hiểm, hình thật.
- `/bang-gia`: hub bảng giá có ngày cập nhật, liên kết về từng tuyến.

## 6. Kế hoạch 12 tuần

### Tháng 1 — Index, thực thể, ba trang trụ cột

**Tuần 1: Measurement và nền tảng**

- Tạo/xác minh Google Search Console Domain Property bằng DNS; submit sitemap.
- Cài GA4 hoặc analytics tôn trọng quyền riêng tư; đo `click_call`, `click_zalo`, `booking_start`, `booking_submit`, `route_view`.
- Xác minh Bing Webmaster Tools; submit sitemap và bật IndexNow.
- Tạo/xác minh Google Business Profile và Bing Places, chỉ dùng địa chỉ thật; nếu là service-area business thì ẩn địa chỉ theo quy định và khai báo vùng phục vụ.
- Chốt NAP: tên thương hiệu, hotline, địa chỉ/vùng phục vụ, giờ hoạt động; dùng nhất quán trên site/profile/danh bạ.
- Crawl baseline: indexability, status code, canonical, duplicate title, schema, mobile performance.

**Tuần 2: Entity và trust**

- Xuất bản Giới thiệu, Liên hệ, chính sách đặt/hủy, an toàn/đội xe.
- Hoàn thiện `Organization` + `TaxiService`/`LocalBusiness` schema bằng dữ liệu thật.
- Thêm logo, `sameAs`, `contactPoint`, `areaServed`, giờ hoạt động, `hasOfferCatalog`.
- Tạo quy trình xin review sau chuyến, không tặng thưởng đổi lấy review tích cực.

**Tuần 3: Trụ cột Hải Dương ⇄ Hải Phòng**

- Nâng cấp URL hiện tại theo template 12 mục.
- Xác minh và công bố giá thật; phủ Cát Bi, An Dương, An Lão, Thủy Nguyên, Kiến Thụy, Đồ Sơn, Cát Hải nếu có phục vụ.
- Thêm nội dung chiều Hải Phòng → Hải Dương và CTA prefill.
- Yêu cầu index URL trong GSC sau khi kiểm tra Rich Results.

**Tuần 4: Hai trụ cột còn lại**

- Nâng cấp Hải Dương ⇄ Quảng Ninh.
- Tạo Hải Phòng ⇄ Quảng Ninh.
- Tạo internal link theo tam giác ba tuyến, breadcrumb và hub `/tuyen-xe`.
- Chụp/tạo bộ ảnh thật cho từng tuyến; tối ưu WebP/AVIF, kích thước và alt.

### Tháng 2 — Cụm địa danh và Local SEO

**Tuần 5**

- Xuất bản Hải Dương ⇄ Hạ Long và Hải Dương ⇄ Bãi Cháy.
- Tạo bài hướng dẫn: `Từ Hải Dương đi Hạ Long mất bao lâu, giá bao nhiêu?`

**Tuần 6**

- Xuất bản Hải Phòng ⇄ Hạ Long và Hải Phòng ⇄ Uông Bí.
- Thêm trang bảng giá hub và bảng so sánh xe ghép/bao xe/xe khách theo nhu cầu.

**Tuần 7**

- Xuất bản Hải Phòng ⇄ Cẩm Phả và Hải Phòng ⇄ Vân Đồn.
- Bổ sung bằng chứng first-party: số chuyến, thời gian đón trung vị, tỉ lệ đúng giờ — chỉ công bố khi dữ liệu đủ và đã ẩn danh.

**Tuần 8**

- Xuất bản Hải Dương ⇄ Vân Đồn và Hải Phòng ⇄ Móng Cái nếu có năng lực phục vụ thực.
- Cập nhật GBP: dịch vụ, ảnh, Q&A, bài đăng tuyến; xin review đều sau chuyến.
- Audit cannibalization: mỗi truy vấn chính chỉ có một URL đích rõ ràng.

### Tháng 3 — Authority, GEO và tối ưu theo dữ liệu

**Tuần 9**

- Xuất bản 2 bài giải đáp có dữ liệu thực: giá hai chiều; nên đặt trước bao lâu.
- Thêm `dateModified`, người duyệt, nguồn dữ liệu và khối answer-first cho toàn bộ trang tiền.
- Kiểm tra Bing AI Performance: citation, cited pages, grounding queries.

**Tuần 10**

- Digital PR/local citation: đăng thông tin nhất quán trên danh bạ/doanh nghiệp/du lịch địa phương có kiểm duyệt.
- Hợp tác backlink thật với khách sạn, homestay, điểm du lịch, đơn vị công tác/sự kiện; không mua link rác.
- Xuất bản một tài nguyên có thể được trích dẫn: bản đồ điểm đón + bảng thời gian/giá cập nhật.

**Tuần 11**

- Dùng GSC để tìm query có impression cao, vị trí 8–30; mở rộng section tương ứng, không nhồi từ khóa.
- Viết lại title/meta của trang có impression nhưng CTR thấp; giữ title mô tả đúng và không giật tít.
- Tối ưu Core Web Vitals theo dữ liệu field; ưu tiên LCP, INP, CLS trên mobile.

**Tuần 12**

- Content decay audit: giá, giờ, điểm đón, schema, link hỏng, URL chưa index.
- Hợp nhất/noindex trang mỏng không có nhu cầu; không giữ trang chỉ để đủ số lượng.
- Báo cáo 90 ngày và chốt backlog quý tiếp theo theo query/conversion thực.

## 7. Checklist GEO — tối ưu cho câu trả lời AI

GEO không phải một thẻ meta mới. Nền tảng vẫn là crawl/index tốt, thực thể rõ, nội dung có bằng chứng và dễ trích dẫn.

- Trả lời câu hỏi chính trong 40–60 từ đầu mỗi section.
- Dùng heading là câu hỏi thật: `Giá bao nhiêu?`, `Mất bao lâu?`, `Đón ở đâu?`, `Chiều về đặt thế nào?`.
- Dùng bảng HTML, danh sách và câu ngắn; không để thông tin quan trọng chỉ nằm trong ảnh.
- Ghi rõ `Cập nhật ngày...`, điều kiện giá và người xác minh.
- Công bố dữ liệu first-party có phương pháp: số chuyến, mẫu thời gian, tỉ lệ đúng giờ; không bịa số.
- Dùng cùng một tên, hotline, logo, URL và mô tả trên website, GBP, Bing Places, Facebook/Zalo và danh bạ.
- Liên kết tới nguồn chính thức cho thông tin sân bay/giao thông/du lịch; tách rõ dữ liệu của nhà xe và dữ liệu tham khảo.
- Dùng schema khớp nội dung hiển thị; không thêm rating, giá hay availability không có trên trang.
- Bật IndexNow và kiểm tra Bing AI Performance để xem URL nào được trích dẫn, grounding query nào đang kích hoạt citation.
- Chưa ưu tiên `llms.txt`; hiện không thay thế sitemap, robots, schema hay nội dung có thẩm quyền.

## 8. KPI 30/60/90 ngày

### KPI đầu vào bắt buộc

| Mốc | KPI |
|---|---|
| 30 ngày | 3 trang trụ cột + 4 trang trust; GSC/Bing/analytics/GBP hoạt động; 100% URL tiền có canonical/schema/title riêng; giá đã xác minh |
| 60 ngày | 6–8 trang địa danh chất lượng; ≥10 review thật tích lũy đều; ≥10 citation/backlink địa phương có liên quan; không có lỗi index/schema nghiêm trọng |
| 90 ngày | 12–16 landing/resource pages chất lượng; quy trình cập nhật giá hàng tuần; dashboard query → lead; backlog quý 2 dựa trên conversion |

### Kỳ vọng kết quả có điều kiện

- **30 ngày:** index ổn định; có impression cho brand, domain và long-tail địa danh; một số long-tail có thể vào top 20.
- **60 ngày:** mục tiêu top 10–20 cho nhóm long-tail ít cạnh tranh; top 20–30 cho từ khóa tuyến chính; tăng click call/Zalo/booking từ organic.
- **90 ngày:** mục tiêu top 10 cho 2–4 truy vấn long-tail/chiều về có ý định cao; top 10–20 cho một số từ khóa tuyến chính. Top 3 các head term có thể cần 6–12 tháng và authority/review/backlink cao hơn.

Không dùng traffic là KPI duy nhất. KPI kinh doanh chính:

- Lead organic hợp lệ/tuần.
- Tỉ lệ `route_view → click_call/Zalo/booking_submit`.
- Chi phí nội dung trên mỗi lead organic.
- Số lead theo tuyến và theo chiều.
- Doanh thu hoàn tất từ lead organic, nếu CRM có trạng thái chuyến.

## 9. Dữ liệu nhà xe cần cung cấp trước tuần 2

1. Tên chủ thể kinh doanh chính xác và tên thương hiệu muốn dùng.
2. Địa chỉ giao dịch thật hoặc xác nhận chỉ là doanh nghiệp phục vụ tận nơi.
3. Giờ trực hotline, link Zalo OA/chat, Facebook và các profile chính thức.
4. Bảng giá thật theo ba tuyến, hai chiều, loại xe, địa bàn và phụ thu.
5. Khung giờ/lịch chạy, thời gian cần đặt trước, chính sách chờ/hủy.
6. Danh sách phường/xã, bệnh viện, KCN, sân bay, bến/khách sạn thực sự có đón trả.
7. Ảnh xe, tài xế, khoang xe, điểm đón và chuyến đi thật có quyền sử dụng.
8. Quy trình an toàn, bảo hiểm, hành lý, trẻ em, thú cưng, hóa đơn.
9. Review thật được phép hiển thị; tốt nhất kèm tuyến và ngày.

## 10. Đối thủ/nguồn SERP tham khảo ngày 19/08/2026

- [ghephaiduong.com](https://ghephaiduong.com/) — phủ Hải Dương – Hải Phòng/Quảng Ninh nhưng còn nhiều nội dung cũ.
- [xeghephaiduong86.com](https://xeghephaiduong86.com/) — phủ ba địa phương, có giá và dịch vụ hai chiều.
- [xeghephaiphong.vn](https://xeghephaiphong.vn/) — phủ Hải Phòng – Hạ Long/Quảng Ninh/Móng Cái.
- [taxihaiduong24h.net](https://www.taxihaiduong24h.net/xe-ghep-ha-long-hai-duong/) — landing Hạ Long – Hải Dương có ý định du lịch/chiều về.
- [xexanhmienbac.com](https://xexanhmienbac.com/xe-ghep-hai-phong-quang-ninh/) — landing Hải Phòng – Quảng Ninh.
- [xelientinh247.com](https://www.xelientinh247.com/) — phủ cụm Hải Phòng – Hải Dương – Quảng Ninh.

## 11. Tài liệu nguyên tắc

- [Google: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google Business Profile: Local ranking — relevance, distance, prominence](https://support.google.com/business/answer/7091)
- [Bing Webmaster: AI Performance và GEO](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)

