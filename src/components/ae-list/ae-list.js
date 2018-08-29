export default {
  name: 'ae-list',
  props: {
    /**
     * Face applies a shape/form to the current
     * list container, available options: `primary`
     */
    face: {
      type: String,
      validator: function (value) {
        return ['primary'].indexOf(value) !== 1;
      }
    }
  }
};
