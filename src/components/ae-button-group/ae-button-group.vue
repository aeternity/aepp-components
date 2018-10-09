<template>
    <div class="ae-button-group" :class="{ shadow }">
      <slot />
    </div>
</template>
<script>
export default {
  name: 'ae-button-group',
  props: {
    /**
     * Apply shadow to the button group, applicable only for round buttons
     * shadow has a 32px roundness
     */
    shadow: Boolean,
  },
};
</script>
<style lang="scss" scoped>
  @import '../../styles/globals';

  .ae-button-group {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  .ae-button-group.shadow {
    box-shadow: 0 0 16px $color-shadow-alpha-15;
    border-radius: 32px;
  }

  .ae-button-group /deep/ .ae-button {
    width: 100%;
    border-radius: 0;
    border: 0;
    box-shadow: none;
    flex-grow: 1;
  }

  .ae-button-group /deep/ .ae-button.round {
    border-left-width: 1px;
    border-right-width: 1px;
    border-style: solid;

    &:first-child {
      @include border-radius-separate(32px, 0, 0, 32px);

      border-left-width: 0;
      border-right-width: 1px;
    }
    &:last-child {
      @include border-radius-separate(0, 32px, 32px, 0);

      border-right-width: 0;
      border-left-width: 1px;
    }
  }

  .ae-button-group /deep/ .ae-button.primary {
    border-color: $color-primary-negative-1;
  }

  .ae-button-group /deep/ .ae-button.secondary {
    border-color: $color-secondary-negative-1;
  }

  .ae-button-group /deep/ .ae-button.neutral {
    border-color: $color-neutral-positive-2;
  }

  .ae-button-group /deep/ .ae-button.alternative {
    border-color: $color-alternative-negative-1;
  }
</style>
