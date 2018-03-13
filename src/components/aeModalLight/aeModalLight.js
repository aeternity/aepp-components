import AeOverlay from '../aeOverlay/aeOverlay.vue'
import AeButton from '../aeButton/aeButton.vue'
import AeIcon from '../aeIcon/aeIcon.vue'

export default {
  name: 'ae-modal-light',
  props: {
    /**
     * Modal title
     */
    title: String
  },
  components: { AeOverlay, AeButton, AeIcon },
  methods: {
    close () {
      /**
       * Close event
       *
       * @event close
       * @type {undefined}
       */
      this.$emit('close')
    }
  }
}
