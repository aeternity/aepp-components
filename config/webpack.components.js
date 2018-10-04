/**
 * Core Modules
 */
const fs = require('fs')
const path = require('path')

/**
 * Importing Webpack related libraries
 * @type {webpack}
 */
const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Regular Expression to check
 * the extension of a file
 */
const checkExt = /^(\.)|(\.[0-9a-z])/i

/**
 * Outputs an array with the names
 * of the component folders
 */
const components = fs.readdirSync(
  path.resolve(__dirname, '../src/components')
).filter((folder) => !checkExt.test(folder))

/**
 * Exporting components
 */
module.exports = components.map((name) => merge(require('./webpack.config'), {
  entry: path.resolve(__dirname, './component-wrapper-template.js'),
  output: {
    path: path.resolve(__dirname, '../dist', name),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: '@aeternity/aepp-components/' + name,
    umdNamedDefine: true
  },
  module: {
    rules: [{
      include: path.resolve(__dirname, './component-wrapper-template.js'),
      loader: 'string-replace-loader',
      options: {
        multiple: [{
          search: 'COMPONENT_NAME',
          replace: name,
        }, {
          search: 'COMPONENT_PATH',
          replace: path.resolve(__dirname, '../src/components', name, `${name}.vue`),
        }],
      },
    }],
  },
  plugins: [
    // Bundle Analyzer
    new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }),
    // Extract CSS
    new ExtractTextPlugin({
      filename: name +'.css',
      disable: false,
      allChunks: true
    })
  ]
}))
