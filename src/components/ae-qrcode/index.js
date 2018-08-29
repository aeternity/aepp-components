import AeQRCode from './ae-qrcode.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-qrcode', AeQRCode);
};

export default AeQRCode;
