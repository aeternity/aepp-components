<template>
  <button class="ae-button" :class="{ [fill]: Boolean(fill), [face]: Boolean(face), disabled }">
    <slot />
  </button>
</template>
<style src="./ae-button.scss" lang="scss" scoped />
<script src="./ae-button.js" />
