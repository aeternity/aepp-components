Basic identity card
```js
const BN = require('bn.js')
const identity = {
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: new BN('1337000000000000000', 10)
}

<ae-identity :identity="identity" />
```

Basic active identity card
```js
const BN = require('bn.js')
const identity = {
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: new BN('1337000000000000000', 10)
}

<ae-identity :identity="identity" active />
```

Named basic Identity card
```js
const BN = require('bn.js')
const identity = {
  name: "My Id", 
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: new BN('1337000000000000000', 10)
}

<ae-identity :identity="identity" />
```

Identity card with buttons
```js
const BN = require('bn.js')
const identity = {
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: new BN('1337000000000000000', 10)
}

<ae-identity :identity="identity" active >
  <ae-divider type="boring" />
  <div>
    <ae-button type="boring" size="small" uppercase>Edit</ae-button>
    <ae-button type="boring" size="small" uppercase>Copy</ae-button>
    <ae-button type="exciting" size="small" uppercase>Activate</ae-button>
  </div>
</ae-identity>
```

Collapsed identity card
```js
const BN = require('bn.js')
const identity = {
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: new BN('1337000000000000000', 10)
}
<ae-identity :identity="identity" collapsed />
```

Collapsed identity card with buttons
```js
const BN = require('bn.js')
const identity = {
  name: 'My Id',
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: new BN('1337000000000000000', 10)
}
<ae-identity :identity="identity" collapsed >
  <ae-divider type="boring" />
  <div>
    <ae-button type="boring" size="small" uppercase>Edit</ae-button>
    <ae-button type="boring" size="small" uppercase>Copy</ae-button>
    <ae-button type="dramatic" size="small" uppercase>Activate</ae-button>
  </div>
</ae-identity>
```

Blank identity card
```js
<ae-identity blank active />
```
