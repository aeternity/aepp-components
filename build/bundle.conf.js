/**
 * Core modules
 */
const path = require('path')

/**
 * Webpack modules
 */
const merge = require('webpack-merge')

/**
 * Exporting bundle
 */
module.exports = merge(require('./base.conf.js'), {
  entry: {
    main: './src/index.js',
    variables: './src/components/variables.scss',
    common: './src/components/common.scss'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'aepp-components.js',
    libraryTarget: 'umd',
    library: '@aeternity/aepp-components',
    umdNamedDefine: true
  }
})
