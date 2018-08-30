<template>
  <div class="ae-card" :class="{ [fill]: Boolean(fill) }">
    <header class="ae-card-header" v-if="$slots.header">
      <div class="ae-card-header-avatar" v-if="$slots.avatar">
        <!-- @slot Card header Avatar slot, wraps the avatar and text in a div -->
        <slot name="avatar" />
      </div>
      <!-- @slot Card header slot, full width with bottom padding -->
      <slot name="header" />
    </header>
    <main class="ae-card-main" :class="{ [align]: Boolean(align) }">
      <!-- @slot default main slot -->
      <slot />
    </main>
    <footer class="ae-card-footer"  v-if="$slots.footer">
      <!-- @slot Full width slot footer of the card -->
      <slot name="footer" />
    </footer>
  </div>
</template>
<style src="./ae-card.scss" lang="scss" scoped />
<script src="./ae-card.js" />
