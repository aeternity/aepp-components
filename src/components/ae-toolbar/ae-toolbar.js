/**
 * ae-toolbar component
 */
export default {
  /**
   * Component Name
   */
  name: 'ae-toolbar',

  /**
   * Component Props
   */
  props: {
    /**
     * Select
     */
    mode: {
      type: String,
      validator: function (value) {
        return [
          'primary',
          'secondary'
        ].indexOf(value) !== -1
      }
    },

    /**
     * Arranges the flow of the buttons inside the toolbar.
     * Available options are: `left, center, right, justify`
     */
    align: {
      type: String,
      validator: function (value) {
        return [
          'left',
          'center',
          'right',
          'justify'
        ].indexOf(value) !== -1
      }
    },

    /**
     * Is Active or Inactive
     */
    disabled: Boolean,

    /**
     * Minimalistic view
     */
    minimal: Boolean
  },

  /**
   * Component Methods
   */
  methods: {}
}
