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
    name: "ae-button2",
    props: {
      to: { type: [String, Object], required: false },
      secondary: { type: Boolean, default: false },
    },
    computed: {
      className() {
        return {
          'ae-button': true,
          secondary: this.secondary,
        };
      },
    },
    methods: {
      click(e) {
        this.$emit('click', e);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../variables';

  .ae-button {
    border: none;
    background-color: $maegenta;
    color: $white;
    height: 30px;
    border-radius: 15px;
    min-width: 90px;
    padding: 0;
    line-height: 30px;
    font-size: 14px;
    text-transform: uppercase;

    &.secondary {
      background-color: $grey;
    }
  }
</style>
