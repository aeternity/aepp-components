const blockies = require('ethereum-blockies-png')
const unit = require('ethjs-unit')
const numeral = require('numeral')

export default {
  methods: {
    blockie (address) {
      return blockies.createDataURL({
        seed: address
      })
    },
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
