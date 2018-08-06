```js
  new Vue({
    data: () => ({ value: undefined }),
    template: `
      <div>
        <ae-amount-input
          placeholder="0.00"
          v-model="value"
          :units="[
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

```vue
<template>
<div>
  <ae-label for="example-amount-input">Label for amount input</ae-label>
  <ae-amount-input id="example-amount-input" />
</div>
</template>
<script>
export default {}
</script>
```
