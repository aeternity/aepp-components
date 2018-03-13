export default {
  name: 'ae-input',
  props: {
    value: undefined,
    id: undefined,
    placeholder: undefined,
    /**
     * Type of input, possible values: 'password', 'number'
     */
    type: {
      type: String,
      validator: value => {
        return ['password', 'number'].includes(value)
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
