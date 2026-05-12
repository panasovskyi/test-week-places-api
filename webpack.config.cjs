const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.ts",
  plugins: [new Dotenv()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./",
    port: 3000,
    open: true,
    proxy: [
      {
        context: ["/api"],
        target: "https://places-api.foursquare.com",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    ],
  },
};
