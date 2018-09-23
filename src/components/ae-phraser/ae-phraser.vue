<template>
  <div class="ae-phraser">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'ae-phraser',
  props: {}
};
</script>
<style lang="scss" scoped>
  .ae-phraser {
    display: flex;
    flex-direction: column;
  }
</style>
