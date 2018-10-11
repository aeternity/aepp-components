<template>
  <div :class="['ae-card', fill]">
    <slot />
    <ae-toolbar :fill="fill">
      <slot name="toolbar" />
    </ae-toolbar>
  </div>
</template>

<script>
import AeToolbar from '../ae-toolbar/ae-toolbar.vue';

export default {
  name: 'ae-card',
  components: { AeToolbar },
  props: {
    /**
     * Fill property changes the color state
     * of the card select something between:
     * `primary, secondary, neutral, alternative`
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
@import '../../styles/globals';

.ae-card {
  @extend %face-sans-base;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  background: $color-neutral-positive-3;
  color: $color-neutral;
  box-shadow: 0 0 16px $color-shadow-alpha-15;

  &.primary {
    background: $color-primary;
    color: $color-primary-negative-3;
  }

  &.secondary {
    background: $color-secondary;
    color: $color-secondary-negative-3;
  }

  &.neutral {
    background: $color-neutral-negative-3;
    color: $color-white;
  }

  &.alternative {
    background: $color-alternative;
    color: $color-alternative-negative-3;
  }

  .ae-toolbar {
    justify-content: space-between;
  }
}
</style>
