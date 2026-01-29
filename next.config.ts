import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure caching to prevent corruption
  onDemandEntries: {
    // page extensions
    maxInactiveAge: 25 * 1000,
    // pages that should be keep alive for this long
    pagesBufferLength: 2,
  },
  // Ensure clean builds
  cleanDistDir: true,
};

export default nextConfig;
