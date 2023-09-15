/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/figma",
        destination:
          "https://www.figma.com/community/file/1284635132283811437/GLYF.APP-%E2%80%94-6000%2B-Variable-Glyphs",
        permanent: true,
      },
    ];
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
