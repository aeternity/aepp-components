const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
  entry: {
    main: './src/index.js',
    variables: './src/components/variables.scss',
    mixins: './src/components/mixins.scss',
    common: './src/components/common.scss',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'aepp-components.js',
    libraryTarget: 'umd',
    library: '@aeternity/aepp-components',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env'],
        },
      }, {
        test: /\.(svg)$/,
        loader: 'string-loader',
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
      }, {
        include: [
          path.resolve(__dirname, '../src/components/variables.scss'),
          path.resolve(__dirname, '../src/components/mixins.scss'),
        ],
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }, {
        include: [
          path.resolve(__dirname, '../src/components/common.scss'),
        ],
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        // Match woff2 in addition to patterns like .woff?v=1.1.1.
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            // Limit at 50k. Above that it emits separate files
            limit: 100000,

            // url-loader sets mimetype if it's passed.
            // Without this it derives it from the file extension
            mimetype: "application/font-woff",

            // Output below fonts directory
            name: "./fonts/[name].[ext]",
          }
        },
      },
    ],
  },
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader',
    }
  },
  resolve: {
    alias: {
      // Public assets folder
      public: path.resolve(__dirname, '../public')
    }
  },
  plugins: [
    new ExtractTextPlugin('common.css'),
  ],
};

module.exports = webpackConfig;
