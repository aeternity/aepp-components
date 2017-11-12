var webpack = require('webpack');
var webpackConfig = require('./webpack.conf.js')

webpack(webpackConfig, function (err, stats) {
  if (err) throw err;
  // console.log(stats);
  console.log('it worked');
});
