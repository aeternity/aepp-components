<template>
  <canvas
    :class="['ae-identicon', { shadow }, size]"
    ref="blockie"
  />
</template>
<script>
import { renderIcon } from '@download/blockies';

/**
 * Displays the representation of an aeternity address as an identicon
 * @link https://npmjs.com/package/@download/blockies
 */
export default {
  name: 'ae-identicon',
  props: {
    /**
     * Address of the wallet for which the identicon is
     * going to generate a blockies from.
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
      renderIcon({ seed: this.address }, this.$refs.blockie);
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

  &.xl {
    height: 6rem;
  }

  &.base {
    height: 2rem;
  }

  &.s {
    height: 1.5rem;
  }

  &.xs {
    height: 1.25rem;
  }

  &.xxs {
    height: 0.875rem;
  }
}
</style>
