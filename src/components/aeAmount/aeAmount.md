```javascript
new Vue({
  data() {
    return {
      amount: 1.337865765437,
      unit: 'Æ'
    }
  },
  template: `
    <ae-amount :value="amount" :unit="unit" size="med" color="black"/>
  `
})
```

```javascript
new Vue({
  data() {
    return {
      amount: 1.337865765437,
      unit: 'Æ'
    }
  },
  template: `
    <ae-amount :value="amount" :unit="unit" size="large" color="black"/>
  `
})
```
