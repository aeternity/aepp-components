<template>
  <canvas
    :class="['ae-identicon', { shadow }]"
    ref="blockie"
  />
</template>

<script>
import { renderIcon } from '@download/blockies';

/**
 * Displays the representation of an aeternity address as an identicon
 * @see https://npmjs.com/package/@download/blockies
 */
export default {
  name: 'ae-identicon',
  props: {
    /**
     * Address of the wallet for which the identicon is going to generate a blockies from.
     */
    address: {
      type: String,
      required: true,
    },
    /**
     * Set the identicon size, valid sizes: `xl, base, s, xs, xxs`.
     * The default value us: `base`
     */
    size: {
      type: String,
      validator: value => [
        'xl',
        'base',
        's',
        'xs',
        'xxs',
      ].includes(value),
      default: 'base',
    },
    /**
     * Apply shadow to the identicon
     */
    shadow: Boolean,
  },
  watch: {
    address() {
      this.render();
    },
  },
  mounted() {
    this.render();
  },
  methods: {
    render() {
      renderIcon({
        seed: this.address,
        size: 16,
        scale: ({
          xl: 6,
          base: 2,
          s: 1.5,
          xs: 1.25,
          xxs: 0.875,
        })[this.size],
      }, this.$refs.blockie);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/variables/colors';

.ae-identicon {
  display: inline-block;
  border-radius: 50%;

  &.shadow {
    box-shadow: 0 0 8px $color-shadow-alpha-15;
  }
}
</style>
