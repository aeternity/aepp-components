<template>
  <div @click="$emit('click', $event)" :class="classObject">
    <div class="flex-row">
      <ae-identity-avatar class="ae-identity__avatar" :address='identity ? identity.address : ""'/>
      <span :class="['identity-name-position', collapsedModifier]">
        <header :class="['identity-name', collapsedModifier]">{{identityName}}</header>
        <small class="truncated-address" v-if="collapsed" data-truncated-address>{{shortAddress}}  ••••••</small>
      </span>
      <div class="balances">
        <div v-if='tokenAmount' class="balance _bold">
          <span class="amount" data-token-amount>{{tokenAmount}}</span>
          <span class="currency-symbol">AE</span>
        </div>
        <div class="balance">
          <span class="amount" data-amount>{{amount}}</span>
          <span class="currency-symbol">ETH</span>
        </div>
      </div>
    </div>
    <div v-if="!collapsed" v-for="chunk in chunkAddress" class="chunk-row">
      <div v-for="data in chunk" class="chunk" data-chunk>
        {{data}}
      </div>
    </div>
  </div>
</template>

<script src='./aeIdentity.js'>
  export {default} from './aeIdentity'
</script>
// eslint-disable-next-line no-unused-expressions, semi
<style scoped src='./aeIdentity.scss' lang='scss'/>
