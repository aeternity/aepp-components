import AeValidatedTextInput from '../aeValidatedTextInput/aeValidatedTextInput.vue'

function contentValid (address) {
  return typeof address === 'string' &&
   (
     address === '' ||
     address === '0' ||
     address === '0x' ||
     /^0x[0-9a-fA-F]{0,40}$/.test(address)
   )
}

function _addressValid (address) {
  return contentValid(address) && address.length === 42
}

function validate (validator, value) {
  const valid = validator(value)
  return valid ? undefined : 'INVALID_ADDR'
}

export default {
  name: 'ae-address-input',
  data () {
    return {
      address: this.value
    }
  },
  components: [
    AeValidatedTextInput
  ],
  computed: {
    addressValid () {
      return _addressValid(this.address)
    },
    externalLink () {
      if (!this.addressValid) { return '' }
      return `https://kovan.etherscan.io/address/${this.address}`
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: 'Invalid address'
    }
  },
  methods: {
    validateOnBlur: validate.bind(undefined, _addressValid),
    validateOnInput: validate.bind(undefined, contentValid),
    onInput (value) {
      this.address = value
      this.$emit('input', value)
    },
    onClearRequest () {
      this.address = ''
      this.$emit('input', '')
    }
  }
}
