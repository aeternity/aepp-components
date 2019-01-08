<template>
  <p class="ae-text"
     :class="{
       [fill]: Boolean(fill),
       [face]: Boolean(face),
       [align]: Boolean(align)
     }"
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
     * `primary, secondary, neutral, alternative, white, black, inherit`
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
      validator: value => [
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
      ].includes(value),
    },

    /**
     * Aligns the text `left, center, right`
     */
    align: {
      type: String,
      validator: value => [
        'left',
        'right',
        'center',
      ].includes(value),
    },

    /**
     * Sets the Font weight of the text
     */
    weight: [Number, String],
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/variables/animations';
@import '../../styles/variables/colors';
@import '../../styles/placeholders/typography';

.ae-text {
  @extend %face-sans-base;
  transition: $base-transition-time;
  outline: none;
  border-bottom: 1px solid transparent;
  margin: 0;
  padding: 0;
}

.ae-text.inherit {
  color: inherit;
}

.ae-text.white {
  color: $color-white;
}

.ae-text.black {
  color: $color-black;
}

.ae-text.primary {
  color: $color-primary-negative-3;
}

.ae-text.secondary {
  color: $color-secondary-negative-3;
}

.ae-text.neutral {
  color: $color-neutral-minimum;
}

.ae-text.alternative {
  color: $color-alternative-negative-3;
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

.ae-text.left {
  text-align: left;
}

.ae-text.center {
  text-align: center;
}

.ae-text.right {
  text-align: right;
}
</style>
