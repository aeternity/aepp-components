<template>
  <div class="ae-overscreen" :class="[align, { fixed, shadow }]">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'ae-overscreen',
  props: {
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
    },

    /**
     * Changes element position to `fixed`.
     *
     * The default `position: absolute;` will make the
     * element fit on top of its relative parent. Useful
     * in some cases.
     *
     * This property will change it to `position: fixed;`
     * will make the element position relative to the viewport
     * of the browser.
     */
    fixed: Boolean,

    /**
     * Applies a linear shadow gradient to the overscreen
     */
    shadow: Boolean,
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/colors';
@import '../../styles/globals/functions';

.ae-overscreen {
  display: flex;
  align-items: flex-end;
  justify-content: center;
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

  &.fixed {
    position: fixed;
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
