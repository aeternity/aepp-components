import aeIdentityAvatar from './../aeIdentityAvatar/aeIdentityAvatar.vue'
import helperMixin from '@source/core/mixins/helper'
import BN from 'bn.js'
import unit from 'ethjs-unit'
import numeral from 'numeral'

/**
 * Displays an Identity with an avatar blockie, the address and an amount of ether
 */
export default {
  name: 'ae-identity-light',
  components: { aeIdentityAvatar },
  props: {
    /**
     * An identity name
     */
    name: {
      type: String,
      default: ''
    },
    /**
     * An identity address
     */
    address: {
      type: String,
      default: '0x0'
    },
    /**
     * An identity balance in Aeternity tokens as BN instance
     */
    tokenBalance: {
      type: Object,
      default: () => new BN('0', 10)
    },
    /**
     * An identity balance in Ether as BN instance
     */
    balance: {
      type: Object,
      default: () => new BN('0', 10)
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    invert: {
      type: Boolean,
      default: false
    }
  },
  mixins: [
    helperMixin
  ],
  computed: {
    classObject () {
      return [
        'ae-identity-light',
        this.collapsedModifier,
        this.invert ? '_invert' : ''
      ]
    },
    chunkAddress () {
      const chunks = this.address.match(/.{1,7}/g)
      return [chunks.slice(0, 3), chunks.slice(3)]
    },
    collapsedModifier () {
      return this.collapsed ? '_collapsed' : ''
    }
  },
  filters: {
    readableToken: balance =>
      numeral(unit.fromWei(balance.toString(10), 'ether')).format('0,0.[000]'),
    shorten: value => value.substr(0, 8)
  }
}
