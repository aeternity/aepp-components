<template>
  <div class="ae-amount-input">
    <button type="button" @click="subtract">–</button>
    <input v-model.number="amount" />
    <span>{{symbol}}</span>
    <button type="button" @click="add">+</button>
  </div>
</template>

<script>
  /**
   * Displays an Æ-Amount with buttons to increase and decrease the value
   */
  export default {
    name: 'ae-amount-input',
    props: {
      /**
      * The amount of Æ to display
      */
      value: { type: Number, default: 0 },
      /**
      * the smallest value this component can display
      */
      min: { type: Number, default: -Infinity },
      /**
      * the largest value this component can display
      */
      max: { type: Number, default: Infinity },
      /**
      * value will get incremented/subtracted by this value
      */
      step: { type: Number, default: 1 },
      /**
      * the currency symbol to display
      */
      symbol: { type: String, default: 'Æ' }
    },
    computed: {
      amount: {
        get () {
          return this.value
        },
        set (v) {
          const roundval = 1 / this.step
          const amount = Math.round(+v * roundval) / roundval
          if (Number.isNaN(amount) || v < this.min || v > this.max) return
          this.$emit('input', amount)
        }
      }
    },
    methods: {
      subtract () {
        const newAmount = this.amount - this.step
        if (newAmount < this.min) return
        this.amount = newAmount
      },
      add () {
        const newAmount = this.amount + this.step
        if (newAmount > this.max) return
        this.amount = newAmount
      }
    }
  }
</script>

// eslint-disable-next-line no-unused-expressions, semi
<style scoped src='./aeAmount.scss' lang='scss' />
