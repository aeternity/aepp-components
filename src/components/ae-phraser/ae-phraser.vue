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
  @import '../../styles/globals';

  .ae-phraser {
    display: flex;
    flex-direction: column;
  }
</style>
