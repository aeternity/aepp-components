<template>
  <textarea
    class="ae-textarea"
    :class="{ monospace }"
    @input="handleInput"
    @copy="handleCopy"
  >{{value}}</textarea>
</template>

<script>
  export default {
    name: 'ae-textarea',
    props: {
      value: String,
      /**
       * Enables monospace font
       */
      monospace: Boolean
    },
    methods: {
      handleInput (inputEvent) {
        this.$emit('input', inputEvent.target.value)
      },
      handleCopy (clipboardEvent) {
        this.$emit('copy', clipboardEvent)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../variables";

  .ae-textarea {
    display: block;
    width: 100%;
    min-height: 110px;
    max-height: 300px;
    box-sizing: border-box;
    border-radius: 10px;
    border: solid 2px $silver;
    padding: 14px 26px;
    margin: 10px 0 30px 0;

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
</style>
