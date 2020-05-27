const merge = require("webpack-merge");
const base = require("./webpack.base");
let path = require("path");

module.exports = merge(base, {
  mode: "development", //开发模式
  entry: path.resolve(__dirname, "./src/client/index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
});
