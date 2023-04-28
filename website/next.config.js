/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "es", "cat"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
