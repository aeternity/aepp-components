<template>
  <p class="ae-text"
     :class="{ [fill]: Boolean(fill), [face]: Boolean(face), focus, disabled }"
     :style="{ fontWeight: weight }" >
    <!-- @slot Default slot -->
    <slot />
  </p>
</template>
<style src="./ae-text.scss" lang="scss" scoped />
<script src="./ae-text.js" />
