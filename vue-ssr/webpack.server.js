const Merge = require("webpack-merge");
const path = require("path");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const base = require("./webpack.base");

module.exports = Merge.merge(base, {
  entry: {
    server: path.join(__dirname, "./src/entry-server.js"),
  },
  target: "node",
  output: {
    libraryTarget: "commonjs2",
  },
  module: {},
  plugins: [new WebpackManifestPlugin({ fileName: "manifest-server.json" })],
});
