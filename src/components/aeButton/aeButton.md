```js
<div>
  <ae-button type="boring">Boring</ae-button>
  <ae-button type="normal">Normal</ae-button>
  <ae-button type="exciting">Exciting</ae-button>
  <ae-button type="dramatic">Dramatic</ae-button>
</div>
```

```js
<div>
  <ae-button size="smaller">Smaller</ae-button>
  <ae-button size="small">Small</ae-button>
  <ae-button size="medium">Medium</ae-button>
  <ae-button size="large">Large</ae-button>
</div>
```

```js
<div>
  <ae-button>Active</ae-button>
  <ae-button inactive>Inactive</ae-button>
</div>
```
aeButton with aeIcon
```js
<div>
  <ae-button size='smaller' type='boring'>
    <ae-icon slot='icon' type='boring' name="close"/>
  </ae-button>
  <ae-button size='smaller' type='normal'>
    <ae-icon slot='icon' name="close"/>
  </ae-button>
  <ae-button size='smaller' type='exciting'>
    <ae-icon slot='icon' type='exciting' name="close"/>
  </ae-button>
  <ae-button size='smaller' type='dramatic'>
    <ae-icon slot='icon' type='dramatic' name="close"/>
  </ae-button>
  
  <ae-button size='small' type='boring'>
    <ae-icon slot='icon' invert type='boring' name="close"/>
  </ae-button>
  <ae-button size='medium' type='boring'>
    <ae-icon slot='icon' invert type='boring' name="close"/>
  </ae-button>
  <ae-button size='large' type='boring'>
    <ae-icon slot='icon' invert type='boring' name="close"/>
  </ae-button>
  
  <ae-button size='medium' type='normal'>
    <ae-icon slot='icon' name="arrow"/>
  </ae-button>
  
  <ae-button size='medium' type='exciting'>
    <ae-icon slot='icon' invert type='exciting' name="check"/>
  </ae-button>
  
  <ae-button size='medium' type='dramatic'>
    <ae-icon slot='icon' invert type='dramatic' name="chevron"/>
  </ae-button>
</div>
```

with aeIcon and label
```js
<div>
  <ae-button type="normal">
    <ae-icon slot="icon" name="error" />
    Error
  </ae-button>
  <ae-button type="exciting">
    <ae-icon type="exciting" invert slot="icon" name="check" />
    Check
  </ae-button>
  <ae-button type="dramatic">
    <ae-icon type="dramatic" invert slot="icon" name="close" />
    Close
  </ae-button>
</div>
```
```js
<div>
  <ae-button>Normal</ae-button>
  <ae-button uppercase>Uppercase</ae-button>
</div>
```


full width block button
```js
<div>
  <ae-button block>Block buttons that span full width</ae-button>
</div>
```

inactive
```js
<div>

  <ae-button inactive type='boring'>Button</ae-button>
  <ae-button inactive size='small' type='normal'>Button</ae-button>
  <ae-button inactive type='exciting'>Button</ae-button>
  <ae-button inactive size='large' type='dramatic'>Button</ae-button>
  
  <ae-button inactive size='smaller' type='normal'>
    <ae-icon slot='icon' name="check"/>
  </ae-button>
  <ae-button inactive size='medium' type='normal'>
    <ae-icon slot='icon' name="close"/>
  </ae-button>
  <ae-button inactive size='large' type='exciting'>
    <ae-icon slot='icon' invert type='exciting' name="burger"/>
  </ae-button>
  
  <ae-button>Normal</ae-button>
  <ae-button plain>Plain</ae-button>
  <ae-button plain type="exciting">Plain exciting</ae-button>
  <ae-button plain type="dramatic">Plain dramatic</ae-button>
</div>
```

```js
  <ae-button to="//example.com">As link</ae-button>
```