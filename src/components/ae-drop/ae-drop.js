import { directive as clickaway } from 'vue-clickaway';

export default {
  name: 'ae-drop',
  directives: { clickaway },
  data: function () {
    return { active: false };
  },
  props: {
    /**
     * Direction of the dropped menu
     * `left, right`
     */
    direction: String
  },
  methods: {
    /**
     * Activate Drop
     */
    activate: function () {
      this.active = true;
    },

    /**
     * Deactivate Drop
     */
    deactivate: function () {
      this.active = false;
    }
  }
};
