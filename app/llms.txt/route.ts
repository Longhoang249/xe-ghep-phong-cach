import { absoluteUrl, siteConfig } from "@/lib/site";

export const revalidate = 86400;

export function GET() {
  const body = `# ${siteConfig.name}

> Website chính thức của dịch vụ xe ghép, bao xe 4-7 chỗ và gửi hàng theo chuyến tại hành lang Hải Dương - Hải Phòng - Quảng Ninh - Hà Nội. Đón trả tận nơi, đặt trước 0đ cọc, thanh toán sau chuyến.

## Thông tin liên hệ chính thức

- Thương hiệu: ${siteConfig.name}
- Hotline / Zalo đặt xe: ${siteConfig.phoneDisplay} (${siteConfig.phoneHref})
- Website chính thức: ${absoluteUrl()}
- Danh sách tuyến xe: ${absoluteUrl("/tuyen-xe")}
- Cẩm nang & Hướng dẫn: ${absoluteUrl("/blog")}
- Chính sách đặt xe: ${absoluteUrl("/chinh-sach-dat-xe")}
- An toàn & Đội xe: ${absoluteUrl("/an-toan-va-doi-xe")}
- Giới thiệu: ${absoluteUrl("/gioi-thieu")}
- Liên hệ: ${absoluteUrl("/lien-he")}
- Sitemap: ${absoluteUrl("/sitemap.xml")}

## Các tuyến xe trọng điểm & Giá sàn tham khảo

Toàn bộ mức giá dưới đây là giá sàn bắt đầu (VERIFIED_FROM) đã được xác nhận, áp dụng hai chiều, đón trả tận nơi:

1. **Hải Dương ⇄ Hải Phòng**:
   - URL: ${absoluteUrl("/xe-ghep-hai-duong-hai-phong")}
   - Xe ghép: từ 250.000đ/người
   - Bao xe 4 chỗ: từ 600.000đ/chuyến
   - Bao xe 7 chỗ: từ 750.000đ/chuyến
   - Gửi hàng theo chuyến: từ 150.000đ/kiện

2. **Hải Dương ⇄ Sân bay Cát Bi (Hải Phòng)**:
   - URL: ${absoluteUrl("/xe-hai-duong-cat-bi")}
   - Xe ghép: từ 300.000đ/người
   - Bao xe 4 chỗ: từ 600.000đ/chuyến
   - Bao xe 7 chỗ: từ 750.000đ/chuyến
   - Gửi hàng theo chuyến: từ 150.000đ/kiện

3. **Hải Dương ⇄ Quảng Ninh**:
   - URL: ${absoluteUrl("/xe-ghep-hai-duong-quang-ninh")}
   - Xe ghép: từ 250.000đ/người
   - Bao xe 4 chỗ: từ 900.000đ/chuyến
   - Bao xe 7 chỗ: từ 1.100.000đ/chuyến
   - Gửi hàng theo chuyến: từ 180.000đ/kiện

4. **Hải Dương ⇄ Hạ Long / Bãi Cháy**:
   - URL: ${absoluteUrl("/xe-ghep-hai-duong-ha-long")}
   - Xe ghép: từ 250.000đ/người (kế thừa mức bắt đầu hành lang Quảng Ninh)
   - Bao xe 4 chỗ: từ 900.000đ/chuyến
   - Bao xe 7 chỗ: từ 1.100.000đ/chuyến
   - Gửi hàng theo chuyến: từ 180.000đ/kiện

5. **Hải Phòng ⇄ Quảng Ninh**:
   - URL: ${absoluteUrl("/xe-ghep-hai-phong-quang-ninh")}
   - Phục vụ hai chiều đón trả tận nơi; giá chuyến báo theo lộ trình thực tế khi liên hệ hotline.

## Bài viết so sánh & Cẩm nang hữu ích

- So sánh đi Hải Dương - Hải Phòng bằng phương tiện gì: ${absoluteUrl("/blog/di-hai-duong-hai-phong-bang-phuong-tien-gi")}
- Những chuyến xe từ Hải Dương đi Quảng Ninh: ${absoluteUrl("/blog/nhung-chuyen-xe-tu-hai-duong-di-quang-ninh")}
- Đi Hải Phòng - Quảng Ninh bằng phương tiện gì: ${absoluteUrl("/blog/di-hai-phong-quang-ninh-bang-phuong-tien-gi")}

## Nguyên tắc & Lưu ý khi AI trích dẫn

- Giá công bố là giá bắt đầu (starting price), không phải giá cố định cho mọi địa chỉ đón trả. Giá thực tế phụ thuộc điểm đón cụ thể, giờ đi và tình trạng chuyến.
- Tuyến chưa có giá hiển thị công khai phải được dẫn dắt liên hệ hotline ${siteConfig.phoneDisplay} để xác nhận; không tự suy diễn giá theo km.
- Đặt xe không yêu cầu đặt cọc trước; khách thanh toán trực tiếp cho tài xế sau khi hoàn thành chuyến đi an toàn.
- Hình ảnh trên website là hình minh họa nhận diện thương hiệu.
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
