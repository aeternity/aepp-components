const aeButtonTypes = [
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
    /**
     * Type of button, possible values: 'boring', 'normal', 'exciting', 'dramatic'
     */
    type: {
      type: String,
      validator: (value) => {
        return aeButtonTypes.find(e => e === value)
      },
      default: 'normal'
    },
    /**
     * Size of button, possible values: 'smaller', 'small', 'medium', 'large'
     */
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
    },
    invert: {
      type: Boolean,
      default: false
    },
    uppercase: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    /**
     * Path to go to when clicked
     */
    to: [String, Object]
  },
  computed: {
    hasDefaultSlot () {
      return !!this.$slots.default
    },
    hasLabel () {
      return this.hasDefaultSlot
    },
    sizeModifier () {
      return `_size_${this.size}`
    },
    typeModifier () {
      return `_type_${this.type}`
    },
    activeModifier () {
      return `_active_${!this.inactive}`
    },
    hasLabelModifier () {
      return `_has-label_${this.hasLabel}`
    },
    invertModifier () {
      return `_invert_${this.invert}`
    },
    uppercaseModifier () {
      return this.uppercase ? '_uppercase' : ''
    },
    plainModifier () {
      return this.plain || this.size === 'smaller' ? '_plain' : ''
    },
    cssClass () {
      return [
        this.sizeModifier,
        this.typeModifier,
        this.activeModifier,
        this.hasLabelModifier,
        this.invertModifier,
        this.uppercaseModifier,
        this.plainModifier
      ]
    }
  }
}
