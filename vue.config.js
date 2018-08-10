const meta = require('./package')

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    externals: Object.keys(meta.dependencies)
      .reduce((p, dependency) => ({
        ...p,
        [dependency]: dependency
      }), {})
  },
  chainWebpack: config =>
    config
      .module
      .rule('svg')
      .use('file-loader')
      .loader('raw-loader')
      .tap(() => ({}))
}
