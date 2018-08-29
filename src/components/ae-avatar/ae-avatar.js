import { renderIcon } from '@download/blockies';

export default {
  name: 'ae-avatar',
  props: {
    /**
     * Address of the wallet for which
     * the avatar is going to generate
     * a blockies from.
     */
    address: {
      default: '0x0',
      type: String,
      required: true
    },

    /**
     * Set the avatar size, valid sizes:
     * `small`
     */
    size: {
      type: String,
      validator: function (value) {
        return ['small'].indexOf(value) !== -1;
      }
    }
  },

  /**
   * TODO: ae-avatar canvas size: Canvas needs to be rendered depending on user selected size
   * @return {HTMLCanvasElement}
   */
  mounted: function () {
    return renderIcon({ seed: this.address }, this.$refs.blockies);
  }
};
