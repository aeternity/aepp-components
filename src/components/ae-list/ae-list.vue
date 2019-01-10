<template>
  <component :is="tag" class="ae-list" :class="{ [face]: Boolean(face) }">
    <slot/>
  </component>
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

    /**
     * Used for dynamic components and to work
     * around limitations of in-DOM templates.
     * See: https://vuejs.org/v2/api/#is
     *
     * Default: 'ul'
     */
    tag: {
      type: [Object, String],
      default: 'ul',
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/colors';

.ae-list {
  padding: 0;
  margin: 0;
}

.ae-list.primary {
  border-radius: 4px;
  background: $color-white;
  box-shadow: 0 0 8px $color-shadow-alpha-15;
  padding: 1rem;
  overflow: hidden;

  > *:first-child {
    border-top: 0;
  }
  > *:last-child {
    border-bottom: 0;
  }
}
</style>
