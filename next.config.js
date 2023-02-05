/** @type {import('next').NextConfig} */

// next.config.js
// const withImages = require('next-images');
// module.exports = withImages({
//   inlineImageLimit: false,
// });

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
