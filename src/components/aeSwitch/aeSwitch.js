export default {
  name: 'ae-switch',
  props: {
    name: String,
    choices: Array,
    default: {}
  },
  data() {
    return {
      selected: null
    };
  },
  watch: {
    selected(newSelected) {
      this.$emit('input', newSelected);
    }
  },
  mounted() {
    if (this.default) {
      this.selected = this.default;
    } else if (this.choices.length) {
      this.selected = this.choices[0].value;
    }
  }
};
