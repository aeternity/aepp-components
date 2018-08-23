/**
 * aeInput instance
 * @param {Vue} Vue
 * @param {{}} options
 */
export const install = function (Vue, options) {
  Vue.component('ae-input', import(/* webpackChunkName: "aeInput" */'./aeInput.vue'));
};
