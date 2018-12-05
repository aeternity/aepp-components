/**
 * @mixin
 */
export default {
  methods: {
    /**
     * This method help propagate events to
     * parents components in vue
     *
     * @public
     * @param {Event} event
     */
    propagateEvent(event) {
      /**
       * Propagates event upwards to
       * parent elements
       *
       * @event *
       * @type {Event}
       */
      this.$emit(event.type, event);
    },

    /**
     * This method help propagate event values to
     * parents components in vue.
     * Its useful when you have input children components
     * and want to use v-model in the parent component
     * @param {Event} event
     */
    propagateEventValue(event) {
      this.$emit(event.type, event.target.value);
    },
  },
};
