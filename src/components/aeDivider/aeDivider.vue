<template>
  <div class="ae-divider" :class="type" />
</template>
<script>
const aeDividerTypes = [
  'boring',
  'exciting',
  'dramatic',
];

export default {
  name: 'ae-divider',
  props: {
    /**
     * Type of divider, possible values: 'boring', 'exciting', 'dramatic'
     */
    type: {
      type: String,
      validator: value => aeDividerTypes.includes(value),
    },
  },
};
</script>
<style lang="scss" scoped>
.ae-divider {
  margin: 8px 0;
  height: 2px;
  opacity: 0.32;
  background-color: #989898;

  &.dramatic {
    background-color: #f03c6e;
  }

  &.exciting {
    background-color: #320a3c;
  }

  &.boring {
    background-color: #f0f0f0;
  }
}
</style>
