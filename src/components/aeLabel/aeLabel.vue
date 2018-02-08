<template>
  <label class="ae-label">
    <div class="content">
      <!-- Label content -->
      <slot />
    </div>
    <div class="help" :class="helpType">
      {{helpText}}
    </div>
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
    display: flex;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 25px;
    margin-bottom: 10px;
    align-items: center;
    line-height: 28px;

    .content {
      flex-grow: 1;
    }

    .help {
      font-size: 13px;
      text-align: right;
      text-transform: none;
      color: $grey;
      margin-left: 5px;
      line-height: 14px;

      &.danger {
        color: $dramatic;
      }
    }
  }
</style>
