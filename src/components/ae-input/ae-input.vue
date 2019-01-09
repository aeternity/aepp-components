<template>
  <div class="ae-input-container" :class="{ focus, error }">
    <div class="ae-input-box">
      <!-- @slot used for defining header section of input -->
      <div class="ae-input-header" v-if="label">
        <label :for="id" class="ae-input-label">
          {{ label }}
        </label>
        <slot name="header" />
      </div>
      <!-- Input tag -->
      <input
        class="ae-input"
        :class="{ aemount }"
        :id="id"
        :value="value"
        @focus="focus = true"
        @blur="focus = false"
        @input="propagateEventValue"
        v-if="!$slots.default && !$scopedSlots.default"
        v-bind="$attrs"
      />
      <!--
        @slot adds the ability to add your own
        custom input elements, if used in combination
        with `scoped slots` (see https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots)
        gives you the parent `context` as a property where
        you can access methods / properties
      -->
      <slot
        :context="this"
        v-else
      />
    </div>
    <!-- @slot footer slot, used for adding elements below the input -->
    <slot name="footer" />
  </div>
</template>
<script>
import { events } from '../../mixins';

export default {
  name: 'ae-input',
  mixins: [events],
  data() {
    return { focus: false };
  },
  props: {
    /**
     * ID of the component/input
     */
    id: String,

    /**
     * Actual input element value
     */
    value: [String, Number],

    /**
     * Property to define label of input, used to set
     * label
     */
    label: String,

    /**
     * Activates the amount state of the component
     */
    aemount: Boolean,

    /**
     * Activates the Address state of the component
     */
    aeddress: Boolean,

    /**
     * Activates error state of the input field
     */
    error: Boolean,
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/globals/mixins';
@import '../../styles/variables/animations';
@import '../../styles/variables/colors';
@import '../../styles/placeholders/typography';

.ae-input-container {
  user-select: none;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  transition: all $base-transition-time;

  &.focus, &.error {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &.focus {
    border-left: 2px solid $color-focus;
    caret-color: $color-focus;
  }
  &.focus .ae-input-label {
    color: $color-focus;
  }
  &.error {
    border-left: 2px solid $color-error;
    caret-color: $color-error;
  }
  &.error .ae-input-label {
    color: $color-error;
  }

  &.focus .ae-input-label:after,
  &.error .ae-input-label:after {
    content: '*';
  }
}

.ae-input-box {
  display: flex;
  flex-direction: column;
  background: $color-neutral-positive-3;
  min-height: 4rem;
}

.ae-input-header {
  position: relative;
  display: flex;
  flex: 0 0;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  padding: 0.5rem 1rem 0 1rem;
}

.ae-input-label {
  @extend %face-sans-xs;

  color: $color-neutral-negative-1;
}

.ae-input {
  @extend %face-sans-base;
  @include placeholder-color($color-neutral-negative-1);

  align-self: center;
  justify-self: center;
  flex: 0 1 100%;
  width: 100%;
  padding: 0.5rem 1rem;
  background: transparent;
  border: none;
  outline: none;

  &:only-child {
    flex: 1 0;
  }
}

.ae-input.aemount {
  @extend %face-mono-xl;

  text-align: center;
  line-height: 1;
  font-weight: 300;
}
</style>
