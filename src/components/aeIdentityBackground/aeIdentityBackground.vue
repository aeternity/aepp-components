<template>
  <span :class="cssClasses" @click="$emit('click', $event)">
    <slot/>
  </span>
</template>

<script src="./aeIdentityBackground.js"/>
<style scoped src="./aeIdentityBackground.scss" lang="scss"/>
