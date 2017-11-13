var webpackConfig = {
  entry: {
    main: './src/index.js',
    variables: './src/components/variables.scss',
  },
  output: {
    path: __dirname + '/../dist',
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

module.exports = webpackConfig;
