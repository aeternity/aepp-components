```javascript
new Vue({
  data() {
    return {
      value: '1337',
      receivedValue: undefined
    }
  },
  template: `
    <div>
      <ae-address-input :value="value" @input='changeInput' />
      <p v-if="!!receivedValue">Input event value: {{receivedValue}}<p>
    </div>
  `,
    methods: {
        changeInput: function(newAmount) {
            this.value = newAmount
            this.receivedValue = newAmount
        }
    }
})
