/**
 * Importing Libraries
 */
import VueTouch from 'vue-touch';

/**
 * Importing Components
 */
import AeFlip from './ae-flip.vue';

/**
 * Exporting Install function for Vue
 * @param {Vue} Vue
 */
export const install = function (Vue) {
  /**
   * Installing Libraries
   */
  Vue.use(VueTouch);

  /**
   * Installing Components
   */
  Vue.component('ae-flip', AeFlip);
};

/**
 * Exporting only component
 */
export default AeFlip;
