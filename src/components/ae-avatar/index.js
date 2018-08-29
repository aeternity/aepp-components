import AeAvatar from './ae-avatar.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-avatar', AeAvatar);
};

export default AeAvatar;
