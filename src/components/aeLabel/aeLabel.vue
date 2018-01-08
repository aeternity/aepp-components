<template>
  <label class="ae-label">
    <!-- Label content -->
    <slot />
    <span class="help" :class="helpType">
      {{helpText}}
    </span>
  </label>
</template>

<script>
  export default {
    name: 'ae-label',
    props: {
      /**
       * Text of help field
       */
      'help-text': String,
      /**
       * Type of help field, possible values: 'danger'
       */
      'help-type': {
        type: String,
        validator: (value) => {
          return ['danger'].find(e => e === value)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../variables";

  .ae-label {
    display: block;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 25px;

    .help {
      font-size: 13px;
      float: right;
      text-transform: none;
      color: $grey;

      &.danger {
        color: $maegenta;
      }
    }
  }
</style>
