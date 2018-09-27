<template>
  <transition>
    <div class="ae-backdrop"
         :class="{ [fill]: Boolean(fill), [align]: Boolean(align) }">
      <slot />
    </div>
  </transition>
</template>
<script>
export default {
  name: 'ae-backdrop',
  props: {
    /**
     * Select the fill color of the backdrop, available values:
     * `primary, secondary, neutral, alternative`
     */
    fill: {
      type: String,
      validator(value) {
        return [
          'primary',
          'secondary',
          'neutral',
          'alternative',
        ].indexOf(value) !== -1;
      },
    },

    /**
     * Align content inside the backdrop, available values are:
     * `top, bottom, left, right`
     */
    align: {
      type: String,
      validator(value) {
        return [
          'top',
          'bottom',
        ].indexOf(value) !== -1;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
  @import '../../styles/globals';

  .ae-backdrop {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba($color-neutral-positive-2, 0.5);
    overflow-x: hidden;
    overflow-y: auto;
    z-index: $stack-5;

    /// TODO: Styles need update
    /// The styles here need update with the style-guide
    /// these are not the current styles representing the backdrop
    &.primary {
      background: rgba($color-primary, 0.5);
    }
    &.secondary {
      background: rgba($color-secondary, 0.5);
    }
    &.neutral {
      background: rgba($color-neutral-minimum, 0.5);
    }
    &.alternative {
      background: rgba($color-alternative, 0.5);
    }

    &.v-enter-active, &.v-leave-active {
      transition: opacity ease-in-out $base-transition-time;
    }

    &.v-enter, &.v-leave-to {
      opacity: 0;
    }
  }

  .ae-backdrop.top {
    align-items: center;
    justify-content: flex-start;
  }

  .ae-backdrop.bottom {
    align-items: center;
    justify-content: flex-end;
  }
</style>
