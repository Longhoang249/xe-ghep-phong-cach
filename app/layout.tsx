import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Manrope } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({ subsets: ["vietnamese"], weight: ["600", "700", "800"], variable: "--font-heading" });
const manrope = Manrope({ subsets: ["vietnamese"], variable: "--font-body" });

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#00B7B3" };

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://xe-ghep-phong-cach.vercel.app"),
  title: { default: "Xe Ghép Phong Cách", template: "%s | Phong Cách" },
  description: "Xe ghép, bao xe liên tỉnh từ Hải Dương. Gửi yêu cầu miễn phí, tư vấn viên gọi xác nhận và đi xong mới thanh toán.",
  applicationName: "Xe Ghép Phong Cách",
  icons: { icon: "/favicon.svg" },
  openGraph: { type: "website", locale: "vi_VN", siteName: "Xe Ghép Phong Cách", title: "Xe Ghép Phong Cách", description: "Đi tỉnh nhẹ nhàng. Gửi yêu cầu xe, xác nhận rõ ràng và thanh toán sau chuyến.", images:[{url:"/og.png",width:1200,height:630,alt:"Xe Ghép Phong Cách — Kết nối chuyến đi tỉnh từ Hải Dương"}] },
  twitter: { card: "summary_large_image", images:["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="vi" className={`${beVietnam.variable} ${manrope.variable}`}><body>{children}</body></html>;
}
