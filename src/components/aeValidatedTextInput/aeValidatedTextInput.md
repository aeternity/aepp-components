```javascript
new Vue({
  data:{
    inputValue: 'Initial value',
    errMsg:''
  },
 template: `
  <div>
      <ae-validated-text-input
        placeholder="Test input"
        :value="inputValue"
        @clearRequest="onClearRequest"
        @input="onInput"
        @validation="onValidationResult"
        :validateOnBlur="validate"
        :validateOnInput="validate"
      />
      <p>{{errMsg}}</p>
  </div>
  `,
  methods: {
      onClearRequest: function() {
          this.inputValue = ''
          console.log('ae-validated-text-input / cleared value')
      },
      onInput: function(value){
        this.inputValue = value
      },
      validate(value){
        const inValid = /\D/.test(value)
        if(inValid){
         return 'Only digits are allowed'
        }
      },
      onValidationResult(result){
        this.errMsg = typeof result === 'string' ? result : ''
      }
  }
})
```
