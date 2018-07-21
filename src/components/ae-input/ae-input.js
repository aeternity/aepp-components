/**
 * Importing Libraries
 */
import { events } from '@source/mixins'

/**
 * ae-button component
 */
export default {
  /**
   * Component Name
   */
  name: 'ae-input',

  /**
   * Component Mixins
   */
  mixins: [ events ],

  /**
   * Component Data
   */
  data: function () {
    return { focus: false }
  },

  /**
   * Component Props
   */
  props: {
    /**
     * ID of the component/input
     */
    id: String,

    /**
     * Temporary text appearing in the input box
     */
    placeholder: String,

    /**
     * Property to define label of input, used to set
     * label
     */
    label: String,

    /**
     * Fill property changes the color state of the toolbar
     * select something between: `['neutral', 'default', 'emphasis', 'alternative]`
     */
    fill: {
      type: String,
      validator: function (value) {
        return [
          'neutral',
          'default',
          'emphasis',
          'alternative'
        ].indexOf(value) !== 1
      }
    },

    /**
     * Face applies a shape/form to
     * the current button, available options:
     * `primary, secondary, icon, toolbar`
     */
    face: {
      type: String,
      validator: function (value) {
        return [
          'primary',
          'secondary'
        ].indexOf(value) !== 1
      }
    },

    /**
     * Is there an error on input?
     */
    error: Boolean,

    /**
     * Extend the button full width
     */
    extend: Boolean
  }
}
