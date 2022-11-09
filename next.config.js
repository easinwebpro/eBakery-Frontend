const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  runtimeCaching,
});

module.exports = withPWA({
  images: {
    domains: [
      "googleusercontent.com",
    ],
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
});
