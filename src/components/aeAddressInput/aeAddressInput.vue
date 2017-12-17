<template>
  <div>
    <label>
      Address
      <span class="help" :class="{ danger: !addressValid }">
        <span v-if='addressValid'>
          Valid |
          <a v-if='externalLink' :href='externalLink' target='_blank'>
            Show Info
          </a>
        </span>
        <span v-else>
          {{errorMessage}}
        </span>
      </span>
    </label>
    <ae-validated-text-input
      :validateOnBlur="validateOnBlur"
      :validateOnInput="validateOnInput"
      :defaultErrorMessage="errorMessage"
      :value="address"
      :maxlength="42"
      @input="onInput"
      @clearRequest="onClearRequest"
    />
  </div>
</template>
<script src='./aeAddressInput.js'/>
/* eslint no-unused-expressions: "off" */
<style lang="scss" src='./aeAddressInput.scss'/>
