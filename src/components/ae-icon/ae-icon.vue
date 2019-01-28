<template>
  <i
    class="ae-icon"
    :class="[`ae-icon-${name}`, fill, face]"
    :style="transformRotate"
  />
</template>
<script>
import './icons/icons.font';

export default {
  name: 'ae-icon',
  props: {
    /**
     * Name of the icon, please check list of icons in
     * the ./icons folder inside the component
     */
    name: {
      type: String,
      required: true,
    },

    /**
     * Fill property changes the color state of the icon.
     * `primary, secondary, neutral, alternative, black, white`
     */
    fill: {
      type: String,
      validator: value => [
        'primary',
        'secondary',
        'neutral',
        'alternative',
        'black',
        'white',
      ].includes(value),
    },

    /**
     * Face applies a shape/form to the current icon.
     * Available options: `round`
     */
    face: {
      type: String,
      validator: value => ['round'].includes(value),
    },

    /**
     * Rotation of icon in degrees, takes a number
     * as input.
     */
    rotate: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    transformRotate() {
      return {
        ...this.rotate && {
          transform: `rotate(${this.rotate}deg)`,
        },
      };
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/colors';

.ae-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &.primary {
    color: $color-primary;
  }
  &.secondary {
    color: $color-secondary;
  }
  &.neutral {
    color: $color-neutral-minimum;
  }
  &.alternative {
    color: $color-alternative;
  }
  &.black {
    color: $color-black;
  }
  &.white {
    color: $color-white;
  }
}

.ae-icon:before {
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  speak: none;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ae-icon.round {
  color: $color-white;
  background: $color-neutral;
  border-radius: 50%;
  box-shadow: 0 0 16px $color-shadow-alpha-15;
  width: 32px;
  height: 32px;

  &.primary {
    background: $color-primary;
    color: $color-white;
  }
  &.secondary {
    background: $color-secondary;
    color: $color-white;
  }
  &.neutral {
    background: $color-neutral-maximum;
    color: $color-neutral-minimum;
  }
  &.alternative {
    background: $color-alternative;
    color: $color-white;
  }
  &.black {
    background: $color-white;
    color: $color-black;
  }
  &.white {
    background: $color-black;
    color: $color-white;
  }
}
</style>
