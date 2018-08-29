/**
 * Importing Components
 */
import AeOverScreen from './ae-overscreen.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-overscreen', AeOverScreen);
};

/**
 * Exporting only component
 */
export default AeOverScreen;
