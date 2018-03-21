```js
<ae-account-background type="exciting">
  <span style="color: white">A flex box based container with rounded corners</span>
  <ae-button>Button</ae-button>
</ae-account-background>
```

```js
const BN = require('bn.js')
let identity = {
  name: 'My identity',
	address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
	balance: new BN('1337000000000000000', 10)
}

<ae-account-background type="dramatic" style="width:335px">
  <ae-identity :identity="identity"/>
</ae-account-background>
```

```js
const BN = require('bn.js')
let identity = {
  name: 'My collapsed identity',
	address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
	balance: new BN('1337000000000000000', 10)
}

<ae-account-background type="darker" style="width:335px">
  <ae-identity :identity="identity" collapsed/>
</ae-account-background>
```
