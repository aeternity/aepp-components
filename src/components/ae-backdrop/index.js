import AeBackdrop from './ae-backdrop.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-backdrop', AeBackdrop);
};

export default AeBackdrop;
