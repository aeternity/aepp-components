<template>
  <span :class="cssClasses" @click="$emit('click', $event)">
    <slot/>
  </span>
</template>

<script src="./aeAccountBackground.js"/>
<style scoped src="./aeAccountBackground.scss" lang="scss"/>
