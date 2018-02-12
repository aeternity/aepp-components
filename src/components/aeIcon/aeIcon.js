import * as iconSvgStrings from '../../assets/icons'

const aeIconTypes = [
  'plain',
  'boring',
  'normal',
  'exciting',
  'dramatic'
]

iconSvgStrings['chevron-down'] = iconSvgStrings['chevronDown']

export default {
  name: 'ae-icon',
  props: {
    /**
    * Name of icon, possible values: 'arrow', 'burger', 'check', 'chevron', 'chevron-down', 'close', 'error', 'info', 'plus', 'refresh'
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
    }
  },
  computed: {
    cssClass () {
      return [
        `_name_${this.name}`,
        `_type_${this.type}`,
        `_invert_${this.invert}`
      ]
    },
    iconSvg () {
      return iconSvgStrings[this.name]
    }
  }
}
