import aeIdentityAvatar from './../aeIdentityAvatar/aeIdentityAvatar.vue'
import helperMixin from './../../mixins/helper'
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
    * An object representing a identity. Must have a adress string a tokenBalance and a balance BigNumber (bn.js)
    */
    identity: {
      type: Object,
      default: () => ({
        address: '0x0',
        tokenBalance: new BN('0', 10),
        balance: new BN('0', 10)
      })
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
      const chunks = this.identity.address.match(/.{1,7}/g)
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
