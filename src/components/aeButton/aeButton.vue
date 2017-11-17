<template>
  <button :class="`button${ this.size ? ' ' + this.size : '' }${ this.color ? ' ' + this.color : '' }`">
    {{ this.label }}
  </button>
</template>

<script src='./aeButton.js'/>
// eslint-disable-next-line no-unused-expressions, semi
<style scoped src='./aeButton.scss' lang='scss' />
