```js
new Vue({
  data(){ return { overlayVisible: false } },
  template: `
    <div>
      <ae-button @click="overlayVisible = true">Show overlay</ae-button>
      <ae-overlay v-if="overlayVisible" @click="overlayVisible = false" />
    </div>
  `
})
```
