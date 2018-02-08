<template>
  <div class="ae-input">
    <!-- The content of the left side -->
    <slot name="left" />
    <input
      :id="id"
      :placeholder="placeholder"
      :type="type"
      :class="{ monospace }"
      @input="handleInput"
      :value="value"
    />
    <!-- The content of the right side -->
    <slot name="right" />
  </div>
</template>

<script>
  export default {
    name: 'ae-input',
    props: {
      value: String,
      id: String,
      placeholder: String,
      /**
       * Type of input, possible values: 'password'
       */
      type: {
        type: String,
        validator: (value) => {
          return ['password'].includes(value)
        }
      },
      /**
       * Enables monospace font
       */
      monospace: Boolean
    },
    methods: {
      handleInput (inputEvent) {
        this.$emit('input', inputEvent.target.value)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../variables";

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

      ::placeholder {
        color: $grey;
      }

      &.monospace, &[type=password] {
        font-family: 'Roboto Mono', monospace;
      }
    }
  }
</style>
