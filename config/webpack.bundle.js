/**
 * Core Modules
 */
const path = require('path')

/**
 * Importing Webpack related libraries
 * @type {webpack}
 */
const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

/**
 * Exporting Webpack all config object
 */
module.exports = merge(require('./webpack.config.js'), {
  entry: {
    'aepp.base': './src/styles/index.scss',
    'aepp.components': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: '@aeternity/aepp-components',
    umdNamedDefine: true
  },
  plugins: [
    // Bundle Analyzer
    new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }),
    // Extract CSS
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true
    })
  ]
})

if (process.env.NODE_ENV === 'production') {
  // Source Maps
  module.exports.devtool = false;
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    // https://github.com/johnagan/clean-webpack-plugin
    new CleanWebpackPlugin(['build'], {
      root: path.resolve(__dirname, '..'),
      exclude: [],
      verbose: true,
      dry: false
    })
  ])
}
