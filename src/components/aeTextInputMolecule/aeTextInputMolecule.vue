<template>
  <div class="ae-text-input-molecule">
    <div class="top-container" v-if="!!label || !!_errorMessage">
      <label class="label" v-if="!!label" :for="internalInputId">{{label}}</label>
      <span
        class="errorMessage"
        v-if="!!_errorMessage"
        ref="errorMessage"
      >
        {{_errorMessage}}
      </span>
    </div>
    <ae-validated-text-input
      :inputId="internalInputId"
      :validateOnBlur="validateOnBlur"
      :validateOnInput="validateOnInput"
      :value="internalValue"
      @blur="onBlur"
      @clearRequest="clearInput"
      @input="onInput"
      @validation="onValidate"
      @focus="onFocus"
      @keydown="forwardKeyEvent"
      @keyup="forwardKeyEvent"
      @keypress="forwardKeyEvent"
    />
  </div>
</template>
<script src="./aeTextInputMolecule.js">
  export {default} from './aeTextInputMolecule'
</script>
<style scoped lang="scss" src="./aeTextInputMolecule.scss"/>
