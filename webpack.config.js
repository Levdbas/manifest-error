const path = require("path");
const DependencyExtractionWebpackPlugin = require("@wordpress/dependency-extraction-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new DependencyExtractionWebpackPlugin({
      outputFormat: "json",
    }),
    new WebpackManifestPlugin({
      publicPath: "",
    }),
  ],
};
