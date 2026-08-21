# Xe Ghép Phong Cách

Website/webapp mobile-first để khách tìm tuyến, xem giá tham khảo và gửi yêu cầu đặt xe liên tỉnh từ Hải Dương.

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Cấu hình môi trường

Sao chép `.env.example` thành `.env.local` và điền các giá trị cần dùng.

- `NEXT_PUBLIC_SITE_URL`: domain production, dùng cho sitemap và metadata.
- `NEXT_PUBLIC_ZALO_URL`: link Zalo OA/chat chính thức.
- `NEXT_PUBLIC_FACEBOOK_URL`: trang Facebook chính thức, dùng cho entity schema.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: GA4 Measurement ID dạng `G-...`; bỏ trống nếu chưa dùng GA4.
- `GOOGLE_SITE_VERIFICATION`: mã meta verification từ Google Search Console.
- `BING_SITE_VERIFICATION`: mã `msvalidate.01` từ Bing Webmaster Tools.
- `SUPABASE_URL`: URL Supabase project.
- `SUPABASE_SERVICE_ROLE_KEY`: service role key chỉ dùng phía server, tuyệt đối không đưa vào biến `NEXT_PUBLIC_*`.

Nếu chưa có Supabase, booking vẫn được lưu cục bộ trong trình duyệt để demo. Khi cấu hình Supabase, API `/api/bookings` sẽ ghi booking vào bảng `bookings`.

## Chỉnh tuyến và giá

Toàn bộ tuyến và giá nằm trong `data/routes.ts`. Chỉ sửa `sharedPrice`, `private4Price`, `private7Price` và `parcelPrice` khi chủ xe đã xác nhận; đơn vị là đồng. Trường không có dữ liệu phải để `null`, giao diện sẽ hiển thị yêu cầu liên hệ và JSON-LD sẽ không tạo `Offer` giả.

## Database

Chạy file `supabase/migrations/001_create_bookings.sql` trong Supabase SQL Editor. Không commit secret vào Git.

## Build và deploy

```bash
npm run typecheck
npm run lint
npm run build
npm run seo:check
```

Build dùng Webpack của Next 16 để tránh lỗi Turbopack/PostCSS mở cổng trong một số môi trường CI bị giới hạn.

Deploy bằng Vercel, thêm các biến môi trường ở Project Settings. Sau khi có domain production, cập nhật `NEXT_PUBLIC_SITE_URL` rồi redeploy để canonical/sitemap chính xác.

`npm run seo:check` mặc định kiểm tra production. Để kiểm tra local hoặc preview trước khi promote:

```bash
SEO_CHECK_BASE_URL=https://preview-url.vercel.app npm run seo:check
```

## Hạ tầng SEO/GEO

- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts`: các endpoint discovery/index của bot.
- `app/llms.txt/route.ts`: bản tóm tắt machine-readable về thương hiệu, tuyến và nguyên tắc trích dẫn. Đây là tệp bổ trợ, không thay thế sitemap/schema.
- JSON-LD trên trang chủ và trang tuyến mô tả `Organization`, `Service`, `WebSite`, `BreadcrumbList` và FAQ. Chỉ phát `Offer` khi trang có giá nhìn thấy được; không dùng rating/review giả.
- Hotline lấy duy nhất từ `lib/site.ts`: hiển thị `0987 663 883`, URI `tel:+84987663883`, schema `+84987663883`.
- Vercel Web Analytics và Speed Insights được gắn trong root layout. GA4 chỉ được nạp khi có `NEXT_PUBLIC_GA_MEASUREMENT_ID`; Enhanced Measurement phụ trách pageview nên mã ứng dụng không gửi pageview thủ công.
- Các sự kiện chuẩn gồm `click_call`, `click_zalo`, `booking_form_submit`, `booking_form_saved`, `booking_start` và `route_view`. Chỉ gửi ngữ cảnh tuyến, vị trí CTA, loại dịch vụ và UTM; không gửi họ tên, số điện thoại hoặc địa chỉ.
- First-touch attribution lưu trong `sessionStorage`; landing page chỉ chứa pathname và các tham số UTM cho phép, referrer chỉ giữ origin/pathname.
- IndexNow key được xác minh tại root. Sau khi deploy nội dung mới, chạy `npm run seo:indexnow` để gửi toàn bộ URL trong sitemap.
- API ghi structured logs theo request/duration/status nhưng không ghi PII của khách hàng.
- Tất cả ảnh marketing hiện tại là hình minh họa tạo bằng AI; disclosure hiển thị tại footer và `llms.txt`.

Sau khi có mã Search Console/Bing/GA4, thêm biến môi trường tương ứng và redeploy. Google Business Profile và Bing Places vẫn cần chủ doanh nghiệp xác minh trực tiếp.

## Việc chủ website cần thực hiện

- Tạo và xác minh Google Business Profile bằng thông tin doanh nghiệp thật; không khai địa chỉ phục vụ khách nếu không có điểm tiếp khách hợp lệ.
- Thêm domain property vào Google Search Console và Bing Webmaster Tools, sau đó đặt verification code vào biến môi trường.
- Gửi `https://xeghepphongcach.com/sitemap.xml` trong hai công cụ webmaster.
- Cấu hình link Zalo/Facebook chính thức; chỉ thêm vào schema `sameAs` sau khi tài khoản thực sự thuộc doanh nghiệp.
- Kết nối GA4 nếu cần và bật Enhanced Measurement; kiểm tra DebugView cho các event conversion, không tạo pageview thủ công trùng lặp.
- Chỉ bổ sung ảnh xe thực tế, review và rating sau khi có bằng chứng xác thực. Không biến ảnh AI thành bằng chứng về đội xe/tài xế.
