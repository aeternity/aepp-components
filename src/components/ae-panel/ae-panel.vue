<template>
  <div class="ae-panel">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'ae-panel',
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/colors';

.ae-panel {
  position: relative;
  background: $color-white;
  border-radius: 8px;
  box-shadow: 0 0 8px $color-shadow-alpha-10;
  padding: 1rem;
  min-height: 1px;
}
</style>
