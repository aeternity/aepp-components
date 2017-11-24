# Aeternity Aepp Components
The aeternity aepp components are meant to provide aepp developers with reusable [Vue.js](https://vuejs.org) components that adhere to our [styleguide](https://github.com/aeternity/aepp-prototypes). Until the javascript comes bundled please use a build process such as [webpack](https://webpack.js.org/), [browserify](http://browserify.org/), [grunt](https://gruntjs.com/), [gulp](https://gulpjs.com/), etc.

## Documentation

Full documentation can be found at [http://components.aepps.com](http://components.aepps.com)

## Installation & Usage
Install the aeternity aepp components via [npm](https://www.npmjs.com/)
```
npm install @aeternity/aepp-components
```

Import the aeternity aepp components and Vue.js (for vue-cli this happens in `/main.js`:
``` javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import AeppComponents, { AeButton } from '@aeternity/aepp-components'

// Method 1: global registration of all components
Vue.use(VueRouter)
Vue.use(AeppComponents)

// Method 2: global registration of single components
Vue.use(AeppComponents.AeButton)
// or 
Vue.use(AeButton)

// Method 3: local registration of single components
new Vue({
  components: {
    AeButton
  }
})
```

Global registration (Method 1 & 2) will make the aeternity aepp components available throughout your app, local registration (Method 3) will have to be declared in each relevant section of your app.

Here's an example of a component usage:
```
<template>
  <div id="app">
    <ae-button @click="buttonPress()">My Button</ae-button>
  </div>
</template>
```


There's also a helper mixin available for handy utilities like generating [blockies](https://github.com/petejkim/ethereum-blockies-png) and converting between Ether denominations.
```javascript
import { aeHelperMixin } from '@aeternity/aepp-components'

{
  ...
  mixins: [aeHelperMixin],
}
```

## Contributing
Contributions to the collection are welcome! If you wrote a cool component that adheres to our stylesguide and you think someone else could reuse it please fork this project and send us a pull request 💪 (Please note: This guide is as much for us as for you)

### Things to Keep in Mind for Submissions
* Check out the [styleguide](https://github.com/aeternity/aepp-prototypes)! Keeping the components in sync visually will make for a more unified aepp user experience.
* Follow [Vue.js's Tips & Best Practices](https://012.vuejs.org/guide/best-practices.html). 
** Especially so that all states are handled via props, logic is kept to a minimum & communication takes place via events
* Give it a descriptive name with "ae" as a prefix (ie. aeAddressInput, aeHeaderAlert, aeAppIcon)
* Bonus: Make it do more than one thing
  * good: e.g. An Icon-Button with different icons and backgrounds styled via props
  * bad: one grey close button component with an X-Symbol and one magenta add Button with a + Symbol

### Structuring the Component
* Give the component a name property
* Give it a camelcased directory inside `/src/components` like `/src/components/aeComponentName/`
* Give the Folder a .vue file with the same name (ie. `aeComponentName.vue`) that includes template, script and style. Script and style may also be imported from separate files like `aeComponentName.js` and `aeComponentName.(s)css` (just add `/* eslint no-unused-expressions: "off" */` to keep the linter quiet)
* Put an index.js file in the component directory which exports an install function. Ex:
```
import aeMenuEntry from './aeMenuEntry.vue'

export default function install (Vue) {
  Vue.component('ae-menu-entry', aeMenuEntry)
}
```
* Add the component to the registry in `src/index.js` for easy usage with `Vue.use()`

### Add Documentation
* We use [Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) to generate documentation from well formatted and commented code.
* Their usage documentation can be found [here](https://github.com/vue-styleguidist/vue-styleguidist/blob/master/docs/Documenting.md)
* Documentation begins within a markdown file with the same name as the component (ie. `aeComponentName.md`)
* Props should be described as thoroughly as possible, define the type and provide useful default values
* Make that markdown file include a usage example like seen [here](https://github.com/vue-styleguidist/vue-styleguidist/blob/master/docs/Documenting.md#usage-examples-and-readme-files)
* You can test the documentation by running `npm run styleguide`

## Examples
Below is example code and rendering of a project that throws all of our components onto the same page at once. Feel free to use this as a reference for what is available already.

![example](https://i.imgur.com/VNAKrqX.png "Example")


main.js
```javascript
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AeppComponents from '@aeternity/aepp-components'

Vue.use(VueRouter)
Vue.use(AeppComponents)

const routes = [
  // { path: '/foo', component: Foo },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```

app.vue
```javascript
<template>
  <div id="app">
    <ae-main>
      <div class="example">
        <ae-amount :value="1.337" :isFullWidth="true"></ae-amount>
      </div>

      <div class="example">
        <ae-balance :value="1.337" :size="'large'" :color="'dark'"></ae-balance>
      </div>

      <div class="example">
        <ae-button :label="'button'" :size="'large'" :color="'pink'">Button</ae-button>
      </div>

      <div class="example">
        <ae-button2 @click="buttonPress('button2')" :secondary="false">Button2</ae-button2>
      </div>

      <div class="example">
        <ae-category>Category</ae-category>
      </div>

      <div class="example">
        <ae-close-button @click="buttonPress('closeButton')"></ae-close-button>
      </div>

      <div class="example">
        <ae-filter-list :active="false">
          <ae-filter-item :active="false" :to="'/'">Filter Item in List</ae-filter-item>
          <ae-filter-separator></ae-filter-separator>
          <ae-filter-item :active="true" :to="'/'">Filter Item  in List</ae-filter-item>
        </ae-filter-list>
      </div>

      <div class="example">
        <ae-header :name="'Header'">
          <ae-header-button @click="buttonPress('header button')" :icon="false" :secondary="false">Header Button</ae-header-button>
          <ae-header-button @click="buttonPress('header button')" :icon="true" :secondary="true">Æ</ae-header-button>
        </ae-header>
      </div>

      <div class="example">
        <ae-header-alert @close="buttonPress('alert close')">Alert</ae-header-alert>
      </div>

      <div class="example" v-if="showModal">
        <ae-modal @close="showModal = false">Modal</ae-modal>
      </div>

      <div class="example">
        <ae-button2 @click="showModal = true" :secondary="false">
          Modal
        </ae-button2>
      </div>

      <div class="example">
        <ae-identity :active="true" :address="identity.address" :balance="identity.balance" :collapsed="false"></ae-identity>
      </div>

      <div class="example">
        <ae-identity :active="false" :address="identity.address" :balance="identity.balance" :collapsed="true"></ae-identity>
      </div>

      <div class="example">
        <ae-identity :active="true" :address="identity.address" :balance="identity.balance" :collapsed="false">
          <ae-button2 @click="buttonPress('button2')" :secondary="false">Button2</ae-button2>
          <ae-button2 @click="buttonPress('button2')" :secondary="false">Button2</ae-button2>
        </ae-identity>
      </div>

      <div class="example">
        Mixin Function readableEther: {{readableEther(identity.balance)}}
      </div>
    </ae-main>
  </div>
</template>

<script>
import { aeHelperMixin } from '@aeternity/aepp-components'

export default {
  name: 'app',
  data () {
    return {
      showModal: false,
      identity: {
        balance: '1337210000000000000', // wei as string, int or BN
        address: '0x1234567890987654321'
      }
    }
  },
  mixins: [
    aeHelperMixin
  ],
  methods: {
    buttonPress: function(what) {
      console.log("button pressed", what);
    }
  }
}
</script>

<style>
  div.example {
    margin-bottom: 40px;
  }
</style>
```
