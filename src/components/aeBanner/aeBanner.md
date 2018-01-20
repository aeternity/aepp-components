Basic banner component
```js
new Vue({
  data () { return { showBanner: false } },
  template: `
    <div>
      <ae-button @click="showBanner = true">Show banner</ae-button>
      <ae-banner :show=showBanner>aeBanner</ae-banner>
    </div>
  `
})
```

Banner component with button
```js
new Vue({
  data () { return { showBanner: false } },
  template: `
    <div>
      <ae-button @click="showBanner = true">Banner with button</ae-button>
      <ae-banner :show=showBanner>
        aeBanner
        <span slot="right">
          <ae-button
            uppercase
            size="smaller"
            type="exciting"
            @click="showBanner = false"
          >
            Cancel
          </ae-button>
        </span>
      </ae-banner>
    </div>
  `
})
```
