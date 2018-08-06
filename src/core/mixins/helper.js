/**
 * Importing Libraries
 */
import unit from 'ethjs-unit'
import numeral from 'numeral'

export default {
  methods: {
    forwardEvent (event) {
      this.$emit(event.type, event)
    },
    readableToken (balance) {
      return numeral().format('0,0.[000]')
    },
    readableEther (balance) {
      return numeral(unit.fromWei(balance.toString(10), 'ether')).format('0,0.[000]')
    }
  }
}
