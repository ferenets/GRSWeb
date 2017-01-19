'use strict';

const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const externalModules = Object.assign({}, getNodeModules(), {
  './webpack-assets.json': 'commonjs ./webpack-assets.json'
});

process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

module.exports = {
  target: 'node',
  context: path.join(__dirname, '/src'),
  entry: {
    'server-app': './server/boot/app/app.js'
  },
  stats: {
    colors: true
  },
  output: {
    path: path.join(__dirname, 'build/server'),
    filename: '[name].js'
  },
  externals: [isExternal, externalModules],
  node: {
    __dirname: false,
    __filename: false,
    global: false,
    process: false,
    Buffer: false,
    setImmediate: false
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_WEBPACK_BUILD: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg|ttf|eot|svg|woff|woff2|css|scss|html$)/,
        loader: 'null-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        query: 'name=templates/[name].[ext]'
      },
      {
        test: /\.ejs$/,
        loader: 'file-loader',
        query: 'name=[name].[ext]'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          sourceMaps: true,
          presets: ['es2015']
        }
      }
    ]
  }
};


function isExternal(context, request, callback) {
  if (/\.(jpe?g|png|gif|svg|ttf|eot|svg|woff|woff2|css|scss|html$)/.test(request)) {
    return callback(null, 'var null');
  }

  callback();
}


function getNodeModules() {
  return fs.readdirSync(path.join(__dirname,'./node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .reduce((nodeModules, mod) => {
      nodeModules[mod] = 'commonjs ' + mod;
      return nodeModules;
    }, {});
}