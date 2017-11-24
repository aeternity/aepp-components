<template>
  <div :class="`ae-amount${ this.size ? ' ' + this.size : ''}${ this.color ? ' ' + this.color : ''}`">
    {{ this.value }}
    <div class="unit">Æ</div>
  </div>
</template>

<script src='./aeAmount.js'/>
// eslint-disable-next-line no-unused-expressions, semi
<style scoped src='./aeAmount.scss' lang='scss' />
