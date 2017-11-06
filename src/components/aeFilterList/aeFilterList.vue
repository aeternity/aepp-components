<template>
  <nav class="ae-filter-list">
    <slot />
  </nav>
</template>

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
