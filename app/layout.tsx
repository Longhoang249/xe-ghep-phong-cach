import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#087fe7" };

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://xe-ghep-phong-cach.vercel.app"),
  title: { default: "Xe Ghép Phong Cách", template: "%s | Phong Cách" },
  description: "Xe ghép liên tỉnh từ Hải Dương — đặt nhanh, đón tận nơi.",
  applicationName: "Xe Ghép Phong Cách",
  icons: { icon: "/favicon.svg" },
  openGraph: { type: "website", locale: "vi_VN", siteName: "Xe Ghép Phong Cách", title: "Xe Ghép Phong Cách", description: "Đi đúng tuyến. Đón đúng giờ. Đặt xe liên tỉnh trong ít phút.", images:[{url:"/og.png",width:1200,height:630,alt:"Xe Ghép Phong Cách — Đi gọn, đến nhanh"}] },
  twitter: { card: "summary_large_image", images:["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="vi"><body>{children}</body></html>;
}
