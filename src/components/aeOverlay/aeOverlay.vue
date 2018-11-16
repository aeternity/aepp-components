<template>
  <div class="ae-overlay" @click.self="click">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'ae-overlay',
  mounted() {
    document.body.style.overflow = 'hidden';
  },
  destroyed() {
    document.body.style.overflow = '';
  },
  methods: {
    click(e) {
      /**
       * Click event
       *
       * @event click
       * @type {MouseEvent}
       */
      this.$emit('click', e);
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/fallback/variables';

.ae-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(to bottom, rgba($anthracite, 0.9), rgba($aubergine, 0.9));
  overflow: auto;
}
</style>
