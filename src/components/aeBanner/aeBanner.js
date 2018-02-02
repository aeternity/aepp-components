import AeButton from '../aeButton/aeButton.vue'

export default {
  name: 'ae-banner',
  components: {
    AeButton
  },
  methods: {
    close (e) {
      /**
       * Close event
       *
       * @event close
       * @type {MouseEvent}
       */
      this.$emit('close', e)
    }
  }
}
