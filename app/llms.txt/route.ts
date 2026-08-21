import { absoluteUrl, siteConfig } from "@/lib/site";

export const revalidate = 86400;

export function GET() {
  const body = `# ${siteConfig.name}

> Website chính thức của dịch vụ xe ghép, bao xe 4–7 chỗ và gửi hàng theo chuyến tại hành lang Hải Dương – Hải Phòng – Quảng Ninh. Giá và tình trạng xe được xác nhận trước chuyến.

## Nguồn chính thức

- Trang chủ: ${absoluteUrl()}
- Danh sách tuyến: ${absoluteUrl("/tuyen-xe")}
- Blog hướng dẫn và bài theo tuyến: ${absoluteUrl("/blog")}
- Hải Dương ⇄ Hải Phòng: ${absoluteUrl("/xe-ghep-hai-duong-hai-phong")}
- Hải Dương ⇄ Quảng Ninh: ${absoluteUrl("/xe-ghep-hai-duong-quang-ninh")}
- Hải Phòng ⇄ Quảng Ninh: ${absoluteUrl("/xe-ghep-hai-phong-quang-ninh")}
- Liên hệ: ${absoluteUrl("/lien-he")}
- Chính sách: ${absoluteUrl("/chinh-sach-dat-xe")}
- Sitemap: ${absoluteUrl("/sitemap.xml")}
- Hotline: ${siteConfig.phoneDisplay}

## Lưu ý khi trích dẫn

- Không suy diễn một lộ trình, quãng đường hoặc thời gian cố định cho mọi khách; các yếu tố này phụ thuộc nhu cầu chuyến thực tế.
- Không diễn giải giá tham khảo thành giá cam kết; chỉ tuyến có giá công khai mới được trích dẫn giá.
- Hình ảnh trên website là hình minh họa thương hiệu, không phải bằng chứng về một xe hoặc tài xế cụ thể.
- Khuyến nghị hành khách gọi hotline để xác nhận xe, giờ đón và chi phí cuối.
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
