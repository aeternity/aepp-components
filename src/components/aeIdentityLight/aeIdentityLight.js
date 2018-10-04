import AeAvatar from '../ae-avatar/ae-avatar.vue';
import helperMixin from '../../core/mixins/helper';
import removeSpacesOnCopy from '../../directives/removeSpacesOnCopy';

/**
 * Displays an Identity with an avatar blockie, the address and an amount of ether
 */
export default {
  name: 'ae-identity-light',
  components: { AeAvatar },
  directives: { removeSpacesOnCopy },
  props: {
    /**
     * An identity name
     */
    name: {
      type: String,
      default: '',
    },
    /**
     * An identity address
     */
    address: {
      type: String,
      default: '0x0',
    },
    /**
     * An identity balance in AE
     */
    balance: {
      type: Number,
      default: 0,
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
    invert: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [
    helperMixin,
  ],
  computed: {
    classObject() {
      return [
        'ae-identity-light',
        this.collapsedModifier,
        this.invert ? '_invert' : '',
      ];
    },
    chunkAddress() {
      const chunks = this.address.match(/.{1,7}/g);
      return [chunks.slice(0, 3), chunks.slice(3)];
    },
    collapsedModifier() {
      return this.collapsed ? '_collapsed' : '';
    },
  },
  filters: {
    shorten: value => value.substr(0, 8),
  },
};
