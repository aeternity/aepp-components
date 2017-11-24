import AeCloseButton from '../aeCloseButton/aeCloseButton.vue'

const aeNotificationTypes = [
  'plain',
  'boring',
  'normal',
  'exciting',
  'dramatic'
]

export default {
  name: 'ae-notification',
  props : {
    type: {
      type: String,
      validator: (value) => {
        return aeNotificationTypes.find(e => e === value)
      },
      default: 'normal'
    },
  },
  components: { AeCloseButton },
  computed: {
    cssClass () {
      return [
        `_type_${this.type}`,
      ]
    }
  },
  methods: {
    close (e) {
      this.$emit('close', e)
    }
  }
}
