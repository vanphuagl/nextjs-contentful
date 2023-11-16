/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "dist",
  output: "export",
  swcMinify: true,
  trailingSlash: true,
  experimental: {
    scrollRestoration: true
  },
  images: {
    loader: 'custom',
    unoptimized: true,
  },
};

module.exports = nextConfig;