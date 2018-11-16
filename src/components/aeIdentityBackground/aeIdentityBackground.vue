<template>
  <div :class="cssClasses" @click="$emit('click', $event)">
    <slot/>
  </div>
</template>
<script>
import { TYPE_PROPERTY_VALUES as types } from '../../core/constants';

export default {
  name: 'ae-identity-background',
  props: {
    type: {
      type: String,
      default: 'normal',
      validator: value => types.includes(value),
    },
  },
  computed: {
    typeModifier() {
      return `_type_${this.type}`;
    },
    cssClasses() {
      return [
        'ae-identity-background',
        this.typeModifier,
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/fallback/variables';

.ae-identity-background {
  padding: 13px 13px;
  border-radius: 15px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  display: flex;

  &._type {
    @each $type in map_keys($type-color-map) {
      &_#{$type} {
        $color: #{map_get($type-color-map, $type)};
        background-color: $color;
        border-color: $color;
      }
    }
  }
}
</style>
