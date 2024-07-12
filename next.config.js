const { withContentlayer } = require("next-contentlayer")
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/astrit",
        destination: "https://astrit.co",
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "random.unsplash.com" },
      { hostname: "source.unsplash.com" },
      { hostname: "*.unsplash.com" },
      { hostname: "unsplash.com" },
      { hostname: "github.com" },
      { hostname: "avatars.githubusercontent.com" },
    ],
    formats: ["image/webp"],
  },
}

module.exports = withContentlayer(nextConfig)
