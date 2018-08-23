/**
 * Importing Components
 */
import AeCheck from './ae-check.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-check', AeCheck);
};

/**
 * Exporting only component
 */
export default AeCheck;
