/**
 * Importing Components
 */
import AeAddress from './ae-address.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-address', AeAddress);
};

/**
 * Exporting only component
 */
export default AeAddress;
