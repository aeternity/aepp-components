/**
 * Importing Libraries
 */
import { renderIcon } from '@download/blockies'

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
      default: '0x0',
      type: String,
      required: true
    },

    /**
     * Set the avatar size, valid sizes:
     * `small`
     */
    size: {
      type: String,
      validator: function (value) {
        return ['small'].indexOf(value) !== -1
      }
    }
  },

  /**
   * TODO: Needs size fix
   */
  mounted: function () {
    return renderIcon({ seed: this.address }, this.$refs.blockies)
  }
}
