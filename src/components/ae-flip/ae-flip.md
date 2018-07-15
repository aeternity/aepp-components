### component
```jsx
  <ae-flip>
    <template slot="front">
      <ae-card>
        <template slot="header">
          <ae-avatar address="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
        </template>
        <template slot=left>
          Normal Secured
        </template>
        <ae-address value="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" length="medium" />
        <ae-toolbar align="justify" slot="footer">
          <span slot="left">Left</span>
          center
          <span slot="right">Right</span>
        </ae-toolbar>
      </ae-card>
    </template>
    <template slot="back">
      <ae-card>
        <ae-qrcode slot="left" :options="{ size: 160 }" />
        <ae-address value="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" slot=right />
        <ae-toolbar align="justify" slot="footer">
          <span slot="left">Left</span>
          center
          <span slot="right">Right</span>
        </ae-toolbar>
      </ae-card>
    </template>
  </ae-flip>
``` 
