export default {
  name: 'ae-banner',
  props: {
    /*
     * Toggle visibility of banner
     */
    'show': {
      type: Boolean,
      default: true
    }
  },
  computed: {
    hasRightItem () {
      return !!this.$slots.right
    }
  }
}
