```vue
  <div style="position: relative; width: 375px; height: 667px; border: 1px solid #D3DCE6;">
    <ae-view>
      
    </ae-view>
  </div> 
```

### prop: face
```vue
  <div style="position: relative; width: 375px; height: 667px; border: 1px solid #D3DCE6;">
    <ae-view face="base">
      
    </ae-view>
  </div> 
```

```vue
  <div style="position: relative; width: 375px; height: 667px; border: 1px solid #D3DCE6; overflow: hidden;">
    <ae-view face="frame">
      
    </ae-view>
  </div> 
```

```vue
  <div style="position: relative; width: 375px; height: 667px; border: 1px solid #D3DCE6;">
    <ae-view face="base">
      <template slot="header">
        Header
      </template>
      <ae-view face="frame">
        <template slot="header">
          Header
        </template>
      </ae-view>
    </ae-view>
  </div> 
```

```vue
<template>
  <div>
      <ae-button @click="show" face="round" extend style="margin-bottom: 20px;">Show</ae-button>
      <div style="position: relative; width: 375px; height: 667px; border: 1px solid #D3DCE6;">
        <ae-view face="base">
          <template slot="header">
            <ae-input />
            <div style="display: flex; justify-content: flex-end;">
              <ae-button>
                <ae-icon name="more" size="20px" />
              </ae-button>
              <ae-button>
                <ae-icon name="settings" size="20px" />
              </ae-button>
              <ae-button>
                <ae-icon name="list" size="20px" />
              </ae-button>
            </div>
          </template>
          <ae-view face="frame" :visible="visible">
            <template slot="header">
              Header
            </template>
          </ae-view>
        </ae-view>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return { visible: false };
    },
    methods: {
      show() {
       this.visible = !this.visible;
      }
    }
  }
</script>
``` 
