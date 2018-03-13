import { directive as onClickAway } from 'vue-clickaway'
import AeInput from '../aeInput/aeInput.vue'
import AeIcon from '../aeIcon/aeIcon.vue'

/**
 * Input of amount with units drop down
 */
export default {
  name: 'ae-amount-input',
  props: {
    /**
     * Current value, object containing `amount` and `symbol` keys
     */
    value: {
      type: Object,
      default: () => ({ symbol: 'AE' })
    },
    placeholder: undefined,
    /**
     * Array of available units, every unit is object containing `symbol` and `name` keys
     */
    units: {
      type: Array,
      default: () => [
        { symbol: 'AE', name: 'æternity' },
        { symbol: 'ETH', name: 'Ethereum' }
      ]
    }
  },
  data: () => ({
    dropDownVisible: false
  }),
  directives: { onClickAway },
  components: { AeInput, AeIcon },
  methods: {
    handleInput (value) {
      this.$emit('input', { ...this.value, ...value })
    }
  }
}
