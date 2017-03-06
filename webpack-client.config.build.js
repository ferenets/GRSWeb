'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');


process.env.NODE_ENV= 'production';
process.env.BABEL_ENV = 'production';

module.exports = {
  devtool: 'cheap-source-map',
  stats: {
    children: false,
    colors: true
  },
  entry: {
    'bundle.grs-web': './src/client/boot/grs-web.entry.js'
  },
  output: {
    publicPath: '/',
    path: './build/client',
    filename: 'scripts/[name].[chunkhash].js',
    chunkFilename: 'scripts/[name].[chunkhash].js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compressor: {
        warnings: false
      }}),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('styles/[name].[chunkhash].css'),
    new AssetsPlugin({filename: 'webpack-assets.json', path: __dirname + '/build/server/views'})
    //new webpack.optimize.CommonsChunkPlugin({name: 'commons'})
  ],
  postcss: [precss(), autoprefixer({browsers: ['last 2 versions']})],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          sourceMaps: true,
          plugins: ['transform-object-assign']
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loaders: [
          'url-loader?name=images/[name].[ext]&limit=4000',
          'image-webpack?bypassOnDebug=false&optimizationLevel=7&progressive=true'
        ]
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style-loader',
          'css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss?parser=postcss-scss')
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
