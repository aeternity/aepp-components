<template>
  <button :class="`button${ this.size ? ' ' + this.size : '' }${ this.color ? ' ' + this.color : '' }`">
    {{ this.label }}
  </button>
</template>

<script src='./aeButton.js'/>
<style scoped src='./aeButton.scss' lang='scss' />
