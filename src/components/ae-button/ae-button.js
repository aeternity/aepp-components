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
  name: 'ae-button',

  /**
   * Component Mixins
   */
  mixins: [ events ],

  /**
   * Component Props
   */
  props: {
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
          'secondary',
          'icon',
          'toolbar'
        ].indexOf(value) !== 1
      }
    },

    /**
     * sets the size of the button, valid ranges are:
     * `xsmall, small, large, xlarge`
     */
    size: {
      type: String,
      validator: function (value) {
        return [
          'xsmall',
          'small',
          'large',
          'xlarge'
        ].indexOf(value) !== 1
      }
    },

    /**
     * Extend the button full width
     */
    extend: Boolean
  }
}
