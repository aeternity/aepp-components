```js
  new Vue({
    data () { return { address: '' } },
    template: `
      <div>
        <ae-address-input
          placeholder="0x00000 0000000 0000000\n0000000 0000000 0000000"
          v-model="address"
        />
        Address: {{address}}
      </div>
    `
  })
```
