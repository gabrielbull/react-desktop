var path = require('path');

module.exports = {
  mode: 'development',

  entry: './page_index.js',

  output: {
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  // resolve: {
  //   alias: {
  //     'react-desktop': path.join(__dirname, '..', '..')
  //   }
  // },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};
