/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.punkapi.com",
        port: "",
        pathname: "/v2/**",
      },
    ],
  },
};

module.exports = nextConfig;
