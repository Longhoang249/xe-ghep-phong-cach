import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({ subsets: ["vietnamese"], weight: ["600", "700", "800"], variable: "--font-heading" });
const manrope = Manrope({ subsets: ["vietnamese"], variable: "--font-body" });

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#00B7B3" };

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: "%s | Xe Ghép Phong Cách" },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "transportation",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/favicon.svg" },
  alternates: { languages: { "vi-VN": "/" } },
  formatDetection: { telephone: false, address: false, email: false },
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "dYLVPzQ9agrvW7Ayt8N2U3QyST6G1C53Agu0tq3lgbQ",
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  openGraph: {
    type: "website",
    url: absoluteUrl(),
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: "Đi tỉnh nhẹ nhàng. Gửi yêu cầu xe, xác nhận rõ ràng và thanh toán sau chuyến.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Xe Ghép Phong Cách — Kết nối chuyến đi tỉnh từ Hải Dương" }],
  },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description, images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  return (
    <html lang="vi" className={`${beVietnam.variable} ${manrope.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
