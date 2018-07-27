<template>
  <div class="ae-backdrop"
       :class="{ [fill]: Boolean(fill), [align]: Boolean(align), visible }">
    <slot />
  </div>
</template>
<style src="./ae-backdrop.scss" lang="scss" scoped />
<script src="./ae-backdrop.js" />
