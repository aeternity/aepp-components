### component
```jsx
  <ae-flip>
    <template slot="front">
      <ae-card>
        <template slot="header">
          <ae-avatar address="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
        </template>
        <template slot=left>
          <ae-text face="uppercase-xs" weight=600 style="margin: 0">Normal Secured</ae-text>
        </template>
        <ae-address value="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" length="medium" gap=0 />
        <ae-toolbar align="right" slot="footer">
          <ae-button face="toolbar">
            <ae-icon name="eye" />
            Details
          </ae-button>
          <ae-button face="toolbar">
            <ae-icon name="copy" />
            Copy
          </ae-button>
          <ae-button face="toolbar">
            <ae-icon name="share" />
            Share
          </ae-button>
        </ae-toolbar>
      </ae-card>
    </template>
    <template slot="back">
      <ae-card>
        <ae-qrcode slot="left" :options="{ size: 160 }" />
        <ae-address value="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" slot=right />
        <ae-toolbar align="right" slot="footer">
          <ae-button face="toolbar">
            <ae-icon name="eye" />
            Details
          </ae-button>
          <ae-button face="toolbar">
            <ae-icon name="copy" />
            Copy
          </ae-button>
          <ae-button face="toolbar">
            <ae-icon name="share" />
            Share
          </ae-button>
        </ae-toolbar>
      </ae-card>
    </template>
  </ae-flip>
``` 
