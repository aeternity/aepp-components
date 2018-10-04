<template>
  <div class="ae-avatar" :class="{ [size]: Boolean(size) }">
    <canvas ref="blockies" />
  </div>
</template>
<script>
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
      required: true,
    },

    /**
     * Set the avatar size, valid sizes:
     * `small`
     */
    size: {
      type: String,
      validator: value => ['small'].includes(value),
    },
  },

  /**
   * TODO: ae-avatar canvas size: Canvas needs to be rendered depending on user selected size
   * @return {HTMLCanvasElement}
   */
  mounted() {
    return renderIcon({ seed: this.address }, this.$refs.blockies);
  },
};
</script>
<style lang="scss" scoped>
  @import '../../styles/globals';

  .ae-avatar {
    @include size(32px);

    position: relative;
    display: inline-block;
    overflow: hidden;
    box-shadow: 0 0 8px $color-shadow-alpha-15;
    border-radius: 50%;

    > img {
      @include center-both;

      max-width: 100%;
    }
  }

  .ae-avatar.small {
    @include size(20px);
  }
</style>
