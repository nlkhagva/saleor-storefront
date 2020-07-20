const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebappWebpackPlugin = require("webapp-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

process.env.API_URI = "http://192.168.1.2:8000/graphql/";

if (!process.env.API_URI) {
  throw new Error("Environment variable API_URI not set");
}

module.exports = ({ sourceDir, distDir }) => ({
  resolve: {
    alias: {
      // Explicitely set react's path here because npm-link doesn't do well
      // when it comes to peer dependencies, and we need to somehow develop
      // @saleor/sdk package
      react: path.resolve("./node_modules/react"),
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json",
      }),
    ],
  },
  entry: {
    app: `${sourceDir}/index.tsx`,
  },
  output: {
    path: distDir,
    publicPath: "/",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          experimentalWatchApi: true,
          transpileOnly: true,
        },
      },
      {
        test: /\.(woff2?|ttf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              publicPath: "/fonts/",
            },
          },
        ],
      },
      {
        test: /\.(gif|jpg|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "/images/",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 85,
              },
              pngquant: {
                quality: "65-90",
                speed: 4,
              },
              gifsicle: {
                enabled: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: distDir,
    }),
    new HtmlWebpackPlugin({
      filename: `${distDir}/index.html`,
      template: `${sourceDir}/index.html`,
      API_URI: process.env.API_URI,
    }),
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      exclude: "node_modules",
    }),
    // PWA plugins
    new WebappWebpackPlugin({
      logo: `${sourceDir}/images/favicon.png`,
      prefix: "images/favicons/",
      favicons: {
        appName: "UNURSHOP",
        appDescription: "Англи бараа захиалга, ӨНӨРШОП unurshop.mn",
        display: "standalone",
        developerURL: null, // prevent retrieving from the nearest package.json
        background: "#ddd",
        theme_color: "#333",
      },
    }),
    new webpack.EnvironmentPlugin({
      API_URI: "http://localhost:8000/graphql/",
      SENTRY_DSN: null,
      SENTRY_APM: "0",
      DEMO_MODE: false,
      GTM_ID: undefined,
    }),
  ],
  node: {
    fs: "empty",
    module: "empty",
  },
});
