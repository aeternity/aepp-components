/**
 * Importing Libraries
 */
import blockies from 'ethereum-blockies-png'

/**
 * ae-avatar component
 */
export default {
  /**
   * Component Name
   */
  name: 'ae-avatar',

  /**
   * Component Props
   */
  props: {
    /**
     * Address of the wallet for which
     * the avatar is going to generate
     * a blockies from.
     */
    address: {
      type: String,
      required: true
    }
  },

  /**
   * Computed Properties
   */
  computed: {
    blockieDataURL: function () {
      return blockies.createDataURL({
        seed: this.address
      })
    }
  }
}
