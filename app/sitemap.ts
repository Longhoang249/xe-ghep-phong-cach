import type { MetadataRoute } from "next";
import { publishedGuideAssets, publishedRouteAssets } from "@/data/seo/published-content";
import { absoluteUrl, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.contentUpdatedAt);
  const trustPages = ["/gioi-thieu", "/lien-he", "/chinh-sach-dat-xe", "/an-toan-va-doi-xe"];
  const goldenCorridorIds = new Set(["hd-hp", "hd-qn", "hp-qn", "hd-cb", "hd-ha-long"]);
  const goldenCorridorGuides = new Set([
    "di-hai-duong-hai-phong-bang-phuong-tien-gi",
    "nhung-chuyen-xe-tu-hai-duong-di-quang-ninh",
    "di-hai-phong-quang-ninh-bang-phuong-tien-gi",
    "xe-hai-duong-di-cat-bi-chon-xe-ghep-hay-bao-xe",
    "xe-hai-phong-ve-hai-duong-can-chuan-bi-gi",
    "cach-dat-xe-ghep-hai-duong-quang-ninh",
    "gui-hang-hai-duong-hai-phong-theo-chuyen",
  ]);

  return [
    {
      url: absoluteUrl(),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl("/images/hero-xe-ghep-phong-cach.png"), absoluteUrl("/og.png")],
    },
    { url: absoluteUrl("/tuyen-xe"), lastModified, changeFrequency: "daily", priority: 0.95 },
    { url: absoluteUrl("/blog"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...trustPages.map((path) => ({ url: absoluteUrl(path), lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...publishedGuideAssets.map((asset) => ({
      url: absoluteUrl(asset.canonical),
      lastModified: asset.lastReviewedAt ? new Date(asset.lastReviewedAt) : lastModified,
      changeFrequency: goldenCorridorGuides.has(asset.dataKey) ? ("weekly" as const) : ("monthly" as const),
      priority: goldenCorridorGuides.has(asset.dataKey) ? 0.9 : 0.82,
    })),
    ...publishedRouteAssets.map((asset) => ({
      url: absoluteUrl(asset.canonical),
      lastModified: asset.lastReviewedAt ? new Date(asset.lastReviewedAt) : lastModified,
      changeFrequency: goldenCorridorIds.has(asset.dataKey) ? ("daily" as const) : ("weekly" as const),
      priority: goldenCorridorIds.has(asset.dataKey) ? 0.98 : 0.9,
    })),
  ];
}
