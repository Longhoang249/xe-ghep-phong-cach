import type { MetadataRoute } from "next";
import { publishedGuideAssets, publishedRouteAssets } from "@/data/seo/published-content";
import { absoluteUrl, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.contentUpdatedAt);
  const trustPages = ["/gioi-thieu", "/lien-he", "/chinh-sach-dat-xe", "/an-toan-va-doi-xe"];
  const priorityRouteIds = new Set(["hd-hp", "hd-qn", "hp-qn"]);
  return [
    {
      url: absoluteUrl(),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl("/images/hero-xe-ghep-phong-cach.png"), absoluteUrl("/og.png")],
    },
    { url: absoluteUrl("/tuyen-xe"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/blog"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...trustPages.map((path) => ({ url: absoluteUrl(path), lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...publishedGuideAssets.map((asset) => ({
      url: absoluteUrl(asset.canonical),
      lastModified: asset.lastReviewedAt ? new Date(asset.lastReviewedAt) : lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
    ...publishedRouteAssets.map((asset) => ({
      url: absoluteUrl(asset.canonical),
      lastModified: asset.lastReviewedAt ? new Date(asset.lastReviewedAt) : lastModified,
      changeFrequency: "weekly" as const,
      priority: priorityRouteIds.has(asset.dataKey) ? 0.95 : ["hd-hn", "hd-nb", "hd-nb2"].includes(asset.dataKey) ? 0.9 : 0.8,
    })),
  ];
}
