Basic identity card
```js
const identity = {
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: 1.337
}

<ae-identity v-bind="identity" />
```

Basic active identity card
```js
const identity = {
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: 1.337
}

<ae-identity v-bind="identity" active />
```

Named basic Identity card
```js
const identity = {
  name: "My Id", 
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: 1.337
}

<ae-identity v-bind="identity" />
```

Identity card with buttons
```js
const identity = {
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: 1.337
}

<ae-identity v-bind="identity" active >
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
const identity = {
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: 1.337
}
<ae-identity v-bind="identity" collapsed />
```

Collapsed identity card with buttons
```js
const identity = {
  name: 'My Id',
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: 1.337
}
<ae-identity v-bind="identity" collapsed >
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
