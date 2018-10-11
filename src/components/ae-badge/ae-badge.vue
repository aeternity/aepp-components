<template>
  <div class="ae-badge" :class="{ disabled }">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'ae-badge',
  props: {
    /**
     * 'disabled' state of the badge
     */
    disabled: Boolean,
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/colors';
@import '../../styles/placeholders/typography';

.ae-badge {
  @extend %face-mono-s;

  user-select: none;
  display: inline-flex;
  padding: 0 rem(8px);
  height: 32px;
  align-items: center;
  justify-content: space-between;
  background: $color-neutral-positive-2;
  border-radius: 4px;
  color: $color-neutral-negative-3;
  font-weight: 400;
  margin-bottom: rem(4px);

  &.disabled {
    background: $color-white;
    border: 2px solid $color-neutral-positive-3;
    cursor: not-allowed;
    color: $color-neutral-positive-1;
  }
}
</style>
