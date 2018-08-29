import AeCard from './ae-card.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  Vue.component('ae-card', AeCard);
};

export default AeCard;
