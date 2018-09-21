import VueTouch from 'vue-touch';
import AeFlip from './ae-flip.vue';

export const install = function (Vue) {
  Vue.use(VueTouch);
  Vue.component('ae-flip', AeFlip);
};

export default AeFlip;
