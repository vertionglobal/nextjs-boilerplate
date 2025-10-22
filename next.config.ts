import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["vercel.com", "images.unsplash.com", "cdn.pixabay.com"] },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  trailingSlash: true,
};

export default nextConfig;
