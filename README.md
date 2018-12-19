---
layout: page
title: Components
navigation: 3
---

# æternity æpp Components

## Overview
The æternity æpp components are meant to provide æpp developers with reusable [Vue.js](https://vuejs.org) components 
that adhere to our [styleguide](https://github.com/aeternity/aepp-prototypes).

The github repository is [here](https://github.com/aeternity/aepp-components).

__Note__: this repository is currently in active development and things might break / change in the future
but we will be adhering to the Semantic versioning.

## Documentation
Full component documentation can be found at [http://aeternity.com/aepp-components/](http://aeternity.com/aepp-components/)

## Community
- [Code Guidelines](./.contributions/CODE_GUIDELINES.md)
- [Code of Conduct](./.contributions/CODE_OF_CONDUCT.md)

## Installation & Usage
Install the æternity æpp components via [npm](https://www.npmjs.com/)

## Requires
- Vue
- @vue/cli
- NPM
- Aeternity Aepp components.

#### 1. Make sure Vue CLI globally installed
```bash
npm install -g @vue/cli
```

#### 2. Create a Vue project using
```bash
vue create project-name
```

#### 3. Enter into your new Vue project.
```bash
cd project-name
```

#### 4. Now in your project run
```bash
npm i
```

#### 5. Install the components package, currently #develop branch is the most up to date version.
```bash
npm i --save https://github.com/aeternity/aepp-components.git#develop
```

#### 6. Finally run and select the localhost IP:
```bash
npm run serve
```

#### 7. The output should appear similar to the following:
```bash
 App running at:
 - Local:   http://localhost:8080/
 - Network: http://192.xxx.xxx.xxx:8080/
```

### Importing components in your application
In your new Vue project with the downloaded directory open your Table of Contents and navigate too src--> main.js
In main.js import the following:

In case you want to include normalize.css, and some style resets, include:
_this will include fonts and some small global css styles_
```js
import '@aeternity/aepp-components/dist/aepp.global.css'
```

If you already have global styles in your application, but only need the fonts,
use this import file.
```js
import '@aeternity/aepp-components/dist/aepp.fonts.css'
```

Import the entire components styles (this will include all components css)
```js
import '@aeternity/aepp-components/dist/aepp.components.css'
```

### Method 1: global registration of all components
```js
import Components from '@aeternity/aepp-components'

Vue.use(Components)
```

### Method 2: global registration of single components
```js
import { AeButton } from '@aeternity/aepp-components'

Vue.use(AeButton)
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

### Method 4: Local registration and import of a single component
```js
import '@aeternity/aepp-components/dist/ae-button/ae-button.css'
import AeButton from '@aeternity/aepp-components/dist/ae-button/ae-button.vue'

new Vue({
  components: {
    AeButton
  }
})
```

Global registration (Method 1 & 2) will make the æternity æpp components available throughout your app, local 
registration (Method 3 and 4) will have to be declared in each relevant section of your app.

#### Here's an example of a component usage:
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
