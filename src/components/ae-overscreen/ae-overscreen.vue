<template>
    <div class="ae-overscreen" :class="{ shadow, [align]: Boolean(align) }">
      <slot />
    </div>
</template>
<script>
export default {
  name: 'ae-overscreen',
  props: {
    /**
     * Applies a linear shadow gradient to the overscreen
     */
    shadow: Boolean,

    /**
     * Align the elements either left or right, default alignment is center.
     * Available values are: `left, right`
     */
    align: {
      type: String,
      validator: value => [
        'left',
        'right',
      ].includes(value),
      default: 'center',
    },
  },
};
</script>
<style lang="scss" scoped>
  @import '../../styles/globals';

  .ae-overscreen {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: rem(20px) rem(32px);
    z-index: $stack-infinite;
  }

  .ae-overscreen.left {
    justify-content: flex-start;
  }

  .ae-overscreen.right {
    justify-content: flex-end;
  }

  .ae-overscreen.shadow {
    background: rgb(237,243,247);
    background: linear-gradient(0deg, rgba(237,243,247,1) 40%, rgba(237,243,247,0) 95%);
  }
</style>
