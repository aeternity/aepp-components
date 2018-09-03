<template>
  <transition>
    <div class="ae-backdrop"
         :class="{ [fill]: Boolean(fill), [align]: Boolean(align) }">
      <slot />
    </div>
  </transition>
</template>
<style src="./ae-backdrop.scss" lang="scss" scoped />
<script src="./ae-backdrop.js" />
