Basic banner component
```js
new Vue({
  methods: {
    showBanner () { this.$refs.banner.showBanner() }
  },
  template: `
    <div>
      <ae-button @click="showBanner">Show banner</ae-button>
      <ae-banner ref="banner">aeBanner</ae-banner>
    </div>
  `
})
```

Banner component with button
```js
new Vue({
  methods: {
    showBanner () { this.$refs.banner.showBanner() },
    hideBanner () { this.$refs.banner.hideBanner() }
  },
  template: `
    <div>
      <ae-button @click="showBanner">Banner with button</ae-button>
      <ae-banner ref='banner' :options="{ autoDestroy: false }">
        aeBanner
        <span slot="right">
          <ae-button
            uppercase
            size="smaller"
            type="exciting"
            @click="hideBanner"
          >
            Cancel
          </ae-button>
        </span>
      </ae-banner>
    </div>
  `
})
```
