import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    // Placeholder photography is served from Pexels/Unsplash. Swap the URLs in
    // src/data/site.ts and src/data/courses.ts to self-hosted images and remove this block.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
