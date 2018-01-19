const path = require('path')

module.exports = {
  // https://github.com/vue-styleguidist/vue-styleguidist/blob/master/docs/Configuration.md
  webpackConfig: require('./build/webpack.conf.js'),
  // serverPort: 6066,
  showUsage: true,
  theme: {
    // https://github.com/vue-styleguidist/vue-styleguidist/blob/master/src/styles/theme.js
    color: {
      base: '#1e1e1e', // #333
      light: '#989898', // #999
      lightest: '#dcdcdc', // #ccc
      link: '#320a3c', // #1978c8
      linkHover: '#f03c6e', // #f28a25
      border: '#e8e8e8',
      name: '#ff96a0', // #7f9a44
      type: '#c69cd0', // #b77daa
      error: '#fff',
      baseBackground: '#fff',
      errorBackground: '#c00',
      codeBackground: '#f5f5f5', // #f5f5f5
      sidebarBackground: '#f5f5f5' // #f5f5f5
    },
    fontFamily: {
      base: [
        '"Roboto"',
        'sans-serif'
      ],
      monospace: ['"RobotoMono"', 'monospace']
    }
  },
  styles: {
    Logo: {
      logo: {
        // animation: 'blink ease-in-out 300ms infinite'
      }
    }
  },
  require: [
    path.join(__dirname, 'src/components/common.scss')
  ]
}
