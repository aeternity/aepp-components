/**
 * Importing Components
 */
import AeSplash from './ae-splash.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-splash', AeSplash);
};

/**
 * Exporting only component
 */
export default AeSplash;
