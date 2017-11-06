<template>
  <div class="ae-header-alert">
    <content><slot /></content>
    <ae-close-button @click="close" />
  </div>
</template>

<script>
  import AeCloseButton from './AeCloseButton.vue';

  export default {
    components: { AeCloseButton },
    methods: {
      close(e) {
        this.$emit('close', e);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "./variables";

  .ae-header-alert {
    background-color: $maegenta;
    height: 65px;
    line-height: 25px;
    color: $white;
    font-size: 18px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    z-index: 1;

    content {
      flex-grow: 1;
      margin: 0 25px;
    }

    .ae-close-button {
      float: right;
      margin-right: 25px;

      &:before, &:after {
        background-color: $white;
      }
    }

    @media (max-width: $screen-phone) {
      margin-bottom: 20px;
    }

    @media (min-width: $screen-phone + 1) {
      margin-bottom: 30px;
    }

    @media (min-width: $container-width) {
      .ae-close-button {
        position: absolute;
        right: 0;
      }
    }
  }
</style>
