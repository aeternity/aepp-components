<template>
  <component
    :is="renderAs"
    :to="to"
    :class="[fill, inactive && 'inactive']"
    class="ae-list-item"
    @click="$emit('click', $event)"
  >
    <!-- @slot List item content -->
    <slot />
    <div class="space" />
    <!-- @slot List item content on the right side -->
    <slot name="right" />
  </component>
</template>

<script>
import AeLink from '../aeLink/aeLink.vue';

export default {
  name: 'ae-list-item',
  props: {
    /**
     * Path to go to when clicked
     */
    to: { type: [Object, String], default: undefined },
    /**
     * The color of the text.
     * Select something between: `primary, secondary, alternative`
     */
    fill: {
      type: String,
      validator: value => ['', 'primary', 'secondary', 'alternative'].includes(value),
      default: '',
    },
    /**
     * Disables any reaction to the cursor
     */
    inactive: { type: Boolean, default: false },
  },
  computed: {
    renderAs() {
      if (this.to) return AeLink;
      if (this.inactive) return 'div';
      return 'label';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/placeholders/typography';
@import '../../styles/variables/colors';

.ae-list-item {
  @extend %face-sans-base;
  height: rem(60px);
  display: flex;
  align-items: center;
  border-top: 2px solid $color-neutral-positive-2;
  padding: 0 rem(20px);
  text-decoration: none;
  color: $color-black;

  &.primary {
    color: $color-primary;
  }

  &.secondary {
    color: $color-secondary;
  }

  &.alternative {
    color: $color-alternative;
  }

  &:not(.inactive) {
    cursor: pointer;

    &:hover {
      background-color: $color-neutral-positive-3;
    }
  }

  .space {
    flex-grow: 1;
  }
}
</style>
