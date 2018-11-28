<template>
  <div class="ae-button-group" :class="{ shadow }">
    <slot />
  </div>
</template>
<script>
/**
 * ae-button-group groups ae-button component
 * with a unified style.
 */
export default {
  name: 'ae-button-group',
  props: {
    /**
     * Apply shadow to the button group, applicable only for round buttons
     * shadow has a 32px roundness
     */
    shadow: Boolean,
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/colors';

.ae-button-group {
  display: flex;
  border-radius: 32px;
  overflow: hidden;

  &.shadow {
    box-shadow: 0 0 16px $color-shadow-alpha-15;
  }

  /deep/ .ae-button {
    border-radius: 0;
    border: none;
    box-shadow: none;
    flex-grow: 1;

    &.primary {
      border-color: $color-primary-negative-1;
    }

    &.secondary {
      border-color: $color-secondary-negative-1;
    }

    &.neutral {
      border-color: $color-neutral-positive-2;
    }

    &.alternative {
      border-color: $color-alternative-negative-1;
    }
  }
}
</style>
