import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import string from 'rollup-plugin-string'
import babel from 'rollup-plugin-babel'
import url from 'rollup-plugin-url'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/aepp-components.esm.js',
    format: 'es'
  },
  plugins: [
    resolve({ modulesOnly: true }),
    vue(),
    string({ include: '**/*.svg' }),
    babel({
      runtimeHelpers: true,
      exclude: ['node_modules/**']
    }),
    url({
      include: ['**/*.png'],
      limit: Infinity
    })
  ]
}
