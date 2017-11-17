<template>
  <div :class="{ amount: true, 'full-width': isFullWidth }">
    <button class="subtract">-</button>
    <div class="value">
      {{value}}
      <div class="unit">Æ</div>
    </div>
    <button class="add">+</button>
  </div>
</template>

<script src='./aeAmount.js'/>
// eslint-disable-next-line no-unused-expressions, semi
<style scoped src='./aeAmount.scss' lang='scss' />
