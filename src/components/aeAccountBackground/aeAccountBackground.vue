<template>
  <span :class="cssClasses" @click="$emit('click', $event)">
    <slot/>
  </span>
</template>

<script src="./aeAccountBackground.js">
  export { default } from './aeAccountBackground'
</script>
// eslint-disable-next-line no-unused-expressions, semi
<style scoped src="./aeAccountBackground.scss" lang="scss"/>

