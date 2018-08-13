```vue
<div>
  <ae-button type="boring">Boring</ae-button>
  <ae-button type="normal">Normal</ae-button>
  <ae-button type="exciting">Exciting</ae-button>
  <ae-button type="dramatic">Dramatic</ae-button>
</div>
```

```vue
<div>
  <ae-button size="small">Small</ae-button>
  <ae-button size="medium">Medium</ae-button>
  <ae-button size="large">Large</ae-button>
</div>
```

```vue
<ae-button disabled>Disabled</ae-button>
```

aeButton with aeIcon
```vue
<ae-button>
  <ae-icon slot="icon" name="plus" />
</ae-button>
```

with aeIcon and label
```vue
<ae-button>
  <ae-icon invert slot="icon" name="plus" />
  Example
</ae-button>
```

```vue
<ae-button uppercase>Uppercase</ae-button>
```

full width block button
```vue
<ae-button :style="{ width: '100%' }">
  Block buttons that span full width
</ae-button>
```

```vue
<div>
  <ae-button plain>Plain</ae-button>
  <ae-button plain type="exciting">Plain exciting</ae-button>
  <ae-button plain type="dramatic">Plain dramatic</ae-button>
</div>
```

```vue
<ae-button to="//example.com">As link</ae-button>
```
