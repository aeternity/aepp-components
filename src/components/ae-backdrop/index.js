/**
 * Importing Components
 */
import AeBackdrop from './ae-backdrop.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-backdrop', AeBackdrop);
};

/**
 * Exporting only component
 */
export default AeBackdrop;
