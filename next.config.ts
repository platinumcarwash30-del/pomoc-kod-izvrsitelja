import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only. Vinext supports Next's static export.
  output: "export",
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
