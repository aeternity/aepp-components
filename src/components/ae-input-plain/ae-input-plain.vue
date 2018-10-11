<template>
  <input
    :class="['ae-input-plain', fill]"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'ae-input-plain',
  props: {
    /**
     * Fill property changes the color of placeholder and value.
     * Only `white` is available
     */
    fill: String,

    /**
     * Temporary text appearing in the input box
     */
    placeholder: String,

    /**
     * Value to be displayed
     */
    value: undefined,
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/placeholders/typography';
@import '../../styles/variables/colors';
@import '../../styles/variables/animations';

.ae-input-plain {
  @extend %face-sans-base;
  transition: border-color $base-transition-time;
  width: 150px;
  padding: 0;
  border: none;
  border-bottom: 1px solid transparent;
  background: none;

  &::placeholder {
    color: $color-black;
  }

  &:focus {
    border-color: $color-neutral;
  }

  &.white {
    color: $color-white;

    &::placeholder {
      color: $color-neutral-positive-1;
    }

    &:focus {
      border-color: $color-neutral-positive-1;
    }
  }
}
</style>
