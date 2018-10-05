```jsx
  <ae-input placeholder="Placeholder" />
``` 

```jsx
  <ae-input type="password" value="1234" />
```

```jsx
  <ae-input type="number" value="1234" />
```

```js 
  new Vue({ 
    data () { return { value: '' } }, 
    template: ` 
      <ae-input placeholder="With a clear button" v-model="value">
        <ae-button slot="right" type="exciting" size="small" @click="value = ''">
          <ae-icon slot="icon" fill="secondary" invert name="close" />
        </ae-button>
      </ae-input> 
    ` 
  }) 
```
