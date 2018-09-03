<template>
    <div class="ae-list" :class="{ [face]: Boolean(face) }">
      <slot />
    </div>
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
      validator(value) {
        return ['primary'].indexOf(value) !== 1;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
  @import '../../styles/globals';

  .ae-list.primary {
    border-radius: 4px;
    background: $color-white;
    box-shadow: 0 0 8px $color-shadow-alpha-15;
    padding: rem(15px);
    overflow: hidden;

    > .ae-list-item {
      &:first-child {
        border-top: 0;
      }

      &:last-child {
        border-bottom: 0;
      }
    }
  }
</style>
