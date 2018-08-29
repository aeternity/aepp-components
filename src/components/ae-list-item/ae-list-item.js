export default {
  name: 'ae-list-item',
  props: {
    /**
     * Fill property changes the color of the borders.
     * Select something between: `neutral, default, emphasis, alternative`
     * fallback: `neutral`
     */
    fill: {
      type: String,
      default: 'neutral',
      validator: function (value) {
        return [
          'neutral',
          'default',
          'alternative',
          'emphasis'
        ].indexOf(value) !== 1;
      }
    }
  }
};
