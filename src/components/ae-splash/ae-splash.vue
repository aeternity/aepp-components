<template>
  <div class="ae-splash" :class="{ [fill]: Boolean(fill) }">
    <!-- @slot Default slot -->
    <slot />
  </div>
</template>
<script>
export default {
  name: 'ae-splash',
  props: {
    /**
     * Fill property changes the color state of the splash screen
     * select something between: `primary, secondary, neutral, alternative`
     */
    fill: {
      type: String,
      validator: value => [
        'primary',
        'secondary',
        'neutral',
        'alternative',
      ].includes(value),
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/variables/colors";

.ae-splash {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  &.primary {
    background: $color-primary;
  }
  &.secondary {
    background: $color-secondary;
  }
  &.neutral {
    background: $color-neutral;
  }
  &.alternative {
    background: $color-alternative;
  }
}
</style>
