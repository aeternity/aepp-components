/**
 * Core modules
 */
const fs = require('fs')
const path = require('path')

/**
 * Webpack modules
 */
const merge = require('webpack-merge')

/**
 * Regular Expression
 */
const checkExt = /\.[0-9a-z]+$/i

/**
 * Creating component output folder structure
 */
const components = fs.readdirSync(
  path.resolve(__dirname, '../src/components')
).filter(
  (folder) => !checkExt.test(folder)
)

/**
 * Exporting components
 */
module.exports = components.map((name) => merge(require('./base.conf.js'), {
  entry: path.resolve(__dirname, '../src/components', name, name + '.vue'),
  output: {
    path: path.resolve(__dirname, '../dist', name),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: '@aeternity/aepp-components/' + name,
    umdNamedDefine: true
  }
}))
