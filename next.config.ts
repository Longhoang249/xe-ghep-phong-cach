import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/xe-ghep-hai-phong-hai-duong", destination: "/xe-ghep-hai-duong-hai-phong", permanent: true },
      { source: "/xe-ghep-quang-ninh-hai-duong", destination: "/xe-ghep-hai-duong-quang-ninh", permanent: true },
      { source: "/xe-ghep-quang-ninh-hai-phong", destination: "/xe-ghep-hai-phong-quang-ninh", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
        ],
      },
    ];
  },
};

export default nextConfig;
