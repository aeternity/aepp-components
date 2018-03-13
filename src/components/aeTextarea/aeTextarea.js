export default {
  name: 'ae-textarea',
  props: {
    value: undefined,
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
