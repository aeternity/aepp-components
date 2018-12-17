```vue
  <ae-input />
``` 

### prop: label
```vue
  <ae-input label="With Header">
    <template slot="header">
      header
    </template>
   </ae-input>
``` 

### prop: placeholder
```vue
  <ae-input placeholder="component" />
``` 

### slot: footer
```vue
  <ae-input label="Component" placeholder="...">
    <template slot="header">
      header
    </template>
    <ae-toolbar slot="footer">
      This field is &nbsp; <a href="#">mandatory</a>
    </ae-toolbar>
  </ae-input>
``` 

### prop: error
```vue
  <ae-input label="Component" placeholder="..." error>
    <template slot="header">
      header
    </template>
    <ae-toolbar slot="footer">
      This field is mandatory
    </ae-toolbar>
  </ae-input>
``` 

### prop: aemount
```vue
  <ae-input label="Component" placeholder="0.0" aemount>
    <ae-text slot="header" fill="black">AE</ae-text>
  </ae-input>
``` 

```vue
  <ae-input label="Component" placeholder="0.0" aemount error>
    <ae-text slot="header" fill="black">AE</ae-text>
    <ae-toolbar slot="footer">
      0.05AE is the minimum amount to send!
    </ae-toolbar>
  </ae-input>
``` 

### slot: footer
```vue
  <ae-input label="Component" placeholder="...">
    <template slot="header">
      header
    </template>
    <ae-toolbar slot="footer">
      This field is &nbsp; <a href="#">mandatory</a>
    </ae-toolbar>
  </ae-input>
``` 

### scoped-slot
```vue
  <ae-input label="Component">
    <input
      slot-scope="{ context }"
      @focus="context.focus = true" 
      @blur="context.focus = false" 
    />
  </ae-input>
``` 
