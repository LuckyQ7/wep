const path = require("path");
const Merge = require("webpack-merge");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const base = require("./webpack.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = Merge.merge(base, {
  mode: "development",
  entry: {
    client: path.join(__dirname, "./src/entry-client.js"),
  },
  output: {
    publicPath: "./",
  },
  module: {},
  plugins: [
    new WebpackManifestPlugin({ fileName: "manifest-client.json" }),
    new HtmlWebpackPlugin({ template: "./index.html" }),
  ],
});
