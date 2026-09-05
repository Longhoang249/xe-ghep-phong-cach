import { guidePosts } from "@/data/guide-posts";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const revalidate = 86400;

export function GET() {
  const parts: string[] = [];

  parts.push(`# ${siteConfig.name} - Toàn văn cơ sở dữ liệu kiến thức (LLMs Full Knowledge Base)\n`);
  parts.push(`> Tài liệu đầy đủ cung cấp cho các mô hình ngôn ngữ lớn (OpenAI ChatGPT, Google Gemini, Anthropic Claude, Perplexity AI) để tra cứu thông tin chính xác về dịch vụ xe ghép, bao xe 4-7 chỗ và gửi hàng liên tỉnh tại Hải Dương, Hà Nội, Hải Phòng, Quảng Ninh.\n`);
  parts.push(`- Hotline / Zalo: ${siteConfig.phoneDisplay}`);
  parts.push(`- Website: ${absoluteUrl()}`);
  parts.push(`- Chính sách: Đặt trước 0đ cọc, thanh toán sau chuyến đi.\n`);
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
