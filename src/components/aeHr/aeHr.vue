<template>
  <hr class="ae-hr" :class="{ branded }" />
</template>

<script>
  /**
   * Displays an horizontal rule
   */
  export default {
    name: 'ae-hr',
    props: {
      /**
       * Use brand color instead of default
       */
      branded: { type: Boolean, default: false }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ae-hr {
    background-color: $silver;
    height: 1px;
    margin: 20px 0;
    border: none;

    &.branded {
      background-color: $maegenta;
      height: 3px;
    }
  }
</style>
