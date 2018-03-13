<template>
  <ae-textarea
    class="ae-address-input"
    type="textarea"
    monospace
    :value="formattedValue"
    @input="handleInput"
    @copy="handleCopy"
  />
</template>
<script src='./aeAddressInput.js'/>
/* eslint no-unused-expressions: "off" */
<style src='./aeAddressInput.scss'/>
