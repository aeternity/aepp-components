<template>
    <li class="ae-list-item" :class="{ [fill]: Boolean(fill) }">
      <slot />
    </li>
</template>
<script>
export default {
  name: 'ae-list-item',
  props: {
    /**
     * Fill property changes the color of the borders.
     * Select something between: `primary, secondary, neutral, alternative`
     * fallback: `neutral`
     */
    fill: {
      type: String,
      default: 'neutral',
      validator: value => [
        'primary',
        'secondary',
        'neutral',
        'alternative',
      ].includes(value),
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/colors';

.ae-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border-top: 2px solid transparent;
  padding: 0.75rem 0;
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
