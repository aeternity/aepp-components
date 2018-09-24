/**
 * Export Mixin
 * @return {{}}
 */
export default {
  methods: {
    /**
     * This method help propagate events to
     * parents components in vue
     * @param {Event} event
     * @return {*|default.methods}
     */
    propagate(event) {
      return this.$emit(event.type, event);
    },
  },
};
