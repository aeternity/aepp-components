<template>
  <button class="ae-button"
          type="button"
          :class="{ [fill]: Boolean(fill), [`color-${color}`]: Boolean(color), [face]: Boolean(face), extend }"
          @click="propagate">
    <slot />
  </button>
</template>
<style src="./ae-button.scss" lang="scss" scoped />
<script src="./ae-button.js" />
