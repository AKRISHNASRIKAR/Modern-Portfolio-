import type { NextConfig } from "next";

const nextConfig: NextConfig = {  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  /* config options here */
};
module.exports = nextConfig;
export default nextConfig;
