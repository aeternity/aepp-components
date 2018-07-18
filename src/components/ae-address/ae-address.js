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
    },

    /**
     * Set the grid gab between elements, either px's or rem's
     */
    gap: String
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
