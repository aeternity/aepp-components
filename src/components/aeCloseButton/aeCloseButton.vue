<template>
  <ae-header-button class="ae-close-button" icon @click="click">
    <div class="ae-close" />
  </ae-header-button>
</template>

<script>
  import AeHeaderButton from '../aeHeaderButton/aeHeaderButton.vue';

  export default {
    components: { AeHeaderButton },
    methods: {
      click(e) {
        this.$emit('click', e);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ae-header-button {
    background-color: $smoke;
    font-size: 0;
  }

  .ae-close {
    width: 18px;
    height: 18px;
    position: relative;
    display: inline-block;
    vertical-align: middle;

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
