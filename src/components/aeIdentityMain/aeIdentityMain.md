Basic identity information
```js
const BN = require('bn.js')
let identity = {
	address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  name: 'My identity',
	balance: new BN('1337000000000000000', 10)
}

<div style="background: black">
  <ae-identity-main :identity="identity" :collapsed="false" />
</div>
```


Collapsed identity information
```js
const BN = require('bn.js')
let identity = {
	address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
	balance: new BN('1337000000000000000', 10)
}

<div style="background: black">
  <ae-identity-main :identity="identity" collapsed />
</div>
```

```js
const BN = require('bn.js')
let identity = {
	address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
	balance: new BN('1337000000000000000', 10),
	name: 'My identity'
}

<div style="background: black">
  <ae-identity-main :identity="identity" collapsed />
</div>
```

Blank identity information
```js
<div style="background: black">
  <ae-identity-main />
</div>
```
