import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: "/Portfolio",
  // output: "export",  // <=== enables static exports
  reactStrictMode: true,
  eslint : {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
