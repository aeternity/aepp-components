<template>
  <div class="ae-switch">
    <template v-for='c in choices'>
      <input
        v-model='selected'
        :value='c.value'
        type="radio"
        :name="name"
        :id="c.value"
        :key="c.value"
      />
      <label :for='c.value' :key="`${c.value}-label`">{{c.label}}</label>
    </template>
  </div>
</template>
<script>
export default {
  name: 'ae-switch',
  props: {
    name: String,
    choices: Array,
    default: {},
  },
  data() {
    return {
      selected: null,
    };
  },
  watch: {
    selected(newSelected) {
      this.$emit('input', newSelected);
    },
  },
  mounted() {
    if (this.default) {
      this.selected = this.default;
    } else if (this.choices.length) {
      this.selected = this.choices[0].value;
    }
  },
};
</script>
<style lang="scss" scoped>
@import '../../styles/fallback/variables';

.ae-switch {
  display: flex;
  justify-content: center;

  $padding-horizontal: 14px;

  input {
    display: none;

    &:checked + label {
      color: $maegenta;

      &:after {
        content: "";
        display: block;
        border-bottom: 4px solid $maegenta;
        position: absolute;
        bottom: -3px;
        width: calc(100% - #{$padding-horizontal} * 2);
      }
    }
  }

  label {
    position: relative;
    display: inline-block;
    color: $grey;
    white-space: nowrap;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-shadow: none;
    padding: 6px $padding-horizontal;
    border-bottom: 2px solid #f0f0f0;
    letter-spacing: 0.5px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
