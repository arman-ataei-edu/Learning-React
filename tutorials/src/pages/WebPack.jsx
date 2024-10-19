import Code from "../components/Code";
import { Link } from "react-router-dom";
// import w3CodeColor from "../styles/w3codecolor";
import Highlight from "react-highlight";

// w3CodeColor();
// document.addEventListener("loadestart", w3CodeColor());
// window.addEventListener("onbeforeunload", w3CodeColor());

const WebPack = () => {
  return (
    <div className="w3-container">
      <Code
        title={"A. Necessary Package Installation"}
        code={`npm install --save-dev @babel/core @popperjs/core autoprefixer babel-loader bootstrap clean-webpack-plugin css-loader
            css-minimizer-webpack-plugin html-webpack-plugin
            mini-css-extract-plugin postcss postcss-loader sass sass-loader
            style-loader webpack webpack-cli webpack-dev-server`}
      >
        <ol>
          <li>
            <span className="w3-lime">@babel/core:</span> A JavaScript compiler
            that can transform ES6+ code to ES5 code that is compatible with
            older browsers.
          </li>
          <li>
            <span className="w3-lime">@popperjs/core:</span> A utility library
            that helps with positioning and aligning elements on a web page.
          </li>
          <li>
            <span className="w3-lime">autoprefixer:</span> A plugin that adds
            vendor prefixes to CSS rules to ensure compatibility across
            different browsers.
          </li>
          <li>
            <span className="w3-lime"></span>
          </li>
          <li>
            <span className="w3-lime"></span>
          </li>
          <li>
            <span className="w3-lime"></span>
          </li>
          <li>
            <span className="w3-lime"></span>
          </li>
          <li>
            <span className="w3-lime"></span>
          </li>
          <li>
            <span className="w3-lime"></span>
          </li>
          <li>
            <span className="w3-lime"></span>
          </li>
          <li>
            <span className="w3-lime"></span>
          </li>
          <li>
            <span className="w3-lime"></span>
          </li>
          <li>
            <span className="w3-lime"></span>
          </li>
        </ol>

        <Link
          to="https://iamsrijan.medium.com/getting-started-with-webpack-a-beginners-guide-to-bundling-web-assets-3d0cc5d2ea4d
"
        >
          referece
        </Link>
      </Code>
      <Code
        lang={"js"}
        title={"B. Webpack configuration file setup"}
        discription={`create a configuration file called "webpack.config.js" to tell webpack how to bundle our code. This file is the heart of our webpack setup and contains various settings that define how webpack should bundle our code.`}
        code={`const path = require("path");
          const MiniCssExtractPlugin = require("mini-css-extract-plugin");
          const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
          const TerserPlugin = require("terser-webpack-plugin");
          const HtmlWebpackPlugin = require("html-webpack-plugin");
          const { CleanWebpackPlugin } = require("clean-webpack-plugin");
          const webpack = require("webpack");
          
          const isDevelopment = process.env.NODE_ENV !== "production";
          
          module.exports = {
            mode: isDevelopment ? "development" : "production",
            entry: "./src/index.js",
            output: {
              path: path.resolve(__dirname, "dist"),
              filename: "bundle.js",
            },
            devtool: isDevelopment ? "inline-source-map" : false,
            devServer: {
              port: 3000,
              hot: true, // enable hot module replacement
          },
            module: {
              rules: [
                {
                  test: /\\.js$/,
                  exclude: /node_modules/,
                  use: {
                    loader: "babel-loader",
                  },
                },
                {
                  test: /\\.scss$/,
                  use: [
                    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                      loader: "postcss-loader",
                      options: {
                        postcssOptions: {
                          plugins: [
                            [
                              "autoprefixer",
                              {
                                grid: true,
                              },
                            ],
                          ],
                        },
                      },
                    },
                    "sass-loader",
                  ],
                },
              ],
            },
            plugins: [
              new CleanWebpackPlugin(),
              new HtmlWebpackPlugin({
                template: "./src/index.html",
              }),
              isDevelopment && new webpack.HotModuleReplacementPlugin(),
              !isDevelopment &&
                new MiniCssExtractPlugin({
                  filename: "[name].[contenthash].css",
                }),
            ].filter(Boolean),
            optimization: {
              minimize: !isDevelopment,
              minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin({
                  extractComments: false,
                }),
              ],
            },
          };`}
      ></Code>
    </div>
  );
};

export default WebPack;
