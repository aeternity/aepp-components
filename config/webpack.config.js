/**
 * Load ENV file
 */
require('dotenv').config()

/**
 * Importing Global Libraries
 */
const path = require('path')

/**
 * Importing Webpack related libraries
 * @type {webpack}
 */
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Exporting Webpack config object
 */
module.exports = {
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
                  resources: path.join(__dirname, '../src/styles/globals.scss')
                }
              }],
              fallback: 'vue-style-loader'
            })
          }
        }
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
            options: { resources: path.join(__dirname, '../src/styles/globals.scss') }
          }],
          fallback: 'css-loader'
        })
      },
      {
        // https://github.com/jeerbl/webfonts-loader#readme
        test: /\.font\.js/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'webfonts-loader'
            }
          ]
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      },
      {
        // Match woff2 in addition to patterns like .woff?v=1.1.1.
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          // Output below fonts directory
          name: './fonts/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          // Output below fonts directory
          name: './assets/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(svg)$/,
        loader: 'url-loader',
        options: {
          // Limit at 50k. Above that it emits separate files
          limit: 10000,
          // Output below fonts directory
          name: './assets/[name].[ext]?[hash]',
          // url-loader sets mimetype if it's passed.
          // Without this it derives it from the file extension
          mimetype: 'image/svg+xml',
          // Fallback to normal file-loader
          fallback: 'file-loader'
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
    // Define global environment variables
    new webpack.EnvironmentPlugin(process.env),
    // https://webpack.js.org/plugins/module-concatenation-plugin/
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  // Fetching all dependencies and
  // creates an object assigned to externals
  // which bypasses the dependencies
  // (doesn't included it in the final bundle)
  externals: Object
  .keys(require('../package').dependencies)
  .reduce((p, dependency) => ({
    ...p,
    [dependency]: {
      commonjs: dependency,
      commonjs2: dependency
    }
  }), {}),
  performance: { hints: false },
  devtool: 'source-map'
}

if (process.env.NODE_ENV === 'production') {
  // Source Maps
  module.exports.devtool = false;
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    // Uglify
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      compress: { warnings: false },
      output: { comments: false }
    })
  ])
}
