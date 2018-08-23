/**
 * Importing Components
 */
import AeText from './ae-text.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-text', AeText);
};

/**
 * Exporting only component
 */
export default AeText;
