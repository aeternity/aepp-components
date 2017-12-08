```javascript
new Vue({
  data:{
    inputValue: 'Initial value',
    maxCharCount: 300
  },
 template: `
    <div>
      <ae-text-input placeholder="Test input" :value="inputValue" @clearRequest="onClearRequest" @input="onInput"/>
      <p>{{remainingCharCount}} characters remaining</p>
    </div>
  `,
  computed:{
    remainingCharCount: function(){
      return this.maxCharCount - this.inputValue.length;
    }
  },
  methods: {
      onClearRequest: function() {
          this.inputValue = ''
          console.log('ae-text-input / cleared value')
      },
      onInput: function(value){
        this.inputValue = value
      }
  }
})
```
