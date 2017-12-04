/**
 * The file enables `/src/components/aeIcon/aeIcon.js` to import all icons
 * in a one-shot manner. There should not be any reason to edit this file.
 */

const files = require.context('.', false, /\.svg$/)
const icons = {}

files.keys().forEach((key) => {
  icons[key.replace(/(\.\/|\.svg)/g, '')] = files(key)
})

export default icons
