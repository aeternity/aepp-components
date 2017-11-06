<template>
  <ae-overlay @click="close">
    <ae-panel :title="title" :closeHandler="close">
      <slot />
    </ae-panel>
  </ae-overlay>
</template>

<script>
  import AeOverlay from './AeOverlay.vue';
  import AePanel from './AePanel.vue';

  export default {
    props: {
      title: String,
    },
    components: { AeOverlay, AePanel },
    methods: {
      close(e) {
        this.$emit('close');
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import './variables';

  .ae-overlay {
    display: flex;
    padding: 10px;
    box-sizing: border-box;

    .ae-panel {
      margin: auto;
    }
  }
</style>
