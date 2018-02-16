```js
  new Vue({
    data: () => ({ value: undefined }),
    template: `
      <div>
        <ae-amount-input
          placeholder="0.00"
          v-model="value"
          :tokens="[
            { symbol: 'AE', name: 'æternity' },
            { symbol: 'ETH', name: 'Ethereum' },
            { symbol: 'EX', name: 'Example' }
          ]"
        />
        Value: {{value}}
      </div>
    `
  })
```
