const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      updateTime: getTime(),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          // 从public中复制文件
          from: path.resolve(__dirname, "public"),
          // 把复制的文件存放到dis里面
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", postcssoader(), "less-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", postcssoader()],
      },
    ],
  },
  devServer: {
    host: "0.0.0.0",
  },
};

function postcssoader() {
  return {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [["postcss-preset-env"]],
      },
    },
  };
}

function getTime() {
  let date = new Date();
  let nowMonth = date.getMonth() + 1;
  let strDate = date.getDate();
  if (nowMonth >= 1 && nowMonth <= 9) {
    nowMonth = "0" + nowMonth;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  return date.getFullYear() + "年" + nowMonth + "月" + strDate + "日";
}
