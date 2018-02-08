<template>
  <textarea
    v-if="type === 'textarea'"
    :class="className"
    @input="handleInput"
  >{{value}}</textarea>
  <input
    v-else
    :type="type"
    :class="className"
    @input="handleInput"
    :value="value"
  />
</template>

<script>
  export default {
    name: 'ae-input',
    props: {
      value: String,
      /**
       * Type of input, possible values: 'textarea', 'password'
       */
      type: {
        type: String,
        validator: (value) => {
          return ['textarea', 'password'].includes(value)
        }
      },
      /**
       * Enables monospace font
       */
      monospace: Boolean
    },
    computed: {
      className () {
        return {
          'ae-input': true,
          monospace: this.monospace
        }
      }
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
    display: block;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    border: solid 2px $normal;
    padding: 14px 26px;
    margin: 10px 0 30px 0;

    font-weight: 500;
    line-height: 1.63;
    letter-spacing: 0.2px;
    color: $darker;

    ::placeholder {
      color: $grey;
    }

    &.monospace, &[type=password] {
      font-family: 'Roboto Mono', monospace;
    }
  }

  textarea.ae-input {
    min-height: 110px;
    max-height: 300px;
    resize: vertical;
  }
</style>
