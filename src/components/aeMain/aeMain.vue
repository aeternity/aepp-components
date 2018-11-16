<template>
  <div class="ae-main">
    <slot />
  </div>
</template>
<script>
/**
 * Displays app background, preserves free space for Identity manager UI,
 * sets common styles for child components
 */
export default {
  name: 'ae-main',
};
</script>
<style lang="scss">
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    height: 1px;
  }
</style>
<style lang="scss" scoped>
.ae-main {
  background: fixed linear-gradient(to bottom, white, #F1F4F7);
  min-height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding-bottom: 80px;
}
</style>
