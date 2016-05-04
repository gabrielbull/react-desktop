var webpack = require("webpack");

module.exports = {
  entry: './src/app.js',

  output: {
    path: '.',
    filename: './bundle.js',
    libraryTarget: "var"
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel'
      },
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
