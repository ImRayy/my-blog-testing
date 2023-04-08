/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    THEME_JSON: process.env.THEME_JSON,
    PROJECT_ID: process.env.PROJECT_ID,
  },
};

module.exports = nextConfig;
