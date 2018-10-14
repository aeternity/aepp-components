```js
  new Vue({
    data () { return { address: '' } },
    template: `
      <div>
        <ae-address-input
          placeholder="ak_ ZwJ vvS amb cgp kpa oHc 56K CZJ MZC pnS JFA 5jH MhF DhQ kVd 2n4 3"
          v-model="address"
        />
        Address: {{address}}
      </div>
    `
  })
```
