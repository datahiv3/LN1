const glob = require("glob");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");

// https://swc.rs/docs/configuration/swcrc

module.exports = {
  entry: glob.sync("./src/**/**.ts").reduce(function (obj, el) {
    if (!el.includes(process.env.WEBPACK_FILE)) {
      return obj;
    }

    obj[path.parse(el).name] = el;

    return obj;
  }, {}),
  devtool: "source-map",
  target: "node",
  externals: [nodeExternals()],
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  module: {
    rules: [
      // { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
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
  output: {
    path: path.resolve(__dirname, "dist"),
  },
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
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
};
