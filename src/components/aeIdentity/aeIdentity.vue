<template>
  <ae-account-background
    :type="backgroundType"
    class="ae-identity"
    @click="$emit('click', $event)"
  >
    <ae-identity-main :identity="identity" :collapsed="collapsed" @click.stop="$emit('click', $event)"/>
    <div class="footer" v-if="$slots.default">
      <slot></slot>
    </div>
  </ae-account-background>
</template>

<script src='./aeIdentity.js'/>
// eslint-disable-next-line no-unused-expressions, semi
<style scoped src='./aeIdentity.scss' lang='scss'/>
