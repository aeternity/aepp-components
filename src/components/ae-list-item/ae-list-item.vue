<template>
  <component
    class="ae-list-item"
    :is="tag"
    :class="[fill, disabled]"
    :to="to"
    @click="propagateEvent"
  >
    <!-- @slot List item content -->
    <slot />
  </component>
</template>
<script>
import { events } from '../../mixins';

export default {
  name: 'ae-list-item',
  mixins: [events],
  props: {
    /**
     * The color of the list item borders.
     * Select something between: `primary, secondary, neutral, alternative`
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
    },

    /**
     * Used for dynamic components and to work
     * around limitations of in-DOM templates.
     * See: https://vuejs.org/v2/api/#is
     *
     * Default: 'li'
     */
    tag: {
      type: [Object, String],
      default: 'li',
    },

    /**
     * Denotes the target route of the link. When clicked, the value
     * of the 'to' prop will be passed to router.push() internally, so
     * the value can be either a string or a location descriptor object.
     *
     * Works in conjunction with router-link from vue-router
     */
    to: [Object, String],

    /**
     * Disables any reaction to the cursor
     */
    disabled: Boolean,
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/colors';

.ae-list-item {
  display: flex;
  align-items: center;
  list-style: none;
  border-top: 2px solid transparent;
  padding: 0.75rem 0;
  text-decoration: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
}

.ae-list-item.primary {
  border-color: $color-primary-positive-2;
}

.ae-list-item.secondary {
  border-color: $color-secondary-positive-2;
}

.ae-list-item.neutral {
  border-color: $color-neutral-positive-2;
}

.ae-list-item.alternative {
  border-color: $color-alternative-positive-2;
}
</style>
