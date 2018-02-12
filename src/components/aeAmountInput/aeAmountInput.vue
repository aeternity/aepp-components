<template>
  <div class="ae-amount-input">
    <ae-input
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
        @click="dropDownVisible = !dropDownVisible">
        {{value.symbol}} <ae-icon name="chevron-down" />
      </button>
    </ae-input>
    <div
      v-if="dropDownVisible"
      class="drop-down"
      @click="dropDownVisible = false"
      v-on-click-away="() => dropDownVisible = false"
    >
      <button
        v-for="t in tokens"
        @click="handleInput({ symbol: t.symbol })"
      >
        {{t.symbol}} ({{t.name}})
      </button>
    </div>
  </div>
</template>

<script>
  import { directive as onClickAway } from 'vue-clickaway'
  import AeInput from '../aeInput/aeInput.vue'
  import AeIcon from '../aeIcon/aeIcon.vue'

  /**
   * Input of amount of tokens
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
       * Array of available tokens, every token is object containing `symbol` and `name` keys
       */
      tokens: {
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
</script>

<style lang="scss">
  @import "../variables";

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
