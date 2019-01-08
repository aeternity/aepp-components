<template>
  <span class="ae-fraction" :class="[ fill ]">
    <sup>{{ numerator }}</sup>
    &frasl;
    <sub>{{ denominator }}</sub>
  </span>
</template>
<script>
export default {
  name: 'ae-fraction',
  props: {
    /**
     * Fill property changes the color state of the fraction component.
     * Select something between: `primary, secondary, neutral, alternative, white, black`
     */
    fill: {
      type: String,
      validator: value => [
        'primary',
        'secondary',
        'neutral',
        'alternative',
        'white',
        'black',
      ].includes(value),
    },

    /**
     * The numerator property defines
     * the upper number in the fraction.
     */
    numerator: {
      type: [Number, String],
      default: 0,
    },

    /**
     * The numerator property defines
     * the lower number in the fraction.
     */
    denominator: {
      type: [Number, String],
      default: 0,
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/colors';
@import '../../styles/variables/typography';

.ae-fraction {
  display: inline-block;
  font-size: $base-font-size;
  font-family: $font-sans;
  font-weight: 500;
  line-height: 0;
  word-spacing: -4px;
  color: inherit;

  &.primary {
    color: $color-primary;
  }
  &.secondary {
    color: $color-secondary;
  }
  &.neutral {
    color: $color-neutral;
  }
  &.alternative {
    color: $color-alternative;
  }
  &.white {
    color: $color-white;
  }
  &.black {
    color: $color-black;
  }
}
</style>
