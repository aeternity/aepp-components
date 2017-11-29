<template>
  <nav class="ae-filter-list">
    <!-- Filter list content -->
    <slot />
  </nav>
</template>

<script>
  export default {
    name: 'ae-filter-list'
  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ae-filter-list {
    margin: 30px 0;
    padding: 0 5px;
    text-align: center;
    white-space: nowrap;
    overflow-x: auto;
    @media (max-width: $screen-phone) {
      margin: 20px 0;
    }
  }

  ::-webkit-scrollbar {
    width: 0;
  }
</style>
