<template>
  <ae-text-input
    ref="input"
    :value="internalValue"
    :inputId="inputId"
    :hasError="hasError"
    @input="onInput"
    @blur="onBlur"
    @focus="onFocus"
    @keydown = "forwardEvent"
    @keyup = "forwardEvent"
    @keypress = "forwardEvent"
    @clearRequest = "onClearRequest"
  />
</template>
<script src="./aeValidatedTextInput.js">
  export {default} from './aeValidatedTextInput'
</script>
<style scoped lang='scss' src='./aeValidatedTextInput.scss'/>
