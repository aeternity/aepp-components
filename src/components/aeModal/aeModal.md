```js
new Vue({
  data(){ return { modalVisible: false } },
  template: `
    <div>
      <ae-button @click="modalVisible = true">Show modal</ae-button>
      <ae-modal
        v-if="modalVisible"
        @close="modalVisible = false"
        title="Modal title",
        :showCloseButton="true",
        :fullscreen="true"
      >
        Modal content
      </ae-modal>
    </div>
  `
})
```
