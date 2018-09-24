<template>
  <p class="ae-text"
     :class="{ [fill]: Boolean(fill), [face]: Boolean(face), focus, disabled }"
     :style="{ fontWeight: weight }" >
    <!-- @slot Default slot -->
    <slot />
  </p>
</template>
<script>
export default {
  name: 'ae-text',
  props: {
    /**
     * Fill property changes the color state of the toolbar
     * select something between:
     * `neutral, default, emphasis, alternative, white, black, inherit`
     */
    fill: String,

    /**
     * Face applies a font-style to the current text
     * expects one of the following values:
     * `sans-l, sans-base, sans-s, sans-xs`
     * `mono-xl, mono-base, mono-s, mono-xs`
     * `tracked-base, uppercase-base, uppercase-xs`
     */
    face: {
      type: String,
      validator(value) {
        return [
          'sans-l',
          'sans-base',
          'sans-s',
          'sans-xs',
          'mono-xl',
          'mono-base',
          'mono-s',
          'mono-xs',
          'tracked-base',
          'uppercase-base',
          'uppercase-xs',
        ].indexOf(value) !== -1;
      },
    },

    /**
     * Aligns the text `left, center, right`
     */
    align: {
      type: String,
      validator(value) {
        return [
          'left',
          'right',
          'center',
        ].indexOf(value) !== 1;
      },
    },

    /**
     * Sets the Font weight of the text
     */
    weight: Number,

    /**
     * Manually enable focus styling on the element
     */
    focus: Boolean,

    /**
     * Disabled state of the element
     */
    disabled: Boolean,
  },
};
</script>
<style lang="scss" scoped>
  @import '../../styles/globals';

  .ae-text {
    @extend %face-sans-base;

    transition: $base-transition-time;
    outline: none;
    border-bottom: 1px solid transparent;
    margin: 0;
    padding: 0;

    &.focus, &:focus {
      border-color: $color-black;
    }

    &.disabled {
      opacity: 0.15;
      cursor: not-allowed;
    }
  }

  .ae-text.inherit {
    color: inherit;

    &:focus {
      border-color: inherit;
    }
  }

  .ae-text.white {
    color: $color-white;

    &.focus, &:focus {
      border-color: $color-white;
    }
  }

  .ae-text.black {
    color: $color-black;

    &.focus, &:focus {
      border-color: $color-black;
    }
  }

  .ae-text.neutral {
    color: $color-neutral-minimum;

    &.focus, &:focus {
      border-color: $color-neutral-minimum;
    }
  }

  .ae-text.default {
    color: $color-default-negative-3;

    &.focus, &:focus {
      border-color: $color-default-negative-3;
    }
  }

  .ae-text.emphasis {
    color: $color-emphasis-negative-3;

    &.focus, &:focus {
      border-color: $color-emphasis-negative-3;
    }
  }

  .ae-text.alternative {
    color: $color-alternative-negative-3;

    &.focus, &:focus {
      border-color: $color-alternative-negative-3;
    }
  }

  .ae-text.sans-l {
    @extend %face-sans-l;
  }

  .ae-text.sans-base {
    @extend %face-sans-base;
  }

  .ae-text.sans-s {
    @extend %face-sans-s;
  }

  .ae-text.sans-xs {
    @extend %face-sans-xs;
  }

  .ae-text.mono-xl {
    @extend %face-mono-xl;
  }

  .ae-text.mono-base {
    @extend %face-mono-base;
  }

  .ae-text.mono-s {
    @extend %face-mono-s;
  }

  .ae-text.mono-xs {
    @extend %face-mono-xs;
  }

  .ae-text.tracked-base {
    @extend %face-tracked-base;
  }

  .ae-text.uppercase-base {
    @extend %face-uppercase-base;
  }

  .ae-text.uppercase-xs {
    @extend %face-uppercase-xs;
  }

  .ae-toolbar.left {
    text-align: left;
  }

  .ae-toolbar.center {
    text-align: center;
  }

  .ae-toolbar.right {
    text-align: right;
  }
</style>
