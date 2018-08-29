import VueTouch from 'vue-touch';
import AeDrop from './ae-drop.vue';

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
  Vue.component('ae-drop', AeDrop);
};

export default AeDrop;
