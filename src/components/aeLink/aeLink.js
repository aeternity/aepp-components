/**
 * Displays an link using `<a>` or `<router-link>` depending on
 * passed url and availability of router-link
 */
export default {
  name: 'ae-link',
  props: {
    /**
     * Path to go to when clicked
     */
    to: { type: [String, Object] }
  },
  computed: {
    isLinkOnSameHost () {
      return (
        typeof this.to === 'object' ||
        new URL(this.to, window.location).host === window.location.host
      )
    },
    useRouterLink () {
      return this.$options.components['router-link'] && this.isLinkOnSameHost
    }
  }
}
