/**
 * Exporting font generation/configuration file
 */
module.exports = {
  fontName: 'ae-icon',
  baseSelector: '.ae-icon',
  classPrefix: 'ae-icon-',
  embed: true,
  fileName: 'fonts/aepp-[fontname].[ext]',
  types: ['eot', 'woff', 'woff2', 'ttf', 'svg'],
  files: [
    './*.svg',
  ],
};
