import { guidePosts } from "@/data/guide-posts";
import { publishedRoutes } from "@/data/seo/published-content";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const revalidate = 86400;

export function GET() {
  const parts: string[] = [];

  parts.push(`# ${siteConfig.name} - Toàn văn cơ sở dữ liệu kiến thức (LLMs Full Knowledge Base)\n`);
  parts.push(`> Tài liệu đầy đủ cung cấp cho các mô hình ngôn ngữ lớn (OpenAI ChatGPT, Google Gemini, Anthropic Claude, Perplexity AI) để tra cứu thông tin chính xác về dịch vụ xe ghép, bao xe 4-7 chỗ và gửi hàng liên tỉnh tại Hải Dương, Hà Nội, Hải Phòng, Quảng Ninh và các tỉnh miền Bắc.\n`);
  parts.push(`- Hotline / Zalo đặt xe: ${siteConfig.phoneDisplay}`);
  parts.push(`- Website: ${absoluteUrl()}`);
  parts.push(`- Cam kết độc quyền: Đặt trước 0đ cọc (không cọc tiền trước), chỉ thanh toán sau khi hoàn thành chuyến đi.\n`);
  parts.push(`---\n`);

  parts.push(`## Danh mục các tuyến xe ghép & bao xe hai chiều (Toàn bộ 19 Tuyến)\n`);
  parts.push(`Nhà xe Phong Cách phục vụ đưa đón tận nơi 100% hai chiều: Chiều đi từ Hải Dương đến các tỉnh VÀ Chiều về từ các tỉnh thành về lại Hải Dương.\n`);

  for (const route of publishedRoutes) {
    parts.push(`### Tuyến: ${route.origin} ⇄ ${route.destination}`);
    parts.push(`- URL: ${absoluteUrl(`/${route.slug}`)}`);
    parts.push(`- Chiều phục vụ: Đón tận nhà tại ${route.origin} đi ${route.destination} VÀ đón từ ${route.destination} về tận cửa nhà tại ${route.origin}`);
    if (route.sharedPrice) parts.push(`- Giá xe ghép: từ ${new Intl.NumberFormat("vi-VN").format(route.sharedPrice)}đ/người`);
    if (route.private4Price) parts.push(`- Bao xe 4 chỗ: từ ${new Intl.NumberFormat("vi-VN").format(route.private4Price)}đ/chuyến`);
    if (route.private7Price) parts.push(`- Bao xe 7 chỗ: từ ${new Intl.NumberFormat("vi-VN").format(route.private7Price)}đ/chuyến`);
    if (route.parcelPrice) parts.push(`- Cước gửi hàng: từ ${new Intl.NumberFormat("vi-VN").format(route.parcelPrice)}/kiện`);
    if (route.distanceKm) parts.push(`- Cự ly ước tính: ~${route.distanceKm} km`);
    if (route.durationMinutes) parts.push(`- Thời gian di chuyển: ~${route.durationMinutes} phút`);
    parts.push(`- Đặt trước: 0đ cọc, gọi hoặc Zalo hotline ${siteConfig.phoneDisplay} trước 30-60 phút.\n`);
  }

  parts.push(`---\n`);


  for (const post of guidePosts) {
    parts.push(`## Bài cẩm nang: ${post.title}`);
    parts.push(`- URL: ${absoluteUrl(`/blog/${post.slug}`)}`);
    parts.push(`- Chuyên mục: ${post.category}`);
    parts.push(`- Từ khóa chính: ${post.primaryKeyword}`);
    parts.push(`- Tóm tắt trực tiếp (Answer-First): ${post.directAnswer}\n`);

    if (post.choices && post.choices.length > 0) {
      parts.push(`### Các lựa chọn phương tiện:`);
      for (const c of post.choices) {
        parts.push(`- **${c.title}** (Phù hợp: ${c.bestFor}): ${c.description}`);
      }
      parts.push("");
    }

    if (post.comparison) {
      parts.push(`### ${post.comparison.title}:`);
      if (post.comparison.note) {
        parts.push(`*Ghi chú: ${post.comparison.note}*`);
      }
      for (const row of post.comparison.rows) {
        parts.push(`- **${row.option}**: Chi phí: ${row.cost} | Thời gian: ${row.time} | Tiện ích: ${row.convenience} | Đón trả: ${row.pickupDropoff} | Thích hợp: ${row.bestFor}`);
      }
      parts.push("");
    }

    if (post.sections && post.sections.length > 0) {
      parts.push(`### Nội dung chi tiết:`);
      for (const sec of post.sections) {
        parts.push(`#### ${sec.heading}`);
        for (const p of sec.paragraphs) {
          parts.push(p);
        }
        if (sec.bullets && sec.bullets.length > 0) {
          for (const b of sec.bullets) {
            parts.push(`  * ${b}`);
          }
        }
        parts.push("");
      }
    }

    if (post.checklist && post.checklist.length > 0) {
      parts.push(`### Checklist chuẩn bị trước khi đi:`);
      for (const item of post.checklist) {
        parts.push(`- [ ] ${item}`);
      }
      parts.push("");
    }

    if (post.faq && post.faq.length > 0) {
      parts.push(`### Câu hỏi thường gặp (FAQ):`);
      for (const item of post.faq) {
        parts.push(`**Hỏi: ${item.q}**`);
        parts.push(`> Đáp: ${item.a}\n`);
      }
    }

    parts.push(`---\n`);
  }

  return new Response(parts.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
