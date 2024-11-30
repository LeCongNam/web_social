import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "links.papareact.com",
      },
      {
        hostname: "platform lookaside.fbsbx.com",
      },
      {
        hostname: "firebasestorage.googleapis.com",
      },
      {
        hostname: "platform-lookaside.fbsbx.com",
      },
    ],
  },
}

export default nextConfig
