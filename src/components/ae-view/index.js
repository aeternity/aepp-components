/**
 * Importing Components
 */
import AeView from './ae-view.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-view', AeView);
};

/**
 * Exporting only component
 */
export default AeView;
