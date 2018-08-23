/**
 * Importing Webpack
 * @type {webpack}
 */
var webpack = require('webpack');

/**
 * Running Webpack Build Process
 */
webpack([
  require('./webpack.bundle.js')
].concat(
  require('./webpack.components.js')
), function (err, stats) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(stats.toString({
    chunks: false, // Makes the build much quieter
    colors: true // Shows colors in the console
  }));
})
