<template>
  <div class="ae-card" :class="{ [fill]: Boolean(fill) }">
    <header class="ae-card-header" v-if="$slots.header">
      <!-- @slot Card header slot, full width with bottom padding -->
      <slot name="header" />
    </header>
    <main class="ae-card-main">
      <!-- @slot left side of the main slot -->
      <slot name="left" />
      <!-- @slot default slot -->
      <slot />
      <!-- @slot right side of the main slot -->
      <slot name="right" />
    </main>
    <footer class="ae-card-footer"  v-if="$slots.footer">
      <!-- @slot Full width slot footer of the card -->
      <slot name="footer" />
    </footer>
  </div>
</template>
<style src="./ae-card.scss" lang="scss" scoped />
<script src="./ae-card.js" />
