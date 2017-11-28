<template>
  <div class="ae-hr-progressbar">
    <ae-hr branded :style="{ width: `${ratio * 100}%` }" />
    <ae-hr />
  </div>
</template>

<script>
  import AeHr from '../aeHr/aeHr.vue'

  /**
   * Displays an progressbar based on horizontal rules
   */
  export default {
    name: 'ae-hr-progressbar',
    components: { AeHr },
    props: {
      /**
       * The ratio of the progressbar between 0 and 1
       */
      ratio: Number
    }
  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ae-hr-progressbar {
    display: flex;
    flex-direction: row;
    align-items: center;

    .ae-hr:nth-child(1) {
      flex-grow: 0;
      flex-shrink: 0;
    }

    .ae-hr:nth-child(2) {
      flex-grow: 1;
    }
  }
</style>
