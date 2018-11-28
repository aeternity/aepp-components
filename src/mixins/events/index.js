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
    propagate(event) {
      /**
       * Propagates event upwards to
       * parent elements
       *
       * @event *
       * @type {Event}
       */
      this.$emit(event.type, event);
    },
  },
};
