import {TYPE_PROPERTY_VALUES as types} from '../../core/constants';

export default {
  name: 'ae-identity-background',
  props: {
    type: {
      type: String,
      default: 'normal',
      validator: (value) => types.includes(value)
    }
  },
  computed: {
    typeModifier () {
      return `_type_${this.type}`;
    },
    cssClasses () {
      return [
        'ae-identity-background',
        this.typeModifier
      ];
    }
  }
};
