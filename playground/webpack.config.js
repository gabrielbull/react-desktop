module.exports = {
  entry: {
    app: './playground/playground.js'
  },

  output: {
    path: './playground',
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    contentBase: './playground'
  },

  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?stage=0'
      }
    ]
  }
};
