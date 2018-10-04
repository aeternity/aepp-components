<template>
  <canvas
    :class="['ae-avatar', size]"
    ref="blockie"
  />
</template>

<script>
import { renderIcon } from '@download/blockies';

/**
 * Displays the representation of an aeternity address as an avatar
 * @see https://npmjs.com/package/@download/blockies
 */
export default {
  name: 'ae-avatar',
  props: {
    /**
     * Address of the wallet for which the avatar is going to generate a blockies from.
     */
    address: {
      type: String,
      required: true,
    },
    /**
     * Set the avatar size, valid sizes: `small`
     */
    size: {
      type: String,
      validator: value => ['small'].includes(value),
    },
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

.ae-avatar {
  width: 32px;
  height: 32px;
  display: inline-block;
  box-shadow: 0 0 8px $color-shadow-alpha-15;
  border-radius: 50%;

  &.small {
    width: 20px;
    height: 20px;
  }
}
</style>
