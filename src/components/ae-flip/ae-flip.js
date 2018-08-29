export default {
  name: 'ae-flip',
  data: function () {
    return { rotation: 0 };
  },
  computed: {
    /**
     * Compute the direction of the card
     * @return {String}
     */
    direction: function () {
      if (this.rotation === 0) {
        return false;
      } else if (this.rotation > 0) {
        return 'left';
      } else {
        return 'right';
      }
    }
  },
  methods: {
    /**
     * Called when the user swipes left
     * it also throws an event on swipe
     * @param {{}} ev
     * @return {*|default.methods}
     */
    left: function (ev) {
      if (this.rotation === 180) return;
      this.rotation += 180;
      return this.$emit('swipeleft');
    },

    /**
     * Called when the user swipes right
     * it also throws an event on swipe
     * @param {{}} ev
     * @return {*|default.methods}
     */
    right: function (ev) {
      if (this.rotation === 0) return;
      this.rotation -= 180;
      return this.$emit('swiperight');
    }
  }
};
