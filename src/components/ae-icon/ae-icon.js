/**
 * Importing Fonts
 */
import './icons/icons.font'

/**
 * ae-icon component
 */
export default {
  /**
   * Component Name
   */
  name: 'ae-icon',

  /**
   * Component Properties
   */
  props: {
    /**
     * Name of the icon, please check list of icons in
     * the ./icons folder inside the component
     */
    name: String,

    /**
     * Fill property changes the color state of the icon
     * select something between: `neutral, default, emphasis, alternative`
     */
    fill: {
      type: String,
      validator: function (value) {
        return [
          'neutral',
          'default',
          'alternative',
          'emphasis'
        ].indexOf(value) !== 1
      }
    },

    /**
     * Face applies a shape/form to
     * the current icon, available options:
     * `round`
     */
    face: {
      type: String,
      validator: function (value) {
        return ['round'].indexOf(value) !== 1
      }
    },

    /**
     * Set manually the size of the font icon
     */
    size: String
  }
}
