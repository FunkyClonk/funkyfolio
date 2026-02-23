/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
require("./src/env.js");

const isProd = process.env.prod === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/funkyfolio/' : '',
  basePath: isProd ? '/funkyfolio/' : '',
  output: 'export',
};

module.exports = nextConfig;