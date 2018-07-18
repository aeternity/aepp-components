### component
```jsx
  <ae-card>
    Hello world!
  </ae-card>
``` 

### Example
```jsx
  <ae-card>
    <ae-qrcode slot="left" />
    <ae-address value="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" length="medium" />
  </ae-card>
``` 

```jsx
  <ae-card>
    <template slot="header">
      <ae-avatar address="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
      <ae-text contenteditable>Main Account</ae-text>
    </template>
    <ae-qrcode slot="left" />
    <ae-address value="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" length="medium" />
    <ae-toolbar align="justify" slot="footer">
      <span slot="left">Left</span>
      center
      <span slot="right">Right</span>
    </ae-toolbar>
  </ae-card>
``` 
