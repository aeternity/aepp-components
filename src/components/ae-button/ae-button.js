/**
 * ae-text component
 */
export default {
  /**
   * Component Name
   */
  name: 'ae-button',

  /**
   * Component Props
   */
  props: {
    /**
     * Fill property changes the color state of the toolbar
     * select something between: `['neutral', 'default', 'emphasis', 'alternative]`
     */
    fill: String,

    /**
     * Face applies a shape/form to
     * the current button
     */
    face: String,

    /**
     * sets the size of the button, valid ranges are:
     * `xsmall, small, large, xlarge`
     */
    size: String,

    /**
     * Disabled state of the element
     */
    disabled: Boolean
  }
}
