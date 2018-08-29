<template>
  <div class="ae-splash" :class="{ [fill]: Boolean(fill), [face]: Boolean(face) }">
    <!-- @slot Default slot -->
    <slot />
  </div>
</template>
<style src="./ae-splash.scss" lang="scss" scoped />
<script src="./ae-splash.js" />
