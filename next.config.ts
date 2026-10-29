import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   output: 'export',
  images: { unoptimized: true },
  assetPrefix: 'https://todo-estatico-cristiangonzalez-2026.s3.us-east-1.amazonaws.com' || undefined,
};

export default nextConfig;
