# Brief tư vấn SEO/GEO — Xe Ghép Phong Cách

**Ngày cập nhật:** 20/08/2026  
**Website:** https://xeghepphongcach.com  
**Ngành:** Xe ghép, bao xe 4–7 chỗ, gửi hàng theo chuyến  
**Hotline chính đang dùng cho SEO:** 0987 663 883  
**Thị trường trọng điểm:** Hải Dương ⇄ Hải Phòng ⇄ Quảng Ninh, cả hai chiều

## 1. Mục tiêu cần tư vấn

Xây dựng chiến lược SEO, Local SEO và GEO trong 3–6 tháng để:

1. Tăng hiện diện cho các truy vấn có ý định đặt xe trên hành lang Hải Dương – Hải Phòng – Quảng Ninh.
2. Đưa ba landing page tuyến trọng điểm vào top tìm kiếm, trước tiên ở nhóm từ khóa dài và chiều về.
3. Tạo lead thật qua gọi điện, Zalo và biểu mẫu đặt xe.
4. Tăng khả năng website/thương hiệu được Google, Bing, ChatGPT, Copilot và các hệ thống AI nhận diện, trích dẫn.
5. Xây Local Entity đủ rõ để phát triển Google Business Profile, review, citation và backlink địa phương.

Không kỳ vọng hoặc cam kết top 1 trong thời gian ngắn. Cần tư vấn dựa trên độ mới của domain, mức cạnh tranh, dữ liệu thật và nguồn lực hiện có.

## 2. Bối cảnh kinh doanh và nguyên tắc nội dung

- Người dùng vẫn quen gọi địa danh **Hải Dương** theo tên cũ, vì vậy nội dung ưu tiên cách gọi Hải Dương – Hải Phòng – Quảng Ninh.
- Không cần nhấn mạnh hoặc giải thích dài về việc thay đổi địa giới hành chính.
- Chỉ sử dụng thông tin đang có trên website; không tự tạo giá, lịch chạy, địa chỉ, số chuyến, review hoặc bằng chứng vận hành.
- Giá trên website là giá tham khảo và được xác nhận lại trước chuyến.
- Chưa có Google Business Profile cho dự án.
- Toàn bộ hình ảnh xe hiện tại là ảnh AI/minh họa, chưa có ảnh xe, tài xế hoặc chuyến đi thật.
- Website đã công khai rằng hình ảnh chỉ mang tính minh họa, không đại diện cho một xe, biển số hoặc tài xế cụ thể.

## 3. Hiện trạng website và hạ tầng

### Domain và hosting

- Domain chính: `https://xeghepphongcach.com`.
- Hosting/deployment: Vercel, Next.js App Router.
- HTTPS, SSL và HSTS hoạt động.
- `www.xeghepphongcach.com` chuyển hướng 308 về domain chính.
- Domain mặc định `.vercel.app` chuyển hướng 308 về domain chính.
- Website production trả HTTP 200.

### Khả năng crawl/index

- Có `robots.txt`, cho phép crawl nội dung công khai và chặn `/admin/`, `/api/`.
- Có sitemap XML tự động, hiện chứa 24 URL.
- Có image sitemap cho ảnh trang chủ.
- Có canonical URL trên các trang.
- Có internal link crawlable từ trang chủ, danh sách tuyến và giữa các trang trọng điểm.
- Có IndexNow; lần gửi gần nhất đã được nhận 24 URL với HTTP 200.
- Có `llms.txt` bổ trợ cho việc nhận diện nguồn chính thức; không xem đây là công cụ thay thế sitemap/schema/nội dung.
- Phép thử tìm kiếm `site:xeghepphongcach.com` ngày 20/08/2026 chưa cho thấy kết quả rõ ràng. Domain rất mới, chưa có dữ liệu Search Console nên chưa kết luận nguyên nhân index.

### Metadata và structured data

- Metadata riêng cho trang chủ, danh sách tuyến, landing tuyến và trang thông tin.
- Open Graph, Twitter Card, favicon và web manifest.
- Schema đang sử dụng:
  - `Organization`
  - `TaxiService`
  - `WebSite`
  - `Service`
  - `Offer` khi có giá tham khảo
  - `FAQPage`
  - `BreadcrumbList`
  - `ItemList`
  - `AboutPage`
  - `ContactPage`
- Không dùng rating/review schema giả.
- Không thêm Offer vào tuyến chưa có giá.

### Hiệu năng, đo lường và bảo mật

- Có Vercel Web Analytics và Speed Insights.
- Đã gắn sự kiện cho gọi điện, liên hệ, xem tuyến và gửi yêu cầu đặt xe.
- Hỗ trợ GA4 qua biến môi trường nhưng chưa có Measurement ID.
- Hỗ trợ mã xác minh Google Search Console và Bing Webmaster qua biến môi trường nhưng chưa được cấu hình.
- Có security headers, logging API có cấu trúc và không ghi tên, số điện thoại, địa chỉ khách vào log.
- Next.js 16.3.1; `npm audit` hiện không có lỗ hổng.
- Production build thành công; kiểm tra trình duyệt không có lỗi console; Vercel không ghi nhận error log sau deploy.

## 4. Cấu trúc nội dung hiện tại

### Ba landing page trụ cột

1. `https://xeghepphongcach.com/xe-ghep-hai-duong-hai-phong`
2. `https://xeghepphongcach.com/xe-ghep-hai-duong-quang-ninh`
3. `https://xeghepphongcach.com/xe-ghep-hai-phong-quang-ninh`

Mỗi trang hiện có:

- H1 nêu tuyến và “2 chiều”.
- Đoạn trả lời trực tiếp về dịch vụ.
- Giá xe ghép/bao xe/gửi hàng nếu website đã có dữ liệu.
- Trạng thái “Liên hệ xác nhận” nếu chưa có dữ liệu.
- Section riêng cho chiều đi và chiều về.
- CTA đã điền sẵn điểm đi/điểm đến.
- FAQ theo tuyến.
- Schema và breadcrumb.
- Liên kết chéo giữa ba tuyến trọng điểm.
- Ngày cập nhật nội dung.

Riêng Hải Phòng ⇄ Quảng Ninh chưa có giá, quãng đường và thời gian được xác nhận, vì vậy trang không công bố số liệu.

### Trang tạo độ tin cậy

- `/gioi-thieu`
- `/lien-he`
- `/chinh-sach-dat-xe`
- `/an-toan-va-doi-xe`
- `/tuyen-xe`

Nội dung chỉ mô tả quy trình/dịch vụ đã có trên website, không tự tạo pháp nhân, địa chỉ hoặc chứng nhận.

### Các tuyến phụ đang có

Website còn có landing page Hải Dương đi Hà Nội, Nội Bài, Cát Bi, Bắc Ninh, Bắc Giang, Thái Nguyên, Vĩnh Phúc, Phú Thọ, Thái Bình, Nam Định, Hưng Yên, Hà Nam, Phủ Lý, Ninh Bình và Thanh Hóa.

Chiến lược trước mắt vẫn ưu tiên ba tuyến Hải Dương – Hải Phòng – Quảng Ninh, không phân tán nguồn lực cho toàn bộ tuyến phụ.

## 5. Nhóm từ khóa đã phát hiện

### P0 — Ý định đặt xe cao

- xe ghép Hải Dương Hải Phòng
- xe ghép Hải Phòng Hải Dương
- xe ghép Hải Dương đi Hải Phòng
- xe ghép Hải Phòng đi Hải Dương
- giá xe ghép Hải Dương Hải Phòng
- taxi ghép Hải Dương Hải Phòng
- xe ghép Hải Dương Quảng Ninh
- xe ghép Quảng Ninh Hải Dương
- xe ghép Hải Dương đi Quảng Ninh
- xe ghép Quảng Ninh đi Hải Dương
- xe ghép Quảng Ninh về Hải Dương
- xe ghép Hải Phòng Quảng Ninh
- xe ghép Quảng Ninh Hải Phòng
- xe ghép Hải Phòng đi Quảng Ninh
- xe tiện chuyến Hải Phòng Quảng Ninh
- xe ghép Hải Dương Hải Phòng Quảng Ninh

### P1 — Địa danh và nhu cầu mở rộng

- xe ghép Hải Dương Hạ Long
- xe ghép Hải Dương Bãi Cháy
- xe ghép Hải Dương Vân Đồn
- xe ghép Hải Dương Hải Phòng sân bay Cát Bi
- xe ghép sân bay Cát Bi về Hải Dương
- xe ghép Hải Phòng Quảng Yên
- xe ghép Hải Phòng Uông Bí
- xe ghép Hải Phòng Hạ Long
- xe ghép Hải Phòng Cẩm Phả Quảng Ninh
- xe ghép Hải Phòng Vân Đồn Quảng Ninh
- xe tiện chuyến Hải Phòng Hạ Long
- xe tiện chuyến Hải Phòng Móng Cái

Chỉ tạo landing riêng cho địa danh nếu nhà xe thật sự phục vụ và có thông tin riêng. Không tạo hàng loạt trang chỉ thay tên địa điểm.

## 6. Khoảng trống và rủi ro hiện tại

1. Chưa có Google Search Console Domain Property và chưa submit sitemap trực tiếp cho Google.
2. Chưa có Bing Webmaster Tools/AI Performance để đo citation GEO.
3. Chưa có Google Business Profile và Bing Places.
4. Chưa có dữ liệu impression, CTR, vị trí, query, conversion organic và tỷ lệ index.
5. Chưa có ảnh thật, review thật, hồ sơ đội xe, tài xế hoặc bằng chứng chuyến đi.
6. Chưa có backlink/citation địa phương.
7. Chưa có địa chỉ/vùng phục vụ và giờ hoạt động đủ rõ để hoàn thiện LocalBusiness Entity.
8. Hai số điện thoại đang xuất hiện trên website:
   - 0987 663 883: hotline chính, đang dùng trong schema và các trang SEO.
   - 0978 663 883: số tư vấn phụ xuất hiện tại CTA trang chủ.
   Cần xác nhận vai trò hai số trước khi tạo Google Business Profile/citation để bảo đảm NAP nhất quán.
9. Form booking vẫn cần bảo đảm dữ liệu lead được lưu ổn định trước khi đẩy mạnh traffic/quảng cáo.
10. Mã nguồn production đã được deploy trực tiếp từ local nhưng chưa commit/push GitHub; deployment tự động từ nhánh cũ có thể ghi đè phiên bản hiện tại.

## 7. Kế hoạch hành động đề xuất

### 0–7 ngày: Index và measurement

1. Tạo Google Search Console Domain Property bằng DNS.
2. Submit `/sitemap.xml`.
3. Request Indexing cho trang chủ, ba landing trọng điểm, trang danh sách tuyến và bốn trang trust.
4. Tạo Bing Webmaster Tools; kiểm tra sitemap, IndexNow và AI Performance.
5. Chốt hotline chính/phụ và chuẩn hóa NAP.
6. Kiểm tra nơi lưu booking để không mất lead organic.
7. Ghi lại baseline: số URL discovered/indexed, impression, query, click và conversion.

### 8–30 ngày: Local Entity và bằng chứng thật

1. Tạo Google Business Profile dạng service-area business nếu không có điểm tiếp khách.
2. Chỉ khai báo thông tin thật; không dùng địa chỉ giả.
3. Tạo Bing Places.
4. Chụp tối thiểu 5–10 ảnh thật bằng điện thoại: ngoại thất, nội thất, khoang hành lý, nhận diện thương hiệu và điểm đón phù hợp.
5. Bắt đầu quy trình xin review thật sau chuyến; không mua review và không đổi quà lấy review tích cực.
6. Bổ sung giá/thời gian/khu vực đón thực cho Hải Phòng ⇄ Quảng Ninh khi có dữ liệu.
7. Cập nhật hai landing còn lại bằng câu hỏi thực tế khách thường hỏi.

### 31–60 ngày: Cụm nội dung và Local SEO

Chỉ ưu tiên các cụm có dịch vụ thật và tín hiệu tìm kiếm:

- Hải Dương ⇄ Hạ Long/Bãi Cháy.
- Hải Dương ⇄ Vân Đồn.
- Hải Dương ⇄ Cát Bi.
- Hải Phòng ⇄ Quảng Yên/Uông Bí.
- Hải Phòng ⇄ Hạ Long/Cẩm Phả/Vân Đồn.

Mỗi trang phải có khác biệt thực về giá, điểm đón, thời gian, lộ trình, FAQ hoặc đối tượng khách; nếu không đủ dữ liệu thì giữ trong trang trụ cột thay vì tạo URL mới.

### 61–90 ngày: Authority, backlink và GEO

1. Tìm backlink/citation liên quan từ khách sạn, homestay, đơn vị du lịch, đối tác sự kiện và doanh nghiệp địa phương.
2. Không mua gói backlink số lượng lớn, PBN hoặc link diễn đàn tự động.
3. Xuất bản tài nguyên có thể được trích dẫn: bảng giá cập nhật, hướng dẫn đặt hai chiều, khu vực đón trả, thời gian nên đặt trước.
4. Dùng GSC tìm query có impression và vị trí 8–30 để mở rộng đúng section.
5. Dùng Bing AI Performance theo dõi cited pages, total citations và grounding queries.
6. Cập nhật `dateModified`, giá, FAQ và sitemap khi có thay đổi thật.

## 8. KPI đề xuất

### KPI 30 ngày

- GSC/Bing/GBP được tạo và xác minh.
- Sitemap được đọc thành công.
- Ba landing trọng điểm và bốn trang trust được index hoặc có trạng thái index rõ ràng.
- Có baseline query, impression và click.
- Không có lỗi canonical, robots, schema hoặc mobile nghiêm trọng.

### KPI 60 ngày

- Có impression ổn định cho ba cụm tuyến.
- Xuất hiện top 20–30 cho một số long-tail/chiều về.
- Có review thật đầu tiên và citation địa phương đầu tiên.
- Đo được lead organic qua gọi điện/Zalo/form.

### KPI 90 ngày

- Mục tiêu top 10 cho 2–4 truy vấn long-tail ít cạnh tranh.
- Mục tiêu top 10–20 cho một số truy vấn tuyến chính, tùy authority và cạnh tranh.
- Có dashboard query → landing page → lead.
- Có quy trình cập nhật giá, review, ảnh và nội dung định kỳ.

KPI kinh doanh chính là lead organic hợp lệ, không chỉ traffic.

## 9. Những câu hỏi muốn ChatGPT tư vấn

Hãy phân tích brief này và trả lời theo thứ tự ưu tiên:

1. Trong 30 ngày đầu, việc nào có tác động cao nhất và việc nào nên trì hoãn?
2. Cấu trúc ba landing page hiện tại đã hợp lý hay nên tách thêm trang theo chiều đi/chiều về?
3. Nên ưu tiên nhóm từ khóa nào dựa trên ý định đặt xe, khả năng cạnh tranh và độ mới của domain?
4. Với việc chưa có ảnh thật và review thật, chiến lược xây trust nên triển khai thế nào mà không tạo tín hiệu giả?
5. Cách tạo Google Business Profile phù hợp cho mô hình xe ghép/service-area business là gì?
6. Backlink/citation địa phương nào nên ưu tiên và tiêu chí đánh giá chất lượng là gì?
7. Cần bổ sung những entity, schema hoặc dữ liệu first-party nào để tăng khả năng được AI trích dẫn?
8. Hãy đề xuất lịch triển khai theo tuần, chủ sở hữu công việc và KPI có thể đo được.
9. Hãy chỉ ra mọi rủi ro về thin content, keyword cannibalization, spam local page hoặc thông tin không nhất quán.
10. Không đưa ra cam kết thứ hạng và không đề xuất tactic vi phạm chính sách Google.

## 10. Yêu cầu định dạng câu trả lời

Đề nghị ChatGPT trả lời bằng tiếng Việt với:

1. Chẩn đoán hiện trạng.
2. Năm ưu tiên cao nhất.
3. Kế hoạch 30/60/90 ngày.
4. Keyword-to-page map.
5. Kế hoạch Local SEO/Google Business Profile.
6. Kế hoạch backlink/citation.
7. Kế hoạch GEO/AI citation.
8. Dashboard KPI cần theo dõi.
9. Danh sách dữ liệu hoặc quyền truy cập còn thiếu.

Mọi đề xuất phải phân biệt rõ:

- Việc có thể làm ngay bằng dữ liệu hiện có.
- Việc cần chủ doanh nghiệp xác minh.
- Việc chỉ nên làm sau khi có dữ liệu GSC/review/ảnh/chuyến thật.
