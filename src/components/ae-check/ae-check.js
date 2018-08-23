/**
 * ae-check component
 */
export default {
  /**
   * Component Name
   */
  name: 'ae-check',

  /**
   * Component Props
   */
  props: {
    /**
     * ID of the component/input
     */
    id: String,

    /**
     * Name of component
     */
    name: String,

    /**
     * value of component
     */
    value: Boolean,

    /**
     * Define the type of the input
     */
    type: {
      type: String,
      default: 'checkbox'
    },

    /**
     * Align the content slot:
     * `left`
     */
    align: {
      type: String,
      validator: function (value) {
        return [
          'left'
        ].indexOf(value) !== 1
      }
    },

    /**
     * Extend the check component full width
     */
    extend: Boolean,

    /**
     * Puts the component in disabled state
     */
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
