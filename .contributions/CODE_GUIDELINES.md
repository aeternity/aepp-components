# Contributing
Contributions to the repository are welcome! If you wrote a cool component that adheres to our style guide and you 
think someone else could reuse it please fork this project and send us a pull request 💪 (Please note: This guide 
is as much for us as for you)

## Things to Keep in Mind for Submissions
* Could your component be useful to others? Ask yourself if it isn't too specific and narrow to your own use case.
* Check out the [styleguide](https://github.com/aeternity/aepp-prototypes)! Keeping the components in sync 
visually will make for a more unified æpp user experience.
* Follow Vue.js's Tips & Best Practices. **Especially so that all
states are handled via props, logic is kept to a minimum.**
* Give it a descriptive name with "ae" as a prefix (ie. ae-address)

### Pull Requests
* [Squash your commits](https://stackoverflow.com/questions/5189560/squash-my-last-x-commits-together-using-git) 
to ensure each resulting commit is stable and can be tested.
* Include issue numbers in the PR title, e.g. "GH-128. Resolves issue #123".
* Add unit tests for self-contained modules.
* Add integration tests as needed.
* Document new code.
* End all files with a newline

### Git Commit Messages
* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Reference issues and pull requests liberally after the first line

Learn more about [writing a good commit message](https://chris.beams.io/posts/git-commit/).

## New Component Submission guidelines

### Component Purpose
The purpose of the component should be as wide as possible. Avoid to make components that only work in a specific 
context. Sure, sometimes you can not avoid that a `<ae-menu-entry>` needs to be used inside of a `<ae-menu>`. 
Pause for a thought and ask yourself, if the component could be refactored to be of more use in different contexts. 
Think about, if the component is not too specific to your application? Does it need a new name maybe? Can it be 
split into multiple components? Or is it actually just a variant of a existing one?

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

> Some developer might want to use the same visual element to display `tags` or `online statuses`. So she would end
up writing `<ae-category>Label 1</ae-category>` or `<ae-category>Offline</ae-category>`🤦🏻‍♀️

### Component file name and location
Put the files in a `kebab-case` directory inside `src/components` like `src/components/ae-component-name/`.
Create a .vue file with the same name (ie. `ae-component-name.vue`) that includes template, script and style. 
Please bundle the `scss` and `javascript` code within the component file a single vue component. Tests can go
in an external file named `ae-components.test.js`.

```
aepp-components
└── src
    └── components
        └── ae-component-name
            ├── ae-component-name.md
            ├── ae-component-name.test.js
            └── ae-component-name.vue
```

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

Components should also not be too simple. No one needs a `<ae-paragraph>` if it doesn't provide more value 
than a simple `<p>`.

### Component dependency
Your component should be **as _dumb_ as possible**. Complex data should always be passed via prop / slots. 
Don't assume there will be a `router` or `store`.

> Every developer wants to be in charge of his own data and state management, let them!

Don't rely on external resources (CDN content or APIs).

> Components that rely on external resources can not be used offline or in a local intranet.
> Developers also cannot choose if and when an application 'goes online' and exposes data.

Sometimes there might be a good reason for exceptions. If you provide a component that **has** to be tightly coupled 
to an API because of the intrinsic nature of the component, it might be ok. But first ask yourself if it's possible 
to use the component with any external data source via prop.

### Component composability
Reuse other components inside your component. Design yours, so that other components can reuse it and create 
richer compositions.

e.g:

#### good example
```vue
<template>
  <div class="ae-banner">
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

> `ae-banner` is using a composition of aeButton and aeIcon to represent a close-button.

### Component colors
Use colors from `@import "src/styles/variables/";` folder. æternity is moving fast and the CI is being updated 
regularly. All components should use the same colors. 🤡

### Component margins
The wrapping main element of a component must not have margin or any kind or other properties that control 
position/offset relative to a parent element or component. Otherwise it will be painful to position your component 
in other apps.

> If you'd adjust the margin later, it would probably break layouts in other applications as developers position 
relative to your margins. 😱

### Component css-classes
Give the wrapping main element a classname that corresponds to the component name 
`ae-progress-indicator` -> `.ae-progress-indicator`,

Add all modifier classes (that represent type, state or similar things) of the component to the main wrapping element.

- The root class inherits the component name
  - `<ae-progress></ae-progress>` -> `.ae-progress`
- If there are class modifiers for that specific element / class apply it directly with that class.
  - ```
      .ae-progress {
        background: white;
      }
      .ae-progress.secondary {
        background: black;
      }
    ```
- Name the classes in an abstract way
  - bad: `.ae-progress.black { background: black; }`
  - good: `.ae-progress.primary { background: black; }`
  - good: `.ae-progress.extend { width: 100%; }`
- For its children elements apply component name as namespace and then the element in hand
  - bad: `.title`
  - good: `.ae-progress-title` // without modifier
  - good: `.ae-progress-label.secondary` // with modifier


#### good example
```vue
<template>
  <div class="ae-progress-indicator primary extend">
    <div class="ae-progress-icon"></div>
    <div class="ae-progress-label secondary">{{ label }}</div>
  </div>
</template>

<style lang="scss">
.ae-progress-indicator {
  /* … */
}

.ae-progress-indicator.primary {/* … */}
.ae-progress-indicator.extend {/* … */}

.ae-progress-icon { /* … */ }
.ae-progress-label { /* … */ }

.ae-progress-label.secondary { /* … */ }
</style>
```

#### bad example
```vue
<template>
  <div class='progress'>
    <div class='icon round'></div>
    <div class='progress-label size-large'>{{ label }}</div>
  </div>
</template>
```

### Component using Child components
Don't interfere with the styling of internals of child components. Better pass props to children and expand 
functionality in these components directly. Your component will be less prone to break on changes in the children. 
Maintainers can see the intention isolated in the component.

#### bad example
```css
.ae-my-component .ae-button .ae-icon svg {
  fill: green;
}
```

> You don't know if the tagname or classname of a internal property in a component will change in the future. 
Maintainers also have no means to find out if somebody is relying on a specific tag/class.

## Add Documentation
* We use [Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) to generate documentation from well 
formatted and commented code.
* Their usage documentation can be found [here](https://github.com/vue-styleguidist/vue-styleguidist/blob/master/docs/Documenting.md)
* Documentation begins within a markdown file with the same name as the component (ie. `ae-component.md`)
* Props should be described as thoroughly as possible, define the type and provide useful default values
* Make that markdown file include a usage example like seen [here](https://github.com/vue-styleguidist/vue-styleguidist/blob/master/docs/Documenting.md#usage-examples-and-readme-files)
* You can test the documentation by running `npm run styleguide`
