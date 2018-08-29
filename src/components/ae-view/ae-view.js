export default {
  name: 'ae-view',
  props: {
    /**
     * The layout and type of the ae-view,
     * available options: `base, frame`
     */
    face: {
      type: String,
      validator: function (value) {
        return [
          'base',
          'frame'
        ].indexOf(value) !== -1;
      }
    },

    /**
     * TODO: write doc
     */
    visible: Boolean
  }
};
