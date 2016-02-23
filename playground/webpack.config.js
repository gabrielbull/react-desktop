var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function ExamplesPlugin() {}
ExamplesPlugin.prototype.apply = function (compiler) {
  compiler.resolvers.normal.plugin('module', function(request, callback) {
    if(request.request === 'examples') {
      this.doResolve('module', { path: '', request: '' }, function () {
        callback(null, {
          path: path.join(__dirname, 'index.js'),
          query: '?examples',
          resolved: true
        });
      });
    } else {
      callback();
    }
  });
};

module.exports = {
  entry: path.join(__dirname, 'index.js'),

  output: {
    path: './playground',
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
      'examples-loader': path.join(__dirname, 'examples-loader')
    }
  },

  resolve: {
    root: path.join(__dirname, '..', 'src'),
    alias: {
      'react-desktop': path.join(__dirname, '..', 'src')
    }
  },

  module: {
    loaders: [
      {
        test: /\?examples/,
        loaders: ['babel', 'examples-loader']
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new ExamplesPlugin()
  ]
};
