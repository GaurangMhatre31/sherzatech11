import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    qualities: [50, 75, 90, 100],
    localPatterns: [
      { pathname: "/blog/**", search: "" },
      { pathname: "/brainmint/**", search: "" },
      { pathname: "/contact/**", search: "" },
      { pathname: "/hero-slides/**", search: "" },
      { pathname: "/logos/**", search: "" },
      { pathname: "/services/**", search: "" },
      { pathname: "/team/**", search: "" },
      { pathname: "/*.svg", search: "" },
    ],
  },
};

export default nextConfig;
