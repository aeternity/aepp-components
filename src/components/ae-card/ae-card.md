```jsx
  <ae-card>Hello world!</ae-card>
``` 

### prop: fill
```jsx
<ae-card>
  <template slot="avatar">
    <ae-avatar address="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
    <ae-text contenteditable>My Account</ae-text>
  </template>
  <template slot="header">
    <ae-text fill="white" face="mono-base">20.65 AE</ae-text>
  </template>
  <ae-text face="uppercase-xs" weight=600 style="margin: 0">Normal Secured</ae-text>
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
``` 

```jsx
<ae-card fill="default">
  <template slot="avatar">
    <ae-avatar address="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
    <ae-text fill="white" contenteditable>My Account</ae-text>
  </template>
  <template slot="header">
    <ae-text fill="white" face="mono-base">20.65 AE</ae-text>
  </template>
  <ae-text face="uppercase-xs" weight=600 style="margin: 0">Normal Secured</ae-text>
  <ae-address value="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" length="medium" gap=0 />
  <ae-toolbar fill="default" align="right" slot="footer">
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
``` 

```jsx
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
  <ae-toolbar fill="emphasis" align="right" slot="footer">
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
``` 

```jsx
<ae-card fill="alternative">
  <template slot="avatar">
    <ae-avatar address="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
    <ae-text fill="white" contenteditable>My Account</ae-text>
  </template>
  <template slot="header">
    <ae-text fill="white" face="mono-base">20.65 AE</ae-text>
  </template>
  <div>
    <ae-icon name="shield" />
    <ae-text face="uppercase-xs" weight=600 style="margin: 0">Maximum Secured</ae-text>
  </div>
  <ae-address value="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" length="medium" gap=0 />
  <ae-toolbar fill="alternative" align="right" slot="footer">
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
``` 

```jsx
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
``` 
