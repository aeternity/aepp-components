<template>
  <div class="ae-phraser" :class="{ error }">
    <span
      class="ae-phraser-error"
      :class="{ active: Boolean(error) }"
      v-if="error"
    >
      {{ error }}
    </span>
    <div :id="label" class="ae-phraser-container">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ae-phraser',
  props: {
    /**
     * Sets the error state for the
     * component, if a string is passed
     * displays a message
     */
    error: [String, Boolean],
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/colors';
@import '../../styles/placeholders/typography';

.ae-phraser {
  padding-left: 1rem;
  border-left: 2px solid transparent;

  &.error {
    border-left-color: $color-error;
  }
}

.ae-phraser-error {
  @extend %face-sans-xs;

  display: inline-block;
  margin-bottom: 0.5rem;

  &.active {
    color: $color-error;
  }
}

.ae-phraser-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  /deep/ > .ae-badge {
    margin-right: 0.25rem;
  }
  /deep/ > .ae-badge:last-child {
    margin-right: 0;
  }
}
</style>
