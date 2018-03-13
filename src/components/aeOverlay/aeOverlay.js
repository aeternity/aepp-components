export default {
  name: 'ae-overlay',
  mounted () {
    document.body.style.overflow = 'hidden'
  },
  destroyed () {
    document.body.style.overflow = ''
  },
  methods: {
    click (e) {
      /**
       * Click event
       *
       * @event click
       * @type {MouseEvent}
       */
      this.$emit('click', e)
    }
  }
}
