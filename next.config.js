// const WebpackPluginStylex = require("@stylexjs/webpack-plugin");
const WebpackPluginStylex = require("./custom-webpack-plugin");
const path = require("path");

let count = 0;

// Global list of rules:
// const stylexRules = {};

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    console.log("getting webpack config", ++count, buildId, isServer);

    config.optimization.splitChunks ||= { cacheGroups: {} };
    if (config.optimization.splitChunks?.cacheGroups?.styles) {
      config.optimization.splitChunks.cacheGroups.styles = {
        name: "styles",
        test: /\.css$/,
        chunks: "all",
        enforce: true,
      };
    }

    const webpackPluginOptions = {
      babelConfig: {
        babelrc: true,
        buildId,
        isServer,
        count,
        dev,
      },
      appendTo: (name) => name.endsWith(".css"),
      filename: path.join(__dirname, "app", "stylex-bundle.css"),
      dev,
    };

    const stylexPlugin = new WebpackPluginStylex(webpackPluginOptions);
    // stylexPlugin.stylexRules = stylexRules;

    config.plugins.push(stylexPlugin);

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
