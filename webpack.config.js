const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rootFolder = './wwwroot';

module.exports = {
  entry: path.resolve(__dirname, rootFolder, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, rootFolder, './dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true,
        },
      },
    ],
  },
  devtool: 'source-map',
};
