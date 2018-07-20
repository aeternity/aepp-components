/**
 * Load ENV file
 */
require('dotenv').config()

/**
 * Importing Global Libraries
 */
const path = require('path')

/**
 * Exporting
 */
module.exports = {
  /**
   * Documentation page Title
   */
  title: require('../package.json').name,

  /**
   * Components folder
   * TODO: later remove '-' for folder recognition
   */
  components: path.resolve(__dirname, '../src/components/**/*-*.vue'),

  /**
   * Assets directory
   */
  assetsDir: path.resolve(__dirname, '../public'),

  /**
   * Folder for static HTML style guide generated with styleguidist build command.
   */
  styleguideDir: path.resolve(__dirname, '../docs'),

  /**
   * Show or hide props and methods documentation initially.
   * It can be toggled in the UI by clicking the Props & methods button after each component description.
   *
   * https://github.com/vue-styleguidist/vue-styleguidist/tree/master/docs#showusage
   */
  showUsage: true,

  /**
   *
   */
  theme: {
    fontFamily: {
      base: [
        '"Inter UI"',
        'sans-serif'
      ],
      monospace: ['"IBM Plex Mono"', 'monospace']
    },
    // https://github.com/vue-styleguidist/vue-styleguidist/blob/master/src/styles/theme.js
    color: {
      base: '#1e1e1e', // #333
      light: '#989898', // #999
      lightest: '#dcdcdc', // #ccc
      link: '#320a3c', // #1978c8
      linkHover: '#f03c6e', // #f28a25
      border: '#e8e8e8',
      name: '#ff96a0', // #7f9a44
      type: '#c69cd0', // #b77daa
      error: '#fff',
      baseBackground: '#fff',
      errorBackground: '#c00',
      codeBackground: '#f5f5f5', // #f5f5f5
      sidebarBackground: '#f5f5f5' // #f5f5f5
    }
  },

  /**
   * Vue required library
   */
  require: [path.join(__dirname, 'global.requires.js')],

  /**
   * Webpack configuration
   *
   * https://github.com/vue-styleguidist/vue-styleguidist/blob/master/docs/Configuration.md
   */
  webpackConfig: Object.assign(require('./webpack.config'), {
    devtool: 'source-map'
  })
}
