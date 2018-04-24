<template>
  <div class="ae-amount" :class="cssClass">
    <span :class="['value', sizeModifier]">{{value}}</span>
    <span v-if='unit' :class="['unit', sizeModifier]">{{unit}}</span>
  </div>
</template>

<script src='./aeAmount.js'/>
<style scoped src='./aeAmount.scss' lang='scss' />
