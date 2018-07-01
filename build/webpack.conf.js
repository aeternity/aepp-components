const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: '@aeternity/aepp-components',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the 'scss' and 'sass' values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            }),

            // scss loader
            scss: ExtractTextPlugin.extract({
              use: [{
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              }, {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }, {
                loader: 'sass-resources-loader',
                options: {
                  resources: path.join(__dirname, '../src/styles/_globals.scss')
                }
              }],
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { presets: ['env'] }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-resources-loader',
            options: { resources: path.join(__dirname, '../src/styles/_globals.scss') }
          }],
          fallback: 'css-loader'
        })
      },
      {
        // Match woff2 in addition to patterns like .woff?v=1.1.1.
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          // Limit at 50k. Above that it emits separate files
          limit: 50000,

          // url-loader sets mimetype if it's passed.
          // Without this it derives it from the file extension
          mimetype: 'application/font-woff',

          // Output below fonts directory
          name: './fonts/[name].[ext]'
        }
      },
      {
        test: /\.(svg)$/,
        loader: 'string-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader'
    }
  },
  plugins: [
    // Bundle Analyzer
    new BundleAnalyzerPlugin(),
    // Define global environment variables
    new webpack.EnvironmentPlugin(process.env),
    // Extract CSS
    new ExtractTextPlugin({
      filename: 'common.css',
      disable: false,
      allChunks: true
    }),
    // Hot Module Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Common Chunk Splitting
    new webpack.optimize.CommonsChunkPlugin({
      // filename: "vendor.js"
      // (Give the chunk a different name)
      name: 'vendor',
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
      minChunks: function (module) {
        // This prevents stylesheet resources with the .css or .scss extension
        // from being moved from their original chunk to the vendor chunk
        if (module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
          return false
        }
        // split the vendor specific modules
        return module.context && module.context.includes('node_modules')
      }
    })
  ],
  resolve: {
    alias: {
      // Global paths
      '@source': path.resolve(__dirname, '../src'),
      '@public': path.resolve(__dirname, '../public'),
    },
    extensions: ['.js', '.vue']
  }
}

if (process.env.NODE_ENV === 'production') {
  // Source Maps
  module.exports.devtool = false;
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    // Uglify
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: { warnings: false }
    }),
    // Loader Options
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
