const aeDividerTypes = [
  'boring',
  'exciting',
  'dramatic'
];

export default {
  name: 'ae-divider',
  props: {
    /**
     * Type of divider, possible values: 'boring', 'exciting', 'dramatic'
     */
    type: {
      type: String,
      validator: (value) => aeDividerTypes.includes(value)
    }
  }
};
