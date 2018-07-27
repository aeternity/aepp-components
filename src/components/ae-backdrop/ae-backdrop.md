```jsx
  <div style="position: relative; width: 375px; height: 667px; padding: 32px;">
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
    <ae-backdrop visible>
        <ae-text> This text lives inside the backdrop area</ae-text>
      </ae-backdrop>
  </div>
``` 

### prop: visible
```vue
<template>
  <div>
    <div style="position: relative; width: 375px; height: 667px; padding: 32px;">
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
      <br />  
      <ae-button @click="showBackdrop" face="primary" extend>Show Backdrop</ae-button>
      <ae-backdrop align="top" :visible="backDropVisible" @click.native.capture="showBackdrop">
        <ae-text>This text lives inside the backdrop area</ae-text>
      </ae-backdrop>
    </div>
  </div>
 </template>

<script>
  export default {
    data() {
      return { backDropVisible: false };
    },
    methods: {
      showBackdrop() {
       this.backDropVisible = !this.backDropVisible;
      }
    }
  }
</script>
``` 

### prop: align
```jsx
  <div style="position: relative; width: 375px; height: 667px; padding: 32px;">
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
    <ae-backdrop align="top" visible>
        <ae-text> This text lives inside the backdrop area</ae-text>
      </ae-backdrop>
  </div>
``` 

```jsx
  <div style="position: relative; width: 375px; height: 667px; padding: 32px;">
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
    <ae-backdrop align="bottom" visible>
        <ae-text> This text lives inside the backdrop area</ae-text>
      </ae-backdrop>
  </div>
``` 

### prop: fill
```jsx
  <div style="position: relative; width: 375px; height: 667px; padding: 32px;">
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
    <ae-backdrop fill="neutral" visible>
        <ae-text> This text lives inside the backdrop area</ae-text>
      </ae-backdrop>
  </div>
``` 

```jsx
  <div style="position: relative; width: 375px; height: 667px; padding: 32px;">
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
    <ae-backdrop fill="default" visible>
        <ae-text> This text lives inside the backdrop area</ae-text>
      </ae-backdrop>
  </div>
``` 

```jsx
  <div style="position: relative; width: 375px; height: 667px; padding: 32px;">
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
    <ae-backdrop fill="alternative" visible>
        <ae-text> This text lives inside the backdrop area</ae-text>
      </ae-backdrop>
  </div>
``` 

```jsx
  <div style="position: relative; width: 375px; height: 667px; padding: 32px;">
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
    <ae-backdrop fill="emphasis" visible>
        <ae-text> This text lives inside the backdrop area</ae-text>
      </ae-backdrop>
  </div>
``` 
