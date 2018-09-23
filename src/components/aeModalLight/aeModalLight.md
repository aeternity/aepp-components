```js
new Vue({
  data(){ return { modalVisible: false } },
  template: `
    <div>
      <ae-button @click="modalVisible = true">Show modal light</ae-button>
      <ae-modal-light
        v-if="modalVisible"
        @close="modalVisible = false"
        title="Delete Voting?"
      >
        You can easily add this aepp again, if you are regretting this action
        <ae-button
          size="small"
          type="exciting"
          plain
          uppercase
          @click="modalVisible = false"
          slot="buttons"
        >cancel</ae-button>
        <ae-button
          size="small"
          type="dramatic"
          plain
          uppercase
          @click="modalVisible = false"
          slot="buttons"
        >delete</ae-button>
      </ae-modal-light>
    </div>
  `
})
```
