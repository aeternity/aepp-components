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
     * select something between: `primary, secondary, neutral, alternative`
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
@import '../../styles/globals/mixins';
@import '../../styles/variables/colors';
@import '../../styles/placeholders/typography';

.ae-toolbar {
  // Extend font-type
  @extend %face-uppercase-xs;

  // include border mixin
  @include border-radius-separate(0, 0, 4px, 4px);

  display: flex;
  flex-direction: row;
  height: 2rem;
  align-items: center;
  padding: 0 1rem;
  font-weight: 500;
  background: $color-neutral-positive-2;
  color: $color-neutral-negative-1;
}

.ae-toolbar.disabled {
  cursor: not-allowed;
  color: rgba($color-neutral-negative-1, 0.5);
}

.ae-toolbar.primary {
  background: $color-primary-negative-2;
  color: $color-white;
}

.ae-toolbar.secondary {
  background: $color-secondary-negative-2;
  color: $color-white;
}

.ae-toolbar.neutral {
  background: $color-neutral-minimum;
  color: $color-white;
}

.ae-toolbar.alternative {
  background: $color-alternative-negative-2;
  color: $color-white;
}

.ae-toolbar.primary,
.ae-toolbar.secondary,
.ae-toolbar.neutral,
.ae-toolbar.alternative {
  color: $color-white;
}

.ae-toolbar.primary.disabled,
.ae-toolbar.secondary.disabled,
.ae-toolbar.neutral.disabled,
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
