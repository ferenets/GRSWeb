'use strict';

const path = require('path');
const webpack = require('webpack');
const precss = require('precss');

module.exports = {
  devtool: 'eval',
  entry: {
    'bundle.grs-web': [
      'webpack-hot-middleware/client?reload=true',
      './src/client/boot/grs-web.entry.js'
    ]
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, './build/client'),
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[name].js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  postcss: [precss()],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          sourceMaps: 'inline',
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loaders: [
          'url-loader?name=images/[name].[ext]&limit=4000'
        ]
      },
      {
        test: /\.(scss|css)$/,
        loaders: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader?parser=postcss-scss'
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        query: 'name=fonts/[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        query: 'name=templates/[name].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
