/**
 * Webpack modules
 */
const merge = require('webpack-merge')

/**
 * Bundles
 */
const bundle = require('./bundle.conf.js')

/**
 * Exporting styleguide conf
 */
module.exports = merge(bundle, {
  devtool: 'inline-source-map'
})
