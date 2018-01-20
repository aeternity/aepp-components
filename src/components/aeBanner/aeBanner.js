export default {
  name: 'ae-banner',
  computed: {
    hasRightItem () {
      return !!this.$slots.right
    }
  }
}
