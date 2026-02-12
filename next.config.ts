import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "escoramento.com",
      },
      {
        protocol: "https",
        hostname: "escoramento-files.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;