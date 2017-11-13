var merge = require('webpack-merge');

var commonConfig = {
  output: {
    path: __dirname + '/../dist',
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
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
      }, {
        test: /\.scss$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader',
    },
  },
};

module.exports = [
  merge(commonConfig, {
    entry: {
      main: './src/plugin.js',
      variables: './src/components/variables.scss',
    },
    output: {
      filename: 'aepp-components.js',
      libraryTarget: 'window',
      library: 'AeppComponents',
    },
  }),
  merge(commonConfig, {
    entry: {
      main: './src/index.js',
      variables: './src/components/variables.scss',
    },
    output: {
      filename: 'aepp-components.esm.js',
      libraryTarget: 'umd',
      library: '@aeternity/aepp-components',
      umdNamedDefine: true,
    },
  }),
];
