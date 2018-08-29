import AeIcon from './ae-icon.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-icon', AeIcon);
};

export default AeIcon;
