```javascript
new Vue({
  data:{
    inputValue: 'Initial value',
    defaultErrorMessage: 'Some unknown error occurred',
    errorMessages:{
      'ERR01': 'Only digits are allowed'
    }
  },
 template: `
    <ae-text-input-molecule
      label="Number input"
      placeholder="Test input"
      :value="inputValue"
      @clearRequest="onClearRequest"
      @input="onInput"
      @validation="onValidationResult"
      :validateOnBlur="validate"
      :validateOnInput="validate"
      :errorMessages="errorMessages"
      :defaultErrorMessage="defaultErrorMessage"
      validMessage="Value is valid"
    />
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
          if(value.length > 2){
            return 'UNKNOWN';
          }
          else{
            return 'ERR01'   
          }         
        }
      },
      onValidationResult(result){
        this.errMsg = typeof result === 'string' ? result : ''
      }
  }
})
```
