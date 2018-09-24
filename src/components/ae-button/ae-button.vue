<template>
  <button class="ae-button"
          type="button"
          :class="{
            [fill]: Boolean(fill),
            [`color-${color}`]: Boolean(color),
            [face]: Boolean(face),
            extend
          }"
          @click="propagate">
    <slot />
  </button>
</template>
<script>
import { events } from '../../mixins';

export default {
  name: 'ae-button',
  mixins: [events],
  props: {
    /**
     * Fill property changes the color state of the button
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
     * color property changes the text color of the button
     * select something between: `neutral, default, emphasis, alternative`
     */
    color: {
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
     * the current button, available options:
     * `primary, secondary, icon, toolbar`
     */
    face: {
      type: String,
      validator: function (value) {
        return [
          'primary',
          'secondary',
          'icon',
          'toolbar'
        ].indexOf(value) !== 1;
      }
    },

    /**
     * Extend the button full width
     */
    extend: Boolean
  }
};
</script>
<style lang="scss" scoped>
  @import '../../styles/globals';

  .ae-button {
    user-select: none;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: $font-sans;
    border: none;
    height: 32px;
    padding: 0;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    transition: all $base-transition-time;
    background: transparent;

    &:hover,
    &:focus {
      text-decoration: none;
    }

    &:active:not(:disabled) {
      opacity: 0.85;
    }

    > i {
      margin: 0 rem(4px);
    }
  }

  .ae-button.primary {
    @extend %face-uppercase-base;

    background: $color-neutral;
    letter-spacing: em(1.3px);
    font-weight: bold;
    height: 56px;
    border-radius: 32px;
    box-shadow: 0 0 16px $color-shadow-alpha-15;
    color: $color-white;
    padding: 0 rem(16px);

    &:disabled {
      cursor: not-allowed;
      box-shadow: none;
      color: $color-neutral-positive-1;
    }
  }

  .ae-button.secondary {
    @extend %face-uppercase-base;

    display: flex;
    height: 58px;
    width: 100%;
    border-top: 1px solid $color-neutral-positive-2;
    border-bottom: 1px solid $color-neutral-positive-2;
    font-weight: bold;
    text-transform: uppercase;

    &:first-child {
      border-top: none;
    }
    &:last-child {
      border-bottom: none;
    }

    &:disabled {
      cursor: not-allowed;
    }

    &.default,
    &.alternative,
    &.emphasis,
    &.neutral {
      background: transparent;

      &:disabled {
        background: transparent;
      }
    }

    &.neutral {
      color: $color-neutral-minimum;
      border-color: $color-neutral-positive-2;

      &:disabled {
        color: $color-neutral;
      }
    }
    &.default {
      color: $color-default-positive-1;
      border-color: $color-default-negative-1;

      &:disabled {
        color: $color-default-positive-3;
      }
    }
    &.alternative {
      color: $color-alternative-positive-1;
      border-color: $color-alternative-negative-1;

      &:disabled {
        color: $color-alternative-positive-3;
      }
    }
    &.emphasis {
      color: $color-emphasis-positive-1;
      border-color: $color-emphasis-negative-1;

      &:disabled {
        color: $color-emphasis-positive-3;
      }
    }
  }

  .ae-button.icon {
    @include size(56px);

    background: $color-neutral;
    font-size: rem(20px);
    border-radius: 50%;
    box-shadow: 0 0 16px $color-shadow-alpha-15;
    color: $color-white;
    padding: 0 rem(16px);

    &:disabled {
      cursor: not-allowed;
      box-shadow: none;
      color: $color-neutral-positive-1;
    }
  }

  .ae-button.toolbar {
    @extend %face-uppercase-xs;

    padding: 0 rem(8px);
    background: transparent;
    letter-spacing: em(1.1px);
    height: 16px;
    font-weight: 500;
    color: inherit;

    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }

    > i {
      font-size: rem(14px);
    }
  }

  .ae-button.color-neutral {
    color: $color-neutral;
  }

  .ae-button.color-default {
    color: $color-default;
  }

  .ae-button.color-alternative {
    color: $color-alternative;
  }

  .ae-button.color-emphasis {
    color: $color-emphasis;
  }

  .ae-button.neutral {
    background: $color-neutral-maximum;
    color: $color-neutral-minimum;

    &:disabled {
      background: $color-neutral-positive-1;
      color: $color-white;
    }
  }

  .ae-button.default {
    background: $color-default;
    color: $color-white;

    &:disabled {
      background: $color-default-negative-1;
      color: $color-default-positive-1;
    }
  }

  .ae-button.alternative {
    background: $color-alternative;
    color: $color-white;

    &:disabled {
      background: $color-alternative-negative-1;
      color: $color-alternative-positive-1;
    }
  }

  .ae-button.emphasis {
    background: $color-emphasis;
    color: $color-white;

    &:disabled {
      background: $color-emphasis-negative-1;
      color: $color-emphasis-positive-1;
    }
  }

  .ae-button.extend {
    padding: 0;
    width: 100%;
  }
</style>
