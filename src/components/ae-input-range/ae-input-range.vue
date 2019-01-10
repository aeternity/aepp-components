<template>
  <input
    class="ae-input-range"
    type="range"
    :class="[fill]"
    :value="value"
    v-bind="$attrs"
    @input="propagateEventValue"
  />
</template>
<script>
import { events } from '../../mixins';

export default {
  name: 'ae-input-range',
  mixins: [events],
  props: {
    /**
     * Select the fill/style that you want to apply
     * for the range input element.
     * Valid input: `primary, secondary, neutral, alternative`
     */
    fill: {
      type: String,
      validator: value => [
        'primary',
        'secondary',
        'neutral',
        'alternative',
      ].includes(value),
      default: 'primary',
    },

    /**
     * Value property of the range input element
     */
    value: [String, Number],
  },
};
</script>
<style lang="scss">
@import "../../styles/globals/functions";
@import "../../styles/variables/animations";
@import "../../styles/variables/colors";
@import "../../styles/variables/typography";

/**
 * Define the list of colors to be used
 * by the range field.
 */
$colors: (
  primary: (
    track-color: $color-white,
    progress-color: $color-primary,
    thumb-color: $color-primary,
    shadow-color: $color-primary,
  ),
  secondary: (
    track-color: $color-white,
    progress-color: $color-secondary,
    thumb-color: $color-secondary,
    shadow-color: $color-secondary,
  ),
  neutral: (
    track-color: $color-white,
    progress-color: $color-neutral-maximum,
    thumb-color: $color-neutral-maximum,
    shadow-color: $color-neutral,
  ),
  alternative: (
    track-color: $color-white,
    progress-color: $color-alternative,
    thumb-color: $color-alternative,
    shadow-color: $color-alternative,
  ),
);

/**
 * Mixin to set the range track styles
 */
@mixin range-track($background-color) {
  height: rem(1.83px);
  width: 100%;
  background: $background-color;
  box-shadow: none;
  border: none;
  border-radius: 0;
  cursor: pointer;
}

.ae-input-range {
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  cursor: pointer;
  padding: 0;
  margin: 1rem 0;

  @each $fill, $colors in $colors {
    &.#{$fill} {
      @each $name in (
        -webkit-slider-runnable-track,
        -moz-range-track,
        -ms-track,
        -ms-fill-upper,
      ) {
        &::#{$name} {
          @include range-track(map-get($colors, track-color));
        }
      }

      @each $name in -moz-range-progress -ms-fill-lower {
        &::#{$name} {
          @include range-track(map-get($colors, progress-color));
        }
      }

      @each $name in -webkit-slider-thumb -moz-range-thumb -ms-thumb {
        &::#{$name} {
          height: rem(17px);
          width: rem(17px);
          background: map-get($colors, thumb-color);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 8px map-get($colors, shadow-color);
        }
      }
    }
  }

  &:focus, &:active { outline: none; }
  &::-moz-range-thumb { border: none; }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: rem(-7.5px);
  }
  &::-ms-track {
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
}
</style>
