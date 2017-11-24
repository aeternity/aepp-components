<template>
  <button class="ae-button" :class="cssClass">
    <div class="inner">
      <slot>
      </slot>
    </div>
  </button>
</template>

<script src='./aeButton.js'/>
// eslint-disable-next-line no-unused-expressions, semi
<style scoped src='./aeButton.scss' lang='scss' />
