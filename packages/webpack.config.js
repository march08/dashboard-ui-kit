const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs');

const packages = fs
  .readdirSync(__dirname)
  .filter((item) => !item.endsWith('.js'))
  .filter(
    (item) =>
      ![
        '_vars.scss',
        '__generated_types',
        'dist',
        'docs',
        'module.d.ts',
        'packages',
        'tsconfig.json',
        'webpack.config.js',
        '.DS_Store',
        'README.md',
        'copyTypes.script.js',
        'all',
      ].includes(item)
  );

const sassLoader = {
  loader: 'sass-loader',
};

const cssLoader = (isHashed = true) => ({
  loader: 'css-loader',
  options: {
    // minimize: true,
    modules: true,
    camelCase: false,
    importLoaders: 3,
    localIdentName: isHashed ? 'duik-[folder]__[local]__[hash:4]' : '[local]',
  },
});

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: () => [autoprefixer()],
  },
};

const entry = packages.reduce((res, m) => {
  return {
    ...res,
    [m]: path.resolve(__dirname, m),
  };
}, {});

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  entry: entry,
  output: {
    libraryTarget: 'umd',
    filename: '[name]/dist/index.js',
    path: path.resolve(__dirname),
    globalObject: 'this',
  },
  mode: 'production',
  node: {
    fs: 'empty',
  },
  externals: [nodeExternals(), /^(@duik).*/i],
  optimization: {
    // We no not want to minimize npm code.
    minimize: false,
    usedExports: true,
    sideEffects: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            declaration: true,
            isolatedModules: false,
            allowJs: false,
            outDir: './__generated_types',
            noEmit: false,
            jsx: 'react',
          },
        },
      },
      {
        test: /\.(png|jpg|gif|eot|svg|ttf|woff|otf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10,
              name: '[hash].[ext]',
              publicPath: './',
              outputPath: (url, resourcePath, context) => {
                const relativePath = path.relative(
                  path.resolve(context, 'packages'),
                  resourcePath
                );
                const [packageName] = relativePath.split('/');

                return `./${packageName}/dist/${url}`;
              },
            },
          },
        ],
      },
      {
        test: /^((?!module).)*(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [cssLoader(false), postCssLoader, sassLoader],
        }),
      },
      {
        test: /module.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [cssLoader(true), postCssLoader, sassLoader],
        }),
      },
    ],
  },
  plugins: [new ExtractTextPlugin('./[name]/dist/styles.css')],
};
