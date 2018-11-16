<template>
  <div class="ae-input">
    <!-- @slot The content of the left side -->
    <slot name="left" />
    <input
      :id="id"
      :placeholder="placeholder"
      :type="type"
      :step="type === 'number' && 'any'"
      :class="{ monospace }"
      @input="handleInput"
      :value="value"
    />
    <!-- @slot The content of the right side -->
    <slot name="right" />
  </div>
</template>
<script>
export default {
  /**
   * Component NAme
   */
  name: 'ae-input',

  /**
   * Component Props
   */
  props: {
    /**
     * Input Value
     */
    value: undefined,

    /**
     * Defines the Input ID
     */
    id: String,

    /**
     * Input placeholder
     */
    placeholder: String,

    /**
     * Type of input, possible values: 'password', 'number'
     */
    type: {
      type: String,
      validator: value => ['password', 'number'].includes(value),
    },

    /**
     * Enables monospace font
     */
    monospace: Boolean,
  },

  /**
   * Component Methods
   */
  methods: {
    handleInput(inputEvent) {
      this.$emit('input', inputEvent.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/fallback/variables';
@import '../../styles/variables/typography';

.ae-input {
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  border: solid 2px $silver;
  padding: 0 13px;
  margin: 10px 0 30px 0;
  overflow: hidden;
  background-color: $white;

  input {
    display: block;
    flex-grow: 1;
    min-width: 0;
    padding: 14px 13px;
    border: none;
    font-weight: 500;
    line-height: 1.63;
    letter-spacing: 0.2px;
    color: $anthracite;
    font-family: $font-mono;

    &::placeholder {
      color: $grey;
    }

    &.monospace, &[type=password] {
      font-family: $font-mono;
    }

    &[type=number] {
      -moz-appearance: textfield;

      &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
}
</style>
