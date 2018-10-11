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
@import '../../styles/globals/functions';
@import '../../styles/globals/mixins';
@import '../../styles/variables/animations';
@import '../../styles/variables/colors';
@import '../../styles/variables/stack';
@import '../../styles/placeholders/typography';

.ae-list {
  padding: 0;
  margin: 0;
}

.ae-list.primary {
  border-radius: 4px;
  background: $color-white;
  box-shadow: 0 0 8px $color-shadow-alpha-15;
  padding: rem(15px);
  overflow: hidden;

  > li:first-child {
    border-top: 0;
  }
  > li:last-child {
    border-bottom: 0;
  }
}
</style>
