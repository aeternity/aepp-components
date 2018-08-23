/**
 * Importing Components
 */
import AeBadge from './ae-badge.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-badge', AeBadge);
};

/**
 * Exporting only component
 */
export default AeBadge;
