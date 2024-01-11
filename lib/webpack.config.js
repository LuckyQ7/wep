const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./dist"),
    library: {
      name: "liv",
      type: "umd",
    },
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\.js$/, enforce: "pre", use: ["source-map-loader"] },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  // externals: [nodeExternals()],
  externals: {
    lodash: "_",
  },
};
