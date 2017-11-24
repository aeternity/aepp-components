const blockies = require('ethereum-blockies-png')

/**
 * Displays the representation of an ethereum address as an avatar
 * @see https://github.com/petejkim/ethereum-blockies-png
 */
export default {
  name: 'ae-identity-avatar',
  props: {
    /**
     * The ethereum address to display as a blockie avatar
     */
    address: {
      type: String,
      default: '0x0'
    }
  },
  methods: {
    blockie (address) {
      return blockies.createDataURL({
        seed: address
      })
    }
  },
  computed: {
    style () {
      if (this.address) {
        return {
          backgroundImage: `url('${this.blockie(this.address)}')`
        }
      }
      return {
        backgroundColor: '#d1d1d1'
      }
    }
  }
}
