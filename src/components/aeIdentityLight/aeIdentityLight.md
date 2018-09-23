Basic identity information
```js
const identity = {
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  name: 'My identity',
  balance: 1.337
}

<ae-identity-light v-bind="identity" :collapsed="false" />
```


Collapsed identity information
```js
const identity = {
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: 1.337
}

<ae-identity-light v-bind="identity" collapsed />
```

```js
const identity = {
  address: '0x35d8830ea35e6Df033eEdb6d5045334A4e34f9f9',
  balance: 1.337,
  name: 'My identity'
}

<ae-identity-light v-bind="identity" collapsed />
```

Blank identity information
```js
<ae-identity-light />
```
