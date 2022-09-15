/** @type {import('next').NextConfig} */
var path = require("path");
module.exports = {
  reactStrictMode: false,
  webpack5: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "variables.scss";`,
  },
  images: {
    domains: [`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}`],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },
};
