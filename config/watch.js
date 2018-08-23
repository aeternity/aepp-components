/**
 * Importing Webpack
 * @type {webpack}
 */
var webpack = require('webpack');

/**
 * Running Webpack Build Process
 */
webpack(Object.assign(require('./webpack.config.js'), require('./webpack.bundle.js')).watch({ // watch options:
  aggregateTimeout: 300, // wait so long for more changes
  poll: true // use polling instead of native watchers
  // pass a number to set the polling interval
}, function(err, stats) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stats.toString({
    chunks: false,  // Makes the build much quieter
    colors: true    // Shows colors in the console
  }));
});
