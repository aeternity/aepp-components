export default {
  name: 'ae-banner',
  data: function () {
    return {
      show: false
    }
  },
  props: {
    /*
     * Set if the banner should automatically closed
     */
    'autoDestroy': {
      type: Boolean,
      default: true
    },
    /*
     * Set the banner display timeout
     */
    'timeout': {
      type: Number,
      default: 2500
    }
  },
  methods: {
    /**
     * Show the banner
     *
     * @public
     */
    showBanner () {
      if (this.show) {
        return
      }
      this.show = true

      if (this.autoDestroy) {
        this._startLazyDestroy()
      }
    },
    /**
     * Hide the banner
     *
     * @public
     */
    hideBanner () {
      if (!this.show) {
        return
      }
      this._clearTimer()
      this.show = false
    },
    _startLazyDestroy () {
      this.timers = setTimeout(() => {
        this.hideBanner()
      }, this.timeout)
    },
    _clearTimer () {
      if (this.timers) {
        clearTimeout(this.timers)
      }
    }
  }
}
