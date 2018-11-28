<template>
  <transition>
    <div class="ae-backdrop">
      <slot />
    </div>
  </transition>
</template>
<script>
/**
 * Backdrop component, applies a hover
 * on all other elements before it and
 * brings up forward the child element.
 */
export default {
  name: 'ae-backdrop',
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/animations';
@import '../../styles/variables/colors';

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
  z-index: 1000;

  &.v-enter-active, &.v-leave-active {
    transition: opacity ease-in-out $base-transition-time;
  }

  &.v-enter, &.v-leave-to {
    opacity: 0;
  }
}
</style>
