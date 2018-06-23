/**
 * Core modules
 */
const path = require('path')

/**
 * Webpack modules
 */
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Exporting base
 */
module.exports = {
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: { presets: ['env'] }
    }, {
      test: /\.(svg)$/,
      loader: 'string-loader'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader'
    }, {
      include: [path.resolve(__dirname, '../src/components/variables.scss')],
      loader: 'file-loader',
      options: { name: '[name].[ext]' }
    }, {
      include: [path.resolve(__dirname, '../src/components/common.scss')],
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }]
  },
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader'
    }
  },
  plugins: [
    new ExtractTextPlugin('common.css'),
    new BundleAnalyzerPlugin(),
    // Uglify
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: { warnings: false }
    }),
    // Loader Options
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}
