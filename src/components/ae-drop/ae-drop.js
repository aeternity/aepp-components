/**
 * Importing Libraries
 */
import { directive as clickaway } from 'vue-clickaway';

/**
 * ae-drop component
 */
export default {
  /**
   * Component Name
   */
  name: 'ae-drop',

  /**
   * Component Directives
   */
  directives: { clickaway },

  /**
   * Component Data
   * @return {Object}
   */
  data: function () {
    return { active: false };
  },

  /**
   * Component Props
   */
  props: {
    /**
     * Direction of the dropped menu
     * `left, right`
     */
    direction: String
  },

  /**
   * Component Methods
   */
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
