
/**
 * The file enables `/src/components/aeIcon/aeIcon.js` to import all icons
 * in a one-shot manner. There should not be any reason to edit this file.
 *
 * This file was edited to compensate for the jest environment which does 
 * not recognize webpack's require.comtext function.
 */


// This condition actually should detect if it's an Node environment
if (typeof require.context === 'undefined') {
  const fs = require('fs');
  const path = require('path');

  require.context = (base = '.', scanSubDirectories = false, regularExpression = /\.svg$/) => {
    const files = {};

    function readDirectory(directory) {
      fs.readdirSync(directory).forEach((file) => {
        const fullPath = path.resolve(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
          if (scanSubDirectories) readDirectory(fullPath);

          return;
        }

        if (!regularExpression.test(fullPath)) return;
        console.log(fullPath)
        files[fullPath] = true;
      });
    }

    readDirectory(path.resolve(__dirname, base));

    function Module(file) {
      // return require(file);
    }

    Module.keys = () => Object.keys(files);

    return Module;
  };
}


const files = require.context('.', false, /\.svg$/)

const icons = {}

files.keys().forEach((key) => {
  icons[key.replace(/(\.\/|\.svg)/g, '')] = files(key)
})

export default icons
