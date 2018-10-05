<template>
  <span
    :class="['ae-icon', `ae-icon-${actualName}`, fill, face]"
    :style="style"
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
     * Fill property changes the color state of the icon
     * select something between: `primary, secondary, neutral, alternative`
     */
    fill: {
      type: String,
      validator: value => [
        '',
        'primary',
        'secondary',
        'neutral',
        'alternative',
      ].includes(value),
      default: '',
    },

    /**
     * Face applies a shape/form to
     * the current icon, available options:
     * `round`
     */
    face: {
      type: String,
      validator: value => ['', 'round'].includes(value),
      default: '',
    },

    /**
     * Rotation of icon in degrees
     */
    rotate: {
      type: [String, Number],
      default: 0,
    },
  },
  computed: {
    style() {
      return {
        ...this.rotate && { transform: `rotate(${this.rotate}deg)` },
      };
    },
    actualName() {
      return {
        arrow: 'back',
        burger: 'list',
        chevron: 'left-more',
        error: 'close',
        refresh: 'reload',
        view: 'eye',
      }[this.name] || this.name;
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

  &:before {
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    speak: none;

    /* Better Font Rendering */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

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

  &.round {
    width: 32px;
    height: 32px;
    color: $color-white;
    background: $color-neutral;
    border-radius: 50%;
    box-shadow: 0 0 16px $color-shadow-alpha-15;

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
  }
}
</style>
