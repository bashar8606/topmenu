/** @type {import('next').NextConfig} */

// const withPlugins = require("next-compose-plugins");
// const withVideos = require("next-videos");
// const CompressionPlugin = require("compression-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "swiperjs.com",
      "192.168.3.244:1337",
      "192.168.3.244",
      "admin.Top menu.webc.in",
      "api-Top menu.webc.in",
    ],
    formats: ["image/webp"],
    unoptimized: false,
  },
  experimental: {
    scrollRestoration: true,
    // appDir:true
  },
  // webpack: (config) => {
  //   config.plugins.push(new CompressionPlugin());

  //   return config;
  // },
};

// module.exports = withPlugins([withVideos], nextConfig);

module.exports = nextConfig;
