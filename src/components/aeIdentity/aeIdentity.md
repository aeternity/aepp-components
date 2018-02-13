Basic identity card
```js
const BN = require('bn.js')
let identity = {
	address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  name: 'John Doe',
	balance: new BN('1337000000000000000', 10)
}

<ae-identity :identity="identity"></ae-identity>
```

Basic active identity card
```js
const BN = require('bn.js')
let identity = {
	address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
	balance: new BN('1337000000000000000', 10)
}

<ae-identity :identity="identity" active></ae-identity>
```

Collapsed identity card
```js
const BN = require('bn.js')
let identity = {
	address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
	balance: new BN('1337000000000000000', 10)
}

<ae-identity :identity="identity" active collapsed>
  <ae-icon name="chevron" type="plain" slot="header-right"/>
</ae-identity>
```

Identity card with button
```js
const BN = require('bn.js')
let identity = {
	address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
	balance: new BN('1337000000000000000', 10)
}

<ae-identity :identity="identity" active>
  <ae-divider type="boring"/>
  <div>
    <ae-button type="boring" size="small" uppercase>Edit</ae-button>
    <ae-button type="boring" size="small" uppercase>Copy</ae-button>
    <ae-button type="dramatic" size="small" uppercase :inactive="active">
      <span v-if="active">Active</span>
      <span v-else>Activate</span>
    </ae-button>
  </div>
</ae-identity>
```

Collapsed identity card with buttons.
```js
const BN = require('bn.js')
let identity = {
	address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
	balance: new BN('1337000000000000000', 10)
}
<ae-identity :identity="identity" collapsed showButtons />
```

Blank identity card
```js
<ae-identity blank active />
```
