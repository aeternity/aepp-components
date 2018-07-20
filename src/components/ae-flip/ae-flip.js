/**
 * ae-flip component
 */
export default {
  /**
   * Component Name
   */
  name: 'ae-flip',

  /**
   * Component Data
   */
  data: function () {
    return { rotation: 0 }
  },

  /**
   * Computed Properties
   */
  computed: {
    /**
     * Compute the direction of the card
     */
    direction: function () {
      if (this.rotation === 0) {
        return false
      } else if (this.rotation > 0) {
        return 'left'
      } else {
        return 'right'
      }
    }
  },

  /**
   * Component Methods
   */
  methods: {
    /**
     * Called when the user swipes left
     * it also throws an event on swipe
     */
    left: function (ev) {
      if (this.rotation === 180) return
      this.rotation += 180
      return this.$emit('swipeleft')
    },

    /**
     * Called when the user swipes right
     * it also throws an event on swipe
     */
    right: function (ev) {
      if (this.rotation === 0) return
      this.rotation -= 180
      return this.$emit('swiperight')
    }
  }
}
