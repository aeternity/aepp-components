<template>
  <label class="ae-label">
    <div class="content">
      <!-- @slot Label content -->
      <slot />
    </div>
    <div :class="['help', typeModifier]">
      {{helpText}}
    </div>
  </label>
</template>
<script>
import { TYPE_PROPERTY_VALUES as types } from '../../core/constants';

export default {
  name: 'ae-label',
  props: {
    /**
     * Text of help field
     */
    'help-text': String,
    /**
     * Type of help field, possible values: 'boring', 'normal', 'exciting', 'dramatic'
     */
    'help-type': {
      type: String,
      default: 'normal',
      validator: value => types.includes(value),
    },
  },
  computed: {
    typeModifier() {
      return `_type_${this.helpType}`;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/fallback/variables';

.ae-label {
  display: flex;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 25px;
  margin-bottom: 10px;
  align-items: center;
  line-height: 28px;

  .content {
    flex-grow: 1;
  }

  .help {
    font-size: 13px;
    text-align: right;
    text-transform: none;
    margin-left: 5px;
    line-height: 14px;

    &._type {
      @each $type in map_keys($type-color-map) {
        &_#{$type} {
          color: map_get($type-color-map, $type);
        }
      }
    }
  }
}
</style>
