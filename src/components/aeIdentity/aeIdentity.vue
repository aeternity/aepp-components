<template>
  <ae-identity-background
    :type="backgroundType"
    class="ae-identity"
    @click="forwardEvent"
  >
    <ae-identity-light :identity="identity" :collapsed="collapsed" invert/>
    <div class="footer" v-if="$slots.default">
      <slot></slot>
    </div>
  </ae-identity-background>
</template>

<script src='./aeIdentity.js'/>
<style scoped src='./aeIdentity.scss' lang='scss'/>
