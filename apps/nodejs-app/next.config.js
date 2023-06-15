/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    appDir: true,
  },
  transpilePackages: ["nextjs-app-shared"]
};

module.exports = nextConfig;
