var webpack = require("webpack");
var path = require('path');

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

  resolveLoader: {
    alias: {
      'example-loader': path.join(__dirname, 'src', 'exampleLoader')
    }
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules|examples/,
        loader: 'babel'
      },
      /*{
        test: /examples\/.*\.js/,
        loader: 'example-loader'
      },*/
      {
        test: /\.scss|\.css$/,
        loaders: [
          'style',
          'css',
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
  }
};
