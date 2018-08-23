/**
 * Importing Components
 */
import AeButton from './ae-button.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-button', AeButton);
};

/**
 * Exporting only component
 */
export default AeButton;
