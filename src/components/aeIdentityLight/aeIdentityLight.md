Basic identity information
```js
const BN = require('bn.js')
const identity = {
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  name: 'My identity',
  balance: new BN('1337000000000000000', 10)
}

<ae-identity-light :identity="identity" :collapsed="false" />
```


Collapsed identity information
```js
const BN = require('bn.js')
const identity = {
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: new BN('1337000000000000000', 10)
}

<ae-identity-light :identity="identity" collapsed />
```

```js
const BN = require('bn.js')
const identity = {
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: new BN('1337000000000000000', 10),
  name: 'My identity'
}

<ae-identity-light :identity="identity" collapsed />
```

Blank identity information
```js
<ae-identity-light />
```
