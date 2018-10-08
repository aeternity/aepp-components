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
    <ae-dropdown>
      <ae-icon name="more" size="20px" slot="button" />
      <li>
        <ae-button>
          <ae-icon name="copy" />
          Copy Address
        </ae-button>
      </li>
      <li>
        <ae-button>
          Share Address
        </ae-button>
      </li>
      <li>
        Details
      </li>
    </ae-dropdown>
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
<ae-card fill="primary">
  <template slot="avatar">
    <ae-avatar address="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
    <ae-text fill="white" contenteditable>My Account</ae-text>
  </template>
  <template slot="header">
    <ae-dropdown>
      <ae-icon name="more" fill="white" size="20px" slot="button" />
      <li>
        <ae-button>
          <ae-icon name="copy" />
          Copy Address
        </ae-button>
      </li>
      <li>
        <ae-button>
          Share Address
        </ae-button>
      </li>
      <li>
        Details
      </li>
    </ae-dropdown>
  </template>
  <ae-text face="uppercase-xs" weight=600 style="margin: 0">Normal Secured</ae-text>
  <ae-address value="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" length="medium" gap=0 />
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

```jsx
<ae-card fill="secondary">
  <template slot="avatar">
    <ae-avatar address="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
    <ae-text fill="white" contenteditable>My Account</ae-text>
  </template>
  <template slot="header">
    <ae-dropdown>
      <ae-icon name="more" fill="white" size="20px" slot="button" />
      <li>
        <ae-button>
          <ae-icon name="copy" />
          Copy Address
        </ae-button>
      </li>
      <li>
        <ae-button>
          Share Address
        </ae-button>
      </li>
      <li>
        Details
      </li>
    </ae-dropdown>
  </template>
  <ae-text face="uppercase-xs" weight=600 style="margin: 0">Normal Secured</ae-text>
  <ae-address value="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" length="medium" gap=0 />
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

```jsx
  <ae-card fill="neutral" align="center">
    <ae-qrcode value="example" :options="{ size: 136 }" />
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

```jsx
<ae-card fill="alternative">
  <template slot="avatar">
    <ae-avatar address="ak$QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
    <ae-text fill="white" contenteditable>My Account</ae-text>
  </template>
  <template slot="header">
    <ae-dropdown>
      <ae-icon name="more" fill="white" size="20px" slot="button" />
      <li>
        <ae-button>
          <ae-icon name="copy" />
          Copy Address
        </ae-button>
      </li>
      <li>
        <ae-button>
          Share Address
        </ae-button>
      </li>
      <li>
        Details
      </li>
    </ae-dropdown>
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

