var webpack = require("webpack");

module.exports = {
  entry: './src/App.js',

  output: {
    path: '.',
    filename: './build/bundle.js',
    libraryTarget: "var"
  },

  devServer: {
    contentBase: './'
  },

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
