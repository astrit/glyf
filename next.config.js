/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
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
