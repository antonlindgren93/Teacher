// next.config.js

const path = require("path");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const prod = process.env.NODE_ENV === "production";
module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    disable: prod ? false : true,
  },

  // This is not required to make it into a PWA, but is a nice way to clean up your imports
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
});
