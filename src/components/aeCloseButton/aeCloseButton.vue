<template>
  <button class="ae-close-button" @click="click" />
</template>

<script>
  export default {
    methods: {
      click(e) {
        this.$emit('click', e);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ae-close-button {
    border: 0;
    padding: 0;
    background: transparent;
    width: 16px;
    height: 16px;
    position: relative;

    &:before, &:after {
      content: '';
      display: block;
      background-color: $anthracite;
      position: absolute;
      $width: 2px;
      width: $width;
      left: calc(50% - #{$width / 2});
      $sqrtOf2: 1.414213562;
      height: calc(100% * #{$sqrtOf2});
      top: calc(100% * #{(1 - $sqrtOf2) / 2});
    }

    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
</style>
