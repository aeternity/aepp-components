/**
 * Displays an Æ-Amount with buttons to increase and decrease the value
 */
export default {
  name: 'ae-amount',
  props: {
    /**
    * Does this element span the full width?
    */
    isFullWidth: {
      type: Boolean,
      default: true,
    },
    /**
    * The amount of Æ to display
    */
    value: {
      type: Number,
      default: 0,
    },
  },
};
