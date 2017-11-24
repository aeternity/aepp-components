import AeIdentityAvatar from '../aeIdentityAvatar/aeIdentityAvatar.vue'
function startAndEnd (str, start = 6, end = 6) {
  return str.substr(0, start + 2) +
    '…' +
    str.substr(str.length - end, str.length)
}
function addressValid (address) {
  return /^0x[0-9a-fA-F]{40}$/i.test(address)
}

/**
 * Displays an Ethereum Address and an optional blockie avatar
 */
export default {
  name: 'ae-address',
  props: {
    /**
     * The address to display. The validity is checked by a regex
     */
    'address': {
      type: String,
      required: true,
      validator: function (address) {
        return addressValid(address)
      }
    },

    /**
     * Whether to show an avatar in front of the address
     */
    'show-avatar': {
      type: Boolean,
      default: false
    },

    /**
     * Show the 'full' address or 'compact' (show first 6 and last 6 characters)
     */
    'size': {
      type: String,
      default: 'full'
    }
  },
  computed: {
    cssClass () {
      return {
        ['size-' + this.size]: true
      }
    },
    displayAddress () {
      if (this.size === 'full') { return this.address }
      return startAndEnd(this.address)
    }
  },
  components: {
    AeIdentityAvatar
  }
}
