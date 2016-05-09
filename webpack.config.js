var webpack = require("webpack");
var path = require('path');
var autoprefixer = require('autoprefixer');

const PROD = process.env.PROD_DEV ? true : false;

module.exports = {
  entry: './src/app.js',

  output: {
    path: '.',
    filename: './bundle.js',
    libraryTarget: "var"
  },

  devServer: {
    contentBase: './assets'
  },

  devtool: PROD ? null : 'source-map',

  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules|examples/,
        loader: 'babel'
      },
      {
        test: /\.scss|\.css$/,
        loaders: [
          'style',
          'css',
          'postcss',
          (
            'sass?' +
            'includePaths[]=./node_modules/bourbon/app/assets/stylesheets'
          )
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2)$/,
        loader: 'url'
      },
      {
        test: /\.(eot|ttf)$/,
        loader: 'file'
      },
      {
        test: /\.(html|svg)/,
        loader: 'raw'
      }
    ]
  },

  postcss: function () {
    return [autoprefixer];
  }
};
