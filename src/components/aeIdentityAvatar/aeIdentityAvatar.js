import { renderIcon } from '@download/blockies';

/**
 * Displays the representation of an ethereum address as an avatar
 * @see https://github.com/ethereum/blockies
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
  watch: {
    address () {
      this.renderBlockie();
    }
  },
  mounted () {
    this.renderBlockie();
  },
  methods: {
    renderBlockie () {
      renderIcon({ seed: this.address }, this.$refs.blockie);
    }
  }
};
