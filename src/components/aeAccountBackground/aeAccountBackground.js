import {TYPE_PROPERTY_VALUES as types} from '../../constants'

export default {
  name: 'ae-account-background',
  props: {
    type: {
      type: String,
      default: 'normal',
      validator: value => types.includes(value)
    }
  },
  computed: {
    typeModifier () {
      return `_type_${this.type}`
    },
    cssClasses () {
      return [
        'ae-account-background',
        this.typeModifier
      ]
    }
  }
}
