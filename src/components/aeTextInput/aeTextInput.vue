<template>
  <div class="ae-text-input">
    <input
      :id="inputId"
      :placeholder="placeholder"
      v-model="internalValue"
      :class="['input', validModifier]"
      type="text"
      ref="input"
      @blur="onBlur"
      @focus="onFocus"
      @input="onInput"
      @keydown="forwardKeyEvent"
      @keyup="forwardKeyEvent"
      @keypress="forwardKeyEvent"
    >
    <ae-button ref="clear-button" class="ae-text-input__clear-btn" type='exciting' size="small" @click="onClearRequest">
      <ae-icon class="ae-text-input__clear-icon" slot='icon' type='exciting' invert name='close'/>
    </ae-button>
  </div>
</template>
<script src='./aeTextInput.js'>
  export {default} from './aeTextInput'
</script>
<style scoped lang="scss" src="./aeTextInput.scss"/>
