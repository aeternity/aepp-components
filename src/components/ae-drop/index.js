import VueTouch from 'vue-touch';
import AeDrop from './ae-drop.vue';

export const install = function (Vue) {
  Vue.use(VueTouch);
  Vue.component('ae-drop', AeDrop);
};

export default AeDrop;
