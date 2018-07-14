<template>
  <div class="ae-toolbar" :class="{ [fill]: Boolean(fill), [align]: Boolean(align), disabled }">
    <!-- @slot Use this slot to add items to the left -->
    <slot name="left" />
    <!-- @slot Default slot / center positioned slot -->
    <slot />
    <!-- @slot Use this slot to add items to the right -->
    <slot name="right" />
  </div>
</template>
<style src="./ae-toolbar.scss" lang="scss" scoped />
<script src="./ae-toolbar.js" />
