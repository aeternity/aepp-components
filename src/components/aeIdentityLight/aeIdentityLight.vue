<template>
  <div @click="forwardEvent" :class="classObject">
    <div class="flex-row">
      <ae-identity-avatar
        class="avatar"
        :address='address'
      />
      <span :class="['identity-name-position', collapsedModifier]">
        <span role="heading" :class="['identity-name', collapsedModifier]">{{name}}</span>
        <small class="truncated-address" v-if="collapsed">{{address | shorten}}  ••••••</small>
      </span>
      <div class="balances">
        <div class="balance token">
          <span class="amount">{{balance | readableToken}}</span>
          <span class="currency-symbol">AE</span>
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

<script src='./aeIdentityLight.js'/>

<style scoped src='./aeIdentityLight.scss' lang='scss'/>
