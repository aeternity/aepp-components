---
layout: page
title: Components
navigation: 3
---

# æternity æpp Components

## Overview
The æternity æpp components are meant to provide æpp developers with reusable [Vue.js](https://vuejs.org) components 
that adhere to our [styleguide](https://github.com/aeternity/aepp-prototypes). The javascript comes unbundled so
please use a build process such as [webpack](https://webpack.js.org/), [browserify](http://browserify.org/), 
[grunt](https://gruntjs.com/), [gulp](https://gulpjs.com/), etc.

The github repository is [here](https://github.com/aeternity/aepp-components).

## Hackathon Notice
We've rewritten and refactored the components for better usage in the hackathon (24.11.2017). 
Beware that the currently existing apps (like identity, aexistence/notary, wall, et cetera) 
still use older versions of this repository. In the near future we will update these repositories 
to use the latest aepp-components.

## Documentation

Full documentation can be found at [components.aepps.com](http://components.aepps.com)

## Installation & Usage
Install the æternity æpp components via [npm](https://www.npmjs.com/)

```
npm install @aeternity/aepp-components
```

Import the æternity æpp components and Vue.js (for vue-cli this happens in `/main.js`:

```js
import Vue from 'vue'
import AeppComponents, { AeButton } from '@aeternity/aepp-components'
```

### Method 1: global registration of all components

```js
Vue.use(AeppComponents)
```

### Method 2: global registration of single components

```js
Vue.use(AeppComponents.AeButton)

// or
Vue.component('ae-button', AeButton)
```

### Method 3: local registration of single components

```js
new Vue({
  components: {
    AeButton
  }
})
```

Global registration (Method 1 & 2) will make the æternity æpp components available throughout your app, local registration (Method 3) will have to be declared in each relevant section of your app.

Here's an example of a component usage:

```vue
<template>
  <div id="app">
    <ae-button @click="buttonPress()">My Button</ae-button>
  </div>
</template>
```

There's also a helper mixin available for handy utilities like generating [blockies](https://github.com/petejkim/ethereum-blockies-png) and converting between Ether denominations.

```js
import { aeHelperMixin } from '@aeternity/aepp-components'

export default {
  /* … */
  mixins: [aeHelperMixin],
}
```

# Contributing
Contributions to the collection are welcome! If you wrote a cool component that adheres to our stylesguide and you think someone else could reuse it please fork this project and send us a pull request 💪 (Please note: This guide is as much for us as for you)

## Things to Keep in Mind for Submissions
* Could your component be useful to others? Ask yourself if it isn't too specific and narrow to your own use case.
* Check out the [styleguide](https://github.com/aeternity/aepp-prototypes)! Keeping the components in sync visually will make for a more unified æpp user experience.
* Follow [Vue.js's Tips & Best Practices](https://012.vuejs.org/guide/best-practices.html). **Especially so that all states are handled via props, logic is kept to a minimum & communication takes place via events**
* Give it a descriptive name with "ae" as a prefix (ie. aeAddressInput)

## New Component Submission Guidlines

### Component Purpose
The purpose of the component should be as wide as possible. Avoid to make components that only work in a specific context. Sure, sometimes you can not avoid that a `<ae-menu-entry>` needs to be used inside of a `<ae-menu>`. Pause for a thought and ask yourself, if the component could be refactored to be of more use in different contexts. Think about, if the component is not too specific to your application? Does it need a new name maybe? Can it be split into multiple components? Or is it actually just a variant of a existing one?

### Component Name
Name it after what users will see, not what it represent in your application.

#### good example
```vue
<ae-label>Category 1</ae-label>
```

#### bad example
```vue
<ae-category>Category 1</ae-category>
```

> Some developer might want to use the same visual element to display `tags` or `online statuses`. So she would end up writing `<ae-category>Label 1</ae-category>` or `<ae-category>Offline</ae-category>`🤦🏻‍♀️

### Component file name and location
Put the files in a camelcased directory inside `/src/components` like `/src/components/aeComponentName/`.
Create a .vue file with the same name (ie. `aeComponentName.vue`) that includes template, script and style. Script and style may also be imported from separate files like `aeComponentName.js` and `aeComponentName.(s)css`

```
aepp-components
└── src
    └── components
        └── aeComponentName
            ├── aeComponentName.js
            ├── aeComponentName.md
            ├── aeComponentName.scss
            ├── aeComponentName.vue
            └── index.js
```

Put an `index.js` file in the component directory which exports an install function. Ex:

```js
import aeComponentName from './aeComponentName.vue'

export default function install (Vue) {
  Vue.component('ae-component-name', aeComponentName)
}
```

Add the component to the registry in `src/index.js` for easy usage with `Vue.use()`.

### Component `name property`
Give the component a name property

```js
export default {
  name: 'ae-component-name',
  props: {
    /* … */
  }
  /* … */
}
```

### Component complexity
Components should be simple, function and isolated from other components. Make them focus on a few simple things.
Provide reasonable defaults that make use of simple functionality. Expand complex features with props.

Try to avoid complex props objects, rather split your data into multiple props.

Components should also not be too simple. No one needs a `<ae-paragraph>` if it doesn't provide more value than a simple `<p>`.

### Component dependency
Your component should be **as _dumb_ as possible**. Complex data should always be passed via prop. Don't assume there will be a `router` or `store`.

> every developer wants to be in charge of his own data and state management, let them!

Don't rely on external resources (CDN content or APIs).

> components that rely on external resources can not be used offline or in a local intranet.
>
> Developers also cannot choose if and when an application 'goes online' and exposes data.

Sometimes there might be a good reason for exceptions. If you provide a component that **has** to be tightly coupled to an API because of the intrinsic nature of the component, it might be ok. But first ask yourself if it's possible to use the component with any external data source via prop.

### Component composability
Reuse other components inside your component. Design yours, so that other components can reuse it and create richer compositions.

e.g:

#### good example
```vue
<template>
  <div class="ae-banner" :class="cssClass">
    <content>
      <!-- @slot Banner content -->
      <slot />
    </content>
    <!-- @slot Banner button -->
    <slot name="button">
      <ae-button :type="type" invert  @click="close" >
        <ae-icon slot="icon" :type="type" name="close"/>
      </ae-button>
    </slot>
  </div>
</template>
```

> aeBanner is using a composition of aeButton and aeIcon to represent a close-button.

### Component colors
Use colors from `@import "../variables";`. æternity is moving fast and the CI is being updated regularly. All components should use the same colors. 🤡

### Component margins
The wrapping main element of a component must not have margin or any kind or other properties that control position/offset relative to a parent element or component. Otherwise it will be painful to position your component in other apps.

> If you'd adjust the margin later, it would probably break layouts in other applications as developers position relative to your margins. 😱

### Component css-classes
Give the wrapping main element a classname that corresponds to the component name `aeProgressIndicator` -> `.ae-progress-indicator`,

Add all modifier classes (that represent type, state or similar things) of the component to the main wrapping element. Modifiers should start with an underscore `_`
Defaults should always be included.

#### good example
```vue
<template>
  <div class="ae-progress-indicator _size_large _type_round _in-progress_true">
    <div class="progress-icon"></div>
    <div class="progress-label">{{ label }}</div>
  </div>
</template>

<style lang="scss">
.ae-progress-indicator {
  /* … */
  .progress-icon { /* … */ }
  .progress-label { /* … */ }
}
.ae-progress-indicator._in-progress_true { /* … */ }
.ae-progress-indicator._in-progress_false { /* … */ }

.ae-progress-indicator._size_large {
  .progress-icon { /* … */ }
  .progress-label { /* … */ }
}
.ae-progress-indicator._type_round {
  .progress-icon { /* … */ }
  .progress-label { /* … */ }
}
</style>
```

#### bad example
```vue
<template>
  <div class='ae-progress-indicator'>
    <div class='progress-icon round'></div>
    <div class='progress-label size-large'>{{ label }}</div>
  </div>
</template>

<style>
/* does red mean `in-progress`?, not clear */
.ae-progress-indicator {
  background-color: red;
}

/* bad class naming, */
.ae-progress-indicator.not-in-progress {
  // overwriting 'default' (in progress) style
  background-color: blue;
}

/* not clear whether `round` is a type or state.
parent components can not query type of .ae-progress-indicator (e.g. `.xyz > .ae-progress-indicator.type_round { … }`) */
.ae-progress-indicator .progress-icon.round {
  /* … */
}
</style>
```

### Component using Child components
Don't interfere with the styling of internals of child components. Better pass props to children and expand functionality in these components directly. Your component will be less prone to break on changes in the children. Maintainers can see the intention isolated in the component.

#### bad example
```css
.ae-my-component .ae-button .ae-icon svg {
  fill: green;
}
```

> You don't know if the tagname or classname of a internal property in a component will change in the future. Maintainers also have no means to find out if somebody is relying on a specific tag/class.

## Add Documentation
* We use [Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) to generate documentation from well formatted and commented code.
* Their usage documentation can be found [here](https://github.com/vue-styleguidist/vue-styleguidist/blob/master/docs/Documenting.md)
* Documentation begins within a markdown file with the same name as the component (ie. `aeComponentName.md`)
* Props should be described as thoroughly as possible, define the type and provide useful default values
* Make that markdown file include a usage example like seen [here](https://github.com/vue-styleguidist/vue-styleguidist/blob/master/docs/Documenting.md#usage-examples-and-readme-files)
* You can test the documentation by running `npm run styleguide`

# How to use components in your æpp: Examples
Below is example code.

## main.js
```js
import Vue from 'vue'
import App from './App.vue'
import AeppComponents from '@aeternity/aepp-components'

Vue.use(AeppComponents)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

## App.vue
```vue
<template>
  <ae-main id="app">
    <!-- add components here -->
  </ae-main>
</template>

<script>
import { AeMain, aeHelperMixin } from '@aeternity/aepp-components'

export default {
  name: 'app',
  components: {
    AeMain
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
  mixins: [
    aeHelperMixin
  ],
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

Further documentation on the components can be found at [our style guide page](http://components.aepps.com).
