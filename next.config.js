/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "github.com",
      "githubusercontent.com",
      "avatars.githubusercontent.com",
      "buysellads.net",
      "cdn4.buysellads.net",
      "srv.buysellads.com",
    ],
    formats: ["image/webp", "image/avif"],
  },
};

module.exports = nextConfig;
