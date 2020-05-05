const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const fs = require("fs");

const sassLoader = {
  loader: "sass-loader"
};

const cssLoader = (isHashed = true) => ({
  loader: "css-loader",
  options: {
    // minimize: true,
    modules: true,
    camelCase: false,
    importLoaders: 3,
    localIdentName: isHashed ? "duik-[folder]__[local]__[hash:4]" : "[local]"
  }
});

const postCssLoader = {
  loader: "postcss-loader",
  options: {
    ident: "postcss",
    plugins: () => [autoprefixer()]
  }
};

module.exports = {
  resolve: {
    extensions: [".js"]
  },
  entry: {
    kit: path.resolve(__dirname, "kit", "cssbundle.js")
  },
  output: {
    libraryTarget: "umd",
    filename: "[name]/dist/[name].js",
    path: path.resolve(__dirname)
  },
  mode: "development",
  node: {
    fs: "empty"
  },
  externals: [nodeExternals(), /^(@duik).*/i],
  optimization: {
    // We no not want to minimize npm code.
    minimize: false,
    usedExports: true,
    sideEffects: true
  },
  module: {
    rules: [
      {
        test: /^((?!module).)*(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [cssLoader(false), postCssLoader, sassLoader]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("./[name]/dist/styles.css")]
};
