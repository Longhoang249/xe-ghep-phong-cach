import { guidePosts } from "@/data/guide-posts";
import { routes, type RoutePrice } from "@/data/routes";
import { seoAssets as registry } from "@/data/seo/asset-registry.mjs";
import { routeEvidenceByDataKey } from "@/data/seo/route-evidence.mjs";
import { governRouteForPublication, publishedAssets } from "@/lib/seo/publication.mjs";
import type { RouteEvidence, SeoAsset } from "@/data/seo/types";

export const seoAssets = registry as SeoAsset[];
export const publishedSeoAssets = publishedAssets(undefined, registry) as SeoAsset[];
export const publishedRouteAssets = publishedAssets("MONEY_PAGE", registry) as SeoAsset[];
export const publishedGuideAssets = publishedSeoAssets.filter((asset) => asset.assetType !== "MONEY_PAGE");

const rawRouteById = new Map(routes.map((route) => [route.id, route]));
const rawGuideBySlug = new Map(guidePosts.map((post) => [post.slug, post]));
const evidence = routeEvidenceByDataKey as Record<string, RouteEvidence | undefined>;

export const publishedRoutes = publishedRouteAssets
  .map((asset) => {
    const route = rawRouteById.get(asset.dataKey);
    return route ? governRouteForPublication(route, asset, evidence[asset.dataKey]) as RoutePrice : null;
  })
  .filter((route): route is RoutePrice => Boolean(route));

export const publishedGuidePosts = publishedGuideAssets
  .map((asset) => rawGuideBySlug.get(asset.dataKey))
  .filter((post): post is (typeof guidePosts)[number] => Boolean(post));

export const publishedLocations = Array.from(new Set(publishedRoutes.flatMap((route) => [route.origin, route.destination])));

export function findPublishedRoute(origin: string, destination: string) {
  return publishedRoutes.find((route) =>
    (route.origin === origin && route.destination === destination)
    || (route.origin === destination && route.destination === origin));
}

export function findPublishedGuidePost(slug: string) {
  return publishedGuidePosts.find((post) => post.slug === slug);
}
