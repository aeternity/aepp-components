<template>
  <i class="ae-icon"
     :class="{ [`ae-icon-${name}`]: Boolean(name), [fill]: Boolean(fill), [face]: Boolean(face)  }"
     :style="{ fontSize: size }" />
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
    name: String,

    /**
     * Fill property changes the color state of the icon
     * select something between: `neutral, default, emphasis, alternative`
     */
    fill: {
      type: String,
      validator: function (value) {
        return [
          'neutral',
          'default',
          'alternative',
          'emphasis'
        ].indexOf(value) !== 1;
      }
    },

    /**
     * Face applies a shape/form to
     * the current icon, available options:
     * `round`
     */
    face: {
      type: String,
      validator: function (value) {
        return ['round'].indexOf(value) !== 1;
      }
    },

    /**
     * Set manually the size of the font icon
     */
    size: String
  }
};
</script>
<style lang="scss" scoped>
  .ae-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &.neutral {
      color: $color-neutral-minimum;
    }
    &.default {
      color: $color-default;
    }
    &.alternative {
      color: $color-alternative;
    }
    &.emphasis {
      color: $color-emphasis;
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
    @include size(32px);

    color: $color-white;
    background: $color-neutral;
    border-radius: 50%;
    box-shadow: 0 0 16px $color-shadow-alpha-15;

    &.neutral {
      background: $color-neutral-maximum;
      color: $color-neutral-minimum;
    }
    &.default {
      background: $color-default;
      color: $color-white;
    }
    &.alternative {
      background: $color-alternative;
      color: $color-white;
    }
    &.emphasis {
      background: $color-emphasis;
      color: $color-white;
    }
  }
</style>
