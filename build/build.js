var webpack = require('webpack');
var webpackConfig = require('./webpack.conf.js')

process.env.NODE_ENV = 'production';

webpack(webpackConfig, function (err, stats) {
  if (err) throw err;
  // console.log(stats);
  console.log('it worked');
});
