const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.[contenthash].js",
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'index.html')
  })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
         test: /\.(png|jpe?g|gif)$/,
         use: [
          {
            loader: `img-optimize-loader`,
            options: {
              compress: {
                // This will take more time and get smaller images.
                mode: 'high', // 'lossless', 'low'
                webp: true,
                gifsicle: true,
                disableOnDevelopment: false,
              },
            },
          },
        ],
      },
      {
        test: /\.mp[3|4]$/i,
        use: [
          'file-loader',
        ]
      },
    ],
  },
};
