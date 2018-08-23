/**
 * Export Mixin
 */
export default {
  /**
   * Component Methods
   */
  methods: {
    /**
     * This method help propagate events to
     * parents components in vue
     */
    propagate: function (event) {
      return this.$emit(event.type, event)
    }
  }
}
