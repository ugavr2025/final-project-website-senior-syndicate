import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  // If you later deploy on GitHub Pages, uncomment these:
  // basePath: "/final-project-website-senior-syndicate",
  // assetPrefix: "/final-project-website-senior-syndicate/",
};

export default nextConfig;
