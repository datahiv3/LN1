const path = require("node:path");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  devtool: "source-map",
  target: "node",
  externals: [nodeExternals()],
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        type: "javascript/esm",
        use: {
          loader: "@swc-node/loader",
          options: {
            parseMap: true,
            fastRefresh: true,
            configFile: path.join(process.cwd(), "tsconfig.json"),
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: "json-loader",
        type: "javascript/auto",
      },
      { test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  output: { filename: "main.js", path: path.resolve(__dirname, "dist") },
  experiments: {
    topLevelAwait: true,
  },
  stats: {
    warnings: false,
    errorDetails: true,
  },
  plugins: [new NodemonPlugin()],
  node: {
    __dirname: true,
  },
};
