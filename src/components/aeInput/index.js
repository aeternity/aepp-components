/**
 * aeInput instance
 * @param {Vue} Vue
 * @param {{}} options
 */
export const install = function (Vue) {
  Vue.component('ae-input', import(/* webpackChunkName: "aeInput" */'./aeInput.vue'));
};
