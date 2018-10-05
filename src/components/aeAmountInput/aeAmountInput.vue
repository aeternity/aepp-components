<template>
  <div class="ae-amount-input">
    <ae-input
      :id="id"
      type="number"
      monospace
      :value="value.amount"
      :placeholder="placeholder"
      @input="amount => handleInput({ amount })"
    >
      <div slot="left" class="side" />
      <button
        slot="right"
        class="side"
        type="button"
        @click="toggleDropDown() ">
        {{value.symbol}} <ae-icon name="chevron" rotate="90" v-if="unitsCount > 1" />
      </button>
    </ae-input>
    <div
      v-if="dropDownVisible"
      class="drop-down"
      @click="dropDownVisible = false"
      v-on-click-away="() => dropDownVisible = false"
    >
      <button
        v-for="u in units"
        :key="u.symbol"
        @click="handleInput({ symbol: u.symbol })"
      >
        {{u.symbol}} ({{u.name}})
      </button>
    </div>
  </div>
</template>

<script>
import { directive as onClickAway } from 'vue-clickaway';
import AeInput from '../aeInput/aeInput.vue';
import AeIcon from '../ae-icon/ae-icon.vue';

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
      default: () => ({ symbol: this.getUnits }),
    },
    id: undefined,
    placeholder: undefined,
    /**
     * Array of available units, every unit is object containing `symbol` and `name` keys
     */
    units: {
      type: Array,
      default: () => [
        { symbol: 'AE', name: 'æternity' },
        { symbol: 'ETH', name: 'Ethereum' },
      ],
    },
  },
  data: () => ({
    dropDownVisible: false,
  }),
  directives: { onClickAway },
  components: { AeInput, AeIcon },
  methods: {
    handleInput(value) {
      this.$emit('input', { ...this.value, ...value });
    },
    toggleDropDown() {
      if (this.unitsCount > 1) {
        this.dropDownVisible = !this.dropDownVisible;
      }
    },
  },
  mounted() {
    this.value.symbol = this.units[0].symbol;
  },
  computed: {
    unitsCount() {
      const count = this.units.length;
      return count;
    },
    getUnits() {
      return this.units[0].symbol;
    },
  },
};
</script>

<style lang="scss">
  @import '../../styles/variables/old_vars';

  .ae-amount-input {
    position: relative;

    button {
      display: block;
      border: none;
      background: transparent;
      padding: 0;
    }

    .ae-input {
      input.monospace {
        text-align: center;
        font-size: 40px;
        font-weight: 300;
        line-height: normal;
        padding-top: 8px;
        padding-bottom: 8px;
      }

      .side {
        width: 55px;
        flex-shrink: 0;
      }

      button.side {
        font-size: 14px;

        .ae-icon {
          vertical-align: middle;
          width: 20px;
          height: 20px;
        }
      }
    }

    .drop-down {
      border-radius: 10px;
      background-color: $white;
      box-shadow: 0 2px 8px 0 rgba($dark, 0.1);
      position: absolute;
      width: 100%;
      overflow: hidden;
      margin-top: -30px;
      z-index: 1;

      button {
        width: 100%;
        text-align: center;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        color: $black;

        &:hover {
          background-color: $smoke;
        }
      }
    }
  }
</style>
