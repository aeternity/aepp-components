```javascript
new Vue({
  data() {
    return {
      amount: 1.337,
      step: 0.01
    }
  },
  template: `
    <ae-amount-input :value="amount" :step="step" :symbol="'ETH'" @input='changeInput' />
  `,
    methods: {
        changeInput: function(newAmount) {
            this.amount = newAmount
        }
    }
})
```
