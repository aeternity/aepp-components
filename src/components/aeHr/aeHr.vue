<template>
  <hr class="ae-hr" :class="{ branded }" />
</template>

<script>
  export default {
    props: {
      branded: { type: Boolean, default: false },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ae-hr {
    background-color: $smoke;
    height: 2px;
    margin: 20px 0;
    border: none;

    &.branded {
      background-color: $maegenta;
      height: 3px;
    }
  }
</style>
