<template>
  <div :class="`balance${ this.size ? ' ' + this.size : ''}${ this.color ? ' ' + this.color : ''}`">
    {{ this.value }}
    <div class="unit">Æ</div>
  </div>
</template>

<script src='./aeBalance.js'/>
// eslint-disable-next-line no-unused-expressions, semi
<style scoped src='./aeBalance.scss' lang='scss' />
