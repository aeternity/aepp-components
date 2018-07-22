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
     * Fill property changes the color state of the button
     * select something between: `neutral, default, emphasis, alternative`
     */
    fill: {
      type: String,
      validator: function (value) {
        return [
          'primary'
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
     * Direction of the text
     */
    direction: {
      type: String,
      validator: function (value) {
        return [
          'left',
          'right'
        ].indexOf(value) !== 1
      }
    }
  }
}
