<template>
  <div :class="cssClasses" @click="$emit('click', $event)">
    <slot/>
  </div>
</template>

<script src="./aeIdentityBackground.js"/>
<style scoped src="./aeIdentityBackground.scss" lang="scss"/>
