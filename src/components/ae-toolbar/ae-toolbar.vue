<template>
  <div class="ae-toolbar" :class="{ [fill]: Boolean(fill), [align]: Boolean(align), disabled }">
    <!-- @slot Default slot / center positioned slot -->
    <slot />
  </div>
</template>
<script>
export default {
  name: 'ae-toolbar',
  props: {
    /**
     * Fill property changes the color state of the toolbar
     * select something between: `neutral, default, emphasis, alternative`
     */
    fill: String,

    /**
     * Arranges the flow of the buttons inside the toolbar.
     * Available options are: `left, center, right, justify`
     */
    align: String,

    /**
     * Is Active or Inactive
     */
    disabled: Boolean,
  },
};
</script>
<style lang="scss" scoped>
  @import '../../styles/globals';

  .ae-toolbar {
    // Extend font-type
    @extend %face-uppercase-xs;

    // include border mixin
    @include border-radius-separate(0, 0, 4px, 4px);

    display: flex;
    flex-direction: row;
    height: rem(32px);
    align-items: center;
    padding: 0 rem(16px);
    font-weight: 500;
    background: $color-neutral-positive-2;
    color: $color-neutral-negative-1;
  }

  .ae-toolbar.disabled {
    cursor: not-allowed;
    color: rgba($color-neutral-negative-1, 0.5);
  }

  .ae-toolbar.neutral {
    background: $color-neutral-minimum;
    color: $color-white;
  }

  .ae-toolbar.default {
    background: $color-default-negative-2;
    color: $color-white;
  }

  .ae-toolbar.emphasis {
    background: $color-emphasis-negative-2;
    color: $color-white;
  }

  .ae-toolbar.alternative {
    background: $color-alternative-negative-2;
    color: $color-white;
  }

  .ae-toolbar.neutral,
  .ae-toolbar.default,
  .ae-toolbar.emphasis,
  .ae-toolbar.alternative {
    color: $color-white;
  }

  .ae-toolbar.neutral.disabled,
  .ae-toolbar.default.disabled,
  .ae-toolbar.emphasis.disabled,
  .ae-toolbar.alternative.disabled {
    color: rgba($color-white, 0.5);
  }

  .ae-toolbar.left {
    justify-content: flex-start;
  }

  .ae-toolbar.center {
    justify-content: center;
  }

  .ae-toolbar.right {
    justify-content: flex-end;
  }

  .ae-toolbar.justify {
    justify-content: space-between;
  }
</style>
