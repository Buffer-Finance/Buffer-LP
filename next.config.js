const path = require("path");
const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  env: {
    BACKEND_HOST: process.env.BACKEND_HOST,
  },
  experimental: {
    esmExternals: false,
  },
});
