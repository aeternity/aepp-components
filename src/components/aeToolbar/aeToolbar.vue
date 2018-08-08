<template>
  <div class="ae-toolbar" :class="{ [fill]: true, disabled }">
    <!-- @slot toolbar content -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ae-toolbar',
  props: {
    /**
     * Fill property changes the color state of the toolbar
     * select something between: `neutral, default, emphasis, alternative`
     */
    fill: {
      type: String,
      default: '',
      validator: value => ['neutral', 'neutral-dark', 'emphasis', 'alternative'].includes(value)
    },
    /**
     * Is Active or Inactive
     */
    disabled: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';
@import '../typography';

.ae-toolbar {
  @extend %text-uppercase-xs;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-direction: row;
  height: rem(32px);
  align-items: center;
  padding: 0 rem(16px);
  font-weight: 500;
  background: $color-default-negative-2;
  color: $color-white;

  &.neutral {
    background: $color-neutral-positive-2;
    color: $color-neutral-negative-1;
  }

  &.neutral-dark {
    background: $color-neutral-minimum;
    color: $color-white;
  }

  &.emphasis {
    background: $color-emphasis-negative-2;
    color: $color-white;
  }

  &.alternative {
    background: $color-alternative-negative-2;
    color: $color-white;
  }

  &.disabled {
    cursor: not-allowed;
    color: rgba($color-white, 0.5);
  }
}
</style>

<docs>
```vue
<ae-toolbar>content</ae-toolbar>
```

  prop: fill
```vue
<div>
  <ae-toolbar fill="neutral">neutral</ae-toolbar>
  <ae-toolbar fill="neutral-dark">neutral-dark</ae-toolbar>
  <ae-toolbar fill="emphasis">emphasis</ae-toolbar>
  <ae-toolbar fill="alternative">alternative</ae-toolbar>
</div>
```

prop: disabled
```vue
<ae-toolbar disabled>disabled</ae-toolbar>
```
</docs>
