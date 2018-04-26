<template>
  <div @click="forwardEvent" :class="classObject">
    <div class="flex-row">
      <ae-identity-avatar
        class="avatar"
        :address='identity.address'
      />
      <span :class="['identity-name-position', collapsedModifier]">
        <span role="heading" :class="['identity-name', collapsedModifier]">{{identity.name}}</span>
        <small class="truncated-address" v-if="collapsed">{{identity.address | shorten}}  ••••••</small>
      </span>
      <div class="balances">
        <div v-if='tokenAmount' class="balance token">
          <span class="amount">{{tokenAmount}}</span>
          <span class="currency-symbol">AE</span>
        </div>
        <div class="balance">
          <span class="amount">{{amount}}</span>
          <span class="currency-symbol">ETH</span>
        </div>
      </div>
    </div>
    <div v-if="!collapsed" v-for="(chunk, idx) in chunkAddress" :key="idx" class="chunk-row">
      <div v-for="(data, idx) in chunk" :key="idx" class="chunk">
        {{data}}
      </div>
    </div>
  </div>
</template>

<script src='./aeIdentityMain.js'/>

<style scoped src='./aeIdentityMain.scss' lang='scss'/>
