import AeInput from './ae-input.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-input', AeInput);
};

export default AeInput;
