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
    propagate: function (event) {
      return this.$emit(event.type, event);
    }
  }
};
