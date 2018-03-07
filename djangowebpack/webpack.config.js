var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
module.exports = {
  context: __dirname,
  entry: './assets/js/index.js',
  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js"
  },
  plugins: [
      new BundleTracker({filename: './webpack-stats.json'})
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader:'style-loader!css-loader'
      }
    ]
  }
};
