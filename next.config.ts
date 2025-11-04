import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/final-project-website-senior-syndicate',
  assetPrefix: '/final-project-website-senior-syndicate/',
};

module.exports = nextConfig;

export default nextConfig;
