<template>
  <div class="ae-amount-input">
    <ae-input
      type="number"
      monospace
      :value="value.amount"
      :placeholder="placeholder"
      @input="amount => handleInput({ amount })"
    >
      <div slot="left" class="side" />
      <button
        slot="right"
        class="side"
        @click="dropDownVisible = !dropDownVisible">
        {{value.symbol}} <ae-icon name="chevron" rotate="90" />
      </button>
    </ae-input>
    <div
      v-if="dropDownVisible"
      class="drop-down"
      @click="dropDownVisible = false"
      v-on-click-away="() => dropDownVisible = false"
    >
      <button
        v-for="u in units"
        @click="handleInput({ symbol: u.symbol })"
      >
        {{u.symbol}} ({{u.name}})
      </button>
    </div>
  </div>
</template>
<script src='./aeAmountInput.js'/>
/* eslint no-unused-expressions: "off" */
<style src='./aeAmountInput.scss'/>
