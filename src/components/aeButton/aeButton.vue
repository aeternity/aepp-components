<template>
  <button class="button" :class="{ [size]: size, [color]: color }">
    <slot />
  </button>
</template>

<script src='./aeButton.js'/>
// eslint-disable-next-line no-unused-expressions, semi
<style scoped src='./aeButton.scss' lang='scss' />
