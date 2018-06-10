const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  devtool: 'source-map', // debug in broswer
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0']
        }
      }
    ],
    // devServer: {
    //     inline: true,
    //     port: 3000
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
  })
  ]
};

module.exports = config;