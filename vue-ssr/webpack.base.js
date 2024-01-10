const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(__dirname, "./dist"),
  },
  mode: "development",
  resolve: {
    extensions: [".vue", ".js"],
  },
  module: {
    rules: [{ test: /.vue$/, use: "vue-loader" }],
  },
  plugins: [new VueLoaderPlugin()],
};
