<template>
  <ae-text-input
    ref="input"
    :value="internalValue"
    :inputId="inputId"
    :hasError="hasError"
    :placeholder="placeholder"
    @input="onInput"
    @blur="onBlur"
    @focus="onFocus"
    @keydown = "forwardEvent"
    @keyup = "forwardEvent"
    @keypress = "forwardEvent"
    @clearRequest = "onClearRequest"
    :maxlength="maxlength"
  />
</template>
<script src="./aeValidatedTextInput.js"/>
