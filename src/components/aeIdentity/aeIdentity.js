import aeIdentityAvatar from './../aeIdentityAvatar/aeIdentityAvatar.vue'
import helperMixin from './../../mixins/helper'
import BN from 'bn.js'

/**
 * Displays an Identity with an avatar blockie, the address and an amount of ether
 */
export default {
  name: 'ae-identity',
  components: {
    'ae-identity-avatar': aeIdentityAvatar
  },
  data: function () {
    return {}
  },
  props: {
    /**
    * An object representing a identity. Must have a adress string and a balance BigNumber (bn.js)
    */
    identity: {
      type: Object,
      default: {
        address: '0x0',
        balance: new BN('0', 10)
      }
    },
    /**
    * Is this an identity activated/selected (magenta) or not (grey)?
    */
    active: {
      type: Boolean,
      default: true
    },
    /**
    * Is this the full size identity card or the collapsed one for displaying at the bottom of the screen?
    */
    collapsed: {
      type: Boolean,
      default: false
    },
    /**
    * Whats the size of the component? "small" or "big"
    * @deprecated use collapsed instead
    */
    size: {
      type: String,
      default: 'small',
      validator: function (size) {
        return size === 'small' || size === 'big'
      }
    }
  },
  mixins: [
    helperMixin
  ],
  computed: {
    amount () {
      return this.identity ? helperMixin.methods.readableEther(this.identity.balance) : 0
    },
    address () {
      return this.identity.address
    },
    shortAddress () {
      return this.identity.address.substr(0, 6)
    },
    classObject: function () {
      let classes = {
        'ae-identity': true,
        'collapsed': this.collapsed,
        '_active_yes': this.active,
        '_active_no': !this.active
      }
      classes['size_' + this.size] = true
      return classes
    },
    hasSlot () {
      return this.$slots.default
    }
  }
}
