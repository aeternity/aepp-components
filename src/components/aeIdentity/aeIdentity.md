Basic identity information
```js
const BN = require('bn.js')
let identity = {
	address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  name: 'John Doe',
	balance: new BN('1337000000000000000', 10)
}

<div style="background: black">
  <ae-identity :identity="identity"></ae-identity>
</div>
```


Collapsed identity card
```js

const BN = require('bn.js')
let identity = {
	address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
	balance: new BN('1337000000000000000', 10)
}

<div style="background: black">
  <ae-identity :identity="identity" active collapsed/>
</div>

```

Blank identity information
```js
<div style="background: black">
  <ae-identity blank active />
</div>
```
