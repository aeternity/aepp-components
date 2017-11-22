<template>
  <div class="ae-amount">
    <button type="button" @click="subtract">–</button>
    <input v-model.number="amount" />
    <span>{{symbol}}</span>
    <button type="button" @click="add">+</button>
  </div>
</template>

<script>
  export default {
    name: 'ae-amount',
    props: {
      value: { type: Number, default: 0 },
      min: { type: Number, default: -Infinity },
      max: { type: Number, default: Infinity },
      step: { type: Number, default: 1 },
      symbol: { type: String, default: 'Æ' },
    },
    computed: {
      amount: {
        get() {
          return this.value;
        },
        set(v) {
          const roundval = 1/this.step
          const amount = Math.round(+v * roundval)  / roundval
          if (Number.isNaN(amount) || v < this.min || v > this.max) return;
          this.$emit('input', amount);
        },
      },
    },
    methods: {
      subtract() {
        const newAmount = this.amount - this.step;
        if (newAmount < this.min) return;
        this.amount = newAmount;
      },
      add() {
        const newAmount = this.amount + this.step;
        if (newAmount > this.max) return;
        this.amount = newAmount;
      },
    },
  };
</script>

// eslint-disable-next-line no-unused-expressions, semi
<style scoped src='./aeAmount.scss' lang='scss' />
