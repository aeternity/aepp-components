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
     * select something between: `primary, secondary, neutral, alternative`
     */
    fill: {
      type: String,
      validator: value => [
        'primary',
        'secondary',
        'neutral',
        'alternative',
      ].includes(value),
    },

    /**
     * color property changes the text color of the button
     * select something between: ` primary, secondary, neutral, alternative`
     */
    color: {
      type: String,
      validator: value => [
        'primary',
        'secondary',
        'neutral',
        'alternative',
      ].includes(value),
    },

    /**
     * Face applies a shape/form to
     * the current button, available options:
     * `round, flat, icon, toolbar`
     */
    face: {
      type: String,
      validator: value => [
        '',
        'round',
        'flat',
        'icon',
        'toolbar',
      ].includes(value),
      default: '',
    },

    /**
     * Extend the button full width
     */
    extend: Boolean,
  },
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

  .ae-button.round {
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

  .ae-button.flat {
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

    &.primary,
    &.secondary,
    &.neutral,
    &.alternative {
      background: transparent;

      &:disabled {
        background: transparent;
      }
    }

    &.primary {
      color: $color-primary-positive-1;
      border-color: $color-primary-negative-1;

      &:disabled {
        color: $color-primary-positive-3;
      }
    }
    &.secondary {
      color: $color-secondary-positive-1;
      border-color: $color-secondary-negative-1;

      &:disabled {
        color: $color-secondary-positive-3;
      }
    }
    &.neutral {
      color: $color-neutral-minimum;
      border-color: $color-neutral-positive-2;

      &:disabled {
        color: $color-neutral;
      }
    }
    &.alternative {
      color: $color-alternative-positive-1;
      border-color: $color-alternative-negative-1;

      &:disabled {
        color: $color-alternative-positive-3;
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

  .ae-button.color-primary {
    color: $color-primary;
  }

  .ae-button.color-secondary {
    color: $color-secondary;
  }

  .ae-button.color-neutral {
    color: $color-neutral;
  }

  .ae-button.color-alternative {
    color: $color-alternative;
  }

  .ae-button.primary {
    background: $color-primary;
    color: $color-white;

    &:disabled {
      background: $color-primary-negative-1;
      color: $color-primary-positive-1;
    }
  }

  .ae-button.secondary {
    background: $color-secondary;
    color: $color-white;

    &:disabled {
      background: $color-secondary-negative-1;
      color: $color-secondary-positive-1;
    }
  }

  .ae-button.neutral {
    background: $color-neutral-maximum;
    color: $color-neutral-minimum;

    &:disabled {
      background: $color-neutral-positive-1;
      color: $color-white;
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

  .ae-button.extend {
    padding: 0;
    width: 100%;
  }
</style>
