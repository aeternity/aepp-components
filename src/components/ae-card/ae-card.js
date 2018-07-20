/**
 * ae-card component
 */
export default {
  /**
   * Component Name
   */
  name: 'ae-card',

  /**
   * Component Props
   */
  props: {
    /**
     * Fill property changes the color state of the toolbar
     * select something between: `neutral, default, emphasis, alternative`
     */
    fill: String,

    /**
     * Aligns the items in the main container, available values:
     * `top, center, bottom`
     */
    align: {
      type: String,
      validator: function (value) {
        return [
          'top',
          'center',
          'bottom'
        ].indexOf(value) !== -1
      }
    }
  }
}
