const path = require("path");
module.exports = {
  mode: "development",
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "imgs/",
            limit: 2048,
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
