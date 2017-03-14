var webpack = require("webpack");
var path = require('path');
var autoprefixer = require('autoprefixer');

const PROD = process.env.PROD_DEV ? true : false;

module.exports = {
  entry: './src/app.js',

  output: {
    path: __dirname,
    filename: './bundle.js',
    libraryTarget: "var"
  },

  devServer: {
    contentBase: './assets'
  },

  devtool: PROD ? false : 'source-map',

  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules|examples/,
        use: 'babel-loader'
      },
      {
        test: /\.scss|\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer]
            }
          },
          'sass-loader?includePaths[]=./node_modules/bourbon/app/assets/stylesheets'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(eot|ttf)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(html|svg)/,
        loader: 'raw-loader'
      }
    ]
  }
};
