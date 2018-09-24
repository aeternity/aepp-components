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
