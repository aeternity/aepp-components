<template>
  <div :class="`amount${this.isFullWidth ? ' full-width' : ''}`">
    <button class="subtract">-</button>
    <div class="value">
      {{ this.value }}
      <div class="unit">Æ</div>
    </div>
    <button class="add">+</button>
  </div>
</template>

<script src='./aeAmount.js'/>
<style scoped src='./aeAmount.scss' lang='scss' />
