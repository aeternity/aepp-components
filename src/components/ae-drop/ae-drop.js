/**
 * Importing Libraries
 */
import { directive as clickaway } from 'vue-clickaway'

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
   */
  data: function () {
    return { active: false }
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

  methods: {
    /**
     * Activate Drop
     */
    activate: function () {
      this.active = true
    },

    /**
     * Deactivate Drop
     */
    deactivate: function () {
      this.active = false
    }
  }
}
