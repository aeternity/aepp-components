const aeIcons = [
  'arrow',
  'burger',
  'check',
  'chevron',
  'close',
  'error',
  'info',
  'plus'
]
const aeIconTypes = [
  'plain',
  'boring',
  'normal',
  'exciting',
  'dramatic'
]
const iconSvgStrings = aeIcons.map(i => require(`../../assets/icons/${i}.svg`))
export default {
  name: 'ae-icon',
  props: {
    /**
    * Name of icon, possible values: 'arrow', 'burger', 'check', 'chevron', 'close', 'error', 'info', 'plus'
    */
    name: {
      type: String,
      required: true,
      validator: (value) => {
        return aeIcons.find(e => e === value)
      }
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
      return iconSvgStrings[aeIcons.indexOf(this.name)]
    }
  }
}
