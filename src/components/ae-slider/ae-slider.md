```vue
  <div>
    <ae-slider>
      <div>
        <ae-card fill="primary">
          <template slot="avatar">
            <ae-identicon address="ak_QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
            <ae-text fill="white" contenteditable>My Account</ae-text>
          </template>
          <template slot="header">
            <ae-text fill="white" face="mono-base">20.65 AE</ae-text>
          </template>
          <ae-text face="uppercase-xs" weight=600 style="margin: 0">Normal Secured</ae-text>
          <ae-address value="ak_QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" length="medium" gap=0 />
          <ae-toolbar fill="primary" align="justify" slot="footer">
            <ae-button face="toolbar">
              <ae-icon name="edit" />
              Rename
            </ae-button>
            <div>
              <ae-button face="toolbar">
                <ae-icon name="copy" />
                Copy
              </ae-button>
              <ae-button face="toolbar">
                <ae-icon name="share" />
                Share
              </ae-button>
            </div>
          </ae-toolbar>
        </ae-card>
      </div>
      <div>
        <ae-card fill="neutral" align="center">
          <ae-qrcode value="example" :options="{ size: 136 }" />
          <ae-address value="ak_QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" gap=0 />
          <ae-toolbar fill="neutral" align="right" slot="footer">
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
      </div>
    </ae-slider>
  </div>
``` 

### prop: fullscreen
```vue
  <div style="position: relative; width: 375px; height: 667px; padding: 32px;">
    <ae-slider fullscreen>
      <div style="width: 100%; height: 100%;">
        hello
      </div>
      <div style="width: 100%; height: 100%;">
       world
      </div>
    </ae-slider>
  </div>
``` 
