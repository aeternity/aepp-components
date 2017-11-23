<template>
  <div class="ae-hr-button">
    <ae-hr />
    <button @click="click"><slot /></button>
    <ae-hr />
  </div>
</template>

<script>
  import AeHr from '../aeHr/aeHr.vue'

export default {
    name: 'ae-hr-button',
    components: { AeHr },
    props: {
      branded: { type: Boolean, default: false }
    },
    methods: {
      click (e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ae-hr-button {
    display: flex;
    flex-direction: row;
    align-items: center;

    .ae-hr {
      flex-grow: 1;
    }

    button {
      height: 30px;
      line-height: 30px;
      border-radius: 15px;
      background-color: $white;
      border: none;
      padding: 0 20px;
      box-shadow: 0 4px 8px 0 rgba(60, 60, 60, 0.1);
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      min-width: 185px;
    }
  }
</style>
