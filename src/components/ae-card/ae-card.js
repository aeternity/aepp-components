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
     * Fill property changes the color state
     * of the card select something between:
     * `neutral, default, emphasis, alternative`
     */
    fill: {
      type: String,
      validator: function (value) {
        return [
          'neutral',
          'default',
          'alternative',
          'emphasis'
        ].indexOf(value) !== 1;
      }
    },

    /**
     * Aligns the items in the main container,
     * available values: `top, center, bottom`
     */
    align: {
      type: String,
      validator: function (value) {
        return [
          'top',
          'center',
          'bottom'
        ].indexOf(value) !== -1;
      }
    }
  }
};
