<template>
  <div class="ae-amount" :class="cssClass">
    {{value}}
    <div v-if='unit' class="unit">{{unit}}</div>
  </div>
</template>

<script src='./aeAmount.js'/>
// eslint-disable-next-line no-unused-expressions, semi
<style scoped src='./aeAmount.scss' lang='scss' />
