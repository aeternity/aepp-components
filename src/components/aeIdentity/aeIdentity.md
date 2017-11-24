```js
<ae-identity></ae-identity>
```

```js
const BN = require('bn.js')
let identity = {
	address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
	balance: new BN('1337000000000000000', 10)
}

<ae-identity :identity="identity" :active="true" :collapsed="false"></ae-identity>
```

```js
const BN = require('bn.js')
let identity = {
	address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
	balance: new BN('1337000000000000000', 10)
}
<ae-identity :identity="identity" :active="false" :collapsed="true"></ae-identity>
```
