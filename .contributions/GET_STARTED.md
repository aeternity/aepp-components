## Installation & Usage
Install the æternity æpp components via [npm](https://www.npmjs.com/)

```
npm install @aeternity/aepp-components
```

Import the æternity æpp components and Vue.js (for vue-cli this happens in `/main.js`:

```js
import Vue from 'vue'
import Components, { AeButton } from '@aeternity/aepp-components'
```

### Method 1: global registration of all components
```js
Vue.use(Components)
```

### Method 2: global registration of single components
```js
Vue.use(Components.AeButton)

// or
Vue.component('ae-button', AeButton)
```

### Method 3: local registration of single components
```js
import { AeButton } from '@aeternity/aepp-components'

new Vue({
  components: {
    AeButton
  }
})
```

Global registration (Method 1 & 2) will make the æternity æpp components available throughout your app, local 
registration (Method 3) will have to be declared in each relevant section of your app.

Here's an example of a component usage:
```vue
<template>
  <div id="app">
    <ae-button @click="buttonPress()">My Button</ae-button>
  </div>
</template>
```

There's also a helper mixin / directives and filters available for handy utilities.

#### Mixins
```js
import { mixins } from '@aeternity/aepp-components'

export default {
  /* … */
  mixins: [mixins.events],
}
```

#### Directives
```js
import { directives } from '@aeternity/aepp-components'

export default {
  /* … */
  directives: { removeSpacesOnCopy: directives.removeSpacesOnCopy },
}
```

#### Filters
```js
import { filters } from '@aeternity/aepp-components'

export default {
  /* … */
  mixins: [filters.example],
}
```

# How to use components in your æpp: Examples
Below is example code.

## main.js
```js
import Vue from 'vue'
import App from './App.vue'
import Components from '@aeternity/aepp-components'

Vue.use(Components)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

## App.vue
```vue
<template>
  <main id="app">
    <!-- add components here -->
    <ae-button>BUTTON</ae-button>
  </main>
</template>
<script>
import { AeButton, mixins } from '@aeternity/aepp-components'

export default {
  name: 'app',
  mixins: [mixins.events], 
  components: {
    AeButton
  },
  data () {
    return {
      showModal: false,
      identity: {
        balance: '1337210000000000000', // wei as string, int or BN
        address: '0x1234567890987654321'
      }
    }
  },
 
  methods: {
    buttonPress (what) {
      console.log("button pressed", what)
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

Further documentation on the components can be found at [http://aeternity.com/aepp-components/](http://aeternity.com/aepp-components/).
