/**
 * Webpack modules
 */
const webpack = require('webpack')

/**
 * Bundles
 */
const bundle = require('./bundle.conf.js')

/**
 * Webpack compiler
 */
const compiler = webpack(bundle)

/**
 * Compile and watch
 */
compiler.watch({ // watch options:
  aggregateTimeout: 300, // wait so long for more changes
  poll: true // use polling instead of native watchers
  // pass a number to set the polling interval
}, function (err, stats) {
  // ...
  console.log('watch build finished');
  if(err) {
    console.log(err);
  }
});
