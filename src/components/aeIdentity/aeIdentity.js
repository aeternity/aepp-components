import aeIdentityLight from '../aeIdentityLight/aeIdentityLight.vue'
import aeIdentityBackground from '../aeIdentityBackground/aeIdentityBackground.vue'
import helperMixin from './../../mixins/helper'

/**
 * Displays an Identity with an avatar blockie, the address and an amount of ether
 */
export default {
  name: 'ae-identity',
  components: { aeIdentityLight, aeIdentityBackground },
  props: {
    /**
    * An object representing a identity. Must have a adress string a tokenBalance and a balance BigNumber (bn.js)
    */
    identity: {
      type: Object
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
