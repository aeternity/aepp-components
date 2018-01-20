const defaultOptions = {
  timeout: 2500,
  autoDestroy: true
}

export default {
  name: 'ae-banner',
  data: function () {
    return {
      show: false
    }
  },
  props: {
    'options': {
      type: Object
    }
  },
  mounted () {
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

      if (this.allOptions.autoDestroy) {
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
      }, this.allOptions.timeout)
    },
    _clearTimer () {
      if (this.timers) {
        clearTimeout(this.timers)
      }
    }
  },
  computed: {
    hasRightItem () {
      return !!this.$slots.right
    },
    allOptions () {
      return Object.assign({}, defaultOptions, this.options)
    }
  }
}
