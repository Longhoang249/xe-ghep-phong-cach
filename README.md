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
- `SUPABASE_URL`: URL Supabase project.
- `SUPABASE_SERVICE_ROLE_KEY`: service role key chỉ dùng phía server, tuyệt đối không đưa vào biến `NEXT_PUBLIC_*`.

Nếu chưa có Supabase, booking vẫn được lưu cục bộ trong trình duyệt để demo. Khi cấu hình Supabase, API `/api/bookings` sẽ ghi booking vào bảng `bookings`.

## Chỉnh tuyến và giá

Toàn bộ tuyến và giá nằm trong `data/routes.ts`. Các mức hiện tại có comment `DEMO_PRICE` và chỉ là giá minh hoạ. Chỉnh `sharedPrice`, `private4Price`, `private7Price` và `parcelPrice`, đơn vị là đồng.

## Database

Chạy file `supabase/migrations/001_create_bookings.sql` trong Supabase SQL Editor. Không commit secret vào Git.

## Build và deploy

```bash
npm run build
```

Deploy bằng Vercel, thêm các biến môi trường ở Project Settings. Sau khi có domain production, cập nhật `NEXT_PUBLIC_SITE_URL` rồi redeploy để canonical/sitemap chính xác.

## Dữ liệu cần thay trước khi vận hành thật

- Logo chính thức.
- Bảng giá đã xác nhận.
- Link Zalo OA và Facebook.
- Ảnh xe thực tế.
- Nội dung đánh giá khách hàng thật.
