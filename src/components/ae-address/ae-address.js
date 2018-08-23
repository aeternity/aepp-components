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
     * ae address value to be displayed
     */
    value: {
      type: String,
      required: true
    },

    /**
     * Set the length of the address
     * valid properties: `medium, short`
     */
    length: String,

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
