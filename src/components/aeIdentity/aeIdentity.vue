<template>
  <div class="identity-wrap">
    <div @click="$emit('click', $event)" :class="classObject">
      <div v-if="!blank">
        <div class="flex-row">
          <ae-identity-avatar :address='identity ? identity.address : ""'/>
          <span class="identity-info _short" v-if="collapsed">{{shortAddress}}</span>

          <div>
            <div v-if='tokenAmount' :class="{balance: true}">
              <span class="amount">{{tokenAmount}}</span>
              <span class="currency-symbol">AE</span>
            </div>
            <div :class="{balance: true}">
              <span class="amount">{{amount}}</span>
              <span class="currency-symbol">ETH</span>
            </div>
          </div>
        </div>
        <div v-if="!collapsed" class="chunked-address">
          <div v-for="chunk in chunkAddress" class="chunk">
            {{chunk}}
          </div>
        </div>
        <div class="footer" v-if="slot">
          <slot></slot>
        </div>
      </div>
      <div v-else>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script src='./aeIdentity.js'/>
// eslint-disable-next-line no-unused-expressions, semi
<style scoped src='./aeIdentity.scss' lang='scss'/>
