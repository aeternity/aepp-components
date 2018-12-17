```vue
  <ae-card>Hello world!</ae-card>
``` 

### prop: fill
```vue
<ae-card>
  <template slot="avatar">
    <ae-identicon address="ak_QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
    <ae-input-plain placeholder="Account name" value="My account" />
  </template>
  <ae-icon name="more" size="20px" slot="header" />
  <ae-text face="uppercase-xs" weight=600 style="margin: 0">Normal Secured</ae-text>
  <ae-address value="ak_QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" length="medium" gap=0 />
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

```vue
<ae-card fill="primary">
  <template slot="avatar">
    <ae-identicon address="ak_QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
    <ae-input-plain fill="white" placeholder="Account name" value="My Account" />
  </template>
  <ae-icon name="more" fill="white" size="20px" slot="header" />
  <ae-text face="uppercase-xs" weight=600 style="margin: 0">Normal Secured</ae-text>
  <ae-address value="ak_QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" length="medium" gap=0 />
  <ae-toolbar fill="primary" align="right" slot="footer">
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

```vue
<ae-card fill="secondary">
  <template slot="avatar">
    <ae-identicon address="ak_QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
    <ae-input-plain fill="white" placeholder="Account name" value="My Account" />
  </template>
  <ae-icon name="more" fill="white" size="20px" slot="header" />
  <ae-text face="uppercase-xs" weight=600 style="margin: 0">Normal Secured</ae-text>
  <ae-address value="ak_QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" length="medium" gap=0 />
  <ae-toolbar fill="secondary" align="right" slot="footer">
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

```vue
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
``` 

```vue
<ae-card fill="alternative">
  <template slot="avatar">
    <ae-identicon address="ak_QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
    <ae-input-plain fill="white" placeholder="Account name" value="My Account" />
  </template>
  <ae-icon name="more" fill="white" size="20px" slot="header" />
  <div>
    <ae-icon name="shield" />
    <ae-text face="uppercase-xs" weight=600 style="margin: 0">Maximum Secured</ae-text>
  </div>
  <ae-address value="ak_QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" length="medium" gap=0 />
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

