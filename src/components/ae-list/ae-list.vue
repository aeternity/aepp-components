<template>
    <ul class="ae-list" :class="{ [face]: Boolean(face) }">
      <slot />
    </ul>
</template>
<script>
export default {
  name: 'ae-list',
  props: {
    /**
     * Face applies a shape/form to the current
     * list container, available options: `primary`
     */
    face: {
      type: String,
      validator: value => ['primary'].includes(value),
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/colors';

.ae-list {
  padding: 0;
  margin: 0;

  &.primary {
    border-radius: 4px;
    background: $color-white;
    box-shadow: 0 0 8px $color-shadow-alpha-15;
    padding: 1rem;
    overflow: hidden;

    > li:first-child {
      border-top: 0;
    }
    > li:last-child {
      border-bottom: 0;
    }
  }
}
</style>
