/**
 * ae-card component
 */
export default {
  /**
   * Component Name
   */
  name: 'ae-card',

  /**
   * Component Props
   */
  props: {
    /**
     * Fill property changes the color state of the toolbar
     * select something between: `neutral, default, emphasis, alternative`
     */
    fill: String,

    /**
     * Address of the account
     */
    address: {
      type: String,
      default: ''
    }
  },

  /**
   * Component Methods
   */
  methods: {}
}
