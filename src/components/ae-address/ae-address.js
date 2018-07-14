/**
 * ae-address component
 */
export default {
  /**
   * Component Name
   */
  name: 'ae-address',

  /**
   * Component Props
   */
  props: {
    /**
     * Address Value
     */
    value: String,

    /**
     * Set the length
     * of the address
     */
    length: {
      type: String,
      default: 'full'
    }
  },

  /**
   * Computed Properties
   */
  computed: {
    /**
     * This will chunk the address
     * into values of 3 and return array
     */
    chunked: function () {
      return this.value.match(/.{1,3}/g)
    }
  }
}
