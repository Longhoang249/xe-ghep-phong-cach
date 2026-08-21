import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Xe Ghép Phong Cách",
    short_name: "Phong Cách",
    description: "Đặt xe ghép, bao xe và đưa đón tận nơi.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00B7B3",
    lang: "vi",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
