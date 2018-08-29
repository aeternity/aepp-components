/**
 * Importing Components
 */
import AeButtonGroup from './ae-button-group.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-button-group', AeButtonGroup);
};

/**
 * Exporting only component
 */
export default AeButtonGroup;
