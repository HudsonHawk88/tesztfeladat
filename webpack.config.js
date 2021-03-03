const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/",
    historyApiFallback: true,
    hot: true,
    proxy: {
      "/api/": {
        target: "https://randomuser.me/api/",
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      crypto: "false",
    },
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   loader: "file-loader",
      //   include: path.resolve(__dirname, "public"),
      // },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        loader: "css-loader",
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
};
