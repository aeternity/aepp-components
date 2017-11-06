# aeternity aepp components
aeternity aepp components aims to provide aepp developers with reusable Vue components. All elements are from our [styleguide](https://github.com/aeternity/aepp-prototypes). You need some kind of build process (webpack, browserify, ...) there is no bundled js file yet.

## installation and usage
Install aeternity aepp components via npm
```
npm install aeternity-aepp-components
```

Import Vue and aeternity aepp components:
``` javascript
import Vue from 'vue'
import AeppComponents from 'aeternity-aepp-components'

Vue.use(AeppComponents)

// OR single components

Vue.use(AeppComponents.AeButton)
```
```
<template>
  <div id="app">
    <ae-button @click="buttonPress()">My Button</ae-button>
  </div>
</template>
```

## contributing
If you wrote a neat looking, reusable component matching our styleguide please fork this project and send us a merge request. Thanks!

## components
* [aeButton](#aeButton)
* [aeIdentity](#aeIdentity)
* ...

### aeButton
A Button...
Insert description about props needed and so on, example code and also add an image probably

### aeIdentity
A Button...
