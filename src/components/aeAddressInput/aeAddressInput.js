function addressValid (address) {
  return /^0x[0-9a-fA-F]{40}$/i.test(address)
}
export default {
  name: 'ae-address-input',
  data () {
    return {
      address: ''
    }
  },
  computed: {
    externalLink () {
      if (!this.addressValid) { return '' }
      return `https://kovan.etherscan.io/address/${this.address}`
    },
    addressValid () {
      return addressValid(this.address)
    }
  },
  watch: {
    address (newVal) {
      this.$emit('input', newVal)
    }
  },
  props: [
    'value'
  ],
  mounted () {
    this.address = this.value
  }
}
