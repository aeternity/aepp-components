```jsx
  <div style="height: 230px">
    <ae-flip>
      <template slot="front">
        <ae-card fill="emphasis">
          <template slot="avatar">
            <ae-avatar address="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
            <ae-text fill="white" contenteditable>My Account</ae-text>
          </template>
          <template slot="header">
            <ae-text fill="white" face="mono-base">20.65 AE</ae-text>
          </template>
          <ae-text face="uppercase-xs" weight=600 style="margin: 0">Normal Secured</ae-text>
          <ae-address value="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" length="medium" gap=0 />
          <ae-toolbar fill="emphasis" align="justify" slot="footer">
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
      </template>
      <template slot="back">
        <ae-card fill="neutral" align="center">
          <ae-qrcode :options="{ size: 136 }" />
          <ae-address value="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" gap=0 />
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
      </template>
    </ae-flip>
  </div>
``` 
