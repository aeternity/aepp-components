import * as iconSvgStrings from '../../assets/icons'

const aeIconTypes = [
  'plain',
  'boring',
  'normal',
  'exciting',
  'dramatic'
]

export default {
  name: 'ae-icon',
  props: {
    /**
    * Name of icon, possible values: 'arrow', 'burger', 'check', 'chevron', 'close', 'copy', 'error', 'info', 'plus', 'refresh', 'view'
    */
    name: {
      type: String,
      required: true,
      validator: value => !!iconSvgStrings[value]
    },
    /**
    * Type of icon, possible values: 'plain', 'boring', 'normal', 'exciting', 'dramatic'
    */
    type: {
      type: String,
      validator: (value) => {
        return aeIconTypes.find(e => e === value)
      },
      default: 'normal'
    },
    invert: {
      type: Boolean,
      default: false
    },
    /**
     * Rotation of icon in degrees
     */
    rotate: {
      default: 0
    },
    /**
     * Size of icon, possible values: 'small'
     */
    size: {
      type: String,
      validator: value => ['small'].includes(value)
    }
  },
  computed: {
    cssClass () {
      return [
        `_name_${this.name}`,
        `_type_${this.type}`,
        `_invert_${this.invert}`,
        `_size_${this.size}`
      ]
    },
    style () {
      return {
        ...this.rotate && { transform: `rotate(${this.rotate}deg)` }
      }
    },
    iconSvg () {
      return iconSvgStrings[this.name]
    }
  }
}
