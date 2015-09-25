var Webpack = require('webpack');
var path = require('path');
var appPath = path.resolve(__dirname, 'app/assets/javascripts');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = appPath; //path.resolve(__dirname, 'public', 'build');

var config = {
  context: __dirname,
  entry: [
    path.resolve(appPath, 'main.js')],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: [nodeModulesPath]
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;
