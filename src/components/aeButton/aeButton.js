import AeLink from '../aeLink/aeLink.vue';
import {TYPE_PROPERTY_VALUES as aeButtonTypes} from '@source/core/constants';

const aeButtonSizes = [
  'smaller',
  'small',
  'medium',
  'large'
];
export default {
  name: 'ae-button',
  components: { AeLink },
  props: {
    /**
     * Type of button, possible values: 'boring', 'normal', 'exciting', 'dramatic'
     */
    type: {
      type: String,
      validator: (value) => {
        return typeof (aeButtonTypes.find((e) => e === value)) === 'string';
      },
      default: 'normal'
    },
    /**
     * Size of button, possible values: 'smaller', 'small', 'medium', 'large'
     */
    size: {
      type: String,
      validator: (value) => {
        return aeButtonSizes.find((e) => e === value);
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
    block: {
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
      return !!this.$slots.default;
    },
    hasLabel () {
      return this.hasDefaultSlot;
    },
    sizeModifier () {
      return `_size_${this.size}`;
    },
    typeModifier () {
      return `_type_${this.type}`;
    },
    activeModifier () {
      return `_active_${!this.inactive}`;
    },
    hasLabelModifier () {
      return `_has-label_${this.hasLabel}`;
    },
    invertModifier () {
      return `_invert_${this.invert}`;
    },
    uppercaseModifier () {
      return this.uppercase ? '_uppercase' : '';
    },
    blockModifier () {
      return this.block ? '_block' : '';
    },
    plainModifier () {
      return this.plain || this.size === 'smaller' ? '_plain' : '';
    },
    cssClass () {
      return [
        this.sizeModifier,
        this.typeModifier,
        this.activeModifier,
        this.hasLabelModifier,
        this.invertModifier,
        this.uppercaseModifier,
        this.blockModifier,
        this.plainModifier
      ];
    }
  }
};
