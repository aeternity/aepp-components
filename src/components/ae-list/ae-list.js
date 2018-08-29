export default {
  name: 'ae-list',
  props: {
    /**
     * Space between each item, possible values: 'normal', 'tight'
     */
    packing: {
      type: String,
      validator: (value) => {
        return [
          'normal',
          'tight'
        ].indexOf(value) !== -1;
      },
      default: 'normal'
    }
  }
};
