import AeButton from '../aeButton/aeButton.vue'
import AeIcon from '../aeIcon/aeIcon.vue'

const aeNotificationTypes = [
  'plain',
  'boring',
  'normal',
  'exciting',
  'dramatic'
]

export default {
  name: 'ae-notification',
  props: {
    /**
     * Type of notification, possible values: 'plain', 'boring', 'normal', 'exciting', 'dramatic'
     */
    type: {
      type: String,
      validator: (value) => {
        return aeNotificationTypes.find(e => e === value)
      },
      default: 'normal'
    }
  },
  components: {
    AeButton,
    AeIcon
  },
  computed: {
    cssClass () {
      return [
        `_type_${this.type}`
      ]
    }
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
