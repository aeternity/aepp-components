/**
 * ae-toolbar component
 */
export default {
  /**
   * Component Name
   */
  name: 'ae-toolbar',

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
     * Arranges the flow of the buttons inside the toolbar.
     * Available options are: `left, center, right, justify`
     */
    align: String,

    /**
     * Is Active or Inactive
     */
    disabled: Boolean
  }
};
