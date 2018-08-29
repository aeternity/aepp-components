import AeList from './ae-list.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-list', AeList);
};

export default AeList;
