var webpack = require('webpack');
var webpackConfig = require('./webpack.conf.js')

var compiler = webpack(webpackConfig);

console.log(' build started');
compiler.watch({ // watch options:
	aggregateTimeout: 300, // wait so long for more changes
	poll: true // use polling instead of native watchers
	// pass a number to set the polling interval
}, function(err, stats) {
	// ...
	console.log('watch build finished');
	if(err) {
		console.log(err);
	}
});
