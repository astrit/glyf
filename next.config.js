/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    images: {
      layoutRaw: true,
    },
    ssr: false,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "github.com",
      "githubusercontent.com",
      "avatars.githubusercontent.com",
    ],
    formats: ["image/webp", "image/avif"],
  },
};

module.exports = nextConfig;
