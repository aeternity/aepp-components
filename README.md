# Aeternity Aepp Components
The aeternity aepp components are meant to provide aepp developers with reusable [Vue.js](https://vuejs.org) components that adhere to our [styleguide](https://github.com/aeternity/aepp-prototypes). Until the javascript comes bundled please use a build process such as [webpack](https://webpack.js.org/), [browserify](http://browserify.org/), [grunt](https://gruntjs.com/), [gulp](https://gulpjs.com/), etc.

## Hackathon Notice
We've rewritten and refactored the components for better usage in the hackathon (24.11.2017). Beware that the currently existing apps (like identity, aexistence/notary, wall, ...) still use older versions of this repository. In the near future we will update these repositories to use the latest aepp-components.

## Documentation

Full documentation can be found at [http://components.aepps.com](http://components.aepps.com)

## Installation & Usage
Install the aeternity aepp components via [npm](https://www.npmjs.com/)
```
npm install @aeternity/aepp-components
```

Import the aeternity aepp components and Vue.js (for vue-cli this happens in `/main.js`:

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import AeppComponents, { AeButton } from '@aeternity/aepp-components'
```

### Method 1: global registration of all components

```
Vue.use(VueRouter)
Vue.use(AeppComponents)
```

### Method 2: global registration of single components

```
Vue.use(AeppComponents.AeButton)
// or
Vue.use(AeButton)
```

### Method 3: local registration of single components

```
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

# Contributing
Contributions to the collection are welcome! If you wrote a cool component that adheres to our stylesguide and you think someone else could reuse it please fork this project and send us a pull request 💪 (Please note: This guide is as much for us as for you)

## Things to Keep in Mind for Submissions
* Check out the [styleguide](https://github.com/aeternity/aepp-prototypes)! Keeping the components in sync visually will make for a more unified aepp user experience.
* Follow [Vue.js's Tips & Best Practices](https://012.vuejs.org/guide/best-practices.html).
** Especially so that all states are handled via props, logic is kept to a minimum & communication takes place via events
* Give it a descriptive name with "ae" as a prefix (ie. aeAddressInput, aeHeaderAlert, aeAppIcon)

## Structuring the Component
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

## Add Documentation
* We use [Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) to generate documentation from well formatted and commented code.
* Their usage documentation can be found [here](https://github.com/vue-styleguidist/vue-styleguidist/blob/master/docs/Documenting.md)
* Documentation begins within a markdown file with the same name as the component (ie. `aeComponentName.md`)
* Props should be described as thoroughly as possible, define the type and provide useful default values
* Make that markdown file include a usage example like seen [here](https://github.com/vue-styleguidist/vue-styleguidist/blob/master/docs/Documenting.md#usage-examples-and-readme-files)
* You can test the documentation by running `npm run styleguide`

# Examples
Below is example code and rendering of a project that throws all of our components onto the same page at once. Feel free to use this as a reference for what is available already.

## main.js

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

## app.vue

```javascript
<template>
  <div id="app">
    <ae-main>
    <!-- add components here -->
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

## aeIcon
### type: normal, name: arrow, burger, check, chevron, close, error, info 

![example](https://i.imgur.com/Hdpt3Mc.png)

```javascript
<ae-icon name="arrow"/>
<ae-icon name="burger"/>
<ae-icon name="check"/>
<ae-icon name="chevron"/>
<ae-icon name="close"/>
<ae-icon name="error"/>
<ae-icon name="info"/>
```

### type: boring, exciting, dramatic
![example](https://i.imgur.com/a2vChyM.png)

```javascript
<ae-icon type='boring' name="arrow"/>
<ae-icon type='boring' name="burger"/>
<ae-icon type='exciting' name="check"/>
<ae-icon type='exciting' name="chevron"/>
<ae-icon type='dramatic' name="close"/>
<ae-icon type='dramatic' name="error"/>
```

## aeButton
### type: plain, boring, exciting, dramatic
![example](https://i.imgur.com/EqHz4wv.png)

```javascript
<ae-button type='plain'>Button</ae-button>
<ae-button type='boring'>Button</ae-button>
<ae-button type='normal'>Button</ae-button>
<ae-button type='exciting'>Button</ae-button>
<ae-button type='dramatic'>Button</ae-button>
```

### size: smaller, small, medium, large

![example](https://i.imgur.com/ExX8qUp.png)

```javascript
<ae-button size='smaller'>Button</ae-button>
<ae-button type='dramatic' size='smaller'>Button</ae-button>
<ae-button size='small' type='plain'>Button</ae-button>
<ae-button size='small'>Button</ae-button>
<ae-button size='medium'>Button</ae-button>
<ae-button size='medium' type='exciting'>Button</ae-button>
<ae-button size='large'>Button</ae-button>
<ae-button size='large' type='dramatic'>Button</ae-button>
```

### aeButton with aeIcon
![example](https://i.imgur.com/Y1uGYHk.png)

```javascript
<ae-button size='smaller' type='boring'>
	<ae-icon slot='icon' type='boring' name="close"/>
</ae-button>
<ae-button size='smaller' type='normal'>
	<ae-icon slot='icon' name="close"/>
</ae-button>
<ae-button size='smaller' type='exciting'>
	<ae-icon slot='icon' type='exciting' name="close"/>
</ae-button>
<ae-button size='smaller' type='dramatic'>
	<ae-icon slot='icon' type='dramatic' name="close"/>
</ae-button>

<ae-button size='small' type='boring'>
	<ae-icon slot='icon' invert type='boring' name="close"/>
</ae-button>
<ae-button size='medium' type='boring'>
	<ae-icon slot='icon' invert type='boring' name="close"/>
</ae-button>
<ae-button size='large' type='boring'>
	<ae-icon slot='icon' invert type='boring' name="close"/>
</ae-button>

<ae-button size='medium' type='normal'>
	<ae-icon slot='icon' name="arrow"/>
</ae-button>

<ae-button size='medium' type='exciting'>
	<ae-icon slot='icon' invert type='exciting' name="check"/>
</ae-button>

<ae-button size='medium' type='dramatic'>
	<ae-icon slot='icon' invert type='dramatic' name="chevron"/>
</ae-button>
```

### aeButton with aeIcon and label
![example](https://i.imgur.com/9vdcDMw.png)

```javascript
<ae-button size='smaller' type='boring'>
	<ae-icon type='boring' slot='icon' name="check"/>
	Button
</ae-button>

<ae-button size='smaller' type='dramatic'>
	<ae-icon type='dramatic' slot='icon' name="error"/>
	Button
</ae-button>

<ae-button type='boring' size='small'>
	<ae-icon type='boring' invert slot='icon' name="error"/>
	Button
</ae-button>
<ae-button type='normal'>
	<ae-icon slot='icon' name="info"/>
	Button
</ae-button>

<ae-button type='exciting'>
	<ae-icon type='exciting' invert slot='icon' name="arrow"/>
	Button
</ae-button>

<ae-button size='large' type='dramatic'>
	<ae-icon type='dramatic' invert slot='icon' name="error"/>
	Button
</ae-button>
```

### inactive
![example](https://i.imgur.com/VGfePCV.png)

```javascript
<ae-button inactive type='plain'>Button</ae-button>
<ae-button inactive type='boring'>Button</ae-button>
<ae-button inactive size='small' type='normal'>Button</ae-button>
<ae-button inactive type='exciting'>Button</ae-button>
<ae-button inactive size='large' type='dramatic'>Button</ae-button>

<ae-button inactive size='smaller' type='normal'>
	<ae-icon slot='icon' name="check"/>
</ae-button>
<ae-button inactive size='medium' type='normal'>
	<ae-icon slot='icon' name="close"/>
</ae-button>
<ae-button inactive size='large' type='exciting'>
	<ae-icon slot='icon' invert type='exciting' name="burger"/>
</ae-button>
```

## aeHeder
![example](https://i.imgur.com/9dAR8j3.png)

```javascript
<ae-header name='AppName'>
	<ae-button type='dramatic'>Button 1</ae-button>
	<ae-button type='dramatic'>Button 2</ae-button>
</ae-header>
```

## AeNotification
![example](https://i.imgur.com/CjN5rAP.png)

```javascript
<ae-notification type='boring'>
	Amet omnis tenetur minima voluptatum?
</ae-notification>
<ae-notification type='normal'>
	Adipisicing minus ipsa omnis?
</ae-notification>
<ae-notification type='exciting'>
	Amet omnis tenetur minima voluptatum?
</ae-notification>
<ae-notification type='dramatic'>
	Adipisicing minus ipsa omnis?
</ae-notification>
```


## AeAmount
![example]()

```javascript
<ae-amount value='12'/>
```

## AeAmountInput
![example](https://i.imgur.com/USJCKOL.png)

```javascript
<ae-amount-input></ae-amount-input>
```

## AeLabel
![example](https://i.imgur.com/FJRgcK0.png)

```javascript
<ae-label>Label 1</ae-label>
<ae-label>Label 2</ae-label>
<ae-label>Label 3</ae-label>
```


## AeIdentity
![example](https://i.imgur.com/uCee7Oh.png)

```javascript
<ae-identity :active="true" :identity="{address:'0x1234567890987654321',balance:'1337210000000000000' }" :collapsed="false"></ae-identity>
<ae-identity :active="true" :identity="{address:'0x1234567890987654321',balance:'1337210000000000000' }" :collapsed="true"></ae-identity>

<ae-identity :active="false" :identity="{address:'0x1234567890987654321',balance:'1337210000000000000' }" :collapsed="false">
	<ae-button size='small'>Button</ae-button>
	<ae-button type='exciting' size='small'>Button</ae-button>
</ae-identity>
```

## AePanel
![example](https://i.imgur.com/HaEgasd.png)

```javascript
<ae-panel>
	<p>Lorem cum molestias non laudantium eos. Ad officia vel corrupti voluptatem eum Voluptas corporis debitis harum assumenda commodi suscipit sed. Corrupti error officia impedit eligendi corporis Ad labore nesciunt voluptates totam delectus Voluptatum</p>
</ae-panel>
```

## AeSwitch
![example](https://i.imgur.com/UUwQE9M.png)

```javascript
<ae-switch
	name="example"
	:choices="[
		{ label: 'Choice 1', value: 'choice1' },
		{ label: 'Choice 2', value: 'choice2' },
		{ label: 'Choice 3', value: 3 }
	]"
	:default="3"
/>
```

## AeIdentityAvatar
![example](https://i.imgur.com/gOdn8Ks.png)

```javascript
<ae-identity-avatar address='0xfa617481af59ebec80e8d529f1e2d1b3751468f3'/>
```

## AeAddress
![example](https://i.imgur.com/fA5LbFp.png)

```javascript
<ae-address address='0xfa617481af59ebec80e8d529f1e2d1b3751468f3'/>
<ae-address size='short' address='0xfa617481af59ebec80e8d529f1e2d1b3751468f3'/>
<ae-address show-avatar address='0xfa617481af59ebec80e8d529f1e2d1b3751468f3'/>
<ae-address show-avatar size='short' address='0xfa617481af59ebec80e8d529f1e2d1b3751468f3'/>
```

## AeAddressInput
![example](https://i.imgur.com/cVZcLML.png)

```javascript
<ae-address-input></ae-address-input>
<div class="example">
	Mixin Function readableEther: {{readableEther(identity.balance)}}
</div>
```
