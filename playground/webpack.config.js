var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'index.js'),

  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    filename: 'index.js',
    contentBase: './playground'
  },

  devtool: 'source-map',

  resolveLoader: {
    alias: {
      'examples-loader': path.join(__dirname, 'examplesLoader')
    }
  },

  resolve: {
    alias: {
      'react-desktop': path.join(__dirname, '..'),
      'examples': path.join(__dirname, '..', 'index.js'),
    }
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin()
  ]
};
