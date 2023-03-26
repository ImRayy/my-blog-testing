/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    THEME_JSON: process.env.THEME_JSON,
  },
};

module.exports = nextConfig;
