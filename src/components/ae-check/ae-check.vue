<template>
  <label class="ae-check">
    <input :type="type" :name="name" :value="value" :disabled="disabled">
      :id="id"
    <span class="indicator">
      ✓
    </span>
  </label>
</template>
<script>
export default {
  name: 'ae-check',
  props: {
    /**
     * ID of the component/input
     */
    id: String,

    /**
     * Name of component
     */
    name: String,

    /**
     * value of component
     */
    value: Boolean,

    /**
     * Define the type of the input
     */
    type: {
      type: String,
      default: 'checkbox',
    },

    /**
     * Puts the component in disabled state
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/variables/colors';
@import '../../styles/variables/animations';
@import '../../styles/variables/typography';
@import '../../styles/globals/functions';

.ae-check {
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  > input[type="radio"],
  > input[type="checkbox"] {
    display: none;
    visibility: hidden;
  }

  > input[type="radio"]:checked + .ae-check-button:before,
  > input[type="checkbox"]:checked + .ae-check-button:before {
    background: $color-primary;
    border-color: $color-primary;
  }

  > input[type="radio"]:checked + .ae-check-button:after,
  > input[type="checkbox"]:checked + .ae-check-button:after {
    opacity: 1;
  }

  > input[type="radio"]:disabled + .ae-check-button:before,
  > input[type="checkbox"]:disabled + .ae-check-button:before {
    background: $color-neutral-positive-1;
    border-color: $color-neutral-positive-2;
  }

  > input[type="radio"]:disabled + .ae-check-button,
  > input[type="checkbox"]:disabled + .ae-check-button {
    cursor: not-allowed;
  }
}

.ae-check-button {
  @include size(24px);
  @extend %face-sans-base;

  position: relative;
  display: inline-block;
  padding-left: rem(32px);
  min-width: rem(32px);
  min-height: rem(24px);
  transition: all $base-transition-time;

  &:before, &:after {
    position: absolute;
    display: inline-block;
    content: ' ';
    top: 0;
    bottom: 0;
    left: 0;
    transition: all $base-transition-time;
  }

  &:before {
    @include size(24px);

    background: $color-white;
    border: 2px solid $color-neutral-positive-1;
    border-radius: 50%;
    box-shadow: 0 0 16px $color-shadow-alpha-15;
  }

  &:after {
    @include size(24px);

    background: url("./images/check.svg") no-repeat center;
    background-size: rem(12px);
    opacity: 0;
  }
}
</style>
