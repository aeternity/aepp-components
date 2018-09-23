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
     * Select something between: `neutral, default, emphasis, alternative`
     * fallback: `neutral`
     */
    fill: {
      type: String,
      default: 'neutral',
      validator: function (value) {
        return [
          'neutral',
          'default',
          'alternative',
          'emphasis'
        ].indexOf(value) !== 1;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  .ae-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    border-top: 2px solid transparent;
    padding: rem(12px) 0;
  }

  .ae-list-item.neutral {
    border-color: $color-neutral-positive-2;
  }

  .ae-list-item.default {
    border-color: $color-default-positive-2;
  }

  .ae-list-item.alternative {
    border-color: $color-alternative-positive-2;
  }

  .ae-list-item.emphasis {
    border-color: $color-emphasis-positive-2;
  }
</style>
