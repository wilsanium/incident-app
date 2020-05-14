const WebpackNotifierPlugin = require("webpack-notifier");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          config: {
            path: "./postcss.config.js",
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      title: "App Name",
      contentImage: path.join(__dirname, "image.png"),
    }),
  ],
};
