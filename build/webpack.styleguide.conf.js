const merge = require('webpack-merge')
const baseConf = require('./webpack.conf.js');
const mods = {
  devtool: 'inline-source-map'
}

module.exports = merge(baseConf, mods)
