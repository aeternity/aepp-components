/**
 * Importing Components
 */
import AeListItem from './ae-list-item.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-list-item', AeListItem);
};

/**
 * Exporting only component
 */
export default AeListItem;
