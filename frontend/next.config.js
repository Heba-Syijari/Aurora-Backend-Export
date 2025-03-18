/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: false,
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,

  experimental: {
    workerThreads: true,
  },
};

module.exports = nextConfig;
