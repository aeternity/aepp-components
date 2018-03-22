<template>
  <div @click="$emit('click', $event)" :class="classObject">
    <div class="flex-row">
      <ae-identity-avatar class="ae-identity__avatar" :address='identity ? identity.address : ""'/>
      <span class="identity-info _short" v-if="collapsed">{{shortAddress}}</span>
      <div class="balances">
        <div v-if='tokenAmount' class="balance _bold">
          <span class="amount">{{tokenAmount}}</span>
          <span class="currency-symbol">AE</span>
        </div>
        <div class="balance">
          <span class="amount">{{amount}}</span>
          <span class="currency-symbol">ETH</span>
        </div>
      </div>
    </div>
    <div v-if="!collapsed" v-for="chunk in chunkAddress" class="chunk-row">
      <div v-for="data in chunk" class="chunk">
        {{data}}
      </div>
    </div>
  </div>
</template>

<script src='./aeIdentity.js'/>
// eslint-disable-next-line no-unused-expressions, semi
<style scoped src='./aeIdentity.scss' lang='scss'/>
