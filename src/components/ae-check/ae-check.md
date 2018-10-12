```vue
<ae-check />
``` 

### prop: type
```vue
<template>
  <div>
    <h2>Radio</h2>
    <div>
      <ae-check v-model="singleChoice" value="1" type="radio">
        Radio button 1
      </ae-check>
    </div>
    <div>
      <ae-check v-model="singleChoice" value="2" type="radio">
        Radio button 2
      </ae-check>
    </div>
    <div>value: {{ singleChoice }}</div>

    <h2>Checkbox</h2>
    <div>
      <ae-check v-model="multipleChoices" value="1" type="checkbox">
        Checkbox 1
      </ae-check>
    </div>
    <div>
      <ae-check v-model="multipleChoices" value="2" type="checkbox">
        Checkbox 2
      </ae-check>
    </div>
    <div>value: {{ multipleChoices }}</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    singleChoice: undefined,
    multipleChoices: ['2'],
  })
}
</script>

<style scoped>
label:not(.ae-check) {
  display: block;
}
</style>
``` 

### prop: disabled
```vue
<ae-check disabled />
``` 
