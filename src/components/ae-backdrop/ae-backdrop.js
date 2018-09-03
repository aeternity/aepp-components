export default {
  name: 'ae-backdrop',
  props: {
    /**
     * Select the fill color of the backdrop
     */
    fill: {
      type: String,
      validator: function (value) {
        return [
          'neutral',
          'default',
          'alternative',
          'emphasis'
        ].indexOf(value) !== -1;
      }
    },

    /**
     * Align content inside the backdrop, available values are:
     * `top, bottom, left, right`
     */
    align: {
      type: String,
      validator: function (value) {
        return [
          'top',
          'bottom'
        ].indexOf(value) !== -1;
      }
    }
  }
};
