const path = require('path');
const nodeExternals = require('webpack-node-externals');
const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');



const modules = [
  'DynamicFields'
]

const entry = modules.reduce((res, m) => {
  return {
    ...res,
    [m]: path.resolve(__dirname, m)
  }
}, {})

module.exports = {
  entry: entry,
  output: {
    libraryTarget: 'commonjs2',
    filename: '[name]/dist/index.js',
    path: path.resolve(__dirname)
  },
  node: {
    fs: 'empty',
  },
  externals: [nodeExternals({
    modulesDir: 'node_modules',
  })],
  mode: 'production',
  optimization: {
    // We no not want to minimize npm code.
    minimize: false,
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
            outDir: './dist',
            noEmit: false,
            jsx: 'react'
          },
        },
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: './**/*.d.ts',
        to: './dist/index.d.ts',
        ignore: ['**/node_modules/**', '**/docs/**'],
        transformPath(targetPath, absolutePath) {
          // copy d.ts from package-name/ to package-name/dist/
          console.log('------', targetPath, absolutePath)
          const z = absolutePath.split('/')
          const lastTwo = z.splice(z.length - 2, 2)
          lastTwo.splice(1, 0, 'dist')
          return lastTwo.join('/');
        }
      },
    ]),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    // alias: {
    //   react: path.resolve(__dirname, './docs/node_modules/react'),
    //   "react-dom": path.resolve(__dirname, './docs/node_modules/react-dom')
    // }
  },
};