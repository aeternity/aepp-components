import aeIdentityLight from '../aeIdentityLight/aeIdentityLight.vue'
import aeIdentityBackground from '../aeIdentityBackground/aeIdentityBackground.vue'
import helperMixin from '@source/core/mixins/helper'

/**
 * Displays an Identity with an avatar blockie, the address and an amount of ether
 */
export default {
  name: 'ae-identity',
  components: { aeIdentityLight, aeIdentityBackground },
  props: {
    /**
     * An identity name
     */
    name: {
      type: String,
      required: false
    },
    /**
     * An identity address
     */
    address: {
      type: String,
      required: false
    },
    /**
     * An identity balance in Aeternity tokens as BN instance
     */
    tokenBalance: {
      type: Object,
      required: false
    },
    /**
     * An identity balance in Ether as BN instance
     */
    balance: {
      type: Object,
      required: false
    },
    /**
    * Is this an identity activated/selected (magenta) or not (purple)?
    */
    active: {
      type: Boolean,
      default: false
    },
    /**
    * Is this the full size identity card or the collapsed one for displaying at the bottom of the screen?
    */
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  mixins: [
    helperMixin
  ],
  computed: {
    backgroundType () {
      return this.active ? 'dramatic' : 'exciting'
    }
  }
}
