<template>
  <div class="ae-toolbar" :class="{ [fill]: Boolean(fill), [align]: Boolean(align), disabled }">
    <!-- @slot Default slot / center positioned slot -->
    <slot />
  </div>
</template>
<style src="./ae-toolbar.scss" lang="scss" scoped />
<script src="./ae-toolbar.js" />
