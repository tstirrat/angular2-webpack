// inspired by the config here:
// https://github.com/angular-class/angular2-webpack-starter/blob/9c5b1637df433d5b92beb0dd212c68220d5649d1/webpack.config.js

var path = require('path');
var webpack = require('webpack');

// Webpack Plugins
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;


function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {

  // debug: true,
  cache: true,

  // verbose: true,
  displayErrorDetails: true,

  // chunks
  entry: {
    'vendor': [
      'zone.js',
      'reflect-metadata',
      'angular2/angular2',
      'angular2/router',
      'angular2/http'
    ],
    'app': [
      './app/bootstrap.ts'
    ]
  },

  // Config for our build files
  output: {
    path: 'dist',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      // Support for .ts files.
      { test: /\.ts$/, loader: 'ts' }
    ]
  },

  plugins: [
    new CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js'
    })
  ],

  devServer: {
    contentBase: './app',
    historyApiFallback: true,
    inline: true,
  }
};
