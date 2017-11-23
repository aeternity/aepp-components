<template>
  <router-link v-if="to" :to="to" :class="className" @click="click">
    <slot />
  </router-link>
  <button v-else :class="className" @click="click">
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'ae-header-button',
    props: {
      to: { type: [String, Object], required: false },
      icon: { type: Boolean, default: false },
      secondary: { type: Boolean, default: false }
    },
    computed: {
      className () {
        return {
          'ae-header-button': true,
          icon: this.icon,
          secondary: this.secondary
        }
      }
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

  .ae-header-button {
    height: 40px;
    min-width: 40px;
    line-height: 40px;
    border-radius: 25px;
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    text-align: center;
    background-color: $maegenta;
    color: $white;
    font-weight: 500;
    font-size: 16px;

    &.secondary {
      background-color: $grey;
    }

    &:not(.icon) {
      padding: 0 30px;
    }
  }
</style>
