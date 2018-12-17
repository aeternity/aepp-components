```vue
  <ae-input placeholder="Placeholder" />
``` 

```vue
  <ae-input type="password" value="1234" />
```

```vue
  <ae-input type="number" value="1234" />
```

```js 
  new Vue({ 
    data () { return { value: '' } }, 
    template: ` 
      <ae-input placeholder="With a clear button" v-model="value">
        <ae-button slot="right" type="exciting" size="small" @click="value = ''">
          <ae-icon slot="icon" type="exciting" invert name="close" />
        </ae-button>
      </ae-input> 
    ` 
  }) 
```
