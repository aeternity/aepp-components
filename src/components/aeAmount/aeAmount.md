```javascript
new Vue({
  data() {
    return {
      amount: 1.337,
      unit: 'Æ'
    }
  },
  template: `
    <ae-amount :value="amount" :unit="unit"/>
  `,
    methods: {
        changeInput: function(newAmount) {
            this.amount = newAmount
        }
    }
})
```
