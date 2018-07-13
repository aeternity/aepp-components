/**
 * aeInput instance
 * @param {Vue} Vue
 * @param {{}} options
 */
export const install = function (Vue, options) {
  Vue.component('ae-toolbar', require('./ae-toolbar.vue').default)
}
