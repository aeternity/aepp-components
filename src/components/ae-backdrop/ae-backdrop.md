```vue
  <div style="position: relative; width: 375px; height: 667px; padding: 32px;">
    <ae-card>
      <template slot="avatar">
        <ae-identicon address="ak_QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
        <ae-input-plain placeholder="Account name" value="My account" />
      </template>
      <template slot="header">
        <ae-text fill="white" face="mono-base">20.65 AE</ae-text>
      </template>
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
    <ae-backdrop>
      <ae-text> This text lives inside the backdrop area</ae-text>
    </ae-backdrop>
  </div>
``` 

### enter and leave transitions
```vue
<template>
  <div>
    <div style="position: relative; width: 375px; height: 667px; padding: 32px;">
      <ae-card>
        <template slot="avatar">
          <ae-identicon address="ak_QY8VNEkhj7omMUjAvfVBq2NjTDy895LBYbk7qVxQo1qT8VqfE" />
          <ae-input-plain placeholder="Account name" value="My account" />
        </template>
        <template slot="header">
          <ae-text fill="white" face="mono-base">20.65 AE</ae-text>
        </template>
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
      <br />  
      <ae-button @click="showBackdrop" face="round" extend>Show Backdrop</ae-button>
      <ae-backdrop v-if="backDropVisible" @click.native.capture="showBackdrop">
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
