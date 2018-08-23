/**
 * ae-list component
 */
export default {
  /**
   * Component Name
   */
  name: 'ae-list',

  /**
   * Component Properties
   */
  props: {
    /**
     * Space between each item, possible values: 'normal', 'tight'
     */
    packing: {
      type: String,
      validator: (value) => {
        return [
          'normal',
          'tight'
        ].indexOf(value) !== -1
      },
      default: 'normal'
    }
  }
}
