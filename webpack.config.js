var webpack = require("webpack");

module.exports = {
  entry: './src/App.js',

  output: {
    path: '.',
    filename: './build/bundle.js',
    publicPath: '/',
    libraryTarget: "var"
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader?stage=0'
      }
    ]
  }
};
