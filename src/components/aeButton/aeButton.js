const aeButtonTypes = [
  'plain',
  'boring',
  'normal',
  'exciting',
  'dramatic'
]
const aeButtonSizes = [
  'smaller',
  'small',
  'medium',
  'large'
]
export default {
  name: 'ae-button',
  props: {
    type: {
      type: String,
      validator: (value) => {
        return aeButtonTypes.find(e => e === value)
      },
      default: 'normal'
    },
    size: {
      type: String,
      validator: (value) => {
        return aeButtonSizes.find(e => e === value)
      },
      default: 'medium'
    },
    inactive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasDefaultSlot () {
      return !!this.$slots.default
    },
    cssClass () {
      return [
        `_size_${this.size}`,
        `_type_${this.type}`,
        `_active_${!this.inactive}`,
        `_has_label_${this.hasDefaultSlot}`,
      ]
      //'_inactive': !this.active
    }
  }
}
