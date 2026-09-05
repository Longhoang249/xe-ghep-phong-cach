import { publishedRoutes } from "@/data/seo/published-content";
import type { RoutePrice } from "@/data/routes";
import { siteConfig } from "@/lib/site";

export type BlogPost = {
  route: RoutePrice;
  title: string;
  excerpt: string;
  category: string;
  keywords: string[];
  featured: boolean;
};

const featuredIds = new Set(["hd-hp", "hd-qn", "hp-qn", "hd-pt"]);

function categoryFor(route: RoutePrice) {
  if (route.region === "san-bay") return "Xe sân bay";
  if (route.destination === "Hải Phòng" || route.destination === "Quảng Ninh") return "Tuyến trọng tâm";
  if (route.region === "mien-trung-gan") return "Tuyến liên tỉnh";
  return "Xe ghép miền Bắc";
}

function excerptFor(route: RoutePrice) {
  if (route.region === "san-bay") {
    return `Phong Cách tiếp nhận nhu cầu xe ${route.origin} đi ${route.destination}, bao xe 4–7 chỗ và chiều về. Đưa đón tận nơi sảnh sân bay, đặt trước 0đ cọc. Gọi ${siteConfig.phoneDisplay}.`;
  }

  return `Dịch vụ xe ghép và bao xe 4–7 chỗ ${route.origin} ⇄ ${route.destination} đón trả tận nơi hai chiều. Đặt trước 0đ cọc, thanh toán sau chuyến, xe đời mới êm ái. Gọi ${siteConfig.phoneDisplay}.`;
}

export const blogPosts: BlogPost[] = publishedRoutes.map((route) => ({
  route,
  title: `Xe ghép ${route.origin} – ${route.destination} 2 chiều đón tận nơi | Phong Cách`,
  excerpt: excerptFor(route),
  category: categoryFor(route),
  keywords: [
    `Xe ghép ${route.origin} – ${route.destination}`,
    `Bao xe ${route.origin} đi ${route.destination}`,
    `Xe ${route.destination} về ${route.origin}`,
    `Xe ghép ${route.destination} ${route.origin}`,
  ],
  featured: featuredIds.has(route.id),
}));

export function blogPostForSlug(slug: string) {
  return blogPosts.find((post) => post.route.slug === slug);
}
