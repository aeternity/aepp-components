/**
 * Webpack modules
 */
const webpack = require('webpack')

/**
 * Bundles
 */
const bundle = require('./bundle.conf.js')
const components = require('./components.conf.js')

/**
 * ENV
 */
process.env.NODE_ENV = 'production'

/**
 * Webpack
 */
webpack([bundle].concat(components), function (err, stats) {
  if (err) throw err
  // console.log(stats)
})
