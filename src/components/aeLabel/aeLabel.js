import { TYPE_PROPERTY_VALUES as types } from '../../constants'

export default {
  name: 'ae-label',
  props: {
    /**
     * Text of help field
     */
    'help-text': String,
    /**
     * Type of help field, possible values: 'boring', 'normal', 'exciting', 'dramatic'
     */
    'help-type': {
      type: String,
      default: 'normal',
      validator: value => types.includes(value)
    }
  },
  computed: {
    typeModifier () {
      return `_type_${this.helpType}`
    }
  }
}
