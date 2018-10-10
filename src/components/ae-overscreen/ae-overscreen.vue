<template>
  <div class="ae-overscreen" :class="[align, { shadow }]">
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
        'center',
        'right',
      ].includes(value),
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/typography';
@import '../../styles/variables/colors';
@import '../../styles/globals/functions';

.ae-overscreen {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  /**
   * TODO: Change this to position fixed, element goes to viewport, find a way to replicate without viewport
   */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem 2rem;
  z-index: 5000;

  &.left {
    justify-content: flex-start;
  }

  &.right {
    justify-content: flex-end;
  }

  &.shadow {
    background: linear-gradient(
        0deg,
        rgba($color-neutral-positive-2, 1) 40%,
        rgba($color-neutral-positive-2, 0) 95%
    );
  }
}
</style>
