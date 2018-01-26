import aeIdentityAvatar from './../aeIdentityAvatar/aeIdentityAvatar.vue'
import aeDivider from './../aeDivider/aeDivider.vue'
import aeButton from './../aeButton/aeButton.vue'
import helperMixin from './../../mixins/helper'
import BN from 'bn.js'

/**
 * Displays an Identity with an avatar blockie, the address and an amount of ether
 */
export default {
  name: 'ae-identity',
  components: {
    'ae-identity-avatar': aeIdentityAvatar,
    'ae-divider': aeDivider,
    'ae-button': aeButton
  },
  data: function () {
    return {}
  },
  props: {
    /**
    * An object representing a identity. Must have a adress string a tokenBalance and a balance BigNumber (bn.js)
    */
    identity: {
      type: Object,
      default: {
        address: '0x0',
        tokenBalance: new BN('0', 10),
        balance: new BN('0', 10)
      }
    },
    showButtons: {
      type: Boolean,
      default: false
    },
    /**
    * Is this an identity activated/selected (magenta) or not (grey)?
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
  methods: {
    /**
     * Make card active event
     *
     * @event activate
     * @type {undefined}
     */
    toggleActiveIdentityCard () {
      this.$emit('toggleActive')
    },
    /**
     * Edit current Identity card
     *
     * @event activate
     * @type {undefined}
     */
    editIdentityCardAddress () {
      this.$emit('edit')
    },
    /**
     * Copy address
     *
     * @event copyAddress
     * @type {undefined}
     */
    copyIdentityCardAddress () {
      try {
        this.copyToClipboard(this.address)
        this.$emit('copyAddress')
      } catch (err) {
        console.log('err', err)
      }
    },
    copyToClipboard (val) {
      var dummy = document.createElement('input')
      dummy.style.displya = 'none'
      document.body.appendChild(dummy)
      dummy.setAttribute('id', 'dummy_id')
      document.getElementById('dummy_id').value = val
      dummy.select()
      document.execCommand('copy')
      document.body.removeChild(dummy)
    }
  },
  computed: {
    amount () {
      return this.identity ? helperMixin.methods.readableEther(this.identity.balance) : 0
    },
    tokenAmount () {
      return this.identity && this.identity.tokenBalance ? helperMixin.methods.readableToken(this.identity.tokenBalance) : '0'
    },
    address () {
      return this.identity.address
    },
    shortAddress () {
      return this.identity.address.substr(0, 6)
    },
    chunkAddress () {
      return this.identity.address.match(/.{1,7}/g)
    },
    classObject () {
      return {
        'ae-identity': true,
        'collapsed': this.collapsed,
        'active': this.active,
        'buttons': this.hasSlot
      }
    },
    hasSlot () {
      return this.$slots.default
    }
  }
}
